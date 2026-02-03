export function Activities() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-4xl">
          {/* Título */}
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Eventos y actividades
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-700">
            ALIDIA desarrolla y participa en diversas actividades orientadas a
            fortalecer la comunidad, promover el intercambio de conocimientos y
            acercar la inteligencia artificial y las tecnologías emergentes a
            distintos actores del territorio.
          </p>
        </div>

        {/* Tipos de actividades */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Formación y talleres
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Talleres prácticos y jornadas formativas dirigidas a estudiantes,
              profesionales y comunidad en general, con énfasis en el aprendizaje
              aplicado y el uso responsable de la tecnología.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Divulgación y encuentros académicos
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Espacios de divulgación, charlas y encuentros orientados a
              reflexionar sobre el impacto de la inteligencia artificial, los
              datos abiertos y las tecnologías emergentes en el contexto local.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Actividades colaborativas
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Dinámicas participativas como laboratorios, hackatones o
              mapatones, que fomentan la co-creación de soluciones tecnológicas
              desde una perspectiva comunitaria y territorial.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Vinculación con iniciativas locales e internacionales
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Participación y articulación con iniciativas, redes y eventos que
              promueven el uso de datos abiertos, la innovación cívica y el
              desarrollo responsable de la tecnología.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
