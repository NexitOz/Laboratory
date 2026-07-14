"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { useSubscriptionModal } from "@/components/providers/SubscriptionModalProvider";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#courses", label: "Обучение" },
  { href: "#higgsfield", label: "Higgsfield AI" },
  { href: "#pricing", label: "Подписка" },
  { href: "#cases", label: "Кейсы" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useSubscriptionModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 transition-all duration-500 sm:px-7",
          scrolled ? "glass py-3" : "bg-transparent py-2"
        )}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gold-bright to-gold text-black">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Neuro School
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-silver/70 transition-colors hover:text-gold-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => open("curator")}
            className="rounded-full bg-gradient-to-r from-gold-bright to-gold px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105 cursor-pointer"
          >
            Получить куратора
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Меню"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-4 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-silver/80 hover:bg-white/5 hover:text-gold-bright"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              open("curator");
            }}
            className="mt-2 rounded-full bg-gradient-to-r from-gold-bright to-gold px-5 py-3 text-sm font-semibold text-black cursor-pointer"
          >
            Получить куратора
          </button>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
