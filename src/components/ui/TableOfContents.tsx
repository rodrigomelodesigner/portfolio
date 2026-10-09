import React, { useState, useEffect } from 'react';
import { List } from 'lucide-react';

export interface TocItem {
  id: string;
  label: string;
}

export interface TableOfContentsProps {
  items: TocItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Sumário do estudo de caso"
      className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 text-xs"
    >
      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-zinc-500 mb-3">
        <List className="w-3.5 h-3.5" aria-hidden="true" />
        <span>Neste estudo</span>
      </div>
      <ul className="space-y-1">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollTo(e, item.id)}
                className={`block py-1.5 px-2 rounded transition min-h-[32px] flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-50 ${
                  isActive
                    ? 'font-semibold text-zinc-950 dark:text-zinc-50 bg-zinc-200/60 dark:bg-zinc-800'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
