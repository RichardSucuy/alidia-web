import { Metadata } from "next";
import BrandLink from "@/components/BrandLink";

export const metadata: Metadata = {
  title: "Política de Privacidad – ALIDIA",
  description:
    "Política de Privacidad de ALIDIA conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-4xl font-bold text-center">
          POLÍTICA DE PRIVACIDAD – <BrandLink />
        </h1>

        <p className="text-center text-sm text-gray-600">
          Versión 1.0 – Vigente desde 28/01/2026
        </p>

        {/* 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            1. Marco Normativo
          </h2>
          <p>
            La presente Política de Privacidad se emite en cumplimiento de lo
            dispuesto en la Ley Orgánica de Protección de Datos Personales del
            Ecuador y su normativa complementaria. <BrandLink /> garantiza que el
            tratamiento de datos personales se realizará conforme a los
            principios y obligaciones establecidos en dicha legislación.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. Identificación del Responsable del Tratamiento
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Responsable:</strong> <BrandLink /></li>
            <li><strong>Naturaleza:</strong> Iniciativa ciudadana sin fines de lucro</li>
            <li><strong>Domicilio:</strong> Machala, El Oro, Ecuador</li>
            <li><strong>Correo de contacto:</strong> privacidad@alidia.org</li>
          </ul>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            3. Principios Aplicables al Tratamiento
          </h2>
          <p>
            El tratamiento de datos personales se realizará conforme a los
            principios de licitud, lealtad, transparencia, finalidad,
            minimización de datos, exactitud, limitación del plazo de
            conservación, confidencialidad, seguridad y responsabilidad
            proactiva.
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            4. Datos Personales Tratados
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Datos identificativos (nombres y apellidos).</li>
            <li>Datos de contacto (correo electrónico, teléfono).</li>
            <li>Datos académicos o profesionales (cuando aplique).</li>
            <li>Datos técnicos y de navegación (IP, cookies, navegador).</li>
            <li>Información proporcionada voluntariamente por el titular.</li>
          </ul>
          <p className="mt-3">
            No se recopilarán datos sensibles salvo que exista base legal
            suficiente y consentimiento expreso.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            5. Finalidades del Tratamiento
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Gestión de eventos, convocatorias y actividades académicas.</li>
            <li>Comunicación institucional.</li>
            <li>Respuesta a consultas.</li>
            <li>Cumplimiento de obligaciones legales.</li>
            <li>Gestión administrativa interna.</li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            6. Base de Legitimación
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Consentimiento libre, específico, informado e inequívoco.</li>
            <li>Cumplimiento de obligaciones legales.</li>
            <li>Interés legítimo institucional debidamente ponderado.</li>
          </ul>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            7. Conservación de Datos
          </h2>
          <p>
            Los datos serán conservados únicamente durante el tiempo necesario
            para cumplir la finalidad declarada o mientras exista obligación
            legal que justifique su mantenimiento.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            8. Transferencias y Encargados
          </h2>
          <p>
            <BrandLink /> podrá utilizar proveedores tecnológicos nacionales o
            internacionales bajo contratos que garanticen el cumplimiento de la
            normativa vigente en materia de protección de datos.
          </p>
          <p className="mt-2">
            No se comercializan datos personales.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            9. Derechos del Titular
          </h2>
          <p>
            El titular podrá ejercer sus derechos de acceso, rectificación,
            actualización, eliminación, oposición, portabilidad y suspensión
            del tratamiento.
          </p>
          <p className="mt-2">
            Las solicitudes deberán enviarse a privacidad@alidia.org,
            adjuntando documento que acredite identidad.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            10. Medidas de Seguridad
          </h2>
          <p>
            <BrandLink /> implementa medidas técnicas, organizativas y administrativas
            razonables para proteger los datos personales frente a accesos no
            autorizados, pérdida, alteración o divulgación indebida.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            11. Autoridad de Control
          </h2>
          <p>
            En caso de considerar vulnerados sus derechos, el titular podrá
            presentar una reclamación ante la autoridad competente en materia
            de protección de datos en el Ecuador.
          </p>
        </section>

        {/* 12 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            12. Actualizaciones
          </h2>
          <p>
            <BrandLink /> podrá modificar esta Política cuando sea necesario para
            adecuarla a cambios normativos o institucionales. La versión vigente
            estará siempre publicada en este sitio web.
          </p>
        </section>

      </div>
    </main>
  );
}