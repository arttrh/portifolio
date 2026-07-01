"use client";

import { motion } from "framer-motion";

const useCases = ["Autenticar", "Registrar", "Consultar", "Notificar", "Validar", "Auditar"];
const adapters = ["REST", "JWT", "PostgreSQL", "RabbitMQ", "Flyway", "Docker", "SMTP", "MySQL"];

function ringPosition(index: number, total: number, radius: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

function HexNode({
  x,
  y,
  size,
  label,
  delay,
  variant = "outer",
}: {
  x: number;
  y: number;
  size: number;
  label: string;
  delay: number;
  variant?: "core" | "case" | "outer";
}) {
  const styles = {
    core: "fill-ink stroke-ink text-paper",
    case: "fill-signal-dim stroke-signal text-signal",
    outer: "fill-white stroke-line text-graphite",
  } as const;

  const h = size * 0.866;
  const points = [
    [size * 0.25, 0],
    [size * 0.75, 0],
    [size, h * 0.5],
    [size * 0.75, h],
    [size * 0.25, h],
    [0, h * 0.5],
  ]
    .map((p) => p.join(","))
    .join(" ");

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      transform={`translate(${x - size / 2}, ${y - h / 2})`}
    >
      <polygon points={points} strokeWidth={1.25} className={styles[variant]} />
      <text
        x={size / 2}
        y={h / 2}
        textAnchor="middle"
        dominantBaseline="central"
        className={`fill-current font-mono ${variant === "core" ? "text-[9px] font-medium" : "text-[7px]"}`}
      >
        {label}
      </text>
    </motion.g>
  );
}

export function HexDiagram() {
  const vb = 460;
  const cx = vb / 2;
  const cy = vb / 2;

  return (
    <div className="relative aspect-square w-full max-w-[460px] mx-auto">
      <svg viewBox={`0 0 ${vb} ${vb}`} className="h-full w-full">
        {/* connecting lines: core -> use cases */}
        {useCases.map((_, i) => {
          const p = ringPosition(i, useCases.length, 108);
          return (
            <motion.line
              key={`core-line-${i}`}
              x1={cx}
              y1={cy}
              x2={cx + p.x}
              y2={cy + p.y}
              stroke="currentColor"
              strokeWidth={1}
              className="text-line"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
            />
          );
        })}
        {/* connecting lines: use cases -> nearest adapters */}
        {adapters.map((_, i) => {
          const p = ringPosition(i, adapters.length, 108);
          const outer = ringPosition(i, adapters.length, 196);
          return (
            <motion.line
              key={`adapter-line-${i}`}
              x1={cx + p.x}
              y1={cy + p.y}
              x2={cx + outer.x}
              y2={cy + outer.y}
              stroke="currentColor"
              strokeWidth={1}
              className="text-line"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.04, duration: 0.5 }}
            />
          );
        })}

        {/* outer ring: adapters — slow independent rotation */}
        <motion.g
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          {adapters.map((label, i) => {
            const p = ringPosition(i, adapters.length, 196);
            return (
              <motion.g
                key={label}
                style={{ transformOrigin: `${cx + p.x}px ${cy + p.y}px` }}
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              >
                <HexNode x={cx + p.x} y={cy + p.y} size={54} label={label} delay={0.6 + i * 0.05} variant="outer" />
              </motion.g>
            );
          })}
        </motion.g>

        {/* middle ring: use cases */}
        {useCases.map((label, i) => {
          const p = ringPosition(i, useCases.length, 108);
          return (
            <HexNode key={label} x={cx + p.x} y={cy + p.y} size={62} label={label} delay={0.3 + i * 0.05} variant="case" />
          );
        })}

        {/* core: domain */}
        <HexNode x={cx} y={cy} size={92} label="DOMAIN" delay={0.1} variant="core" />
      </svg>

      <div className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[11px] text-graphite/70">
        ports &amp; adapters
      </div>
    </div>
  );
}
