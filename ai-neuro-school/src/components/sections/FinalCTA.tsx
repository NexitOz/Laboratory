"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ParticleField } from "@/components/ui/ParticleField";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { useSubscriptionModal } from "@/components/providers/SubscriptionModalProvider";

export function FinalCTA() {
  const { open } = useSubscriptionModal();

  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-ai-grid opacity-25 [mask-image:radial-gradient(ellipse_65%_65%_at_50%_50%,black,transparent)]" />
      <ParticleField className="absolute inset-0" density={60} />
      <AmbientGlow color="gold" className="left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-bright"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Пора начинать
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="font-display text-balance text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl"
        >
          Перестаньте тратить кредиты впустую
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="max-w-xl text-lg leading-relaxed text-silver/70"
        >
          Начните создавать профессиональный AI-контент уже сегодня — вместе с личным куратором,
          который экономит ваше время и деньги.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => open("curator")}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-bright to-gold px-8 py-4 text-sm font-semibold text-black shadow-[0_0_30px_-6px_rgba(255,193,7,0.6)] transition-transform hover:scale-105 cursor-pointer"
          >
            Получить куратора
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => open("consultation")}
            className="glass rounded-full border-border-strong px-8 py-4 text-sm font-semibold text-silver transition-colors hover:border-gold-bright/50 hover:text-gold-bright cursor-pointer"
          >
            Начать обучение
          </button>
        </motion.div>
      </div>
    </section>
  );
}
