"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollTextRiseProps {
  text: string;
  className?: string;
  textClassName?: string;
}

const ScrollTextRise: FC<ScrollTextRiseProps> = ({
  text,
  className,
  textClassName,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Bind to the main window scroll, target is this section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 45%"], // Animates as it scrolls through the active view
  });

  const words = text.split(" ");

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full py-24 select-none", className)}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center">
        <p
          className={cn(
            "flex flex-wrap justify-center p-5 text-center text-xl font-medium leading-relaxed",
            textClassName,
          )}
        >
          {words.map((word, i) => {
            const fraction = i / words.length;
            const start = Math.min(0.9, fraction);
            const end = Math.min(1.0, start + 0.1);
            return (
              <RevealWord
                key={`${i}-${word}`}
                progress={scrollYProgress}
                range={[start, end]}
              >
                {word}
              </RevealWord>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface RevealWordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const RevealWord: FC<RevealWordProps> = ({ children, progress, range }) => {
  // Transition text color from dimmed zinc-800 to solid white
  const color = useTransform(progress, range, ["#27272a", "#f4f4f5"]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <span className="relative mx-1 overflow-hidden lg:mx-2 xl:mx-2.5">
      <motion.span
        style={{ color, y }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
};

export { ScrollTextRise };
