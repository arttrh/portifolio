"use client";

import { motion } from "framer-motion";
import { HexIcon } from "@/components/ui/hexagon";
import type { Technology } from "@/types";

const levelWidth: Record<Technology["level"], string> = {
  Aprendendo: "w-1/3",
  Intermediário: "w-2/3",
  Confortável: "w-full",
};

export function TechCard({ tech, index }: { tech: Technology; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -3 }}
      className="rounded-xl2 border border-line bg-white p-5 transition-shadow hover:shadow-[0_16px_40px_-20px_rgba(20,21,26,0.2)]"
    >
      <div className="flex items-start gap-3">
        <HexIcon className="h-12 w-12 shrink-0">
          <span className="font-mono text-[11px] font-semibold text-ink">
            {tech.name
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </span>
        </HexIcon>
        <div className="min-w-0">
          <h4 className="truncate font-display text-[15px] font-semibold text-ink">{tech.name}</h4>
          {tech.since && <p className="font-mono text-[11px] text-graphite">desde {tech.since}</p>}
        </div>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-graphite">{tech.description}</p>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wide text-graphite">{tech.level}</span>
        </div>
        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-line">
          <div className={`h-full rounded-full bg-signal ${levelWidth[tech.level]}`} />
        </div>
      </div>
    </motion.div>
  );
}
