import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="flex flex-wrap justify-between gap-3 border-t border-[var(--line)] pt-4 pb-6 font-mono text-[12px] tracking-[0.06em] text-[var(--muted)]">
      <span>© {new Date().getFullYear()} JULIAN RITONDALE</span>
      <a href="#top" className="hover:text-brand" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
        {t('ui.top')}
      </a>
    </footer>
  );
}
