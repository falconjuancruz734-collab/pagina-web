"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { whyCoach } from "@/lib/content";

/* Textos en `whyCoach` dentro de lib/content.ts. */
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

          {/* Las objeciones típicas, respondidas: cada tarjeta es una pregunta
              que el decisor ya se hizo antes de llegar acá. */}
          <FadeIn delay={0.25}>
            <ul className="space-y-4">
              {whyCoach.faq.map((item) => (
                <li
                  key={item.question}
                  className="rounded-[20px] bg-ivory p-6"
                >
                  <p className="font-semibold text-ink">{item.question}</p>
                  <p className="mt-2 leading-relaxed text-ink/70">
                    {item.answer}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.35}>
          <p className="mt-12 border-t border-ink/10 pt-8 text-center text-xl leading-relaxed text-slate-blue">
            {whyCoach.closing}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
