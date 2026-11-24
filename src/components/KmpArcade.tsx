import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, Gamepad2, Play, X } from 'lucide-react';
import { kmpGames } from '../data/projects';
import { copy, type Lang } from '../data/i18n';
import { useModalKeyboard } from './useModalKeyboard';

interface KmpArcadeProps {
  lang: Lang;
}

export const KmpArcade: React.FC<KmpArcadeProps> = ({ lang }) => {
  const [activeGame, setActiveGame] = useState<(typeof kmpGames)[number] | null>(null);
  const [gameStatus, setGameStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const dialogRef = useModalKeyboard(Boolean(activeGame), () => setActiveGame(null));
  const t = copy[lang].arcade;

  useEffect(() => {
    if (!activeGame || gameStatus !== 'loading') return;
    const timeout = window.setTimeout(() => setGameStatus('error'), 12000);
    return () => window.clearTimeout(timeout);
  }, [activeGame, gameStatus]);

  useEffect(() => {
    if (!activeGame) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [activeGame]);

  return (
    <section id="arcade" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-24">
      <div className="mb-6 max-w-3xl lg:mb-10">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold tracking-wider uppercase"
          style={{
            backgroundColor: 'var(--m3-primary-container)',
            color: 'var(--m3-on-primary-container)',
          }}
        >
          <Gamepad2 className="h-3.5 w-3.5" />
          {t.eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          {t.title}
        </h2>
        <p className="mt-3 text-base sm:text-lg" style={{ color: 'var(--m3-on-surface-variant)' }}>
          {t.subtitle}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {kmpGames.map((game) => (
          <div
            key={game.id}
            className="m3-card flex flex-col justify-between overflow-hidden p-4 lg:p-5"
            style={{ backgroundColor: 'var(--m3-surface-container-low)' }}
          >
            <div>
              <div className="game-preview flex h-28 items-center justify-center overflow-hidden rounded-2xl lg:h-44" style={{ backgroundColor: 'var(--m3-primary-container)', color: 'var(--m3-on-primary-container)' }} aria-hidden="true">
                {game.id === 'tetris' && <div className="game-tetris"><i /><i /><i /><i /></div>}
                {game.id === 'snake' && <div className="game-snake"><i /><i /><i /><i /><b /></div>}
                {game.id === '2048' && <div className="game-2048"><i>2</i><i>4</i><i>8</i><i>16</i></div>}
              </div>
              <h3 className="mt-4 font-display text-xl font-extrabold">{game.title}</h3>
              <p className="mt-2 hidden text-sm leading-relaxed lg:block" style={{ color: 'var(--m3-on-surface-variant)' }}>
                {game.desc[lang]}
              </p>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <button
                type="button"
                onClick={() => { setGameStatus('loading'); setActiveGame(game); }}
                className="m3-pill flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold cursor-pointer"
                style={{
                  backgroundColor: 'var(--m3-primary)',
                  color: 'var(--m3-on-primary)',
                }}
              >
                <Play className="h-4 w-4 fill-current" />
                {t.playNow}
              </button>
              <a
                href={game.url}
                target="_blank"
                rel="noreferrer"
                title={t.openNewTab}
                aria-label={`${t.openNewTab}: ${game.title}`}
                className="m3-pill flex h-11 w-11 items-center justify-center border"
                style={{
                  borderColor: 'var(--m3-outline-variant)',
                  color: 'var(--m3-on-surface)',
                }}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {activeGame && typeof document !== 'undefined' && createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-0 sm:p-3"
            onClick={() => setActiveGame(null)}
          >
            <div
              ref={dialogRef}
              className="flex h-[100dvh] w-full flex-col overflow-hidden sm:h-[calc(100dvh-1.5rem)] sm:max-w-[1400px] sm:rounded-3xl sm:shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label={activeGame.title}
              tabIndex={-1}
              style={{
                backgroundColor: 'var(--m3-surface-container-lowest)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="flex min-h-14 shrink-0 items-center justify-between gap-2 px-3 py-1 sm:px-5"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <Gamepad2 className="h-5 w-5 shrink-0" style={{ color: 'var(--m3-primary)' }} />
                  <span className="truncate font-display text-base font-bold sm:text-lg">{activeGame.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={activeGame.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${t.openNewTab}: ${activeGame.title}`}
                    className="flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-xl px-2 text-xs font-semibold sm:px-3"
                    style={{ backgroundColor: 'var(--m3-surface-container)', color: 'var(--m3-on-surface)' }}
                  >
                    <span className="hidden sm:inline">{t.openNewTab}</span><ExternalLink className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveGame(null)}
                    aria-label={lang === 'es' ? 'Cerrar juego' : 'Close game'}
                    className="flex h-11 w-11 items-center justify-center rounded-xl cursor-pointer"
                    style={{ backgroundColor: 'var(--m3-surface-container)', color: 'var(--m3-on-surface)' }}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="relative min-h-0 flex-1 bg-black">
                <iframe
                  src={activeGame.url}
                  title={activeGame.title}
                  onLoad={() => setGameStatus('ready')}
                  onError={() => setGameStatus('error')}
                  className="absolute inset-0 h-full w-full border-0 bg-black"
                  allowFullScreen
                />
                {gameStatus !== 'ready' && (
                  <div role="status" className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center" style={{ backgroundColor: 'var(--m3-surface-container-lowest)', color: 'var(--m3-on-surface)' }}>
                    <p>{gameStatus === 'loading' ? t.loading : t.loadError}</p>
                    {gameStatus === 'error' && <a className="m3-pill inline-flex min-h-11 items-center border px-4" href={activeGame.url} target="_blank" rel="noreferrer" style={{ borderColor: 'var(--m3-outline)' }}>{t.openNewTab}</a>}
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
      )}
    </section>
  );
};
