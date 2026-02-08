export function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          {/* Nombre corto */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-amber-600">
            ALIDIA
          </p>

          {/* Nombre completo */}
          <h1 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
            Alianza para el Liderazgo e Innovación en el Desarrollo de
            Inteligencia Artificial
          </h1>

          {/* Frase síntesis */}
          <p className="mt-6 text-xl font-medium text-gray-800">
            Desarrollo responsable de inteligencia artificial desde el territorio
          </p>

          {/* Descripción */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600">
            Iniciativa ciudadana sin fines de lucro que impulsa la formación, la
            innovación aplicada y el impacto social en tecnologías emergentes
            desde Machala, Ecuador.
          </p>
        </div>
      </div>

      {/* Detalle visual sutil */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"
      />
    </section>
  );
}
