import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-bright">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-bright animate-pulse-glow" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h2 className="font-display max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
          {title} {highlight ? <span className="text-gradient-gold">{highlight}</span> : null}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-balance text-lg leading-relaxed text-silver/70">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
