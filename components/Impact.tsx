"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Icon } from "@/components/ui/Icons";
import { CountUp } from "@/components/ui/CountUp";
import { impact } from "@/lib/content";

/* Impacto (resultados). Textos y cifras en `impact` dentro de lib/content.ts. */
export function Impact() {
  return (
    <section id="impacto" className="bg-ivory py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <FadeIn>
            <SectionLabel>Impacto</SectionLabel>
            <h2 className="text-4xl font-normal leading-[1.02] tracking-[-0.06em] text-ink md:text-5xl">
              {impact.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              {impact.intro}
            </p>
          </FadeIn>

          {/* 2×2 en mobile, una fila de 4 con divisores desde sm. */}
          <FadeIn delay={0.15}>
            <ul className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:divide-x sm:divide-ink/10">
              {impact.stats.map((stat, i) => (
                <li
                  key={stat.label}
                  className="flex flex-col items-center px-3 text-center"
                >
                  <span className="text-sand">
                    <Icon name={stat.icon} className="h-8 w-8" />
                  </span>
                  {stat.value ? (
                    <>
                      <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-blue">
                        <CountUp value={stat.value} delay={0.2 + i * 0.15} />
                      </p>
                      <p className="mt-2 text-sm leading-snug text-ink/65">
                        {stat.label}
                      </p>
                    </>
                  ) : (
                    <p className="mt-4 text-sm font-semibold leading-snug text-ink/80">
                      {stat.label}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
