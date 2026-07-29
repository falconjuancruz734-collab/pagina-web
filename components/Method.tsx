"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { methodSteps } from "@/lib/content";

export function Method() {
  return (
    <section id="metodo" className="bg-ivory py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center">
            <SectionLabel align="center">Cómo trabajo</SectionLabel>
            <h2 className="text-4xl font-normal leading-[1.02] tracking-[-0.06em] text-ink md:text-5xl">
              Un método simple.
              <br />
              <em className="font-semibold italic text-slate-blue">
                Resultados que se sostienen
              </em>
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {methodSteps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-[20px] bg-white p-7 ring-1 ring-ink/5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sand">
                  Paso {step.number}
                </p>
                <h3 className="mt-10 text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
                  {step.description}
                </p>
                {step.anchor && (
                  <a
                    href={step.anchor}
                    className="mt-3 inline-block py-2 text-sm font-medium text-slate-blue transition-colors hover:text-sand"
                  >
                    Conocé Lente ↓
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
