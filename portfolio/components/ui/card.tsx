import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl2 border border-line bg-white/60 backdrop-blur-sm transition-all duration-300",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
