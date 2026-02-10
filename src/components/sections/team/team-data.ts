export interface Member {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  type: 'directivo' | 'academico' | 'estudiante';
}

export const allMembers: Member[] = [
  {
    name: 'Ing. Richard Sucuy',
    role: 'Fundador y Director General',
    image: '/team/richard.png',
    linkedin: 'https://www.linkedin.com/in/richard-sucuy-zhingre/',
    type: 'directivo'
  },
  {
    name: 'Ing. Karla Aguilar',
    role: 'Dirección de Innovación',
    image: '/team/karla.png',
    linkedin: 'https://www.linkedin.com/in/karla160401/',
    type: 'directivo'
  },
  {
    name: 'Ing. Bryan Cuero',
    role: 'Dirección de Ingeniería e Infraestructura',
    image: '/team/bryan.png',
    linkedin: 'https://www.linkedin.com/in/bryan-cuero/',
    type: 'directivo'
  },
  {
    name: 'Ing. Dylan Sócola',
    role: 'Ingeniero de Infraestructura (Asociado)',
    image: '/team/dylan.png',
    linkedin: '#',
    type: 'directivo'
  },
  {
    name: 'PhD. Eduardo Tusa',
    role: 'Profesor Asociado – UTMACH',
    image: '/team/eduardo.png',
    linkedin: 'https://www.linkedin.com/in/eduardo-tusa/',
    type: 'academico'
  },
  {
    name: 'Josue Malla',
    role: 'Estudiante Asociado – UTMACH',
    image: '/team/josue.png',
    linkedin: 'https://www.linkedin.com/in/manuel-josue-malla/',
    type: 'estudiante'
  },
];