import { cn } from "@/lib/utils";
import { Hexagon } from "@/components/ui/hexagon";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-signal", className)}>
      <Hexagon size={14} filled />
      <span className="font-mono text-[12px] uppercase tracking-[0.12em]">{children}</span>
    </div>
  );
}
