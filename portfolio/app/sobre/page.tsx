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
        title="Como eu vim parar no backend"
        description="Comecei no técnico, passei pelo SENAI e desde então construo API atrás de API pra entender como as coisas quebram."
      />

      <section className="mx-auto max-w-content px-6 pb-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
          <Reveal className="space-y-6 text-[15px] leading-relaxed text-graphite sm:text-base">
            <p>
              Entrei no técnico de Análise e Desenvolvimento de Sistemas junto com o ensino médio, sem ideia nenhuma
              do que era programar. O primeiro ano foi lógica e banco de dados; o resto foi eu descobrindo que a
              parte que me prende não é fazer funcionar, é decidir{" "}
              <em className="text-ink not-italic font-medium">como</em> vai funcionar.
            </p>
            <p>
              Java e Spring Boot vieram naturalmente, e com eles o assunto que mais me pegou: o que acontece com um
              projeto conforme ele cresce. Aprendi isso do jeito chato — precisei mudar uma coisa de lugar num
              projeto antigo e acabei mexendo em quinze arquivos. Desde então penso duas vezes antes de deixar uma
              regra de negócio depender de framework, mas não é dogma: cada projeto pede um nível diferente disso.
            </p>
            <p>
              Dá pra ver a diferença nos três que estão aqui. Na Cantina eu ainda escrevia tudo em camadas, com
              service gordo e Thymeleaf, e funciona bem. Na Auto Escola quebrei as regras de agendamento em sete
              validadores separados e joguei o e-mail numa fila, porque cadastro de aula não pode depender do humor
              do servidor SMTP. No Sistema de Ocorrência Escolar fui mais longe e escrevi testes que fiscalizam a
              própria estrutura do código: se alguém importar Spring onde não devia, o build cai.
            </p>
            <p>
              O que eu quero agora é entrar num time. Não porque falta certificado, mas porque tem um limite no que
              dá pra aprender sozinho: ninguém revisa meu PR, ninguém me diz que aquela decisão vai doer daqui a
              seis meses. Enquanto isso não vem, sigo estudando o que ainda não usei — Kafka, Kubernetes — e
              construindo coisa que dá pra abrir e ler.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="space-y-6">
            <div className="rounded-xl2 border border-line bg-white p-6">
              <Eyebrow>Idiomas</Eyebrow>
              <ul className="mt-4 space-y-3">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <p className="font-display text-sm font-semibold text-ink">{lang.name}</p>
                    <p className="text-[13px] text-graphite">{lang.level}</p>
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
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">Curso por curso, projeto por projeto</h2>
          </Reveal>
          <div className="mt-12">
            <TimelineList entries={timeline} />
          </div>
        </div>
      </section>
    </>
  );
}
