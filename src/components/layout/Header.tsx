import { useTranslation } from 'react-i18next';
import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react';
import NoticeBanner from './NoticeBanner';

export interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  isSpanish: boolean;
  onToggleLanguage: () => void;
}

export default function Header({ theme, onToggleTheme, isSpanish, onToggleLanguage }: HeaderProps) {
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  return (
    <header className="relative flex min-h-[80px] w-full items-start justify-between gap-4 px-4 py-[10px] max-bp3:flex-col max-bp3:items-center max-bp3:text-center">
      <nav className="flex min-w-0 flex-1 flex-col items-start text-[27px] leading-[1.2] tracking-[-0.01em] max-bp3:w-full max-bp3:items-center">
        <a href="#about" className="hover:text-brand">{t('ui.nav.about')}</a>
        <a href="#education" className="hover:text-brand">{t('ui.nav.education')}</a>
        <a href="#experience" className="flex items-start gap-1 hover:text-brand max-bp3:items-center">
          {t('ui.nav.experience')}
          <span className="mt-0.5 rounded-full bg-brand px-[5px] py-0.5 text-[9px] font-medium tracking-normal text-[#111]">{t('ui.now')}</span>
        </a>
        <a href="#projects" className="hover:text-brand">{t('ui.nav.projects')}</a>
        <a href="#github" className="hover:text-brand">{t('ui.nav.github')}</a>
        <a href="#socials" className="hover:text-brand">{t('ui.nav.socials')}</a>
        <a href="#resume" className="hover:text-brand">{t('ui.nav.resume')}</a>
        <a href="#contact" className="hover:text-brand">{t('ui.nav.contact')}</a>
      </nav>

      <div className="absolute top-0 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[clamp(22px,6vw,40px)] font-medium tracking-[0.01em] whitespace-nowrap max-bp3:static max-bp3:my-2 max-bp3:translate-x-0">
        {isSpanish ? 'JULIÁN RITONDALE' : 'JULIAN RITONDALE'}<sup className="text-[22px] align-super">®</sup>
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-end gap-[10px] max-bp3:w-full max-bp3:items-center">
        <div className="flex justify-end gap-0 text-base max-bp3:justify-center">
          <button
            className="h-10 min-w-[72px] cursor-pointer rounded-full border-0 bg-[var(--chip)] px-5 text-[var(--fg)] transition-colors duration-200 hover:bg-brand hover:text-[#111]"
            onClick={onToggleLanguage}
            aria-label="Language"
          >
            {isSpanish ? 'EN' : 'ES'}
          </button>
          <button
            className="flex h-10 w-10 flex-none cursor-pointer items-center justify-center rounded-full border-0 bg-[var(--chip)] p-0 text-[var(--fg)] transition-colors duration-200 hover:bg-brand hover:text-[#111]"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? <IconSunFilled size={20} /> : <IconMoonFilled size={20} />}
          </button>
        </div>

        <NoticeBanner />
      </div>
    </header>
  );
}
