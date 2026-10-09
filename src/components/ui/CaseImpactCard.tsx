import { Target, Search, ShieldAlert, TrendingUp } from 'lucide-react';
import type { CaseStudy } from '../../data/cases';

type CaseImpactCardProps = {
  caseItem: CaseStudy;
};

const pillars = [
  {
    key: 'desafio',
    label: 'Desafio de Negócio',
    icon: Target,
  },
  {
    key: 'causa',
    label: 'Causa Raiz / Reframing',
    icon: Search,
  },
  {
    key: 'restricao',
    label: 'Restrição Regulatória ou Técnica',
    icon: ShieldAlert,
  },
  {
    key: 'resultado',
    label: 'Resultado / Impacto Medido',
    icon: TrendingUp,
  },
] as const;

export function CaseImpactCard({ caseItem }: CaseImpactCardProps) {
  const copy = {
    desafio: caseItem.problem.briefing,
    causa: caseItem.problem.reframed,
    restricao: caseItem.constraint,
    resultado: caseItem.highlightMetric,
  };

  return (
    <section
      aria-labelledby="leitura-rapida"
      className="rounded-md border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 md:p-8"
    >
      <h2
        id="leitura-rapida"
        className="mb-6 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400"
      >
        Leitura rápida
      </h2>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          const isResult = pillar.key === 'resultado';

          return (
            <div key={pillar.key} className="min-w-0">
              <h3 className="mb-2 flex items-start gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
                <span>{pillar.label}</span>
              </h3>
              <p
                className={
                  isResult
                    ? 'font-mono text-sm font-semibold leading-snug text-emerald-600 dark:text-emerald-400'
                    : 'line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400'
                }
              >
                {copy[pillar.key]}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
