type Role = 'system' | 'user' | 'assistant';

export type GroqMessage = {
  role: Role;
  content: string;
};

export type GroqChatResult = {
  reply: string;
  rateLimit?: {
    remainingTokens?: string | null;
    remainingRequests?: string | null;
    resetTokens?: string | null;
    resetRequests?: string | null;
  };
};

function pickHeader(headers: Headers, key: string) {
  return headers.get(key) ?? headers.get(key.toLowerCase()) ?? null;
}

export async function groqChat(opts: {
  apiKey: string;
  model: string;
  messages: GroqMessage[];
  temperature?: number;
  maxTokens?: number;
}) {
  const { apiKey, model, messages, temperature = 0.2, maxTokens = 512 } = opts;

  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
    }),
  });

  const rateLimit = {
    remainingTokens: pickHeader(res.headers, 'x-ratelimit-remaining-tokens'),
    remainingRequests: pickHeader(res.headers, 'x-ratelimit-remaining-requests'),
    resetTokens: pickHeader(res.headers, 'x-ratelimit-reset-tokens'),
    resetRequests: pickHeader(res.headers, 'x-ratelimit-reset-requests'),
  };

  // Manejo explícito de 429 sin sobre-ingeniería
  if (res.status === 429) {
    const retryAfter = pickHeader(res.headers, 'retry-after');
    const text = await res.text().catch(() => '');
    return {
      ok: false as const,
      status: 429,
      error: `Rate limit (429).${retryAfter ? ` Retry-After: ${retryAfter}s.` : ''} ${text}`.trim(),
      rateLimit,
      retryAfter,
    };
  }

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    return {
      ok: false as const,
      status: res.status,
      error: `Groq error: ${res.status} ${text}`.trim(),
      rateLimit,
    };
  }

  const json = await res.json();
  const reply: string = json?.choices?.[0]?.message?.content ?? '';

  return {
    ok: true as const,
    status: 200,
    reply,
    rateLimit,
  };
}
