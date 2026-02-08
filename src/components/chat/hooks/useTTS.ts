'use client';

import { useRef, useState } from 'react';

export function useTTS() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  async function speak(text: string) {
    if (!text.trim()) return;

    // 🔁 Fallback: Web Speech API
    if ('speechSynthesis' in window) {
      stop();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 1;
      utterance.pitch = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
      return;
    }

    console.warn('TTS not supported in this browser');
  }

  function stop() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    setIsSpeaking(false);
  }

  return {
    speak,
    stop,
    isSpeaking,
  };
}
