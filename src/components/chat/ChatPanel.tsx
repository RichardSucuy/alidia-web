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
      /* AJUSTE DE TAMAÑO RESPONSIVO */
      fixed bottom-20 right-4 left-4 z-50 flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200
      /* En móvil: Altura máxima corta para que no tape todo */
      max-h-[60vh] 
      /* En Desktop: Tamaño fijo elegante */
      sm:relative sm:bottom-0 sm:right-0 sm:left-auto sm:max-h-none sm:h-[500px] sm:w-[350px] 
      animate-in fade-in slide-in-from-bottom-4 duration-300
    `}>
      
      {/* HEADER SLIM */}
      <div className="flex items-center justify-between bg-[#0C3C5C] px-3 py-2 text-white shadow-sm">
        <div className="flex items-center gap-2">
          <div className="scale-75 brightness-110">{Icons.bot}</div>
          <span className="text-[11px] font-bold tracking-widest uppercase opacity-90">Alidia</span>
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <button 
          onClick={onClose} 
          className="p-1.5 hover:bg-white/10 rounded-full transition-colors active:scale-90"
        >
          <div className="scale-75">{Icons.close}</div>
        </button>
      </div>

      {/* MENSAJES: Maximizando área de lectura */}
      <div 
        ref={scrollRef} 
        className="flex-1 overflow-y-auto bg-[#F8FAFC] px-3 py-4 space-y-3 scroll-smooth"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`
              max-w-[85%] rounded-2xl px-3 py-2 text-[13px] leading-snug shadow-sm
              ${m.role === 'user' 
                ? 'bg-[#0C3C5C] text-white rounded-br-none' 
                : 'bg-white border border-slate-100 text-slate-700 rounded-bl-none'}
            `}>
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
      <div className="bg-white p-2 border-t">
        <div className={`flex items-center gap-1.5 rounded-xl border border-slate-200 p-1 transition-all ${isRecording ? 'bg-red-50 border-red-200' : 'bg-slate-50'}`}>
          
          {isRecording ? (
            <div className="flex flex-1 items-center gap-2 px-2">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-[12px] font-bold text-red-600 tabular-nums">
                {formatTime(seconds)}
              </span>
            </div>
          ) : (
            <input
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  onSend();
                }
              }}
              placeholder="Pregunta algo..."
              className="flex-1 bg-transparent px-2 py-1.5 text-[13px] outline-none"
            />
          )}

          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                // El clic activa el permiso de audio en móviles
                onToggleRecording();
              }}
              disabled={!micSupported || loading}
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all active:scale-90 ${
                isRecording ? 'bg-red-600 text-white' : 'text-slate-400 hover:bg-slate-200'
              }`}
            >
              <div className="scale-90">{Icons.mic}</div>
            </button>

            {!isRecording && (
              <button
                onClick={onSend}
                disabled={!input.trim() || loading}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0C3C5C] text-white disabled:opacity-20 active:scale-90 transition-transform"
              >
                <div className="scale-75">{Icons.send}</div>
              </button>
            )}
          </div>
        </div>
        {audioError && <p className="mt-1 text-[10px] text-red-500 text-center font-bold uppercase tracking-tighter">{audioError}</p>}
      </div>
    </div>
  );
}