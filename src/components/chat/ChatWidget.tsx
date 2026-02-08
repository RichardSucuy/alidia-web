'use client';

import { useState, useEffect, useRef } from 'react';

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

// Iconos SVG más elegantes y modernos
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
    sparkles: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" />
            <path d="M19 15L19.75 17.25L22 18L19.75 18.75L19 21L18.25 18.75L16 18L18.25 17.25L19 15Z" opacity="0.7" />
            <path d="M5 2L5.5 3.5L7 4L5.5 4.5L5 6L4.5 4.5L3 4L4.5 3.5L5 2Z" opacity="0.5" />
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

export function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: '¡Hola! Soy el asistente virtual de ALIDIA. ¿En qué puedo ayudarte hoy?',
        },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, loading]);

    async function sendMessage() {
        const text = input.trim();
        if (!text || loading) return;

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
            if (!res.ok) throw new Error();

            setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: 'Disculpa, tuve un problema técnico. Por favor, intenta de nuevo.' },
            ]);
        } finally {
            setLoading(false);
        }
    }

    function handleVoiceClick() {
        console.log('Función de voz próximamente disponible');
    }

    return (
        <div className="fixed bottom-5 right-5 z-50 font-sans">
            {open ? (
                <div className="flex flex-col w-[min(94vw,420px)] h-[600px] rounded-3xl bg-white shadow-[0_25px_60px_-15px_rgba(12,60,92,0.3),0_0_0_1px_rgba(12,60,92,0.08)] overflow-hidden animate-[chatOpen_0.35s_cubic-bezier(0.34,1.56,0.64,1)]">

                    {/* HEADER PREMIUM */}
                    <div className="relative bg-gradient-to-br from-[#0C3C5C] via-[#0e4a6f] to-[#0a344e] px-5 py-5 text-white overflow-hidden">
                        {/* Patrón decorativo */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl translate-x-10 -translate-y-10" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl -translate-x-8 translate-y-8" />
                        </div>

                        <div className="flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-3.5">
                                {/* Avatar del Bot */}
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg">
                                        {Icons.bot}
                                    </div>
                                    {/* Indicador online */}
                                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#0C3C5C] shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                                </div>
                                <div>
                                    <h3 className="m-0 font-bold text-base tracking-tight flex items-center gap-2">
                                        Asistente ALIDIA
                                        <span className="text-amber-300/90">{Icons.sparkles}</span>
                                    </h3>
                                    <span className="text-xs text-white/70 font-medium">Siempre disponible para ayudarte</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="bg-white/10 hover:bg-white/20 active:bg-white/25 border-none rounded-xl w-10 h-10 flex items-center justify-center cursor-pointer text-white transition-all duration-200 hover:scale-105"
                                aria-label="Cerrar chat"
                            >
                                {Icons.close}
                            </button>
                        </div>
                    </div>

                    {/* AREA DE MENSAJES */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto px-5 py-5 bg-gradient-to-b from-slate-50/80 to-white flex flex-col gap-4 scroll-smooth"
                    >
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`flex items-end gap-2 animate-[msgIn_0.25s_ease-out] ${m.role === 'user' ? 'justify-end' : 'justify-start'
                                    }`}
                            >
                                {/* Avatar pequeño para el asistente */}
                                {m.role === 'assistant' && (
                                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0C3C5C] to-[#0f4e75] flex items-center justify-center flex-shrink-0 mb-0.5">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            <circle cx="12" cy="12" r="3" />
                                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                        </svg>
                                    </div>
                                )}
                                <div
                                    className={`max-w-[80%] px-4 py-3 text-[14px] leading-relaxed ${m.role === 'user'
                                            ? 'bg-gradient-to-br from-[#0C3C5C] to-[#0f4e75] text-white rounded-2xl rounded-br-md shadow-[0_4px_15px_rgba(12,60,92,0.25)]'
                                            : 'bg-white text-gray-700 rounded-2xl rounded-bl-md border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)]'
                                        }`}
                                >
                                    {m.content}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="flex items-end gap-2 justify-start animate-[msgIn_0.25s_ease-out]">
                                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0C3C5C] to-[#0f4e75] flex items-center justify-center flex-shrink-0 mb-0.5">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                    </svg>
                                </div>
                                <div className="bg-white border border-gray-100 px-5 py-3.5 rounded-2xl rounded-bl-md shadow-sm flex gap-1.5 items-center">
                                    <span className="w-2 h-2 bg-[#0C3C5C] rounded-full animate-[typing_1.4s_infinite_ease-in-out]" />
                                    <span className="w-2 h-2 bg-[#0C3C5C] rounded-full animate-[typing_1.4s_infinite_ease-in-out_0.2s]" />
                                    <span className="w-2 h-2 bg-[#0C3C5C] rounded-full animate-[typing_1.4s_infinite_ease-in-out_0.4s]" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* INPUT MEJORADO */}
                    <div className="px-4 py-4 bg-white border-t border-gray-100">
                        <div className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100/80 rounded-2xl pl-4 pr-1.5 py-1.5 transition-colors duration-200 border border-gray-100 focus-within:border-[#0C3C5C]/30 focus-within:ring-2 focus-within:ring-[#0C3C5C]/10">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                                placeholder="Escribe tu mensaje..."
                                className="flex-1 border-none bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                            />

                            {/* Botón de Voz */}
                            <button
                                onClick={handleVoiceClick}
                                disabled={true}
                                title="Notas de voz - Próximamente"
                                className="w-10 h-10 rounded-xl border-none bg-gray-200/70 flex items-center justify-center cursor-not-allowed opacity-40 transition-all duration-200 text-gray-500"
                            >
                                {Icons.mic}
                            </button>

                            {/* Botón de Enviar */}
                            <button
                                onClick={sendMessage}
                                disabled={loading || !input.trim()}
                                className={`w-10 h-10 rounded-xl border-none flex items-center justify-center transition-all duration-200 ${loading || !input.trim()
                                        ? 'bg-gray-200/70 cursor-not-allowed text-gray-400'
                                        : 'bg-gradient-to-br from-[#0C3C5C] to-[#0f4e75] text-white cursor-pointer shadow-[0_4px_14px_rgba(12,60,92,0.35)] hover:shadow-[0_6px_20px_rgba(12,60,92,0.45)] hover:scale-105 active:scale-95'
                                    }`}
                            >
                                {Icons.send}
                            </button>
                        </div>

                        <p className="text-center text-[10px] text-gray-400 mt-3 mb-0 flex items-center justify-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                            Asistente informativo de ALIDIA
                        </p>
                    </div>
                </div>
            ) : (
                /* BOTÓN FLOTANTE PREMIUM */
                <button
                    onClick={() => setOpen(true)}
                    className="group relative flex items-center gap-3 bg-gradient-to-br from-[#0C3C5C] via-[#0e4a6f] to-[#0a344e] text-white py-4 px-6 rounded-full border-none shadow-[0_8px_30px_rgba(12,60,92,0.4),0_4px_12px_rgba(12,60,92,0.25)] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(12,60,92,0.5),0_6px_16px_rgba(12,60,92,0.3)] active:scale-[0.98] overflow-hidden"
                >
                    {/* Brillo animado */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <span className="font-semibold text-sm relative z-10">¿Necesitas ayuda?</span>
                    <div className="relative z-10 bg-white/20 rounded-full w-9 h-9 flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                        {Icons.chat}
                    </div>

                    {/* Pulso */}
                    <span className="absolute -right-1 -top-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-75" />
                    <span className="absolute -right-1 -top-1 w-4 h-4 bg-emerald-400 rounded-full" />
                </button>
            )}

            {/* Animaciones CSS */}
            <style>{`
        @keyframes chatOpen {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes msgIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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
