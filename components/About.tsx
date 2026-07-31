"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { InlineCta } from "@/components/ui/InlineCta";
import { about, inlineCta } from "@/lib/content";

export function About() {
  return (
    <section id="quien-soy" className="bg-slate-blue py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-ivory shadow-2xl shadow-ink/30 ring-1 ring-ivory/10 md:aspect-[4/5]">
              <Image
                src="/juan-nuevo-2.png"
                alt="Juan Cruz Falcón"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="origin-top scale-110 object-cover object-[89%_0%] md:object-[74%_0%]"
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="mb-5 flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.35em] text-sand">
                <span className="h-px w-8 bg-sand" aria-hidden />
                Quién soy
              </p>
              <h2 className="text-4xl font-normal leading-[1.02] tracking-[-0.06em] text-ivory md:text-5xl">
                Los números los mueven las{" "}
                <em className="font-semibold italic text-sand">personas</em>.
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
              <p className="mt-5 text-lg font-medium text-sand">
                {about.closing}
              </p>
            </FadeIn>

          </div>
        </div>

        <FadeIn delay={0.2}>
          <InlineCta text={inlineCta.about} tone="light" className="mt-16" />
        </FadeIn>
      </div>
    </section>
  );
}
