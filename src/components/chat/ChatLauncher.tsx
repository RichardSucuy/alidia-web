'use client';
import { ReactNode } from 'react';

export function ChatLauncher({ onOpen, Icons }: { onOpen: () => void; Icons: any }) {
  return (
    <button
      onClick={onOpen}
      className="group flex items-center gap-3 rounded-2xl bg-[#0C3C5C] p-3 text-white shadow-xl transition-all hover:scale-105 active:scale-95 sm:rounded-full sm:px-6 sm:py-4"
    >
      <span className="hidden text-sm font-bold sm:block">¿Necesitas ayuda?</span>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:rotate-12">
        {Icons.chat}
      </div>
      {/* Indicador de notificación */}
      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 border-2 border-white" />
      </span>
    </button>
  );
}