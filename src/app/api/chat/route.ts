import { NextResponse } from 'next/server';
import { groqChat } from '@/lib/groq';
import { COMITE_DETALLADO } from '@/lib/comite';
import { ALIDIA_INSTITUCIONAL } from '@/lib/alidia-knowledge';

export const runtime = 'nodejs';

const SYSTEM_PROMPT = `
Eres el asistente virtual de ALIDIA. Tienes acceso a las biografías detalladas del equipo, pero tu función es ser un "Sintetizador Inteligente".

REGLAS DE ORO (ESTRICTAS):
1. RESPUESTA CORTA: Nunca respondas más de 3 oraciones. Si la información es mucha, elige lo más impactante.
2. NADA DE MARKDOWN: No uses asteriscos (**), ni negritas. Texto plano siempre.
3. EL "GANCHO": Resume la bio extensa del miembro en una sola frase potente y entrega el link de LinkedIn inmediatamente.
4. TOKEN SAVING: No repitas el nombre de la persona si ya está en la pregunta.

### CONOCIMIENTO INSTITUCIONAL (ALIDIA):
${JSON.stringify(ALIDIA_INSTITUCIONAL)}

BASE DE DATOS DE CONSULTA (COMITÉ):
${JSON.stringify(COMITE_DETALLADO.map(p => ({
  n: p.nombre,
  r: p.rol,
  b: p.bio_extensa.substring(0, 400), // Pasamos solo el inicio para ahorrar tokens de entrada
  l: p.link
})))}

PROTOCOLO SEGÚN PREGUNTA:
- Si preguntan "¿Quién es Richard Sucuy?": 
  Respuesta: "Es el Director General y Fundador de ALIDIA, ingeniero experto en IA aplicada a salud y agricultura. Puedes conocer más en su perfil: ${COMITE_DETALLADO[0].link}"

- Si preguntan "¿Quiénes forman el equipo?":
  Respuesta: "El equipo está liderado por Richard Sucuy (Director), Karla Aguilar (Innovación), Bryan Cuero (Ingeniería) y el Dr. Eduardo Tusa (Academia). ¿Deseas el perfil de alguien en específico?"

- Si preguntan algo que NO está en la bio:
  Respuesta: "Soy un asistente informativo. Para detalles específicos de esa trayectoria, te sugiero contactar directamente al equipo en sus redes oficiales."

ESTILO DE RESPUESTA:
Directo, elegante, sin rodeos.
`.trim();

// Aquí iría tu lógica de POST para la API...

// Pequeño delay utilitario (para backoff)
function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing GROQ_API_KEY' }, { status: 500 });
    }

    const body = (await req.json()) as {
      message?: string;
      history?: Array<{ role: 'user' | 'assistant'; content: string }>;
    };

    const message = (body?.message ?? '').trim();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Seguridad mínima para evitar abusos
    if (message.length > 1200) {
      return NextResponse.json(
        { error: 'Message too long (max 1200 chars).' },
        { status: 400 }
      );
    }

    // Historial opcional: el frontend puede mandar los últimos N mensajes.
    // Sin BD: solo vive en memoria del cliente.
    const history = Array.isArray(body?.history) ? body.history.slice(-10) : [];

    const messages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...history.map((m) => ({
        role: m.role === 'user' ? ('user' as const) : ('assistant' as const),
        content: m.content,
      })),
      { role: 'user' as const, content: message },
    ];

    // 1 intento + 1 reintento corto si 429 (sin complicarlo)
    const attempt1 = await groqChat({
      apiKey,
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
      messages,
      temperature: 0.2,
      maxTokens: 500,
    });

    if (!attempt1.ok && attempt1.status === 429) {
      // Si los headers muestran pocos tokens restantes o llega 429, pausa breve y reintenta 1 vez
      await sleep(900);
      const attempt2 = await groqChat({
        apiKey,
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        messages,
        temperature: 0.2,
        maxTokens: 500,
      });

      if (!attempt2.ok) {
        return NextResponse.json(
          { error: attempt2.error, rateLimit: attempt2.rateLimit },
          { status: attempt2.status }
        );
      }

      return NextResponse.json({
        reply: attempt2.reply || '...',
        rateLimit: attempt2.rateLimit,
      });
    }

    if (!attempt1.ok) {
      return NextResponse.json(
        { error: attempt1.error, rateLimit: attempt1.rateLimit },
        { status: attempt1.status }
      );
    }

    return NextResponse.json({
      reply: attempt1.reply || '...',
      rateLimit: attempt1.rateLimit,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
