'use client';

import { useEffect, useRef, useState } from 'react';
import { useChat } from './hooks/useChat';
import { useVoiceRecorder } from './hooks/useVoiceRecorder';
import { ChatPanel } from './ChatPanel';
import { ChatLauncher } from './ChatLauncher';
import { ChatIcons } from './icons';
import { useTTS } from './hooks/useTTS';

export function ChatWidget() {
  const { speak, stop } = useTTS();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, loading, sendMessage } = useChat({
    onAssistantMessage: async (text) => {
      // El audio ahora sonará porque "despertamos" el motor en handleSend/toggleRecording
      speak(text);
    },
  });

  const {
    micSupported,
    isRecording,
    isTranscribing,
    audioError,
    toggleRecording,
  } = useVoiceRecorder({
    onTranscription: async (text) => {
      stop();
      await sendMessage(text);
    },
  });

  // Efecto para scroll automático
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, loading, isTranscribing]);

  // FUNCIÓN PARA DESPERTAR EL AUDIO (Crucial para móviles)
  const unlockAudio = () => {
    stop(); // Detenemos cualquier audio previo
    // En algunos hooks de TTS, llamar a speak("") o stop() 
    // bajo un evento de clic desbloquea el canal de audio del móvil.
  };

  function handleSend() {
    if (!input.trim()) return;
    unlockAudio(); 
    sendMessage(input);
    setInput('');
  }

  const handleToggleRecording = () => {
    unlockAudio();
    toggleRecording();
  };

  return (
    /* Contenedor ajustado para no ocupar espacio invisible en móvil */
    <div className={`fixed z-[9999] font-sans transition-all duration-300 ${
      open 
        ? 'inset-0 flex items-end justify-center p-4 sm:inset-auto sm:bottom-5 sm:right-5' 
        : 'bottom-5 right-5'
    }`}>
      {open ? (
        <ChatPanel
          messages={messages}
          loading={loading}
          isTranscribing={isTranscribing}
          audioError={audioError}
          input={input}
          onInputChange={setInput}
          onSend={handleSend}
          onToggleRecording={handleToggleRecording} // Usamos la versión con unlock
          isRecording={isRecording}
          micSupported={micSupported}
          scrollRef={scrollRef}
          Icons={ChatIcons}
          onClose={() => setOpen(false)}
        />
      ) : (
        <ChatLauncher
          onOpen={() => {
            unlockAudio(); // Desbloqueamos audio al abrir el chat
            setOpen(true);
          }}
          Icons={ChatIcons}
        />
      )}
    </div>
  );
}