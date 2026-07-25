"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FadeIn } from "@/components/ui/FadeIn";
import { hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="inicio"
      /* #f7f5f4: mismo tono que el aire de la foto — sin banda visible bajo el navbar transparente */
      className="relative flex min-h-svh items-center overflow-hidden bg-[#f7f5f4]"
    >
      {/* Foto a escala natural, anclada abajo a la derecha (solo desktop) —
          Juan entero con el sillón, como el mockup. El sobrante de aire blanco
          desborda a la izquierda y lo recorta el overflow-hidden del section. */}
      {/* -right-[10vw]: el sillón se corta en el borde derecho, como el mockup.
          90svh: Juan un poco más lejos; el borde superior de la foto se funde
          con el fondo mediante el degradado vertical de abajo. */}
      <motion.div
        initial={{ opacity: 0, x: 48 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute bottom-0 -right-[10vw] hidden aspect-[1672/941] h-[90svh] lg:block"
      >
        <Image
          src="/juan-hero.png"
          alt="Juan Cruz Falcón, coach de ventas"
          fill
          priority
          /* `display:none` no evita la descarga: en mobile pedimos el thumbnail mínimo */
          sizes="(max-width: 1023px) 1px, 100vw"
          className="object-contain object-right-bottom"
        />
        {/* Scrims suaves: funden los bordes izquierdo y superior de la foto con el fondo */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f7f5f4] to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f7f5f4] to-transparent"
        />
      </motion.div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-32 lg:pb-24 lg:pt-36">
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <FadeIn immediate delay={0.1}>
            <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.32em] text-slate-blue/60">
              {hero.title}
            </p>
          </FadeIn>

          <FadeIn immediate delay={0.25}>
            <h1 className="text-[2.6rem] leading-[0.98] text-ink sm:text-6xl lg:text-7xl">
              <span className="block font-normal tracking-[-0.06em]">{hero.hookLine1}</span>
              <span className="block font-medium tracking-[-0.06em]">{hero.hookLine2}</span>
              <em className="block font-serif font-semibold italic leading-[1.02] tracking-[-0.01em] text-slate-blue">
                {hero.hookAccent}
                {hero.hookEnd}
              </em>
            </h1>
          </FadeIn>

          <FadeIn immediate delay={0.4}>
            <p className="mt-8 max-w-xl text-lg font-medium leading-[1.5] tracking-[-0.02em] text-ink/80">
              {hero.subtitle}
            </p>
          </FadeIn>

          <FadeIn immediate delay={0.55}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-blue px-8 py-4 font-semibold text-ivory transition-all hover:scale-105 hover:shadow-xl hover:shadow-slate-blue/25"
              >
                Agendar llamada de diagnóstico
              </a>
              <a
                href="#lente-ai"
                className="rounded-full border border-slate-blue/30 px-8 py-4 font-serif text-lg font-semibold italic text-slate-blue transition-colors hover:border-sand"
              >
                Conocé Lente AI
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border border-ink/20 p-1.5"
        >
          <div className="mx-auto h-2 w-1 rounded-full bg-sand" />
        </motion.div>
      </motion.div>
    </section>
  );
}
