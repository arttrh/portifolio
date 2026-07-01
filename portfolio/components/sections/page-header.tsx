import { Eyebrow } from "@/components/sections/eyebrow";
import { Reveal } from "@/components/sections/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-content px-6 pt-36 pb-12 sm:pt-40">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-graphite sm:text-base">{description}</p>}
      </Reveal>
    </div>
  );
}
