import React, { useEffect, useState } from 'react';
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

  return (
    <section id="arcade" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mb-10 max-w-3xl">
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

      <div className="grid gap-6 md:grid-cols-3">
        {kmpGames.map((game) => (
          <div
            key={game.id}
            className="m3-card flex flex-col justify-between overflow-hidden p-5"
            style={{ backgroundColor: 'var(--m3-surface-container-low)' }}
          >
            <div>
              <div className="game-preview flex h-44 items-center justify-center overflow-hidden rounded-2xl" style={{ backgroundColor: 'var(--m3-primary-container)', color: 'var(--m3-on-primary-container)' }} aria-hidden="true">
                {game.id === 'tetris' && <div className="game-tetris"><i /><i /><i /><i /></div>}
                {game.id === 'snake' && <div className="game-snake"><i /><i /><i /><i /><b /></div>}
                {game.id === '2048' && <div className="game-2048"><i>2</i><i>4</i><i>8</i><i>16</i></div>}
              </div>
              <h3 className="mt-4 font-display text-xl font-extrabold">{game.title}</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--m3-on-surface-variant)' }}>
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

      {activeGame && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
            onClick={() => setActiveGame(null)}
          >
            <div
              ref={dialogRef}
              className="flex h-[84vh] w-full max-w-4xl flex-col overflow-hidden rounded-[32px] border shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label={activeGame.title}
              tabIndex={-1}
              style={{
                backgroundColor: 'var(--m3-surface-container-lowest)',
                borderColor: 'var(--m3-outline-variant)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-3 sm:px-6 sm:py-4"
                style={{ borderColor: 'var(--m3-outline-variant)' }}
              >
                <div className="flex items-center gap-3">
                  <Gamepad2 className="h-5 w-5" style={{ color: 'var(--m3-primary)' }} />
                  <span className="font-display text-lg font-bold">{activeGame.title}</span>
                  <span
                    className="rounded-full px-2.5 py-0.5 font-mono text-[11px]"
                    style={{
                      backgroundColor: 'var(--m3-primary-container)',
                      color: 'var(--m3-on-primary-container)',
                    }}
                  >
                    KMP Web
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={activeGame.url}
                    target="_blank"
                    rel="noreferrer"
                    className="m3-pill flex min-h-11 items-center gap-1.5 border px-3 py-1.5 text-xs font-semibold"
                    style={{ borderColor: 'var(--m3-outline-variant)' }}
                  >
                    {t.openNewTab} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveGame(null)}
                    aria-label={lang === 'es' ? 'Cerrar juego' : 'Close game'}
                    className="m3-pill flex h-11 w-11 items-center justify-center border cursor-pointer"
                    style={{ borderColor: 'var(--m3-outline-variant)' }}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="relative min-h-0 flex-1">
                <iframe
                  src={activeGame.url}
                  title={activeGame.title}
                  onLoad={() => setGameStatus('ready')}
                  onError={() => setGameStatus('error')}
                  className="absolute inset-0 h-full w-full border-0 bg-white"
                />
                {gameStatus !== 'ready' && (
                  <div role="status" className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center" style={{ backgroundColor: 'var(--m3-surface-container-lowest)', color: 'var(--m3-on-surface)' }}>
                    <p>{gameStatus === 'loading' ? t.loading : t.loadError}</p>
                    {gameStatus === 'error' && <a className="m3-pill inline-flex min-h-11 items-center border px-4" href={activeGame.url} target="_blank" rel="noreferrer" style={{ borderColor: 'var(--m3-outline)' }}>{t.openNewTab}</a>}
                  </div>
                )}
              </div>
            </div>
          </div>
      )}
    </section>
  );
};
