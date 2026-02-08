'use client';

import { useEffect, useRef, useState } from 'react';

type UseVoiceRecorderParams = {
  onTranscription: (text: string) => Promise<void>;
};

function pickExtension(mimeType: string) {
  if (mimeType.includes('mp4')) return 'mp4';
  if (mimeType.includes('mpeg')) return 'mp3';
  if (mimeType.includes('wav')) return 'wav';
  if (mimeType.includes('ogg')) return 'ogg';
  return 'webm';
}

export function useVoiceRecorder({ onTranscription }: UseVoiceRecorderParams) {
  const [micSupported, setMicSupported] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [audioError, setAudioError] = useState('');

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    setMicSupported(
      typeof navigator !== 'undefined' &&
        !!navigator.mediaDevices &&
        typeof MediaRecorder !== 'undefined'
    );

    return () => {
      if (mediaRecorderRef.current?.state !== 'inactive') {
        mediaRecorderRef.current?.stop();
      }
      mediaStreamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  async function transcribeAudio(blob: Blob, mimeType: string) {
    setIsTranscribing(true);
    setAudioError('');

    try {
      if (blob.size < 1000) {
        setAudioError('El audio es demasiado corto. Intenta nuevamente.');
        return;
      }

      const ext = pickExtension(mimeType || blob.type || 'audio/webm');
      const file = new File([blob], `voice-note.${ext}`, {
        type: mimeType || blob.type || 'audio/webm',
      });

      const form = new FormData();
      form.append('file', file);

      const res = await fetch('/api/chat/transcribe', {
        method: 'POST',
        body: form,
      });

      const data = await res.json();

      if (!res.ok) {
        console.error('Transcription API error:', data);
        throw new Error(data?.error || 'Transcription failed');
      }

      const text = String(data?.text || '').trim();
      if (!text) {
        setAudioError('No se pudo reconocer contenido en el audio.');
        return;
      }

      await onTranscription(text);
    } catch {
      setAudioError('No fue posible transcribir el audio. Intenta nuevamente.');
    } finally {
      setIsTranscribing(false);
    }
  }

  async function startRecording() {
    if (!micSupported || isRecording || isTranscribing) return;

    try {
      setAudioError('');
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      const preferredTypes = [
        'audio/webm;codecs=opus',
        'audio/webm',
        'audio/mp4',
      ];

      const selectedType = preferredTypes.find((t) =>
        MediaRecorder.isTypeSupported(t)
      );

      const recorder = selectedType
        ? new MediaRecorder(stream, { mimeType: selectedType })
        : new MediaRecorder(stream);

      mediaRecorderRef.current = recorder;
      audioChunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const type = recorder.mimeType || 'audio/webm';
        const blob = new Blob(audioChunksRef.current, { type });
        audioChunksRef.current = [];

        mediaStreamRef.current?.getTracks().forEach((t) => t.stop());
        mediaStreamRef.current = null;

        void transcribeAudio(blob, type);
      };

      recorder.start();
      setIsRecording(true);
    } catch {
      setAudioError('No se pudo acceder al micrófono.');
      setIsRecording(false);
    }
  }

  function stopRecording() {
    if (!mediaRecorderRef.current) return;
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  }

  function toggleRecording() {
    isRecording ? stopRecording() : void startRecording();
  }

  return {
    micSupported,
    isRecording,
    isTranscribing,
    audioError,
    toggleRecording,
  };
}
