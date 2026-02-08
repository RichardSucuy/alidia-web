'use client';

import { useState } from 'react';

export type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type UseChatOptions = {
  initialMessages?: Message[];
  historySize?: number;
  onAssistantMessage?: (text: string) => void | Promise<void>;
};

export function useChat(options?: UseChatOptions) {
  const {
    initialMessages = [
      {
        role: 'assistant',
        content:
          'Hola, soy el asistente virtual de ALIDIA. En que puedo ayudarte hoy?',
      },
    ],
    historySize = 6,
    onAssistantMessage,
  } = options || {};

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text: string) => {
    const message = text.trim();
    if (!message || loading) return;

    setLoading(true);

    const nextMessages: Message[] = [
      ...messages,
      { role: 'user', content: message },
    ];
    setMessages(nextMessages);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          history: nextMessages.slice(-historySize),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Chat error');

      const reply = String(data.reply || '').trim();

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: reply },
      ]);

      // 🔊 hook opcional (TTS, analytics, etc.)
      if (reply && onAssistantMessage) {
        await onAssistantMessage(reply);
      }
    } catch {
      const fallback =
        'Disculpa, tuve un problema tecnico. Por favor, intenta de nuevo.';

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: fallback },
      ]);

      if (onAssistantMessage) {
        await onAssistantMessage(fallback);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    sendMessage,
    setMessages,
  };
}
