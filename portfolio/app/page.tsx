import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Reveal } from "@/components/sections/reveal";
import { Eyebrow } from "@/components/sections/eyebrow";
import { ProjectCard } from "@/components/sections/project-card";
import { PhotoBanner } from "@/components/sections/photo-banner";
import { buttonVariants } from "@/components/ui/button";
import { projects, achievements } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-t border-line bg-grid">
        <div className="mx-auto max-w-content px-6 py-24">
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Projetos</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                O que eu construí até agora
              </h2>
            </div>
            <Link href="/projetos" className={buttonVariants({ variant: "outline" })}>
              Ver todos <ArrowRight size={15} />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <PhotoBanner src="/cerejeira.jpg" alt="Cerejeira florida, foto pessoal" />

      <section className="border-t border-line">
        <div className="mx-auto max-w-content px-6 py-24">
          <Reveal>
            <Eyebrow>Fora do código</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Antes de programar, eu competia
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {achievements.map((a, i) => (
              <Reveal key={`${a.title}-${i}`} delay={i * 0.1}>
                <div className="h-full rounded-xl2 border border-line bg-white p-6">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-signal">{a.year}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">{a.title}</h3>
                  <p className="mt-1 text-[13px] text-graphite">{a.issuer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
