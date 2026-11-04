import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/sections/reveal";
import { TimelineList } from "@/components/sections/timeline-list";
import { Eyebrow } from "@/components/sections/eyebrow";
import { timeline, languages } from "@/lib/data";

export const metadata: Metadata = { title: "Sobre" };

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre"
        title="Meu caminho no backend"
        description="Comecei no curso técnico de Análise e Desenvolvimento de Sistemas e continuei os estudos de backend no SENAI."
      />

      <section className="mx-auto max-w-content px-6 pb-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
          <Reveal className="space-y-6 text-base leading-relaxed text-graphite">
            <p>
              Cursei Análise e Desenvolvimento de Sistemas junto com o ensino médio na Escola Yervant Kissajikian.
              Depois, fiz os cursos de Desenvolvedor Back-end e de API REST com Spring Boot no SENAI.
            </p>
            <p>
              Uso os projetos para praticar o que estudo. Na Cantina SENAI, trabalhei com pedidos e estoque:
              conferir o saldo antes de aceitar uma compra, reservar os itens e devolver as quantidades quando
              um pedido é cancelado.
            </p>
            <p>
              Na Auto Escola, separei as regras de agendamento e o envio de e-mail. No Sistema de Ocorrência
              Escolar, organizei as regras de negócio fora dos detalhes de banco e HTTP, com testes que verificam
              as dependências entre essas partes. O código dos três projetos está disponível no GitHub.
            </p>
            <p>
              Estou procurando um estágio ou uma primeira vaga júnior em backend. Quero trabalhar com outras
              pessoas, participar das revisões de código e aprender com os problemas de uma aplicação em uso.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="space-y-6">
            <div className="rounded-xl2 border border-line bg-white p-6">
              <Eyebrow>Idiomas</Eyebrow>
              <ul className="mt-4 space-y-3">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <p className="font-display text-sm font-semibold text-ink">{lang.name}</p>
                    <p className="text-base leading-relaxed text-graphite">{lang.level}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-grid">
        <div className="mx-auto max-w-content px-6 py-20">
          <Reveal>
            <Eyebrow>Linha do tempo</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">Formação e projetos</h2>
          </Reveal>
          <div className="mt-12">
            <TimelineList entries={timeline} />
          </div>
        </div>
      </section>
    </>
  );
}
