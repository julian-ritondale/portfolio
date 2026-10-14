import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();
  const aboutSkills = t('sections.about_skills', { returnObjects: true }) as string[];
  const aboutText = `${t('sections.about_desc_1')} ${t('sections.about_desc_2')} ${t('sections.about_desc_3')}`;

  return (
    <section id="about" className="flex flex-wrap gap-6 border-t border-[var(--line)] pt-7 pb-18 max-bp2:gap-3">
      <div className="flex-[1_1_220px] font-mono text-[17px] tracking-[0.06em]">01 — {t('sections.about_title')}</div>
      <div className="flex min-w-0 flex-[3_1_520px] flex-col gap-6">
        <p className="m-0 text-pretty text-[clamp(28px,3.4vw,44px)] leading-[1.1] tracking-[-0.02em]">{aboutText}</p>
        <div className="flex flex-wrap gap-[6px] text-base">
          {aboutSkills.map((s, i) => <span key={i} className="rounded-full bg-[var(--chip)] px-[10px] py-[3px]">{s}</span>)}
        </div>
      </div>
    </section>
  );
}
