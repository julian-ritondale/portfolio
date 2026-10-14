import { useTranslation } from 'react-i18next';

export default function ResumeSection() {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language.startsWith('es');
  const resumeHref = isSpanish ? '/Julian_Ritondale_CV.pdf' : '/Julian_Ritondale_Resume.pdf';

  return (
    <section id="resume" className="flex flex-wrap gap-6 border-t border-[var(--line)] pt-7 pb-18 max-bp2:gap-3">
      <div className="flex-[1_1_220px] font-mono text-[17px] tracking-[0.06em]">07 — {t('sections.resume')}</div>
      <div className="flex min-w-0 flex-[3_1_520px] flex-wrap items-center justify-between gap-[10px] max-bp2:flex-col max-bp2:items-start">
        <a href={resumeHref} target="_blank" rel="noopener noreferrer" className="text-[clamp(30px,4vw,52px)] leading-[1.15] tracking-[-0.02em] hover:text-brand">{resumeHref.replace('/', '')}</a>
        <a href={resumeHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[var(--fg)] px-[10px] py-[3px] text-[15px] text-[var(--bg)] hover:text-brand">{t('sections.download')}</a>
      </div>
    </section>
  );
}
