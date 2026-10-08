import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-24 text-center space-y-6">
      <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-mono">
        Erro 404
      </div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Página não encontrada
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto text-sm leading-relaxed">
        A rota solicitada não existe ou foi reorganizada. Retorne à página inicial ou consulte os estudos de caso ativos.
      </p>
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-sm font-medium rounded hover:opacity-90 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para o Início
        </Link>
      </div>
    </div>
  );
}
