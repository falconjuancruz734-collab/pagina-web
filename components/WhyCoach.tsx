"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Icon } from "@/components/ui/Icons";
import { whyCoach } from "@/lib/content";

/* Propuesta de valor. Textos en `whyCoach` dentro de lib/content.ts. */
export function WhyCoach() {
  return (
    <section id="por-que-coach" className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <FadeIn>
              <SectionLabel>Propuesta de valor</SectionLabel>
              <h2 className="max-w-lg text-4xl font-normal leading-[1.02] tracking-[-0.06em] text-ink md:text-5xl">
                {whyCoach.headlineStart}{" "}
                <span className="font-semibold italic text-slate-blue">
                  {whyCoach.headlineAccent}
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/70">
                {whyCoach.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.25}>
            <div className="rounded-[20px] bg-ivory p-8 md:p-10">
              <span className="text-sand">
                <Icon name="users" className="h-10 w-10" />
              </span>
              <p className="mt-6 text-2xl font-semibold leading-snug tracking-[-0.03em] text-ink">
                {whyCoach.card.title}{" "}
                <span className="italic text-slate-blue">
                  {whyCoach.card.accent}
                </span>
              </p>
              <p className="mt-4 leading-relaxed text-ink/70">
                {whyCoach.card.text}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
