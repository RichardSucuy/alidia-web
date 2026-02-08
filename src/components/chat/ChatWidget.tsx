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

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, isTranscribing]);

  function handleSend() {
    if (!input.trim()) return;
    stop();           // 🔇 corta audio previo
    sendMessage(input);
    setInput('');
  }

  return (
    // CAMBIO: Ajuste de posición y z-index. 
    // En móvil eliminamos el bottom/right fijo para que el Panel pueda expandirse.
    <div className="fixed bottom-0 right-0 z-[9999] p-4 sm:bottom-5 sm:right-5 font-sans">
      {open ? (
        <ChatPanel
          messages={messages}
          loading={loading}
          isTranscribing={isTranscribing}
          audioError={audioError}
          input={input}
          onInputChange={setInput}
          onSend={handleSend}
          onToggleRecording={toggleRecording}
          isRecording={isRecording}
          micSupported={micSupported}
          scrollRef={scrollRef}
          Icons={ChatIcons}
          onClose={() => setOpen(false)}
        />
      ) : (
        <ChatLauncher
          onOpen={() => setOpen(true)}
          Icons={ChatIcons}
        />
      )}
    </div>
  );
}
