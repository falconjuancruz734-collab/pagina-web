"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { whyCoach } from "@/lib/content";

/* [PENDIENTE] Los textos son un borrador: Juan va a pasar el copy definitivo.
   Se editan en `whyCoach` dentro de lib/content.ts. */
export function WhyCoach() {
  return (
    <section id="por-que-coach" className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <FadeIn>
              <SectionLabel>Por qué un coach</SectionLabel>
              <h2 className="max-w-lg text-4xl font-normal leading-[1.02] tracking-[-0.06em] text-ink md:text-5xl">
                {whyCoach.headlineStart}{" "}
                <span className="font-semibold italic text-slate-blue">
                  {whyCoach.headlineAccent}
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 space-y-5 leading-relaxed text-ink/70">
                {whyCoach.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.25}>
            <ul className="space-y-4">
              {whyCoach.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-4 rounded-[20px] bg-ivory p-5"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand text-xs font-bold text-ink"
                  >
                    ✓
                  </span>
                  <span className="leading-relaxed text-ink/80">{bullet}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
