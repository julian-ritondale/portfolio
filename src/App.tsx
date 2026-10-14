import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/ui/Hero';
import PromptRow from './components/ui/PromptRow';
import AboutSection from './components/ui/AboutSection';
import EducationSection from './components/ui/EducationSection';
import ExperienceSection from './components/ui/ExperienceSection';
import ProjectsSection from './components/ui/ProjectsSection';
import GithubSection from './components/ui/GithubSection';
import SocialsSection from './components/ui/SocialsSection';
import ResumeSection from './components/ui/ResumeSection';
import ContactSection from './components/ui/ContactSection';
import { askBackend } from './lib/chat';
import type { ChatMsg } from './lib/chat';

function App() {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language.startsWith('es');

  const [theme, setTheme] = useState<'light' | 'dark'>(() => (localStorage.getItem('jr-theme') as 'light' | 'dark') || 'light');
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);

  const toggleLanguage = () => i18n.changeLanguage(isSpanish ? 'en' : 'es');
  const toggleTheme = () => setTheme(th => {
    const next = th === 'dark' ? 'light' : 'dark';
    localStorage.setItem('jr-theme', next);
    return next;
  });

  async function ask(question: string) {
    const q = question.trim();
    if (!q || loading) return;
    const next: ChatMsg[] = [...messages, { role: 'user', text: q }];
    setMessages(next);
    setLoading(true);
    setStreaming(false);

    const appendOrReplaceAi = (text: string) => setMessages(m => (m[m.length - 1]?.role === 'ai'
      ? [...m.slice(0, -1), { role: 'ai', text }]
      : [...m, { role: 'ai', text }]));

    const answer = await askBackend(next, partial => {
      setStreaming(true);
      appendOrReplaceAi(partial);
    });

    if (!answer) appendOrReplaceAi(t('ui.error'));
    setStreaming(false);
    setLoading(false);
  }

  const clearChat = () => {
    setMessages([]);
    setLoading(false);
    setStreaming(false);
  };

  return (
    <div className={`theme-${theme} min-h-screen bg-[var(--bg)] text-[var(--fg)] transition-colors duration-[250ms]`}>
      <Header theme={theme} onToggleTheme={toggleTheme} isSpanish={isSpanish} onToggleLanguage={toggleLanguage} />

      <div className="mx-auto max-w-[1600px] px-4 max-bp2:pt-[14px]">
        <Hero messages={messages} loading={loading} streaming={streaming} onAsk={ask} onClear={clearChat} />
        <PromptRow onAsk={ask} />

        <main className="mt-24">
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <GithubSection />
          <SocialsSection />
          <ResumeSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
