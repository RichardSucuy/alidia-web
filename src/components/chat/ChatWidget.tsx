'use client';

import { useState } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type RateLimitInfo = {
  remainingTokens?: string | null;
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  // Estado persistente en sesión (mientras no se recargue)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Hola, soy el asistente informativo de ALIDIA. Puedo contarte qué hacemos, nuestros proyectos y cómo conectar.',
    },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [rateLimit, setRateLimit] = useState<RateLimitInfo | null>(null);

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
        body: JSON.stringify({
          message: text,
          history: nextMessages.slice(-10),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || 'Error al contactar el asistente');
      }

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply || '...' },
      ]);

      if (data.rateLimit) {
        setRateLimit(data.rateLimit);
      }
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Ocurrió un problema al responder';

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'En este momento no puedo responder correctamente. Puedes intentarlo más tarde o contactar directamente al equipo.',
        },
      ]);
      console.error(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="w-[min(92vw,380px)] rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Asistente ALIDIA
              </p>
              <p className="text-xs text-gray-500">
                Respuestas informativas · no oficiales
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
            >
              Cerrar
            </button>
          </div>

          {/* Mensajes */}
          <div className="max-h-[50vh] overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'ml-auto bg-amber-100 text-gray-900'
                    : 'mr-auto bg-gray-100 text-gray-900'
                }`}
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <div className="mr-auto rounded-2xl bg-gray-100 px-3 py-2 text-sm text-gray-500">
                Escribiendo…
              </div>
            )}
          </div>

          {/* Rate limit (transparencia) */}
          {rateLimit?.remainingTokens && (
            <div className="border-t border-gray-100 px-4 py-1">
              <p className="text-[11px] text-gray-400">
                Capacidad disponible del asistente: {rateLimit.remainingTokens}{' '}
                tokens
              </p>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-200 p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') sendMessage();
                }}
                placeholder="Escribe tu pregunta…"
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-amber-400"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Botón flotante
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-amber-600"
        >
          Chat
        </button>
      )}
    </div>
  );
}
