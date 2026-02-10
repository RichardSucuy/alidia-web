// src/components/sections/action-lines/ActionLinesTabs.tsx

"use client";

import { motion } from "framer-motion";
import type { ActionLine } from "./data";

type Props = {
  items: ActionLine[];
  activeIndex: number;
  onChange: (index: number) => void;
};

export function ActionLinesTabs({ items, activeIndex, onChange }: Props) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {items.map((it, idx) => {
          const active = idx === activeIndex;

          return (
            <button
              key={it.id}
              type="button"
              onClick={() => onChange(idx)}
              className="relative pb-2 text-left"
              aria-current={active ? "true" : "false"}>
              <span
                className={`text-sm font-semibold transition-colors ${
                  active ? "text-[#0C3C5C]" : "text-[#111827]/55 hover:text-[#111827]/75"
                }`}
              >
                {it.title}
              </span>

              {/* Subrayado minimalista animado */}
              {active && (
                <motion.div
                  layoutId="action-lines-underline"
                  className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-[#0C3C5C]/70"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Línea base sutil (como las de Perfil ALIDIA) */}
      <div className="mt-4 h-px w-full bg-[#E5E7EB]" />
    </div>
  );
}
