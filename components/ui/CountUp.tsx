"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  suffix?: string;
  className?: string;
};

/** Número que cuenta desde 0 al entrar en viewport. */
export function CountUp({ to, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  // Con reduced-motion mostramos el valor final sin animar
  const display = reduce ? to : value;

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
