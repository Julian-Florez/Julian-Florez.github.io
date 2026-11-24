import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, Bot, Layers, Lock, Globe, X, CheckCircle2 } from 'lucide-react';
import { caseStudies, type CaseStudy } from '../data/projects';
import { copy, type Lang } from '../data/i18n';
import { useModalKeyboard } from './useModalKeyboard';

interface CaseStudiesSectionProps {
  lang: Lang;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ lang }) => {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const dialogRef = useModalKeyboard(Boolean(activeStudy), () => setActiveStudy(null));
  const t = copy[lang].cases;

  useEffect(() => {
    if (!activeStudy) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [activeStudy]);

  return (
    <section id="cases" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mb-10 max-w-3xl">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold tracking-wider uppercase"
          style={{
            backgroundColor: 'var(--m3-tertiary-container)',
            color: 'var(--m3-on-tertiary-container)',
          }}
        >
          <Layers className="h-3.5 w-3.5" />
          {t.eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          {t.title}
        </h2>
        <p className="mt-3 text-base sm:text-lg" style={{ color: 'var(--m3-on-surface-variant)' }}>
          {t.subtitle}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <article
            key={study.id}
            className="case-project flex flex-col justify-between rounded-[28px] p-6 sm:p-7"
            style={{ backgroundColor: 'var(--m3-surface-container-low)' }}
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold"
                  style={{
                    backgroundColor: 'var(--m3-primary-container)',
                    color: 'var(--m3-on-primary-container)',
                  }}
                >
                  {study.category}
                </span>
                <span
                  className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[11px] font-medium"
                  style={{
                    backgroundColor: 'var(--m3-surface-container)',
                    color: 'var(--m3-on-surface-variant)',
                  }}
                >
                  {study.visibility === 'private' ? (
                    <>
                      <Lock className="h-3 w-3" /> {t.privateBadge}
                    </>
                  ) : (
                    <>
                      <Globe className="h-3 w-3" /> {t.publicBadge}
                    </>
                  )}
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight">
                {study.title}
              </h3>
              <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--m3-primary)' }}>
                {study.tagline[lang]}
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--m3-primary)' }}>
                {t.objectiveLabel}
              </p>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--m3-on-surface)' }}>
                {study.objective[lang]}
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--m3-primary)' }}>
                {t.builtLabel}
              </p>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--m3-on-surface-variant)' }}>
                {study.description[lang]}
              </p>

              <div
                className="mt-4 text-xs"
              >
                <div className="mb-1 flex items-center gap-1.5 font-bold" style={{ color: 'var(--m3-primary)' }}>
                  <Bot className="h-3.5 w-3.5" />
                  {t.agenticImpact}
                </div>
                <p style={{ color: 'var(--m3-on-surface-variant)' }}>{study.agenticRole[lang]}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {study.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full px-2.5 py-0.5 font-mono text-[11px]"
                    style={{
                      backgroundColor: 'var(--m3-surface-container)',
                      color: 'var(--m3-on-surface-variant)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {study.repoUrl && (
                  <a
                    href={study.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="m3-pill inline-flex min-h-11 items-center gap-1 border px-3 py-1.5 text-xs font-semibold"
                    style={{
                      borderColor: 'var(--m3-outline-variant)',
                      color: 'var(--m3-on-surface)',
                    }}
                  >
                    GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setActiveStudy(study)}
                  className="m3-pill min-h-11 px-4 py-1.5 text-xs font-semibold cursor-pointer"
                  style={{
                    backgroundColor: 'var(--m3-primary)',
                    color: 'var(--m3-on-primary)',
                  }}
                >
                  {t.inspectBtn}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeStudy && typeof document !== 'undefined' && createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={() => setActiveStudy(null)}
          >
            <div
              ref={dialogRef}
              className="max-h-[calc(100dvh-2rem)] w-full max-w-3xl overflow-y-auto rounded-[28px] p-6 shadow-2xl sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={activeStudy.title}
              tabIndex={-1}
              style={{
                backgroundColor: 'var(--m3-surface-container-lowest)',
                color: 'var(--m3-on-surface)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold"
                    style={{
                      backgroundColor: 'var(--m3-primary-container)',
                      color: 'var(--m3-on-primary-container)',
                    }}
                  >
                    {activeStudy.category}
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-extrabold">{activeStudy.title}</h3>
                  <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--m3-primary)' }}>
                    {activeStudy.tagline[lang]}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveStudy(null)}
                  aria-label={t.closeBtn}
                  className="m3-pill flex h-11 w-11 shrink-0 items-center justify-center cursor-pointer"
                  style={{ backgroundColor: 'var(--m3-surface-container-high)' }}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--m3-primary)' }}>{t.objectiveLabel}</p>
              <p className="mt-1 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--m3-on-surface)' }}>{activeStudy.objective[lang]}</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--m3-primary)' }}>{t.builtLabel}</p>
              <p className="mt-1 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--m3-on-surface-variant)' }}>
                {activeStudy.description[lang]}
              </p>

              <div
                className="mt-6 rounded-2xl p-4"
                style={{
                  backgroundColor: 'var(--m3-surface-container)',
                }}
              >
                <div className="mb-1.5 font-mono text-xs font-bold uppercase" style={{ color: 'var(--m3-primary)' }}>
                  {t.architectureLabel}
                </div>
                <p className="font-mono text-xs sm:text-sm leading-relaxed">{activeStudy.architecture[lang]}</p>
              </div>

              <div className="mt-6">
                <div className="mb-2.5 font-mono text-xs font-bold uppercase" style={{ color: 'var(--m3-on-surface-variant)' }}>
                  {t.challengesLabel}
                </div>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--m3-on-surface-variant)' }}>
                  {activeStudy.challenges[lang].map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--m3-primary)' }} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {activeStudy.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full px-3 py-1 font-mono text-xs font-medium"
                    style={{
                      backgroundColor: 'var(--m3-secondary-container)',
                      color: 'var(--m3-on-secondary-container)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>,
          document.body
      )}
    </section>
  );
};
