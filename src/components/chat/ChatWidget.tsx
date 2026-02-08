'use client';

import { useEffect, useRef, useState } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const Icons = {
  close: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  send: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
  ),
  mic: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </svg>
  ),
  chat: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </svg>
  ),
  bot: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="12" rx="3" />
      <path d="M12 8V5" />
      <circle cx="12" cy="3" r="2" />
      <circle cx="8" cy="14" r="1.5" fill="currentColor" />
      <circle cx="16" cy="14" r="1.5" fill="currentColor" />
      <path d="M9 18h6" />
    </svg>
  ),
};

function pickExtension(mimeType: string) {
  if (mimeType.includes('mp4')) return 'mp4';
  if (mimeType.includes('mpeg')) return 'mp3';
  if (mimeType.includes('wav')) return 'wav';
  if (mimeType.includes('ogg')) return 'ogg';
  return 'webm';
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hola, soy el asistente virtual de ALIDIA. En que puedo ayudarte hoy?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [micSupported, setMicSupported] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [audioError, setAudioError] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, isTranscribing]);

  useEffect(() => {
    setMicSupported(
      typeof window !== 'undefined' &&
        typeof navigator !== 'undefined' &&
        !!navigator.mediaDevices &&
        typeof MediaRecorder !== 'undefined'
    );

    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  async function sendMessage(rawText?: string) {
    const text = (rawText ?? input).trim();
    if (!text || loading || (isTranscribing && !rawText)) return;

    setAudioError('');
    setInput('');
    setLoading(true);

    const nextMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: nextMessages.slice(-6) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Chat error');

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Disculpa, tuve un problema tecnico. Por favor, intenta de nuevo.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function transcribeAudio(blob: Blob, mimeType: string) {
    setIsTranscribing(true);
    setAudioError('');

    try {
      const ext = pickExtension(mimeType || blob.type || 'audio/webm');
      const file = new File([blob], `voice-note.${ext}`, {
        type: mimeType || blob.type || 'audio/webm',
      });

      const form = new FormData();
      form.append('file', file);

      const res = await fetch('/api/chat/transcribe', {
        method: 'POST',
        body: form,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Transcription error');

      const text = String(data?.text || '').trim();
      if (!text) {
        setAudioError('No se pudo reconocer contenido en el audio.');
        return;
      }

      await sendMessage(text);
    } catch {
      setAudioError('No fue posible transcribir el audio. Intenta nuevamente.');
    } finally {
      setIsTranscribing(false);
    }
  }

  async function startRecording() {
    if (!micSupported || isRecording || loading || isTranscribing) return;

    try {
      setAudioError('');
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      const preferredTypes = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4'];
      const selectedType = preferredTypes.find((type) => MediaRecorder.isTypeSupported(type));

      const recorder = selectedType ? new MediaRecorder(stream, { mimeType: selectedType }) : new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      audioChunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data);
      };

      recorder.onstop = () => {
        const type = recorder.mimeType || 'audio/webm';
        const blob = new Blob(audioChunksRef.current, { type });
        audioChunksRef.current = [];

        if (blob.size <= 0) {
          setAudioError('No se detecto audio en la grabacion.');
          setIsTranscribing(false);
          return;
        }

        if (mediaStreamRef.current) {
          mediaStreamRef.current.getTracks().forEach((track) => track.stop());
          mediaStreamRef.current = null;
        }

        void transcribeAudio(blob, type);
      };

      recorder.start();
      setIsRecording(true);
    } catch {
      setAudioError('No se pudo acceder al microfono en este navegador/dispositivo.');
      setIsRecording(false);
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
        mediaStreamRef.current = null;
      }
    }
  }

  function stopRecording() {
    if (!mediaRecorderRef.current || mediaRecorderRef.current.state === 'inactive') return;
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  }

  function handleVoiceClick() {
    if (isRecording) {
      stopRecording();
      return;
    }
    void startRecording();
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans sm:bottom-5 sm:right-5">
      {open ? (
        <div className="flex h-[min(78vh,600px)] w-[min(94vw,420px)] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_-18px_rgba(12,60,92,0.35)] ring-1 ring-[#0C3C5C]/8 animate-[chatOpen_0.3s_ease-out]">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0C3C5C] via-[#0e4a6f] to-[#0a344e] px-5 py-4 text-white">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-white blur-2xl" />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/15">
                    {Icons.bot}
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0C3C5C] bg-emerald-400" />
                </div>
                <div>
                  <h3 className="m-0 text-[15px] font-bold tracking-tight">Asistente ALIDIA</h3>
                  <span className="text-xs text-white/70">Disponible para orientarte</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Cerrar chat"
              >
                {Icons.close}
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex flex-1 flex-col gap-4 overflow-y-auto bg-gradient-to-b from-slate-50/70 to-white px-4 py-4 scroll-smooth"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 animate-[msgIn_0.2s_ease-out] ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="mb-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0C3C5C] to-[#0f4e75]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed ${
                    m.role === 'user'
                      ? 'rounded-br-md bg-gradient-to-br from-[#0C3C5C] to-[#0f4e75] text-white'
                      : 'rounded-bl-md border border-gray-100 bg-white text-gray-700 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {(loading || isTranscribing) && (
              <div className="flex animate-[msgIn_0.2s_ease-out] items-end gap-2 justify-start">
                <div className="mb-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0C3C5C] to-[#0f4e75]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-gray-100 bg-white px-5 py-3">
                  <span className="h-2 w-2 animate-[typing_1.4s_infinite_ease-in-out] rounded-full bg-[#0C3C5C]" />
                  <span className="h-2 w-2 animate-[typing_1.4s_infinite_ease-in-out_0.2s] rounded-full bg-[#0C3C5C]" />
                  <span className="h-2 w-2 animate-[typing_1.4s_infinite_ease-in-out_0.4s] rounded-full bg-[#0C3C5C]" />
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-gray-100 bg-white px-4 py-3.5">
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 focus-within:border-[#0C3C5C]/25 focus-within:ring-2 focus-within:ring-[#0C3C5C]/8">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 border-none bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />

              <button
                onClick={handleVoiceClick}
                disabled={!micSupported || loading || isTranscribing}
                title={
                  !micSupported
                    ? 'Tu navegador no soporta grabacion'
                    : isRecording
                      ? 'Detener grabacion'
                      : 'Grabar nota de voz'
                }
                className={`relative flex h-10 w-10 items-center justify-center rounded-lg transition ${
                  !micSupported || loading || isTranscribing
                    ? 'cursor-not-allowed bg-gray-200/80 text-gray-400'
                    : isRecording
                      ? 'bg-red-50 text-red-600 ring-1 ring-red-200'
                      : 'bg-gray-200/70 text-gray-600 hover:bg-gray-300/80'
                }`}
              >
                {Icons.mic}
                {isRecording && <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500 animate-pulse" />}
              </button>

              <button
                onClick={() => sendMessage()}
                disabled={loading || isTranscribing || !input.trim()}
                className={`flex h-10 w-10 items-center justify-center rounded-lg transition ${
                  loading || isTranscribing || !input.trim()
                    ? 'cursor-not-allowed bg-gray-200/80 text-gray-400'
                    : 'bg-gradient-to-br from-[#0C3C5C] to-[#0f4e75] text-white shadow-[0_4px_12px_rgba(12,60,92,0.28)] hover:shadow-[0_6px_16px_rgba(12,60,92,0.35)]'
                }`}
              >
                {Icons.send}
              </button>
            </div>

            {audioError && (
              <p className="mt-2 text-center text-[11px] text-red-600">{audioError}</p>
            )}

            <p className="mt-2 text-center text-[10px] text-gray-400">
              {isRecording
                ? 'Grabando audio... pulsa microfono para enviar'
                : isTranscribing
                  ? 'Procesando nota de voz...'
                  : 'Asistente informativo de ALIDIA'}
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-[#0C3C5C] via-[#0e4a6f] to-[#0a344e] px-6 py-4 text-white shadow-[0_8px_24px_rgba(12,60,92,0.34)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(12,60,92,0.4)]"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative z-10 text-sm font-semibold">Necesitas ayuda?</span>
          <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition group-hover:scale-105">
            {Icons.chat}
          </div>
          <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full bg-emerald-400" />
        </button>
      )}

      <style>{`
        @keyframes chatOpen {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes msgIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
