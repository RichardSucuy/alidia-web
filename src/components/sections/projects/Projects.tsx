"use client";

import { motion, type Variants } from "framer-motion";
import { ResearchProjectWithGallery } from "./ResearchProject.variant";
import { siamMeetings } from "@/components/sections/projects/siam2026-data";
import { useState } from "react";
import { 
  Rocket,
  ExternalLink, 
  Link as LinkIcon,
  ChevronLeft,
  ChevronRight,
  Globe,
  Users2,
  Sparkles
} from "lucide-react";

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Projects() {
  const [currentMeeting, setCurrentMeeting] = useState(0);

  const nextMeeting = () => setCurrentMeeting((prev) => (prev + 1) % siamMeetings.length);
  const prevMeeting = () => setCurrentMeeting((prev) => (prev - 1 + siamMeetings.length) % siamMeetings.length);

  const meeting = siamMeetings[currentMeeting];

  return (
    <section id="proyectos" className="relative overflow-hidden bg-white px-6 py-24">
      {/* Fondo decorativo mejorado */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-blue-50/60 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 -right-24 h-[400px] w-[400px] rounded-full bg-slate-50/80 blur-[80px]" />
      
      <div className="relative mx-auto max-w-7xl">
        {/* Encabezado con acento de color */}
        <motion.div className="mb-16 border-l-4 border-[#0C3C5C] pl-6">
          <h2 className="text-4xl font-black text-[#111827] md:text-5xl tracking-tight">Proyectos</h2>
          <p className="mt-2 text-lg font-medium text-[#4B5563]">
            Transformando ideas en <span className="text-[#0C3C5C] font-bold">impacto real</span> para la comunidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* PROYECTO 1: SIAM - Full Width Header con estilo Card */}
          <motion.div 
            variants={item} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            className="lg:col-span-12"
          >
            {/* Badge de Planificación Superior - Indica que está en proceso */}
            {/* Badge de Estado del Simposio - Integrado y Profesional */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex items-center gap-2.5 rounded-full bg-slate-50 px-4 py-2 border border-slate-200/60 shadow-sm">
                <span className="relative flex h-2 w-2">
                  {/* El pulso ahora es azul, alineado con tu marca */}
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0C3C5C] opacity-40"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0C3C5C]"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0C3C5C]">
                  Gestión en curso · SIAM 2026
                </span>
              </div>
              
              {/* Línea divisoria sutil que conecta con el borde de la sección */}
              <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-blue-900/5">
              <div className="flex flex-col lg:flex-row">
                
                {/* Visual Side */}
                <div className="relative w-full lg:w-[480px] shrink-0 bg-slate-900">
                  <div className="aspect-[4/3] lg:aspect-square w-full overflow-hidden">
                    <img 
                      src={meeting.image} 
                      alt={meeting.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
                    />
                  </div>
                  {/* Badge flotante con el color de marca */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-[#0C3C5C] px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                    <Globe className="h-3 w-3" />
                    {meeting.date}
                  </div>

                  {/* Navegación Refinada */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/20">
                    <button onClick={prevMeeting} className="text-white hover:text-blue-300 transition-colors">
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <span className="text-[10px] font-black text-white w-8 text-center">
                      {currentMeeting + 1} / {siamMeetings.length}
                    </span>
                    <button onClick={nextMeeting} className="text-white hover:text-blue-300 transition-colors">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex flex-1 flex-col justify-between p-8 lg:p-12">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#0C3C5C]">
                        <Users2 className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Bitácora de Alianzas</span>
                      </div>
                      <a 
                        href="https://siam2026ec.github.io/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-[11px] font-bold text-[#0C3C5C] uppercase tracking-wider hover:opacity-70 transition-all"
                      >
                        Sitio Oficial <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                    
                    <h4 className="mt-6 text-3xl font-black text-[#111827] leading-tight">
                      {meeting.title}
                    </h4>
                    <p className="mt-4 text-sm leading-relaxed text-[#4B5563] max-w-xl">
                      {meeting.description}
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-3">
                      {meeting.participants.map((participant, idx) => (
                        <div key={idx} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 border border-slate-100 transition-colors hover:bg-white hover:border-blue-100">
                          <div className="h-2 w-2 rounded-full bg-[#0C3C5C]" />
                          <div className="text-xs">
                            {participant.linkedin ? (
                              <a href={participant.linkedin} target="_blank" className="font-bold text-[#111827] hover:text-[#0C3C5C] inline-flex items-center gap-1">
                                {participant.name} <LinkIcon className="w-2.5 h-2.5" />
                              </a>
                            ) : (
                              <span className="font-bold text-[#111827]">{participant.name}</span>
                            )}
                            <span className="text-slate-500 ml-1">· {participant.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PROYECTO 2: Investigación AID-CV (Lado izquierdo o centrado según el grid) */}
          <motion.div variants={item} className="lg:col-span-12">
             <ResearchProjectWithGallery />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

          {/* PROYECTO 3: CEIA - Versión Minimalista y Futurista */}
          // <motion.div 
          //   variants={item}
          //   className="relative mt-8 overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50/50 p-8 lg:col-span-12"
          // >
          //   <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
              
          //     {/* Contenido Izquierdo: Texto informativo pero en tonos grises para no distraer */}
          //     <div className="flex-1 text-center md:text-left">
          //       <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
          //         <Rocket className="h-4 w-4 text-slate-400" />
          //         <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
          //           Hoja de Ruta
          //         </span>
          //       </div>
                
          //       <h3 className="text-xl font-extrabold text-[#111827] tracking-tight">
          //         CEIA: Centro de Experimentación en IA
          //       </h3>
                
          //       <p className="mt-2 max-w-2xl text-sm text-[#4B5563]/80">
          //         Nuestra visión a largo plazo contempla la creación de un nodo físico en Machala para el prototipado rápido y soluciones de impacto local.
          //       </p>
          //     </div>

          //     {/* Contenido Derecho: Badge minimalista que indica que es futuro */}
          //     <div className="flex shrink-0 items-center gap-4">
          //       <div className="h-8 w-[1px] bg-slate-200 hidden md:block" />
          //       <div className="rounded-full bg-slate-200/50 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
          //         Fase de Proyección
          //       </div>
          //       <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-300">
          //         <Sparkles className="h-5 w-5" />
          //       </div>
          //     </div>

          //   </div>
          // </motion.div>
