import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/sections/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { profile } from "@/lib/data";

export const metadata: Metadata = { title: "Contato" };

const links = [
  { label: "E-mail", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", value: profile.githubHandle, href: profile.github, icon: Github },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, icon: Linkedin },
];

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar"
        description="Estou procurando estágio ou uma vaga júnior em backend. Pode me chamar para conversar sobre uma oportunidade ou sobre os projetos daqui."
      />
      <section className="mx-auto max-w-content px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="space-y-3">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl2 border border-line bg-white p-5 transition-colors hover:border-signal/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-signal-dim text-signal">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-wide text-graphite">{link.label}</p>
                    <p className="break-words font-display text-base font-medium text-ink">{link.value}</p>
                  </div>
                </a>
              );
            })}
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
