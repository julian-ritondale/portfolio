import { useTranslation } from 'react-i18next';

export default function ExperienceSection() {
  const { t } = useTranslation();
  const experienceBullets = t('sections.experience_1_bullets', { returnObjects: true }) as string[];

  return (
    <section id="experience" className="flex flex-wrap gap-6 border-t border-[var(--line)] pt-7 pb-18 max-bp2:gap-3">
      <div className="flex-[1_1_220px] font-mono text-[17px] tracking-[0.06em]">03 — {t('sections.experience_title')}</div>
      <div className="flex min-w-0 flex-[3_1_520px] flex-col gap-6">
        <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-[var(--line)] py-[18px]">
          <div className="flex-[1_1_300px]">
            <div className="flex flex-wrap items-center gap-2 text-[26px] tracking-[-0.01em]">
              <span>{t('sections.experience_1_role')} · {t('sections.experience_1_company')}</span>
              <span className="rounded-full bg-brand px-2 py-0.5 text-xs tracking-normal text-[#111]">{t('ui.current')}</span>
            </div>
            <ul className="mt-2 list-disc text-pretty pl-5 flex flex-col gap-[6px] text-[17px] text-[var(--muted)]">
              {experienceBullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
          <span className="flex-none whitespace-nowrap pt-[6px] text-right font-mono text-[14px]">{t('sections.experience_1_date')}</span>
        </div>
      </div>
    </section>
  );
}
