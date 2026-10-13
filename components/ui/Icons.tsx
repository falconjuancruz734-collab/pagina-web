import type { ReactNode } from "react";

/* Íconos de línea para las secciones Problema, Impacto y Sobre mí.
   Trazo fino y color heredado (`currentColor`), como en el mockup. */
const paths: Record<string, ReactNode> = {
  // Gráfico con flecha: presión por resultados
  chart: (
    <>
      <path d="M4 20h16" />
      <path d="M6 16v-3M10 16v-5M14 16v-4M18 16V8" />
      <path d="m5 10 4-3 4 2 6-5M15 4h4v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  // Puntos dispersos: oportunidades que se pierden
  scatter: (
    <>
      <circle cx="6" cy="6" r="1.6" />
      <circle cx="17" cy="5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="5" cy="17" r="1.6" />
      <circle cx="18" cy="17" r="1.6" />
      <path d="M7.5 7.5 10.5 10.5M13.5 13.5l3 2" strokeDasharray="1.5 2" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" />
    </>
  ),
  users: (
    <>
      <circle cx="12" cy="8" r="3" />
      <circle cx="5.5" cy="10" r="2.2" />
      <circle cx="18.5" cy="10" r="2.2" />
      <path d="M7 19c.6-3 2.5-4.6 5-4.6s4.4 1.6 5 4.6M2.5 18c.3-2 1.5-3.2 3.2-3.4M21.5 18c-.3-2-1.5-3.2-3.2-3.4" />
    </>
  ),
  bars: (
    <>
      <path d="M4 20h16" />
      <path d="M7 20v-5M12 20V10M17 20V5" />
    </>
  ),
  funnel: (
    <>
      <path d="M4 5h16l-6 7.5V19l-4-2v-4.5z" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.4 3.5 5.2 3.5 8.5s-1.1 6.1-3.5 8.5c-2.4-2.4-3.5-5.2-3.5-8.5s1.1-6.1 3.5-8.5z" />
    </>
  ),
  trend: (
    <>
      <path d="m3 18 6-6 4 3 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-7 w-7",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
