export interface PresentationPhoto {
  id: string;
  image: string;
  event: string;
  date: string;
  location: string;
  description: string;
}

export const presentations: PresentationPhoto[] = [
  {
    id: "conf-2025",
    image: "/projects/research/conferencia-rf.jpg",
    event: "Congreso Internacional de Ciencia, Tecnología e Innovación para la Sociedad (2025) - CITIS XI",
    date: "Junio 2025",
    location: "Guayaquil, Ecuador",
    description: "Presentación de contribución científica aceptada para publicarse en Springer. El trabajo se centra en la evaluación de algoritmos de machine learning en el diagnostico temprano del parasito Trypanosoma cruzi."
  },
//   {
//     id: "conf-2024",
//     image: "/projects/research/conferencia-khipux.jpg",
//     event: "KHIPU 2025 Latin American Meeting in Artificial Intelligence",
//     date: "Marzo 2025",
//     location: "Santiago de Chile, Chile",
//     description: "Presentación del trabajo inicial y machine learning sobre el dataset validado."
//   }
];