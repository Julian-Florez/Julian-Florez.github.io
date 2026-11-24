import React, { useMemo, useState } from 'react';
import { ArrowUpRight, FolderGit2, Lock, Mail } from 'lucide-react';
import { archiveItems } from '../data/projects';
import { archiveDetails } from '../data/archive-details';
import { copy, type Lang } from '../data/i18n';

interface ArchiveAndSystemsProps {
  lang: Lang;
}

const categories = [
  'All',
  'Agentic AI',
  'KMP & Android',
  'Linux & Systems',
  'Reverse Engineering',
  'Web & Full-Stack',
] as const;

export const ArchiveAndSystems: React.FC<ArchiveAndSystemsProps> = ({ lang }) => {
  const [selectedCat, setSelectedCat] = useState<(typeof categories)[number]>('All');
  const [showAll, setShowAll] = useState(false);
  const ta = copy[lang].archive;
  const tc = copy[lang].contact;

  const filtered = useMemo(() => {
    return archiveItems.filter((item) => selectedCat === 'All' || item.category === selectedCat);
  }, [selectedCat]);
  const defaultView = selectedCat === 'All';
  const visibleItems = defaultView && !showAll ? filtered.slice(0, 8) : filtered;

  return (
    <>
      {/* Complete Archive Section */}
      <section id="archive" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-24">
        <div className="mb-6 max-w-3xl lg:mb-8">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold tracking-wider uppercase"
            style={{
              backgroundColor: 'var(--m3-secondary-container)',
              color: 'var(--m3-on-secondary-container)',
            }}
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            {ta.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            {ta.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg" style={{ color: 'var(--m3-on-surface-variant)' }}>
            {ta.subtitle}
          </p>
        </div>

        <div className="mb-5">
          <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible md:pb-0">
            {categories.map((cat) => {
              const active = selectedCat === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCat(cat)}
                  aria-pressed={active}
                  className="m3-pill min-h-11 shrink-0 px-3.5 py-1.5 text-xs font-semibold cursor-pointer"
                  style={{
                    backgroundColor: active ? 'var(--m3-primary)' : 'var(--m3-surface-container-low)',
                    color: active ? 'var(--m3-on-primary)' : 'var(--m3-on-surface-variant)',
                  }}
                >
                  {cat === 'All' ? ta.all : cat}
                </button>
              );
            })}
          </div>

        </div>

        <p role="status" className="mb-4 text-sm font-medium" style={{ color: 'var(--m3-on-surface-variant)' }}>
          {lang === 'es' ? `Mostrando ${visibleItems.length} de ${filtered.length} proyectos` : `Showing ${visibleItems.length} of ${filtered.length} projects`}
        </p>
        {filtered.length === 0 && <p className="rounded-xl p-6 text-sm" style={{ backgroundColor: 'var(--m3-surface-container-low)' }}>{ta.noResults}</p>}
        <div className="grid gap-3 md:grid-cols-2">
          {visibleItems.map((item) => (
            <article
              key={item.name}
              className="archive-project flex h-full flex-col rounded-3xl p-4 sm:p-5"
              style={{ backgroundColor: 'var(--m3-surface-container-low)' }}
            >
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full px-2.5 py-1 text-xs font-semibold" style={{ backgroundColor: 'var(--m3-surface-container-high)', color: 'var(--m3-on-surface-variant)' }}>{item.category}</span>
                  {item.visibility !== 'public' ? (
                    <span className="inline-flex items-center gap-1 text-xs" style={{ color: 'var(--m3-on-surface-variant)' }}>
                      <Lock aria-hidden="true" className="h-3.5 w-3.5" />
                      {item.visibility === 'local' ? 'Local' : (lang === 'es' ? 'Privado' : 'Private')}
                    </span>
                  ) : <span className="text-xs" style={{ color: 'var(--m3-on-surface-variant)' }}>{lang === 'es' ? 'Repositorio público' : 'Public repository'}</span>}
                </div>
                <h3 className="mt-3 font-display text-lg font-extrabold tracking-tight">{item.name}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed" style={{ color: 'var(--m3-on-surface)' }}>
                  {item.desc[lang]}
                </p>
                {archiveDetails[item.name]?.[lang] && <details className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--m3-on-surface-variant)' }}>
                  <summary className="min-h-11 cursor-pointer py-2 font-semibold" style={{ color: 'var(--m3-primary)' }}>{lang === 'es' ? 'Leer el trabajo realizado' : 'Read the work behind it'}</summary>
                  <p className="pb-1">{archiveDetails[item.name][lang]}</p>
                </details>}
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="font-mono text-xs" style={{ color: 'var(--m3-on-surface-variant)' }}>{item.lang}</span>
                {item.url && <a href={item.url} target="_blank" rel="noreferrer" className="project-link inline-flex min-h-11 items-center gap-1 rounded-full px-4 text-sm font-bold" style={{ backgroundColor: 'var(--m3-primary)', color: 'var(--m3-on-primary)' }}>
                  {lang === 'es' ? 'Ver código' : 'View code'} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>}
              </div>
            </article>
          ))}
        </div>
        {defaultView && filtered.length > 8 && (
          <div className="mt-6 flex justify-center">
            <button type="button" onClick={() => setShowAll((value) => !value)} className="m3-pill min-h-11 px-6 py-2.5 text-sm font-bold cursor-pointer" style={{ backgroundColor: 'var(--m3-primary-container)', color: 'var(--m3-on-primary-container)' }}>
              {showAll ? (lang === 'es' ? 'Mostrar menos' : 'Show fewer') : (lang === 'es' ? `Ver los ${filtered.length - 8} restantes` : `Show ${filtered.length - 8} more`)}
            </button>
          </div>
        )}
      </section>

      {/* Contact Footer Card */}
      <footer id="contact" className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6">
        <div
          className="rounded-[36px] border p-8 sm:p-12 text-center"
          style={{
            backgroundColor: 'var(--m3-primary-container)',
            borderColor: 'var(--m3-outline-variant)',
            color: 'var(--m3-on-primary-container)',
          }}
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            {tc.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg opacity-90">
            {tc.subtitle}
          </p>
          <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-wider opacity-80">
            {tc.education}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:jflorez0820@gmail.com"
              className="m3-pill inline-flex items-center gap-2 px-6 py-3 text-sm font-bold"
              style={{
                backgroundColor: 'var(--m3-primary)',
                color: 'var(--m3-on-primary)',
              }}
            >
              <Mail className="h-4 w-4" />
              {tc.emailBtn}
            </a>
            <a
              href="https://www.linkedin.com/in/julian-florez-/"
              target="_blank"
              rel="noreferrer"
              className="m3-pill inline-flex items-center gap-2 border px-6 py-3 text-sm font-bold"
              style={{
                backgroundColor: 'var(--m3-surface-container-lowest)',
                borderColor: 'var(--m3-outline-variant)',
                color: 'var(--m3-on-surface)',
              }}
            >
              {tc.linkedinBtn}
            </a>
            <a
              href="https://github.com/Julian-Florez"
              target="_blank"
              rel="noreferrer"
              className="m3-pill inline-flex items-center gap-2 border px-6 py-3 text-sm font-bold"
              style={{
                backgroundColor: 'var(--m3-surface-container-lowest)',
                borderColor: 'var(--m3-outline-variant)',
                color: 'var(--m3-on-surface)',
              }}
            >
              {tc.githubBtn}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
