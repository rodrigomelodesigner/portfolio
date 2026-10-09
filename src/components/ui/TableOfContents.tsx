import { useEffect, useState } from 'react';
import { List } from 'lucide-react';

export type TocItem = {
  id: string;
  label: string;
};

type TableOfContentsProps = {
  items: TocItem[];
  layout: 'scroll' | 'stack';
};

const linkClassName =
  'inline-flex min-h-[44px] min-w-[44px] items-center rounded-md px-3 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:focus-visible:ring-zinc-50 dark:focus-visible:ring-offset-zinc-950';

export function TableOfContents({ items, layout }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');
  const itemKey = items.map((item) => item.id).join('|');

  useEffect(() => {
    const syncActiveSection = () => {
      // scroll-mt-24 (96px) plus the section's top padding, so a heading
      // that has just cleared the sticky nav counts as the current section.
      const marker = 128;
      let next = items[0]?.id ?? '';
      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= marker) {
          next = item.id;
        }
      }
      setActiveId((current) => (current === next ? current : next));
    };

    syncActiveSection();
    window.addEventListener('scroll', syncActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', syncActiveSection);
  }, [itemKey, items]);

  const focusSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    window.setTimeout(() => {
      section.focus({ preventScroll: true });
    }, 0);
  };

  const isScroll = layout === 'scroll';

  return (
    <nav aria-label="Sumário do estudo de caso">
      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
        <List className="h-4 w-4" aria-hidden="true" />
        <span>Neste estudo</span>
      </div>
      <ul
        className={
          isScroll
            ? 'flex gap-2 overflow-x-auto pb-1'
            : 'space-y-1 rounded-md border border-zinc-200 bg-zinc-50 p-2 dark:border-zinc-800 dark:bg-zinc-900/40'
        }
      >
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className={isScroll ? 'shrink-0' : undefined}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => {
                  setActiveId(item.id);
                  focusSection(item.id);
                }}
                className={`${linkClassName} ${isScroll ? 'whitespace-nowrap' : 'w-full'} ${
                  isActive
                    ? 'bg-zinc-900 font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
                } ${
                  isScroll
                    ? isActive
                      ? 'border border-zinc-900 dark:border-zinc-100'
                      : 'border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950'
                    : ''
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
