'use client';

import { useState, useEffect, useRef } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type RateLimitInfo = {
  remainingTokens?: string | null;
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hola, soy el asistente de ALIDIA. 🌟 ¿En qué puedo ayudarte hoy?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al recibir mensajes
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
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Lo siento, tuve un problema técnico. Por favor, reintenta en un momento.' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {open ? (
        <div className="flex flex-col w-[min(92vw,400px)] h-[550px] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
          
          {/* HEADER MODERNO */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-4 text-white shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                  🤝
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">Asistente ALIDIA</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-[11px] text-amber-50">En línea ahora</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setOpen(false)}
                className="hover:bg-black/10 p-1.5 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* CUERPO DEL CHAT */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 scroll-smooth"
          >
            {messages.map((m, i) => (
              <div 
                key={i} 
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`
                  max-w-[85%] px-4 py-2.5 rounded-2xl text-sm shadow-sm
                  ${m.role === 'user' 
                    ? 'bg-amber-500 text-white rounded-tr-none' 
                    : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'}
                `}>
                  {m.content}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-gray-200 text-gray-500 px-4 py-2 rounded-2xl text-xs">
                  Escribiendo...
                </div>
              </div>
            )}
          </div>

          {/* INPUT MEJORADO */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Escribe un mensaje..."
                className="w-full pl-4 pr-12 py-3 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-amber-500 transition-all outline-none text-gray-700"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="absolute right-1.5 p-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 disabled:opacity-40 transition-all shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className="text-center text-[10px] text-gray-400 mt-2">
              Impulsado por IA para el bienestar social
            </p>
          </div>
        </div>
      ) : (
        /* BOTÓN FLOTANTE ESTILO ONG */
        <button
          onClick={() => setOpen(true)}
          className="group flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3.5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
        >
          <span className="font-bold text-sm">¿Necesitas ayuda?</span>
          <div className="bg-white/20 rounded-full p-1 group-hover:rotate-12 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}