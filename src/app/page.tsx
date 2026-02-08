import Image from "next/image";
import { Hero } from '@/components/sections/hero/Hero';
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

// src/components/sections/Hero.tsx , WhatIs.tsx ,WhoWeAre.tsx , MissionVision.tsx , ActionLines.tsx , Projects.tsx ,Activities.tsx , Principles.tsx ,Team.tsx , Footer.tsx
// src/components/layout/Footer.tsx
// src/app/api/chat/route.ts
// src/app/page.tsx