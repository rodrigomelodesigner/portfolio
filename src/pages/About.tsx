import { Link } from 'react-router-dom';
import { ShieldCheck, Layers, FileCheck, ArrowRight, Compass, Cpu } from 'lucide-react';

export default function About() {
  return (
    <div className="py-6 md:py-12 space-y-16">
      {/* Header */}
      <header className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Trajetória & Filosofia
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Sobre Rodrigo Melo
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Desenho fluxos de produto numa operação de apostas regulada pela SPA/MF.
        </p>
      </header>

      {/* Main Narrative */}
      <section className="space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-base max-w-3xl">
        <p>
          Trabalho com design de produto numa operação de apostas esportivas regulada pela SPA/MF. Meus projetos vão da conversão no sportsbook e da aquisição sem mídia paga até fluxos de jogo responsável. Também desenhei a tela de saque via Pix com checagem de titularidade do CPF, em produção desde agosto de 2026.
        </p>
        <p>
          Acredito que o papel do design em setores complexos não é adicionar ornamentos, mas sim <strong>tornar visível a lógica do produto</strong>. Elimino a distância cognitiva entre regulamentações compulsórias (como a Portaria SPA/MF nº 1.231) e o modelo mental do usuário, sem recorrer a padrões escuros de retenção.
        </p>
      </section>

      {/* The 3 Pillars */}
      <section className="space-y-8 pt-8 border-t border-zinc-100 dark:border-zinc-900">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Os Três Princípios
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Princípios comprovados pelas evidências de cada estudo de caso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
              1. Clareza e Proteção
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No Artilheiro, troquei 15 linhas de regulamento por um card que já leva a odd ao boletim. Na Saída responsável, a autoexclusão fica na mesma tela da pausa, a 3 etapas.
            </p>
          </div>

          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
              2. Hipótese e Resultado
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No Bolão, a aposta nos grupos de amigos não se confirmou: foram 81 grupos para 9.035 participantes, e o case diz isso. No Artilheiro, o case declara o que o teste sequencial não consegue separar.
            </p>
          </div>

          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
              3. Regulação no Começo
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              A v1 da Saída responsável foi reprovada por soar como retenção disfarçada. A v2 foi desenhada já com texto neutro e validada por Compliance, Produto e Jurídico antes de ir para staging.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Practice */}
      <section className="space-y-6 pt-8 border-t border-zinc-100 dark:border-zinc-900">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Domínio de Atuação
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-start gap-3">
            <Compass className="w-5 h-5 text-zinc-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Regulação & Compliance Ético</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">Tradução de portarias governamentais (SPA/MF) em fluxos de jogo responsável, autoexclusão e limites compulsórios.</p>
            </div>
          </div>
          <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-start gap-3">
            <Cpu className="w-5 h-5 text-zinc-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">AI-Assisted Product Engineering</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">Operação ágil com Lovable, Cursor, Claude Code e suítes de agentes, mantendo governança via ADRs e tipagem estrita.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trajetória & Experiência */}
      <section className="space-y-6 pt-8 border-t border-zinc-100 dark:border-zinc-900">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Trajetória Profissional
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Experiência focada em produtos digitais de alta complexidade e impacto regulado.
          </p>
        </div>

        <div className="space-y-6 border-l border-zinc-200 dark:border-zinc-800 ml-3 pl-6">
          <div className="relative">
            <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-white dark:ring-zinc-950" />
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
              2024 — Presente
            </div>
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
              Product Designer Pleno · Casa de Apostas (Operação Regulada SPA/MF)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
              Atuação em squads de produto e engenharia: adequação mandatória à Portaria SPA/MF nº 1.231 (limites prudenciais e autoexclusão em 3 etapas), tela de saque via Pix com checagem de CPF em produção, e aumento de 6,5x em apostas e 4,9x em volume no sportsbook via cards visuais de atleta.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-600 ring-4 ring-white dark:ring-zinc-950" />
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
              2021 — 2024
            </div>
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
              Product Designer · Produtos Digitais & Plataformas Web
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
              Estruturação de Design Systems em Figma com sincronização de tokens, descoberta contínua de usuários e otimização de taxas de conversão e autosserviço financeiro em squads ágeis.
            </p>
          </div>
        </div>
      </section>

      {/* Stack & Ferramentas */}
      <section className="space-y-6 pt-8 border-t border-zinc-100 dark:border-zinc-900">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Stack Técnica & Ferramentas
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Conjunto de instrumentos metodológicos e tecnologias utilizadas no dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30">
            <span className="font-bold uppercase tracking-wider text-zinc-500 block mb-2">Design & UI</span>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Figma (Variables, AutoLayout), Design Tokens, Prototipagem Avançada, Wireframing Swiss Flat.
            </p>
          </div>
          <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30">
            <span className="font-bold uppercase tracking-wider text-zinc-500 block mb-2">Engenharia Frontend</span>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              React, TypeScript, Tailwind CSS, shadcn/ui, Git & Conventional Commits, Vite.
            </p>
          </div>
          <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30">
            <span className="font-bold uppercase tracking-wider text-zinc-500 block mb-2">Dados & Conformidade</span>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              WCAG 2.2 AA/AAA, Portaria SPA/MF 1.231, Amplitude, Hotjar, Google Analytics, Testes de Usabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-wrap gap-4 justify-between items-center">
        <Link
          to="/work"
          className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 min-h-[44px] inline-flex items-center"
        >
          &larr; Ver Estudos de Caso
        </Link>
        <div className="flex gap-3">
          <a
            href="/assets/rodrigo-melo-curriculo.pdf"
            download="rodrigo-melo-curriculo.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition min-h-[44px]"
          >
            Baixar Currículo (PDF)
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded text-xs font-semibold hover:opacity-90 transition min-h-[44px]"
          >
            Entrar em Contato <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
