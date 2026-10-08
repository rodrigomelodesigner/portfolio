import React, { useState } from 'react';
import { Mail, Linkedin, Github, CheckCircle, Send, FileText } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="py-6 md:py-12 space-y-12 max-w-2xl">
      {/* Header */}
      <header className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Canais Diretos
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Iniciar Conversa
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Disponível para posições sênior de Product Design em fintechs, scale-ups de tecnologia e ambientes de operação regulada no Brasil e internacional.
        </p>
      </header>

      {/* Quick Contact Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="mailto:contato@rodrigomelo.design"
          className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 transition flex items-center gap-3 bg-white dark:bg-zinc-900/40"
        >
          <div className="p-2.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xs text-zinc-500 uppercase tracking-wider font-semibold">E-mail</span>
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">contato@rodrigomelo.design</span>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/rodrigomelodesigner"
          target="_blank"
          rel="noreferrer"
          className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 transition flex items-center gap-3 bg-white dark:bg-zinc-900/40"
        >
          <div className="p-2.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
            <Linkedin className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xs text-zinc-500 uppercase tracking-wider font-semibold">LinkedIn</span>
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">in/rodrigomelodesigner</span>
          </div>
        </a>
      </div>

      {/* Contact Form */}
      <div className="p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/30">
        <h2 className="text-lg font-semibold mb-6 text-zinc-900 dark:text-zinc-100">
          Enviar Mensagem Direta
        </h2>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-center space-y-2 border border-zinc-200 dark:border-zinc-700"
          >
            <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto" aria-hidden="true" />
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">Mensagem Registrada</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Obrigado pelo contato! Retornarei em até 24 horas úteis.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
                Nome Completo <span className="text-rose-500" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                aria-required="true"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Gabriel Nascimento"
                className="w-full px-3.5 py-2.5 min-h-[44px] text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded focus:outline-none focus:ring-2 focus:ring-zinc-400 text-zinc-900 dark:text-zinc-100"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
                E-mail Corporativo <span className="text-rose-500" aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.nome@empresa.com"
                className="w-full px-3.5 py-2.5 min-h-[44px] text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded focus:outline-none focus:ring-2 focus:ring-zinc-400 text-zinc-900 dark:text-zinc-100"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
                Contexto / Oportunidade <span className="text-rose-500" aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Descreva brevemente o projeto, squad ou desafio de produto..."
                className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded focus:outline-none focus:ring-2 focus:ring-zinc-400 text-zinc-900 dark:text-zinc-100 resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-sm font-medium rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 transition w-full justify-center"
            >
              <Send className="w-4 h-4" aria-hidden="true" /> Enviar Mensagem
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
