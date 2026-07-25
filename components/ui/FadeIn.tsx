"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Anima al montar en vez de al entrar en vista — para contenido above-the-fold (hero). */
  immediate?: boolean;
};

/** Entrada suave al hacer scroll (una sola vez). Respeta prefers-reduced-motion. */
export function FadeIn({
  children,
  delay = 0,
  y = 28,
  className,
  immediate = false,
}: FadeInProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      {...(immediate
        ? { animate: { opacity: 1, y: 0 } }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" } as const,
          })}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
