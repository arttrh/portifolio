import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/sections/eyebrow";
import { ProjectNavigation } from "@/components/sections/project-navigation";
import { buttonVariants } from "@/components/ui/button";
import { parallelProjects } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Projetos paralelos e estudos" };

export default function ProjetosParalelosPage() {
  return (
    <>
      <header className="mx-auto max-w-content px-6 pt-36 pb-12 sm:pt-40">
        <Eyebrow>Projetos</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Paralelos e estudos</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-graphite">
          Projetos menores para praticar consumo de APIs, programação reativa e mensageria.
          Aqui também ficam os trabalhos que ainda estou desenvolvendo.
        </p>
      </header>
      <section className="mx-auto max-w-content px-6 pb-24">
        <ProjectNavigation active="paralelos" />
        <p className="mb-12 max-w-2xl text-base leading-relaxed text-graphite">
          A Cantina SENAI, meu projeto de curso, está entre os{" "}
          <Link href="/projetos#cantina-senai" className="text-ink underline underline-offset-4">projetos em destaque</Link>.
        </p>
        <div className="space-y-12">
          {parallelProjects.map((project) => (
            <article key={project.slug} aria-labelledby={project.slug} className="grid gap-6 sm:grid-cols-[1fr_auto]">
              <div className="max-w-prose">
                <p className="mb-2 text-base font-medium text-signal">{project.status}</p>
                <h2 id={project.slug} className="font-display text-2xl font-semibold text-ink">{project.name}</h2>
                <p className="mt-3 text-base leading-relaxed text-ink">{project.description}</p>
                <p className="mt-3 text-base leading-relaxed text-graphite">{project.details}</p>
                {project.pending && <p className="mt-3 text-base leading-relaxed text-ink">[PENDENTE] {project.pending}</p>}
                <p className="mt-4 text-base text-graphite">{project.stack.join(" · ")}</p>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver código de ${project.name} no GitHub`}
                className={cn(buttonVariants({ variant: "outline" }), "self-start justify-self-start text-base")}
              >
                Ver código ↗
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
