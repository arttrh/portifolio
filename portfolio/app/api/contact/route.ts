import { Resend } from "resend";
import { NextResponse } from "next/server";
import { checarRateLimit, identificarOrigem } from "@/lib/rate-limit";

const DESTINO = process.env.CONTACT_TO_EMAIL ?? "arthurlucasx696@gmail.com";
const REMETENTE = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

function escaparHtml(valor: string) {
  return valor
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  const origem = identificarOrigem(req);
  const limite = checarRateLimit(origem);

  if (!limite.permitido) {
    const mensagem =
      limite.motivo === "banido"
        ? "Muitas tentativas nas últimas horas. Esse IP foi bloqueado temporariamente."
        : "Muitas mensagens em pouco tempo. Tente novamente daqui a pouco.";
    return NextResponse.json(
      { success: false, error: mensagem },
      { status: 429, headers: { "Retry-After": String(limite.retryAfterSegundos) } }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY não configurada.");
    return NextResponse.json({ success: false }, { status: 500 });
  }

  try {
    const { name, email, message } = await req.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    // O client só é instanciado aqui: no topo do módulo ele quebra o build
    // em qualquer ambiente sem a chave.
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: REMETENTE,
      to: DESTINO,
      subject: `Novo contato — ${escaparHtml(name)}`,
      replyTo: email,
      html: `
        <h2>Novo contato</h2>
        <p><strong>Nome:</strong> ${escaparHtml(name)}</p>
        <p><strong>Email:</strong> ${escaparHtml(email)}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${escaparHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
