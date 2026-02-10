"use client";

import { motion, type Variants } from "framer-motion";
import { ResearchProjectWithGallery } from "./ResearchProject.variant";
import { FutureVision } from "./FutureVision";

import { useState } from "react";
import { 
  Database,
  Beaker,
  ShieldCheck,
  ExternalLink, 
  Microscope, 
  Link as LinkIcon,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Globe,
  Users2
} from "lucide-react";

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Reuniones SIAM - Agrega más aquí
const siamMeetings = [
  {
    date: "Miércoles, 4 de febrero",
    image: "/projects/siam2026/reunion-1-utmach.jpeg",
    title: "SIAM 2026: Universidad Técnica de Machala (UTMACH)",
    description: "Sesión estratégica de socialización con autoridades de la Universidad Técnica de Machala (UTMACH). En este encuentro se coordinaron aspectos clave de infraestructura y logística para el Simposio de IA en Machala.",
    participants: [
      {
        name: "PhD. Ivan Ramirez",
        role: "Director de Investigación",
        linkedin: "https://www.linkedin.com/in/ivaneduramirez/"
      },
      {
        name: "PhD. Eduardo Tusa",
        role: "Miembro del grupo de investigación AutoMathTIC",
        linkedin: "https://www.linkedin.com/in/eduardo-tusa/"
      }
    ]
  },
  {
    date: "Lunes, 9 de febrero",
    image: "/projects/siam2026/reunion-1-utmach.jpeg",
    title: "SIAM 2026: Universidad Técnica de Machala (UTMACH)",
    description: "Firma de colaboracion estrategica con la Universidad Técnica de Machala (UTMACH) para el desarrollo del Simposio Internacional de IA. Este acuerdo establece las bases para una colaboración a largo plazo en investigación, desarrollo y formación en inteligencia artificial.",
    participants: [
      {
        name: "PhD. I R",
        role: "Director de Investigación",
        linkedin: "https://www.linkedin.com/in/ivaneduramirez/"
      },
      {
        name: "PhD. Eduardo Tusa",
        role: "miembro del grupo de investigación AutoMathTIC",
        linkedin: "https://www.linkedin.com/in/eduardo-tusa-9b1a4b1b2/"
      }
    ]
  },
  // Agrega más reuniones aquí siguiendo la misma estructura
];

export function Projects() {
  const [currentMeeting, setCurrentMeeting] = useState(0);

  const nextMeeting = () => {
    setCurrentMeeting((prev) => (prev + 1) % siamMeetings.length);
  };

  const prevMeeting = () => {
    setCurrentMeeting((prev) => (prev - 1 + siamMeetings.length) % siamMeetings.length);
  };

  const meeting = siamMeetings[currentMeeting];

  return (
    <section id="proyectos" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-[#111827]">Proyectos</h2>
          <p className="mt-2 text-[#4B5563]">Construyendo impacto en la comunidad</p>
        </motion.div>

        <div className="space-y-8">
          
          {/* Header SIAM con link */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-[#0C3C5C]" />
              <div>
                <h3 className="text-xl font-bold text-[#111827]">SIAM 2026</h3>
                <p className="text-sm text-[#4B5563]">Simposio Internacional de IA en Machala</p>
              </div>
            </div>
            <a 
              href="https://siam2026ec.github.io/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0C3C5C] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#092d46]"
            >
              Sitio Web <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>

          {/* SIAM - Bitácora con navegación */}
          <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col lg:flex-row">
                
                {/* Contenedor de Imagen con Recorte Cuadrado Centrado */}
                <div className="relative w-full lg:w-[450px] shrink-0">
                  <div className="aspect-square w-full overflow-hidden">
                    <img 
                      src={meeting.image} 
                      alt={meeting.title}
                      className="h-full w-full object-cover object-center" 
                    />
                  </div>
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0C3C5C] backdrop-blur-sm">
                    {meeting.date}
                  </div>

                  {/* Navegación (solo si hay más de una reunión) */}
                  {siamMeetings.length > 1 && (
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 backdrop-blur-sm">
                      <button
                        onClick={prevMeeting}
                        className="rounded-lg p-1 transition-colors hover:bg-gray-100"
                        aria-label="Reunión anterior"
                      >
                        <ChevronLeft className="h-4 w-4 text-[#0C3C5C]" />
                      </button>
                      <span className="text-xs font-semibold text-[#0C3C5C]">
                        {currentMeeting + 1}/{siamMeetings.length}
                      </span>
                      <button
                        onClick={nextMeeting}
                        className="rounded-lg p-1 transition-colors hover:bg-gray-100"
                        aria-label="Siguiente reunión"
                      >
                        <ChevronRight className="h-4 w-4 text-[#0C3C5C]" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Información de la Reunión y Proyecto */}
                <div className="flex flex-col p-8 lg:p-10">
                  <div className="flex items-center gap-2 text-[#0C3C5C]">
                    <Users2 className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Bitácora de Alianzas</span>
                  </div>
                  
                  <h4 className="mt-4 text-2xl font-extrabold text-[#111827]">
                    {meeting.title}
                  </h4>

                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#4B5563]">
                    <p>{meeting.description}</p>
                    
                    <div className="rounded-2xl bg-gray-50 p-4 border border-gray-100">
                      <p className="font-medium text-[#111827] mb-2">Participantes clave:</p>
                      <ul className="space-y-2">
                        {meeting.participants.map((participant, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            <span>
                              {participant.linkedin ? (
                                <a 
                                  href={participant.linkedin} 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#0C3C5C] font-semibold hover:underline inline-flex items-center gap-1"
                                >
                                  {participant.name} <LinkIcon className="w-3 h-3" />
                                </a>
                              ) : (
                                <span className="font-semibold text-gray-800">{participant.name}</span>
                              )}
                              , {participant.role}.
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-12">
            {/* Investigación AID-CV */}
            <motion.div variants={item} className="lg:col-span-7">
              <ResearchProjectWithGallery />
            </motion.div>

            {/* Visión Futura: CEIA */}
            <motion.div variants={item} className="lg:col-span-5">
              <FutureVision />
            </motion.div>
          </div>
          {/* PROYECTO 2: INVESTIGACIÓN AID-CV (5 columnas) */}


          {/* PROYECTO 3: CEIA (A futuro - Full width) */}
          <motion.div 
            variants={item}
            className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-[#E5E7EB] bg-[#111827] p-8 md:flex-row md:p-12 lg:col-span-12"
          >
            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Visión de largo plazo</span>
              <h3 className="mt-4 text-3xl font-bold text-white">CEIA: Centro de Experimentación en IA</h3>
              <p className="mt-4 text-blue-100/70">
                Nuestra meta es establecer un nodo físico en Machala para el prototipado rápido, 
                la socialización con productores locales y el levantamiento de soluciones con impacto real en la comunidad.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-shrink-0 flex-col gap-4 sm:flex-row">
              <div className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300 backdrop-blur-sm">
                Invernadero Tecnológico
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-gray-300">
                Próximamente
              </div>
            </div>

            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 h-full w-1/2 bg-linear-to-l from-blue-600/10 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}