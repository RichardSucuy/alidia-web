"use client";

import { Mail, MapPin, ShieldCheck, Cpu, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0C3C5C] text-white overflow-hidden relative">

      {/* Fondo decorativo sutil */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-12">

        {/* --- SECCIÓN SUPERIOR --- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b border-white/10 pb-12">

          {/* Izquierda: Marca + Ubicación */}
          <div className="space-y-4 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-black tracking-tighter text-white drop-shadow-lg">
                ALIDIA
              </h2>
              <p className="mt-2 text-sm font-medium leading-relaxed text-blue-100/70 max-w-sm mx-auto md:mx-0">
                Alianza para el Liderazgo e Innovación en el Desarrollo de Inteligencia Artificial.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/40 px-4 py-1.5 border border-blue-400/20 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-blue-300 shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-100">
                Machala • El Oro • Ecuador
              </span>
            </div>
          </div>

          {/* Derecha: Email + Instagram en fila */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2">

            {/* Email */}
            <a
              href="mailto:contacto@alidia.org"
              className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
            >
              <span className="text-sm font-bold text-blue-100 group-hover:text-white transition-colors">
                contacto@alidia.org
              </span>
              <div className="p-2 rounded-lg bg-white/10 group-hover:bg-blue-500/20 transition-colors shrink-0">
                <Mail className="h-5 w-5 text-blue-200" />
              </div>
            </a>

            {/* Divisor vertical — solo visible en sm+ */}
            <div className="hidden sm:block h-8 w-px bg-white/10" />

            {/* Instagram */}
            <a
              href="https://www.instagram.com/alidia.ec/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de ALIDIA"
              className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
            >
              <span className="text-sm font-bold text-blue-100 group-hover:text-white transition-colors">
                @alidia.ec
              </span>
              <div className="p-2 rounded-lg bg-white/10 group-hover:bg-pink-500/20 transition-colors shrink-0">
                <Image
                  src="/socialmedia/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </a>

          </div>
        </div>

        {/* --- SECCIÓN CENTRAL: CEDIT --- */}
        <div className="mt-12 flex justify-center">
          <div className="group relative">
            <div className="absolute -inset-2 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative flex flex-col md:flex-row items-center gap-5 rounded-2xl bg-[#0a273d] border border-blue-500/30 px-8 py-5 shadow-2xl hover:border-blue-400/50 transition-colors">

              <div className="relative">
                <Cpu className="h-10 w-10 text-blue-300 animate-pulse" strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-[#0a273d]" />
                </span>
              </div>

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
                    className="group/link inline-flex items-center gap-1.5 text-xl font-black text-white hover:text-blue-300 transition-all tracking-wide underline decoration-blue-500/30 decoration-2 underline-offset-4"
                  >
                    CEDIT
                    <ExternalLink
                      size={18}
                      strokeWidth={3}
                      className="opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300"
                    />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- BARRA INFERIOR --- */}
        <div className="mt-12 flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500">
          <div className="h-px w-20 bg-white/20" />
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