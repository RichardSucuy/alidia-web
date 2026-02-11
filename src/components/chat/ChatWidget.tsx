'use client';

import { useEffect, useRef, useState } from 'react';
import { useChat } from './hooks/useChat';
import { useVoiceRecorder } from './hooks/useVoiceRecorder';
import { ChatPanel } from './ChatPanel';
import { ChatLauncher } from './ChatLauncher';
import { ChatIcons } from './icons';
import { useTTS } from './hooks/useTTS';
import { motion, AnimatePresence } from 'framer-motion';

export function ChatWidget() {
  const { speak, stop, isSpeaking, isMuted, toggleMute } = useTTS();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [showCloseNotice, setShowCloseNotice] = useState(false);

  // 🔵 Intro cada vez que se monta (recarga / entrada)
  const [showIntro, setShowIntro] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, loading, sendMessage } = useChat({
    onAssistantMessage: async (text) => {
      speak(text);
    },
  });

  const {
    micSupported,
    isRecording,
    isTranscribing,
    audioError,
    seconds,
    maxDurationReached,
    toggleRecording,
  } = useVoiceRecorder({
    onTranscription: async (text) => {
      stop();
      await sendMessage(text);
    },
  });

  // 🔵 Mostrar siempre al montar
  useEffect(() => {
    setShowIntro(true);

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4500); // más corto y elegante

    return () => clearTimeout(timer);
  }, []);

  const prevOpenRef = useRef(open);

  useEffect(() => {
    const wasOpen = prevOpenRef.current;
    const isNowClosed = !open;

    if (wasOpen && isNowClosed && isRecording) {
      setShowCloseNotice(true);

      const timer = setTimeout(() => {
        setShowCloseNotice(false);
      }, 4000);

      prevOpenRef.current = open;

      return () => clearTimeout(timer);
    }

    prevOpenRef.current = open;
  }, [open, isRecording]);

  const resumeAudioContext = () => {
    if (typeof window !== 'undefined') {
      const AudioContext =
        window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContext();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      if (window.speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance('');
        utterance.volume = 0;
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  function handleSend() {
    if (!input.trim()) return;
    resumeAudioContext();
    stop();
    sendMessage(input);
    setInput('');
  }

  const handleToggleRecording = () => {
    if (!isRecording) stop();
    resumeAudioContext();
    toggleRecording();
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] sm:bottom-6 sm:right-6 font-sans">

      {/* 🔵 Intro fluido con flecha */}
      <AnimatePresence>
        {showIntro && !open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-20 right-0 w-64"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: 'easeInOut',
              }}
              className="relative rounded-2xl bg-white border border-[#0C3C5C]/10 shadow-xl px-4 py-3 text-sm text-[#0C3C5C]"
            >
              <p className="font-semibold leading-snug">
                Explora inteligencia artificial con propósito.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Haz clic en el asistente para conocer proyectos y eventos.
              </p>

              {/* Flecha elegante */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-[#0C3C5C]/10 rotate-45" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Aviso cuando cierra grabando */}
      {showCloseNotice && isRecording && (
        <div className="absolute bottom-20 right-0 rounded-xl bg-slate-900 text-white text-xs px-4 py-2 shadow-xl">
          Grabando audio · Límite máximo 5 minutos
        </div>
      )}

      <div className="relative">

        {/* PANEL */}
        <div
          className={`
            absolute bottom-0 right-0 transition-all duration-300
            ${open
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-4 pointer-events-none'}
          `}
        >
          <ChatPanel
            messages={messages}
            loading={loading}
            isTranscribing={isTranscribing}
            audioError={audioError}
            input={input}
            onInputChange={setInput}
            onSend={handleSend}
            onToggleRecording={handleToggleRecording}
            isSpeaking={isSpeaking}
            isMuted={isMuted}
            onToggleMute={toggleMute}
            stopAudio={stop}
            resumeAudio={resumeAudioContext}
            onClose={() => setOpen(false)}
            isRecording={isRecording}
            micSupported={micSupported}
            scrollRef={scrollRef}
            Icons={ChatIcons}
            seconds={seconds}
            maxDurationReached={maxDurationReached}
          />
        </div>

        {/* LAUNCHER con pulso coordinado */}
        {!open && (
          <motion.div
            animate={
              showIntro
                ? { scale: [1, 1.05, 1] }
                : {}
            }
            transition={{
              repeat: showIntro ? Infinity : 0,
              duration: 1.8,
              ease: 'easeInOut',
            }}
          >
            <ChatLauncher
              onOpen={() => {
                resumeAudioContext();
                setOpen(true);
                setShowIntro(false);
              }}
              Icons={ChatIcons}
              isRecording={isRecording}
              seconds={seconds}
              isSpeaking={isSpeaking}
            />
          </motion.div>
        )}

      </div>
    </div>
  );
}
