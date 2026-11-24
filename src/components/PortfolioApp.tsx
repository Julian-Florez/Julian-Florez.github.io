import React, { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import { copy, type Lang } from '../data/i18n';
import { archiveItems } from '../data/projects';
import { TopAppBar } from './TopAppBar';
import { AgenticPlaybook } from './AgenticPlaybook';
import { EcosystemHub } from './EcosystemHub';
import { CaseStudiesSection } from './CaseStudiesSection';
import { KmpArcade } from './KmpArcade';
import { ArchiveAndSystems } from './ArchiveAndSystems';
import { useModalKeyboard } from './useModalKeyboard';

export const PortfolioApp: React.FC = () => {
  const [lang, setLang] = useState<Lang>('es');
  const [cmdOpen, setCmdOpen] = useState(false);
  const [cmdQuery, setCmdQuery] = useState('');
  const commandDialogRef = useModalKeyboard(cmdOpen, () => setCmdOpen(false));

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const qLang = params.get('lang');
    const savedLang = localStorage.getItem('jf_lang') as Lang | null;
    if (qLang === 'es' || qLang === 'en') setLang(qLang);
    else if (savedLang === 'es' || savedLang === 'en') setLang(savedLang);

  }, []);

  useEffect(() => {
    localStorage.setItem('jf_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const sections = [...document.querySelectorAll<HTMLElement>('main > section:not(:first-child):not(#archive)')];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('reveal-pending');
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0 });
    sections.forEach((section) => {
      section.classList.add('reveal-pending');
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen((v) => !v);
      } else if (e.key === 'Escape') {
        setCmdOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const hero = copy[lang].hero;
  const cmdResults = archiveItems
    .filter((i) => {
      if (!i.url) return false;
      const q = cmdQuery.trim().toLowerCase();
      if (!q) return true;
      return (
        i.name.toLowerCase().includes(q) ||
        i.lang.toLowerCase().includes(q) ||
        i.desc[lang].toLowerCase().includes(q)
      );
    })
    .slice(0, 8);

  return (
    <div className="min-h-screen">
      <TopAppBar
        lang={lang}
        setLang={setLang}
        onOpenCommand={() => setCmdOpen(true)}
      />

      <main id="main">
      <section className="hero-intro mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:pb-12 lg:pt-20">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold"
              style={{
                backgroundColor: 'var(--m3-secondary-container)',
                borderColor: 'var(--m3-outline-variant)',
                color: 'var(--m3-on-secondary-container)',
              }}
            >
              {hero.badge}
            </div>

            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:mt-6 lg:text-[64px] lg:leading-[1.05]">
              {hero.titleStart}{' '}
              <span
                className="inline-block rounded-3xl px-3 py-0.5"
                style={{
                  backgroundColor: 'var(--m3-primary-container)',
                  color: 'var(--m3-on-primary-container)',
                }}
              >
                {hero.titleHighlight}
              </span>{' '}
              {hero.titleEnd}
            </h1>

            <p
              className="mt-4 max-w-2xl text-base leading-relaxed sm:text-xl lg:mt-6"
              style={{ color: 'var(--m3-on-surface-variant)' }}
            >
              {hero.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 lg:mt-8">
              <a
                href="#cases"
                className="m3-pill inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold shadow-sm"
                style={{
                  backgroundColor: 'var(--m3-primary)',
                  color: 'var(--m3-on-primary)',
                }}
              >
                {hero.ctaPrimary}
              </a>

              <a
                href="#agentic"
                className="m3-pill inline-flex items-center gap-2 border px-6 py-3.5 text-sm font-bold"
                style={{
                  backgroundColor: 'var(--m3-surface-container-low)',
                  borderColor: 'var(--m3-outline-variant)',
                  color: 'var(--m3-on-surface)',
                }}
              >
                {hero.ctaSecondary}
              </a>

              <a
                href="https://github.com/Julian-Florez"
                target="_blank"
                rel="noreferrer"
                className="m3-pill inline-flex items-center gap-2 border px-5 py-3.5 text-sm font-semibold"
                style={{
                  borderColor: 'var(--m3-outline-variant)',
                  color: 'var(--m3-on-surface-variant)',
                }}
              >
                {hero.ctaGithub}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div
              className="m3-card flex items-center gap-4 overflow-hidden p-3 lg:block lg:p-5"
              style={{ backgroundColor: 'var(--m3-surface-container-low)' }}
            >
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl lg:h-auto lg:w-auto lg:rounded-[24px]">
                <img
                  src="/images/profile.png"
                  alt="Julián Flórez"
                  className="h-full w-full object-cover lg:aspect-square"
                />
              </div>
              <div className="flex min-w-0 flex-1 items-center justify-between lg:mt-4">
                <div>
                  <div className="font-display text-lg font-extrabold">Julián Flórez</div>
                  <div className="font-mono text-xs" style={{ color: 'var(--m3-on-surface-variant)' }}>
                    NixOS · KMP · Agentic AI
                  </div>
                </div>
                <span
                  className="hidden rounded-full px-3 py-1 font-mono text-xs font-bold lg:inline-flex"
                  style={{
                    backgroundColor: 'var(--m3-tertiary-container)',
                    color: 'var(--m3-on-tertiary-container)',
                  }}
                >
                  @Julian-Florez
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>

      <CaseStudiesSection lang={lang} />
      <AgenticPlaybook lang={lang} />
      <EcosystemHub lang={lang} />
      <KmpArcade lang={lang} />
      <ArchiveAndSystems lang={lang} />
      </main>

      {cmdOpen && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-20 backdrop-blur-sm"
            onClick={() => setCmdOpen(false)}
          >
            <div
              ref={commandDialogRef}
              className="w-full max-w-xl overflow-hidden rounded-[28px] border shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label={copy[lang].archive.publicSearchPlaceholder}
              style={{
                backgroundColor: 'var(--m3-surface-container-lowest)',
                borderColor: 'var(--m3-outline-variant)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="flex items-center gap-3 border-b px-4 py-3"
                style={{ borderColor: 'var(--m3-outline-variant)' }}
              >
                <Search className="h-4 w-4" style={{ color: 'var(--m3-primary)' }} />
                <input
                  autoFocus
                  type="text"
                  value={cmdQuery}
                  onChange={(e) => setCmdQuery(e.target.value)}
                  placeholder={copy[lang].archive.publicSearchPlaceholder}
                  aria-label={copy[lang].archive.publicSearchPlaceholder}
                  className="min-h-11 w-full bg-transparent text-sm"
                />
                <button
                  type="button"
                  onClick={() => setCmdOpen(false)}
                  aria-label={lang === 'es' ? 'Cerrar búsqueda' : 'Close search'}
                  className="flex h-11 w-11 items-center justify-center rounded-full cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="max-h-80 overflow-y-auto p-2">
                {cmdResults.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setCmdOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-3.5 py-2.5 text-sm hover:opacity-85"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <div>
                      <div className="font-display font-bold">{item.name}</div>
                      <div className="text-xs" style={{ color: 'var(--m3-on-surface-variant)' }}>
                        {item.desc[lang]}
                      </div>
                    </div>
                    <span
                      className="rounded-full px-2.5 py-0.5 font-mono text-[11px]"
                      style={{
                        backgroundColor: 'var(--m3-surface-container)',
                        color: 'var(--m3-primary)',
                      }}
                    >
                      {item.lang}
                    </span>
                  </a>
                ))}
                {cmdResults.length === 0 && <p className="p-4 text-sm">{copy[lang].archive.noResults}</p>}
              </div>
            </div>
          </div>
      )}
    </div>
  );
};
