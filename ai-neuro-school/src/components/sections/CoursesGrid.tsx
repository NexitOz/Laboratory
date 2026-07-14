"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { courses } from "@/lib/data";
import { accentColor } from "@/lib/utils";

export function CoursesGrid() {
  return (
    <section id="courses" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Программа обучения"
          title="Что вы"
          highlight="изучаете"
          description="Полный набор AI-инструментов для видео, фото, аудио, музыки, рекламы и автоматизации бизнеса — под руководством личного куратора."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => {
            const accent = accentColor[course.color];
            return (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard className="card-surface group h-full rounded-3xl p-7 transition-colors duration-300 hover:border-border-strong">
                  <div className="flex items-start justify-between">
                    <span
                      className={`rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wide ${accent.bg} ${accent.border} ${accent.text}`}
                    >
                      {course.category}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-silver/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                  <h3 className="font-display mt-6 text-2xl font-bold text-white">{course.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver/60">{course.description}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
