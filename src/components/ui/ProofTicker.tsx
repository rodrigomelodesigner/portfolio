import { ShieldCheck, TrendingUp, Clock } from 'lucide-react';

export interface ProofItem {
  icon: React.ReactNode;
  label: string;
  metric: string;
  detail: string;
}

const DEFAULT_PROOF_ITEMS: ProofItem[] = [
  {
    icon: <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />,
    label: "Sportsbook",
    metric: "470 / rodada",
    detail: "Média de 470 apostas por rodada com cards de atleta, contra 72 com regulamento em texto.",
  },
  {
    icon: <Clock className="w-4 h-4 text-zinc-900 dark:text-zinc-100" aria-hidden="true" />,
    label: "Bolão da Copa",
    metric: "9.035 inscritos",
    detail: "9.035 participantes em 25 dias de torneio, sem verba de mídia paga.",
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-zinc-900 dark:text-zinc-100" aria-hidden="true" />,
    label: "Jogo Responsável",
    metric: "3 etapas",
    detail: "Pausa e autoexclusão a 3 etapas do painel de conta, sem submenu obstrutivo.",
  },
];

export const ProofTicker: React.FC<{ items?: ProofItem[]; className?: string }> = ({
  items = DEFAULT_PROOF_ITEMS,
  className = '',
}) => {
  return (
    <section
      aria-label="Indicadores de impacto e validação regulatória"
      className={`border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 md:p-6 bg-zinc-50/50 dark:bg-zinc-900/30 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 divide-y md:divide-y-0 divide-zinc-200 dark:divide-zinc-800">
        {items.map((item, idx) => (
          <div key={idx} className={`pt-3 sm:pt-0 ${idx > 0 ? 'sm:border-l sm:border-zinc-200 dark:sm:border-zinc-800 sm:pl-4' : ''}`}>
            <div className="flex items-center gap-2 mb-1.5 text-xs uppercase tracking-wider font-semibold text-zinc-500">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <div className="text-xl md:text-2xl font-bold font-mono tracking-tight text-zinc-900 dark:text-zinc-100 mb-1">
              {item.metric}
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
