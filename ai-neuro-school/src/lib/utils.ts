import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const accentColor = {
  gold: {
    text: "text-gold-bright",
    bg: "bg-gold-bright/10",
    border: "border-gold-bright/30",
    glow: "glow-gold",
    ring: "shadow-[0_0_40px_-12px_rgba(255,193,7,0.55)]",
    gradient: "from-gold-bright to-gold",
  },
  violet: {
    text: "text-violet",
    bg: "bg-violet/10",
    border: "border-violet/30",
    glow: "glow-violet",
    ring: "shadow-[0_0_40px_-12px_rgba(138,43,226,0.55)]",
    gradient: "from-violet to-pink",
  },
  cyan: {
    text: "text-cyan",
    bg: "bg-cyan/10",
    border: "border-cyan/30",
    glow: "glow-cyan",
    ring: "shadow-[0_0_40px_-12px_rgba(0,216,255,0.55)]",
    gradient: "from-cyan to-violet",
  },
  green: {
    text: "text-green",
    bg: "bg-green/10",
    border: "border-green/30",
    glow: "",
    ring: "shadow-[0_0_40px_-12px_rgba(0,200,83,0.55)]",
    gradient: "from-green to-cyan",
  },
  pink: {
    text: "text-pink",
    bg: "bg-pink/10",
    border: "border-pink/30",
    glow: "",
    ring: "shadow-[0_0_40px_-12px_rgba(255,45,149,0.55)]",
    gradient: "from-pink to-violet",
  },
} as const;

export type AccentKey = keyof typeof accentColor;
