"use client";

import { Mail, MapPin, ShieldCheck, Cpu } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0C3C5C] text-white overflow-hidden relative">
      
      {/* Fondo decorativo sutil (Circuitos invisibles) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        
        {/* --- SECCIÓN SUPERIOR: Información Limpia --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-b border-white/10 pb-12">
          
          {/* Lado Izquierdo: Marca y Ubicación Unificada */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-black tracking-tighter text-white drop-shadow-lg">
                ALIDIA
              </h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-blue-100/70 max-w-md mx-auto md:mx-0">
                Alianza para el Liderazgo e Innovación en el Desarrollo de Inteligencia Artificial.
              </p>
            </div>

            {/* Badge de Ubicación (Único y Elegante) */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/40 px-4 py-1.5 border border-blue-400/20 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-blue-300" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-100">
                Machala • El Oro • Ecuador
              </span>
            </div>
          </div>

          {/* Lado Derecho: Contacto */}
          <div className="flex justify-center md:justify-end">
            <a 
              href="mailto:contacto@alidia.org" 
              className="group flex flex-col items-center md:items-end gap-1 p-4 rounded-xl hover:bg-white/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-blue-100 group-hover:text-white transition-colors">
                  contacto@alidia.org
                </span>
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="h-5 w-5 text-blue-200" />
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-blue-300/50 group-hover:text-blue-300 transition-colors">
                Canal Oficial
              </p>
            </a>
          </div>
        </div>

        {/* --- SECCIÓN CENTRAL: CEDIT (El Motor Tecnológico) --- */}
        <div className="mt-12 flex justify-center">
          <div className="group relative">
            {/* Resplandor azul detrás del chip (Aura tecnológica) */}
            <div className="absolute -inset-2 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Tarjeta del Chip */}
            <div className="relative flex flex-col md:flex-row items-center gap-5 rounded-2xl bg-[#0a273d] border border-blue-500/30 px-8 py-5 shadow-2xl hover:border-blue-400/50 transition-colors">
              
              {/* ÍCONO ANIMADO: El Chip que mantiene todo vivo */}
              <div className="relative">
                {/* El Chip procesando (Pulse lento) */}
                <Cpu className="h-10 w-10 text-blue-300 animate-pulse" strokeWidth={1.5} />
                
                {/* Luz de estado "Online" (Ping rápido) */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-[#0a273d]"></span>
                </span>
              </div>

              {/* Texto de Agradecimiento Técnico */}
              <div className="text-center md:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-1">
                  Infraestructura & Desarrollo
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2 text-base text-blue-100">
                  <span>Sitio impulsado por el motor tecnológico de</span>
                  <a 
                    href="https://cedit.tech/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-black text-white hover:text-blue-300 transition-all tracking-wide underline decoration-blue-500/30 decoration-2 underline-offset-4"
                  >
                    CEDIT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BARRA INFERIOR --- */}
        <div className="mt-12 flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500">
          <div className="h-px w-20 bg-white/20" /> {/* Separador visual pequeño */}
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            <p className="text-[10px] font-bold uppercase tracking-widest">
              © {year} ALIDIA. Ética • Soberanía • Comunidad
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}