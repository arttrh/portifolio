import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { TimelineList } from "@/components/sections/timeline-list";
import { timeline } from "@/lib/data";

export const metadata: Metadata = { title: "Experiência" };

export default function ExperienciaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Experiência"
        title="Trajetória de formação"
        description="Ainda não tive uma posição formal em empresa — o que segue é como cheguei ao nível técnico que tenho hoje, curso por curso, projeto por projeto."
      />
      <section className="mx-auto max-w-content px-6 pb-24">
        <TimelineList entries={timeline} />
      </section>
    </>
  );
}
