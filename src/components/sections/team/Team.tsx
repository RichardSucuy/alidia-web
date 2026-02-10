"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, GraduationCap, Users, ShieldCheck } from 'lucide-react';
import { allMembers, Member } from './team-data';


export function Team() {
  return (
    <section id="equipo" className="w-full bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Título alineado y limpio */}
        <div className="mb-14">
          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl tracking-tight">
            Equipo y organigrama
          </h2>
        </div>

        {/* Fila única de miembros */}
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
          {allMembers.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center"
            >
              {/* Contenedor de Imagen */}
              <div className="relative mb-4 h-24 w-24 sm:h-28 sm:w-28">
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Icono de Categoría sutil */}
                <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-1 shadow-md">
                  <RoleIcon type={member.type} />
                </div>
              </div>

              {/* Textos: Rol arriba, Nombre abajo */}
              <div className="px-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0C3C5C] md:text-[11px]">
                  {member.role}
                </p>
                <h4 className="mt-1 text-sm font-black text-gray-900 sm:text-base">
                  {member.name}
                </h4>

                {/* LinkedIn: Solo icono para no ocupar espacio */}
                {member.linkedin !== '#' && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="mt-3 inline-block text-slate-300 hover:text-[#0A66C2] transition-colors"
                  >
                    <Linkedin className="h-4 w-4 fill-current" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleIcon({ type }: { type: Member['type'] }) {
  if (type === 'academico') return <GraduationCap className="h-4 w-4 text-blue-600" />;
  if (type === 'estudiante') return <Users className="h-4 w-4 text-emerald-500" />;
  return <ShieldCheck className="h-4 w-4 text-[#0C3C5C]" />;
}