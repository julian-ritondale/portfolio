import { useTranslation } from 'react-i18next';

export default function EducationSection() {
  const { t } = useTranslation();
  const educationCoursework = t('sections.education_coursework', { returnObjects: true }) as string[];

  return (
    <section id="education" className="flex flex-wrap gap-6 border-t border-[var(--line)] pt-7 pb-18 max-bp2:gap-3">
      <div className="flex-[1_1_220px] font-mono text-[17px] tracking-[0.06em]">02 — {t('sections.education_title')}</div>
      <div className="flex min-w-0 flex-[3_1_520px] flex-col gap-6">
        <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-[var(--line)] py-[18px]">
          <div className="flex-[1_1_300px]">
            <div className="text-[26px] tracking-[-0.01em]">{t('sections.education_uni')}</div>
            <p className="mt-2 text-pretty text-[17px] text-[var(--muted)]">{t('sections.education_degree')} · {t('sections.education_minor')}</p>
            <div className="mt-[10px] flex flex-wrap gap-[6px] text-base">
              {educationCoursework.map((c, i) => <span key={i} className="rounded-full bg-[var(--chip)] px-[10px] py-[3px]">{c}</span>)}
            </div>
          </div>
          <span className="flex-none whitespace-nowrap pt-[6px] text-right font-mono text-[14px]">{t('sections.education_time')}</span>
        </div>
      </div>
    </section>
  );
}
