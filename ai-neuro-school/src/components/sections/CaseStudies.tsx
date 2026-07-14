"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/data";
import { accentColor, cn } from "@/lib/utils";

const aspectClass: Record<(typeof caseStudies)[number]["aspect"], string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[4/3] sm:aspect-[16/10]",
};

export function CaseStudies() {
  return (
    <section id="cases" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Работы учеников"
          title="До и после"
          highlight="куратора"
          description="Видео, изображения, музыка и реклама — реальный рост качества AI-контента наших учеников."
          className="mb-16"
        />

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {caseStudies.map((item, index) => {
            const accent = accentColor[item.color];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group relative break-inside-avoid overflow-hidden rounded-3xl border border-border"
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    aspectClass[item.aspect]
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-90 transition-transform duration-700 group-hover:scale-110",
                      accent.gradient
                    )}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                  <div className="absolute inset-0 bg-black/35" />

                  <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white backdrop-blur-sm">
                    {item.category}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md">
                      <PlayCircle className="h-7 w-7" />
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                    <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-white/70">
                      {item.description}
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
