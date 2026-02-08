export function ActionLines() {
  return (
    <section id="lineas-accion" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-4xl">
          {/* Título */}
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Líneas de acción
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-700">
            ALIDIA estructura su trabajo a través de líneas de acción que
            articulan formación, investigación, innovación aplicada y
            colaboración intersectorial, con un enfoque territorial y de impacto
            social.
          </p>
        </div>

        {/* Grid de líneas */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* Formación */}
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Formación y capacitación
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Desarrollo de procesos formativos orientados a estudiantes,
              profesionales y actores locales, enfocados en inteligencia
              artificial, ciencia de datos y tecnologías emergentes, con énfasis
              en el uso responsable y aplicado del conocimiento.
            </p>
          </div>

          {/* Liderazgo académico */}
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Liderazgo académico y divulgación
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Impulso de espacios de reflexión, divulgación y producción
              académica que fortalezcan el pensamiento crítico, el intercambio
              de saberes y la visibilización de iniciativas locales en el ámbito
              tecnológico.
            </p>
          </div>

          {/* Innovación comunitaria */}
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Innovación y desarrollo comunitario
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Diseño y acompañamiento de proyectos de innovación aplicada que
              respondan a problemáticas sociales, educativas y productivas,
              integrando tecnología con participación comunitaria y enfoque
              territorial.
            </p>
          </div>

          {/* Articulación */}
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Articulación y ecosistema
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Construcción de redes de colaboración entre academia, sector
              privado, instituciones públicas y organizaciones sociales, para
              potenciar iniciativas conjuntas y fortalecer el ecosistema local
              de innovación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
