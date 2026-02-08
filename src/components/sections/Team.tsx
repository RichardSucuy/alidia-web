import Image from 'next/image';

type Member = {
  name: string;
  role: string;
  extra?: string;
  image: string;
  linkedin: string;
};

const coreTeam: Member[] = [
  {
    name: 'Ing. Richard Sucuy',
    role: 'Fundador y Director General',
    extra: 'Miembro asociado – Grupo de Investigación AutoMathTIC – UTMACH',
    image: '/team/richard.png',
    linkedin: '#',
  },
  {
    name: 'Ing. Karla Aguilar',
    role: 'Dirección de Innovación',
    image: '/team/karla.png',
    linkedin: '#',
  },
  {
    name: 'Ing. Bryan Cuero',
    role: 'Dirección de Ingeniería e Infraestructura',
    image: '/team/bryan.png',
    linkedin: '#',
  },
  {
    name: 'Ing. Dylan Sócola',
    role: 'Ingeniero de Infraestructura (Asociado)',
    image: '/team/dylan.png',
    linkedin: '#',
  },
];

const academicBoard: Member[] = [
  {
    name: 'PhD. Eduardo Tusa',
    role: 'Profesor Asociado – UTMACH',
    image: '/team/eduardo.png',
    linkedin: '#',
  },
];

export function Team() {
  return (
    <section id="equipo" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Título */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Equipo y organigrama
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-700">
            ALIDIA cuenta con un equipo base responsable de la dirección
            estratégica, la innovación y la infraestructura tecnológica, así
            como con vinculación académica que fortalece su rigor y proyección
            institucional.
          </p>
        </div>

        {/* Equipo base */}
        <div className="mt-14">
          <h3 className="text-lg font-semibold text-gray-900">
            Equipo base
          </h3>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreTeam.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="relative h-32 w-32 overflow-hidden rounded-full bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="mt-6 text-sm font-medium text-amber-600 text-center">
                  {member.role}
                </p>

                <p className="mt-1 text-base font-semibold text-gray-900 text-center">
                  {member.name}
                </p>

                {member.extra && (
                  <p className="mt-2 text-xs text-gray-500 text-center">
                    {member.extra}
                  </p>
                )}

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-amber-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.266 2.368 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.123 2.062 2.062 0 010 4.123zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Vinculación académica */}
        <div className="mt-20">
          <h3 className="text-lg font-semibold text-gray-900">
            Vinculación académica
          </h3>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {academicBoard.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="relative h-32 w-32 overflow-hidden rounded-full bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="mt-6 text-sm font-medium text-amber-600 text-center">
                  {member.role}
                </p>

                <p className="mt-1 text-base font-semibold text-gray-900 text-center">
                  {member.name}
                </p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-amber-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.266 2.368 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.123 2.062 2.062 0 010 4.123zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
