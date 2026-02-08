import { NextResponse } from 'next/server';
import { groqTranscribe } from '@/lib/groq';

export const runtime = 'nodejs';

const MAX_AUDIO_BYTES = 12 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  'audio/webm',
  'audio/mp4',
  'audio/mpeg',
  'audio/wav',
  'audio/ogg',
]);

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing GROQ_API_KEY' }, { status: 500 });
    }

    const form = await req.formData();
    const maybeFile = form.get('file');

    if (!(maybeFile instanceof File)) {
      return NextResponse.json({ error: 'Audio file is required.' }, { status: 400 });
    }

    if (!ALLOWED_TYPES.has(maybeFile.type)) {
      return NextResponse.json(
        { error: `Unsupported audio type: ${maybeFile.type || 'unknown'}` },
        { status: 400 }
      );
    }

    if (maybeFile.size <= 0 || maybeFile.size > MAX_AUDIO_BYTES) {
      return NextResponse.json(
        { error: `Audio size must be between 1 byte and ${MAX_AUDIO_BYTES} bytes.` },
        { status: 400 }
      );
    }

    const transcription = await groqTranscribe({
      apiKey,
      model: 'whisper-large-v3-turbo',
      file: maybeFile,
      language: 'es',
      prompt: 'Transcribe en espanol de forma clara y sin inventar contenido.',
    });

    if (!transcription.ok) {
      return NextResponse.json(
        { error: transcription.error, rateLimit: transcription.rateLimit },
        { status: transcription.status }
      );
    }

    if (!transcription.text) {
      return NextResponse.json({ error: 'Empty transcription.' }, { status: 422 });
    }

    return NextResponse.json({
      text: transcription.text,
      rateLimit: transcription.rateLimit,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
