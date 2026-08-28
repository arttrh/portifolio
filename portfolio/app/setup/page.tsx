import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/sections/reveal";
import { Eyebrow } from "@/components/sections/eyebrow";
import { setup } from "@/lib/data";
import type { SetupItem } from "@/types";

export const metadata: Metadata = { title: "Setup" };

const categorias: SetupItem["category"][] = ["Sistema", "Editor", "Terminal", "Desenvolvimento"];

export default function SetupPage() {
  return (
    <>
      <PageHeader
        eyebrow="Setup"
        title="Onde eu trabalho"
        description="Máquina, editor e as ferramentas que abro todo dia. Estou montando um repositório com os dotfiles — quando estiver de pé, o link aparece aqui."
      />
      <section className="mx-auto max-w-content space-y-14 px-6 pb-24">
        {categorias.map((categoria) => {
          const itens = setup.filter((s) => s.category === categoria);
          if (itens.length === 0) return null;
          return (
            <div key={categoria}>
              <Reveal>
                <Eyebrow>{categoria}</Eyebrow>
              </Reveal>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {itens.map((item, i) => (
                  <Reveal key={item.name} delay={i * 0.08}>
                    <div className="h-full rounded-xl2 border border-line bg-white p-6">
                      <h3 className="font-display text-[16px] font-semibold text-ink">{item.name}</h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-graphite">{item.description}</p>
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
