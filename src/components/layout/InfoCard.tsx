"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  highlight?: boolean;
};

export function InfoCard({ title, description, icon, highlight = true }: InfoCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border ${
        highlight
          ? "border-[#0C3C5C]/30 bg-linear-to-br from-[#0C3C5C]/5 to-blue-50"
          : "border-[#E5E7EB] bg-white"
      } p-6 transition-all duration-300 hover:border-[#0C3C5C]/30 hover:shadow-xl`}
    >
      {highlight && (
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 via-white to-cyan-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}

      <div className="relative flex items-start gap-4">
        <div
          className={`rounded-xl p-3 transition-all duration-300 group-hover:scale-110 ${
            highlight
              ? "bg-linear-to-br from-[#0C3C5C]/20 to-blue-500/20"
              : "bg-linear-to-br from-[#0C3C5C]/10 to-blue-500/10"
          }`}
        >
          {icon}
        </div>

        <div>
          <h3
            className={`text-lg font-semibold transition-colors group-hover:text-[#0C3C5C] ${
              highlight ? "text-[#0C3C5C]" : "text-[#111827]"
            }`}
          >
            {title}
          </h3>
          <p className="mt-2 text-sm text-[#4B5563]">{description}</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#0C3C5C] to-blue-500 transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );
}
