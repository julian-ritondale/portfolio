export interface ChatMsg {
  role: 'user' | 'ai';
  text: string;
}

export async function askBackend(history: ChatMsg[], onChunk: (partial: string) => void): Promise<string | null> {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history }),
    });
    if (!res.ok || !res.body) return null;

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let full = '';
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      if (chunk) {
        full += chunk;
        onChunk(full);
      }
    }
    return full.trim() ? full : null;
  } catch {
    return null;
  }
}
