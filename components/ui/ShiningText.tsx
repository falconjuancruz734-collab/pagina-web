"use client";

import { motion } from "motion/react";

/* Efecto "shining text" (21st.dev/@preetsuthar17) adaptado a la paleta del sitio:
   un brillo que barre el texto mientras el agente "piensa".
   Pensado para el card claro: base gris tenue y destello en tinta. */
export function ShiningText({ text }: { text: string }) {
  return (
    <motion.span
      className="bg-[linear-gradient(110deg,rgba(17,17,17,0.3),35%,rgba(17,17,17,0.95),50%,rgba(17,17,17,0.3),75%,rgba(17,17,17,0.3))] bg-[length:200%_100%] bg-clip-text text-transparent"
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
    >
      {text}
    </motion.span>
  );
}
