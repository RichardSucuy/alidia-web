export function Projects() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-4xl">
          {/* Título */}
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Proyectos en curso
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-700">
            ALIDIA impulsa iniciativas orientadas a fortalecer capacidades
            locales, generar conocimiento aplicado y articular actores en torno
            al uso responsable de la inteligencia artificial.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* SIAM */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
              En desarrollo
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              SIAM – Simposio Internacional de Inteligencia Artificial Machala
            </h3>

            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Espacio académico y de divulgación orientado a promover el diálogo,
              la formación y el intercambio de experiencias en inteligencia
              artificial y tecnologías emergentes, con énfasis en su aplicación
              responsable en contextos locales.
            </p>
          </div>

          {/* CEIA */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
              En incubación
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              CEIA – Centro de Experimentación en Inteligencia Artificial
            </h3>

            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Iniciativa orientada al desarrollo de prototipos, investigación
              aplicada y pilotos tecnológicos, que busca conectar conocimiento
              técnico, experimentación y necesidades reales del territorio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
