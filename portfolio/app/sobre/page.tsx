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
        title="Rigor técnico, mesmo sem crachá ainda"
        description="Minha trajetória até aqui é curta em tempo e densa em prática — cada projeto foi uma desculpa pra fazer certo o que normalmente se aprende errando em produção."
      />

      <section className="mx-auto max-w-content px-6 pb-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
          <Reveal className="space-y-6 text-[15px] leading-relaxed text-graphite sm:text-base">
            <p>
              Comecei no técnico de Análise e Desenvolvimento de Sistemas ainda no ensino médio, onde tive o primeiro
              contato estruturado com lógica, banco de dados e desenvolvimento web. Foi ali que percebi que não
              queria só fazer código funcionar — queria entender <em className="text-ink not-italic font-medium">por que</em> uma
              arquitetura funciona melhor que outra.
            </p>
            <p>
              Isso me levou direto para Java e Spring Boot, e de lá para um interesse específico: arquitetura
              hexagonal. A ideia de isolar completamente as regras de negócio de qualquer detalhe de infraestrutura —
              banco, framework, protocolo de transporte — mudou como eu penso cada projeto que começo. Não é sobre
              seguir um padrão por seguir; é sobre construir sistemas que sobrevivem a mudança de contexto.
            </p>
            <p>
              Meus dois projetos principais nasceram dessa obsessão. No Sistema de Ocorrência Escolar, apliquei ports
              & adapters de forma completa, com rate limiting e versionamento de banco via Flyway. No Auto Escola,
              fui além do CRUD e introduzi mensageria assíncrona com RabbitMQ para desacoplar efeitos colaterais do
              fluxo principal — meu primeiro contato real com sistemas distribuídos, ainda que em escala pequena.
            </p>
            <p>
              Hoje, meu objetivo é simples: conseguir um primeiro estágio ou posição júnior onde eu possa aplicar
              esse mesmo rigor em escala real, com pessoas mais experientes revisando minhas decisões. Enquanto isso
              não acontece, continuo estudando — sistemas distribuídos, Kafka, Kubernetes — e construindo projetos
              que provem, com código, o que eu ainda não posso provar com tempo de empresa.
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
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">Como cheguei até aqui</h2>
          </Reveal>
          <div className="mt-12">
            <TimelineList entries={timeline} />
          </div>
        </div>
      </section>
    </>
  );
}
