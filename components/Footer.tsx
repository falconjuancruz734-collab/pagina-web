import Image from "next/image";
import { site } from "@/lib/content";

const secciones = [
  { href: "#el-problema", label: "El problema" },
  { href: "#por-que-coach", label: "Por qué un coach" },
  { href: "#quien-soy", label: "Quién soy" },
  { href: "#modalidades", label: "Modalidades" },
  { href: "#lente-ai", label: "Lente" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#blog", label: "Blog" },
];

const contacto = [
  { href: `mailto:${site.email}`, label: site.email, external: false },
  { href: site.whatsapp, label: "WhatsApp", external: true },
  { href: "#contacto", label: "Agendar una llamada", external: false },
];

const redes = [
  { href: site.instagram, label: "Instagram" },
  { href: site.linkedin, label: "LinkedIn" },
];

const linkClasses =
  "text-sm text-ivory/60 transition-colors hover:text-sand";

function ColumnTitle({ children }: { children: string }) {
  return (
    <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sand">
      {children}
    </p>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-deep pb-8 pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr] lg:gap-8">
          {/* Marca */}
          <div>
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
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/50">
              Acompaño a equipos comerciales a cumplir sus objetivos y lograr
              su máxima performance.
            </p>
          </div>

          {/* Secciones */}
          <nav aria-label="Secciones del sitio">
            <ColumnTitle>Secciones</ColumnTitle>
            <ul className="space-y-3">
              {secciones.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClasses}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <ColumnTitle>Contacto</ColumnTitle>
            <ul className="space-y-3">
              {contacto.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`${linkClasses} break-words`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-ivory/35">
              Buenos Aires · Argentina
            </p>
          </div>

          {/* Redes */}
          <div>
            <ColumnTitle>Seguime</ColumnTitle>
            <ul className="space-y-3">
              {redes.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClasses}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/10 pt-6">
          <p className="text-center text-xs text-ivory/40">
            © {new Date().getFullYear()} Juan Cruz Falcón · Sales Coach ·
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
