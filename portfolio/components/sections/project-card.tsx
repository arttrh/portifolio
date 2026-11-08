"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Hexagon } from "@/components/ui/hexagon";
import type { Project } from "@/types";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      id={project.slug}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group scroll-mt-28 rounded-xl2 border border-line bg-white p-8 transition-shadow duration-300 hover:shadow-[0_24px_60px_-24px_rgba(20,21,26,0.18)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Hexagon size={40} className="text-signal" strokeWidth={1.5} />
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
            <p className="font-mono text-[12px] text-graphite">{project.period}</p>
          </div>
        </div>
      </div>

      <p className="mt-5 text-base leading-relaxed text-graphite">{project.description}</p>

      <div className="mt-5 rounded-lg bg-signal-dim/60 px-4 py-3">
        <p className="font-mono text-[11px] uppercase tracking-wide text-signal">Como organizei o código</p>
        <p className="mt-1 text-base leading-relaxed text-ink">{project.architecture}</p>
      </div>

      <div className="mt-5">
        <p className="font-mono text-[11px] uppercase tracking-wide text-graphite">Problemas e soluções</p>
        <ul className="mt-2 space-y-1.5">
          {project.challenges.map((c) => (
            <li key={c} className="flex gap-2 text-base leading-relaxed text-graphite">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mt-6 flex gap-2 border-t border-line pt-5">
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "sm" })}>
          <Github size={14} /> GitHub
        </a>
        {project.demoUrl ? (
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Acessar projeto <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className="flex items-center px-4 text-[12px] font-mono text-graphite/60">Ainda não publicado</span>
        )}
      </div>
    </motion.div>
  );
}
