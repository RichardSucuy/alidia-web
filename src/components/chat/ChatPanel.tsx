'use client';

import { ReactNode, RefObject, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type ChatPanelProps = {
  messages: Message[];
  loading: boolean;
  isTranscribing: boolean;
  isSpeaking: boolean;
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
  seconds: number;
  maxDurationReached: boolean;
};

export function ChatPanel({
  messages,
  loading,
  isTranscribing,
  isSpeaking,
  input,
  onInputChange,
  onSend,
  onToggleRecording,
  stopAudio,
  isMuted,
  onToggleMute,
  isRecording,
  scrollRef,
  Icons,
  onClose,
  seconds,
  maxDurationReached,
}: ChatPanelProps) {

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!scrollRef?.current) return;

    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: isFirstRender.current ? 'auto' : 'smooth',
    });

    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, [messages, isTranscribing]);

  return (
    <div className="relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl border border-[#0C3C5C]/10 w-[340px] h-[520px] font-sans">

      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-[#0C3C5C]/5 px-5 py-4 bg-white">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0C3C5C]/5 text-[#0C3C5C]">
            {Icons.node || Icons.bot}
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#0C3C5C] tracking-tight">
              ALIDIA AI
            </span>
            <div className="flex items-center gap-1.5">
              {isSpeaking && !isMuted ? (
                <div className="flex gap-[2px]">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [4, 10, 4] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
                      className="w-0.5 bg-[#0C3C5C] rounded-full"
                    />
                  ))}
                </div>
              ) : (
                <span className="text-[10px] text-gray-400 font-medium lowercase">
                  en línea
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={onToggleMute}
            className={`p-2 rounded-xl transition-all active:scale-90 ${
              isMuted
                ? 'text-red-500 bg-red-50'
                : 'text-[#0C3C5C] hover:bg-[#0C3C5C]/5'
            }`}
          >
            {isMuted ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
          <button
            onClick={onClose}
            className="p-2 text-gray-300 hover:text-gray-500 transition-colors"
          >
            <div className="scale-90">{Icons.close}</div>
          </button>
        </div>
      </div>

      {/* MENSAJES */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto bg-gray-50/50 px-4 py-6 space-y-6 scroll-smooth"
      >
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-4 py-2.5 text-[13px] leading-relaxed shadow-sm ${
                  m.role === 'user'
                    ? 'bg-[#0C3C5C] text-white rounded-[20px] rounded-tr-none'
                    : 'bg-white border border-gray-100 text-gray-700 rounded-[20px] rounded-tl-none'
                }`}
              >
                {m.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {maxDurationReached && (
          <div className="text-[11px] text-red-500 font-medium">
            Límite máximo de 5 minutos alcanzado.
          </div>
        )}

        {(loading || isTranscribing) && (
          <div className="flex flex-col gap-2">
            <div className="flex gap-1.5 px-1">
              <span className="h-1.5 w-1.5 bg-[#0C3C5C] rounded-full animate-bounce [animation-duration:0.8s]" />
              <span className="h-1.5 w-1.5 bg-[#0C3C5C] rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.2s]" />
              <span className="h-1.5 w-1.5 bg-[#0C3C5C] rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.4s]" />
            </div>
            <span className="text-[10px] font-bold text-[#0C3C5C]/60 uppercase tracking-widest pl-1">
              {isTranscribing ? 'Transcribiendo...' : 'Analizando'}
            </span>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="p-4 bg-white">
        <div
          className={`flex items-center gap-2 rounded-[22px] border p-1.5 transition-all duration-300 ${
            isRecording
              ? 'border-red-100 bg-red-50/50'
              : 'border-gray-200 bg-gray-50 focus-within:border-[#0C3C5C]/30 focus-within:bg-white'
          }`}
        >
          {isRecording ? (
            <div className="flex flex-1 items-center gap-3 px-3 text-red-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              <span className="text-[12px] font-bold tabular-nums tracking-tight">
                {formatTime(seconds)}
              </span>
              <span className="text-[11px] font-medium opacity-70">
                Grabando audio...
              </span>
            </div>
          ) : (
            <input
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && onSend()}
              placeholder="¿Cómo puedo ayudarte?"
              className="flex-1 bg-transparent px-3 py-2 text-[13px] outline-none text-gray-700 placeholder:text-gray-400"
            />
          )}

          <div className="flex items-center gap-1">
            <button
              onClick={() => { if (!isRecording) stopAudio(); onToggleRecording(); }}
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-all active:scale-90 ${
                isRecording
                  ? 'bg-red-500 text-white shadow-lg shadow-red-200'
                  : 'text-gray-400 hover:text-[#0C3C5C] hover:bg-white'
              }`}
            >
              <div className="scale-90">{Icons.mic}</div>
            </button>

            {!isRecording && (
              <button
                onClick={onSend}
                disabled={!input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0C3C5C] text-white disabled:opacity-0 disabled:scale-75 transition-all shadow-md shadow-[#0C3C5C]/20 active:scale-95"
              >
                <div className="scale-75 translate-x-0.5">{Icons.send}</div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
