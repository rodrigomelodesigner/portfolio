import { useState } from 'react';
import { Mail, Linkedin, CheckCircle, Send, Copy, Check, FileText } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('contato@rodrigomelo.design');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

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
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
            Canais Diretos
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 motion-safe:animate-pulse dark:bg-emerald-400" />
            Disponível para posições CLT / PJ
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl">
          Iniciar Conversa
        </h1>
        <p className="max-w-prose text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Disponível para posições de Product Design em fintechs, scale-ups de tecnologia e ambientes de operação regulada no Brasil e internacional.
        </p>
      </header>

      {/* Quick Contact Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex flex-col justify-between space-y-4 rounded-md border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="flex items-center justify-between">
            <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
              <Mail className="w-4 h-4" />
            </div>
            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] items-center gap-1 rounded-md bg-zinc-100 px-3 text-xs font-medium text-zinc-900 hover:bg-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:focus-visible:ring-zinc-50 dark:focus-visible:ring-offset-zinc-950"
              aria-label="Copiar endereço de e-mail"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3 h-3 text-emerald-500" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
          <div>
            <span className="block text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">E-mail</span>
            <a
              href="mailto:contato@rodrigomelo.design"
              className="break-all text-xs font-medium text-zinc-900 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:text-zinc-100 dark:focus-visible:ring-zinc-50 dark:focus-visible:ring-offset-zinc-950"
            >
              contato@rodrigomelo.design
            </a>
          </div>
        </div>

        <a
          href="https://linkedin.com/in/rodrigomelodesigner"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col justify-between space-y-3 rounded-md border border-zinc-200 bg-white p-4 hover:border-zinc-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-600 dark:focus-visible:ring-zinc-50 dark:focus-visible:ring-offset-zinc-950"
        >
          <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 w-fit">
            <Linkedin className="w-4 h-4" />
          </div>
          <div>
            <span className="block text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">LinkedIn</span>
            <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">in/rodrigomelodesigner</span>
          </div>
        </a>

        <a
          href="/assets/rodrigo-melo-curriculo.pdf"
          download="rodrigo-melo-curriculo.pdf"
          className="flex flex-col justify-between space-y-3 rounded-md border border-zinc-200 bg-white p-4 hover:border-zinc-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-600 dark:focus-visible:ring-zinc-50 dark:focus-visible:ring-offset-zinc-950"
        >
          <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 w-fit">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <span className="block text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Currículo</span>
            <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">Baixar PDF completo</span>
          </div>
        </a>
      </div>

      {/* Contact Form */}
      <div className="rounded-md border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30 md:p-8">
        <h2 className="text-lg font-semibold mb-6 text-zinc-900 dark:text-zinc-100">
          Enviar Mensagem Direta
        </h2>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="space-y-4 rounded-md border border-zinc-200 bg-zinc-100 p-6 text-center dark:border-zinc-700 dark:bg-zinc-800"
          >
            <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto" aria-hidden="true" />
            <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">Mensagem Registrada</h3>
            <p className="mx-auto max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Obrigado pelo contato! Retornarei em até 24 horas úteis.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
            <div>
              <label htmlFor="name" className="mb-1 block text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Nome Completo <span className="text-rose-600 dark:text-rose-400" aria-hidden="true">*</span>
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
                className="min-h-[44px] w-full rounded-md border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-100 dark:focus:ring-offset-zinc-950"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                E-mail Corporativo <span className="text-rose-600 dark:text-rose-400" aria-hidden="true">*</span>
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
                className="min-h-[44px] w-full rounded-md border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-100 dark:focus:ring-offset-zinc-950"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Contexto / Oportunidade <span className="text-rose-600 dark:text-rose-400" aria-hidden="true">*</span>
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
                className="w-full resize-none rounded-md border border-zinc-200 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-100 dark:focus:ring-offset-zinc-950"
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-900 dark:focus:ring-zinc-50 dark:focus:ring-offset-zinc-950"
            >
              <Send className="w-4 h-4" aria-hidden="true" /> Enviar Mensagem
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
