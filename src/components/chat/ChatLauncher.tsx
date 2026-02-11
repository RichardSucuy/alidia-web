'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ChatLauncherProps = {
  onOpen: () => void;
  Icons: Record<string, ReactNode>;
  isRecording: boolean;
  seconds: number;
  isSpeaking: boolean;
};

export function ChatLauncher({
  onOpen,
  Icons,
  isRecording,
  seconds,
  isSpeaking,
}: ChatLauncherProps) {

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.button
      onClick={onOpen}
      className="group relative flex size-14 items-center justify-center rounded-full
      bg-white text-[#0C3C5C]
      border border-[#0C3C5C]/30
      shadow-lg shadow-[#0C3C5C]/10
      transition-all duration-300
      hover:shadow-xl hover:shadow-[#0C3C5C]/20"
      aria-label="Abrir asistente de ALIDIA"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >

      {/* Glow institucional cuando habla */}
      {isSpeaking && !isRecording && (
        <div className="absolute inset-0 rounded-full bg-[#0C3C5C]/10 blur-md animate-pulse" />
      )}

      {/* Glow rojo cuando graba */}
      {isRecording && (
        <div className="absolute inset-0 rounded-full bg-red-500/20 blur-md animate-pulse" />
      )}

      {/* Contenido principal */}
      <div className="relative z-10 flex items-center justify-center">

        {isRecording ? (
          // Grabando
          <div className="text-red-500">
            {Icons.node || Icons.bot}
          </div>

        ) : isSpeaking ? (
          // Hablando
          <div className="flex items-end gap-[2px] h-5">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ height: [4, 12, 4] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.9,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
                className="w-[3px] bg-[#0C3C5C] rounded-full"
              />
            ))}
          </div>

        ) : (
          // Normal
          <div className="text-[#0C3C5C]">
            {Icons.node || Icons.bot}
          </div>
        )}

      </div>

      {/* Indicador inferior */}
      {isRecording ? (
        <span className="absolute right-1 bottom-1 flex items-center justify-center rounded-full bg-red-500 text-white text-[9px] font-bold px-1.5 py-[1px] shadow-md">
          {formatTime(seconds)}
        </span>
      ) : (
        <span className="absolute right-1 bottom-1 size-3 rounded-full border-2 border-white bg-[#0C3C5C]" />
      )}

      {/* Tooltip institucional */}
      <span
        className="pointer-events-none absolute right-full mr-4 hidden whitespace-nowrap
        rounded-full border border-[#0C3C5C]/10
        bg-white px-4 py-2 text-xs font-semibold text-[#0C3C5C]
        shadow-xl transition-all duration-200
        opacity-0 translate-x-2
        group-hover:opacity-100 group-hover:translate-x-0 sm:block"
      >
        {isRecording
          ? `Grabando audio · Máx 5 min`
          : isSpeaking
          ? `ALIDIA AI está hablando`
          : '¿En qué puedo apoyarte?'}
      </span>

    </motion.button>
  );
}
