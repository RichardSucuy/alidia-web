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
  resumeAudio: () => void;
  stopAudio: () => void; // <--- Añadimos esta prop para callar al bot
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
  resumeAudio,
  stopAudio,
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
      /* POSICIÓN Y TAMAÑO NANO */
      fixed bottom-20 right-4 z-50 flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200
      w-[75vw] h-[400px] max-h-[50vh] 
      sm:relative sm:bottom-0 sm:right-0 sm:h-[420px] sm:w-[280px]
      animate-in fade-in slide-in-from-right-4 duration-300
    `}>
      
      {/* HEADER NANO */}
      <div className="flex items-center justify-between bg-[#0C3C5C] px-3 py-2 text-white shadow-sm">
        <div className="flex items-center gap-2">
          <div className="scale-75 brightness-110">{Icons.bot}</div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold leading-tight uppercase">ALIDIA AI</span>
            <div className="flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] text-white/60">Activa</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* BOTÓN MULTIFUNCIÓN: ACTIVAR / CALLAR AUDIO */}
          <button 
            onClick={() => {
              stopAudio(); // Silencia cualquier audio actual
              const utterance = new SpeechSynthesisUtterance(""); 
              window.speechSynthesis.speak(utterance); // Truco para mantener el canal abierto
              resumeAudio();
            }}
            className="p-1.5 text-white/70 hover:text-white hover:bg-red-500/20 rounded-md transition-colors"
            title="Callar/Activar Audio"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          </button>
          
          <button onClick={onClose} className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
            <div className="scale-75">{Icons.close}</div>
          </button>
        </div>
      </div>

      {/* ÁREA DE MENSAJES (Más compacta) */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto bg-[#F8FAFC] px-3 py-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`
              max-w-[85%] rounded-xl px-3 py-1.5 text-[12px] shadow-sm leading-snug
              ${m.role === 'user' 
                ? 'bg-[#0C3C5C] text-white rounded-tr-none' 
                : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'}
            `}>
              {m.content}
            </div>
          </div>
        ))}
        {(loading || isTranscribing) && (
          <div className="flex items-center gap-1.5 px-1 opacity-50">
            <span className="h-1 w-1 bg-slate-400 rounded-full animate-bounce" />
            <span className="text-[9px] text-slate-400 uppercase font-bold tracking-tighter">
              {isTranscribing ? 'Escuchando' : 'Alidia piensa'}
            </span>
          </div>
        )}
      </div>

      {/* FOOTER NANO */}
      <div className="bg-white p-2 border-t">
        <div className={`flex items-center gap-1 rounded-lg border border-slate-200 p-1 ${isRecording ? 'bg-red-50 border-red-200' : 'bg-slate-50'}`}>
          {isRecording ? (
            <div className="flex flex-1 items-center gap-2 px-2 text-red-600">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-ping" />
              <span className="text-[11px] font-bold tabular-nums">{formatTime(seconds)}</span>
            </div>
          ) : (
            <input
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && onSend()}
              placeholder="Escribe..."
              className="flex-1 bg-transparent px-2 py-1 text-[12px] outline-none"
            />
          )}

          <div className="flex items-center">
            <button 
              onClick={onToggleRecording} 
              className={`flex h-7 w-7 items-center justify-center rounded-md transition-all ${isRecording ? 'bg-red-600 text-white' : 'text-slate-400 hover:bg-slate-200'}`}
            >
              <div className="scale-75">{Icons.mic}</div>
            </button>
            {!isRecording && (
              <button 
                onClick={onSend} 
                disabled={!input.trim()} 
                className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0C3C5C] text-white disabled:opacity-20 ml-0.5"
              >
                <div className="scale-50">{Icons.send}</div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}