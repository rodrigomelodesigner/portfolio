import { useState } from 'react';
import { Check, Flame, Zap, MousePointerClick } from 'lucide-react';

export function ArtilheiroCardAnatomy() {
  const [selectedOdd, setSelectedOdd] = useState(false);
  const [activeCallout, setActiveCallout] = useState<number | null>(null);

  const callouts = [
    {
      id: 1,
      title: "Atalho Transacional Direto",
      desc: "Um toque no card injeta a aposta diretamente no boletim (betslip), eliminando 4 níveis de navegação na árvore de esportes.",
      tag: "Redução de Fricção"
    },
    {
      id: 2,
      title: "Ancoragem Visual de Odds",
      desc: "Contraste explícito entre a odd regular (1.90) e a turbinada (2.85), evidenciando a vantagem sem textos promocionais prolixos.",
      tag: "Arquitetura de Decisão"
    },
    {
      id: 3,
      title: "Microcopy de Recompensa em 1 Linha",
      desc: "As 15 linhas de regulamento denso foram sintetizadas em uma regra factual: R$ 10 de freebet a cada gol marcado.",
      tag: "Ergonomia Cognitiva"
    },
    {
      id: 4,
      title: "Touch Target & Acessibilidade WCAG",
      desc: "Botão de ação com 48px de altura, contraste AAA no texto e anel de foco navegável por teclado.",
      tag: "Acessibilidade 2.2 AA"
    }
  ];

  return (
    <div className="space-y-8 my-8 p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/30">
      <div>
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
          <Zap className="w-3.5 h-3.5 text-amber-500" />
          Dissecação Anatômica de Interface
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          Anatomia do Componente: Card de Artilheiro
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed max-w-2xl">
          Como a substituição de 15 linhas de texto corrido por uma unidade visual autocontida transformou a conversão da promoção na Home (72 → 590 apostas na rodada de estreia do card).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-start">
        {/* The Interactive Production Card */}
        <div className="relative mx-auto w-full max-w-[340px]">
          {/* Card Frame */}
          <div className="rounded-xl border-2 border-zinc-900 dark:border-zinc-700 bg-white dark:bg-zinc-950 shadow-xl overflow-hidden text-zinc-900 dark:text-zinc-100 transition-all duration-200">
            {/* Card Header */}
            <div className="bg-zinc-900 text-white px-4 py-2.5 flex items-center justify-between text-xs font-semibold tracking-wider">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
                ARTILHEIRO DA CASA
              </span>
              <span className="text-[10px] text-zinc-400 uppercase font-mono">RODADA 2</span>
            </div>

            {/* Athlete Photo & Match Info Area */}
            <div className="relative h-44 bg-gradient-to-b from-zinc-800 to-zinc-950 flex items-end justify-between p-4 overflow-hidden">
              <img
                src="/images/02_artilheiros_casa/artilheiro_card_pedro_flamengo.png"
                alt="Pedro (Flamengo)"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              
              <div className="relative z-10 space-y-0.5">
                <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-rose-600 text-white">
                  FLAMENGO
                </span>
                <h4 className="text-lg font-black text-white tracking-tight">Pedro</h4>
                <p className="text-[11px] text-zinc-300">vs. São Paulo · Maracanã</p>
              </div>

              <div className="relative z-10 text-right">
                <span className="block text-[10px] uppercase text-zinc-400 font-medium">Turbinada</span>
                <span className="text-2xl font-black text-emerald-400 font-mono">2.85</span>
              </div>
            </div>

            {/* Card Body & Mechanics */}
            <div className="p-4 space-y-3 bg-white dark:bg-zinc-950">
              {/* Odds Comparison Pill */}
              <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-xs">
                <span className="text-zinc-500">Odd de Mercado:</span>
                <div className="flex items-center gap-2">
                  <span className="line-through text-zinc-400 font-mono">1.90</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">2.85 (+50%)</span>
                </div>
              </div>

              {/* Freebet Microcopy Rule */}
              <div className="p-2.5 rounded-lg border border-amber-200 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 text-[11px] text-amber-900 dark:text-amber-200 flex items-start gap-2 leading-relaxed">
                <Zap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Bônus de Rodada:</strong> Receba <strong>R$ 10 em aposta grátis</strong> para cada gol marcado na partida.
                </span>
              </div>

              {/* Direct Slip CTA */}
              <button
                type="button"
                onClick={() => setSelectedOdd(!selectedOdd)}
                className={`w-full py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition min-h-[44px] flex items-center justify-center gap-2 ${
                  selectedOdd
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200'
                }`}
              >
                {selectedOdd ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    Adicionado ao Boletim!
                  </>
                ) : (
                  <>
                    <MousePointerClick className="w-4 h-4" />
                    Apostar R$ 10 (Odd 2.85)
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Anatomical Callouts */}
        <div className="space-y-4">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            Decisões de Design Mapeadas no Componente
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {callouts.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCallout(item.id)}
                onMouseLeave={() => setActiveCallout(null)}
                className={`p-4 rounded-xl border transition-all ${
                  activeCallout === item.id
                    ? 'border-zinc-900 dark:border-zinc-100 bg-white dark:bg-zinc-900 shadow-md scale-[1.02]'
                    : 'border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/40'
                }`}
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

          {/* Before vs After Summary */}
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 space-y-2 mt-4 text-xs">
            <span className="font-bold uppercase tracking-wider text-zinc-500 text-[11px] block">
              Comparativo Empírico: Antes vs. Depois
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800/60">
                <span className="font-semibold text-rose-600 dark:text-rose-400 block mb-1">
                  Antes · Rodada 1 (MVP Textual)
                </span>
                <p className="text-zinc-600 dark:text-zinc-400 text-[11px] leading-relaxed">
                  15 linhas de regras corridas em banner. Exigia buscar o jogo manualmente na navegação esportiva.
                </p>
                <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100 block mt-2">
                  72 apostas · R$ 821 stake
                </span>
              </div>
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40">
                <span className="font-semibold text-emerald-700 dark:text-emerald-400 block mb-1">
                  Depois · Rodadas 2 a 7 (Cards de Atleta)
                </span>
                <p className="text-zinc-700 dark:text-zinc-300 text-[11px] leading-relaxed">
                  5 cards colecionáveis com odd visível e inserção em 1 toque direto no slip de apostas na Home.
                </p>
                <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 block mt-2">
                  470 apostas/rodada (6,5x) · R$ 4.039 stake
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
