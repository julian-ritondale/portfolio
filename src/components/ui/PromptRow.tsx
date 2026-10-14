import { useTranslation } from 'react-i18next';

export interface PromptRowProps {
  onAsk: (question: string) => void;
}

export default function PromptRow({ onAsk }: PromptRowProps) {
  const { t } = useTranslation();
  const prompts = t('ui.prompts', { returnObjects: true }) as string[];

  return (
    <div className="mt-12 mb-10 flex flex-wrap justify-center gap-[6px] text-lg">
      {prompts.map((p, i) => (
        <button
          key={i}
          className="cursor-pointer rounded-full border-0 bg-[var(--chip)] px-3 py-[5px] text-[var(--fg)] transition-colors duration-200 hover:bg-brand hover:text-[#111]"
          onClick={() => onAsk(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
