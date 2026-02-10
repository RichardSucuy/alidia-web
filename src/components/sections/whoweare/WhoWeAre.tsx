"use client";

import { motion, type Variants } from "framer-motion";
import { 
  Users, 
  MapPin, 
  BookOpen, 
  Cpu, 
  ShieldCheck, 
  Handshake 
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

export function WhoWeAre() {
  const pillars = [
    {
      title: "Academia",
      desc: "Investigación aplicada y rigor científico.",
      icon: <BookOpen className="w-5 h-5" />,
      color: "from-blue-50 to-indigo-50"
    },
    {
      title: "Tecnología",
      desc: "Soluciones de IA contextualizadas.",
      icon: <Cpu className="w-5 h-5" />,
      color: "from-cyan-50 to-blue-50"
    },
    {
      title: "Territorio",
      desc: "Compromiso local en Machala y El Oro.",
      icon: <MapPin className="w-5 h-5" />,
      color: "from-slate-50 to-blue-50"
    }
  ];

  return (
    <motion.section
      id="quienes-somos"
      className="relative w-full overflow-hidden bg-white px-6 py-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Fondos decorativos coherentes con WhatIs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Columna Izquierda: Narrativa */}
          <motion.div variants={item} className="space-y-8">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight text-[#111827] md:text-5xl">
                ¿Quiénes somos?
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-[#4B5563]">
              <p>
                ALIDIA está conformada por un <span className="font-semibold text-[#0C3C5C]">colectivo multidisciplinario</span> de profesionales e investigadores vinculados al ámbito académico y social.
              </p>
              <p>
                Nacemos en <span className="font-medium text-gray-900 text-bold">Machala, Ecuador</span>, como respuesta a la brecha tecnológica, buscando aterrizar la inteligencia artificial a las necesidades reales de nuestra provincia.
              </p>
              <p className="rounded-xl border-l-4 border-[#0C3C5C] bg-gray-50 p-4 italic">
                "Actuamos como un puente entre el conocimiento técnico avanzado y la participación comunitaria."
              </p>
            </div>

            {/* Pilares Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <div key={i} className={`rounded-2xl bg-linear-to-br ${p.color} border border-blue-100/50 p-5 transition-transform hover:-translate-y-1`}>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0C3C5C] shadow-sm">
                    {p.icon}
                  </div>
                  <h4 className="font-bold text-[#111827]">{p.title}</h4>
                  <p className="mt-1 text-xs text-[#6B7280]">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Columna Derecha: Tarjeta de Perfil Institucional */}
          <motion.div variants={item} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-linear-to-b from-white to-gray-50 p-8 shadow-2xl shadow-blue-900/5 md:p-10">
              {/* Decoración interna */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#0C3C5C]/5 blur-2xl" />
              
              <div className="relative flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0C3C5C] text-white">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] tracking-tight">
                  Perfil ALIDIA
                </h3>
              </div>

              <ul className="space-y-6">
                {[
                  { 
                    label: "Integración", 
                    text: "Sinergia real entre academia, tecnología y territorio.",
                    icon: <Handshake className="w-5 h-5 text-[#0C3C5C]" />
                  },
                  { 
                    label: "Utilidad Social", 
                    text: "Compromiso con soluciones prácticas para la provincia de El Oro.",
                    icon: <ShieldCheck className="w-5 h-5 text-[#0C3C5C]" />
                  },
                  { 
                    label: "Enfoque Humano", 
                    text: "IA responsable con vocación de servicio público y ética.",
                    icon: <Users className="w-5 h-5 text-[#0C3C5C]" />
                  }
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">{feature.icon}</div>
                    <div>
                      <span className="block font-bold text-[#0C3C5C] text-sm uppercase tracking-wider">{feature.label}</span>
                      <p className="mt-1 text-gray-600 text-sm leading-snug">{feature.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl bg-[#0C3C5C] p-6 text-white shadow-lg shadow-[#0C3C5C]/20">
                <p className="text-xs font-bold uppercase tracking-widest opacity-70">Nuestro Enfoque</p>
                <p className="mt-2 text-sm font-medium leading-relaxed">
                  Desarrollamos IA con pertinencia regional, asegurando que la innovación no deje a nadie atrás.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}