"use client";

import { motion } from "framer-motion";
import { Check, TrendingDown, TrendingUp, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { comparisonRows } from "@/lib/data";

export function ComparisonSection() {
  return (
    <section className="relative py-28 sm:py-36">
      <AmbientGlow color="pink" className="left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Главная причина неудач"
          title="Без наставника вы"
          highlight="просто сжигаете кредиты"
          description="Десятки неудачных генераций. Потерянные деньги. Непонятные ошибки. Мы меняем это, экономя вам десятки тысяч рублей благодаря правильной работе с нейросетями."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface relative overflow-hidden rounded-3xl p-8 sm:p-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink/10 text-pink">
                <TrendingDown className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold text-white">Без куратора</h3>
            </div>
            <RevealGroup className="flex flex-col gap-4">
              {comparisonRows.map((row) => (
                <RevealItem key={row.without} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink/10 text-pink">
                    <X className="h-3 w-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-silver/60">{row.without}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glow-gold relative overflow-hidden rounded-3xl border border-gold-bright/25 bg-gradient-to-b from-[#1a1608] to-card p-8 sm:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gold-bright/20 blur-[80px]"
            />
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-bright/15 text-gold-bright">
                <TrendingUp className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold text-white">С куратором</h3>
            </div>
            <RevealGroup className="flex flex-col gap-4">
              {comparisonRows.map((row) => (
                <RevealItem key={row.with} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-bright/15 text-gold-bright">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-silver/85">{row.with}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
