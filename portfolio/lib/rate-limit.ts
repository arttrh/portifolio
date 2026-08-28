/**
 * Rate limit + ban por IP, no estilo fail2ban, escopado só ao endpoint de
 * e-mail (app/api/contact/route.ts).
 *
 * Guarda estado em memória do processo — sem Redis, sem serviço externo.
 * Isso é suficiente pra um formulário de contato de portfólio pessoal, mas
 * tem uma limitação real: numa hospedagem serverless com várias instâncias
 * concorrentes, cada instância tem seu próprio contador, então o limite
 * efetivo é "por instância", não global. Reseta a cada deploy/cold start.
 * Se um dia o tráfego justificar um limite compartilhado de verdade, dá pra
 * trocar o storage por Redis (o pacote @upstash/ratelimit já está no
 * package.json) sem mudar a assinatura de checarRateLimit.
 */

type Registro = {
  /** Horário (ms) de cada envio dentro da janela de throttle. */
  timestamps: number[];
  /** Horário (ms) de cada vez que essa origem estourou o throttle. */
  violacoes: number[];
  /** Se banido, até quando (ms). */
  banidoAte?: number;
};

const JANELA_THROTTLE_MS = 10 * 60 * 1000; // 10 minutos
const LIMITE_THROTTLE = 5; // no máx. 5 envios por janela

const JANELA_VIOLACOES_MS = 60 * 60 * 1000; // 1 hora
const LIMITE_VIOLACOES = 3; // 3 estouros de throttle em 1h vira ban

const DURACAO_BAN_MS = 24 * 60 * 60 * 1000; // 24 horas

const registros = new Map<string, Registro>();

/** Evita crescimento sem limite: descarta origens sem atividade recente e sem ban ativo. */
function limpar(agora: number) {
  for (const [chave, registro] of registros) {
    const banido = registro.banidoAte !== undefined && registro.banidoAte > agora;
    const temAtividade =
      registro.timestamps.some((t) => agora - t < JANELA_THROTTLE_MS) ||
      registro.violacoes.some((t) => agora - t < JANELA_VIOLACOES_MS);
    if (!banido && !temAtividade) registros.delete(chave);
  }
}

export type ResultadoRateLimit =
  | { permitido: true }
  | { permitido: false; motivo: "banido" | "throttle"; retryAfterSegundos: number };

export function checarRateLimit(identificador: string): ResultadoRateLimit {
  const agora = Date.now();
  if (registros.size > 5000) limpar(agora);

  const registro = registros.get(identificador) ?? { timestamps: [], violacoes: [] };

  if (registro.banidoAte !== undefined && registro.banidoAte > agora) {
    return {
      permitido: false,
      motivo: "banido",
      retryAfterSegundos: Math.ceil((registro.banidoAte - agora) / 1000),
    };
  }

  registro.timestamps = registro.timestamps.filter((t) => agora - t < JANELA_THROTTLE_MS);
  registro.violacoes = registro.violacoes.filter((t) => agora - t < JANELA_VIOLACOES_MS);

  if (registro.timestamps.length >= LIMITE_THROTTLE) {
    registro.violacoes.push(agora);

    if (registro.violacoes.length >= LIMITE_VIOLACOES) {
      registro.banidoAte = agora + DURACAO_BAN_MS;
      registro.violacoes = [];
      registros.set(identificador, registro);
      return { permitido: false, motivo: "banido", retryAfterSegundos: Math.ceil(DURACAO_BAN_MS / 1000) };
    }

    registros.set(identificador, registro);
    const maisAntigo = registro.timestamps[0];
    return {
      permitido: false,
      motivo: "throttle",
      retryAfterSegundos: Math.max(1, Math.ceil((maisAntigo + JANELA_THROTTLE_MS - agora) / 1000)),
    };
  }

  registro.timestamps.push(agora);
  registros.set(identificador, registro);
  return { permitido: true };
}

/** IP do cliente a partir dos headers de proxy — funciona atrás da Vercel e da maioria dos proxies. */
export function identificarOrigem(req: Request): string {
  const encaminhado = req.headers.get("x-forwarded-for");
  if (encaminhado) return encaminhado.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "desconhecido";
}
