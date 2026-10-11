import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CASES_DATA } from '../data/cases';
import { ProofTicker } from '../components/ui/ProofTicker';
import { Badge } from '../components/ui/Badge';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  FileCheck,
} from 'lucide-react';

interface HeroShowcaseItem {
  id: string;
  label: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  metric: string;
  image: string;
}

const HERO_SHOWCASE_DATA: HeroShowcaseItem[] = [
  {
    id: 'extrato',
    label: 'Fintech',
    slug: 'extrato-financeiro',
    title: 'Extrato de 36 meses',
    subtitle: 'Movimentações, Pix e resultado líquido',
    category: 'Fintech & Autosserviço',
    description:
      'Extrato com depósitos, saques Pix e segregação esportes/cassino — homologado em design sob a Portaria SPA/MF.',
    metric: 'Meta −40% tickets N1 · homologação de design',
    image: '/images/03_transacoes_onboarding/transacoes_component.png',
  },
  {
    id: 'artilheiro',
    label: 'Sportsbook',
    slug: 'artilheiro-da-casa',
    title: 'Artilheiro da Casa',
    subtitle: 'Cards de atleta no lugar do regulamento',
    category: 'Sportsbook UX & Conversão',
    description:
      'Substituição do texto de regras por cards com odd turbinada. Pico 827 apostas; média 470; R7 em 221.',
    metric: 'Pico 827 · média 470/rodada · R7 em 221',
    image: '/images/02_artilheiros_casa/extra_artilheiro_cards_rodada.png',
  },
  {
    id: 'limites',
    label: 'Compliance',
    slug: 'limites-prudenciais',
    title: 'Saída responsável',
    subtitle: 'Pausa e encerramento na mesma página',
    category: 'Jogo responsável · Portaria SPA/MF 1.231',
    description:
      'Jornada em 3 etapas com copy factual. Staging em 28/07/2025; pausa em destaque sem esconder a saída.',
    metric: 'Staging 28/07/2025 · 3 etapas',
    image: '/images/01_limites_autoexclusao/limites_autoexclusao_flow.png',
  },
];

export default function Home() {
  const [activeHeroTab, setActiveHeroTab] = useState<string>('extrato');

  const currentHeroShowcase =
    HERO_SHOWCASE_DATA.find((item) => item.id === activeHeroTab) || HERO_SHOWCASE_DATA[0];

  return (
    <div className="space-y-16 py-6 md:py-12">
      <header>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-100 dark:border-zinc-900">
          <div className="flex items-center gap-3.5">
            <img
              src="/images/rodrigo/rodrigo_melo_profile.png"
              alt="Foto de perfil de Rodrigo Melo"
              className="w-12 h-12 rounded-full object-cover border border-zinc-200 dark:border-zinc-800 shrink-0"
              loading="eager"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">Rodrigo Melo</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  Disponível para novas oportunidades
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 flex flex-wrap items-center gap-1.5 mt-0.5">
                <span>Product Designer Pleno</span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  Local Leader @ IxDF Salvador
                </span>
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 max-w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
            <span>Produtos regulados · dinheiro em movimento</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 max-w-2xl text-zinc-900 dark:text-zinc-50">
          Fluxos que movem dinheiro e protegem o usuário.
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-prose leading-relaxed mb-8">
          Product Designer Pleno em casa de apostas regulada pela Secretaria de Prêmios e Apostas
          (SPA/MF). Desenho extrato e saque Pix, promoções no sportsbook e saída responsável — com
          causa raiz, trade-offs e o que a medição não isola.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium rounded hover:opacity-90 transition min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-950 dark:focus:ring-zinc-50"
          >
            Ver estudos de caso <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </a>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 transition min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400"
          >
            Sobre mim <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
          <a
            href="/assets/rodrigo-melo-curriculo.pdf"
            download="rodrigo-melo-curriculo.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400"
          >
            Baixar currículo (PDF) ↓
          </a>
        </div>

        <ProofTicker className="mt-12" />

        <div
          className="mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900"
          aria-label="Vitrine de interface em destaque"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                Interfaces do produto
              </div>
              <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Do extrato ao sportsbook
              </h2>
            </div>

            <div
              className="flex gap-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs"
              role="tablist"
              aria-label="Seletor de interfaces em destaque"
            >
              {HERO_SHOWCASE_DATA.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeHeroTab === tab.id}
                  onClick={() => setActiveHeroTab(tab.id)}
                  className={`px-3 py-1.5 rounded font-medium transition min-h-[36px] flex items-center gap-1.5 ${
                    activeHeroTab === tab.id
                      ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded overflow-hidden bg-zinc-50 dark:bg-zinc-900/60">
            <div className="px-4 py-2.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-900 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-zinc-500 font-mono">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"
                  aria-hidden="true"
                />
                <span className="truncate max-w-[220px] sm:max-w-none">
                  {currentHeroShowcase.category}
                </span>
              </div>
              <Link
                to={`/work/${currentHeroShowcase.slug}`}
                className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline flex items-center gap-1 shrink-0 min-h-[44px]"
              >
                Abrir estudo <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="relative overflow-hidden bg-zinc-950/5 dark:bg-black/40 flex items-center justify-center p-3 sm:p-6">
              <img
                src={currentHeroShowcase.image}
                alt={`${currentHeroShowcase.title}: ${currentHeroShowcase.description}`}
                className="w-full max-h-[460px] object-contain rounded border border-zinc-200/80 dark:border-zinc-800"
                loading="eager"
              />
            </div>

            <div className="p-4 sm:p-5 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 block sm:inline mr-2">
                  {currentHeroShowcase.subtitle}
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">
                  {currentHeroShowcase.description}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-200 dark:border-emerald-800">
                  {currentHeroShowcase.metric}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="work" className="pt-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Estudos de caso
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Decisões, métricas auditadas e o que a medição não prova.
            </p>
          </div>
          <Link
            to="/work"
            className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline flex items-center gap-1 min-h-[44px]"
          >
            Ver todos <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASES_DATA.map((caseItem) => (
            <Link
              key={caseItem.id}
              to={`/work/${caseItem.slug}`}
              aria-label={`Acessar estudo de caso: ${caseItem.title}`}
              className="group block border border-zinc-200 dark:border-zinc-800 rounded overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 transition flex flex-col justify-between bg-white dark:bg-zinc-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2"
            >
              <div>
                <div className="h-48 bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
                  <img
                    src={caseItem.coverImage}
                    alt={`Capa do estudo: ${caseItem.title}`}
                    className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {caseItem.tags.slice(0, 2).map((tag, idx) => (
                      <Badge key={idx} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:underline text-zinc-900 dark:text-zinc-100">
                    {caseItem.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                    {caseItem.subtitle || caseItem.problem.reframed}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap gap-2 justify-between items-center text-xs">
                  <span
                    className="font-mono font-medium text-emerald-600 dark:text-emerald-400"
                    aria-label={`Métrica de destaque: ${caseItem.highlightMetric}`}
                  >
                    {caseItem.highlightMetric}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-zinc-900 dark:text-zinc-100 group-hover:translate-x-0.5 transition-transform shrink-0">
                    Abrir estudo <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="pt-8 border-t border-zinc-100 dark:border-zinc-900"
        aria-label="Como trabalho com interface e engenharia"
      >
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            Craft e handoff
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Interface especificada para engenharia
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
            Tipografia sóbria, WCAG 2.2 AA e componentes com estados documentados — o mesmo rigor
            que peço aos cases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30 space-y-2">
            <span className="font-mono text-xs font-bold text-zinc-500 block">01 / TOKENS</span>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
              Escala e contraste AA
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Grid de 4px, Inter, linha em ~65 caracteres e contraste verificável em light e dark.
            </p>
          </div>

          <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30 space-y-2">
            <span className="font-mono text-xs font-bold text-zinc-500 block">02 / A11Y</span>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
              Toque e foco visível
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Alvos mínimos 44×44px (SC 2.5.8), foco por teclado e respeito a reduced-motion.
            </p>
          </div>

          <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30 space-y-2">
            <span className="font-mono text-xs font-bold text-zinc-500 block">03 / ÉTICA</span>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
              Saída sem labirinto
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Em jogo responsável, pausa e encerramento na mesma página. Atrito positivo quando o
              risco é impulsivo — nunca submenu escondido.
            </p>
          </div>

          <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30 space-y-2">
            <span className="font-mono text-xs font-bold text-zinc-500 block">04 / HANDOFF</span>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
              Regras e estados
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Specs de negócio, contratos de dados e variantes no Figma para reduzir retrabalho de
              sprint.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-8 border-t border-zinc-100 dark:border-zinc-900">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Como decido
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Três hábitos que aparecem nos estudos.
            </p>
          </div>
          <Link
            to="/about"
            className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline flex items-center gap-1 min-h-[44px]"
          >
            Sobre completo <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30">
            <ShieldCheck className="w-6 h-6 mb-4 text-zinc-800 dark:text-zinc-200" aria-hidden="true" />
            <h3 className="font-semibold text-base mb-2 text-zinc-900 dark:text-zinc-100">
              1. Clareza e proteção
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No Extrato, sinal +/− e segregação por modalidade. Na Saída responsável, pausa e
              encerramento na mesma tela.
            </p>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30">
            <Layers className="w-6 h-6 mb-4 text-zinc-800 dark:text-zinc-200" aria-hidden="true" />
            <h3 className="font-semibold text-base mb-2 text-zinc-900 dark:text-zinc-100">
              2. Hipótese e resultado
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No Bolão, os grupos privados não viraram motor viral (81 para 9.035). No Artilheiro,
              declaro o que o teste sequencial não isola.
            </p>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/30">
            <FileCheck className="w-6 h-6 mb-4 text-zinc-800 dark:text-zinc-200" aria-hidden="true" />
            <h3 className="font-semibold text-base mb-2 text-zinc-900 dark:text-zinc-100">
              3. Regulação no começo
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              A v1 da Saída usava “Vamos sentir sua falta”. A v2 usa “Esta ação é irreversível” e
              pausa graduada — atrito positivo, saída ainda visível.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-8 border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-50">
            Contato
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
            Aberto a Product Design em fintechs, scale-ups e operações reguladas.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <Link
              to="/contact"
              className="px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded hover:opacity-90 transition min-h-[44px] inline-flex items-center"
            >
              Falar comigo →
            </Link>
            <a
              href="https://linkedin.com/in/rodrigomelodesigner"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded hover:bg-zinc-50 dark:hover:bg-zinc-900 transition text-zinc-900 dark:text-zinc-100 min-h-[44px] inline-flex items-center"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
