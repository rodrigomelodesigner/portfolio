import React from 'react';
import { Link } from 'react-router-dom';
import { CASES_DATA } from '../data/cases';
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
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 max-w-2xl text-zinc-900 dark:text-zinc-50">
          Sistemas que sustentam decisões.
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-8">
          Sou Product Designer focado em operações reguladas e plataformas de alta escala. Traduzo requisitos de compliance e fricções de negócio em interfaces praticáveis e documentadas.
        </p>
        <div className="flex gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium rounded hover:opacity-90 transition"
          >
            Ver Projetos <ArrowDown className="w-4 h-4" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-200 dark:border-zinc-800 font-medium rounded hover:bg-zinc-50 dark:hover:bg-zinc-900 transition text-zinc-900 dark:text-zinc-100"
          >
            Sobre mim <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-16 pt-6 border-t border-zinc-100 dark:border-zinc-900">
          <p className="text-xs font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400 flex flex-wrap gap-4">
            <span>Conformidade SPA/MF Nº 1.231</span>
            <span>•</span>
            <span>+1.048% engajamento gamificado</span>
            <span>•</span>
            <span>+237% aquisição B2C</span>
          </p>
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
              className="group block border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 transition flex flex-col justify-between bg-white dark:bg-zinc-900/40"
            >
              <div>
                <div className="h-48 bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
                  <img
                    src={caseItem.coverImage}
                    alt={caseItem.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {caseItem.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                        {tag} {idx < 1 && '·'}
                      </span>
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
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  Ver Estudo de Caso <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
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
            <h3 className="font-semibold text-base mb-2 text-zinc-900 dark:text-zinc-100">Fricção como Proteção</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Em mercados regulados, facilidade cega gera dano financeiro e passivo jurídico. Projetar atrito consciente é um dever ético de design.
            </p>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30">
            <Layers className="w-6 h-6 mb-4 text-zinc-800 dark:text-zinc-200" />
            <h3 className="font-semibold text-base mb-2 text-zinc-900 dark:text-zinc-100">Sistemas sobre Artefatos</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Telas individuais envelhecem rápido. Regras de negócio tipadas, tokens semânticos e documentação viva escalam a maturidade do produto.
            </p>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30">
            <FileCheck className="w-6 h-6 mb-4 text-zinc-800 dark:text-zinc-200" />
            <h3 className="font-semibold text-base mb-2 text-zinc-900 dark:text-zinc-100">Evidência sobre Opinião</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Toda hipótese estética deve ser submetida a teste empírico (ADR 005). Menos conjecturas subjetivas, mais métricas longitudinais rastreáveis.
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
