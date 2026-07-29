"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { press } from "@/lib/content";

export function Work() {
  return (
    <section id="blog" className="bg-ivory py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center">
            <SectionLabel align="center">Blog</SectionLabel>
            <h2 className="text-4xl font-normal leading-[1.02] tracking-[-0.06em] text-ink md:text-5xl">
              Lo que escribo,{" "}
              <em className="font-medium italic text-slate-blue">
                lo que pienso
              </em>
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {press.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-1"
              >
                {item.image ? (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={`Portada de la nota: ${item.title}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : item.excerpt ? (
                  <div className="relative flex aspect-video items-center overflow-hidden bg-slate-blue px-7">
                    <span
                      aria-hidden
                      className="absolute -top-3 left-4 text-[90px] leading-none text-sand/30"
                    >
                      “
                    </span>
                    <p className="relative text-[17px] leading-snug text-ivory">
                      {item.excerpt}
                    </p>
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <p className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.25em] text-slate-blue/70">
                      {item.outlet}
                      <span className="text-ink/40">{item.date}</span>
                    </p>
                    <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-8 text-sm font-medium text-slate-blue transition-colors group-hover:text-sand">
                    Leer nota →
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
