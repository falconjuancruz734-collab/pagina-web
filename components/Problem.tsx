"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextReveal } from "@/components/ui/TextReveal";
import { InlineCta } from "@/components/ui/InlineCta";
import { inlineCta, problem } from "@/lib/content";

export function Problem() {
  return (
    <section id="el-problema" className="bg-ivory py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionLabel>El problema</SectionLabel>
        </FadeIn>
        <h2 className="max-w-3xl text-4xl font-normal leading-[1.02] tracking-[-0.06em] text-ink md:text-5xl">
          <TextReveal
            segments={[
              { text: "El negocio exige resultados." },
              { br: true },
              { text: "Nadie trabaja" },
              {
                text: "cómo lograrlos.",
                className: "font-semibold italic text-slate-blue",
              },
            ]}
          />
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <FadeIn delay={0.15}>
            <div className="space-y-5 leading-relaxed text-ink/70">
              {problem.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <blockquote className="flex h-full items-center rounded-3xl border-l-4 border-sand bg-white/70 p-8 text-xl leading-relaxed text-slate-blue md:p-10">
              <p>
                {problem.highlight.before}
                <strong className="font-bold">{problem.highlight.emphasis}</strong>
                {problem.highlight.after}
              </p>
            </blockquote>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <InlineCta text={inlineCta.problem} className="mt-14" />
        </FadeIn>
      </div>
    </section>
  );
}
