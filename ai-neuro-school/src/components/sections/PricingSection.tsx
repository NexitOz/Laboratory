"use client";

import { motion } from "framer-motion";
import { Check, KeyRound, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { useSubscriptionModal } from "@/components/providers/SubscriptionModalProvider";
import { pricingIncludes } from "@/lib/data";

export function PricingSection() {
  const { open } = useSubscriptionModal();

  return (
    <section id="pricing" className="relative py-28 sm:py-36">
      <AmbientGlow color="gold" className="left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Подписка"
          title="Личный"
          highlight="AI-Куратор"
          description="Один тариф, который экономит десятки тысяч рублей на неудачных генерациях и доводит ваши навыки до профессионального уровня."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glow-gold-lg relative overflow-hidden rounded-[2rem] border border-gold-bright/30 bg-gradient-to-b from-[#1c1608] to-card p-8 sm:p-12"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold-bright/25 blur-[100px]"
            />
            <div className="relative flex flex-col gap-8">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold-bright/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-gold-bright">
                    <Sparkles className="h-3 w-3" />
                    Рекомендуем
                  </span>
                  <h3 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl">
                    Личный AI-Куратор
                  </h3>
                </div>
                <div className="text-right">
                  <div className="font-display text-4xl font-bold text-gradient-gold sm:text-5xl">
                    1 500 ₽
                  </div>
                  <div className="text-sm text-silver/50">в месяц</div>
                </div>
              </div>

              <div className="divider-gold" />

              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {pricingIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-silver/80">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-bright/15 text-gold-bright">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => open("curator")}
                className="mt-2 w-full rounded-full bg-gradient-to-r from-gold-bright to-gold px-8 py-4 text-sm font-semibold text-black shadow-[0_0_30px_-6px_rgba(255,193,7,0.6)] transition-transform hover:scale-[1.02] sm:w-auto cursor-pointer"
              >
                Оформить подписку
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass flex flex-col justify-between rounded-[2rem] border-border-strong p-8 sm:p-10"
          >
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <KeyRound className="h-5 w-5" />
              </span>
              <h3 className="font-display mt-5 text-2xl font-bold text-white">
                Подписка на нейросети
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-silver/60">
                Помогаем приобрести доступы к популярным AI-сервисам по выгодной цене — подбираем
                нужный набор инструментов и оформляем подписки без лишних хлопот.
              </p>
            </div>
            <button
              onClick={() => open("consultation")}
              className="mt-8 rounded-full glass border-border-strong px-7 py-3.5 text-sm font-semibold text-silver transition-colors hover:border-cyan/50 hover:text-cyan cursor-pointer"
            >
              Узнать подробнее
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
