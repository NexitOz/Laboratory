"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Coins,
  Heart,
  Lightbulb,
  MessageCircle,
  MessagesSquare,
  Sparkle,
  UserCheck,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { curatorBenefits } from "@/lib/data";

const icons = [
  Clock,
  MessageCircle,
  Wrench,
  Lightbulb,
  Coins,
  UserCheck,
  MessagesSquare,
  Heart,
  Sparkle,
];

export function CuratorBenefits() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Что даёт куратор"
          title="Поддержка, которая"
          highlight="реально экономит"
          description="Не просто уроки — рядом всегда есть человек, который разбирает ваши ошибки и помогает получать результат с первого раза."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {curatorBenefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard className="card-surface group h-full rounded-3xl p-7 transition-colors duration-300 hover:border-gold-bright/30">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-bright/10 text-gold-bright transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-silver/60">{benefit.description}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
