import React, { useState } from 'react';
import { CheckCircle2, Cpu, GitBranch, ShieldCheck, UserCheck } from 'lucide-react';
import { agenticCases } from '../data/agentic-workflows';
import { copy, type Lang } from '../data/i18n';

interface AgenticPlaybookProps {
  lang: Lang;
}

export const AgenticPlaybook: React.FC<AgenticPlaybookProps> = ({ lang }) => {
  const [activeId, setActiveId] = useState(agenticCases[0].id);
  const t = copy[lang].playbook;
  const active = agenticCases.find((c) => c.id === activeId) ?? agenticCases[0];

  return (
    <section id="agentic" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mb-10 max-w-3xl">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold tracking-wider uppercase"
          style={{
            backgroundColor: 'var(--m3-primary-container)',
            color: 'var(--m3-on-primary-container)',
          }}
        >
          {t.eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          {t.title}
        </h2>
        <p className="mt-3 text-base sm:text-lg" style={{ color: 'var(--m3-on-surface-variant)' }}>
          {t.subtitle}
        </p>
      </div>

      {/* Selector Pills */}
      <div className="mb-8 flex flex-wrap gap-3">
        {agenticCases.map((item) => {
          const selected = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              aria-pressed={selected}
              className="m3-pill flex items-center gap-2.5 px-5 py-3 text-left text-sm font-semibold cursor-pointer"
              style={{
                backgroundColor: selected
                  ? 'var(--m3-primary)'
                  : 'var(--m3-surface-container-low)',
                color: selected ? 'var(--m3-on-primary)' : 'var(--m3-on-surface)',
              }}
            >
              <span>{item.title[lang]}</span>
            </button>
          );
        })}
      </div>

      <div
          key={active.id}
          aria-live="polite"
          className="m3-card p-6 sm:p-8"
          style={{ backgroundColor: 'var(--m3-surface-container-low)' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--m3-primary)' }}>
                <Cpu className="h-4 w-4" />
                {active.tool}
              </div>
              <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl">
                {active.title[lang]}
              </h3>
              <p className="mt-2 max-w-3xl text-sm sm:text-base" style={{ color: 'var(--m3-on-surface-variant)' }}>
                {active.tagline[lang]}
              </p>
            </div>
          </div>

          {/* Pipeline Visualizer */}
          <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {active.pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-2xl p-4"
                style={{
                  backgroundColor: 'var(--m3-surface-container-lowest)',
                }}
              >
                <span className="font-mono text-[11px] font-bold uppercase" style={{ color: 'var(--m3-primary)' }}>
                  0{idx + 1} · {typeof step.role === 'string' ? step.role : step.role[lang]}
                </span>
                <span className="mt-2 font-display text-sm font-bold">{typeof step.label === 'string' ? step.label : step.label[lang]}</span>
              </div>
            ))}
          </div>

          {/* Human vs Agent Split */}
          <div className="grid gap-6 md:grid-cols-2">
            <div
              className="rounded-3xl p-5"
              style={{
                backgroundColor: 'var(--m3-surface-container-lowest)',
              }}
            >
              <div className="mb-3 flex items-center gap-2 font-display text-base font-bold" style={{ color: 'var(--m3-primary)' }}>
                <UserCheck className="h-5 w-5" />
                {t.humanRole}
              </div>
              <ul className="space-y-2.5 text-sm" style={{ color: 'var(--m3-on-surface-variant)' }}>
                {active.humanDecisions[lang].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--m3-primary)' }} />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-3xl p-5"
              style={{
                backgroundColor: 'var(--m3-surface-container-lowest)',
              }}
            >
              <div className="mb-3 flex items-center gap-2 font-display text-base font-bold" style={{ color: 'var(--m3-secondary)' }}>
                <GitBranch className="h-5 w-5" />
                {t.agentRole}
              </div>
              <ul className="space-y-2.5 text-sm" style={{ color: 'var(--m3-on-surface-variant)' }}>
                {active.agentExecution[lang].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--m3-secondary)' }} />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {active.researchNotes && (
            <div className="mt-6 rounded-3xl p-5 sm:p-6" style={{ backgroundColor: 'var(--m3-primary-container)', color: 'var(--m3-on-primary-container)' }}>
              <h4 className="font-display text-lg font-bold sm:text-xl">{active.researchNotes.heading[lang]}</h4>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {active.researchNotes.items.map((item) => (
                  <div key={item.label.es} className="rounded-2xl p-4" style={{ backgroundColor: 'var(--m3-surface-container-lowest)', color: 'var(--m3-on-surface)' }}>
                    <p className="font-mono text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--m3-primary)' }}>{item.label[lang]}</p>
                    <p className="mt-2 text-sm leading-relaxed">{item.text[lang]}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed">{active.researchNotes.limitation[lang]}</p>
            </div>
          )}

          {/* Verification Loop Footer */}
          <div
            className="mt-6 flex flex-col gap-2 rounded-2xl p-4 sm:flex-row sm:items-center sm:gap-3"
            style={{
              backgroundColor: 'var(--m3-tertiary-container)',
              color: 'var(--m3-on-tertiary-container)',
            }}
          >
            <ShieldCheck className="h-5 w-5 shrink-0" />
            <div className="text-sm">
              <strong className="font-display">{t.verification}: </strong>
              <span>{active.verificationLoop[lang]}</span>
            </div>
          </div>
      </div>
    </section>
  );
};
