"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/sections/eyebrow";
import Image from "next/image";
import { StatRow } from "@/components/sections/stat-row";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-content items-center gap-16 px-6 pt-40 pb-24 sm:pt-48 sm:pb-28 lg:grid-cols-[1.05fr_1fr]">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.div variants={item} className="flex items-center gap-3">
            <Eyebrow>Backend · São Paulo</Eyebrow>
          </motion.div>

          <motion.h1 variants={item} className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-3 font-mono text-sm text-signal">
            {profile.focus}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-lg text-[15px] leading-relaxed text-graphite sm:text-base">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-5 flex items-center gap-1.5 text-[13px] text-graphite">
            <MapPin size={14} /> {profile.location}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/projetos" className={buttonVariants({ variant: "primary" })}>
              Ver Projetos <ArrowRight size={15} />
            </Link>
            <Link href="/contato" className={buttonVariants({ variant: "outline" })}>
              Contato
            </Link>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-12">
            <StatRow />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="justify-self-center lg:justify-self-end"
        >
          <div className="relative aspect-square w-64 overflow-hidden rounded-xl2 border border-line sm:w-80 lg:w-[22rem]">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 640px) 16rem, (max-width: 1024px) 20rem, 22rem"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
