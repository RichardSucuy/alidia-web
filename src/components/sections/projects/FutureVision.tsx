"use client";

import { motion } from "framer-motion";
import { 
  Rocket,
  Target,
  TrendingUp,
  MapPin,
  Sparkles
} from "lucide-react";

export function FutureVision() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 to-white shadow-sm">
      
      {/* Header */}
      <div className="border-b border-dashed border-gray-200 bg-white/50 p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700">
            <Rocket className="h-7 w-7" />
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Visión a Largo Plazo
            </span>
            <h3 className="mt-1 text-2xl font-extrabold text-[#111827]">CEIA</h3>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex-1 space-y-6 p-8">
        
        {/* Descripción */}
        <div>
          <h4 className="text-lg font-bold text-[#111827]">
            Centro de Experimentación en Inteligencia Artificial
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
            Nuestra meta es establecer un nodo físico en Machala para el prototipado rápido, 
            la socialización con productores locales y el levantamiento de soluciones con impacto real en la comunidad.
          </p>
        </div>

        {/* Objetivos */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-100">
              <Target className="h-3.5 w-3.5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#111827]">Impacto Real</p>
              <p className="mt-0.5 text-xs text-[#6B7280]">
                Construir con la comunidad, no solo para ella
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-purple-100">
              <TrendingUp className="h-3.5 w-3.5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#111827]">Posicionamiento Regional</p>
              <p className="mt-0.5 text-xs text-[#6B7280]">
                Referente en tecnologías emergentes del sur del Ecuador
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
              <MapPin className="h-3.5 w-3.5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#111827]">Invernadero Tecnológico</p>
              <p className="mt-0.5 text-xs text-[#6B7280]">
                Espacio físico para experimentación y colaboración
              </p>
            </div>
          </div>
        </div>

        {/* Alcance Progresivo */}
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <div className="flex items-center gap-2 text-gray-700 mb-3">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Alcance Progresivo</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-700">Corto:</span>
              <span className="text-xs text-gray-600">SIAM y eventos de democratización</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-700">Mediano:</span>
              <span className="text-xs text-gray-600">Más eventos y colaboraciones</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-700">Largo:</span>
              <span className="text-xs text-gray-600">Consolidación del CEIA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-dashed border-gray-200 bg-gray-50/50 p-6">
        <div className="flex items-center justify-center gap-2 text-gray-500">
          <span className="text-xs font-semibold uppercase tracking-widest">En Planificación</span>
        </div>
      </div>

    </div>
  );
}
