/**
 * Validação de e-mail em duas camadas: formato e existência do domínio.
 *
 * O que isso NÃO garante: que a caixa específica (ex.: fulano@gmail.com)
 * existe de verdade. Isso exigiria um handshake SMTP real contra o servidor
 * de destino, e a maioria dos provedores hoje não responde isso de forma
 * confiável — Gmail e outros aceitam o RCPT TO de qualquer caixa e só
 * decidem depois (greylisting, catch-all, etc.), então o handshake mentiria
 * "existe" boa parte do tempo. O que isso garante: que o domínio depois do
 * @ existe e está configurado para receber e-mail — pega erro de digitação
 * (gmial.com) e domínio inventado, que é a maior parte do lixo que chega
 * num formulário de contato.
 */

import { promises as dns } from "dns";

// Regex do WHATWG (a mesma que o <input type="email"> do navegador usa) —
// suficiente pra barrar formato malformado sem rejeitar e-mail válido.
const FORMATO_EMAIL =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function formatoValido(email: string): boolean {
  return FORMATO_EMAIL.test(email);
}

/**
 * Confirma que o domínio tem MX configurado.
 *
 * A primeira versão também caía pra A/AAAA quando não achava MX — a RFC
 * 5321 permite essa entrega implícita. Na prática isso deixava passar
 * justamente o caso que mais importa aqui: testei com "gmial.com", o typo
 * clássico de gmail.com, e ele não tem MX nenhum, mas tem um registro A
 * (uma página de estacionamento de domínio) — então o fallback aprovava
 * como se recebesse e-mail. Só MX é mais estrito, mas é o que de fato pega
 * erro de digitação, que é o problema que essa função existe pra resolver.
 */
export async function dominioRecebeEmail(email: string): Promise<boolean> {
  const dominio = email.split("@")[1];
  if (!dominio) return false;

  try {
    const registrosMx = await dns.resolveMx(dominio);
    return registrosMx.length > 0;
  } catch {
    return false;
  }
}
