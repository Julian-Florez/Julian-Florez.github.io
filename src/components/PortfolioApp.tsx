import React, { useEffect, useState } from 'react';
import { copy, type Lang } from '../data/i18n';
import { TopAppBar } from './TopAppBar';
import { AgenticPlaybook } from './AgenticPlaybook';
import { EcosystemHub } from './EcosystemHub';
import { CaseStudiesSection } from './CaseStudiesSection';
import { KmpArcade } from './KmpArcade';
import { ArchiveAndSystems } from './ArchiveAndSystems';

export const PortfolioApp: React.FC = () => {
  const [lang, setLang] = useState<Lang>('es');

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

  const hero = copy[lang].hero;

  return (
    <div className="min-h-screen">
      <TopAppBar lang={lang} setLang={setLang} />

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

    </div>
  );
};
