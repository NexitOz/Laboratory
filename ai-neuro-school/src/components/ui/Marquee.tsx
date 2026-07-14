"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: number;
};

export function Marquee({ items, className, speed = 40 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const distance = track.scrollWidth / 2;
    const tween = gsap.to(track, {
      x: -distance,
      duration: distance / speed,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [speed, items]);

  const doubled = [...items, ...items];

  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <div ref={trackRef} className="flex w-max items-center gap-10 will-change-transform">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display flex items-center gap-3 whitespace-nowrap text-2xl font-semibold text-silver/25 sm:text-3xl"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-gold-bright/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
