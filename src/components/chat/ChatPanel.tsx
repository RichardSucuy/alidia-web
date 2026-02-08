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

  // Lógica del cronómetro minimalista
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  // Formateador de tiempo (0:00)
  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-x-4 top-4 bottom-20 z-50 flex flex-col overflow-hidden rounded-xl bg-white shadow-2xl border border-slate-200 sm:relative sm:inset-auto sm:h-[520px] sm:w-[360px] animate-in fade-in zoom-in duration-200">
      
      {/* HEADER SLIM */}
      <div className="flex items-center justify-between bg-[#0C3C5C] px-3 py-2 text-white">
        <div className="flex items-center gap-2">
          <div className="scale-75">{Icons.bot}</div>
          <h3 className="text-[12px] font-bold tracking-tight uppercase opacity-90">ALIDIA AI</h3>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-md transition-colors">
          <div className="scale-75 opacity-80">{Icons.close}</div>
        </button>
      </div>

      {/* MENSAJES */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto bg-slate-50/50 px-3 py-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[88%] rounded-lg px-3 py-2 text-[13px] leading-snug shadow-sm ${
                m.role === 'user' ? 'bg-[#0C3C5C] text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'
              }`}>
              {m.content}
            </div>
          </div>
        ))}
        {(loading || isTranscribing) && (
          <div className="text-[11px] text-slate-400 italic px-1">
            {isTranscribing ? 'Transcribiendo audio...' : 'ALIDIA está escribiendo...'}
          </div>
        )}
      </div>

      {/* FOOTER CON CRONÓMETRO */}
      <div className="border-t bg-white p-2.5">
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-1 focus-within:bg-white transition-all">
          
          {/* Si está grabando, ocultamos el input y mostramos el estado de grabación */}
          {isRecording ? (
            <div className="flex flex-1 items-center gap-2 px-2">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-[12px] font-medium text-red-500 tabular-nums">
                Grabando {formatTime(seconds)}
              </span>
            </div>
          ) : (
            <input
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && onSend()}
              placeholder="Escribe un mensaje..."
              className="flex-1 bg-transparent px-2 py-1 text-[13px] outline-none"
            />
          )}

          <div className="flex items-center gap-0.5">
            <button
              onClick={onToggleRecording}
              disabled={!micSupported || loading}
              className={`flex h-8 w-8 items-center justify-center rounded-md transition-all ${
                isRecording ? 'bg-red-500 text-white shadow-inner' : 'text-slate-400 hover:bg-slate-200'
              }`}
            >
              <div className="scale-90">{Icons.mic}</div>
            </button>

            {!isRecording && (
              <button
                onClick={onSend}
                disabled={!input.trim() || loading}
                className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0C3C5C] text-white disabled:opacity-30"
              >
                <div className="scale-75">{Icons.send}</div>
              </button>
            )}
          </div>
        </div>
        {audioError && <p className="mt-1 text-[10px] text-red-500 text-center">{audioError}</p>}
      </div>
    </div>
  );
}