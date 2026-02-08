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
  isSpeaking: boolean;    // <--- Nueva Prop para la animación
  audioError: string;
  input: string;
  onInputChange: (v: string) => void;
  onSend: () => void;
  onToggleRecording: () => void;
  resumeAudio: () => void;
  stopAudio: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
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
  isSpeaking,
  audioError,
  input,
  onInputChange,
  onSend,
  onToggleRecording,
  resumeAudio,
  stopAudio,
  isMuted,
  onToggleMute,
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
    <div className="fixed bottom-20 right-4 z-50 flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200 w-[75vw] h-[400px] max-h-[50vh] sm:relative sm:bottom-0 sm:right-0 sm:h-[420px] sm:w-[280px] animate-in fade-in slide-in-from-right-4 duration-300">
      
      {/* HEADER */}
      <div className="flex items-center justify-between bg-[#0C3C5C] px-3 py-2 text-white shadow-sm">
        <div className="flex items-center gap-2">
          <div className="scale-75 brightness-110">{Icons.bot}</div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold leading-tight uppercase tracking-tight">ALIDIA AI</span>

            {/* INDICADOR VISUAL DE VOZ (3 BARRAS) */}
            {isSpeaking && !isMuted && (
              <div className="flex items-end gap-[2px] h-3 mb-0.5 ml-1">
                {/* Barra 1 */}
                <div className="w-[2px] bg-emerald-400 animate-[bounce_0.8s_infinite] h-2" />
                {/* Barra 2 - Más alta y con retraso */}
                <div className="w-[2px] bg-emerald-400 animate-[bounce_0.8s_infinite_0.2s] h-3" />
                {/* Barra 3 - Con más retraso */}
                <div className="w-[2px] bg-emerald-400 animate-[bounce_0.8s_infinite_0.4s] h-1.5" />
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-0.5">
          <button 
            onClick={() => { stopAudio(); onToggleMute(); if (isMuted) resumeAudio(); }}
            className={`p-1.5 rounded-md transition-all ${isMuted ? 'text-red-400 bg-red-500/10' : 'text-emerald-400 hover:bg-white/10'}`}
          >
            {isMuted ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" /></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
            )}
          </button>
          <button onClick={onClose} className="p-1.5 hover:bg-white/10 rounded-full transition-colors active:scale-90">
            <div className="scale-75">{Icons.close}</div>
          </button>
        </div>
      </div>

      {/* MENSAJES */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto bg-[#F8FAFC] px-3 py-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-xl px-3 py-1.5 text-[12px] shadow-sm leading-snug ${
                m.role === 'user' ? 'bg-[#0C3C5C] text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'
              }`}>
              {m.content}
              {/* Onda minúscula al final del último mensaje del bot si está hablando */}
              {m.role === 'assistant' && i === messages.length - 1 && isSpeaking && !isMuted && (
                <span className="inline-flex items-end gap-[1px] ml-2 h-2">
                  <span className="w-[1.5px] h-1.5 bg-[#0C3C5C]/40 animate-bounce" />
                  <span className="w-[1.5px] h-2 bg-[#0C3C5C]/40 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-[1.5px] h-1.5 bg-[#0C3C5C]/40 animate-bounce [animation-delay:0.4s]" />
                </span>
              )}
            </div>
          </div>
        ))}
        {(loading || isTranscribing) && (
          <div className="flex items-center gap-1.5 px-1 opacity-50">
            <span className="h-1 w-1 bg-slate-400 rounded-full animate-bounce" />
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">
              {isTranscribing ? 'Escuchando' : 'Alidia piensa'}
            </span>
          </div>
        )}
      </div>

      {/* FOOTER */}
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
              placeholder="Mensaje..."
              className="flex-1 bg-transparent px-2 py-1 text-[12px] outline-none"
            />
          )}

          <div className="flex items-center">
            <button 
              onClick={() => {
                if (!isRecording) stopAudio(); // <--- SI EMPIEZA A GRABAR, CALLA AL BOT
                onToggleRecording();
              }} 
              className={`flex h-7 w-7 items-center justify-center rounded-md transition-all ${isRecording ? 'bg-red-600 text-white' : 'text-slate-400 hover:bg-slate-200'}`}
            >
              <div className="scale-75">{Icons.mic}</div>
            </button>
            {!isRecording && (
              <button onClick={onSend} disabled={!input.trim()} className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0C3C5C] text-white disabled:opacity-20 ml-0.5">
                <div className="scale-50">{Icons.send}</div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}