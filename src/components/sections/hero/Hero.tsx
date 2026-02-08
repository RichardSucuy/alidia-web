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
      viewport={{ once: false, amount: 0.6 }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-[4fr_1.5fr]">
  
  {/* Columna izquierda: texto */}
  <motion.div variants={item}>
    <div className="flex items-center gap-3">      
    </div>

    <h1 className="mt-8 max-w-none text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111827] md:text-6xl">
      Alianza para el Liderazgo e Innovación en el Desarrollo de Inteligencia Artificial
    </h1>

    <p className="mt-6 max-w-md text-base leading-relaxed text-[#4B5563] md:text-lg">
      Desarrollo responsable de inteligencia artificial desde el territorio.
    </p>

    <div className="mt-10 flex gap-3">
      <a className="rounded-xl bg-[#0C3C5C] px-6 py-3 text-sm font-semibold text-white">
        Conócenos
      </a>
      <a className="rounded-xl border px-6 py-3 text-sm font-semibold">
        Contacto
      </a>
    </div>
  </motion.div>

  {/* Columna derecha: imagen */}
  <motion.div
    variants={item}
    className="flex justify-center md:justify-end"
  >
    <Image
      src="/logo/alidia-vertical.png"
      alt="ALIDIA"
      width={100}
      height={100}
      className="w-48 md:w-56 lg:w-64 h-auto"
    />
  </motion.div>

</div>
    </motion.section>
  );

}
