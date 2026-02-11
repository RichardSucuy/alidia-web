'use client';

import { useRef, useState, useEffect } from 'react';

export function useTTS() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);


  // 🔥 Ref sincronizado para evitar problemas de closure async 
  const isMutedRef = useRef(isMuted);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  async function speak(text: string) {
    if (!text.trim()) return;

    // 🔥 Si está muteado, no hablar
    if (isMutedRef.current) return;


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

  function toggleMute() {
    setIsMuted((prev) => {
      const next = !prev;

      // 🔥 Si se activa mute mientras habla → detener inmediatamente
      if (next && isSpeaking) {
        stop();
      }

      return next;
    });
  }

  return {
    speak,
    stop,
    isSpeaking,
    isMuted,
    toggleMute,
  };
}
