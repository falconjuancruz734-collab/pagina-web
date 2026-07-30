"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { countryNames, testimonials, type Testimonial } from "@/lib/content";

function Avatar({ t, size = "sm" }: { t: Testimonial; size?: "sm" | "lg" }) {
  const dimension = size === "lg" ? "h-14 w-14" : "h-11 w-11";

  if (t.photo) {
    return (
      <span
        className={`relative block ${dimension} shrink-0 overflow-hidden rounded-full ring-1 ring-ink/10`}
      >
        <Image
          src={t.photo}
          alt={t.name}
          fill
          sizes="56px"
          className="object-cover"
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden
      className={`flex ${dimension} shrink-0 items-center justify-center rounded-full bg-slate-blue text-xs font-semibold tracking-wide text-ivory`}
    >
      {t.initials}
    </span>
  );
}

/* Banderita del país. Los emoji de bandera se arman con los "regional
   indicators": cada letra del código ISO se corre al bloque Unicode 1F1E6+. */
function Flag({ code }: { code: string }) {
  const emoji = code
    .toUpperCase()
    .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));

  return (
    <span
      role="img"
      aria-label={countryNames[code.toUpperCase()] ?? code}
      className="text-base leading-none"
    >
      {emoji}
    </span>
  );
}

function TestimonialCard({
  t,
  onReadMore,
}: {
  t: Testimonial;
  onReadMore: (t: Testimonial) => void;
}) {
  return (
    <figure className="flex w-[22rem] shrink-0 flex-col rounded-[20px] bg-white p-6 ring-1 ring-ink/5 sm:w-[26rem]">
      <blockquote className="flex-1 leading-relaxed text-ink/75">
        “{t.quote}”
      </blockquote>

      {t.fullQuote && (
        <button
          type="button"
          onClick={() => onReadMore(t)}
          className="mt-2 self-start py-2 text-sm font-semibold text-slate-blue underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          Leer testimonio completo →
        </button>
      )}

      {/* Persona — formato unificado: nombre → cargo → empresa con bandera */}
      <figcaption className="mt-6 flex items-center gap-3">
        <Avatar t={t} />
        <span className="min-w-0">
          {/* Sin truncate: hay testimonios firmados por dos personas y el
              nombre no entra en una línea. */}
          <span className="block font-semibold leading-snug text-ink">
            {t.name}
          </span>
          {/* El cargo puede ser largo ("Asesor Dirección | Planificación
              Estratégica"): envuelve en vez de cortarse. */}
          {t.role && (
            <span className="block text-sm leading-snug text-ink/50">
              {t.role}
            </span>
          )}
          <span className="flex items-center gap-1.5 text-sm text-ink/50">
            <span className="truncate">{t.company}</span>
            <Flag code={t.country} />
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function Row({
  items,
  onReadMore,
}: {
  items: Testimonial[];
  onReadMore: (t: Testimonial) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  // Al pasar el mouse la fila no se frena: baja a ~15% de velocidad.
  // La velocidad se interpola durante ~600ms para que el cambio sea suave.
  const setSpeed = (target: number) => {
    cancelAnimationFrame(raf.current);
    const anims = ref.current?.getAnimations() ?? [];
    if (anims.length === 0) return;
    const from = anims[0].playbackRate;
    const start = performance.now();
    const duration = 600;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      const rate = from + (target - from) * eased;
      anims.forEach((a) => (a.playbackRate = rate));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  };

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  // La animación solo corre cuando la fila está en pantalla: fuera de vista
  // se pausa y deja de consumir GPU/CPU (evita que el resto del sistema se
  // resienta con la página abierta).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      el.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setSpeed(0.15)}
      onMouseLeave={() => setSpeed(1)}
      className="marquee-row flex animate-marquee"
    >
      {/* Dos filas idénticas: la segunda es la copia que cierra el loop.
          `pr-5` replica el gap al final para que cada fila mida exactamente
          la mitad del total y el translateX(-50%) caiga justo (sin salto). */}
      {[0, 1].map((copia) => (
        <div
          key={copia}
          className="flex shrink-0 gap-5 pr-5"
          aria-hidden={copia === 1 || undefined}
        >
          {items.map((t) => (
            <TestimonialCard key={t.name} t={t} onReadMore={onReadMore} />
          ))}
        </div>
      ))}
    </div>
  );
}

function TestimonialModal({
  t,
  onClose,
}: {
  t: Testimonial | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!t) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [t, onClose]);

  return (
    <AnimatePresence>
      {t && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Testimonio de ${t.name}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-[24px] bg-white p-8 shadow-2xl shadow-ink/30 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink/60 transition-colors hover:bg-ink/10 hover:text-ink"
            >
              ✕
            </button>

            <div className="mt-2 flex items-center gap-4">
              <Avatar t={t} size="lg" />
              <div className="min-w-0">
                <p className="font-semibold text-ink">{t.name}</p>
                {t.role && <p className="text-sm text-ink/50">{t.role}</p>}
                <p className="flex items-center gap-1.5 text-sm text-ink/50">
                  {t.company}
                  <Flag code={t.country} />
                </p>
              </div>
            </div>

            <blockquote className="mt-7 space-y-4 leading-relaxed text-ink/75">
              {(t.fullQuote ?? t.quote).split("\n\n").map((paragraph, i, all) => (
                <p key={i}>
                  {i === 0 && "“"}
                  {paragraph}
                  {i === all.length - 1 && "”"}
                </p>
              ))}
            </blockquote>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Testimonials() {
  const [open, setOpen] = useState<Testimonial | null>(null);

  return (
    <section id="testimonios" className="bg-ivory py-28">
      <FadeIn>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionLabel align="center">Testimonios</SectionLabel>
          <h2 className="text-4xl font-normal leading-[1.02] tracking-[-0.06em] text-ink md:text-5xl">
            Lo que dicen{" "}
            <em className="font-semibold italic text-slate-blue">mis clientes</em>
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        {/* Overlays de degradé en vez de mask-image: la máscara obligaba a
            recomponer toda la franja en cada frame de la animación y hacía
            que la página consumiera GPU de más. */}
        <div className="relative mt-14 overflow-hidden">
          <Row items={testimonials} onReadMore={setOpen} />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ivory to-transparent sm:w-28"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ivory to-transparent sm:w-28"
          />
        </div>
      </FadeIn>

      <TestimonialModal t={open} onClose={() => setOpen(null)} />
    </section>
  );
}
