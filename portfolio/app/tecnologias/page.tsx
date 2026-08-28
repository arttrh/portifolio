import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/sections/reveal";
import { Eyebrow } from "@/components/sections/eyebrow";
import { TechCard } from "@/components/sections/tech-card";
import { technologies } from "@/lib/data";
import type { Technology } from "@/types";

export const metadata: Metadata = { title: "Tecnologias" };

const categories: Technology["category"][] = [
  "Backend",
  "Banco de Dados",
  "Mensageria",
  "DevOps",
  "Arquitetura",
  "Ferramentas",
];

export default function TecnologiasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tecnologias"
        title="O que eu uso, e o quanto eu uso"
        description="Separei o que já uso no dia a dia do que ainda estou aprendendo. Se está marcado como aprendendo, é porque ainda não coloquei em projeto nenhum — prefiro você saber disso agora do que descobrir na entrevista."
      />
      <section className="mx-auto max-w-content space-y-16 px-6 pb-24">
        {categories.map((category) => {
          const items = technologies.filter((t) => t.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category}>
              <Reveal>
                <Eyebrow>{category}</Eyebrow>
              </Reveal>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((tech, i) => (
                  <TechCard key={tech.name} tech={tech} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
