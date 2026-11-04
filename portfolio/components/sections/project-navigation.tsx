import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectNavigation({ active }: { active: "principais" | "paralelos" }) {
  return (
    <nav aria-label="Categorias de projetos" className="mb-10 flex flex-wrap gap-3">
      {[
        { id: "principais", label: "Em destaque", href: "/projetos" },
        { id: "paralelos", label: "Paralelos e estudos", href: "/projetos/paralelos" },
      ].map((item) => (
        <Link
          key={item.id}
          href={item.href}
          aria-current={active === item.id ? "page" : undefined}
          className={cn(buttonVariants({ variant: active === item.id ? "primary" : "outline" }), "px-4 text-base sm:px-6")}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
