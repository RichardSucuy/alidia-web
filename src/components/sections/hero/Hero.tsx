"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo/alidia-vertical.svg"
            alt="ALIDIA"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 max-w-4xl text-4xl font-extrabold tracking-tight text-[#111827] md:text-6xl"
        >
          Alianza para el Liderazgo e Innovación en el Desarrollo de Inteligencia Artificial
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[#4B5563] md:text-lg"
        >
          Desarrollo responsable de inteligencia artificial desde el territorio.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex gap-3"
        >
          <a className="rounded-xl bg-[#0C3C5C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0C3C5C]/90 transition">
            Conócenos
          </a>
          <a className="rounded-xl border px-6 py-3 text-sm font-semibold text-[#1F2937] hover:bg-[#0C3C5C]/5 transition">
            Contacto
          </a>
        </motion.div>

      </div>
    </section>
  );
}
