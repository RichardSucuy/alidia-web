"use client";

import { Mail, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0C3C5C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 border-b border-white/10 pb-12">
          
          {/* Bloque 1: Identidad Institucional */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-black tracking-tighter">
                ALIDIA
              </h2>
            </div>
            
            <p className="max-w-sm text-sm font-medium leading-relaxed text-blue-100/80">
              Alianza para el Liderazgo e Innovación en el Desarrollo de 
              Inteligencia Artificial. Un colectivo multidisciplinario 
              comprometido con el territorio.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 border border-white/10">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100">
                Machala • El Oro • Ecuador
              </span>
            </div>
          </div>

          {/* Bloque 2: Territorio */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-300/60">
              Ubicación
            </h3>
            <div className="flex items-start gap-4 group">
              <div className="rounded-xl bg-white/5 p-3 border border-white/10 transition-colors group-hover:bg-white/10">
                <MapPin className="h-5 w-5 text-blue-200" />
              </div>
              <div>
                <p className="text-sm font-bold">Machala</p>
                <p className="text-xs text-blue-200/60">Sede Principal</p>
              </div>
            </div>
          </div>

          {/* Bloque 3: Contacto Directo */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-300/60">
              Contacto
            </h3>
            <a href="mailto:contacto@alidia.org" className="flex items-start gap-4 group">
              <div className="rounded-xl bg-white/5 p-3 border border-white/10 transition-colors group-hover:bg-white/10">
                <Mail className="h-5 w-5 text-blue-200" />
              </div>
              <div>
                <p className="text-sm font-bold group-hover:text-blue-200 transition-colors">contacto@alidia.org</p>
                <p className="text-xs text-blue-200/60 italic">Alianzas e información</p>
              </div>
            </a>
          </div>
        </div>

        {/* Barra de Cierre Inferior */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-blue-300/40" />
            <p className="text-[11px] font-bold uppercase tracking-tighter text-blue-100/40">
              © {year} ALIDIA. Desarrollo de IA con Pertinencia Regional.
            </p>
          </div>

          <div className="flex gap-6">
            {['Soberanía', 'Ética', 'Comunidad'].map((item) => (
              <span key={item} className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100/20">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}