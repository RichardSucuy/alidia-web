// src/components/sections/action-lines/data.ts

export type ActionLine = {
  id: string;
  title: string;
  short: string;
  img: string[];
};

export const ACTION_LINES: ActionLine[] = [
  {
    id: "formacion",
    title: "Formación y capacitación",
    short:
      "Capacitamos talento local en IA y tecnologías emergentes, con enfoque responsable y aplicado.",
    img: ["/action-line/IMG_6347.jpg","/action-line/IMG_6326.jpg","/action-line/IMG_6362.jpg"]
  },
  {
    id: "liderazgo",
    title: "Liderazgo académico y divulgación",
    short:
      "Impulsamos espacios de reflexión, divulgación y producción académica con impacto territorial.",
    img: ["/action-line/IMG_6331.jpg","/action-line/IMG_6358.jpg","/action-line/IMG_6373.jpg"]
  },
  {
    id: "innovacion",
    title: "Innovación y desarrollo comunitario",
    short:
      "Acompañamos proyectos con innovación aplicada, participación comunitaria y pertinencia local.",
    img: ["/action-line/IMG_6381.jpg","/action-line/fotoarg.jpeg","/action-line/IMG_9209.jpg"]
  },
  {
    id: "articulacion",
    title: "Articulación y ecosistema",
    short:
      "Conectamos academia, sector público, privado y comunidad para fortalecer colaboración e innovación.",
    img: ["/action-line/IMG_6324.jpg"]
  },
];
