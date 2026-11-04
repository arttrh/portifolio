import type { Metadata } from "next";
import { Terminal } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/sections/reveal";
import { Hexagon } from "@/components/ui/hexagon";

export const metadata: Metadata = { title: "Setup" };

export default function SetupPage() {
  return (
    <>
      <PageHeader
        eyebrow="Setup"
        title="Meu ambiente"
        description="Ainda não publiquei as configurações do meu ambiente de desenvolvimento."
      />
      <section className="mx-auto max-w-content px-6 pb-24">
        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-xl2 border border-dashed border-line bg-white px-6 py-20 text-center">
            <div className="relative">
              <Hexagon size={64} className="text-line" strokeWidth={1.25} />
              <Terminal size={22} className="absolute inset-0 m-auto text-graphite" />
            </div>
            <p className="max-w-sm text-base leading-relaxed text-graphite">
              Quando o repositório de dotfiles estiver disponível, vou deixar o link aqui.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
