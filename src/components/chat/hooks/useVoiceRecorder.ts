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

const MAX_DURATION_MS = 5 * 60 * 1000; // 5 minutos

export function useVoiceRecorder({ onTranscription }: UseVoiceRecorderParams) {
  const [micSupported, setMicSupported] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [audioError, setAudioError] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [maxDurationReached, setMaxDurationReached] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const startTimestampRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

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
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  function updateTimer() {
    if (!startTimestampRef.current) return;

    const elapsed = Date.now() - startTimestampRef.current;
    const elapsedSeconds = Math.floor(elapsed / 1000);

    setSeconds(elapsedSeconds);

    if (elapsed >= MAX_DURATION_MS) {
      setMaxDurationReached(true);
      stopRecording();
      return;
    }

    animationFrameRef.current = requestAnimationFrame(updateTimer);
  }

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
      setMaxDurationReached(false);

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
      startTimestampRef.current = Date.now();
      setSeconds(0);

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        const type = recorder.mimeType || 'audio/webm';
        const blob = new Blob(audioChunksRef.current, { type });
        audioChunksRef.current = [];

        mediaStreamRef.current?.getTracks().forEach((t) => t.stop());
        mediaStreamRef.current = null;

        startTimestampRef.current = null;

        void transcribeAudio(blob, type);
      };

      recorder.start();
      setIsRecording(true);
      animationFrameRef.current = requestAnimationFrame(updateTimer);
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
    seconds,
    maxDurationReached,
    toggleRecording,
  };
}
