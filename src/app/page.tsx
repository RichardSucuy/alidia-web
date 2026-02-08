import { Hero } from '@/components/sections/hero/Hero';
import { WhatIs } from "@/components/sections/what-is/WhatIs";
import { WhoWeAre } from "@/components/sections/whoweare/WhoWeAre";
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
// src/components/chat/ChatWidget.tsx
// src/app/page.tsx
// src/app/layout.tsx
// src/contact/alidia.ts
// src/lib/groq.ts
// src/app/api/chat/route.ts
