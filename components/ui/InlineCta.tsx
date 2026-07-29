import { inlineCta } from "@/lib/content";

type InlineCtaProps = {
  /** Línea que acompaña al botón */
  text: string;
  /** `light` para fondos oscuros (Quién soy), `dark` para los claros */
  tone?: "light" | "dark";
  className?: string;
};

/** CTA intercalado entre secciones — siempre baja al formulario de contacto. */
export function InlineCta({
  text,
  tone = "dark",
  className = "",
}: InlineCtaProps) {
  const light = tone === "light";

  return (
    <div
      className={`flex flex-col items-center gap-5 sm:flex-row sm:justify-center ${className}`}
    >
      <p
        className={`text-center text-lg sm:text-left ${
          light ? "text-ivory/80" : "text-ink/70"
        }`}
      >
        {text}
      </p>
      <a
        href="#contacto"
        className={`shrink-0 whitespace-nowrap rounded-full px-8 py-3.5 font-semibold transition-all hover:scale-105 ${
          light
            ? "bg-sand text-ink hover:shadow-xl hover:shadow-sand/25"
            : "bg-slate-blue text-ivory hover:shadow-xl hover:shadow-slate-blue/25"
        }`}
      >
        {inlineCta.label}
      </a>
    </div>
  );
}
