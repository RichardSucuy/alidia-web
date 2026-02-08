'use client';

import { ReactNode } from 'react';

type ChatLauncherProps = {
  onOpen: () => void;
  Icons: Record<string, ReactNode>;
};

export function ChatLauncher({ onOpen, Icons }: ChatLauncherProps) {
  return (
    <button
      onClick={onOpen}
      className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0C3C5C] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90"
      aria-label="Abrir chat"
    >
      {/* Círculo de fondo con efecto de pulso sutil */}
      <div className="absolute inset-0 animate-pulse rounded-full bg-[#0C3C5C] opacity-20 group-hover:hidden" />
      
      {/* Icono de Robot - Centrado y con animación al pasar el mouse */}
      <div className="relative z-10 transition-transform duration-300 group-hover:rotate-12">
        {Icons.bot}
      </div>


      {/* Tooltip opcional que solo aparece en desktop al hacer hover */}
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-800 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 hidden sm:block">
        ¿Te ayudo?
      </span>
    </button>
  );
}