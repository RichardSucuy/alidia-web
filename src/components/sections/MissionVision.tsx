"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function MissionVision() {
  return (
    <motion.section
      className="w-full bg-white px-6 py-14 md:py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Título de sección */}
        <motion.div variants={item} className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl">
            Misión y Visión
          </h2>
          <p className="mt-3 max-w-2xl text-[#4B5563]">
            Nuestro propósito y hacia dónde vamos como iniciativa.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Misión */}
          <motion.article
            variants={item}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm transition hover:shadow-md"
          >
            {/* decoración suave */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#0C3C5C]/10" />

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0C3C5C]/10 text-[#0C3C5C]">
                
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#111827]">Misión</h3>
                <p className="mt-3 leading-relaxed text-[#4B5563]">
                  Impulsar el desarrollo responsable y contextualizado de la inteligencia
                  artificial y las tecnologías emergentes, fortaleciendo las capacidades
                  técnicas, académicas y sociales de los actores locales.
                </p>
                <p className="mt-4 leading-relaxed text-[#4B5563]">
                  ALIDIA promueve espacios de formación, innovación aplicada y articulación
                  intersectorial, orientados a generar impacto social, productivo y educativo
                  desde el territorio.
                </p>
              </div>
            </div>
          </motion.article>

          {/* Visión */}
          <motion.article
            variants={item}
            whileHover={{ y: -2 }}
            className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm transition hover:shadow-md"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#0C3C5C]/10" />

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0C3C5C]/10 text-[#0C3C5C]">
                
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#111827]">Visión</h3>
                <p className="mt-3 leading-relaxed text-[#4B5563]">
                  Para el año 2026, ALIDIA aspira a consolidarse como una iniciativa referente
                  en la provincia de El Oro en el uso ético, responsable y aplicado de la
                  inteligencia artificial y las tecnologías emergentes.
                </p>
                <p className="mt-4 leading-relaxed text-[#4B5563]">
                  Proyecta un ecosistema local fortalecido, con mayor participación académica,
                  comunitaria e institucional, donde la tecnología sea una herramienta para la
                  toma de decisiones informadas y el desarrollo sostenible.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </motion.section>
  );
}
