'use client';

import { motion } from "framer-motion";
import { ArrowRight, Microscope, Beaker, Globe2 } from "lucide-react";
import { useEffect, useRef } from "react";
import * as THREE from "three";
// Por esto (usando un alias):
import NextImage from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Efecto Three.js: Fondo de Partículas Inteligentes
  useEffect(() => {
    if (!containerRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(400, 400);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2, 2);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x0C3C5C, 
      wireframe: true,
      transparent: true,
      opacity: 0.3 
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.002;
      sphere.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();
    return () => { renderer.dispose(); };
  }, []);

  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-white pt-28 pb-16">
      
      {/* Grid de fondo suavizado */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]" 
           style={{ backgroundImage: 'linear-gradient(#0C3C5C 1px, transparent 1px), linear-gradient(90deg, #0C3C5C 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-7xl">
              IA con Impacto <br />
              <span className="text-[#0C3C5C]">Territorial.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 font-medium">
              Impulsamos el liderazgo tecnológico desde el sur del Ecuador, transformando desafíos locales en soluciones globales mediante IA ética y aplicada.
            </p>

            {/* Acciones principales */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#proyectos" className="flex items-center gap-2 rounded-xl bg-[#0C3C5C] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/10 hover:bg-[#1E4E70] transition-all active:scale-95">
                Ver Proyectos
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="mailto:contacto@alidia.org" className="rounded-xl border-2 border-slate-100 bg-white px-8 py-4 text-sm font-bold text-slate-700 hover:border-[#0C3C5C]/20 transition-all">
                Colaborar como Partner
              </a>
            </div>

            {/* Highlight de Investigación: AID-CV */}


            {/* --- BLOQUE DE PROYECTOS ESTRATÉGICOS (Academia + Investigación) --- */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
              
              {/* Proyecto 1: SIAM (Académico/Evento) */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-50 p-5 border border-slate-100 transition-all hover:border-[#0C3C5C]/20 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0C3C5C] text-white shadow-inner">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#0C3C5C]/40">Academia & Eventos</span>
                    <h3 className="font-bold text-slate-900">SIAM 2026</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Simposio de IA en Machala. Conectando expertos de la región con el talento local.
                </p>
                <a 
                  href="#proyecto-siam" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('proyecto-siam')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="mt-3 flex items-center gap-1.5 text-[10px] font-bold text-[#0C3C5C] no-underline"
                >
                  <span>VER DETALLES</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </a> 

              </motion.div>

              {/* Proyecto 2: AID-CV (Investigación/Software) */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-50 p-5 border border-slate-100 transition-all hover:border-[#0C3C5C]/20 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-[#0C3C5C]/10 text-[#0C3C5C] shadow-sm">
                    <Microscope className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#0C3C5C]/40">Investigación</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <h3 className="font-bold text-slate-900">AID-CV</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Software de visión computacional para detección de parásitos mediante Deep Learning.
                </p> 


                <a 
                  href="#proyecto-aid-cv" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('proyecto-aid-cv')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="mt-3 flex items-center gap-1.5 text-[10px] font-bold text-[#0C3C5C] no-underline"
                >
                  <span>VER DETALLES</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </a>


              </motion.div>

            </div>

          </motion.div>

          {/* Columna Derecha: El Objeto 3D */}
          <div className="relative flex justify-center items-center">
            {/* Contenedor del Canvas */}
            <div 
              ref={containerRef} 
              className="relative z-10 flex h-[300px] w-[300px] md:h-[450px] md:w-[450px] items-center justify-center"
            />
            
            {/* Branding Vertical flotando suavemente */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 right-0 md:right-10 rounded-2xl bg-white/80 backdrop-blur-md p-4 border border-slate-100 shadow-xl"
            >
              <NextImage 
                src="/logo/alidia-vertical.png" 
                alt="Logo" 
                width={80} 
                height={80} 
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}