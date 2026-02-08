"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
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

export function Hero() {
  return (
    <motion.section
      className="w-full bg-white px-6 py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Logo */}
        <motion.div variants={item} className="flex items-center gap-3">
          <Image
            src="/logo/alidia-vertical.png"
            alt="ALIDIA"
            width={280}
            height={260}
            className="h-10 w-auto"
            priority
          />
        </motion.div>

        {/* Título */}
        <motion.h1
          variants={item}
          className="mt-8 max-w-4xl text-4xl font-extrabold tracking-tight text-[#111827] md:text-6xl"
        >
          Alianza para el Liderazgo e Innovación en el Desarrollo de Inteligencia
          Artificial
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[#4B5563] md:text-lg"
        >
          Desarrollo responsable de inteligencia artificial desde el territorio.
        </motion.p>

        {/* Botones */}
        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#what-is"
            className="rounded-xl bg-[#0C3C5C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0C3C5C]/90"
          >
            Conócenos
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-[#E5E7EB] px-6 py-3 text-sm font-semibold text-[#1F2937] transition hover:border-[#0C3C5C]/40 hover:bg-[#0C3C5C]/5"
          >
            Contacto
          </a>
        </motion.div>
      </div>
    </motion.section>
  );

}
