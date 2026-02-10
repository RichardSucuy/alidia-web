"use client";

import { motion } from "framer-motion";
import { 
  Microscope, 
  FlaskConical,
  Database,
  Brain,
  Smartphone,
  ShieldCheck,
  MessageSquare,
  Network,
  Award,
  Calendar,
  MapPin
} from "lucide-react";

/**
 * VARIANTE ALTERNATIVA: ResearchProject con galería de presentaciones
 * 
 * Esta versión incluye una sección para mostrar fotos de presentaciones previas
 * de la investigación en conferencias internacionales.
 * 
 * Para usar esta variante, reemplaza el contenido de ResearchProject.tsx
 */

interface PresentationPhoto {
  id: string;
  image: string;
  event: string;
  date: string;
  location: string;
  description: string;
}

// Agrega tus fotos de presentaciones aquí
const presentations: PresentationPhoto[] = [
  {
    id: "conf-2025",
    image: "/projects/research/conferencia-rf.jpg",
    event: "Congreso Internacional de Ciencia, Tecnología e Innovación para la Sociedad (2025) - CITIS XI",
    date: "Junio 2025",
    location: "Presencial - Guayaquil, Ecuador",
    description: "Presentación de contribución científica aceptado para publicarse en Springer."
  },
  {
    id: "conf-2024",
    image: "/projects/research/conferencia-khipux.jpg",
    event: "KHIPU 2025 Latin American Meeting in Artificial Intelligence",
    date: "Marzo 2025",
    location: "Presencial - Santiago de Chile, Chile",
    description: "Presentación del trabajo inicial, machine learning sobre el dataset validado."
  },
  // Agrega más presentaciones aquí
];

export function ResearchProjectWithGallery() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/30 to-white shadow-sm">
      
      {/* Header */}
      <div className="border-b border-blue-100 bg-white/80 p-8 backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md">
            <Microscope className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0C3C5C]">
                I+D+i en Salud
              </span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-purple-700">
                Sin fines de lucro
              </span>
            </div>
            <h3 className="mt-3 text-2xl font-extrabold text-[#111827]">
              AID-CV
            </h3>
            <p className="mt-1 text-sm text-[#4B5563]">
              Sistema de IA Aplicada para Asistencia al Diagnóstico Parasitológico
            </p>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="flex-1 space-y-6 overflow-auto p-8">
        
        {/* Descripción Principal */}
        <div className="rounded-2xl border border-blue-50 bg-white p-5">
          <p className="text-sm leading-relaxed text-[#4B5563]">
            Sistema de inteligencia artificial aplicada para la asistencia al diagnóstico parasitológico de 
            <span className="font-semibold italic text-[#111827]"> Trypanosoma cruzi</span> mediante visión por computadora. 
            Este trabajo presenta una investigación en desarrollo enfocada en la detección del parásito en imágenes 
            microscópicas de muestras de sangre, utilizando un dataset con anotaciones y validación por expertos.
          </p>
        </div>

        {/* Enfoque Técnico */}
        <div className="space-y-3">
          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111827]">
            <Brain className="h-4 w-4 text-blue-600" />
            Enfoque Técnico
          </h4>
          
          <div className="grid gap-2 md:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-blue-50 bg-white p-4 transition-all hover:border-blue-200">
              <Network className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <div>
                <p className="text-xs font-semibold text-[#111827]">MLOps & Deep Learning</p>
                <p className="mt-1 text-[11px] leading-relaxed text-[#6B7280]">
                  Ciclo de vida completo del modelo con eficiencia computacional.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-purple-50 bg-purple-50/50 p-4 transition-all hover:border-purple-200">
              <Database className="mt-0.5 h-5 w-5 shrink-0 text-purple-600" />
              <div>
                <p className="text-xs font-semibold text-[#111827]">Dataset Validado</p>
                <p className="mt-1 text-[11px] leading-relaxed text-[#6B7280]">
                  Anotaciones expertas, publicado en Springer.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-emerald-50 bg-emerald-50/50 p-4 transition-all hover:border-emerald-200">
              <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <p className="text-xs font-semibold text-[#111827]">PWA Escalable</p>
                <p className="mt-1 text-[11px] leading-relaxed text-[#6B7280]">
                  Interfaz multimodal (chat y voz).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-orange-50 bg-orange-50/50 p-4 transition-all hover:border-orange-200">
              <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
              <div>
                <p className="text-xs font-semibold text-[#111827]">IA Generativa + RAG</p>
                <p className="mt-1 text-[11px] leading-relaxed text-[#6B7280]">
                  Consulta de literatura técnica y guías.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trayectoria de la Investigación */}
        {presentations.length > 0 && (
          <div className="space-y-3">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111827]">
              <Award className="h-4 w-4 text-purple-600" />
              Trayectoria de la Investigación
            </h4>
            
            <div className="space-y-3">
              {presentations.map((presentation) => (
                <motion.div
                  key={presentation.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl border border-purple-100 bg-white"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative h-40 w-full shrink-0 sm:h-auto sm:w-40">
                      <img 
                        src={presentation.image}
                        alt={presentation.event}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="text-sm font-bold text-[#111827]">
                          {presentation.event}
                        </h5>
                        <div className="flex items-center gap-1 text-purple-600">
                          <Calendar className="h-3 w-3" />
                          <span className="whitespace-nowrap text-[10px] font-semibold">
                            {presentation.date}
                          </span>
                        </div>
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span className="text-xs">{presentation.location}</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                        {presentation.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Principio Rector */}
        <div className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50/50 to-transparent p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold text-[#111827]">Asistencia, no sustitución</p>
              <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">
                El enfoque es de <span className="font-semibold">asistencia al profesional</span>, manteniendo 
                siempre la decisión final en manos del especialista. Orientado a contextos de bajos recursos 
                como una solución de IA aplicada en salud.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-blue-100 bg-gradient-to-r from-blue-50/50 to-transparent p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-600">
            <FlaskConical className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Etapa Experimental</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Award className="h-4 w-4" />
            <span className="text-xs">Contribución científica en desarrollo</span>
          </div>
        </div>
      </div>

    </div>
  );
}
