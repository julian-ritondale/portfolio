import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { IconSparklesFilled, IconArrowUp } from '@tabler/icons-react';
import type { ChatMsg } from '../../lib/chat';

export interface HeroProps {
  messages: ChatMsg[];
  loading: boolean;
  streaming: boolean;
  onAsk: (question: string) => void;
  onClear: () => void;
}

export default function Hero({ messages, loading, streaming, onAsk, onClear }: HeroProps) {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);
  const hasMessages = messages.length > 0;

  useEffect(() => {
    const el = chatRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  const send = () => {
    onAsk(input);
    setInput('');
  };

  const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') send();
  };

  return (
    <section id="hero" className="mx-auto flex min-h-[600px] max-w-[1130px] flex-col gap-6 overflow-hidden rounded-[28px] bg-[var(--chip)] p-9 text-[var(--fg)] max-bp2:min-h-[480px] max-bp2:p-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-start text-brand"><IconSparklesFilled size={64} /></div>
        {!hasMessages && <h1 className="m-0 max-w-[900px] text-balance text-[clamp(44px,8vw,112px)] leading-[0.95] font-normal tracking-[-0.035em]">{t('ui.heroTitle')}</h1>}
      </div>

      {hasMessages && (
        <div className="scrollbar-none flex max-h-[400px] flex-1 flex-col gap-[10px] overflow-y-auto pr-1" ref={chatRef}>
          {messages.map((m, i) => (
            <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
              <div className={m.role === 'user'
                ? 'max-w-[70%] rounded-[20px] bg-[#111] px-4 py-[10px] text-[17px] text-white'
                : 'max-w-[75%] rounded-[20px] bg-[#111] px-[18px] py-3 text-[17px] leading-[1.4] text-pretty whitespace-pre-wrap text-white'}
              >
                {m.text}
              </div>
            </div>
          ))}
          {loading && !streaming && <div className="animate-pulse-soft font-mono text-[13px] tracking-[0.06em]">{t('ui.thinking')}</div>}
        </div>
      )}

      <div className="mt-auto flex flex-wrap items-center justify-center gap-3">
        <div className="flex flex-[1_1_420px] max-w-[580px] items-center gap-2 rounded-full bg-[#111] py-2 pr-2 pl-[22px]">
          <input
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder={t('ui.placeholder') ?? ''}
            className="min-w-0 flex-1 border-0 bg-transparent py-[6px] text-[19px] text-white outline-none placeholder:text-[#8a8a8a]"
          />
          <button
            className="flex h-[38px] w-[38px] flex-none cursor-pointer items-center justify-center rounded-full border-0 bg-brand p-0 text-[#111] transition-colors duration-200 hover:bg-white"
            onClick={send}
            aria-label="Send"
          >
            <IconArrowUp size={16} stroke={2} />
          </button>
        </div>
        {hasMessages && (
          <button className="cursor-pointer rounded-full border-0 bg-[#111] px-[14px] py-2 text-[14px] text-white" onClick={onClear}>
            {t('ui.clear')}
          </button>
        )}
      </div>
    </section>
  );
}
