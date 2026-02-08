export function Objectives() {
  return (
    <section id="objetivos" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-4xl">
          {/* Título */}
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Objetivo general y objetivos específicos
          </h2>

          {/* Objetivo general */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Objetivo general
            </h3>

            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Fortalecer el desarrollo responsable y contextualizado de la
              inteligencia artificial y las tecnologías emergentes, mediante la
              formación, la innovación aplicada y la articulación de actores
              locales, con el fin de generar impacto social, educativo y
              productivo desde el territorio.
            </p>
          </div>

          {/* Objetivos específicos */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-900">
              Objetivos específicos
            </h3>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <p className="text-base leading-relaxed text-gray-700">
                  Fortalecer las capacidades técnicas y académicas de estudiantes,
                  profesionales y actores locales en áreas relacionadas con
                  inteligencia artificial y tecnologías emergentes.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <p className="text-base leading-relaxed text-gray-700">
                  Promover espacios de formación, divulgación y discusión técnica
                  que faciliten el acceso al conocimiento especializado en
                  contextos locales.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <p className="text-base leading-relaxed text-gray-700">
                  Impulsar proyectos de impacto social y productivo que utilicen
                  tecnologías emergentes para abordar problemáticas históricas en
                  sectores estratégicos.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <p className="text-base leading-relaxed text-gray-700">
                  Articular esfuerzos entre la academia, el sector privado,
                  instituciones públicas y la comunidad para fomentar la
                  innovación colaborativa.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <p className="text-base leading-relaxed text-gray-700">
                  Contribuir a una cultura de uso ético, responsable y
                  contextualizado de la tecnología.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
