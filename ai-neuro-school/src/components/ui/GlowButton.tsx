"use client";

import { type ComponentPropsWithoutRef, type ElementType } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type GlowButtonProps = HTMLMotionProps<"button"> & {
  variant?: Variant;
  as?: ElementType;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-gold-bright to-gold text-black shadow-[0_0_30px_-6px_rgba(255,193,7,0.6)] hover:shadow-[0_0_46px_-4px_rgba(255,193,7,0.85)]",
  secondary:
    "glass text-silver border-border-strong hover:border-gold-bright/50 hover:text-gold-bright",
  ghost: "bg-transparent text-silver hover:text-gold-bright",
};

export function GlowButton({
  variant = "primary",
  className,
  children,
  ...props
}: GlowButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.035, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function GlowLink({
  className,
  children,
  variant = "secondary",
  ...props
}: ComponentPropsWithoutRef<"a"> & { variant?: Variant }) {
  return (
    <a
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
