export function WhatIs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          {/* Título */}
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            ¿Qué es ALIDIA?
          </h2>

          {/* Definición principal */}
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            ALIDIA es una iniciativa ciudadana local sin fines de lucro orientada
            al desarrollo responsable y contextualizado de la inteligencia
            artificial y las tecnologías emergentes.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Surge como un espacio de articulación entre formación, innovación
            aplicada y compromiso social, con un enfoque territorial que pone en
            el centro las capacidades locales y las necesidades reales del
            entorno.
          </p>

          {/* Ideas clave */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-gray-50 px-4 py-3">
              <p className="text-sm font-medium text-gray-900">
                Iniciativa ciudadana local
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 px-4 py-3">
              <p className="text-sm font-medium text-gray-900">
                Desarrollo responsable y contextualizado
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 px-4 py-3">
              <p className="text-sm font-medium text-gray-900">
                Impacto social desde el territorio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
