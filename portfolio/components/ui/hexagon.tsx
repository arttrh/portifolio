import { cn } from "@/lib/utils";

interface HexagonProps {
  size?: number;
  className?: string;
  filled?: boolean;
  strokeWidth?: number;
}

/** A single flat-top hexagon outline, the recurring structural motif of the site. */
export function Hexagon({ size = 48, className, filled = false, strokeWidth = 1.5 }: HexagonProps) {
  const points = hexPoints(size);
  return (
    <svg width={size} height={size * 0.866} viewBox={`0 0 ${size} ${size * 0.866}`} className={className}>
      <polygon
        points={points}
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function hexPoints(size: number) {
  const w = size;
  const h = size * 0.866;
  return [
    [w * 0.25, 0],
    [w * 0.75, 0],
    [w, h * 0.5],
    [w * 0.75, h],
    [w * 0.25, h],
    [0, h * 0.5],
  ]
    .map((p) => p.join(","))
    .join(" ");
}

export function HexIcon({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Hexagon size={56} className="absolute inset-0 h-full w-full text-line" strokeWidth={1.25} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
