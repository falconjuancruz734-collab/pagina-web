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
      className="relative flex min-h-svh flex-col overflow-hidden bg-[#f7f5f4] lg:flex-row lg:items-center"
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

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-4 pt-24 sm:pt-28 lg:pb-24 lg:pt-36">
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <FadeIn immediate delay={0.1}>
            <p className="mb-4 text-[13px] sm:mb-6 font-medium uppercase tracking-[0.32em] text-slate-blue/60">
              {hero.title}
            </p>
          </FadeIn>

          <FadeIn immediate delay={0.25}>
            <h1 className="text-4xl leading-[0.98] text-ink sm:text-6xl lg:text-7xl">
              <span className="block font-normal tracking-[-0.06em]">{hero.hookLine1}</span>
              <span className="block font-medium tracking-[-0.06em]">{hero.hookLine2}</span>
              <em className="block font-serif font-semibold italic leading-[1.02] tracking-[-0.01em] text-slate-blue">
                {hero.hookAccent}
                {hero.hookEnd}
              </em>
            </h1>
          </FadeIn>

          <FadeIn immediate delay={0.4}>
            <p className="mt-5 max-w-xl text-lg sm:mt-8 font-medium leading-[1.5] tracking-[-0.02em] text-ink/80">
              {hero.subtitle}
            </p>
          </FadeIn>

          <FadeIn immediate delay={0.55}>
            {/* Mobile: los dos CTA entran en una sola fila con tipografía y
                padding más chicos; desde sm vuelven a su tamaño normal. */}
            <div className="mt-6 flex items-stretch gap-3 sm:mt-10 sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href={site.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-slate-blue px-5 py-3.5 text-center text-sm font-semibold leading-tight text-ivory sm:leading-normal transition-all hover:scale-105 hover:shadow-xl hover:shadow-slate-blue/25 sm:px-8 sm:py-4 sm:text-base"
              >
                Agendar llamada
              </a>
              <a
                href="#lente-ai"
                className="flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-slate-blue/30 px-5 py-3.5 text-center font-serif text-[15px] font-bold italic leading-tight text-slate-blue sm:leading-normal transition-colors hover:border-sand sm:px-8 sm:py-4 sm:text-lg"
              >
                Conocé Lente AI
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Mobile: la foto ocupa el fondo del hero, a todo el ancho y anclada abajo.
          object-[86%_bottom] recorta el aire blanco de la izquierda y deja a Juan
          con el sillón centrado, cortado por el borde inferior (como el mockup). */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative mt-auto h-[48svh] min-h-[320px] w-full lg:hidden"
      >
        <Image
          src="/juan-hero.png"
          alt="Juan Cruz Falcón, coach de ventas"
          fill
          priority
          sizes="(min-width: 1024px) 1px, 100vw"
          className="object-cover object-[86%_bottom]"
        />
        {/* Scrim muy leve: suaviza el corte del borde superior sin velar la foto */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#f7f5f4]/70 to-transparent"
        />
      </motion.div>

    </section>
  );
}
