import Image from "next/image";
import { companies } from "@/lib/content";

/** Carrusel de logos de empresas — imágenes reales con fallback tipográfico. */
export function LogosMarquee() {
  const doubled = [...companies, ...companies];

  return (
    <section
      aria-label="Empresas con las que trabajó Juan Cruz Falcón"
      className="border-y border-ink/5 bg-white py-10"
    >
      <p className="mb-7 text-center text-[11px] font-medium uppercase tracking-[0.35em] text-ink/40">
        Empresas que confiaron en mí
      </p>
      <div className="marquee-fade overflow-hidden">
        <div className="animate-marquee flex items-center gap-10 pl-10">
          {doubled.map((company, i) => (
            <span
              key={`${company.name}-${i}`}
              className="shrink-0 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              {company.logo ? (
                /* Los PNG están normalizados por área óptica sobre un lienzo
                   común de 400×180: los anchos (GA.MA, Urquiza) compensan su
                   poca altura, así todos pesan visualmente parecido. */
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={400}
                  height={180}
                  className="h-14 w-auto sm:h-16"
                />
              ) : (
                <span className="whitespace-nowrap text-lg font-semibold uppercase tracking-[0.18em] text-ink/60">
                  {company.name}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
