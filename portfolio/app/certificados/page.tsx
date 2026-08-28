import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/sections/reveal";
import { Eyebrow } from "@/components/sections/eyebrow";
import { certificates } from "@/lib/data";

export const metadata: Metadata = { title: "Certificados" };

const emissores = ["SENAI", "Alura"];

export default function CertificadosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certificados"
        title="Onde eu aprendi cada coisa"
        description="Os do SENAI são cursos presenciais, com carga horária cheia. Os da Alura são online e têm link de verificação — pode conferir."
      />
      <section className="mx-auto max-w-content space-y-14 px-6 pb-24">
        {emissores.map((emissor) => {
          const itens = certificates.filter((c) => c.issuer.includes(emissor));
          if (itens.length === 0) return null;
          return (
            <div key={emissor}>
              <Reveal>
                <Eyebrow>{emissor}</Eyebrow>
              </Reveal>
              <div className="mt-6 space-y-3">
                {itens.map((cert, i) => (
                  <Reveal key={cert.name} delay={i * 0.08}>
                    <div className="flex flex-col gap-3 rounded-xl2 border border-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="font-display text-[17px] font-semibold text-ink">{cert.name}</h3>
                        <p className="mt-1 text-[13px] text-graphite">{cert.issuer}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-4">
                        <div className="text-right">
                          <p className="font-mono text-[12px] text-signal">{cert.hours}</p>
                          <p className="font-mono text-[11px] text-graphite">{cert.period}</p>
                        </div>
                        {cert.verifyUrl ? (
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-graphite transition-colors hover:border-signal/40 hover:text-ink"
                          >
                            Verificar <ExternalLink size={12} />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
