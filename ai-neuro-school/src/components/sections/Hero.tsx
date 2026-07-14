"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ParticleField } from "@/components/ui/ParticleField";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { useSubscriptionModal } from "@/components/providers/SubscriptionModalProvider";
import { gsap } from "@/lib/gsap";
import { stats } from "@/lib/data";

const tools = ["Higgsfield AI", "ChatGPT", "Flux", "Midjourney", "Kling", "Runway", "ElevenLabs"];

export function Hero() {
  const { open } = useSubscriptionModal();
  const sectionRef = useRef<HTMLElement>(null);
  const goldGlowRef = useRef<HTMLDivElement>(null);
  const violetGlowRef = useRef<HTMLDivElement>(null);
  const cyanGlowRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      };

      gsap.to(goldGlowRef.current, { yPercent: 30, xPercent: -8, ease: "none", scrollTrigger: trigger });
      gsap.to(violetGlowRef.current, { yPercent: 45, xPercent: 6, ease: "none", scrollTrigger: trigger });
      gsap.to(cyanGlowRef.current, { yPercent: 20, ease: "none", scrollTrigger: trigger });
      gsap.to(visualRef.current, { yPercent: 12, ease: "none", scrollTrigger: trigger });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-32 pb-16"
    >
      <div className="absolute inset-0 bg-ai-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <ParticleField className="absolute inset-0" density={90} />
      <AmbientGlow ref={goldGlowRef} color="gold" className="left-[-10%] top-[10%] h-[420px] w-[420px]" />
      <AmbientGlow ref={violetGlowRef} color="violet" className="right-[-10%] top-[30%] h-[480px] w-[480px]" />
      <AmbientGlow ref={cyanGlowRef} color="cyan" className="bottom-[-10%] left-[30%] h-[380px] w-[380px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div className="flex flex-col items-start gap-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-bright"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Школа нейросетей нового поколения
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-[4.2rem]"
          >
            Освой нейросети и перестань{" "}
            <span className="text-gradient-gold glow-text-gold">сливать кредиты</span> впустую
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="max-w-xl text-lg leading-relaxed text-silver/70"
          >
            Научим профессионально работать с{" "}
            <span className="text-white">Higgsfield AI, ChatGPT, Flux, Midjourney, Kling,
            Runway, ElevenLabs</span> и десятками других AI-инструментов — с личным куратором,
            который экономит ваши деньги и время.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => open("curator")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-bright to-gold px-8 py-4 text-sm font-semibold text-black shadow-[0_0_30px_-6px_rgba(255,193,7,0.6)] transition-transform hover:scale-105 cursor-pointer"
            >
              Начать обучение
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => open("curator")}
              className="glass rounded-full border-border-strong px-8 py-4 text-sm font-semibold text-silver transition-colors hover:border-gold-bright/50 hover:text-gold-bright cursor-pointer"
            >
              Получить куратора
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs text-silver/40"
          >
            {tools.map((tool) => (
              <span key={tool} className="whitespace-nowrap">
                {tool}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44 }}
            className="grid w-full grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-display text-2xl font-bold text-white sm:text-3xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs text-silver/50">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-[3/4] w-full max-w-md"
          ref={visualRef}
        >
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-b from-gold-bright/15 via-transparent to-transparent blur-2xl" />
          <div className="animate-float relative h-full w-full overflow-hidden rounded-[2.5rem] border border-gold-bright/20 glow-gold-lg">
            <Image
              src="https://d8j0ntlcm91z4.cloudfront.net/user_3Fd7PCF1g1DDxSHJW9qYbmWlPcU/hf_20260714_100942_170399a8-d012-4ae8-bfa5-e675fb7f6b10.png"
              alt="AI-андроид в золотом стиле — символ Neuro School"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 480px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
          </div>
          <div className="glass-strong absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl px-5 py-4 shadow-2xl">
            <span className="h-2.5 w-2.5 animate-pulse-glow rounded-full bg-green" />
            <div className="flex flex-col">
              <span className="text-xs font-medium text-silver/60">Куратор на связи</span>
              <span className="text-sm font-semibold text-white">24/7 поддержка</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
