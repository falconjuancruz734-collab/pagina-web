"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Altura del navbar fijo — para que los anclas no queden tapadas. */
const NAV_OFFSET = -88;

/**
 * Scroll suave con inercia (Lenis) para toda la página.
 * Se desactiva si el usuario pidió reducir movimiento.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Los links internos scrollean suave y con offset del navbar
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement)?.closest?.<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) return;

      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: NAV_OFFSET });
      history.pushState(null, "", id);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
