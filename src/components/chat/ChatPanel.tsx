'use client';

import { ReactNode, RefObject, useState, useEffect } from 'react';

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
  scrollRef: RefObject<HTMLDivElement | null>;
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
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => setSeconds((p) => p + 1), 1000);
    } else {
      setSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (

    <div className={`
      /* MÓVIL: Centrado, ancho fijo 90vw, alto 70vh */
      fixed bottom-20 right-[5vw] left-[5vw] flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200
      h-[70vh] max-h-[550px]
      
      /* DESKTOP: Tamaño pequeño elegante */
      sm:absolute sm:bottom-0 sm:right-0 sm:left-auto sm:h-[500px] sm:w-[350px]
      
      animate-in fade-in slide-in-from-bottom-2 duration-300
    `}>
    
      {/* HEADER SLIM (Igual al anterior pero con py-2.5) */}
      <div className="flex items-center justify-between bg-[#0C3C5C] px-3 py-2.5 text-white shadow-md">
        <div className="flex items-center gap-2">
          <div className="scale-90">{Icons.bot}</div>
          <span className="text-[12px] font-bold tracking-tight">ALIDIA AI</span>
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <button onClick={onClose} className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
          <div className="scale-75">{Icons.close}</div>
        </button>
      </div>


      {/* ÁREA DE MENSAJES */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto bg-[#F8FAFC] px-3 py-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-[14px] shadow-sm leading-relaxed ${
                m.role === 'user' ? 'bg-[#0C3C5C] text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'
              }`}>
              {m.content}
            </div>
          </div>
        ))}
        {(loading || isTranscribing) && (
          <div className="flex items-center gap-2 px-1 text-[11px] text-slate-400 font-medium">
            <span className="flex gap-1">
              <span className="h-1 w-1 bg-slate-400 rounded-full animate-bounce" />
              <span className="h-1 w-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
            </span>
            {isTranscribing ? 'Procesando voz...' : 'Escribiendo...'}
          </div>
        )}
      </div>

      {/* FOOTER COMPACTO */}
      {/* FOOTER CRONÓMETRO */}
      <div className="bg-white p-3 border-t">
        <div className={`flex items-center gap-2 rounded-xl border border-slate-200 p-1.5 transition-all ${isRecording ? 'bg-red-50' : 'bg-slate-50'}`}>
          {isRecording ? (
            <div className="flex flex-1 items-center gap-2 px-2 text-red-600">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-ping" />
              <span className="text-sm font-bold tabular-nums">{formatTime(seconds)}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Grabando...</span>
            </div>
          ) : (
            <input
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && onSend()}
              placeholder="Escribe aquí..."
              className="flex-1 bg-transparent px-2 py-1 text-sm outline-none"
            />
          )}

          <div className="flex items-center gap-1">
            <button onClick={onToggleRecording} className={`flex h-9 w-9 items-center justify-center rounded-lg ${isRecording ? 'bg-red-600 text-white' : 'text-slate-400 hover:bg-slate-100'}`}>
              {Icons.mic}
            </button>
            {!isRecording && (
              <button onClick={onSend} disabled={!input.trim()} className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0C3C5C] text-white disabled:opacity-30">
                {Icons.send}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}