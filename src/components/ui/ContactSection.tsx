import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { EMAIL } from '../../lib/constants';

export default function ContactSection() {
  const { t } = useTranslation();
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');

  const sendContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${contactEmail || 'a visitor'}`);
    const body = encodeURIComponent(`${contactMsg}\n\n— ${contactEmail}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="flex flex-wrap gap-6 border-t border-[var(--line)] pt-7 pb-18 max-bp2:gap-3">
      <div className="flex-[1_1_220px] font-mono text-[17px] tracking-[0.06em]">08 — {t('sections.contact_title')}</div>
      <div className="flex min-w-0 flex-[3_1_520px] flex-col gap-6">
        <a href={`mailto:${EMAIL}`} className="wrap-anywhere text-[clamp(30px,4vw,52px)] leading-[1.15] tracking-[-0.02em] hover:text-brand">{EMAIL}</a>
        <form className="flex max-w-[720px] flex-wrap gap-2" onSubmit={sendContact}>
          <input
            type="email"
            value={contactEmail}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setContactEmail(e.target.value)}
            placeholder={t('sections.contact_your_email') ?? ''}
            className="min-w-0 flex-[1_1_200px] rounded-full border-0 bg-[var(--chip)] px-[18px] py-3 text-[17px] text-[var(--fg)] outline-none"
          />
          <input
            value={contactMsg}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setContactMsg(e.target.value)}
            placeholder={t('sections.contact_say_hi') ?? ''}
            className="min-w-0 flex-[2_1_260px] rounded-full border-0 bg-[var(--chip)] px-[18px] py-3 text-[17px] text-[var(--fg)] outline-none"
          />
          <button type="submit" className="flex-none cursor-pointer rounded-full border-0 bg-brand px-5 py-3 text-[17px] text-[#111] transition-colors duration-200 hover:bg-[var(--fg)] hover:text-[var(--bg)]">{t('sections.contact_send')}</button>
        </form>
      </div>
    </section>
  );
}
