"use client";

import Image from "next/image";
import { Reveal } from "@/components/sections/reveal";

export function PhotoBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <section className="border-t border-line">
      <Reveal>
        <div className="group relative h-72 w-full overflow-hidden sm:h-[26rem]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </Reveal>
    </section>
  );
}
