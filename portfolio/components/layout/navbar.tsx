"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, User, FolderGit2, Cpu, GraduationCap, Award, Mail } from "lucide-react";
import { Hexagon } from "@/components/ui/hexagon";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

const navItems = [
  { href: "/", label: "Início", icon: Home },
  { href: "/sobre", label: "Sobre", icon: User },
  { href: "/projetos", label: "Projetos", icon: FolderGit2 },
  { href: "/tecnologias", label: "Tecnologias", icon: Cpu },
  { href: "/experiencia", label: "Experiência", icon: GraduationCap },
  { href: "/certificados", label: "Certificados", icon: Award },
  { href: "/contato", label: "Contato", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const { hidden, scrolled } = useScrollDirection();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className={cn(
          "flex items-center gap-1 rounded-full border border-line bg-white/80 px-2 py-2 backdrop-blur-md transition-shadow duration-300",
          scrolled && "shadow-[0_8px_30px_-12px_rgba(20,21,26,0.15)]"
        )}
      >
        <Link href="/" className="flex items-center gap-2 pl-2 pr-3 text-ink" aria-label="Início">
          <Hexagon size={22} filled className="text-ink" />
          <span className="hidden font-display text-sm font-semibold sm:inline">AL</span>
        </Link>
        <div className="h-5 w-px bg-line" />
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-medium text-graphite transition-colors hover:text-ink",
                  active && "text-ink"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-ink/5"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon size={14} className="relative z-10" />
                <span className="relative z-10 hidden md:inline">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}
