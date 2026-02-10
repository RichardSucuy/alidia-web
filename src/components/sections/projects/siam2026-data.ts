export interface Participant {
  name: string;
  role: string;
  linkedin?: string;
}

export interface SiamMeeting {
  id: number;
  date: string;
  image: string;
  title: string;
  description: string;
  participants: Participant[];
}

export const siamMeetings: SiamMeeting[] = [
  {
    id: 1,
    date: "Miércoles, 4 de febrero",
    image: "/projects/siam2026/reunion-1-utmach.jpeg",
    title: "SIMPOSIO DE IA EN MACHALA 2026",
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
];