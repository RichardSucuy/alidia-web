import Image from "next/image";
import { Hero } from '@/components/sections/Hero';
import { WhatIs } from '@/components/sections/WhatIs';
import {  WhoWeAre } from '@/components/sections/WhoWeAre';
import { MissionVision } from '@/components/sections/MissionVision';
import { ActionLines } from '@/components/sections/ActionLines';
import { Projects } from '@/components/sections/Projects';
import { Activities } from '@/components/sections/Activities';
import { Principles } from '@/components/sections/Principles';
import { Team } from '@/components/sections/Team';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      {/* Contenido actual */}
      <Hero />
      <WhatIs />
      <WhoWeAre />
      <MissionVision />
      <ActionLines />
      <Projects />
      <Activities />
      <Principles />
      <Team />
      <Footer />

    </>
  );
}
