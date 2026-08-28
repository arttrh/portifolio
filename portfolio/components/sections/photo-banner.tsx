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
            className="object-cover object-top grayscale contrast-[1.05] transition-all duration-700 ease-out group-hover:grayscale-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-signal mix-blend-multiply opacity-[0.18] transition-opacity duration-700 ease-out group-hover:opacity-0" />
        </div>
      </Reveal>
    </section>
  );
}
