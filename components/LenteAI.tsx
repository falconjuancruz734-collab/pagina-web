"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ShiningText } from "@/components/ui/ShiningText";
import { lente } from "@/lib/content";

/* Demo ilustrativa: Lente como copilot del vendedor.
   Cada conversación se "actúa" completa: el mensaje del vendedor se tipea solo
   en el input y se envía; Lente piensa (estados con brillo) y responde en
   streaming. Al terminar, la conversación se desvanece y arranca otro guion. */
type ChatMessage = {
  from: "user" | "lente";
  text: string;
  thinking?: readonly string[];
};

const conversations: readonly (readonly ChatMessage[])[] = [
  // Guion oficial: retomar el proceso con Grupo Nexo
  [
    {
      from: "user",
      text: "Tengo reunión mañana con Grupo Nexo. Quieren retomar el proceso. Ayudame a prepararla.",
    },
    {
      from: "lente",
      text: "Bien. Tengo todo el historial de Grupo Nexo.\n\nEl proceso anterior duró 6 semanas. Llegaron a propuesta en marzo. El contacto principal fue Rodrigo Méndez, Gerente Comercial. El Director General, Carlos Vega, nunca participó de ninguna reunión.\n\nLa propuesta fue por $42,000 USD anuales. El feedback que registraste fue “no es el momento” y objeción de precio.\n\n¿Rodrigo convocó esta reunión o fuiste vos?",
      thinking: [
        "Consultando el historial de Grupo Nexo…",
        "Repasando el proceso anterior…",
      ],
    },
    { from: "user", text: "Él me escribió." },
    {
      from: "lente",
      text: "Importante. Algo cambió de su lado.\n\nCuando el cliente que dijo “no es el momento” vuelve a llamar, casi siempre es porque el problema se agravó o porque hay presión interna nueva.\n\nLa primera pregunta de mañana tiene que ser: “Rodrigo, ¿qué cambió desde marzo?”\n\nNo entres a vender hasta tener esa respuesta.",
      thinking: ["Analizando el cambio de contexto…"],
    },
    { from: "user", text: "¿Qué más sabés de su situación actual?" },
    {
      from: "lente",
      text: "En el proceso anterior identificaste que 2 vendedores de 6 generaban el 70% del revenue. La tasa de cierre del equipo era del 34% contra un objetivo del 45%.\n\nEn el último trimestre facturaron $980,000 USD — por debajo de los $1.1M que proyectaban.\n\nEl problema de dispersión que tenían en marzo no se resolvió solo. Los números lo confirman.",
      thinking: [
        "Buscando los datos del diagnóstico…",
        "Comparando contra objetivos…",
      ],
    },
    {
      from: "user",
      text: "¿Y cómo manejo la objeción de precio si vuelve a aparecer?",
    },
    {
      from: "lente",
      text: "La objeción de precio del proceso anterior no era real — era falta de claridad en el valor.\n\nSi 2 vendedores sostienen el 70% del revenue y uno de ellos se va o falla, Grupo Nexo tiene $2.1M USD en riesgo directo.\n\nCuando aparezca la objeción de precio, la pregunta es: “¿Cuánto les está costando hoy no tener esto resuelto?”\n\nTu propuesta no es un costo. Es lo que evita ese riesgo.",
      thinking: [
        "Revisando la objeción de marzo…",
        "Calculando el riesgo en revenue…",
      ],
    },
    { from: "user", text: "¿Qué objetivo me recomendás para mañana?" },
    {
      from: "lente",
      text: "No es cerrar. Es dos cosas concretas:\n\nPrimero — entender qué cambió desde marzo. Sin eso no sabés si hay una oportunidad real o si es solo una conversación.\n\nSegundo — conseguir una reunión con Carlos Vega presente. El proceso anterior se cayó porque el decisor real nunca estuvo. Eso no puede repetirse.\n\nSi salís de mañana con esas dos cosas, la reunión fue un éxito.",
      thinking: ["Definiendo el objetivo de la reunión…"],
    },
  ],
];

/* Tiempos de la simulación */
const THINKING_LABEL_MS = 1600; // cuánto se ve cada estado de "pensando" de Lente
const READ_MS = 1400; // pausa de lectura tras cada respuesta
const RESTART_MS = 4200; // conversación completa en pantalla antes del fade
const CLEAR_STAGGER_S = 0.07; // desfase del fade de salida entre burbujas

const randomBetween = (min: number, max: number) =>
  min + Math.random() * (max - min);

/* Las burbujas entran desde abajo y, al limpiar el chat, salen escalonadas.
   La del agente entra más lenta y sin rebote de escala: se siente más calma. */
type BubbleCustom = { i: number; lente: boolean };

const bubbleVariants = {
  initial: (c: BubbleCustom) =>
    c.lente
      ? { opacity: 0, y: 10, scale: 1 }
      : { opacity: 0, y: 14, scale: 0.97 },
  animate: (c: BubbleCustom) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: c.lente
      ? { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const }
      : { duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
  exit: (c: BubbleCustom) => ({
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, delay: c.i * CLEAR_STAGGER_S },
  }),
};

/* Íconos decorativos de la barra del input (estilo lucide, trazo fino) */
function ToolbarIcon({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-lg text-ink/40">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        {children}
      </svg>
    </span>
  );
}

/** Estados de "pensando" de Lente: texto con brillo que rota según la respuesta que prepara. */
function ThinkingStatus({ labels }: { labels: readonly string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (labels.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % labels.length),
      THINKING_LABEL_MS,
    );
    return () => clearInterval(id);
  }, [labels]);

  return (
    <div className="flex justify-start px-1 py-1 text-sm tracking-[-0.06em]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4, transition: { duration: 0.2 } }}
          transition={{ duration: 0.25 }}
        >
          <ShiningText text={labels[index]} />
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

/** Conversación actuada en loop: tipea, envía, piensa, responde en streaming. */
function ChatDemo() {
  const reduce = useReducedMotion();
  const [convIndex, setConvIndex] = useState(0);
  const [visible, setVisible] = useState(() =>
    reduce ? conversations[0].length : 0,
  );
  const [thinking, setThinking] = useState<readonly string[] | null>(null);
  const [streamed, setStreamed] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [sendPressed, setSendPressed] = useState(false);
  const cancelled = useRef(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  // La animación arranca la primera vez que el chat entra en pantalla
  // y de ahí en más sigue corriendo normal (no se reinicia al re-entrar)
  const [started, setStarted] = useState(false);
  const convCursor = useRef(0);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Como en un input real: el texto arranca desde la izquierda y, cuando
  // desborda, el scroll acompaña para que siempre se vea lo último tipeado
  useEffect(() => {
    const el = inputRef.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, [inputValue]);

  useEffect(() => {
    if (reduce || !started) return;
    cancelled.current = false;

    let timer: ReturnType<typeof setTimeout>;
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = setTimeout(resolve, ms);
      });
    const halted = () => cancelled.current;

    (async () => {
      let idx = convCursor.current;
      while (!halted()) {
        const conv = conversations[idx];
        setConvIndex(idx);
        setVisible(0);
        setThinking(null);
        setStreamed(null);
        setInputValue("");
        // Pausa con el saludo de bienvenida en pantalla antes de empezar a tipear
        await sleep(2600);

        for (let i = 0; i < conv.length; i++) {
          if (halted()) return;
          const message = conv[i];

          if (message.from === "user") {
            // El mensaje se tipea solo en el input, letra por letra
            for (let c = 1; c <= message.text.length; c++) {
              if (halted()) return;
              setInputValue(message.text.slice(0, c));
              await sleep(randomBetween(26, 60));
            }
            await sleep(450);
            if (halted()) return;
            // "Click" en enviar: el input se vacía y el mensaje aparece en el chat
            setSendPressed(true);
            await sleep(140);
            setSendPressed(false);
            setInputValue("");
            setVisible(i + 1);
            await sleep(600);
          } else {
            const labels = message.thinking ?? ["Pensando…"];
            setThinking(labels);
            await sleep(labels.length * THINKING_LABEL_MS + 300);
            if (halted()) return;
            setThinking(null);
            // La respuesta llega en streaming, palabra por palabra
            const words = message.text.split(" ");
            let partial = "";
            setStreamed("");
            for (const word of words) {
              if (halted()) return;
              partial = partial ? `${partial} ${word}` : word;
              setStreamed(partial);
              await sleep(randomBetween(40, 90));
            }
            // Dejar terminar el fade de las últimas palabras antes del swap
            await sleep(750);
            if (halted()) return;
            setStreamed(null);
            setVisible(i + 1);
            await sleep(READ_MS);
          }
        }

        if (halted()) return;
        await sleep(RESTART_MS);
        // Vaciar la lista dispara el fade escalonado de salida
        setVisible(0);
        await sleep(conv.length * CLEAR_STAGGER_S * 1000 + 600);
        idx = (idx + 1) % conversations.length;
        convCursor.current = idx;
      }
    })();

    return () => {
      cancelled.current = true;
      clearTimeout(timer);
    };
  }, [reduce, started]);

  const conv = conversations[convIndex];
  const bubbles: (ChatMessage & { key: string; streaming?: boolean })[] = conv
    .slice(0, visible)
    .map((message, i) => ({ ...message, key: `${convIndex}-${i}` }));
  // La burbuja en streaming usa la misma key que tendrá el mensaje final,
  // así React no la re-anima cuando el texto queda completo
  if (streamed !== null) {
    bubbles.push({
      from: "lente",
      text: streamed,
      key: `${convIndex}-${visible}`,
      streaming: true,
    });
  }

  return (
    <div ref={rootRef}>
      {/* Alto fijo: los mensajes se apilan desde abajo y los viejos salen por arriba */}
      <div className="chat-fade relative flex h-[23rem] flex-col justify-end gap-6 overflow-hidden">
        {/* Estado vacío: saludo centrado hasta que llega el primer mensaje */}
        <AnimatePresence>
          {bubbles.length === 0 && !thinking && (
            <motion.div
              key={`greeting-${convIndex}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, delay: 0.25 },
              }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.3 } }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            >
              <p className="whitespace-nowrap text-[1.35rem] font-semibold tracking-[-0.03em] text-ink sm:text-2xl md:text-[1.75rem]">
                ¿En qué te ayudo <span className="text-ink/35">hoy?</span>
              </p>
              <p className="mt-3 text-balance text-sm text-ink/45">
                Preguntame por un cliente, una reunión o una objeción
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {bubbles.map((message, i) => (
            <motion.div
              key={message.key}
              custom={{ i, lente: message.from === "lente" }}
              variants={bubbleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`flex shrink-0 ${
                message.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={
                  message.from === "user"
                    ? "max-w-[85%] rounded-xl bg-[#EA580C] px-4 py-3 text-ivory"
                    : "max-w-[85%] rounded-xl bg-ink/[0.05] px-4 py-3 text-ink"
                }
              >
                {/* Meta del mensaje: ícono + tiempo, como en el producto real */}
                <p
                  className={`mb-1 flex items-center gap-1.5 text-[11px] ${
                    message.from === "user" ? "text-ivory/75" : "text-ink/45"
                  }`}
                >
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                  >
                    {message.from === "user" ? (
                      <>
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </>
                    ) : (
                      <>
                        <path d="M12 8V4H8" />
                        <rect width="16" height="12" x="4" y="8" rx="2" />
                        <path d="M2 14h2" />
                        <path d="M20 14h2" />
                        <path d="M15 13v2" />
                        <path d="M9 13v2" />
                      </>
                    )}
                  </svg>
                  ahora
                </p>
                <p className="whitespace-pre-line text-sm leading-relaxed">
                  {message.streaming
                    ? // Los espacios y saltos de párrafo van como texto plano;
                      // solo las palabras llevan el fade de entrada
                      message.text
                        .split(/(\s+)/)
                        .map((part, w) =>
                          /^\s+$/.test(part) ? (
                            part
                          ) : (
                            <span key={w} className="animate-word-in">
                              {part}
                            </span>
                          ),
                        )
                    : message.text}
                </p>
              </div>
            </motion.div>
          ))}

          {thinking && (
            <motion.div
              key={`thinking-${convIndex}-${visible}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.25 }}
              className="shrink-0"
            >
              <ThinkingStatus labels={thinking} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input simulado: decorativo, el "vendedor" escribe y envía solo */}
      <div
        aria-hidden
        className="pointer-events-none mt-6 select-none border-t border-ink/10 pt-5"
      >
        {/* Campo de texto */}
        <div
          ref={inputRef}
          className="flex min-h-[2.75rem] w-full min-w-0 items-center overflow-hidden rounded-xl bg-ink/[0.04] px-4 ring-1 ring-ink/10"
        >
          {inputValue ? (
            <span className="whitespace-nowrap text-sm text-ink">
              {inputValue}
              <span className="ml-0.5 inline-block h-4 w-[2px] animate-caret-blink bg-ink/70 align-middle" />
            </span>
          ) : (
            <span className="whitespace-nowrap text-sm text-ink/35">
              <span className="mr-0.5 inline-block h-4 w-[2px] animate-caret-blink bg-ink/60 align-middle" />
              Escribile a Lente…
            </span>
          )}
        </div>

        {/* Barra de herramientas */}
        <div className="mt-3 flex items-center gap-2">
          <div className="rounded-xl px-1.5 py-1 ring-1 ring-ink/10">
            <ToolbarIcon>
              {/* Agregar imagen */}
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </ToolbarIcon>
          </div>
          <div className="rounded-xl px-1.5 py-1 ring-1 ring-ink/10">
            <ToolbarIcon>
              {/* Micrófono */}
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </ToolbarIcon>
          </div>

          <motion.div
            animate={{
              scale: sendPressed ? 0.82 : 1,
              opacity: inputValue ? 1 : 0.5,
            }}
            transition={{ duration: 0.15 }}
            className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EA580C] text-white shadow-lg shadow-[#EA580C]/25"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function LenteAI() {
  return (
    <section
      id="lente-ai"
      className="relative overflow-hidden bg-gradient-to-br from-slate-deep via-slate-blue to-slate-deep py-28"
    >
      {/* Glow de acento */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[28rem] w-[28rem] translate-x-1/3 rounded-full bg-sand/15 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <FadeIn>
            <p className="mb-5 flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.35em] text-sand">
              <span className="h-px w-8 bg-sand" aria-hidden />
              Lente · Tu agente comercial con IA
            </p>
            <h2 className="text-4xl font-normal leading-[1.02] tracking-[-0.06em] text-ivory md:text-5xl">
              El primer acompañamiento de coaching comercial con{" "}
              <em className="font-semibold italic text-sand">IA</em>.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-7 leading-relaxed text-ivory/70">{lente.intro}</p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <ul className="mt-8 space-y-4">
              {lente.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sand text-[10px] font-bold text-ink"
                  >
                    ✓
                  </span>
                  <span className="text-ivory/80">{feature}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

        </div>

        {/* Mockup de chat con estética glass.
            min-w-0 evita que el texto del input (nowrap) estire la columna. */}
        <FadeIn delay={0.2} y={40} className="min-w-0">
          <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 shadow-2xl shadow-ink/40">
            {/* Header estilo producto: badge oscuro con el isologo + nombre y subtítulo */}
            <div className="mb-5 flex items-center gap-3 border-b border-ink/10 pb-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1c1c1e]">
                <Image
                  src="/lente-ai.png"
                  alt=""
                  aria-hidden
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </span>
              <div className="min-w-0">
                <p className="text-[15px] font-bold leading-tight tracking-[-0.01em] text-ink">
                  Lente AI
                </p>
                <p className="text-xs text-ink/55">Inteligencia Artificial</p>
              </div>

              <div className="ml-auto flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-xs text-ink/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Activo
                </span>
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-4 w-4 text-ink/30"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </div>
            </div>

            <ChatDemo />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
