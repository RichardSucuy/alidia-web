"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const specificObjectives = [
  {
    title: "Fortalecer capacidades",
    text: "Fortalecer las capacidades técnicas y académicas de estudiantes, profesionales y actores locales en áreas relacionadas con inteligencia artificial y tecnologías emergentes.",
  },
  {
    title: "Promover formación y divulgación",
    text: "Promover espacios de formación, divulgación y discusión técnica que faciliten el acceso al conocimiento especializado en contextos locales.",
  },
  {
    title: "Impulsar proyectos de impacto",
    text: "Impulsar proyectos de impacto social y productivo que utilicen tecnologías emergentes para abordar problemáticas históricas en sectores estratégicos.",
  },
  {
    title: "Articular esfuerzos",
    text: "Articular esfuerzos entre la academia, el sector privado, instituciones públicas y la comunidad para fomentar la innovación colaborativa.",
  },
];

export function Objectives() {
  return (
    <motion.section
      id="objetivos"
      className="w-full bg-white px-6 py-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <motion.div variants={item} className="max-w-3xl">
          <h2 className="text-4xl font-extrabold leading-[1.1] text-[#111827] md:text-5xl">
            Objetivo general y objetivos específicos
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4B5563] md:text-xl">
            Qué buscamos lograr y cómo lo aterrizamos en acciones claras.
          </p>
        </motion.div>

        {/* Layout 2 columnas */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* Columna izquierda: Objetivo general */}
          <motion.div variants={item}>
            <div className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
              {/* Decoración sutil */}
              {/*<div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#0C3C5C]/10" />*/}

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0C3C5C]/20 bg-[#0C3C5C]/5 px-3 py-1 text-xs font-semibold tracking-wide text-[#0C3C5C]">
                  OBJETIVO GENERAL
                </div>

                <p className="mt-5 text-base leading-relaxed text-[#1F2937] md:text-lg">
                  Fortalecer el desarrollo responsable y contextualizado de la inteligencia
                  artificial y las tecnologías emergentes, mediante la formación, la innovación
                  aplicada y la articulación de actores locales, con el fin de generar impacto
                  social, educativo y productivo desde el territorio.
                </p>

                {/* Mini “nota” abajo (opcional) */}
                <div className="mt-6 rounded-xl border border-[#E5E7EB] bg-gray-50 px-4 py-3 text-sm text-[#4B5563]">
                  Enfoque: <span className="font-semibold text-[#0C3C5C]">territorio, utilidad social y colaboración</span>.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha: Objetivos específicos (timeline/lista numerada) */}
          <motion.div variants={item}>
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#111827]">
                Objetivos específicos
              </h3>
              <p className="mt-2 text-sm text-[#4B5563]">
                Acciones estratégicas para cumplir el objetivo general.
              </p>

              {/* Lista con línea vertical */}
              <div className="mt-8 relative pl-6">
                {/* Línea vertical */}
                <div className="absolute left-2 top-1 bottom-1 w-px bg-[#E5E7EB]" />

                <div className="space-y-7">
                  {specificObjectives.map((obj, idx) => (
                <motion.div
                  key={obj.title}
                  variants={item}
                  whileHover={{ x: 2 }}
                  className="relative"
                >
                  <div className="flex items-start gap-4">
                    {/* Número opcional (minimal) */}
                    <div className="mt-0.5 min-w-9 text-xs font-semibold text-[#0C3C5C]/70">
                      {/*{String(idx + 1).padStart(2, "0")}*/}
                    </div>

                    {/* Texto con línea sutil */}
                    <div className="border-l-2 border-[#0C3C5C]/25 pl-4">
                      <div className="text-base font-semibold text-[#111827]">
                        {obj.title}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">
                        {obj.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
                ))}
                </div>
              </div>

              {/* Callout final (opcional) */}
              <div className="mt-8 rounded-xl bg-[#0C3C5C]/5 p-4 text-sm text-[#1F2937]">
                Estos objetivos guían la planificación de proyectos, eventos y alianzas en ALIDIA.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
