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
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative inline-block">
      <span aria-hidden className="opacity-20">
        {word}
      </span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {word}
      </motion.span>
    </span>
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
  let wordIndex = 0;

  return (
    <span ref={ref} className={className}>
      {segments.map((s, i) => {
        if (s.br) return <br key={i} />;
        return (
          <span key={i} className={s.className}>
            {words(s.text ?? "").map((word, j) => {
              const start = wordIndex / totalWords;
              wordIndex += 1;
              const end = wordIndex / totalWords;
              return (
                <span key={`${word}-${j}`}>
                  <Word
                    word={word}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />{" "}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
