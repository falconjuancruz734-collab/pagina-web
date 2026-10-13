"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextReveal } from "@/components/ui/TextReveal";
import { InlineCta } from "@/components/ui/InlineCta";
import { Icon } from "@/components/ui/Icons";
import { inlineCta, problem } from "@/lib/content";

export function Problem() {
  return (
    <section id="el-problema" className="bg-ivory py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Título y párrafos a la izquierda; a la derecha, los síntomas que
            el dueño o director reconoce en su propio equipo. */}
        <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <FadeIn>
              <SectionLabel>El problema</SectionLabel>
            </FadeIn>
            <h2 className="text-4xl font-normal leading-[1.02] tracking-[-0.06em] text-ink md:text-5xl">
              <TextReveal
                segments={[
                  { text: "El desafío de liderar" },
                  { br: true },
                  { text: "el área comercial" },
                  { br: true },
                  {
                    text: "sin descuidar el negocio.",
                    /* Una sola línea desde md; en mobile no entra y envuelve.
                       La columna del título es más ancha (3fr) para que esta
                       línea no invada la de la lista. */
                    className:
                      "font-semibold italic text-slate-blue md:whitespace-nowrap",
                  },
                ]}
              />
            </h2>

            <FadeIn delay={0.15}>
              <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink/70">
                {problem.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.25}>
            <ul className="divide-y divide-ink/10 rounded-[20px] bg-white/70 px-6 ring-1 ring-ink/5">
              {problem.pains.map((pain) => (
                <li key={pain.text} className="flex items-center gap-4 py-5">
                  <span className="text-sand">
                    <Icon name={pain.icon} />
                  </span>
                  <span className="text-ink/75">{pain.text}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <InlineCta text={inlineCta.problem} className="mt-16" />
        </FadeIn>
      </div>
    </section>
  );
}
