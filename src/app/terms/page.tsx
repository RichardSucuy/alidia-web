import { Metadata } from "next";
import BrandLink from "@/components/BrandLink";

export const metadata: Metadata = {
  title: "Términos y Condiciones – ALIDIA",
  description:
    "Términos y Condiciones de uso del sitio web de ALIDIA conforme a la normativa vigente en la República del Ecuador.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-4xl font-bold text-center">
          TÉRMINOS Y CONDICIONES DE USO – <BrandLink />
        </h1>

        <p className="text-center text-sm text-gray-600">
          Versión 1.0 – Vigente desde 28/01/2026
        </p>

        {/* 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            1. Identificación del Titular del Sitio Web
          </h2>
          <p>
            El presente sitio web es administrado por <BrandLink /> (Alianza para el
            Liderazgo e Innovación en el Desarrollo de Inteligencia Artificial),
            iniciativa ciudadana sin fines de lucro con domicilio en Machala,
            provincia de El Oro, República del Ecuador.
          </p>
          <p className="mt-2">
            Para efectos de comunicación institucional, el usuario podrá
            contactarse mediante el correo electrónico oficial:
            contacto@alidia.org.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. Objeto
          </h2>
          <p>
            Los presentes Términos y Condiciones regulan el acceso, navegación y
            uso del sitio web de <BrandLink />, así como las responsabilidades
            derivadas de la utilización de sus contenidos.
          </p>
          <p className="mt-2">
            El acceso al sitio implica la aceptación expresa y sin reservas de
            las disposiciones aquí establecidas.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            3. Condiciones de Uso
          </h2>
          <p>
            El usuario se compromete a utilizar el sitio web de conformidad con
            la legislación ecuatoriana vigente, la buena fe y el orden público.
          </p>
          <ul className="list-disc ml-6 space-y-1 mt-3">
            <li>No realizar actividades ilícitas o contrarias a la ley.</li>
            <li>No intentar vulnerar la seguridad o integridad del sitio.</li>
            <li>No introducir virus, malware u otros elementos dañinos.</li>
            <li>No utilizar la información del sitio con fines fraudulentos.</li>
            <li>No suplantar identidades ni proporcionar información falsa.</li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            4. Propiedad Intelectual
          </h2>
          <p>
            Todos los contenidos del sitio web, incluyendo textos, logotipos,
            marcas, diseños, imágenes, estructura, código fuente y demás
            elementos, son de titularidad de <BrandLink /> o se utilizan con la
            debida autorización.
          </p>
          <p className="mt-2">
            Dichos contenidos se encuentran protegidos por la normativa vigente
            en materia de propiedad intelectual en la República del Ecuador.
            Queda prohibida su reproducción, distribución o modificación sin
            autorización expresa y por escrito.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            5. Exclusión de Responsabilidad
          </h2>
          <p>
            <BrandLink /> procura que la información publicada en el sitio sea
            precisa y actualizada; no obstante, no garantiza la ausencia total
            de errores, omisiones o interrupciones en el servicio.
          </p>
          <p className="mt-2">
            <BrandLink /> no será responsable por daños directos o indirectos que
            pudieran derivarse del uso del sitio web o de la imposibilidad de
            acceder al mismo.
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            6. Enlaces a Sitios de Terceros
          </h2>
          <p>
            El sitio web puede contener enlaces a páginas externas que no son
            administradas por <BrandLink />. En consecuencia, no se asume
            responsabilidad alguna por el contenido, políticas o prácticas de
            dichos sitios.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            7. Protección de Datos Personales
          </h2>
          <p>
            El tratamiento de datos personales que pudiera derivarse del uso del
            sitio web se rige por la Política de Privacidad publicada en este
            mismo portal, conforme a la Ley Orgánica de Protección de Datos
            Personales del Ecuador.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            8. Modificaciones
          </h2>
          <p>
            <BrandLink /> se reserva el derecho de modificar los presentes
            Términos y Condiciones en cualquier momento, con el fin de adecuarlos
            a cambios normativos o institucionales.
          </p>
          <p className="mt-2">
            La versión vigente será siempre la publicada en el sitio web.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            9. Legislación Aplicable y Jurisdicción
          </h2>
          <p>
            Los presentes Términos y Condiciones se rigen por la legislación
            vigente en la República del Ecuador.
          </p>
          <p className="mt-2">
            Para la resolución de cualquier controversia derivada de su
            interpretación o aplicación, las partes se someten a la jurisdicción
            de los jueces competentes en el territorio ecuatoriano.
          </p>
        </section>

      </div>
    </main>
  );
}