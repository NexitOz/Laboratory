import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type AmbientGlowProps = {
  className?: string;
  color?: "gold" | "violet" | "cyan" | "pink";
};

const colorMap: Record<NonNullable<AmbientGlowProps["color"]>, string> = {
  gold: "bg-gold-bright/25",
  violet: "bg-violet/25",
  cyan: "bg-cyan/20",
  pink: "bg-pink/20",
};

export const AmbientGlow = forwardRef<HTMLDivElement, AmbientGlowProps>(function AmbientGlow(
  { className, color = "gold" },
  ref
) {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-[120px]",
        colorMap[color],
        className
      )}
    />
  );
});
