"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { 
  Users2, 
  GraduationCap,
  Rocket,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  Globe,
  Share2
} from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function WhatIs() {
  const [activeTab, setActiveTab] = useState(0);

  const approaches = [
    {
      id: 0,
      title: "Metodología práctica",
      icon: <Lightbulb className="w-6 h-6" />,
      points: [
        "Aprendizaje basado en proyectos reales",
        "Talleres hands-on con herramientas actuales",
        "Capacitación aplicada desde el día uno",
        "Seguimiento y mentoría personalizada"
      ],
      color: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-200"
    },
    {
      id: 1,
      title: "Innovación social",
      icon: <HeartHandshake className="w-6 h-6" />,
      points: [
        "Tecnología al servicio de necesidades sociales",
        "Co-creación con comunidades vulnerables",
        "Soluciones escalables y sostenibles",
        "Impacto medible en calidad de vida"
      ],
      color: "from-emerald-500/10 to-green-500/10",
      borderColor: "border-emerald-200"
    },
    {
      id: 2,
      title: "Transferencia abierta",
      icon: <Globe className="w-6 h-6" />,
      points: [
        "Todo nuestro conocimiento es público y accesible",
        "Documentación abierta para replicación",
        "Recursos educativos gratuitos",
        "Comunidad de práctica colaborativa"
      ],
      color: "from-violet-500/10 to-purple-500/10",
      borderColor: "border-violet-200"
    },
    {
      id: 3,
      title: "Prototipado ágil",
      icon: <Rocket className="w-6 h-6" />,
      points: [
        "Desarrollo rápido de soluciones mínimas viables",
        "Validación constante con usuarios",
        "Iteraciones basadas en feedback local",
        "Adaptación continua al contexto"
      ],
      color: "from-amber-500/10 to-orange-500/10",
      borderColor: "border-amber-200"
    }
  ];

  // Tarjetas de esencia
  const cards = [
     {
    title: "Formación de talento",
    description: "Capacitamos a la próxima generación de innovadores",
    icon: <GraduationCap className="w-6 h-6 text-[#0C3C5C]" />,
    highlight: true
  },
    {
    title: "Democratización tecnológica",
    description: "Hacemos la IA accesible para todos, sin barreras técnicas",
    icon: <Share2 className="w-6 h-6 text-[#0C3C5C]" />,
    highlight: true
  },
     {
    title: "Comunidad activa",
    description: "No somos una organización, somos un movimiento ciudadano",
    icon: <Users2 className="w-6 h-6 text-[#0C3C5C]" />,
    highlight: true,
    badge: "Esencia"
  },
      {
      title: "Pioneros regionales",
      description: "Primera iniciativa de IA responsable en El Oro, sentando precedente",
      icon: <Sparkles className="w-6 h-6 text-[#0C3C5C]" />,
      highlight: true,
      tag: "Innovación"
    }
  ];

  return (
    
    <motion.section
      id="que-es-alidia"
      className="w-full bg-white px-6 py-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <motion.div variants={item} className="max-w-4xl">
        
          <h2 className="mt-6 text-4xl font-extrabold leading-[1.1] text-[#111827] md:text-5xl">
            ¿Qué es ALIDIA?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#4B5563] md:text-xl">
            ALIDIA es una <span className="font-semibold text-[#0C3C5C]">iniciativa ciudadana local</span> sin fines de lucro 
            orientada al desarrollo <span className="font-semibold text-[#0C3C5C]">responsable y contextualizado</span> de la 
            inteligencia artificial y las tecnologías emergentes.
          </p>
        </motion.div>

        {/* Contenido principal en dos columnas */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Columna izquierda */}
          <motion.div variants={item} className="space-y-8">
            <div className="rounded-2xl bg-linear-to-br from-blue-50 to-white p-8">
              <p className="text-base leading-relaxed text-[#1F2937] md:text-lg">
                Surge como un <span className="font-semibold text-[#0C3C5C]">espacio de articulación único</span> que conecta 
                formación especializada, innovación aplicada y compromiso social, con un enfoque territorial 
                que prioriza las capacidades locales y necesidades reales.
              </p>
            </div>

            {/* Carrusel de pestañas*/}
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
              <h3 className="text-2xl font-semibold text-[#111827]">
                Nuestra forma de trabajar
              </h3>
              
              {/* Navegación por pestañas */}
              <div className="mt-6 flex flex-wrap gap-2">
                {approaches.map((approach) => (
                  <button
                    key={approach.id}
                    onClick={() => setActiveTab(approach.id)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeTab === approach.id
                        ? "bg-[#0C3C5C] text-white shadow-md"
                        : "text-[#4B5563] hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`${activeTab === approach.id ? "text-white" : "text-[#0C3C5C]"}`}>
                        {approach.icon}
                      </div>
                      <span>{approach.title}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Contenido de la pestaña activa */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-8 rounded-xl border ${approaches[activeTab].borderColor} bg-linear-to-br ${approaches[activeTab].color} p-6`}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-white p-3 shadow-sm">
                    <div className="text-[#0C3C5C]">
                      {approaches[activeTab].icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-[#111827]">
                      {approaches[activeTab].title}
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {approaches[activeTab].points.map((point, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1.5 h-2 w-2 rounded-full bg-[#0C3C5C]"></div>
                          <span className="text-[#1F2937]">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Columna derecha: Tarjetas destacadas */}
          <motion.div variants={item} className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-8">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={item}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.02,
                    transition: { duration: 0.2 } 
                  }}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border ${
                    card.highlight 
                      ? 'border-[#0C3C5C]/30 bg-linear-to-br from-[#0C3C5C]/5 to-blue-50' 
                      : 'border-[#E5E7EB] bg-white'
                  } p-6 transition-all duration-300 hover:border-[#0C3C5C]/30 hover:shadow-xl`}
                >
                  {/* Efecto de fondo para tarjetas destacadas */}
                  {card.highlight && (
                    <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 via-white to-cyan-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  )}
                  
                  <div className="relative flex items-start gap-4">
                    <div className={`rounded-xl p-3 transition-all duration-300 group-hover:scale-110 ${
                      card.highlight
                        ? 'bg-linear-to-br from-[#0C3C5C]/20 to-blue-500/20'
                        : 'bg-linear-to-br from-[#0C3C5C]/10 to-blue-500/10'
                    }`}>
                      {card.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold transition-colors group-hover:text-[#0C3C5C] ${
                        card.highlight ? 'text-[#0C3C5C]' : 'text-[#111827]'
                      }`}>
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#4B5563]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Indicador de hover */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#0C3C5C] to-blue-500 transition-all duration-300 group-hover:w-full"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Estadísticas
          <motion.div variants={item} className="mt-15">
          <div className="rounded-2xl bg-linear-to-br from-gray-50 to-white p-8 md:p-12 shadow-sm">
            <h3 className="text-center text-2xl font-semibold text-[#111827]">
              ALIDIA en acción
            </h3>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { 
                  label: "Proyectos activos", 
                  value: "2+",
                  subtext: "SIAM, AID-CV, CEIA" 
                },
                { 
                  label: "Comunidad activa", 
                  value: "50+",
                  subtext: "Miembros comprometidos" 
                },
                { 
                  label: "Eventos realizados", 
                  value: "10+",
                  subtext: "Talleres y seminarios" 
                },
                { 
                  label: "Alianzas estratégicas", 
                  value: "15+",
                  subtext: "Instituciones colaboradoras" 
                }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-[#0C3C5C]">{stat.value}</div>
                  <div className="mt-2 text-sm font-medium text-[#111827]">{stat.label}</div>
                  <div className="mt-1 text-xs text-[#6B7280]">{stat.subtext}</div>
                </motion.div>
              ))}
            </div> */}
            
            {/* Línea divisoria con texto */}
            {/* <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 italic">
              
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </motion.section>
  );
}