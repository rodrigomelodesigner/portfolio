import { useState } from 'react';
import { Check, Flame, Zap, MousePointerClick } from 'lucide-react';

const TOKENS = [
  { name: 'surface/card', value: 'zinc-50 / zinc-950' },
  { name: 'action/primary', value: 'zinc-900 · 44px min' },
  { name: 'odds/boost', value: 'emerald-600 AA' },
  { name: 'space/scale', value: '4px grid' },
];

export function ArtilheiroCardAnatomy() {
  const [selectedOdd, setSelectedOdd] = useState(false);

  const callouts = [
    {
      id: 1,
      title: 'Atalho para o mercado',
      desc: 'O card concentra atleta, confronto e odd no mesmo bloco, no espaço da Home onde antes havia só o regulamento.',
      tag: 'Fricção',
    },
    {
      id: 2,
      title: 'Odd regular e turbinada',
      desc: 'Contraste entre odd de mercado (1.90) e turbinada (2.85). Também é variável confundidora: o volume pode vir do card, da odd, ou dos dois.',
      tag: 'Trade-off',
    },
    {
      id: 3,
      title: 'Regra em uma linha',
      desc: 'R$ 10 em aposta grátis por gol marcado — no lugar de ~15 linhas de regulamento.',
      tag: 'Copy',
    },
    {
      id: 4,
      title: 'Alvo de toque',
      desc: 'Botão com altura mínima de 44px, contraste AA e foco por teclado neste simulador.',
      tag: 'WCAG 2.2 AA',
    },
  ];

  return (
    <div className="space-y-8 my-8 p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30">
      <div>
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
          <Zap className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" aria-hidden="true" />
          Componente e tokens
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          Card de artilheiro
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed max-w-2xl">
          Simulador da unidade visual que substituiu o texto na Home. Na R2: 590 apostas; pico na
          R3: 827; na R7: 221.
        </p>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-2"
        aria-label="Tokens usados no componente"
      >
        {TOKENS.map((token) => (
          <div
            key={token.name}
            className="p-3 border border-zinc-200 dark:border-zinc-800 rounded bg-white dark:bg-zinc-950"
          >
            <span className="font-mono text-[10px] font-bold text-zinc-500 block">{token.name}</span>
            <span className="text-xs text-zinc-800 dark:text-zinc-200 mt-1 block">{token.value}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-start">
        <div className="relative mx-auto w-full max-w-[340px]">
          <div className="rounded border-2 border-zinc-900 dark:border-zinc-700 bg-white dark:bg-zinc-950 overflow-hidden text-zinc-900 dark:text-zinc-100">
            <div className="bg-zinc-900 text-white px-4 py-2.5 flex items-center justify-between text-xs font-semibold tracking-wider">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Flame className="w-3.5 h-3.5 fill-amber-400" aria-hidden="true" />
                ARTILHEIRO DA CASA
              </span>
              <span className="text-[10px] text-zinc-400 uppercase font-mono">RODADA 2</span>
            </div>

            <div className="relative h-44 bg-zinc-900 flex items-end justify-between p-4 overflow-hidden">
              <img
                src="/images/02_artilheiros_casa/artilheiro_card_pedro_flamengo.png"
                alt="Foto de atleta usada no card de artilheiro (exemplo Pedro)"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-85"
              />
              <div className="absolute inset-0 bg-zinc-950/70" aria-hidden="true" />

              <div className="relative z-10 space-y-0.5">
                <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-rose-600 text-white">
                  FLAMENGO
                </span>
                <h4 className="text-lg font-black text-white tracking-tight">Pedro</h4>
                <p className="text-[11px] text-zinc-300">vs. São Paulo · Maracanã</p>
              </div>

              <div className="relative z-10 text-right">
                <span className="block text-[10px] uppercase text-zinc-400 font-medium">
                  Turbinada
                </span>
                <span className="text-2xl font-black text-emerald-400 font-mono">2.85</span>
              </div>
            </div>

            <div className="p-4 space-y-3 bg-white dark:bg-zinc-950">
              <div className="flex items-center justify-between p-2 rounded bg-zinc-100 dark:bg-zinc-900 text-xs">
                <span className="text-zinc-500">Odd de mercado</span>
                <div className="flex items-center gap-2">
                  <span className="line-through text-zinc-400 font-mono">1.90</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                    2.85 (+50%)
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-[11px] text-zinc-700 dark:text-zinc-300 flex items-start gap-2 leading-relaxed">
                <Zap
                  className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>
                  <strong>Bônus:</strong> R$ 10 em aposta grátis por gol marcado (aposta mínima R$
                  10).
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedOdd(!selectedOdd)}
                className={`w-full py-3 px-4 rounded font-bold text-xs uppercase tracking-wider transition min-h-[44px] flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-50 ${
                  selectedOdd
                    ? 'bg-emerald-600 text-white'
                    : 'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200'
                }`}
              >
                {selectedOdd ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" aria-hidden="true" />
                    Selecionado neste simulador
                  </>
                ) : (
                  <>
                    <MousePointerClick className="w-4 h-4" aria-hidden="true" />
                    Apostar R$ 10 (odd 2.85)
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            Decisões no componente
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {callouts.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/40"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-400">0{item.id}</span>
                </div>
                <h4 className="font-bold text-xs text-zinc-900 dark:text-zinc-100 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 space-y-2 mt-4 text-xs">
            <span className="font-bold uppercase tracking-wider text-zinc-500 text-[11px] block">
              Antes × depois (e a queda)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded bg-zinc-100 dark:bg-zinc-800/60">
                <span className="font-semibold text-rose-600 dark:text-rose-400 block mb-1">
                  R1 · Texto
                </span>
                <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100 block">
                  72 apostas
                </span>
              </div>
              <div className="p-3 rounded bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40">
                <span className="font-semibold text-emerald-700 dark:text-emerald-400 block mb-1">
                  R3 · Pico
                </span>
                <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 block">
                  827 apostas
                </span>
              </div>
              <div className="p-3 rounded bg-zinc-100 dark:bg-zinc-800/60">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                  R7 · Normalização
                </span>
                <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100 block">
                  221 apostas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
