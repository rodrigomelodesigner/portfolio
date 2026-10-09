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
  Sparkles
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
    id: 'artilheiro',
    label: 'Sportsbook UX',
    slug: 'artilheiro-da-casa',
    title: 'Artilheiro da Casa',
    subtitle: 'Cards de Atleta & Injeção de Odd no Boletim',
    category: 'Sportsbook UX & Conversão',
    description: 'Substituição de regulamento de 15 linhas em texto por cards colecionáveis acionáveis com odd em tempo real.',
    metric: '470 apostas/rodada (6,5x) · R$ 4.039 stake médio',
    image: '/images/02_artilheiros_casa/artilheiro_ui_hero_3000x2000.png'
  },
  {
    id: 'bolao',
    label: 'Social Gaming',
    slug: 'bolao-da-copa',
    title: 'Bolão da Copa',
    subtitle: 'Predição Esportiva & Aquisição Orgânica',
    category: 'Social Gaming & Aquisição',
    description: 'Interface mobile de palpites diários, refinamento de inputs com colaboradores e teste de motor viral de grupos.',
    metric: '9.035 participantes em 25 dias · Sem mídia paga',
    image: '/images/04_bolao_copa/bolao_fluxo_mapeamento.png'
  },
  {
    id: 'limites',
    label: 'Compliance SPA/MF',
    slug: 'limites-prudenciais',
    title: 'Saída Responsável',
    subtitle: 'Pausa Graduada & Autoexclusão em 3 Etapas',
    category: 'Compliance Ético · Portaria SPA/MF 1.231',
    description: 'Reconstrução da jornada de afastamento com neutralidade verbal absoluta e eliminação de 4 a 5 níveis de menu obstrutivos.',
    metric: 'Homologado em Staging · Zero Labirinto Obstrutivo',
    image: '/images/01_limites_autoexclusao/limites_tela_pausa_temporaria.png'
  }
];

export default function Home() {
  const [activeHeroTab, setActiveHeroTab] = useState<string>('artilheiro');

  const currentHeroShowcase = HERO_SHOWCASE_DATA.find((item) => item.id === activeHeroTab) || HERO_SHOWCASE_DATA[0];

  return (
    <div className="space-y-16 py-6 md:py-12">
      {/* Hero Section */}
      <header>
        {/* Author & Community Identity Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-100 dark:border-zinc-900">
          <div className="flex items-center gap-3.5">
            <img
              src="/images/rodrigo/rodrigo_melo_profile.png"
              alt="Foto de perfil de Rodrigo Melo"
              className="w-12 h-12 rounded-full object-cover border border-zinc-200 dark:border-zinc-800 shadow-sm shrink-0"
              loading="eager"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">Rodrigo Melo</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Disponível para novas oportunidades
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mt-0.5">
                <span>Product Designer & Interface</span>
                <span>·</span>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">Local Leader @ IxDF Salvador</span>
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 max-w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span>Operação Regulada SPA/MF · Sportsbook & Fintech</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 max-w-2xl text-zinc-900 dark:text-zinc-50">
          Clareza na decisão, proteção sem obstáculo.
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-prose leading-relaxed mb-8">
          Desenho fluxos e sistemas de interface em operações reguladas de alto volume: conversão no sportsbook, aquisição orgânica e conformidade ética (SPA/MF). Cada estudo de caso documenta a causa raiz, as decisões de UI e o impacto mensurável.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium rounded hover:opacity-90 transition min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-950 dark:focus:ring-zinc-50"
          >
            Explorar Projetos <ArrowDown className="w-4 h-4" aria-hidden="true" />
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
            Baixar Currículo (PDF) &darr;
          </a>
        </div>

        <ProofTicker className="mt-12" />

        {/* Hero Interface Showcase (Visual Craft Anchor) */}
        <div className="mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900" aria-label="Vitrine de Interface em Destaque">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
                Craft de Interface em Produção
              </div>
              <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Interfaces Reais · Detalhe & Precisão
              </h2>
            </div>
            
            <div className="flex gap-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-xs" role="tablist" aria-label="Seletor de interfaces em destaque">
              {HERO_SHOWCASE_DATA.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeHeroTab === tab.id}
                  onClick={() => setActiveHeroTab(tab.id)}
                  className={`px-3 py-1.5 rounded-md font-medium transition min-h-[36px] flex items-center gap-1.5 ${
                    activeHeroTab === tab.id
                      ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 shadow-sm font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Showcase Window Frame */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900/60 shadow-sm">
            <div className="px-4 py-2.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-900 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-zinc-500 font-mono">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="truncate max-w-[220px] sm:max-w-none">{currentHeroShowcase.category}</span>
              </div>
              <Link
                to={`/work/${currentHeroShowcase.slug}`}
                className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline flex items-center gap-1 shrink-0"
              >
                Abrir estudo completo <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="relative group overflow-hidden bg-zinc-950/5 dark:bg-black/40 flex items-center justify-center p-3 sm:p-6">
              <img
                src={currentHeroShowcase.image}
                alt={currentHeroShowcase.title}
                className="w-full max-h-[460px] object-contain rounded-lg border border-zinc-200/80 dark:border-zinc-800 shadow-md group-hover:scale-[1.01] transition-transform duration-300"
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

      {/* Featured Work Section */}
      <section id="work" className="pt-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Featured Work
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Decisões metodológicas, métricas reais e entrega de ponta a ponta.
            </p>
          </div>
          <Link 
            to="/work" 
            className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline flex items-center gap-1"
          >
            Ver todos <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES_DATA.map((caseItem) => (
            <Link
              key={caseItem.id}
              to={`/work/${caseItem.slug}`}
              aria-label={`Acessar estudo de caso: ${caseItem.title}`}
              className="group block border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 transition flex flex-col justify-between bg-white dark:bg-zinc-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2"
            >
              <div>
                <div className="h-48 bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
                  <img
                    src={caseItem.coverImage}
                    alt=""
                    aria-hidden="true"
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
                  <span className="font-mono font-medium text-emerald-600 dark:text-emerald-400" aria-label={`Métrica de destaque: ${caseItem.highlightMetric}`}>
                    {caseItem.highlightMetric}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-zinc-900 dark:text-zinc-100 group-hover:translate-x-0.5 transition-transform shrink-0">
                    Acessar estudo <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Craft & Design System Foundation Section */}
      <section className="pt-8 border-t border-zinc-100 dark:border-zinc-900" aria-label="Fundação de Craft & Engenharia de Interface">
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            Rigor Técnico & Design System
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Fundação de Craft & Engenharia de Interface
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
            Como Product Designer focado em Interface, meu método une estética tipográfica suíça, conformidade estrita de acessibilidade (WCAG 2.2 AA) e especificação semântica para engenharia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 space-y-2">
            <span className="font-mono text-xs font-bold text-zinc-500 block">01 / TOKENS & TIPOGRAFIA</span>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Escala Modular & Contraste AAA</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Grid de 4px, fontes Inter neo-grotescas, linha máxima em 65 caracteres (`max-w-prose`) e contraste nítido em light e dark mode.
            </p>
          </div>

          <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 space-y-2">
            <span className="font-mono text-xs font-bold text-zinc-500 block">02 / ACESSIBILIDADE WCAG</span>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Touch Targets & Foco Visível</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Área de toque mínima de 44×44px em mobile (SC 2.5.8), foco navegável por teclado sem supressão de outline e suporte a reduced-motion.
            </p>
          </div>

          <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 space-y-2">
            <span className="font-mono text-xs font-bold text-zinc-500 block">03 / DESIGN ÉTICO</span>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Zero Padrões Obstrutivos</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Rejeição de dark patterns de retenção. Em fluxos de encerramento e jogo responsável, o usuário encontra saída sóbria em 3 etapas.
            </p>
          </div>

          <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 space-y-2">
            <span className="font-mono text-xs font-bold text-zinc-500 block">04 / HANDOFF TÉCNICO</span>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Alinhamento com Engenharia</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Documentação de regras de negócio, contratos de dados e componentes tipados no Figma, eliminando atrito e retrabalho de sprint.
            </p>
          </div>
        </div>
      </section>

      {/* About Principles Preview */}
      <section className="pt-8 border-t border-zinc-100 dark:border-zinc-900">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Princípios Operacionais
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Como encaro o design em contextos regulados e de alto risco.
            </p>
          </div>
          <Link 
            to="/about" 
            className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline flex items-center gap-1"
          >
            Sobre mim completo <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30">
            <ShieldCheck className="w-6 h-6 mb-4 text-zinc-800 dark:text-zinc-200" />
            <h3 className="font-semibold text-base mb-2 text-zinc-900 dark:text-zinc-100">1. Clareza e Proteção</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No Artilheiro, troquei 15 linhas de regulamento por um card que já leva a odd ao boletim. Na Saída responsável, a autoexclusão fica na mesma tela da pausa, a 3 etapas.
            </p>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30">
            <Layers className="w-6 h-6 mb-4 text-zinc-800 dark:text-zinc-200" />
            <h3 className="font-semibold text-base mb-2 text-zinc-900 dark:text-zinc-100">2. Hipótese e Resultado</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No Bolão, a aposta nos grupos de amigos não se confirmou: foram 81 grupos para 9.035 participantes, e o case declara isso. No Artilheiro, declaro o que o teste sequencial não isola.
            </p>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30">
            <FileCheck className="w-6 h-6 mb-4 text-zinc-800 dark:text-zinc-200" />
            <h3 className="font-semibold text-base mb-2 text-zinc-900 dark:text-zinc-100">3. Regulação no Começo</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              A v1 da Saída responsável foi reprovada por soar como retenção disfarçada. A v2 foi desenhada com texto neutro e validada por Compliance, Produto e Jurídico antes de ir para staging.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Callout */}
      <section className="pt-8 border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-50">Contato</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
            Disponível para posições de Product Design em fintechs, scale-ups de tecnologia e ambientes de operação regulada.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <Link
              to="/contact"
              className="px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded hover:opacity-90 transition min-h-[44px] inline-flex items-center"
            >
              Falar comigo &rarr;
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
