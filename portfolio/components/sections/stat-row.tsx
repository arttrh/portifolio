"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";

function Counter({ value }: { value: string }) {
  const numeric = parseInt(value, 10);
  const isNumeric = !isNaN(numeric) && `${numeric}` === value;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });

  useEffect(() => {
    if (inView && isNumeric) motionValue.set(numeric);
  }, [inView, isNumeric, motionValue, numeric]);

  useEffect(() => {
    if (!ref.current) return;
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toString();
    });
    return unsub;
  }, [spring]);

  if (!isNumeric) return <>{value}</>;
  return <span ref={ref}>0</span>;
}

export function StatRow() {
  return (
    <div className="grid grid-cols-3 gap-4 border-t border-line pt-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
        >
          <div className="font-mono text-2xl font-semibold text-ink sm:text-3xl">
            <Counter value={stat.value} />
          </div>
          <div className="mt-1 text-[12px] leading-snug text-graphite">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
