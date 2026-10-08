import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CASES_DATA } from '../data/cases';
import { ArrowUpRight, Search } from 'lucide-react';

export default function WorkIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Todos', 'Gamificação', 'Compliance', 'Autosserviço'];

  const filteredCases = CASES_DATA.filter((caseItem) => {
    const matchesCategory =
      selectedCategory === 'Todos' ||
      caseItem.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-6 md:py-12">
      {/* Header */}
      <header>
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
          Portfólio de Produto
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
          Estudos de Caso & Entregas
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Projetos executados sob restrições severas de compliance, volume e dados reais. Cada estudo de caso documenta hipóteses, decisões e impacto longitudinal.
        </p>
      </header>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-900">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtro por categoria de projeto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
              className={`px-3.5 py-2 rounded text-xs font-medium transition min-h-[40px] inline-flex items-center ${
                selectedCategory === cat
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
          <input
            type="text"
            placeholder="Filtrar por termo..."
            aria-label="Filtrar estudos de caso por palavra-chave"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 min-h-[40px] text-xs bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded focus:outline-none focus:ring-2 focus:ring-zinc-400 text-zinc-900 dark:text-zinc-100"
          />
        </div>
      </div>

      {/* Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map((caseItem) => (
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
                <h2 className="text-lg font-semibold mb-2 group-hover:underline text-zinc-900 dark:text-zinc-100">
                  {caseItem.title}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                  {caseItem.subtitle || caseItem.problem.reframed}
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900/80 flex justify-between items-center text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="text-zinc-500 font-normal">{caseItem.highlightMetric}</span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Ver Estudo <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredCases.length === 0 && (
        <div className="py-12 text-center text-zinc-500 dark:text-zinc-400 text-sm">
          Nenhum estudo de caso corresponde aos filtros selecionados.
        </div>
      )}
    </div>
  );
}
