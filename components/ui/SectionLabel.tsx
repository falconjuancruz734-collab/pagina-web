type SectionLabelProps = {
  children: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

/**
 * Eyebrow de sección — eco del "SALES COACH" del manual de marca.
 * La variante centrada usa un cuadradito de acento (patrón editorial).
 */
export function SectionLabel({
  children,
  tone = "dark",
  align = "left",
}: SectionLabelProps) {
  const centered = align === "center";

  return (
    <p
      className={`mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] ${
        centered ? "justify-center" : ""
      } ${tone === "light" ? "text-ivory/70" : "text-slate-blue"}`}
    >
      {centered ? (
        <span className="h-1.5 w-1.5 bg-sand" aria-hidden />
      ) : (
        <span className="h-px w-8 bg-sand" aria-hidden />
      )}
      {children}
    </p>
  );
}
