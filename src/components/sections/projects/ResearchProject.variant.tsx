"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Database,
  Brain,
  Smartphone,
  MessageSquare,
  Network,
  Calendar,
  MapPin,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import { presentations } from "@/components/sections/projects/research-data";

export function ResearchProjectWithGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % presentations.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + presentations.length) % presentations.length);
  const presentation = presentations[currentSlide];

  return (
    <div className="h-full overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5">
      
      {/* Header Ultra-Minimalista */}
      <div className="bg-white px-8 pt-10 pb-8 md:px-12">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
          
          {/* Título Esencial */}
          <h3 className="text-4xl font-black text-[#111827] tracking-tighter">
            AID-CV
          </h3>
          
          {/* Badge de Estado Único (Corregido) */}
          <div className="flex items-center gap-2 rounded-full bg-[#0C3C5C]/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#0C3C5C]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0C3C5C] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0C3C5C]"></span>
            </span>
            Investigación Activa
          </div>

        </div>
      </div>

      {/* Cuerpo del Proyecto */}
      <div className="space-y-12 px-8 pb-12 md:px-12">
        
        {/* Abstract/Descripción */}
        <div className="relative border-l-4 border-[#0C3C5C] pl-6">
          <p className="text-base leading-relaxed text-[#4B5563] md:text-lg">
            Sistema de inteligencia artificial aplicada para la asistencia al diagnóstico parasitológico de <span className="italic font-bold text-[#111827]">Trypanosoma cruzi</span> mediante visión por computadora. 
            Enfoque orientado a la detección en imágenes microscópicas utilizando datasets validados.
          </p>
        </div>

        {/* Enfoque Técnico - Grid 4 columnas */}
        {/* Enfoque Técnico - Grid Horizontal de Alto Impacto */}
        <div className="space-y-6">
          <motion.h4 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#0C3C5C]"
          >
            <Brain className="h-4 w-4" />
            Arquitectura del Proyecto
          </motion.h4>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                icon: Network, 
                title: "MLOps & Deep Learning", 
                desc: "Ciclo de vida optimizado para detección precisa de parásitos en imágenes microscópicas." 
              },
              { 
                icon: Database, 
                title: "Datasets Validados", 
                desc: "Basado en estudios previos aceptados por Springer con validación de expertos." 
              },
              { 
                icon: Smartphone, 
                title: "PWA Escalable", 
                desc: "Despliegue eficiente en entornos web y móviles para contextos de bajos recursos." 
              },
              { 
                icon: MessageSquare, 
                title: "IA Generativa + RAG", 
                desc: "Chatbot multimodal (Voz/Texto) para consulta de guías clínicas y literatura técnica." 
              }
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-[#0C3C5C]/30 hover:shadow-xl hover:shadow-blue-900/5"
              >
                {/* Decoración sutil de fondo al hacer hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-[#0C3C5C] transition-colors group-hover:bg-[#0C3C5C] group-hover:text-white">
                  <tech.icon className="h-6 w-6" />
                </div>
                
                <div className="relative z-10 space-y-2">
                  <p className="text-sm font-black leading-tight text-[#111827]">
                    {tech.title}
                  </p>
                  <p className="text-[11px] leading-relaxed font-medium text-[#6B7280]">
                    {tech.desc}
                  </p>
                </div>

                {/* Línea de progreso decorativa en la base */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 origin-left scale-x-0 bg-[#0C3C5C] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>


        {/* Galería de Hitos */}
        <div className="pt-4">
          <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0C3C5C]">
              Antecedentes de la investigación
            </h4>
            <div className="flex gap-2">
              <button onClick={prevSlide} className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition-all hover:bg-[#0C3C5C] hover:text-white">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={nextSlide} className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition-all hover:bg-[#0C3C5C] hover:text-white">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative flex flex-col gap-10 lg:flex-row">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-100 lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.img
                  key={presentation.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  src={presentation.image}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="flex flex-col justify-center lg:w-1/3">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="text-[10px] font-bold">{presentation.date}</span>
                </div>
                
                <h5 className="text-xl font-black text-[#111827] leading-tight">
                  {presentation.event}
                </h5>

                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-[#0C3C5C]" />
                  <span className="text-xs font-bold">{presentation.location}</span>
                </div>

                <p className="text-xs font-medium leading-relaxed text-slate-600">
                  {presentation.description}
                </p>

                <div className="flex gap-1.5 pt-2">
                  {presentations.map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-[#0C3C5C]' : 'w-2 bg-slate-200'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}