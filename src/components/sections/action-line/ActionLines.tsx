// src/components/sections/action-lines/ActionLines.tsx

"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ACTION_LINES } from "./data";
import { ActionLinesTabs } from "./ActionLinesTabs";
import { ActionLinesCarousel } from "./ActionLinesCarousel";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ActionLines() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false); //ESTO ES PARA EL HOVER

  useEffect(() => {
    if(paused) return;

    const id = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % ACTION_LINES.length);
    }, 8000); // ESTA ES LA VELOCIDAD EN MS
    
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <motion.section
      id="lineas-de-accion"
      className="relative w-full overflow-hidden bg-white px-6 py-20 sm:py-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-[#0C3C5C]/5 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div variants={item} className="max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
            Líneas de acción
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#4B5563] sm:text-lg">
            ALIDIA estructura su trabajo en líneas que articulan formación, investigación,
            innovación aplicada y colaboración con enfoque territorial.
          </p>
        </motion.div>

        <motion.div 
        variants={item} 
        className="mt-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}>
          <ActionLinesTabs
            items={ACTION_LINES}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
          />
          <ActionLinesCarousel items={ACTION_LINES} activeIndex={activeIndex} />
        </motion.div>
      </div>
    </motion.section>
  );
}
