export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="max-w-3xl">
          <p className="text-base font-semibold text-gray-900">
            ALIDIA
          </p>

          <p className="mt-2 text-sm text-gray-700">
            Alianza para el Liderazgo e Innovación en el Desarrollo de
            Inteligencia Artificial
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Machala, Ecuador
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Desarrollo tecnológico con enfoque territorial y compromiso social.
          </p>

          <p className="mt-6 text-xs text-gray-400">
            © {year} ALIDIA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
