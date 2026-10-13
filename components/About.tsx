"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { InlineCta } from "@/components/ui/InlineCta";
import { Icon } from "@/components/ui/Icons";
import { about, inlineCta } from "@/lib/content";

export function About() {
  return (
    <section id="quien-soy" className="bg-slate-blue py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-ivory shadow-2xl shadow-ink/30 ring-1 ring-ivory/10 md:aspect-[4/5]">
              <Image
                src="/juan-nueva-foto.jpg"
                alt="Juan Cruz Falcón"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="mb-5 flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.35em] text-sand">
                <span className="h-px w-8 bg-sand" aria-hidden />
                Sobre mí
              </p>
              {/* Un punto más chico que el resto: el título es largo y a text-5xl
                  ocupaba seis renglones. */}
              <h2 className="text-3xl font-normal leading-[1.05] tracking-[-0.05em] text-ivory md:text-4xl">
                {about.headlineStart}{" "}
                <em className="font-semibold italic text-sand">
                  {about.headlineAccent}
                </em>
                .
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
            </FadeIn>

            <FadeIn delay={0.25}>
              <ul className="mt-10 grid gap-6 border-t border-ivory/15 pt-8 sm:grid-cols-3 sm:gap-5">
                {about.highlights.map((item) => (
                  <li key={item.value} className="flex gap-3 sm:flex-col">
                    <span className="shrink-0 text-sand">
                      <Icon name={item.icon} className="h-7 w-7" />
                    </span>
                    <p className="text-sm leading-snug text-ivory/70">
                      <span className="block font-semibold text-ivory">
                        {item.value}
                      </span>
                      {item.label}
                    </p>
                  </li>
                ))}
              </ul>
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
