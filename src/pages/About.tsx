import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Layers, FileCheck, ArrowRight, Award, Compass, Cpu } from 'lucide-react';

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
          Sistemas que sustentam decisões e simplificam jornadas de alto risco.
        </p>
      </header>

      {/* Main Narrative */}
      <section className="space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-base max-w-3xl">
        <p>
          Atuo como <strong>Product Designer Pleno</strong> com foco em operações reguladas e plataformas de alta escala (Fintech e iGaming). Minha prática profissional é orientada pela interseção entre conformidade técnica, fricção positiva e arquitetura de design escalável.
        </p>
        <p>
          Acredito que o papel do design em setores complexos não é adicionar camadas de ornamentação, mas sim <strong>tornar visível a lógica do sistema</strong>. Reduzo a distância cognitiva entre regulamentações compulsórias (como a Portaria SPA/MF nº 1.231) e o modelo mental do usuário final.
        </p>
      </section>

      {/* The 3 Pillars */}
      <section className="space-y-8 pt-8 border-t border-zinc-100 dark:border-zinc-900">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Os Três Pilares Operacionais
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Princípios metodológicos adotados em cada ciclo de descoberta e entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
              1. Fricção como Proteção
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Em produtos financeiros e apostas, a facilidade cega gera endividamento e passivo judicial. Projetar atrito consciente é um dever ético de design que resguarda a vida do usuário.
            </p>
          </div>

          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
              2. Sistemas sobre Artefatos
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Telas desenhadas no Figma envelhecem rápido se desconectadas do código. Priorizo regras de negócio tipadas, tokens de design semânticos e documentação viva que apoiam engenheiros.
            </p>
          </div>

          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
              3. Evidência sobre Opinião
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Submeto hipóteses estéticas à validação empírica (ADR 005). Resultados medidos em ciclos reais (como +1.048% no Brasileirão) têm precedência sobre opiniões subjetivas em salas de reunião.
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

      {/* CTA Footer */}
      <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900 flex justify-between items-center">
        <Link
          to="/work"
          className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          &larr; Ver Estudos de Caso
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded text-xs font-semibold"
        >
          Entrar em Contato <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
