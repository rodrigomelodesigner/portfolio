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
  FileCheck 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16 py-6 md:py-12">
      {/* Hero Section */}
      <header>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 mb-6 border border-zinc-200 dark:border-zinc-700 max-w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <span className="truncate sm:overflow-visible">Product Designer Pleno · Operação Regulada SPA/MF</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 max-w-2xl text-zinc-900 dark:text-zinc-50">
          Clareza na decisão, proteção sem obstáculo.
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-prose leading-relaxed mb-8">
          Desenho fluxos de produto numa operação de apostas regulada pela SPA/MF: conversão, aquisição sem mídia paga e proteção do consumidor. Cada case mostra o dado, o método e o que não deu certo.
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
            Disponível para posições sênior de Product Design em fintechs, scale-ups de tecnologia e ambientes de operação regulada.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <Link
              to="/contact"
              className="px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded hover:opacity-90 transition"
            >
              Falar comigo &rarr;
            </Link>
            <a
              href="https://linkedin.com/in/rodrigomelodesigner"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded hover:bg-zinc-50 dark:hover:bg-zinc-900 transition text-zinc-900 dark:text-zinc-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
