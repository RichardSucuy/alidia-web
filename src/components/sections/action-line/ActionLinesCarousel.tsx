"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { ActionLine } from "./data";

type Props = {
  items: ActionLine[];
  activeIndex: number;
};

export function ActionLinesCarousel({ items, activeIndex }: Props) {
  const active = items[activeIndex];

  // 👇 índice de la imagen activa (miniatura seleccionada)
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Cuando cambias de tab, volvemos a la primera imagen
  useEffect(() => {
    setActiveImgIndex(0);
  }, [activeIndex]);

  const images = useMemo(() => active.img ?? [], [active]);

  const activeSrc = images[activeImgIndex] ?? images[0] ?? "/fallback.png";

  return (
    <div className="mt-8">
      <div className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-[0_10px_35px_rgba(12,60,92,0.06)]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0C3C5C]/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-24 h-56 w-56 rounded-full bg-[#0C3C5C]/6 blur-3xl" />

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} // 👈 un poco más suave
            className="relative grid items-start gap-8 lg:grid-cols-[1fr_1fr]"
          >
            {/* Texto */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0C3C5C]/80">
                Línea de acción
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight text-[#111827] sm:text-3xl">
                {active.title}
              </h3>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#4B5563] sm:text-lg">
                {active.short}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-[#0C3C5C]/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0C3C5C]/70" />
                <span>
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>

              {/* MINIATURAS (responsive)
                  - mobile: carrusel horizontal (overflow-x)
                  - desktop: grid
              */}
              {images.length > 1 && (
                <div className="mt-8">
                  {/* Mobile: scroll horizontal */}
                  <div className="flex gap-4 overflow-x-auto pb-2 lg:hidden">
                    {images.map((src, idx) => {
                      const isActive = idx === activeImgIndex;
                      return (
                        <button
                          key={src + idx}
                          type="button"
                          onClick={() => setActiveImgIndex(idx)}
                          className={`shrink-0 overflow-hidden rounded-2xl border transition ${
                            isActive
                              ? "border-[#0C3C5C]/45 ring-2 ring-[#0C3C5C]/10"
                              : "border-[#E5E7EB] hover:border-[#0C3C5C]/25"
                          }`}
                          aria-label={`Ver imagen ${idx + 1}`}
                        >
                          <div className="relative h-24 w-36">
                            <Image src={src} alt="" fill className="object-cover" />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Desktop: grid */}
                  <div className="hidden gap-4 lg:grid lg:grid-cols-3">
                    {images.map((src, idx) => {
                      const isActive = idx === activeImgIndex;
                      return (
                        <button
                          key={src + idx}
                          type="button"
                          onClick={() => setActiveImgIndex(idx)}
                          className={`group overflow-hidden rounded-2xl border transition ${
                            isActive
                              ? "border-[#0C3C5C]/45 ring-2 ring-[#0C3C5C]/10"
                              : "border-[#E5E7EB] hover:border-[#0C3C5C]/25"
                          }`}
                          aria-label={`Ver imagen ${idx + 1}`}
                        >
                          <div className="relative aspect-4/3 w-full">
                            <Image
                              src={src}
                              alt=""
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Imagen grande */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC]">
                {/* 👇 más “hero-like” en desktop */}
                <div className="relative aspect-16/10 w-full lg:aspect-video">
                  <Image
                    src={activeSrc}
                    alt={active.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 520px"
                    priority={activeIndex === 0}
                  />
                  {/* overlay sutil para uniformidad */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
