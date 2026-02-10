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
  Award
} from "lucide-react";

export function ResearchProject() {
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
      <div className="flex-1 space-y-6 p-8">
        
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
          
          <div className="space-y-2">
            <div className="flex items-start gap-3 rounded-xl border border-blue-50 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-sm">
              <Network className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <div>
                <p className="text-sm font-semibold text-[#111827]">MLOps & Deep Learning</p>
                <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">
                  Ciclo de vida completo del modelo de visión basado en deep learning, con criterios de 
                  eficiencia computacional para despliegue en entornos web y móviles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-purple-50 bg-purple-50/50 p-4 transition-all hover:border-purple-200 hover:shadow-sm">
              <Database className="mt-0.5 h-5 w-5 shrink-0 text-purple-600" />
              <div>
                <p className="text-sm font-semibold text-[#111827]">Dataset Validado</p>
                <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">
                  Imágenes microscópicas con anotaciones y validación por expertos, previamente empleado en 
                  estudio aceptado para publicación en Springer.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-emerald-50 bg-emerald-50/50 p-4 transition-all hover:border-emerald-200 hover:shadow-sm">
              <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <p className="text-sm font-semibold text-[#111827]">PWA con Arquitectura Escalable</p>
                <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">
                  Aplicación web progresiva que integra el modelo de visión por computadora con interfaz 
                  multimodal (chat y voz).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-orange-50 bg-orange-50/50 p-4 transition-all hover:border-orange-200 hover:shadow-sm">
              <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
              <div>
                <p className="text-sm font-semibold text-[#111827]">IA Generativa + RAG</p>
                <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">
                  Chatbot con Retrieval-Augmented Generation para consultar literatura técnica y guías 
                  clínicas en formato PDF, con Text-to-Speech integrado.
                </p>
              </div>
            </div>
          </div>
        </div>

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
