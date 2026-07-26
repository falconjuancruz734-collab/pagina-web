"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { site } from "@/lib/content";

const links = [
  { href: "#quien-soy", label: "Quién soy" },
  { href: "#metodo", label: "Cómo trabajo" },
  { href: "#lente-ai", label: "Lente AI" },
  { href: "#modalidades", label: "Modalidades" },
  { href: "#notas", label: "Notas" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-blue/90 shadow-lg shadow-ink/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2 sm:gap-2.5">
          {/* La firma cambia de color según el estado del navbar */}
          <Image
            src={scrolled ? "/Firma Blanco.png" : "/Firma Negro.png"}
            alt="Firma de Juan Cruz Falcón"
            width={1254}
            height={1254}
            priority
            className="h-10 w-10 shrink-0 object-contain sm:h-14 sm:w-14"
          />
          <span className="flex flex-col gap-0.5 sm:gap-1">
            <span
              className={`text-[11px] font-semibold uppercase leading-none tracking-[0.18em] transition-colors sm:text-[13px] ${
                scrolled ? "text-ivory" : "text-ink"
              }`}
            >
              Juan Cruz Falcon
            </span>
            <span
              className={`text-center text-[9px] font-medium uppercase leading-none tracking-[0.19em] transition-colors sm:text-[11px] ${
                scrolled ? "text-sand" : "text-sand"
              }`}
            >
              Sales Coach
            </span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                scrolled
                  ? "text-ivory/80 hover:text-sand"
                  : "text-ink/70 hover:text-slate-blue"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-sand px-5 py-2 text-sm font-semibold text-ink transition-all hover:scale-105 hover:shadow-lg hover:shadow-sand/30"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 transition-transform ${
              scrolled ? "bg-ivory" : "bg-slate-blue"
            } ${open ? "translate-y-1 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 transition-transform ${
              scrolled ? "bg-ivory" : "bg-slate-blue"
            } ${open ? "-translate-y-1 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-slate-deep/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-ivory/90 transition-colors hover:text-sand"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-sand px-5 py-3 text-center font-semibold text-ink"
              >
                Hablemos
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-center text-sm text-ivory/60"
              >
                o escribime por WhatsApp →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
