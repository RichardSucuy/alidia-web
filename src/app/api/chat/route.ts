import { NextResponse } from 'next/server';
import { groqChat } from '@/lib/groq';

export const runtime = 'nodejs';

const SYSTEM_PROMPT = `
Eres un asistente informativo de ALIDIA (Alianza para el Liderazgo e Innovación en el Desarrollo de Inteligencia Artificial).
Objetivo: explicar de forma clara, institucional y cercana qué es ALIDIA, qué hace y cómo conectar.
Reglas:
- No inventes datos. Si no estás seguro, dilo y sugiere contactar al equipo.
- No respondas como vocero oficial. Mantén un tono informativo.
- Evita asesoría legal o médica.
- Sé breve y útil.
`.trim();

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
