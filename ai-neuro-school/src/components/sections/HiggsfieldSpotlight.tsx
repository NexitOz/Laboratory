"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Camera,
  Clapperboard,
  Coins,
  ImageIcon,
  MessageSquare,
  Palette,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { useSubscriptionModal } from "@/components/providers/SubscriptionModalProvider";
import { higgsfieldFeatures } from "@/lib/data";

const icons = [Camera, Palette, MessageSquare, ImageIcon, Coins, AlertTriangle];

export function HiggsfieldSpotlight() {
  const { open } = useSubscriptionModal();

  return (
    <section id="higgsfield" className="relative py-28 sm:py-36">
      <AmbientGlow color="gold" className="right-0 top-20 h-[460px] w-[460px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="glow-gold-lg relative overflow-hidden rounded-[2.5rem] border border-gold-bright/20 bg-gradient-to-b from-[#181307] to-bg-raised px-6 py-16 sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 bg-ai-grid opacity-20 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]"
          />

          <div className="relative flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-bright"
            >
              <Clapperboard className="h-3.5 w-3.5" />
              Главный продукт обучения
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="font-display max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl"
            >
              Кинематографичное видео <span className="text-gradient-gold">через Higgsfield AI</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-silver/70"
            >
              Учим управлять камерой, движением и стилем как в голливудской продакшн-студии —
              строить структуру запроса, использовать референсы и получать киновидео,
              не сжигая кредиты на неудачные попытки.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              onClick={() => open("curator")}
              className="mt-8 rounded-full bg-gradient-to-r from-gold-bright to-gold px-8 py-4 text-sm font-semibold text-black shadow-[0_0_30px_-6px_rgba(255,193,7,0.6)] transition-transform hover:scale-105 cursor-pointer"
            >
              Изучить Higgsfield AI с куратором
            </motion.button>
          </div>

          <div className="relative mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {higgsfieldFeatures.map((feature, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
                >
                  <TiltCard className="glass h-full rounded-2xl border-border p-6 transition-colors duration-300 hover:border-gold-bright/40">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-bright/10 text-gold-bright">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display mt-5 text-lg font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-silver/60">
                      {feature.description}
                    </p>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
