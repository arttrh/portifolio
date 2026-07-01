import type { Metadata } from "next";
import { Award } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/sections/reveal";
import { Hexagon } from "@/components/ui/hexagon";
import { certificates } from "@/lib/data";

export const metadata: Metadata = { title: "Certificados" };

export default function CertificadosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certificados"
        title="Em construção"
        description="Ainda não tenho certificações formais para mostrar aqui — prefiro deixar isso vazio a preencher com algo que não represente o que eu sei de verdade."
      />
      <section className="mx-auto max-w-content px-6 pb-24">
        {certificates.length === 0 ? (
          <Reveal>
            <div className="flex flex-col items-center gap-4 rounded-xl2 border border-dashed border-line bg-white px-6 py-20 text-center">
              <div className="relative">
                <Hexagon size={64} className="text-line" strokeWidth={1.25} />
                <Award size={22} className="absolute inset-0 m-auto text-graphite" />
              </div>
              <p className="max-w-sm text-[14px] leading-relaxed text-graphite">
                Assim que eu concluir uma certificação relevante — provavelmente ligada a Java, Spring ou arquitetura
                de sistemas — ela aparece aqui, com data e link de verificação.
              </p>
            </div>
          </Reveal>
        ) : null}
      </section>
    </>
  );
}
