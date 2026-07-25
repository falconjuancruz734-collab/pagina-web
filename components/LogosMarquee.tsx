import { companies } from "@/lib/content";

/** Carrusel de logos de empresas — wordmarks tipográficos hasta tener los SVG reales. */
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
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className={`shrink-0 whitespace-nowrap text-ink/35 transition-colors hover:text-ink/60 ${
                i % 2 === 0
                  ? "text-lg font-semibold uppercase tracking-[0.18em]"
                  : "font-serif text-2xl font-medium italic"
              }`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
