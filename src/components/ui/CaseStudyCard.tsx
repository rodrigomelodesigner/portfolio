import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '../../data/cases';
import { Badge } from './Badge';

type CaseStudyCardProps = {
  caseItem: CaseStudy;
  titleAs: 'h2' | 'h3';
};

const titleClassName =
  'min-w-0 flex-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:underline';

export function CaseStudyCard({ caseItem, titleAs }: CaseStudyCardProps) {
  const TitleTag = titleAs;
  const summary = caseItem.subtitle || caseItem.problem.reframed;

  return (
    <Link
      to={`/work/${caseItem.slug}`}
      aria-label={`Acessar estudo de caso: ${caseItem.title}`}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-zinc-200 bg-white transition-colors hover:border-zinc-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-600 dark:focus-visible:ring-zinc-50 dark:focus-visible:ring-offset-zinc-950"
    >
      <p className="px-5 pt-4 font-mono text-sm font-semibold leading-snug text-emerald-600 dark:text-emerald-400 md:h-24">
        {caseItem.highlightMetric}
      </p>
      <div className="mt-3 h-48 shrink-0 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <img
          src={caseItem.coverImage}
          alt={caseItem.coverAlt}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.classList.add('hidden');
          }}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {caseItem.tags.slice(0, 2).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="mb-2 flex items-start gap-2">
          <TitleTag className={titleClassName}>{caseItem.title}</TitleTag>
          <ArrowUpRight
            className="mt-1 h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400"
            aria-hidden="true"
          />
        </div>
        <p className="line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {summary}
        </p>
      </div>
    </Link>
  );
}
