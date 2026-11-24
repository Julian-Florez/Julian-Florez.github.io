import React, { useState } from 'react';
import {
  AudioLines,
  FolderSync,
  MonitorSmartphone,
  PanelsTopLeft,
  Network,
  Orbit,
  Server,
  Smartphone,
  Check,
} from 'lucide-react';
import { ecosystemNodes } from '../data/projects';
import { copy, type Lang } from '../data/i18n';

interface EcosystemHubProps {
  lang: Lang;
}

const nodeIcons: Record<string, React.ReactNode> = {
  remotecast: <MonitorSmartphone className="h-5 w-5" />,
  extendcast: <PanelsTopLeft className="h-5 w-5" />,
  vrcast: <Orbit className="h-5 w-5" />,
  sounddrift: <AudioLines className="h-5 w-5" />,
  share: <FolderSync className="h-5 w-5" />,
  agi: <Orbit className="h-5 w-5" />,
  'tailscale-nixos': <Network className="h-5 w-5" />,
};

export const EcosystemHub: React.FC<EcosystemHubProps> = ({ lang }) => {
  const [selectedId, setSelectedId] = useState('tailscale-nixos');
  const t = copy[lang].ecosystem;
  const orderedNodes = [
    ...ecosystemNodes.filter((node) => node.id === 'tailscale-nixos'),
    ...ecosystemNodes.filter((node) => node.id !== 'tailscale-nixos'),
  ];
  const active = ecosystemNodes.find((n) => n.id === selectedId) ?? orderedNodes[0];

  return (
    <section id="ecosystem" className="network-section mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mb-10 max-w-3xl">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold tracking-wider uppercase"
          style={{
            backgroundColor: 'var(--m3-secondary-container)',
            color: 'var(--m3-on-secondary-container)',
          }}
        >
          <Network className="h-3.5 w-3.5" />
          {t.eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          {t.title}
        </h2>
        <p className="mt-3 text-base sm:text-lg" style={{ color: 'var(--m3-on-surface-variant)' }}>
          {t.subtitle}
        </p>
      </div>

      {/* Bridge Header Visual */}
      <div
        className="network-map mb-8 grid items-center gap-4 rounded-3xl p-5 sm:grid-cols-[1fr_auto_1fr] sm:p-7"
        style={{
          backgroundColor: 'var(--m3-surface-container)',
        }}
      >
        <div className="network-endpoint flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{ backgroundColor: 'var(--m3-primary-container)', color: 'var(--m3-on-primary-container)' }}
          >
            <Server className="h-6 w-6" />
          </div>
          <div>
            <div className="font-display font-bold">NixOS 26.11 Host</div>
            <div className="font-mono text-xs" style={{ color: 'var(--m3-on-surface-variant)' }}>
              Hyprland · Quickshell · Intel + RTX 2050
            </div>
          </div>
        </div>

        <div className="network-route flex flex-col items-center gap-2 px-2 text-center font-mono text-xs font-semibold"
          style={{ color: 'var(--m3-primary)' }}>
          <span className="network-signal" aria-hidden="true"><span /></span>
          <span>LAN · USB · Tailscale</span>
        </div>

        <div className="network-endpoint flex items-center gap-3 sm:justify-end">
          <div className="sm:text-right">
            <div className="font-display font-bold">Google Pixel 9a</div>
            <div className="font-mono text-xs" style={{ color: 'var(--m3-on-surface-variant)' }}>
              120Hz OLED · 3DoF Sensors · Android
            </div>
          </div>
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{ backgroundColor: 'var(--m3-tertiary-container)', color: 'var(--m3-on-tertiary-container)' }}
          >
            <Smartphone className="h-6 w-6" />
          </div>
        </div>
      </div>

      <p className="mb-4 text-sm font-medium" style={{ color: 'var(--m3-on-surface-variant)' }}>
        {t.selectPrompt}
      </p>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left: Node Selector */}
        <div className="flex flex-col gap-3 lg:col-span-5">
          {orderedNodes.map((node) => {
            const isSelected = node.id === selectedId;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedId(node.id)}
                aria-pressed={isSelected}
                className="m3-card network-option flex items-start gap-4 p-4 text-left cursor-pointer"
                style={{
                  backgroundColor: isSelected
                    ? 'var(--m3-primary-container)'
                    : 'var(--m3-surface-container-lowest)',
                  color: isSelected ? 'var(--m3-on-primary-container)' : 'var(--m3-on-surface)',
                }}
              >
                <div
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: isSelected
                      ? 'var(--m3-primary)'
                      : 'var(--m3-surface-container)',
                    color: isSelected ? 'var(--m3-on-primary)' : 'var(--m3-primary)',
                  }}
                >
                  {nodeIcons[node.id]}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-base font-bold">{node.name}</span>
                  </div>
                  <span
                    className="mt-1 inline-block rounded-full px-2.5 py-0.5 font-mono text-[11px] font-semibold"
                    style={{
                      backgroundColor: isSelected
                        ? 'color-mix(in srgb, var(--m3-on-primary-container) 12%, transparent)'
                        : 'var(--m3-surface-container-high)',
                    }}
                  >
                    {node.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Inspector Panel */}
        <div className="lg:col-span-7">
            <div
              key={active.id}
              aria-live="polite"
              className="m3-card detail-enter h-full p-6 sm:p-8"
              style={{ backgroundColor: 'var(--m3-surface-container-low)' }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold uppercase" style={{ color: 'var(--m3-primary)' }}>
                  {active.repo}
                </span>
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: 'var(--m3-secondary-container)',
                    color: 'var(--m3-on-secondary-container)',
                  }}
                >
                  {active.badge}
                </span>
              </div>

              <h3 className="mt-2 font-display text-2xl font-extrabold">{active.name}</h3>
              <p className="mt-3 text-sm sm:text-base" style={{ color: 'var(--m3-on-surface-variant)' }}>
                {active.summary[lang]}
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <div className="mb-2 font-mono text-xs font-bold uppercase" style={{ color: 'var(--m3-on-surface-variant)' }}>
                    {t.protocolLabel}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {active.protocols.map((p) => (
                      <span
                        key={p}
                        className="rounded-xl px-2.5 py-1 font-mono text-xs"
                        style={{
                          backgroundColor: 'var(--m3-surface-container-lowest)',
                          border: '1px solid var(--m3-outline-variant)',
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-2 font-mono text-xs font-bold uppercase" style={{ color: 'var(--m3-on-surface-variant)' }}>
                    {t.stackLabel}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {active.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: 'var(--m3-primary-container)',
                          color: 'var(--m3-on-primary-container)',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2.5 font-mono text-xs font-bold uppercase" style={{ color: 'var(--m3-on-surface-variant)' }}>
                  {t.highlightsLabel}
                </div>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--m3-on-surface-variant)' }}>
                  {active.highlights[lang].map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--m3-primary)' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
