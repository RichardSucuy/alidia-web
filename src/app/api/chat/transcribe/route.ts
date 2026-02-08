import { NextResponse } from 'next/server';
import { groqTranscribe } from '@/lib/groq';

export const runtime = 'nodejs';

const MAX_AUDIO_BYTES = 12 * 1024 * 1024;

const ALLOWED_EXTENSIONS = [
  'webm',
  'mp3',
  'mp4',
  'mpeg',
  'mpga',
  'm4a',
  'ogg',
  'wav',
  'flac',
];

function hasAllowedExtension(file: File) {
  const name = file.name.toLowerCase();
  return ALLOWED_EXTENSIONS.some((ext) => name.endsWith(`.${ext}`));
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Missing GROQ_API_KEY' },
        { status: 500 }
      );
    }

    const form = await req.formData();
    const maybeFile = form.get('file');

    // 1️⃣ archivo presente
    if (!(maybeFile instanceof File)) {
      return NextResponse.json(
        { error: 'Audio file is required.' },
        { status: 400 }
      );
    }

    // 2️⃣ extensión válida (alineado con Groq)
    if (!hasAllowedExtension(maybeFile)) {
      return NextResponse.json(
        { error: `Unsupported audio format: ${maybeFile.name}` },
        { status: 400 }
      );
    }

    // 3️⃣ tamaño válido
    if (maybeFile.size <= 0 || maybeFile.size > MAX_AUDIO_BYTES) {
      return NextResponse.json(
        {
          error: `Audio size must be between 1 byte and ${MAX_AUDIO_BYTES} bytes.`,
        },
        { status: 400 }
      );
    }

    // 4️⃣ transcripción
    const transcription = await groqTranscribe({
      apiKey,
      model: 'whisper-large-v3',
      file: maybeFile,
      language: 'es',
      prompt: 'Transcribe en español de forma clara y sin inventar contenido.',
    });

    if (!transcription.ok) {
      return NextResponse.json(
        {
          error: transcription.error,
          rateLimit: transcription.rateLimit,
        },
        { status: transcription.status }
      );
    }

    if (!transcription.text) {
      return NextResponse.json(
        { error: 'Empty transcription.' },
        { status: 422 }
      );
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
