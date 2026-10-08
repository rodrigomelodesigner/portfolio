import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CASES_DATA } from '../data/cases';
import { Badge } from '../components/ui/Badge';
import { ImageLightbox } from '../components/ui/ImageLightbox';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, ZoomIn } from 'lucide-react';

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [activeImage, setActiveImage] = useState<{ url: string; caption: string } | null>(null);

  const caseItem = CASES_DATA.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseItem) {
    return (
      <div className="py-24 text-center space-y-4">
        <h1 className="text-2xl font-bold">Estudo de caso não encontrado</h1>
        <p className="text-zinc-500 text-sm">O link solicitado não corresponde a um projeto ativo.</p>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para Projetos
        </Link>
      </div>
    );
  }

  const currentIndex = CASES_DATA.findIndex((c) => c.slug === slug);
  const nextCase = CASES_DATA[(currentIndex + 1) % CASES_DATA.length];

  return (
    <article className="py-6 md:py-12 space-y-12">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
        <Link to="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link to="/work" className="hover:underline">Work</Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100">{caseItem.title}</span>
      </nav>

      {/* Case Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">{caseItem.category}</Badge>
          {caseItem.tags.map((tag, idx) => (
            <Badge key={idx} variant="outline">{tag}</Badge>
          ))}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-zinc-900 dark:text-zinc-50">
          {caseItem.title}
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
          {caseItem.subtitle}
        </p>

        {/* Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-zinc-100 dark:border-zinc-900 text-xs">
          <div>
            <span className="block font-semibold uppercase tracking-wider text-zinc-500 mb-1">Empresa</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{caseItem.company}</span>
          </div>
          <div>
            <span className="block font-semibold uppercase tracking-wider text-zinc-500 mb-1">Papel</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{caseItem.role}</span>
          </div>
          <div>
            <span className="block font-semibold uppercase tracking-wider text-zinc-500 mb-1">Timeline</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{caseItem.timeline}</span>
          </div>
          <div>
            <span className="block font-semibold uppercase tracking-wider text-zinc-500 mb-1">Impacto Chave</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">{caseItem.highlightMetric}</span>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
        <img
          src={caseItem.coverImage}
          alt={caseItem.title}
          className="w-full h-auto object-cover max-h-[500px]"
          loading="eager"
        />
      </div>

      {/* Problem & Reframing */}
      <section className="space-y-6 pt-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          O Problema & O Reframing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900/40">
            <div className="flex items-center gap-2 font-semibold text-xs uppercase tracking-wider text-zinc-500 mb-3">
              <AlertCircle className="w-4 h-4 text-zinc-400" />
              Briefing Inicial (Sintoma)
            </div>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {caseItem.problem.briefing}
            </p>
          </div>
          <div className="p-6 border border-zinc-900 dark:border-zinc-700 rounded-lg bg-zinc-900 text-white dark:bg-zinc-800">
            <div className="flex items-center gap-2 font-semibold text-xs uppercase tracking-wider text-zinc-400 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Problema Real Refatorado (Causa Raiz)
            </div>
            <p className="text-sm text-zinc-200 leading-relaxed">
              {caseItem.problem.reframed}
            </p>
          </div>
        </div>

        {caseItem.hypothesis && (
          <div className="p-5 border-l-2 border-zinc-900 dark:border-zinc-100 bg-zinc-50 dark:bg-zinc-900/30 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <strong>Hipótese de Design:</strong> {caseItem.hypothesis}
          </div>
        )}
      </section>

      {/* Benchmark Audit */}
      {caseItem.benchmark && (
        <section className="space-y-6 pt-6 border-t border-zinc-100 dark:border-zinc-900">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {caseItem.benchmark.title}
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              {caseItem.benchmark.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-500 mr-1">
              Plataformas Auditadas:
            </span>
            {caseItem.benchmark.competitors.map((comp, idx) => (
              <Badge key={idx} variant="outline">
                {comp}
              </Badge>
            ))}
          </div>

          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Achados Críticos de Benchmark:
            </h3>
            <ul className="space-y-2">
              {caseItem.benchmark.findings.map((finding, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 mt-2 flex-shrink-0" />
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Decisions */}
      <section className="space-y-6 pt-6 border-t border-zinc-100 dark:border-zinc-900">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Decisões de Design & Trade-offs
        </h2>
        <div className="space-y-4">
          {caseItem.decisions.map((decision, idx) => (
            <div key={idx} className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {idx + 1}. {decision.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {decision.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Metrics Grid */}
      {caseItem.keyMetrics && caseItem.keyMetrics.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-zinc-100 dark:border-zinc-900">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Métricas Chave & Critérios de Sucesso
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Impacto mensurável acordado e validado em produção.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseItem.keyMetrics.map((km, idx) => (
              <div key={idx} className="p-6 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                <span className="text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400 block mb-1">
                  {km.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-2">
                  {km.label}
                </span>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {km.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Metrics Table */}
      {caseItem.metricsTable && (
        <section className="space-y-6 pt-6 border-t border-zinc-100 dark:border-zinc-900">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Validação Longitudinal & Métricas
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Rastreamento empírico do impacto real ao longo do período de operação.
            </p>
          </div>
          <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <table className="w-full text-left text-xs" aria-label={`Métricas de impacto para ${caseItem.title}`}>
              <caption className="sr-only">
                Tabela de validação longitudinal e métricas reais de operação para o estudo de caso {caseItem.title}
              </caption>
              <thead className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                <tr>
                  {caseItem.metricsTable.headers.map((h, idx) => (
                    <th key={idx} scope="col" className="py-3 px-4 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">
                {caseItem.metricsTable.rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="py-3 px-4">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Visual Showcase / Screenshots */}
      {caseItem.screenshots && caseItem.screenshots.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-zinc-100 dark:border-zinc-900">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Interface & Execução Visual
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Componentes, fluxos e telas implementadas em produção.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseItem.screenshots.map((screen, idx) => (
              <figure key={idx} className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-900 group">
                <button
                  type="button"
                  onClick={() => setActiveImage({ url: screen.url, caption: screen.caption })}
                  className="w-full relative overflow-hidden block text-left focus:outline-none focus:ring-2 focus:ring-zinc-400"
                  aria-label={`Ampliar imagem: ${screen.caption}`}
                >
                  <img
                    src={screen.url}
                    alt={screen.caption}
                    className="w-full h-auto object-cover group-hover:scale-102 transition duration-300"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute bottom-2 right-2 p-1.5 bg-zinc-900/70 text-white rounded opacity-0 group-hover:opacity-100 transition flex items-center gap-1 text-[11px]">
                    <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Zoom</span>
                  </div>
                </button>
                <figcaption className="p-4 text-xs text-zinc-600 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800 leading-relaxed">
                  {screen.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Learnings */}
      {caseItem.learnings && caseItem.learnings.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-zinc-100 dark:border-zinc-900">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Aprendizados & Rigor Operacional
          </h2>
          <ul className="space-y-3">
            {caseItem.learnings.map((learning, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 mt-2 flex-shrink-0" />
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Next Case Footer Nav */}
      <nav aria-label="Navegação entre casos" className="pt-12 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          <ArrowLeft className="w-4 h-4" /> Todos os Projetos
        </Link>
        <Link
          to={`/work/${nextCase.slug}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline"
        >
          Próximo: {nextCase.title} <ArrowRight className="w-4 h-4" />
        </Link>
      </nav>

      {/* Image Lightbox Modal */}
      {activeImage && (
        <ImageLightbox
          isOpen={!!activeImage}
          onClose={() => setActiveImage(null)}
          imageUrl={activeImage.url}
          imageAlt={activeImage.caption}
          caption={activeImage.caption}
        />
      )}
    </article>
  );
}
