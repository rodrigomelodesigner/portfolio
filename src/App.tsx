import React, { useState, useEffect } from 'react';
import { CASES_DATA } from './data/cases';
import { 
  Sun, 
  Moon, 
  Command, 
  ArrowUpRight, 
  ArrowDown, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  FileCheck,
  Search,
  X
} from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Check initial preference
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

  const filteredCases = CASES_DATA.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      {/* Navbar */}
      <nav className="max-w-4xl mx-auto p-6 md:px-12 md:py-8 flex justify-between items-center border-b border-zinc-100 dark:border-zinc-900">
        <a href="/" className="font-bold text-xl tracking-tight hover:opacity-80 transition">
          Rodrigo Melo.
        </a>
        <div className="flex gap-6 items-center text-sm font-medium">
          <a href="#work" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition">
            Work
          </a>
          <a href="#about" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition">
            Contact
          </a>
          <button
            onClick={() => setIsPaletteOpen(true)}
            className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
            title="Buscar com atalho de teclado"
          >
            <Command className="w-3.5 h-3.5" />
            <span>K</span>
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
            aria-label="Alternar tema claro e escuro"
          >
            {isDark ? <Sun className="w-4 h-4 text-zinc-200" /> : <Moon className="w-4 h-4 text-zinc-700" />}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 md:px-12 md:py-16">
        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 max-w-2xl">
            Sistemas que sustentam decisões.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-8">
            Sou Product Designer focado em operações reguladas e plataformas de alta escala. Traduzo requisitos de compliance e fricções de negócio em interfaces praticáveis e documentadas.
          </p>
          <div className="flex gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium rounded hover:opacity-90 transition"
            >
              Ver Projetos <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-200 dark:border-zinc-800 font-medium rounded hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
            >
              Sobre mim <ArrowRight className="w-4 h-4" />
            </a>
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
        <section id="work" className="py-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Featured Work</h2>
              <p className="text-sm text-zinc-500 mt-1">Decisões metodológicas, métricas reais e entrega de ponta a ponta.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASES_DATA.map((caseItem) => (
              <a
                key={caseItem.id}
                href={`./work/${caseItem.slug}.html`}
                className="group block border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 transition flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
                    <img
                      src={caseItem.coverImage}
                      alt={caseItem.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
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
                    <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                      {caseItem.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                      {caseItem.subtitle || caseItem.problem.reframed}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    Ver Estudo de Caso <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 border-t border-zinc-100 dark:border-zinc-900">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Sobre Mim & Princípios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
              <ShieldCheck className="w-6 h-6 mb-4 text-zinc-800 dark:text-zinc-200" />
              <h3 className="font-semibold text-base mb-2">Fricção como Proteção</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Em mercados regulados, facilidade cega gera dano financeiro e passivo jurídico. Projetar atrito consciente é um dever ético de design.
              </p>
            </div>
            <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
              <Layers className="w-6 h-6 mb-4 text-zinc-800 dark:text-zinc-200" />
              <h3 className="font-semibold text-base mb-2">Sistemas sobre Artefatos</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Telas individuais envelhecem rápido. Regras de negócio tipadas, tokens semânticos e documentação viva escalam a maturidade do produto.
              </p>
            </div>
            <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
              <FileCheck className="w-6 h-6 mb-4 text-zinc-800 dark:text-zinc-200" />
              <h3 className="font-semibold text-base mb-2">Evidência sobre Opinião</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Toda hipótese estética deve ser submetida a teste empírico (ADR 005). Menos conjecturas subjetivas, mais métricas longitudinais rastreáveis.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 border-t border-zinc-100 dark:border-zinc-900">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Contato</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Disponível para posições sênior de Product Design em fintechs, scale-ups de tecnologia e ambientes de operação regulada.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <a
                href="mailto:contato@rodrigomelo.design"
                className="px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded hover:opacity-90 transition"
              >
                contato@rodrigomelo.design
              </a>
              <a
                href="https://linkedin.com/in/rodrigomelodesigner"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto p-6 md:px-12 py-8 border-t border-zinc-100 dark:border-zinc-900 text-xs text-zinc-500 flex justify-between items-center">
        <span>© {new Date().getFullYear()} Rodrigo Melo. Todos os direitos reservados.</span>
        <span>Prova sobre Promessa (ADR 005)</span>
      </footer>

      {/* Command Palette Modal */}
      {isPaletteOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-900/40 backdrop-blur-sm flex items-start justify-center pt-24 p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="flex items-center px-4 border-b border-zinc-100 dark:border-zinc-800">
              <Search className="w-4 h-4 text-zinc-400 mr-2" />
              <input
                type="text"
                autoFocus
                placeholder="Buscar casos de estudo ou seções..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3.5 bg-transparent text-sm focus:outline-none dark:text-zinc-100 placeholder-zinc-400"
              />
              <button
                onClick={() => setIsPaletteOpen(false)}
                className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-zinc-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="max-h-64 overflow-y-auto p-2">
              {filteredCases.length > 0 ? (
                filteredCases.map((c) => (
                  <a
                    key={c.id}
                    href={`./work/${c.slug}.html`}
                    onClick={() => setIsPaletteOpen(false)}
                    className="flex justify-between items-center p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg text-sm transition group"
                  >
                    <div>
                      <div className="font-medium text-zinc-900 dark:text-zinc-100">{c.title}</div>
                      <div className="text-xs text-zinc-500">{c.category} · {c.highlightMetric}</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                  </a>
                ))
              ) : (
                <div className="p-4 text-center text-xs text-zinc-500">Nenhum resultado encontrado.</div>
              )}
            </div>
            <div className="px-4 py-2 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-[10px] text-zinc-400 flex justify-between">
              <span>Navegue com Enter</span>
              <span>ESC para fechar</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
