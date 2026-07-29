"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { contactForm, cta, site } from "@/lib/content";

/* Los envíos van directo a la casilla del cliente (site.email) vía FormSubmit.
   El primer envío dispara un mail de activación que Juan confirma una sola vez. */
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

const inputClasses =
  "w-full rounded-xl bg-ivory/[0.07] px-4 py-3 text-ivory placeholder:text-ivory/35 ring-1 ring-ivory/15 transition focus:bg-ivory/10 focus:outline-none focus:ring-2 focus:ring-sand";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(`FormSubmit respondió ${res.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-slate-blue py-28"
    >
      {/* Glow sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-sand/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-2xl px-6">
        {/* Texto + formulario */}
        <div className="text-center">
          <FadeIn delay={0.1}>
            <p className="mb-5 flex items-center justify-center gap-3 text-[13px] font-medium uppercase tracking-[0.35em] text-sand">
              <span className="h-px w-8 bg-sand" aria-hidden />
              Contacto
              <span className="h-px w-8 bg-sand" aria-hidden />
            </p>
            <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-ivory md:text-6xl">
              {cta.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ivory/70 [text-wrap:balance]">
              {cta.text}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            {status === "success" ? (
              <div
                role="status"
                className="mt-10 rounded-[20px] bg-ivory/[0.06] p-8 ring-1 ring-ivory/15"
              >
                <p className="text-2xl font-semibold text-ivory">
                  {contactForm.success.title}
                </p>
                <p className="mt-2 leading-relaxed text-ivory/70">
                  {contactForm.success.text}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 grid gap-4 text-left sm:grid-cols-2"
              >
                {/* Config de FormSubmit */}
                <input
                  type="hidden"
                  name="_subject"
                  value={contactForm.subject}
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                {/* Honeypot anti-spam */}
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="hidden"
                />

                <div>
                  <label htmlFor="contacto-nombre" className="sr-only">
                    {contactForm.fields.nombre.label}
                  </label>
                  <input
                    id="contacto-nombre"
                    name="Nombre"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder={contactForm.fields.nombre.placeholder}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="contacto-apellido" className="sr-only">
                    {contactForm.fields.apellido.label}
                  </label>
                  <input
                    id="contacto-apellido"
                    name="Apellido"
                    type="text"
                    required
                    autoComplete="family-name"
                    placeholder={contactForm.fields.apellido.placeholder}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="contacto-correo" className="sr-only">
                    {contactForm.fields.correo.label}
                  </label>
                  <input
                    id="contacto-correo"
                    name="Correo"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={contactForm.fields.correo.placeholder}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="contacto-empresa" className="sr-only">
                    {contactForm.fields.empresa.label}
                  </label>
                  <input
                    id="contacto-empresa"
                    name="Empresa"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder={contactForm.fields.empresa.placeholder}
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contacto-mensaje" className="sr-only">
                    {contactForm.fields.mensaje.label}
                  </label>
                  <textarea
                    id="contacto-mensaje"
                    name="Descripción"
                    required
                    rows={4}
                    placeholder={contactForm.fields.mensaje.placeholder}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p
                    aria-live="polite"
                    className="sm:col-span-2 text-sm leading-relaxed text-red-300"
                  >
                    {contactForm.error}{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="underline underline-offset-2 hover:text-red-200"
                    >
                      {site.email}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="sm:col-span-2 rounded-full bg-sand px-8 py-3.5 font-semibold text-ink transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-sand/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                >
                  {status === "sending"
                    ? contactForm.sending
                    : contactForm.submit}
                </button>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-8 text-sm text-ivory/50">
              ¿Preferís hablar directo?{" "}
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/80 underline underline-offset-2 transition-colors hover:text-sand"
              >
                WhatsApp
              </a>
              {" · "}
              <a
                href={`mailto:${site.email}`}
                className="text-ivory/80 underline underline-offset-2 transition-colors hover:text-sand"
              >
                {site.email}
              </a>
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.35em] text-ivory/40">
              Buenos Aires · Argentina
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
