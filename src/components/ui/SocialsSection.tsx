import { useTranslation } from 'react-i18next';
import { GITHUB_URL, LINKEDIN_URL } from '../../lib/constants';

export default function SocialsSection() {
  const { t } = useTranslation();

  return (
    <section id="socials" className="flex flex-wrap gap-6 border-t border-[var(--line)] pt-7 pb-18 max-bp2:gap-3">
      <div className="flex-[1_1_220px] font-mono text-[17px] tracking-[0.06em]">06 — {t('sections.socials_title')}</div>
      <div className="flex min-w-0 flex-[3_1_520px] flex-col gap-6 text-[clamp(30px,4vw,52px)] leading-[1.15] tracking-[-0.02em]">
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="block hover:text-brand">LinkedIn ↗</a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="block hover:text-brand">GitHub ↗</a>
      </div>
    </section>
  );
}
