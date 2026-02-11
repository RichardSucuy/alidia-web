'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

/**
 * Paleta de colores aplicada:
 * Primario: #0C3C5C (Usado para iconos de acción principal)
 * Texto Medio: #4B5563 (Usado para estados neutrales)
 * Éxito: #10B981 (Opcional para estados activos)
 */

export const ChatIcons: Record<string, ReactNode> = {
  close: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4B5563" // Texto medio
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="hover:stroke-[#EF4444] transition-colors" // Cambio a color de error al hacer hover
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),

  send: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0C3C5C" // Color Primario
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  ),

  mic: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4B5563" // Texto medio
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </svg>
  ),

  chat: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0C3C5C" // Color Primario
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),

  bot: (
    <div className="relative flex items-center justify-center w-8 h-8">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Órbita Exterior - Representa la red neuronal */}
        <motion.circle
          cx="12"
          cy="12"
          r="9"
          stroke="#0C3C5C"
          strokeWidth="1.2"
          strokeDasharray="15 45" // Crea un efecto de segmentos
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Órbita Media - Movimiento inverso para profundidad */}
        <motion.circle
          cx="12"
          cy="12"
          r="6"
          stroke="#0C3C5C"
          strokeWidth="1.5"
          strokeDasharray="10 30"
          opacity="0.6"
          animate={{ rotate: -360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* El Núcleo - El centro de la IA */}
        <motion.path
          d="M12 8L13.5 10.5L16 12L13.5 13.5L12 16L10.5 13.5L8 12L10.5 10.5L12 8Z"
          fill="#0C3C5C"
          animate={{
            filter: [
              "drop-shadow(0 0 2px #0C3C5C)",
              "drop-shadow(0 0 6px #0C3C5C)",
              "drop-shadow(0 0 2px #0C3C5C)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Partículas de datos fluyendo */}
        <motion.circle
          cx="12"
          cy="3"
          r="1.5"
          fill="#10B981" // Color de éxito para dar un toque de "vida/activación"
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 1, 0]
          }}
          style={{
            offsetPath: "path('M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z')",
            position: "absolute"
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  ),
};