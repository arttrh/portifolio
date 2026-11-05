import type { Metadata } from "next";
import { Eyebrow } from "@/components/sections/eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { setup } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Setup" };

export default function SetupPage() {
  return (
    <>
      <header className="mx-auto max-w-content px-6 pt-36 pb-12 sm:pt-40">
        <Eyebrow>Setup</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Meu ambiente de trabalho</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-graphite">
          Minha configuração de Linux, terminal e editor para desenvolver em Java.
        </p>
      </header>

      <section aria-labelledby="ambiente-heading" className="mx-auto grid max-w-content items-center gap-10 px-6 pb-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <h2 id="ambiente-heading" className="max-w-md font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Um ambiente que fui ajustando
          </h2>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-graphite">
            No desktop, uso o Niri para organizar as janelas. No terminal, Kitty com Zsh e Starship.
            O Neovim concentra a edição de código e as ferramentas Java.
          </p>
          <a
            href="https://github.com/arttrh/Config-Neovim"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "mt-8 h-auto min-h-11 whitespace-normal py-3 text-base")}
          >
            Configuração pública do Neovim ↗
          </a>
        </div>

        <figure className="min-w-0 rounded-xl2 bg-ink p-5 text-paper sm:p-8">
          <figcaption className="font-display text-base font-medium">init.lua · Neovim</figcaption>
          <pre className="my-8 overflow-x-auto font-mono text-base leading-loose"><code>{`vim.opt.number = true
vim.opt.mouse = 'a'
vim.opt.ignorecase = true
vim.opt.smartcase = true
vim.opt.termguicolors = true
vim.opt.signcolumn = 'yes'`}</code></pre>
          <p className="text-base leading-relaxed text-paper/80">Trecho real da configuração pública do editor.</p>
        </figure>
      </section>

      <section aria-labelledby="componentes-heading" className="bg-white">
        <div className="mx-auto max-w-content px-6 py-16">
          <div className="grid gap-4 sm:grid-cols-2 sm:items-end sm:gap-12">
            <h2 id="componentes-heading" className="font-display text-3xl font-semibold tracking-tight text-ink">Como está organizado</h2>
            <p className="max-w-prose text-base leading-relaxed text-graphite">
              Do gerenciamento de janelas às ferramentas de código, estas são as partes do meu ambiente.
            </p>
          </div>
          <dl className="mt-12 space-y-8">
            {setup.map((item) => (
              <div key={item.name} className="grid gap-2 sm:grid-cols-[1fr_1.1fr] sm:gap-16">
                <dt className="font-display text-xl font-semibold text-ink">{item.name}</dt>
                <dd className="max-w-prose text-base leading-relaxed text-graphite">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
