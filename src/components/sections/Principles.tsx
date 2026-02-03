export function Principles() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-4xl">
          {/* Título */}
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Enfoque institucional y principios
          </h2>

          {/* Texto base */}
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            ALIDIA concibe la inteligencia artificial y las tecnologías
            emergentes como herramientas al servicio de las personas, el
            conocimiento y el desarrollo local, y no como fines en sí mismos.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Su accionar se orienta por principios que priorizan el contexto, la
            responsabilidad y la colaboración, reconociendo la diversidad de
            realidades del territorio y la importancia de una adopción
            tecnológica consciente.
          </p>

          {/* Lista de principios */}
          <ul className="mt-10 space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
              <p className="text-base leading-relaxed text-gray-700">
                Fortalecimiento de capacidades locales como base del desarrollo
                tecnológico sostenible.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
              <p className="text-base leading-relaxed text-gray-700">
                Uso ético, responsable y contextualizado de la inteligencia
                artificial y las tecnologías emergentes.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
              <p className="text-base leading-relaxed text-gray-700">
                Colaboración intersectorial como motor de innovación y aprendizaje
                colectivo.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
              <p className="text-base leading-relaxed text-gray-700">
                Compromiso con el impacto social, educativo y productivo desde el
                territorio.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
