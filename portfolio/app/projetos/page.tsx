import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ProjectCard } from "@/components/sections/project-card";
import { ProjectNavigation } from "@/components/sections/project-navigation";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Projetos" };

export default function ProjetosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projetos"
        title="Projetos de backend"
        description="Ocorrências escolares, agendamento de aulas e pedidos de cantina. Em cada projeto, explico as regras que precisei implementar e como organizei a solução."
      />
      <section className="mx-auto max-w-content px-6 pb-24">
        <ProjectNavigation active="principais" />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
