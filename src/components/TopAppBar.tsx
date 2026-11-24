import React from 'react';
import { Search } from 'lucide-react';
import { copy, type Lang } from '../data/i18n';

interface TopAppBarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  onOpenCommand: () => void;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  lang,
  setLang,
  onOpenCommand,
}) => {
  const t = copy[lang].nav;
  const destinations = [
    { href: '#cases', label: t.projects },
    { href: '#agentic', label: t.agentic },
    { href: '#ecosystem', label: t.ecosystem },
    { href: '#arcade', label: t.arcade },
    { href: '#archive', label: t.archive },
    { href: '#contact', label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-40 mx-auto max-w-7xl px-4 pt-2 sm:px-6">
      <nav
        aria-label={lang === 'es' ? 'Principal' : 'Primary'}
        className="flex items-center justify-between gap-3 rounded-2xl border px-3 py-2 shadow-sm sm:px-4"
        style={{
          backgroundColor: 'var(--m3-surface-container-low)',
          borderColor: 'var(--m3-outline-variant)',
        }}
      >
        <a href="#main" className="flex items-center gap-2.5 font-display font-bold tracking-tight">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
            style={{
              backgroundColor: 'var(--m3-primary)',
              color: 'var(--m3-on-primary)',
            }}
          >
            JF
          </span>
          <span className="hidden sm:inline text-base">Julián Flórez</span>
        </a>

        <div className="hidden xl:flex items-center gap-1 text-sm font-medium">
          {destinations.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center rounded-lg px-3 hover:opacity-90"
              style={{
                color: 'var(--m3-on-surface-variant)',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Cmd+K Search Trigger */}
          <button
            type="button"
            onClick={onOpenCommand}
            aria-label={copy[lang].archive.publicSearchPlaceholder}
            className="flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg border px-2 text-xs font-medium cursor-pointer"
            style={{
              backgroundColor: 'var(--m3-surface-container)',
              borderColor: 'var(--m3-outline-variant)',
              color: 'var(--m3-on-surface-variant)',
            }}
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden md:inline">{t.search}</span>
          </button>

          {/* Segmented Language Pill */}
          <div
            className="flex items-center rounded-full border p-0.5 text-xs font-semibold"
            style={{
              backgroundColor: 'var(--m3-surface-container)',
              borderColor: 'var(--m3-outline-variant)',
            }}
          >
            {(['en', 'es'] as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-label={l === 'es' ? 'Español' : 'English'}
                aria-pressed={lang === l}
                className="min-h-11 min-w-11 rounded-full px-2.5 uppercase cursor-pointer"
                style={{
                  backgroundColor: lang === l ? 'var(--m3-primary)' : 'transparent',
                  color: lang === l ? 'var(--m3-on-primary)' : 'var(--m3-on-surface-variant)',
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <nav aria-label={lang === 'es' ? 'Secciones' : 'Sections'} className="mt-1 flex gap-1 overflow-x-auto rounded-xl border px-2 text-sm xl:hidden" style={{ backgroundColor: 'var(--m3-surface-container-low)', borderColor: 'var(--m3-outline-variant)' }}>
        {destinations.map((item) => <a key={item.href} href={item.href} className="flex min-h-11 shrink-0 items-center rounded-lg px-3 font-medium">{item.label}</a>)}
      </nav>
    </header>
  );
};
