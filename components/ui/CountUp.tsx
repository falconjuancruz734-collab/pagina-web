"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type CountUpProps = {
  /** Cifra con prefijo y sufijo opcionales, p. ej. "+28%" */
  value: string;
  delay?: number;
  className?: string;
};

/**
 * Cuenta de 0 hasta la cifra cuando entra en vista (una sola vez).
 * El HTML del servidor trae la cifra final (SEO y sin JS); recién en el
 * cliente arranca en 0. Respeta prefers-reduced-motion.
 */
export function CountUp({ value, delay = 0, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const digits = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const animatable = match !== null;
  const prefix = match?.[1] ?? "";
  const target = match ? Number(match[2]) : 0;
  const suffix = match?.[3] ?? "";

  /* La cuenta escribe el texto directo en el DOM: son ~60 cuadros por
     segundo y no hace falta pasar cada uno por un render de React. */
  useEffect(() => {
    const el = digits.current;
    if (!el || !animatable || reduce) return;
    const show = (n: number) => {
      el.textContent = `${prefix}${Math.round(n)}${suffix}`;
    };
    if (!inView) {
      show(0);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.6,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: show,
    });
    return () => controls.stop();
  }, [inView, reduce, target, delay, animatable, prefix, suffix]);

  if (!animatable) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {/* Los lectores de pantalla leen la cifra final, no la cuenta. */}
      <span className="sr-only">{value}</span>
      <span ref={digits} aria-hidden>
        {value}
      </span>
    </span>
  );
}
