import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GITHUB_URL, GITHUB_HANDLE } from '../../lib/constants';
import { githubCellsFallback, buildContributionCells } from '../../lib/github';
import type { ContribDay } from '../../lib/github';

export default function GithubSection() {
  const { t } = useTranslation();
  const [cells, setCells] = useState<string[]>(() => githubCellsFallback());

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_HANDLE.slice(1)}?y=last`)
      .then(res => (res.ok ? res.json() : Promise.reject(new Error('bad status'))))
      .then((data: { contributions: ContribDay[] }) => {
        if (cancelled) return;
        const real = buildContributionCells(data.contributions);
        if (real.length > 0) setCells(real);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  return (
    <section id="github" className="flex flex-wrap gap-6 border-t border-[var(--line)] pt-7 pb-18 max-bp2:gap-3">
      <div className="flex-[1_1_220px] font-mono text-[17px] tracking-[0.06em]">05 — {t('ui.nav.github')}</div>
      <div className="flex min-w-0 flex-[3_1_520px] flex-col gap-6">
        <div className="flex flex-wrap items-baseline justify-between gap-[10px]">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-[26px] hover:text-brand">{GITHUB_HANDLE}</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[var(--fg)] px-[10px] py-[3px] text-[15px] text-[var(--bg)] hover:text-brand">{t('sections.github_view')}</a>
        </div>
        <div className="overflow-x-auto pb-1">
          <div className="grid w-max auto-cols-[10px] grid-flow-col grid-rows-[repeat(7,10px)] gap-[3px]">
            {cells.map((c, i) => <span key={i} className="rounded-[2px]" style={{ background: c }} />)}
          </div>
        </div>
        <div className="font-mono text-[13px] tracking-[0.04em] text-[var(--muted)]">{t('sections.github_contrib')}</div>
      </div>
    </section>
  );
}
