import React from 'react';
import { Target, Search, ShieldAlert, TrendingUp } from 'lucide-react';
import { CaseStudy } from '../../data/cases';

export interface CaseImpactCardProps {
  caseItem: CaseStudy;
}

export const CaseImpactCard: React.FC<CaseImpactCardProps> = ({ caseItem }) => {
  return (
    <section
      aria-label="Ficha de Impacto e Síntese Executiva do Caso"
      className="p-5 md:p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/70 dark:bg-zinc-900/40 my-8 space-y-4"
    >
      <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800 pb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
          <span>Resumo Executivo (Leitura Rápida)</span>
        </h2>
        <span className="text-xs font-mono text-zinc-500">Tempo estimado: 45s</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-1">
        {/* Pilar 1: Desafio de Negócio */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            <Target className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
            <span>Desafio de Negócio</span>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
            {caseItem.problem.briefing}
          </p>
        </div>

        {/* Pilar 2: Reframing / Causa Raiz */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            <Search className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
            <span>Diagnóstico do Design</span>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
            {caseItem.problem.reframed}
          </p>
        </div>

        {/* Pilar 3: Restrição Operacional / Regulatória */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            <ShieldAlert className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
            <span>Contexto Regulatório</span>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Operação sob regras da SPA/MF. Zero dark patterns; compliance validado.
          </p>
        </div>

        {/* Pilar 4: Impacto Medido */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            <span>Resultado Auditado</span>
          </div>
          <div className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400 leading-snug">
            {caseItem.highlightMetric}
          </div>
        </div>
      </div>
    </section>
  );
};
