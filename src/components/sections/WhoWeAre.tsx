export function WhoWeAre() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Texto */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              ¿Quiénes somos?
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-700">
              ALIDIA está conformada por un colectivo de profesionales,
              investigadores y actores vinculados al ámbito académico,
              tecnológico y social, con raíces y compromiso en el territorio.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Nace en Machala, Ecuador, como respuesta a la brecha existente entre
              el avance acelerado de las tecnologías emergentes y las realidades
              locales que requieren soluciones contextualizadas, responsables y
              sostenibles.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-700">
              ALIDIA asume un rol articulador, conectando conocimiento técnico,
              formación, innovación aplicada y participación comunitaria para
              que la inteligencia artificial sea una herramienta al servicio del
              desarrollo local.
            </p>
          </div>

          {/* Visual conceptual */}
          <div className="relative flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-amber-100 opacity-70" />
            <div className="absolute h-40 w-40 rounded-full bg-amber-200 opacity-80" />
            <div className="absolute h-20 w-20 rounded-full bg-amber-300 opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
