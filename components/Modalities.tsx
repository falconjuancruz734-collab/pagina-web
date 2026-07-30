"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { modalities } from "@/lib/content";

export function Modalities() {
  return (
    <section id="modalidades" className="bg-ivory py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center">
            <SectionLabel align="center">Modalidades</SectionLabel>
            <h2 className="text-4xl font-normal leading-[1.02] tracking-[-0.06em] text-ink md:text-5xl">
              Formatos que se adaptan a tu{" "}
              <em className="font-semibold italic text-slate-blue">equipo</em>
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {modalities.map((modality, i) => (
            <FadeIn key={modality.title} delay={i * 0.1}>
              <article className="flex h-full flex-col rounded-[20px] bg-white p-7 ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-1">
                {/* text-sand sobre blanco no llega a 4.5:1; el tono oscuro sí. */}
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55">
                  {modality.tag}
                </p>
                <h3 className="mt-10 text-xl font-semibold text-ink">
                  {modality.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink/60">
                  {modality.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
