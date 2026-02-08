"use client";

import { motion, type Variants } from "framer-motion";

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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function WhoWeAre() {
  return (
    <motion.section
      id="quienes-somos"
      className="relative w-full overflow-hidden bg-white px-6 py-20 sm:py-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#0C3C5C]/[0.05] to-transparent" />
      <div className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full bg-[#0C3C5C]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-52 w-52 rounded-full bg-[#0C3C5C]/[0.07] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div variants={item}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0C3C5C]/20 bg-white px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0C3C5C]" />
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#0C3C5C]/80">
              Identidad Institucional
            </p>
          </div>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
            Quienes somos?
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#4B5563]">
            <p>
              ALIDIA esta conformada por un colectivo de profesionales, investigadores y actores
              vinculados al ambito academico, tecnologico y social, con raices y compromiso en el
              territorio.
            </p>
            <p>
              Surge en Machala, Ecuador, como respuesta a la necesidad de acercar la inteligencia
              artificial a realidades locales que requieren soluciones contextualizadas,
              responsables y sostenibles.
            </p>
            <p>
              Actuamos como un espacio articulador entre conocimiento tecnico y participacion
              comunitaria para impulsar desarrollo local con enfoque humano.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0C3C5C]">
                Academia
              </p>
              <p className="mt-1 text-sm text-[#4B5563]">Investigacion aplicada</p>
            </div>
            <div className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0C3C5C]">
                Tecnologia
              </p>
              <p className="mt-1 text-sm text-[#4B5563]">Soluciones contextualizadas</p>
            </div>
            <div className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0C3C5C]">
                Territorio
              </p>
              <p className="mt-1 text-sm text-[#4B5563]">Compromiso local sostenible</p>
            </div>
          </div>
        </motion.div>

        <motion.aside
          variants={item}
          className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-gradient-to-b from-white to-[#F8FAFC] p-6 shadow-[0_10px_35px_rgba(12,60,92,0.08)] sm:p-7"
        >
          <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#0C3C5C]/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-[#0C3C5C]/10 blur-2xl" />

          <h3 className="relative text-sm font-semibold uppercase tracking-[0.14em] text-[#0C3C5C]">
            Perfil ALIDIA
          </h3>

          <ul className="relative mt-5 space-y-4 text-sm leading-relaxed text-[#374151]">
            <li className="border-l-2 border-[#0C3C5C]/35 pl-3">
              Integracion entre academia, tecnologia y territorio.
            </li>
            <li className="border-l-2 border-[#0C3C5C]/35 pl-3">
              Compromiso con soluciones utiles para El Oro.
            </li>
            <li className="border-l-2 border-[#0C3C5C]/35 pl-3">
              Rigor institucional y vocacion de servicio publico.
            </li>
          </ul>

          <div className="relative mt-6 rounded-xl border border-[#DDE4EA] bg-white/85 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0C3C5C]">
              Enfoque
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
              Desarrollo responsable de inteligencia artificial con utilidad social y pertinencia
              regional.
            </p>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
}
