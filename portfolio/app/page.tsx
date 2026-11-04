import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Reveal } from "@/components/sections/reveal";
import { Eyebrow } from "@/components/sections/eyebrow";
import { ProjectCard } from "@/components/sections/project-card";
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
                Meus projetos
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

      {/* Sobre mim */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-content px-6 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="order-2 lg:order-1 flex flex-col gap-6">
              <div>
                <Eyebrow>Sobre mim</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Estudos e projetos
                </h2>
              </div>
              <p className="text-base leading-relaxed text-graphite">
                Estudei Análise e Desenvolvimento de Sistemas e fiz cursos de backend no SENAI.
                Hoje estudo Java e Spring Boot e aplico o que aprendo nos projetos deste portfólio.
              </p>
              <p className="text-base leading-relaxed text-graphite">
                Essa foto é do Parque do Carmo, em São Paulo, na época das cerejeiras.
              </p>
              <div>
                <Link href="/contato" className={buttonVariants({ variant: "outline" })}>
                  Falar comigo <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="order-1 lg:order-2 justify-self-center lg:justify-self-end">
              <div className="relative aspect-[4/5] w-72 overflow-hidden rounded-xl2 border border-line sm:w-80 lg:w-[22rem]">
                <Image
                  src="/cerejeira.jpg"
                  alt="Cerejeira florida, foto pessoal"
                  fill
                  sizes="(max-width: 640px) 18rem, (max-width: 1024px) 20rem, 22rem"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-content px-6 py-24">
          <Reveal>
            <Eyebrow>Fora do código</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Olimpíadas estudantis
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
