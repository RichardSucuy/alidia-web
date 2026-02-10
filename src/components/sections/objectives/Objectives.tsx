"use client";

import { motion, type Variants } from "framer-motion";
import { 
  Target, 
  GraduationCap, 
  Lightbulb, 
  Rocket, 
  Share2, 
  ArrowRight 
} from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
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

const specificObjectives = [
  {
    title: "Fortalecer capacidades",
    text: "Capacitación técnica y académica en IA para estudiantes y profesionales locales.",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "from-blue-50 to-indigo-50"
  },
  {
    title: "Promover formación",
    text: "Espacios de divulgación técnica para democratizar el acceso al conocimiento.",
    icon: <Lightbulb className="w-5 h-5" />,
    color: "from-cyan-50 to-blue-50"
  },
  {
    title: "Impulsar proyectos",
    text: "Soluciones tecnológicas aplicadas a problemáticas estratégicas del territorio.",
    icon: <Rocket className="w-5 h-5" />,
    color: "from-slate-50 to-blue-50"
  },
  {
    title: "Articular esfuerzos",
    text: "Alianzas entre academia, sector privado y comunidad para innovar.",
    icon: <Share2 className="w-5 h-5" />,
    color: "from-blue-50 to-slate-50"
  },
];

export function Objectives() {
  return (
    <motion.section
      id="objetivos"
      className="relative w-full overflow-hidden bg-white px-6 py-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Fondos decorativos coherentes con WhoWeAre */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Encabezado */}
        <motion.div variants={item} className="mb-16 max-w-3xl">
          <h2 className="text-4xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            Nuestros Objetivos
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4B5563]">
            Transformamos nuestra visión en metas tangibles para impulsar el desarrollo tecnológico de la región.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          
          {/* Columna Izquierda: Objetivo General */}
          <motion.div variants={item} className="sticky top-24">
            <div className="relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-linear-to-b from-white to-gray-50 p-8 shadow-2xl shadow-blue-900/5 md:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#0C3C5C]/5 blur-2xl" />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0C3C5C]/20 bg-[#0C3C5C]/5 px-4 py-1.5 text-xs font-bold tracking-widest text-[#0C3C5C] uppercase">
                  <Target className="w-4 h-4" />
                  Objetivo General
                </div>

                <p className="mt-8 text-xl leading-relaxed font-medium text-[#1F2937] md:text-2xl">
                  Fortalecer el desarrollo <span className="text-[#0C3C5C]">responsable</span> y contextualizado de la IA mediante la formación y la innovación aplicada desde el territorio.
                </p>

                <div className="mt-10 space-y-4">
                   <div className="flex items-center gap-3 text-[#4B5563]">
                      <div className="h-px flex-1 bg-gray-200"></div>
                      <span className="text-xs font-semibold uppercase tracking-wider">Ejes de Acción</span>
                      <div className="h-px flex-1 bg-gray-200"></div>
                   </div>
                   <div className="flex flex-wrap gap-2">
                      {["Territorio", "Utilidad Social", "Colaboración"].map((tag) => (
                        <span key={tag} className="rounded-lg bg-white border border-gray-100 px-3 py-1 text-sm font-medium text-[#0C3C5C] shadow-sm">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Objetivos Específicos */}
          <motion.div variants={item} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {specificObjectives.map((obj, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className={`group relative overflow-hidden rounded-2xl bg-linear-to-br ${obj.color} border border-blue-100/50 p-6 transition-all shadow-sm hover:shadow-md`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#0C3C5C] shadow-sm group-hover:bg-[#0C3C5C] group-hover:text-white transition-colors">
                    {obj.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#111827]">{obj.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                    {obj.text}
                  </p>

                </motion.div>
              ))}
            </div>

            {/* Callout de Cierre */}
            <motion.div 
              variants={item}
              className="rounded-2xl bg-[#0C3C5C] p-6 text-white shadow-xl shadow-blue-900/10"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-white/10 p-2">
                  <Share2 className="w-5 h-5 text-blue-200" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-relaxed opacity-90">
                    Estos objetivos guían cada alianza y proyecto en <span className="font-bold">ALIDIA</span>, asegurando un impacto real en la provincia de El Oro.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}