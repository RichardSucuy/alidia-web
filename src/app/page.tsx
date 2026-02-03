import Image from "next/image";
import { Hero } from '@/components/sections/Hero';
import { WhatIs } from '@/components/sections/WhatIs';
import {  WhoWeAre } from '@/components/sections/WhoWeAre';
import { MissionVision } from '@/components/sections/MissionVision';


export default function Home() {
  return (
    <>
      {/* Contenido actual */}
      <Hero />
      <WhatIs />
      <WhoWeAre />
      <MissionVision />

    </>
  );
}
