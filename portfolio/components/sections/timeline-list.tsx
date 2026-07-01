"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Code2 } from "lucide-react";
import { Hexagon } from "@/components/ui/hexagon";
import type { TimelineEntry } from "@/types";
import { cn } from "@/lib/utils";

const kindIcon = {
  formacao: GraduationCap,
  curso: BookOpen,
  projeto: Code2,
};

const kindLabel = {
  formacao: "Formação",
  curso: "Curso",
  projeto: "Projeto",
};

export function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[27px] top-2 bottom-2 w-px bg-line" />
      <div className="space-y-10">
        {entries.map((entry, i) => {
          const Icon = kindIcon[entry.kind];
          return (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative flex gap-6"
            >
              <div className="relative shrink-0">
                <Hexagon size={56} filled className="text-paper" />
                <Hexagon size={56} className="absolute inset-0 text-ink" strokeWidth={1.5} />
                <Icon size={18} className="absolute inset-0 m-auto text-ink" />
              </div>
              <div className="flex-1 pb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full",
                      entry.kind === "projeto" ? "bg-signal-dim text-signal" : "bg-ink/5 text-graphite"
                    )}
                  >
                    {kindLabel[entry.kind]}
                  </span>
                  <span className="font-mono text-[12px] text-graphite">{entry.period}</span>
                </div>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">{entry.title}</h3>
                <p className="text-[13px] text-graphite">{entry.institution}</p>
                <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-graphite">{entry.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
