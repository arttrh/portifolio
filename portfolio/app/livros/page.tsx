import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/sections/reveal";
import { Eyebrow } from "@/components/sections/eyebrow";
import { books } from "@/lib/data";
import type { Book } from "@/types";

export const metadata: Metadata = { title: "Livros" };

const prateleiras: { status: Book["status"]; titulo: string }[] = [
  { status: "lendo", titulo: "Lendo agora" },
  { status: "quero-ler", titulo: "Próximo da fila" },
];

export default function LivrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Livros"
        title="O que está aberto na mesa"
        description="Leio devagar e um de cada vez. Aqui fica o que estou lendo e o que vem depois."
      />
      <section className="mx-auto max-w-content space-y-14 px-6 pb-24">
        {prateleiras.map(({ status, titulo }) => {
          const itens = books.filter((b) => b.status === status);
          if (itens.length === 0) return null;
          return (
            <div key={status}>
              <Reveal>
                <Eyebrow>{titulo}</Eyebrow>
              </Reveal>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {itens.map((book, i) => (
                  <Reveal key={book.title} delay={i * 0.1}>
                    <div className="flex h-full gap-5 rounded-xl2 border border-line bg-white p-6">
                      <div className="relative h-36 w-24 shrink-0 overflow-hidden rounded-lg border border-line">
                        <Image
                          src={book.cover}
                          alt={`Capa de ${book.title}`}
                          fill
                          sizes="6rem"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-[17px] font-semibold leading-snug text-ink">{book.title}</h3>
                        <p className="mt-1 text-[13px] text-graphite">{book.author}</p>
                        <p className="mt-3 text-[13.5px] leading-relaxed text-graphite">{book.note}</p>
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
