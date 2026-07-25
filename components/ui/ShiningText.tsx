"use client";

import { motion } from "motion/react";

/* Efecto "shining text" (21st.dev/@preetsuthar17) adaptado a la paleta del sitio:
   un brillo que barre el texto mientras el agente "piensa". */
export function ShiningText({ text }: { text: string }) {
  return (
    <motion.span
      className="bg-[linear-gradient(110deg,rgba(243,239,235,0.4),35%,#ffffff,50%,rgba(243,239,235,0.4),75%,rgba(243,239,235,0.4))] bg-[length:200%_100%] bg-clip-text text-transparent"
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
    >
      {text}
    </motion.span>
  );
}
