'use client';

import { motion } from "framer-motion";
import { ArrowRight, Microscope, Globe2, Sparkles, Activity } from "lucide-react";
import NextImage from "next/image";
import { HeroSphere } from "@/components/sections/hero/HeroSphere";

export function Hero() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-white pt-24 pb-16 lg:pt-32">

      {/* Fondo Decorativo Sutil */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-[#0C3C5C]/5 blur-[120px]" />
      <div className="absolute inset-0 -z-10 opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(#0C3C5C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">

          {/* COLUMNA IZQUIERDA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            {/* Badge Superior */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0C3C5C] border border-slate-100">
              <Activity className="h-3 w-3" />
              Ecosistema de Innovación
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-7xl">
              IA con Impacto <br />
              <span className="text-[#0C3C5C]">Territorial.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 font-medium">
              Desarrollamos IA aplicada al territorio. Colaboramos con academia, industria y sector público: en investigación, proyectos o iniciativas de impacto. Si tienes algo en mente, conversemos.
            </p>

            {/* Botones Principales */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="flex items-center gap-2 rounded-xl bg-[#0C3C5C] px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-900/10 hover:bg-[#092b42] transition-all active:scale-95"
              >
                Ver Proyectos
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:contacto@alidia.org"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-700 hover:border-[#0C3C5C] hover:text-[#0C3C5C] transition-all"
              >
                <Sparkles className="h-4 w-4" />
                Colaborar
              </a>
            </div>

            {/* Tarjetas de Proyectos */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">

              {/* SIAM 2026 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-5 border border-slate-100 shadow-sm transition-all hover:shadow-lg hover:border-[#0C3C5C]/30"
              >
                <div className="absolute top-0 right-0 p-3 opacity-10">
                  <Globe2 className="h-12 w-12 text-[#0C3C5C]" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0C3C5C]/10 text-[#0C3C5C]">
                    <Globe2 className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold text-slate-900">SIAM 2026</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  Simposio Internacional. Conectando expertos globales con el talento de Machala.
                </p>
                <a
                  href="#proyecto-siam"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('proyecto-siam')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#0C3C5C] group-hover:underline"
                >
                  Explorar Evento <ArrowRight className="h-3 w-3" />
                </a>
              </motion.div>

              {/* AID-CV */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-5 border border-slate-100 shadow-sm transition-all hover:shadow-lg hover:border-emerald-500/30"
              >
                <div className="absolute top-0 right-0 p-3 opacity-10">
                  <Microscope className="h-12 w-12 text-emerald-600" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <Microscope className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900">AID-CV</h3>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  Software de visión artificial para diagnóstico de parásitos. Ciencia aplicada.
                </p>
                <a
                  href="#proyecto-aid-cv"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('proyecto-aid-cv')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-700 group-hover:underline"
                >
                  Ver Investigación <ArrowRight className="h-3 w-3" />
                </a>
              </motion.div>

            </div>
          </motion.div>

          {/* COLUMNA DERECHA: ESFERA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex h-full min-h-[400px] w-full items-center justify-center"
          >
            <HeroSphere />

            {/* Branding Flotante */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute pointer-events-none z-20 flex flex-col items-center justify-center"
            >
              <div className="rounded-2xl bg-white/60 backdrop-blur-sm p-4 shadow-2xl border border-white/50">
                <NextImage
                  src="/logo/alidia-vertical.png"
                  alt="ALIDIA"
                  width={100}
                  height={100}
                  className="h-auto w-24 opacity-90 drop-shadow-md"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}