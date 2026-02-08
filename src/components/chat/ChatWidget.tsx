'use client';

import { useEffect, useRef, useState } from 'react';
import { useChat } from './hooks/useChat';
import { useVoiceRecorder } from './hooks/useVoiceRecorder';
import { ChatPanel } from './ChatPanel';
import { ChatLauncher } from './ChatLauncher';
import { ChatIcons } from './icons';
import { useTTS } from './hooks/useTTS';

export function ChatWidget() {
  const { speak, stop, isSpeaking} = useTTS();
  const [isMuted, setIsMuted] = useState(false); // <--- NUEVO ESTADO DE MEMORIA
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, loading, sendMessage } = useChat({
    onAssistantMessage: async (text) => {
      // El audio ahora sonará porque "despertamos" el motor en handleSend/toggleRecording
      // SOLO HABLA SI NO ESTÁ SILENCIADO
      if (!isMuted) {
        speak(text);
      }
    },
  });

  const toggleMute = () => {
    if (!isMuted) {
      stop(); // Si lo silenciamos ahora, que se calle de inmediato
    }
    setIsMuted(!isMuted);
  };

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




  // FUNCIÓN CLAVE: Desbloquea el audio en navegadores móviles
  const resumeAudioContext = () => {
    if (typeof window !== 'undefined') {
      // 1. Desbloquear Web Audio API
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContext();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      // 2. TRUCO CLAVE para SpeechSynthesis (TTS) en iOS
      // Reproducimos un fragmento de texto vacío inmediatamente al hacer clic
      if (window.speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance("");
        utterance.volume = 0; // Silencioso
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  function handleSend() {
    if (!input.trim()) return;
    resumeAudioContext(); // <--- Activar audio aquí
    stop();
    sendMessage(input);
    setInput('');
  }

  const handleToggleRecording = () => {
    if (!isRecording) {
      stop(); // <--- ESTO PAUSA AL BOT AL EMPEZAR A GRABAR
    }
    resumeAudioContext(); // <--- Activar audio aquí
    toggleRecording();
  };

  return (
    /* Contenedor ajustado para no ocupar espacio invisible en móvil */
    <div className={`fixed bottom-4 right-4 z-[9999] sm:bottom-6 sm:right-6 font-sans"> ${
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
          isSpeaking={isSpeaking} // <--- Pasamos el estado de habla al panel
          isMuted={isMuted} // <--- Pasamos el estado de silencio al panel
          onToggleMute={toggleMute} // <--- Pasamos la función para alternar silencio
          stopAudio={stop}
          resumeAudio={resumeAudioContext} // <--- Añade esta línea
          onClose={() => setOpen(false)}
          isRecording={isRecording}
          micSupported={micSupported}
          scrollRef={scrollRef}
          Icons={ChatIcons}
        />
      ) : (
        <ChatLauncher
          onOpen={() => {
            resumeAudioContext(); // <--- Activar audio al abrir
            setOpen(true);
          }}
          Icons={ChatIcons}
        />
      )}
    </div>
  );
}