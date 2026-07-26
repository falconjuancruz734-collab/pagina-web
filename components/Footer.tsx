import Image from "next/image";
import { site } from "@/lib/content";

const nav = [
  { href: "#quien-soy", label: "Quién soy" },
  { href: "#metodo", label: "Cómo trabajo" },
  { href: "#lente-ai", label: "Lente AI" },
  { href: "#modalidades", label: "Modalidades" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#notas", label: "Notas" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-slate-deep py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/Firma Blanco.png"
              alt="Firma de Juan Cruz Falcón"
              width={1254}
              height={1254}
              className="h-20 w-20 object-contain"
            />
            <p className="mt-2 text-[13px] font-semibold uppercase leading-none tracking-[0.18em] text-ivory">
              Juan Cruz Falcon
            </p>
            <p className="mt-1.5 text-[11px] font-medium uppercase leading-none tracking-[0.19em] text-sand">
              Sales Coach
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ivory/60 transition-colors hover:text-sand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-6">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ivory/60 transition-colors hover:text-sand"
            >
              Instagram
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ivory/60 transition-colors hover:text-sand"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/10 pt-6 text-center">
          <p className="text-xs text-ivory/40">
            © {new Date().getFullYear()} Juan Cruz Falcón · Sales Coach ·
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
