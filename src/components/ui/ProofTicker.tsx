import { ShieldCheck, TrendingUp, Wallet } from 'lucide-react';

export interface ProofItem {
  icon: React.ReactNode;
  label: string;
  metric: string;
  detail: string;
}

const DEFAULT_PROOF_ITEMS: ProofItem[] = [
  {
    icon: <Wallet className="w-4 h-4 text-zinc-900 dark:text-zinc-100" aria-hidden="true" />,
    label: 'Extrato',
    metric: '36 meses',
    detail:
      'Extrato com Pix, apostas e resultado líquido por modalidade. Homologado em design; meta −40% tickets N1.',
  },
  {
    icon: (
      <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
    ),
    label: 'Sportsbook',
    metric: 'Pico 827',
    detail:
      'Cards no lugar do regulamento: pico 827 apostas na R3; média 470; queda para 221 na R7.',
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-zinc-900 dark:text-zinc-100" aria-hidden="true" />,
    label: 'Jogo responsável',
    metric: 'Staging',
    detail:
      'Pausa e encerramento na mesma página, em 3 etapas. Enviado para staging em 28/07/2025.',
  },
];

export const ProofTicker: React.FC<{ items?: ProofItem[]; className?: string }> = ({
  items = DEFAULT_PROOF_ITEMS,
  className = '',
}) => {
  return (
    <section
      aria-label="Indicadores de impacto"
      className={`border border-zinc-200 dark:border-zinc-800 rounded p-4 md:p-6 bg-zinc-50/50 dark:bg-zinc-900/30 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 divide-y md:divide-y-0 divide-zinc-200 dark:divide-zinc-800">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`pt-3 sm:pt-0 ${
              idx > 0 ? 'sm:border-l sm:border-zinc-200 dark:sm:border-zinc-800 sm:pl-4' : ''
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5 text-xs uppercase tracking-wider font-semibold text-zinc-500">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <div className="text-xl md:text-2xl font-bold font-mono tracking-tight text-zinc-900 dark:text-zinc-100 mb-1">
              {item.metric}
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
