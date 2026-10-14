import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconX } from '@tabler/icons-react';

export default function NoticeBanner() {
  const { t } = useTranslation();
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="fixed top-16 right-4 z-[100] flex w-[min(420px,calc(100vw-32px))] flex-col items-start gap-[10px] rounded-[14px] bg-brand py-4 pr-[44px] pl-[18px] font-mono text-[14px] leading-[1.45] tracking-[0.04em] text-[#111] shadow-[0_6px_24px_rgba(0,0,0,0.18)] max-bp3:top-3 max-bp3:right-4 max-bp3:left-4 max-bp3:w-auto">
      <button
        className="absolute top-3 right-3 flex h-6 w-6 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-[#111] opacity-60 transition-opacity duration-200 hover:opacity-100"
        onClick={() => setClosed(true)}
        aria-label="Close"
      >
        <IconX size={18} stroke={2} />
      </button>
      <span className="whitespace-pre-line">{t('ui.notice')}</span>
      <div className="flex flex-wrap gap-[5px] text-xs">
        <span className="rounded-full border border-[#111] px-2">{t('ui.intern')}</span>
        <span className="rounded-full border border-[#111] px-2">{t('ui.parttime')}</span>
      </div>
      <div className="self-stretch flex flex-col gap-[3px] text-xs tracking-normal">
        <div className="flex flex-nowrap gap-x-2 gap-y-1 whitespace-nowrap max-bp1:flex-wrap max-bp1:whitespace-normal"><span>Buenos Aires, AR</span><span>·</span><span>{t('ui.baModes')}</span></div>
        <div className="flex flex-nowrap gap-x-2 gap-y-1 whitespace-nowrap max-bp1:flex-wrap max-bp1:whitespace-normal"><span>{t('ui.us')}</span><span>·</span><span>{t('ui.usModes')}</span></div>
      </div>
      <a href="#contact" className="-mr-[26px] self-end rounded-full bg-[var(--fg)] px-3 py-1 text-[13px] text-[var(--bg)] hover:text-brand max-bp3:mr-0">{t('ui.letsTalk')}</a>
    </div>
  );
}
