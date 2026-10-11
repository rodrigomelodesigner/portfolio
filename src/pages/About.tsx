import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Layers,
  FileCheck,
  ArrowRight,
  Compass,
  Wallet,
  Users2,
  ExternalLink,
} from 'lucide-react';

export default function About() {
  return (
    <div className="py-6 md:py-12 space-y-16">
      <header className="space-y-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Trajetória e método
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
          <div className="space-y-3">
            <div className="rounded overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
              <img
                src="/images/rodrigo/rodrigo_melo_editorial.png"
                alt="Retrato profissional de Rodrigo Melo"
                className="w-full h-auto object-cover max-h-[380px]"
                loading="eager"
              />
            </div>
            <div className="p-3 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/60 dark:bg-zinc-900/40 text-xs space-y-1">
              <span className="font-bold text-zinc-900 dark:text-zinc-100 block">Rodrigo Melo</span>
              <p className="text-zinc-500 dark:text-zinc-400 text-[11px] leading-relaxed">
                Product Designer Pleno · Local Leader @ IxDF Salvador
              </p>
              <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                Disponível para posições CLT / PJ
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              Regras severas viram fluxos claros.
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-prose">
              Product Designer Pleno em produtos regulados: extrato e dinheiro saindo, sportsbook e
              jogo responsável — com acessibilidade WCAG 2.2 AA.
            </p>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base max-w-prose">
              <p>
                Trabalho numa casa de apostas regulada pela Secretaria de Prêmios e Apostas do
                Ministério da Fazenda (SPA/MF). Os estudos publicados cobrem extrato de 36 meses,
                cards no sportsbook, bolão social e saída responsável. Em paralelo, desenhei a tela
                de saque via Pix com checagem de titularidade do CPF (em produção desde agosto de
                2026); o case aberto de dinheiro em movimento neste portfólio é o{' '}
                <Link to="/work/extrato-financeiro" className="underline underline-offset-2">
                  Extrato
                </Link>
                .
              </p>
              <p>
                Em setores complexos, o trabalho do design é tornar a lógica do produto legível —
                inclusive a Portaria SPA/MF nº 1.231 — sem padrões escuros de retenção.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section
        className="pt-8 border-t border-zinc-100 dark:border-zinc-900"
        aria-label="Liderança comunitária no IxDF Salvador"
      >
        <div className="p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col md:flex-row gap-6 items-start justify-between">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <Users2 className="w-4 h-4 text-zinc-800 dark:text-zinc-200" aria-hidden="true" />
              Comunidade
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Local Leader @ IxDF Salvador
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Organizo encontros presenciais, debates de casos reais e nivelamento técnico no
              capítulo de Salvador da Interaction Design Foundation.
            </p>
          </div>

          <a
            href="https://www.interaction-design.org"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition shrink-0 inline-flex items-center gap-1.5 min-h-[44px]"
          >
            Conhecer o IxDF <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="space-y-8 pt-8 border-t border-zinc-100 dark:border-zinc-900">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Como decido
          </h2>
          <p className="text-sm text-zinc-500 mt-1">Hábitos que os estudos documentam.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30 space-y-3">
            <div className="p-2.5 w-fit rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
              1. Clareza e proteção
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Extrato com sinal +/− e segregação por modalidade. Saída responsável com pausa e
              encerramento na mesma tela.
            </p>
          </div>

          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30 space-y-3">
            <div className="p-2.5 w-fit rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
              <Layers className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
              2. Hipótese e resultado
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No Bolão, os grupos privados não viraram motor viral. No Artilheiro, a série mostra o
              pico e a queda — não só a média.
            </p>
          </div>

          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30 space-y-3">
            <div className="p-2.5 w-fit rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
              <FileCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
              3. Regulação no começo
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Copy factual e pausa graduada na saída responsável, com staging aprovado por Produto e
              Compliance ainda no loop de copy.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-zinc-100 dark:border-zinc-900">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Domínio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded flex items-start gap-3">
            <Wallet className="w-5 h-5 text-zinc-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Dinheiro e autosserviço
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                Extrato, Pix, sinais de lucro/prejuízo e redução de tickets de suporte.
              </p>
            </div>
          </div>
          <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded flex items-start gap-3">
            <Compass className="w-5 h-5 text-zinc-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Regulação e jogo responsável
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                Tradução da Portaria SPA/MF nº 1.231 em pausa, encerramento e limites sem labirinto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-zinc-100 dark:border-zinc-900">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Trajetória
          </h2>
        </div>

        <div className="space-y-6 border-l border-zinc-200 dark:border-zinc-800 ml-3 pl-6">
          <div className="relative">
            <span
              className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-white dark:ring-zinc-950"
              aria-hidden="true"
            />
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
              2024 — Presente
            </div>
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
              Product Designer Pleno · Casa de Apostas (SPA/MF)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
              Extrato de 36 meses e saque Pix com checagem de CPF; cards no sportsbook (pico 827
              apostas/rodada); bolão com 9.035 inscritos; saída responsável em staging sob a
              Portaria SPA/MF nº 1.231.
            </p>
          </div>

          <div className="relative">
            <span
              className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-600 ring-4 ring-white dark:ring-zinc-950"
              aria-hidden="true"
            />
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
              2021 — 2024
            </div>
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
              Product Designer · Produtos digitais e plataformas web
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
              Design systems no Figma com tokens, descoberta contínua e otimização de conversão e
              autosserviço em squads ágeis.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-zinc-100 dark:border-zinc-900">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Ferramentas
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30">
            <span className="font-bold uppercase tracking-wider text-zinc-500 block mb-2">
              Design e UI
            </span>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Figma (Variables, Auto Layout), design tokens, prototipagem, wireframes.
            </p>
          </div>
          <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30">
            <span className="font-bold uppercase tracking-wider text-zinc-500 block mb-2">
              Frontend
            </span>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              React, TypeScript, Tailwind CSS, shadcn/ui, Git, Vite.
            </p>
          </div>
          <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30">
            <span className="font-bold uppercase tracking-wider text-zinc-500 block mb-2">
              Dados e conformidade
            </span>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              WCAG 2.2 AA, Portaria SPA/MF 1.231, Amplitude, Hotjar, analytics, testes de usabilidade.
            </p>
          </div>
        </div>
      </section>

      <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-wrap gap-4 justify-between items-center">
        <Link
          to="/work"
          className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 min-h-[44px] inline-flex items-center"
        >
          ← Ver estudos de caso
        </Link>
        <div className="flex gap-3">
          <a
            href="/assets/rodrigo-melo-curriculo.pdf"
            download="rodrigo-melo-curriculo.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition min-h-[44px]"
          >
            Baixar currículo (PDF)
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded text-xs font-semibold hover:opacity-90 transition min-h-[44px]"
          >
            Entrar em contato <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
