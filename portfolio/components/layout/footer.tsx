import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Hexagon } from "@/components/ui/hexagon";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 text-ink">
          <Hexagon size={18} filled />
          <span className="font-display text-sm font-semibold">{profile.name}</span>
          <span className="font-mono text-xs text-graphite">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-4 text-graphite">
          <Link href={profile.github} target="_blank" aria-label="GitHub" className="hover:text-ink transition-colors">
            <Github size={18} />
          </Link>
          <Link href={profile.linkedin} target="_blank" aria-label="LinkedIn" className="hover:text-ink transition-colors">
            <Linkedin size={18} />
          </Link>
          <Link href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-ink transition-colors">
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
