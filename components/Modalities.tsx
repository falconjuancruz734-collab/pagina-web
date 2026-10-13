"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { modalities, modalitiesHeading } from "@/lib/content";

export function Modalities() {
  return (
    <section id="modalidades" className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center">
            <SectionLabel align="center">Servicios</SectionLabel>
            <h2 className="text-4xl font-normal leading-[1.02] tracking-[-0.06em] text-ink md:text-5xl">
              {modalitiesHeading.start}{" "}
              <em className="font-semibold italic text-slate-blue">
                {modalitiesHeading.accent}
              </em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
              {modalitiesHeading.intro}
            </p>
          </div>
        </FadeIn>

        {/* Subgrid: número, título, bajada y párrafos comparten filas entre
            las tres tarjetas. Si un título ocupa dos líneas, la bajada y los
            párrafos de las otras arrancan a la misma altura igual. */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {modalities.map((modality, i) => (
            <FadeIn
              key={modality.title}
              delay={i * 0.1}
              className="md:row-span-4 md:grid md:grid-rows-subgrid md:gap-y-0"
            >
              <article className="group relative flex flex-col rounded-[20px] bg-ivory p-6 ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-1 md:row-span-4 md:grid md:grid-rows-subgrid md:gap-y-0 lg:p-7">
                {/* La etiqueta monta sobre el borde superior de la tarjeta,
                    centrada. Es absoluta: no ocupa fila en el subgrid y no
                    desalinea esta tarjeta respecto de las otras dos. */}
                {modality.badge && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-blue px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ivory">
                    {modality.badge}
                  </span>
                )}
                {/* text-sand sobre blanco no llega a 4.5:1; el tono oscuro sí. */}
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55">
                  {modality.number}
                </p>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-ink [text-wrap:balance]">
                  {modality.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium leading-normal text-slate-blue [text-wrap:pretty]">
                  {modality.tagline}
                </p>
                {/* Al pasar el mouse por la tarjeta los párrafos se oscurecen:
                    más contraste para leer el detalle. */}
                <div className="mt-4 space-y-2.5 border-t border-ink/10 pt-4 text-[15px] leading-[1.6] text-ink/65 transition-colors duration-300 group-hover:text-ink/90 [text-wrap:pretty]">
                  {modality.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
