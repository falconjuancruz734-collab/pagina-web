"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { newsletter } from "@/lib/content";

/* El alta va directo a Kit desde el browser, igual que el form de contacto
   contra FormSubmit. Kit siempre responde 200 con un JSON que trae el estado:
   - success:     alta hecha, falta que confirme el mail (doble opt-in)
   - quarantined: sospecha de bot, hay que mandarlo al desafío que devuelve
   - failed:      mail inválido o error del lado de Kit */
const FORM_ENDPOINT = `https://app.kit.com/forms/${newsletter.formId}/subscriptions`;

type Status = "idle" | "sending" | "success" | "error";

type KitResponse = {
  status?: "success" | "quarantined" | "failed";
  url?: string;
};

export function Newsletter() {
  const [status, setStatus] = useState<Status>("idle");
  const [completo, setCompleto] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // Sin mail no se manda nada, y el trim evita que un espacio pegado de más
    // lo haga rebotar del lado de Kit.
    const data = new FormData(form);
    const email = String(data.get("email_address") ?? "").trim();
    if (!email) {
      setCompleto(false);
      return;
    }
    data.set("email_address", email);

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`Kit respondió ${res.status}`);

      const alta: KitResponse = await res.json();
      // El desafío anti-bot se resuelve en una página de Kit: es el mismo
      // recorrido que hace su propio embed cuando marca `quarantined`.
      if (alta.status === "quarantined" && alta.url) {
        window.location.href = alta.url;
        return;
      }
      if (alta.status !== "success") throw new Error("Kit rechazó el alta");

      form.reset();
      setCompleto(false);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="newsletter" className="bg-ivory py-28">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <div className="text-center">
            <SectionLabel align="center">Newsletter</SectionLabel>
            <h2 className="text-4xl font-normal leading-[1.02] tracking-[-0.06em] text-ink md:text-5xl">
              Lo que escribo,{" "}
              <em className="font-semibold italic text-slate-blue">
                lo que pienso
              </em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/60 [text-wrap:balance]">
              {newsletter.text}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 rounded-[20px] bg-white p-8 ring-1 ring-ink/5 sm:p-10">
            {status === "success" ? (
              <div role="status" className="text-center">
                <p className="text-2xl font-semibold text-ink">
                  {newsletter.success.title}
                </p>
                <p className="mt-2 leading-relaxed text-ink/60">
                  {newsletter.success.text}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                onInput={(e) =>
                  setCompleto(
                    String(
                      new FormData(e.currentTarget).get("email_address") ?? "",
                    ).trim() !== "",
                  )
                }
              >
                {/* En una sola fila desde sm: el campo se estira y el botón
                    conserva su ancho natural. */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Correo
                  </label>
                  <input
                    id="newsletter-email"
                    name="email_address"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={newsletter.placeholder}
                    className="w-full rounded-xl bg-ivory px-4 py-3.5 text-ink ring-1 ring-ink/10 transition placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-slate-blue sm:flex-1"
                  />
                  <button
                    type="submit"
                    disabled={!completo || status === "sending"}
                    className="shrink-0 rounded-full bg-slate-blue px-8 py-3.5 font-semibold text-ivory transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-slate-blue/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {status === "sending"
                      ? newsletter.sending
                      : newsletter.submit}
                  </button>
                </div>

                {status === "error" && (
                  <p
                    aria-live="polite"
                    className="mt-4 text-sm leading-relaxed text-red-600"
                  >
                    {newsletter.error}
                  </p>
                )}

                <p className="mt-4 text-center text-sm text-ink/60">
                  {newsletter.legal}
                </p>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
