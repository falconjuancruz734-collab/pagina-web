"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

export type RevealSegment = {
  text?: string;
  className?: string;
  br?: boolean;
};

type TextRevealProps = {
  segments: RevealSegment[];
  className?: string;
};

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  /* Una sola copia del texto (SEO: sin palabras duplicadas en el DOM).
     El "ghost" atenuado es el mismo span arrancando en opacidad 0.2. */
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
    </motion.span>
  );
}

const words = (text: string) => text.split(" ").filter(Boolean);

export function TextReveal({ segments, className }: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.45"],
  });

  if (reduce) {
    return (
      <span className={className}>
        {segments.map((s, i) =>
          s.br ? (
            <br key={i} />
          ) : (
            <span key={i} className={s.className}>
              {s.text}{" "}
            </span>
          ),
        )}
      </span>
    );
  }

  const totalWords = segments.reduce(
    (sum, s) => sum + (s.text ? words(s.text).length : 0),
    0,
  );
  /* El índice de cada palabra se calcula antes de renderizar: mutar un
     contador durante el render da resultados inconsistentes si React
     reanuda o descarta el trabajo (renderizado concurrente). */
  let cursor = 0;
  const indexed = segments.map((s) =>
    s.br
      ? null
      : words(s.text ?? "").map((word) => ({ word, index: cursor++ })),
  );

  return (
    <span ref={ref} className={className}>
      {segments.map((s, i) => {
        if (s.br) return <br key={i} />;
        return (
          <span key={i} className={s.className}>
            {indexed[i]?.map(({ word, index }, j) => (
              <span key={`${word}-${j}`}>
                <Word
                  word={word}
                  progress={scrollYProgress}
                  range={[index / totalWords, (index + 1) / totalWords]}
                />{" "}
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
}
