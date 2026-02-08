'use client';

import { ReactNode, RefObject } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type ChatPanelProps = {
  messages: Message[];
  loading: boolean;
  isTranscribing: boolean;
  audioError: string;
  input: string;
  onInputChange: (v: string) => void;
  onSend: () => void;
  onToggleRecording: () => void;
  isRecording: boolean;
  micSupported: boolean;
  scrollRef: RefObject<HTMLDivElement | null>; // 👈 FIX
  Icons: Record<string, ReactNode>;
  onClose: () => void;
};


export function ChatPanel({
  messages,
  loading,
  isTranscribing,
  audioError,
  input,
  onInputChange,
  onSend,
  onToggleRecording,
  isRecording,
  micSupported,
  scrollRef,
  Icons,
  onClose,
}: ChatPanelProps) {
  return (
    <div className={`
      /* Móvil: Pantalla completa con margen pequeño. Desktop: Tamaño fijo */
      fixed inset-4 bottom-20 z-50 flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl 
      sm:relative sm:inset-auto sm:h-[600px] sm:w-[400px] 
      ring-1 ring-black/5 animate-in fade-in zoom-in duration-300
    `}>
      {/* HEADER: Más compacto */}
      <div className="bg-gradient-to-r from-[#0C3C5C] to-[#0e4a6f] px-4 py-3 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md">
              {Icons.bot}
            </div>
            <div>
              <h3 className="text-sm font-bold leading-none">Asistente ALIDIA</h3>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-white/70 uppercase tracking-wider font-medium">En línea</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="group flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          >
            <div className="transition group-hover:rotate-90">{Icons.close}</div>
          </button>
        </div>
      </div>

      {/* MENSAJES: Scroll mejorado */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto bg-[#f8fafc] p-4 space-y-4 scroll-smooth"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`
              max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm
              ${m.role === 'user' 
                ? 'bg-[#0C3C5C] text-white rounded-tr-none' 
                : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'}
            `}>
              {m.content}
            </div>
          </div>
        ))}
        {(loading || isTranscribing) && (
          <div className="flex items-center gap-2 text-xs text-slate-400 italic px-2">
            <span className="flex gap-1">
              <span className="h-1.5 w-1.5 bg-slate-300 rounded-full animate-bounce" />
              <span className="h-1.5 w-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="h-1.5 w-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
            </span>
            ALIDIA está pensando...
          </div>
        )}
      </div>

      {/* INPUT: Diseño minimalista */}
      <div className="border-t bg-white p-3 sm:p-4">
        <div className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 focus-within:border-[#0C3C5C]/50 focus-within:ring-4 focus-within:ring-[#0C3C5C]/5 transition-all">
          <textarea
            rows={1}
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                onSend();
              }
            }}
            placeholder="Escribe un mensaje..."
            className="flex-1 max-h-32 resize-none bg-transparent px-3 py-2 text-sm outline-none"
          />
          <div className="flex gap-1">
            <button
              onClick={onToggleRecording}
              className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                isRecording ? 'bg-red-500 text-white animate-pulse' : 'text-slate-400 hover:bg-slate-200'
              }`}
            >
              {Icons.mic}
            </button>
            <button
              onClick={onSend}
              disabled={!input.trim() || loading}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0C3C5C] text-white disabled:opacity-50 hover:bg-[#0a344e] transition-transform active:scale-95"
            >
              {Icons.send}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}