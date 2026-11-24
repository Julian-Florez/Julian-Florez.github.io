import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { copy, type Lang } from '../data/i18n';

interface TopAppBarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({ lang, setLang }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang].nav;
  const destinations = [
    { href: '#cases', label: t.projects },
    { href: '#agentic', label: t.agentic },
    { href: '#ecosystem', label: t.ecosystem },
    { href: '#arcade', label: t.arcade },
    { href: '#archive', label: t.archive },
    { href: '#contact', label: t.contact },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const languageButtons = (['en', 'es'] as Lang[]).map((option) => (
    <button
      key={option}
      type="button"
      onClick={() => { setLang(option); setMenuOpen(false); }}
      aria-label={option === 'es' ? 'Español' : 'English'}
      aria-pressed={lang === option}
      className="min-h-11 min-w-11 rounded-full px-2.5 text-xs font-semibold uppercase cursor-pointer"
      style={{
        backgroundColor: lang === option ? 'var(--m3-primary)' : 'transparent',
        color: lang === option ? 'var(--m3-on-primary)' : 'var(--m3-on-surface-variant)',
      }}
    >
      {option}
    </button>
  ));

  return (
    <header className="sticky top-0 z-40 mx-auto max-w-7xl px-3 pt-2 sm:px-6">
      <nav aria-label={lang === 'es' ? 'Principal' : 'Primary'} className="relative flex items-center justify-between gap-2 rounded-2xl px-3 py-2 shadow-sm sm:px-4" style={{ backgroundColor: 'var(--m3-surface-container-low)' }}>
        <a href="#main" onClick={() => setMenuOpen(false)} className="flex min-h-11 shrink-0 items-center gap-2 font-display font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm" style={{ backgroundColor: 'var(--m3-primary)', color: 'var(--m3-on-primary)' }}>JF</span>
          <span className="hidden text-base sm:inline">Julián Flórez</span>
        </a>

        <div className="hidden xl:flex items-center gap-1 text-sm font-medium">
          {destinations.map((item) => <a key={item.href} href={item.href} className="flex min-h-11 items-center rounded-lg px-3" style={{ color: 'var(--m3-on-surface-variant)' }}>{item.label}</a>)}
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center rounded-full p-0.5 xl:flex" style={{ backgroundColor: 'var(--m3-surface-container)' }}>{languageButtons}</div>
          <button type="button" aria-label={lang === 'es' ? 'Secciones' : 'Sections'} aria-expanded={menuOpen} aria-controls="mobile-sections" onClick={() => setMenuOpen((open) => !open)} className="flex min-h-11 min-w-11 items-center justify-center rounded-xl cursor-pointer xl:hidden" style={{ backgroundColor: 'var(--m3-surface-container)', color: 'var(--m3-on-surface)' }}>
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <div id="mobile-sections" className="absolute left-0 right-0 top-[calc(100%+6px)] rounded-2xl p-3 shadow-xl xl:hidden" style={{ backgroundColor: 'var(--m3-surface-container-high)', color: 'var(--m3-on-surface)' }}>
            <p className="px-2 pb-2 text-xs font-semibold">{lang === 'es' ? 'Ir a' : 'Go to'}</p>
            <div className="grid grid-cols-2 gap-1">
              {destinations.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold" style={{ backgroundColor: 'var(--m3-surface-container-lowest)' }}>{item.label}</a>)}
            </div>
            <div className="mt-3 flex items-center justify-between px-2">
              <span className="text-xs font-medium">{lang === 'es' ? 'Idioma' : 'Language'}</span>
              <div className="flex rounded-full p-0.5" style={{ backgroundColor: 'var(--m3-surface-container-lowest)' }}>{languageButtons}</div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
