import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Projetos" };

export default function ProjetosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projetos"
        title="Cada projeto, uma decisão de arquitetura"
        description="Sem experiência profissional ainda, meus projetos pessoais são onde aplico — e testo — o mesmo rigor que eu levaria para um time de verdade."
      />
      <section className="mx-auto max-w-content px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
