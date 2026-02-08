import { NextResponse } from 'next/server';
import { groqSpeech } from '@/lib/groq';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Missing GROQ_API_KEY' },
        { status: 500 }
      );
    }

    const body = (await req.json()) as {
      text?: string;
      voice?: string;
    };

    const text = (body.text ?? '').trim();
    if (!text) {
      return NextResponse.json(
        { error: 'Text is required for speech.' },
        { status: 400 }
      );
    }

    const audio = await groqSpeech({
      apiKey,
      model: 'playai-tts',
      voice: body.voice ?? 'Fritz-PlayAI',
      input: text,
      response_format: 'wav',
    });

    if (!audio.ok) {
    console.error('Groq speech error:', audio.error);
      return NextResponse.json(
        { error: audio.error },
        { status: audio.status }
      );
    }

    return new Response(audio.buffer, {
      headers: {
        'Content-Type': 'audio/wav',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
