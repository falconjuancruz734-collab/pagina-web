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
        <div className="animate-marquee flex items-center gap-16 pl-16">
          {doubled.map((company, i) => (
            <span
              key={`${company.name}-${i}`}
              className="shrink-0 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              {company.logo ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={360}
                  height={240}
                  className="h-12 w-auto object-contain"
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
