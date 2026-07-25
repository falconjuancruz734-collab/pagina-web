"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { CountUp } from "@/components/ui/CountUp";
import { about, stats } from "@/lib/content";

export function About() {
  return (
    <section id="quien-soy" className="bg-slate-blue py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-ivory shadow-2xl shadow-ink/30 ring-1 ring-ivory/10">
              <Image
                src="/juan-standing.png"
                alt="Juan Cruz Falcón"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[85%_0%]"
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-sand">
                <span className="h-px w-8 bg-sand" aria-hidden />
                Quién soy
              </p>
              <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-ivory md:text-5xl">
                Los números los mueven las{" "}
                <em className="font-serif italic tracking-[-0.01em] text-sand">personas</em>.
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-7 font-medium leading-relaxed text-ivory">
                {about.intro}
              </p>
              <div className="mt-4 space-y-4 leading-relaxed text-ivory/70">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <p className="mt-5 font-serif text-lg italic text-sand">
                {about.closing}
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-8 border-t border-ivory/10 pt-6 text-[11px] font-medium uppercase tracking-[0.3em] text-ivory/50">
                {about.brands.join("  ·  ")}
              </p>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16 grid gap-10 border-t border-ivory/10 pt-12 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl font-semibold text-sand md:text-6xl">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 max-w-[16rem] text-sm leading-snug text-ivory/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
