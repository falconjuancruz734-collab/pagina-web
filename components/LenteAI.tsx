"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ShiningText } from "@/components/ui/ShiningText";
import { lente, site } from "@/lib/content";

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
  // Guion 1: objeción de precio
  [
    {
      from: "user",
      text: "Mañana tengo reunión con Acme. La última vez dijeron que somos caros.",
    },
    {
      from: "lente",
      text: "Contexto: compraron en marzo y valoran mucho el soporte postventa. La objeción de precio apareció recién cuando cambió el interlocutor de compras.",
      thinking: [
        "Consultando el historial de Acme…",
        "Repasando la última reunión…",
      ],
    },
    { from: "user", text: "¿Cómo la encaro?" },
    {
      from: "lente",
      text: "Arrancá reafirmando el valor del soporte que ya reconocen, antes de hablar de precio. Te dejo 3 preguntas, con el método de Juan, para guiar la charla y despejar la objeción.",
      thinking: [
        "Analizando la objeción de precio…",
        "Armando preguntas con el método de Juan…",
      ],
    },
  ],
  // Guion 2: preparar una primera reunión
  [
    {
      from: "user",
      text: "El jueves tengo la primera reunión con Grupo Vega y no los conozco bien.",
    },
    {
      from: "lente",
      text: "Distribuidora regional, unos 40 vendedores. Llegaron referidos. En empresas así el dolor típico es cotizar rápido sin indagar el problema de fondo.",
      thinking: [
        "Buscando el contexto de Grupo Vega…",
        "Cruzando con casos similares…",
      ],
    },
    { from: "user", text: "¿Cómo arranco la reunión?" },
    {
      from: "lente",
      text: "Primera reunión: diagnóstico, no pitch. Llevá 4 preguntas de descubrimiento y cerrá acordando un próximo paso concreto, con fecha.",
      thinking: ["Preparando la agenda de descubrimiento…"],
    },
  ],
  // Guion 3: seguimiento de una propuesta
  [
    {
      from: "user",
      text: "Le mandé la propuesta a Distrimax hace 2 semanas y no contestan. ¿Insisto?",
    },
    {
      from: "lente",
      text: "Sí, pero sin el clásico “¿pudiste verla?”. En la última reunión dijeron que definen presupuesto a fin de mes: usá ese disparador.",
      thinking: [
        "Revisando la propuesta enviada…",
        "Buscando señales en la última reunión…",
      ],
    },
    { from: "user", text: "Dame un mensaje corto para mandarles." },
    {
      from: "lente",
      text: "“Hola, pensando en el cierre de presupuesto de fin de mes: ¿les sirve un resumen de una página con el retorno esperado? Lo tengo listo el jueves.”",
      thinking: ["Redactando el seguimiento…"],
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
    <span className="flex h-8 w-8 items-center justify-center rounded-lg text-ivory/45">
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

  // Como en un input real: el texto arranca desde la izquierda y, cuando
  // desborda, el scroll acompaña para que siempre se vea lo último tipeado
  useEffect(() => {
    const el = inputRef.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, [inputValue]);

  useEffect(() => {
    if (reduce) return;
    cancelled.current = false;

    let timer: ReturnType<typeof setTimeout>;
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = setTimeout(resolve, ms);
      });
    const halted = () => cancelled.current;

    (async () => {
      let idx = 0;
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
      }
    })();

    return () => {
      cancelled.current = true;
      clearTimeout(timer);
    };
  }, [reduce]);

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
    <div>
      <div className="relative min-h-[23rem] space-y-4">
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
              <p className="whitespace-nowrap text-[1.35rem] font-semibold tracking-[-0.03em] text-ivory sm:text-2xl md:text-[1.75rem]">
                ¿En qué te ayudo <span className="text-ivory/50">hoy?</span>
              </p>
              <p className="mt-3 text-balance text-sm text-ivory/45">
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
              className={`flex ${
                message.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <p
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed tracking-[-0.06em] ${
                  message.from === "user"
                    ? "rounded-br-md bg-ivory text-ink"
                    : "rounded-bl-md bg-sand/90 text-ink"
                }`}
              >
                {message.streaming
                  ? message.text.split(" ").map((word, w) => (
                      <Fragment key={w}>
                        <span className="animate-word-in">{word}</span>{" "}
                      </Fragment>
                    ))
                  : message.text}
              </p>
            </motion.div>
          ))}

          {thinking && (
            <motion.div
              key={`thinking-${convIndex}-${visible}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.25 }}
            >
              <ThinkingStatus labels={thinking} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input simulado: decorativo, el "vendedor" escribe y envía solo */}
      <div
        aria-hidden
        className="pointer-events-none mt-6 select-none border-t border-ivory/10 pt-5"
      >
        {/* Campo de texto */}
        <div
          ref={inputRef}
          className="flex min-h-[2.75rem] items-center overflow-hidden rounded-xl bg-ivory/[0.06] px-4 ring-1 ring-ivory/10"
        >
          {inputValue ? (
            <span className="whitespace-nowrap text-sm text-ivory">
              {inputValue}
              <span className="ml-0.5 inline-block h-4 w-[2px] animate-caret-blink bg-ivory/80 align-middle" />
            </span>
          ) : (
            <span className="whitespace-nowrap text-sm text-ivory/35">
              <span className="mr-0.5 inline-block h-4 w-[2px] animate-caret-blink bg-ivory/70 align-middle" />
              Escribile a Lente…
            </span>
          )}
        </div>

        {/* Barra de herramientas */}
        <div className="mt-3 flex items-center gap-2">
          <div className="rounded-xl px-1.5 py-1 ring-1 ring-ivory/10">
            <ToolbarIcon>
              {/* Agregar imagen */}
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </ToolbarIcon>
          </div>
          <div className="rounded-xl px-1.5 py-1 ring-1 ring-ivory/10">
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
            className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sand text-ink shadow-lg shadow-sand/20"
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
            <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-sand">
              <span className="h-px w-8 bg-sand" aria-hidden />
              Lente · Tu agente comercial con IA
            </p>
            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-ivory md:text-5xl">
              El primer acompañamiento de coaching comercial con{" "}
              <em className="font-serif italic tracking-[-0.01em] text-sand">IA</em>.
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

          <FadeIn delay={0.35}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={site.lente}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-sand px-8 py-3.5 font-semibold text-ink transition-transform hover:scale-105"
              >
                Conocer Lente →
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-ivory/25 px-8 py-3.5 font-medium text-ivory transition-colors hover:border-sand hover:text-sand"
              >
                Quiero implementarlo
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Mockup de chat con estética glass */}
        <FadeIn delay={0.2} y={40}>
          <div className="relative overflow-hidden rounded-[28px] border border-ivory/10 bg-gradient-to-b from-ivory/[0.08] via-ivory/[0.04] to-ivory/[0.02] p-6 shadow-2xl shadow-ink/40 backdrop-blur-2xl">
            {/* Brillo superior sutil del vidrio */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ivory/25 to-transparent"
            />

            <div className="mb-6 flex items-center gap-2 border-b border-ivory/10 pb-4">
              <Image
                src="/lente-ai.png"
                alt=""
                aria-hidden
                width={30}
                height={30}
                className="-m-0.5 h-[30px] w-[30px] object-contain"
              />
              <p className="text-sm font-medium text-ivory">Lente AI</p>
              <span className="relative ml-1 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <div className="ml-auto flex items-center gap-2">
                <span className="rounded-full bg-ivory/10 px-3 py-1 text-xs font-medium text-ivory/80">
                  Coach IA
                </span>
                <span className="rounded-full bg-sand/15 px-3 py-1 text-xs font-semibold text-sand ring-1 ring-sand/30">
                  Pro
                </span>
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="ml-1 h-4 w-4 text-ivory/40"
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
