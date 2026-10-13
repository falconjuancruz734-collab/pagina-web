"use client";

import { useEffect } from "react";
import Lenis from "lenis";

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

    // Los links internos scrollean suave. El hueco del navbar sale del
    // `scroll-margin-top` de globals.css, que Lenis ya respeta: sumarle un
    // offset acá lo duplicaba y la sección quedaba 88px más abajo.
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
      lenis.scrollTo(target as HTMLElement);
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
