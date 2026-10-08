import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { CASES_DATA } from './data/cases';
import Home from './pages/Home';
import WorkIndex from './pages/WorkIndex';
import CaseStudyDetail from './pages/CaseStudyDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { Sun, Moon, Command, Search, X, ArrowUpRight } from 'lucide-react';

function Layout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close palette on route change
  useEffect(() => {
    setIsPaletteOpen(false);
    setSearchQuery('');
  }, [location.pathname]);

  const filteredCases = CASES_DATA.filter(
    (c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-200 flex flex-col justify-between">
      {/* Skip Link para Acessibilidade (WCAG 2.2 SC 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-zinc-900 focus:text-white focus:dark:bg-zinc-100 focus:dark:text-zinc-900 focus:font-semibold focus:text-sm focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-950 dark:focus:ring-zinc-50"
      >
        Pular para o conteúdo principal
      </a>

      {/* Navbar */}
      <nav aria-label="Navegação Principal" className="border-b border-zinc-100 dark:border-zinc-900 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto p-4 md:px-12 md:py-6 flex justify-between items-center">
          <Link
            to="/"
            className="font-bold text-xl tracking-tight hover:opacity-80 transition min-h-[44px] min-w-[44px] inline-flex items-center"
            aria-label="Rodrigo Melo - Página Inicial"
          >
            Rodrigo Melo.
          </Link>
          <div className="flex gap-2 md:gap-4 items-center text-sm font-medium">
            <Link
              to="/work"
              className={`transition hover:text-zinc-950 dark:hover:text-zinc-100 px-2.5 py-2 rounded min-h-[44px] min-w-[44px] inline-flex items-center ${
                location.pathname.startsWith('/work') ? 'text-zinc-950 dark:text-zinc-50 font-semibold' : 'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Work
            </Link>
            <Link
              to="/about"
              className={`transition hover:text-zinc-950 dark:hover:text-zinc-100 px-2.5 py-2 rounded min-h-[44px] min-w-[44px] inline-flex items-center ${
                location.pathname === '/about' ? 'text-zinc-950 dark:text-zinc-50 font-semibold' : 'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`transition hover:text-zinc-950 dark:hover:text-zinc-100 px-2.5 py-2 rounded min-h-[44px] min-w-[44px] inline-flex items-center ${
                location.pathname === '/contact' ? 'text-zinc-950 dark:text-zinc-50 font-semibold' : 'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Contact
            </Link>
            <button
              onClick={() => setIsPaletteOpen(true)}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transition min-h-[44px]"
              aria-label="Abrir busca rápida de estudos de caso (Atalho: Ctrl+K ou Cmd+K)"
            >
              <Command className="w-3.5 h-3.5" aria-hidden="true" />
              <span>K</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-zinc-400"
              aria-label={isDark ? "Alternar para tema claro" : "Alternar para tema escuro"}
              aria-pressed={isDark}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-zinc-200" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Page Area com Landmark Acessível */}
      <main id="main-content" tabIndex={-1} className="max-w-4xl mx-auto p-4 md:px-12 w-full flex-1 focus:outline-none">
        {children}
      </main>

      {/* Unified Footer */}
      <footer className="border-t border-zinc-100 dark:border-zinc-900 text-xs text-zinc-500 py-8 bg-zinc-50/50 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} Rodrigo Melo. Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <Link to="/about" className="hover:underline">Metodologia</Link>
            <span>·</span>
            <span>Prova sobre Promessa (ADR 005)</span>
            <span>·</span>
            <span className="text-zinc-600 dark:text-zinc-400">WCAG 2.2 AA (A11Y.md)</span>
          </div>
        </div>
      </footer>

      {/* Global Command Palette Modal */}
      {isPaletteOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Busca de estudos de caso e navegação"
          className="fixed inset-0 z-50 bg-zinc-900/40 backdrop-blur-sm flex items-start justify-center pt-20 p-4"
        >
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="flex items-center px-4 border-b border-zinc-100 dark:border-zinc-800">
              <Search className="w-4 h-4 text-zinc-400 mr-2" aria-hidden="true" />
              <input
                type="text"
                autoFocus
                placeholder="Buscar casos de estudo ou navegação..."
                value={searchQuery}
                aria-label="Buscar casos de estudo ou páginas"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3.5 bg-transparent text-sm focus:outline-none dark:text-zinc-100 placeholder-zinc-400"
              />
              <button
                onClick={() => setIsPaletteOpen(false)}
                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-zinc-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Fechar busca rápida"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
            <div className="max-h-64 overflow-y-auto p-2">
              <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider px-3 py-1.5">
                Estudos de Caso
              </div>
              {filteredCases.length > 0 ? (
                filteredCases.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      navigate(`/work/${c.slug}`);
                      setIsPaletteOpen(false);
                    }}
                    className="w-full text-left flex justify-between items-center p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg text-sm transition group"
                  >
                    <div>
                      <div className="font-medium text-zinc-900 dark:text-zinc-100">{c.title}</div>
                      <div className="text-xs text-zinc-500">{c.category} · {c.highlightMetric}</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-xs text-zinc-500">Nenhum resultado encontrado.</div>
              )}

              <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider px-3 pt-3 pb-1.5 border-t border-zinc-100 dark:border-zinc-800">
                Páginas
              </div>
              <button
                onClick={() => { navigate('/work'); setIsPaletteOpen(false); }}
                className="w-full text-left p-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                Ver todos os projetos (/work)
              </button>
              <button
                onClick={() => { navigate('/about'); setIsPaletteOpen(false); }}
                className="w-full text-left p-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                Sobre Mim & Filosofia (/about)
              </button>
              <button
                onClick={() => { navigate('/contact'); setIsPaletteOpen(false); }}
                className="w-full text-left p-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                Falar Comigo (/contact)
              </button>
            </div>
            <div className="px-4 py-2 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-[10px] text-zinc-400 flex justify-between">
              <span>Navegue com clique ou atalhos</span>
              <span>ESC para fechar</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkIndex />} />
          <Route path="/work/:slug" element={<CaseStudyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
