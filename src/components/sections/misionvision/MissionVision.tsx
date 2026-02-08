"use client";

import { motion, type Variants } from "framer-motion";
import { Target, Telescope } from "lucide-react";
import { InfoCard } from "@/components/layout/InfoCard";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function MissionVision() {
  return (
    <motion.section
      id="mision-vision"
      className="w-full bg-white px-6 py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={item} className="max-w-4xl">
          <h2 className="text-4xl font-extrabold leading-[1.1] text-[#111827] md:text-5xl">
            Misión y Visión
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#4B5563] md:text-xl">
            Nuestro propósito y hacia dónde vamos como iniciativa territorial.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div variants={item}>
            <InfoCard
              title="Misión"
              description="Impulsar el desarrollo responsable y contextualizado de la inteligencia artificial y las tecnologías emergentes, fortaleciendo las capacidades técnicas, académicas y sociales de los actores locales."
              icon={<Target className="h-6 w-6 text-[#0C3C5C]" />}
              highlight
            />
          </motion.div>

          <motion.div variants={item}>
            <InfoCard
              title="Visión"
              description="Para el año 2026, ALIDIA aspira a consolidarse como una iniciativa referente en la provincia de El Oro en el uso ético, responsable y aplicado de la inteligencia artificial y las tecnologías emergentes."
              icon={<Telescope className="h-6 w-6 text-[#0C3C5C]" />}
              highlight
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
