import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/sections/reveal";
import { TimelineList } from "@/components/sections/timeline-list";
import { Eyebrow } from "@/components/sections/eyebrow";
import { timeline, languages } from "@/lib/data";

export const metadata: Metadata = { title: "Sobre" };

const technologyUsage = [
  {
    name: "Java e Spring",
    description: "São a base dos meus backends. Uso para estruturar as aplicações e organizar as regras de negócio.",
  },
  {
    name: "Spring Security, JWT e Spring Cloud Gateway",
    description: "Autenticação, permissões por perfil de usuário e controle das requisições que chegam às aplicações.",
  },
  {
    name: "JPA/Hibernate, MySQL e PostgreSQL",
    description: "Modelagem dos dados, relacionamentos entre entidades e persistência nos bancos.",
  },
  {
    name: "RabbitMQ e AWS SNS",
    description: "Processamento assíncrono, com novas tentativas de entrega e filas de mensagens não processadas (DLQ) para tratar falhas.",
  },
  {
    name: "Redis",
    description: "Cache de consultas frequentes para evitar acessos repetidos ao banco de dados.",
  },
  {
    name: "Testcontainers",
    description: "Testes de integração com banco de dados e broker de mensagens reais, executados em contêineres.",
  },
  {
    name: "Docker",
    description: "Empacotamento das aplicações e execução dos serviços de apoio no ambiente local.",
  },
  {
    name: "Kubernetes",
    description: "Deploy e organização dos contêineres das aplicações e de seus serviços.",
  },
  {
    name: "Loki e Grafana",
    description: "Centralização dos logs e acompanhamento do comportamento das aplicações em dashboards.",
  },
  {
    name: "Git, GitHub e Maven",
    description: "Versionamento do código, colaboração nos repositórios, gerenciamento de dependências e build.",
  },
  {
    name: "Orca",
    description: "Coordenação de múltiplos agentes de IA nas tarefas de desenvolvimento, com revisão das alterações antes de integrá-las ao código.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre"
        title="Sobre mim"
        description="Sou o Arthur, Software Engineer em São Paulo."
      />

      <section className="mx-auto max-w-content px-6 pb-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
          <Reveal className="space-y-6 text-base leading-relaxed text-graphite">
            <p>
              Minha relação com tecnologia começou criando mods de Minecraft em Java, com blocos e mobs
              personalizados. A curiosidade de entender como aquilo funcionava me levou a estudar programação
              e me aprofundar no desenvolvimento de software.
            </p>
            <p>
              Nos meus projetos, uso Java e Spring para trabalhar com autenticação, autorização, regras de
              negócio, mensageria, cache e persistência de dados. Empacoto as aplicações com Docker, faço o
              deploy com Kubernetes e acompanho seu comportamento com Loki e Grafana.
            </p>
            <p>
              Também uso o Orca para coordenar múltiplos agentes de IA durante o desenvolvimento.
              Reviso o código gerado e as alterações antes de integrá-los aos projetos.
            </p>
            <p>
              Estou em busca da minha primeira oportunidade de estágio na área.
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

      <section aria-labelledby="technology-usage-heading" className="mx-auto max-w-content px-6 pb-20">
        <h2 id="technology-usage-heading" className="font-display text-3xl font-semibold tracking-tight text-ink">Onde uso cada tecnologia</h2>
        <dl className="mt-10 space-y-8">
          {technologyUsage.map((technology) => (
            <div key={technology.name} className="grid gap-2 sm:grid-cols-[1fr_1.5fr] sm:gap-12">
              <dt className="font-display text-xl font-semibold text-ink">{technology.name}</dt>
              <dd className="max-w-prose text-base leading-relaxed text-graphite">{technology.description}</dd>
            </div>
          ))}
        </dl>
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
