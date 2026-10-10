import { CASES_DATA, type CaseStudy } from '../data/cases';

export const SITE_ORIGIN = 'https://rodrigomelodesigner.vercel.app';

const LINK_CLASS =
  'inline-flex items-center min-h-[44px] min-w-[44px] underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-950 dark:focus:ring-zinc-50';

const HOME = {
  h1: 'Clareza na decisão, proteção sem obstáculo.',
  role: 'Product Designer & Interface · Local Leader @ IxDF Salvador',
  context: 'Operação Regulada SPA/MF · Sportsbook & Fintech',
  availability: 'Disponível para novas oportunidades',
  lede: 'Desenho fluxos e sistemas de interface em operações reguladas de alto volume: conversão no sportsbook, aquisição orgânica e conformidade ética (SPA/MF). Cada estudo de caso documenta a causa raiz, as decisões de UI e o impacto mensurável.',
  workIntro: 'Decisões metodológicas, métricas reais e entrega de ponta a ponta.',
  craftIntro:
    'Como Product Designer focado em Interface, meu método une estética tipográfica suíça, conformidade estrita de acessibilidade (WCAG 2.2 AA) e especificação semântica para engenharia.',
  craft: [
    {
      title: 'Escala Modular & Contraste AAA',
      body: 'Grid de 4px, fontes Inter neo-grotescas, linha máxima em 65 caracteres (max-w-prose) e contraste nítido em light e dark mode.',
    },
    {
      title: 'Touch Targets & Foco Visível',
      body: 'Área de toque mínima de 44×44px em mobile (SC 2.5.8), foco navegável por teclado sem supressão de outline e suporte a reduced-motion.',
    },
    {
      title: 'Zero Padrões Obstrutivos',
      body: 'Rejeição de dark patterns de retenção. Em fluxos de encerramento e jogo responsável, o usuário encontra saída sóbria em 3 etapas.',
    },
    {
      title: 'Alinhamento com Engenharia',
      body: 'Documentação de regras de negócio, contratos de dados e componentes tipados no Figma, eliminando atrito e retrabalho de sprint.',
    },
  ],
  principles: [
    {
      title: '1. Clareza e Proteção',
      body: 'No Artilheiro, troquei 15 linhas de regulamento por um card que já leva a odd ao boletim. Na Saída responsável, a autoexclusão fica na mesma tela da pausa, a 3 etapas.',
    },
    {
      title: '2. Hipótese e Resultado',
      body: 'No Bolão, a aposta nos grupos de amigos não se confirmou: foram 81 grupos para 9.035 participantes, e o case declara isso. No Artilheiro, declaro o que o teste sequencial não isola.',
    },
    {
      title: '3. Regulação no Começo',
      body: "A v1 da Saída responsável usava retenção persuasiva ('Vamos sentir sua falta'). A v2 adotou linguagem factual ('Esta ação é irreversível') e pausa graduada para conter fechamentos impulsivos sem dark patterns.",
    },
  ],
  contact:
    'Disponível para posições de Product Design em fintechs, scale-ups de tecnologia e ambientes de operação regulada.',
};

const ABOUT = {
  h1: 'Design que transforma regras severas em clareza de uso.',
  lede: 'Atuo na intersecção entre arquitetura de informação, Design Systems, acessibilidade (WCAG 2.2 AA) e usabilidade de produto em setores regulados de alto volume.',
  paragraphs: [
    'Trabalho com design de produto numa operação de apostas esportivas regulada pela SPA/MF. Meus projetos vão da conversão no sportsbook e da aquisição sem mídia paga até fluxos de jogo responsável. Também desenhei a tela de saque via Pix com checagem de titularidade do CPF, em produção desde agosto de 2026.',
    'Acredito que o papel do design em setores complexos não é adicionar ornamentos vazios, mas sim tornar visível a lógica do produto. Elimino a distância cognitiva entre regulamentações compulsórias (como a Portaria SPA/MF nº 1.231) e o modelo mental do usuário, sem recorrer a padrões escuros de retenção.',
  ],
  ixdfTitle: 'Local Leader @ Interaction Design Foundation (IxDF Salvador)',
  ixdf: 'Lidero o capítulo de Salvador do IxDF, organizando encontros presenciais, debates de casos reais e nivelamento técnico para a comunidade local. Defendo uma prática de design generosa e sem barreiras de status: conhecimento só gera valor quando vira sistema compartilhado.',
  principlesIntro: 'Princípios comprovados pelas evidências e dados de cada estudo de caso.',
  principles: [
    {
      title: '1. Clareza e Proteção',
      body: 'No Artilheiro, troquei 15 linhas de regulamento por um card que já leva a odd ao boletim. Na Saída responsável, a autoexclusão fica na mesma tela da pausa, a 3 etapas transparentes.',
    },
    {
      title: '2. Hipótese e Resultado',
      body: 'No Bolão, a aposta nos grupos de amigos não se confirmou: foram 81 grupos para 9.035 participantes, e o case declara isso. No Artilheiro, o case declara o que o teste sequencial não isola.',
    },
    {
      title: '3. Regulação no Começo',
      body: 'A v1 da Saída responsável foi reprovada por soar como retenção disfarçada. A v2 foi desenhada com texto neutro e validada por Compliance, Produto e Jurídico antes de ir para staging.',
    },
  ],
  domains: [
    {
      title: 'Regulação & Compliance Ético',
      body: 'Tradução de portarias governamentais (SPA/MF) em fluxos de jogo responsável, autoexclusão e limites compulsórios.',
    },
    {
      title: 'AI-Assisted Product Engineering',
      body: 'Operação ágil com Lovable, Cursor, Claude Code e suítes de agentes, mantendo governança via ADRs e tipagem estrita.',
    },
  ],
  trajectory: [
    {
      when: '2024 — Presente',
      title: 'Product Designer Pleno · Casa de Apostas (Operação Regulada SPA/MF)',
      body: 'Atuação em squads de produto e engenharia: adequação mandatória à Portaria SPA/MF nº 1.231 (limites prudenciais e autoexclusão em 3 etapas), tela de saque via Pix com checagem de CPF em produção, e aumento de 6,5x em apostas e 4,9x em volume no sportsbook via cards visuais de atleta.',
    },
    {
      when: '2021 — 2024',
      title: 'Product Designer · Produtos Digitais & Plataformas Web',
      body: 'Estruturação de Design Systems em Figma com sincronização de tokens, descoberta contínua de usuários e otimização de taxas de conversão e autosserviço financeiro em squads ágeis.',
    },
  ],
  stack: [
    {
      title: 'Design & UI',
      body: 'Figma (Variables, AutoLayout), Design Tokens, Prototipagem Avançada, Wireframing Swiss Flat.',
    },
    {
      title: 'Engenharia Frontend',
      body: 'React, TypeScript, Tailwind CSS, shadcn/ui, Git & Conventional Commits, Vite.',
    },
    {
      title: 'Dados & Conformidade',
      body: 'WCAG 2.2 AA/AAA, Portaria SPA/MF 1.231, Amplitude, Hotjar, Google Analytics, Testes de Usabilidade.',
    },
  ],
};

const WORK = {
  h1: 'Estudos de Caso & Entregas',
  lede: 'Projetos executados sob restrições severas de compliance, volume e dados reais. Cada estudo de caso documenta hipóteses, decisões e impacto longitudinal.',
};

const CONTACT = {
  h1: 'Iniciar Conversa',
  lede: 'Disponível para posições de Product Design em fintechs, scale-ups de tecnologia e ambientes de operação regulada no Brasil e internacional.',
  email: 'contato@rodrigomelo.design',
  linkedin: 'https://linkedin.com/in/rodrigomelodesigner',
  availability: 'Disponível para posições CLT / PJ',
};

const LIMIT_MARKERS = [
  'não se confirmou',
  'Limites de atribuição',
  'incentivo próprio',
  'Não houve teste A/B',
  'aprovação final',
  'Minha leitura',
];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function absolute(path: string): string {
  if (path === '/') return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}

function casePath(slug: string): string {
  return `/work/${slug}`;
}

function limitNotes(caseItem: CaseStudy): string[] {
  const notes: string[] = [];
  if (/teste A\/B|mídia|conta na plataforma|grupo controle/i.test(caseItem.constraint)) {
    notes.push(caseItem.constraint);
  }
  for (const learning of caseItem.learnings) {
    if (LIMIT_MARKERS.some((marker) => learning.includes(marker))) {
      notes.push(learning);
    }
  }
  return notes;
}

function markdownTable(caseItem: CaseStudy): string {
  if (!caseItem.metricsTable) {
    const value = caseItem.highlightMetric.replace(/\|/g, '\\|');
    return `| Impacto chave |\n| --- |\n| ${value} |`;
  }

  const header = `| ${caseItem.metricsTable.headers.join(' | ')} |`;
  const separator = `| ${caseItem.metricsTable.headers.map(() => '---').join(' | ')} |`;
  const rows = caseItem.metricsTable.rows.map(
    (row) => `| ${row.map((cell) => String(cell).replace(/\|/g, '\\|')).join(' | ')} |`
  );
  return [header, separator, ...rows].join('\n');
}

function caseMarkdown(caseItem: CaseStudy): string {
  const decisions = caseItem.decisions
    .map((decision, index) => `${index + 1}. **${decision.title}.** ${decision.description}`)
    .join('\n\n');
  const learnings = caseItem.learnings.map((learning) => `- ${learning}`).join('\n');
  const limits = limitNotes(caseItem).map((note) => `- ${note}`).join('\n');
  const blocks = [
    `## ${caseItem.title}`,
    '',
    absolute(casePath(caseItem.slug)),
    '',
    caseItem.subtitle,
    '',
    `- Categoria: ${caseItem.category}`,
    `- Empresa: ${caseItem.company}`,
    `- Papel: ${caseItem.role}`,
    `- Squad: ${caseItem.squad}`,
    `- Período: ${caseItem.timeline}`,
    `- Impacto chave: ${caseItem.highlightMetric}`,
    `- Restrição: ${caseItem.constraint}`,
    '',
    '### Problema',
    '',
    caseItem.problem.briefing,
    '',
    '### Reframing',
    '',
    caseItem.problem.reframed,
    '',
  ];

  if (caseItem.hypothesis) {
    blocks.push('### Hipótese', '', caseItem.hypothesis, '');
  }

  if (caseItem.benchmark) {
    blocks.push(
      `### ${caseItem.benchmark.title}`,
      '',
      caseItem.benchmark.description,
      '',
      `Plataformas auditadas: ${caseItem.benchmark.competitors.join(', ')}.`,
      '',
      ...caseItem.benchmark.findings.map((finding) => `- ${finding}`),
      ''
    );
  }

  blocks.push(
    '### Decisões de UI',
    '',
    decisions,
    '',
    '### Métricas auditadas',
    '',
    markdownTable(caseItem),
    '',
    '### O que deu errado / faria diferente',
    '',
    'Trechos publicados no próprio case sobre hipótese não confirmada, limite de medição ou condição que o desenho seguinte precisaria tratar.',
    '',
    limits,
    '',
    '### Aprendizados',
    '',
    learnings,
    ''
  );

  return blocks.join('\n');
}

export function buildLlmsIndex(): string {
  const cases = CASES_DATA.map(
    (caseItem) =>
      `- [${caseItem.title}](${absolute(casePath(caseItem.slug))}): ${caseItem.subtitle}`
  ).join('\n');

  return `# Rodrigo Melo

> Product Designer Pleno em operações reguladas pela SPA/MF. ${HOME.h1}

${HOME.lede}

${HOME.role}. ${HOME.context}. ${HOME.availability}.

Dossiê completo, em Markdown e sem marcação de layout: [llms-full.txt](${absolute('/llms-full.txt')})

## Estudos de caso

${cases}

## Páginas

- [Home](${absolute('/')}): posicionamento, estudos em destaque e princípios operacionais.
- [Estudos de caso](${absolute('/work')}): ${WORK.lede}
- [Sobre](${absolute('/about')}): bio, método, trajetória e liderança no IxDF Salvador.
- [Contato](${absolute('/contact')}): ${CONTACT.email} · ${CONTACT.linkedin}
`;
}

export function buildLlmsFull(): string {
  const homePrinciples = HOME.principles.map((item) => `### ${item.title}\n\n${item.body}`).join('\n\n');
  const craft = HOME.craft.map((item) => `### ${item.title}\n\n${item.body}`).join('\n\n');
  const aboutPrinciples = ABOUT.principles
    .map((item) => `### ${item.title}\n\n${item.body}`)
    .join('\n\n');
  const domains = ABOUT.domains.map((item) => `### ${item.title}\n\n${item.body}`).join('\n\n');
  const trajectory = ABOUT.trajectory
    .map((item) => `### ${item.when} — ${item.title}\n\n${item.body}`)
    .join('\n\n');
  const stack = ABOUT.stack.map((item) => `### ${item.title}\n\n${item.body}`).join('\n\n');
  const cases = CASES_DATA.map((caseItem) => caseMarkdown(caseItem)).join('\n\n---\n\n');

  return `# Rodrigo Melo — Product Designer

> ${HOME.h1}

Origem: ${absolute('/')}
Dossiê índice: ${absolute('/llms.txt')}

## Posicionamento

${HOME.role}

${HOME.context}

${HOME.availability}

${HOME.lede}

${HOME.workIntro}

### Fundação de craft

${HOME.craftIntro}

${craft}

### Princípios operacionais publicados na Home

${homePrinciples}

### Contato publicado na Home

${HOME.contact}

- E-mail: ${CONTACT.email}
- LinkedIn: ${CONTACT.linkedin}
- Página: ${absolute('/contact')}

## Bio

### ${ABOUT.h1}

${ABOUT.lede}

${ABOUT.paragraphs.join('\n\n')}

### ${ABOUT.ixdfTitle}

${ABOUT.ixdf}

### Princípios operacionais publicados no About

${ABOUT.principlesIntro}

${aboutPrinciples}

### Domínio de atuação

${domains}

### Trajetória profissional

${trajectory}

### Stack técnica

${stack}

## Estudos de caso

${cases}
`;
}

function link(href: string, label: string): string {
  return `<a href="${escapeHtml(href)}" class="${LINK_CLASS}">${escapeHtml(label)}</a>`;
}

function paragraph(text: string): string {
  return `<p>${escapeHtml(text)}</p>`;
}

function heading(level: 2 | 3, text: string): string {
  const className =
    level === 2
      ? 'text-2xl font-bold tracking-tight mt-10 mb-3'
      : 'text-lg font-semibold mt-6 mb-2';
  return `<h${level} class="${className}">${escapeHtml(text)}</h${level}>`;
}

function bulletList(items: string[]): string {
  return `<ul>\n${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('\n')}\n</ul>`;
}

function nav(): string {
  return `<nav aria-label="Navegação">
<p>${link('/', 'Home')} ${link('/work', 'Estudos de caso')} ${link('/about', 'Sobre')} ${link('/contact', 'Contato')} ${link('/llms.txt', 'llms.txt')}</p>
</nav>`;
}

function wrap(h1: string, body: string): string {
  return `<main class="max-w-3xl mx-auto px-4 py-8 text-base leading-relaxed text-zinc-900">
${nav()}
<article>
<h1 class="text-3xl font-bold tracking-tight mb-4">${escapeHtml(h1)}</h1>
${body}
</article>
</main>`;
}

function metricsHtml(caseItem: CaseStudy): string {
  if (!caseItem.metricsTable) {
    return `<table class="w-full text-left text-sm border border-zinc-200">
<caption>Métrica publicada de ${escapeHtml(caseItem.title)}</caption>
<thead><tr><th scope="col" class="border border-zinc-200 px-3 py-2 text-left">Impacto chave</th></tr></thead>
<tbody><tr><td class="border border-zinc-200 px-3 py-2">${escapeHtml(caseItem.highlightMetric)}</td></tr></tbody>
</table>`;
  }

  const headers = caseItem.metricsTable.headers
    .map((header) => `<th scope="col" class="border border-zinc-200 px-3 py-2 text-left">${escapeHtml(header)}</th>`)
    .join('');
  const rows = caseItem.metricsTable.rows
    .map(
      (row) =>
        `<tr>${row
          .map(
            (cell) =>
              `<td class="border border-zinc-200 px-3 py-2">${escapeHtml(String(cell))}</td>`
          )
          .join('')}</tr>`
    )
    .join('\n');

  return `<table class="w-full text-left text-sm border border-zinc-200">
<caption>Métricas auditadas de ${escapeHtml(caseItem.title)}</caption>
<thead><tr>${headers}</tr></thead>
<tbody>
${rows}
</tbody>
</table>`;
}

function caseArticle(caseItem: CaseStudy): string {
  const facts = [
    `Categoria: ${caseItem.category}`,
    `Empresa: ${caseItem.company}`,
    `Papel: ${caseItem.role}`,
    `Squad: ${caseItem.squad}`,
    `Período: ${caseItem.timeline}`,
    `Impacto chave: ${caseItem.highlightMetric}`,
    `Restrição: ${caseItem.constraint}`,
  ];
  const decisions = caseItem.decisions
    .map(
      (decision, index) =>
        `<section>${heading(3, `${index + 1}. ${decision.title}`)}${paragraph(decision.description)}</section>`
    )
    .join('\n');
  const benchmark = caseItem.benchmark
    ? `<section>
${heading(2, caseItem.benchmark.title)}
${paragraph(caseItem.benchmark.description)}
${paragraph(`Plataformas auditadas: ${caseItem.benchmark.competitors.join(', ')}.`)}
${bulletList(caseItem.benchmark.findings)}
</section>`
    : '';
  const figures = (caseItem.screenshots ?? [])
    .map(
      (screen) => `<figure>
<img src="${escapeHtml(screen.url)}" alt="${escapeHtml(screen.caption)}" />
<figcaption>${escapeHtml(screen.caption)}</figcaption>
</figure>`
    )
    .join('\n');

  return wrap(caseItem.title, [
    paragraph(caseItem.subtitle),
    bulletList(facts),
    heading(2, 'Problema'),
    paragraph(caseItem.problem.briefing),
    heading(2, 'Reframing'),
    paragraph(caseItem.problem.reframed),
    caseItem.hypothesis ? `${heading(2, 'Hipótese')}${paragraph(caseItem.hypothesis)}` : '',
    benchmark,
    heading(2, 'Decisões de UI'),
    decisions,
    heading(2, 'Métricas auditadas'),
    metricsHtml(caseItem),
    heading(2, 'O que deu errado / faria diferente'),
    paragraph(
      'Trechos publicados no próprio case sobre hipótese não confirmada, limite de medição ou condição que o desenho seguinte precisaria tratar.'
    ),
    bulletList(limitNotes(caseItem)),
    heading(2, 'Aprendizados'),
    bulletList(caseItem.learnings),
    figures ? `${heading(2, 'Interface')}${figures}` : '',
    paragraph(`Página canônica: ${absolute(casePath(caseItem.slug))}`),
  ].join('\n'));
}

function homeArticle(): string {
  const cases = CASES_DATA.map(
    (caseItem) => `<section>
${heading(3, caseItem.title)}
${paragraph(caseItem.subtitle)}
${paragraph(caseItem.highlightMetric)}
<p>${link(casePath(caseItem.slug), 'Abrir estudo de caso')}</p>
</section>`
  ).join('\n');
  const principles = HOME.principles
    .map((item) => `<section>${heading(3, item.title)}${paragraph(item.body)}</section>`)
    .join('\n');
  const craft = HOME.craft
    .map((item) => `<section>${heading(3, item.title)}${paragraph(item.body)}</section>`)
    .join('\n');

  return wrap(HOME.h1, [
    paragraph(`Rodrigo Melo. ${HOME.role}.`),
    paragraph(HOME.context),
    paragraph(HOME.availability),
    paragraph(HOME.lede),
    heading(2, 'Estudos de caso'),
    paragraph(HOME.workIntro),
    cases,
    heading(2, 'Fundação de craft'),
    paragraph(HOME.craftIntro),
    craft,
    heading(2, 'Princípios operacionais'),
    principles,
    heading(2, 'Contato'),
    paragraph(HOME.contact),
    paragraph(`${CONTACT.email}`),
    `<p>${link('/contact', 'Falar comigo')} ${link(CONTACT.linkedin, 'LinkedIn')}</p>`,
  ].join('\n'));
}

function aboutArticle(): string {
  const principles = ABOUT.principles
    .map((item) => `<section>${heading(3, item.title)}${paragraph(item.body)}</section>`)
    .join('\n');
  const domains = ABOUT.domains
    .map((item) => `<section>${heading(3, item.title)}${paragraph(item.body)}</section>`)
    .join('\n');
  const trajectory = ABOUT.trajectory
    .map(
      (item) =>
        `<section>${heading(3, `${item.when} — ${item.title}`)}${paragraph(item.body)}</section>`
    )
    .join('\n');
  const stack = ABOUT.stack
    .map((item) => `<section>${heading(3, item.title)}${paragraph(item.body)}</section>`)
    .join('\n');

  return wrap(ABOUT.h1, [
    paragraph('Rodrigo Melo. Product Designer & Local Leader @ IxDF Salvador.'),
    paragraph('Disponível para posições CLT / PJ'),
    paragraph(ABOUT.lede),
    ...ABOUT.paragraphs.map((text) => paragraph(text)),
    heading(2, ABOUT.ixdfTitle),
    paragraph(ABOUT.ixdf),
    heading(2, 'Os três princípios operacionais'),
    paragraph(ABOUT.principlesIntro),
    principles,
    heading(2, 'Domínio de atuação'),
    domains,
    heading(2, 'Trajetória profissional'),
    trajectory,
    heading(2, 'Stack técnica'),
    stack,
  ].join('\n'));
}

function workArticle(): string {
  const cases = CASES_DATA.map(
    (caseItem) => `<section>
${heading(3, caseItem.title)}
${paragraph(caseItem.subtitle)}
${paragraph(`${caseItem.category} · ${caseItem.highlightMetric}`)}
<p>${link(casePath(caseItem.slug), `Abrir ${caseItem.title}`)}</p>
</section>`
  ).join('\n');

  return wrap(WORK.h1, [paragraph(WORK.lede), cases].join('\n'));
}

function contactArticle(): string {
  return wrap(CONTACT.h1, [
    paragraph(CONTACT.availability),
    paragraph(CONTACT.lede),
    heading(2, 'Canais diretos'),
    `<p>${link(`mailto:${CONTACT.email}`, CONTACT.email)}</p>`,
    `<p>${link(CONTACT.linkedin, 'LinkedIn — in/rodrigomelodesigner')}</p>`,
    `<p>${link('/assets/rodrigo-melo-curriculo.pdf', 'Baixar currículo (PDF)')}</p>`,
    paragraph('O formulário da página depende de JavaScript. Sem ele, use o e-mail ou o LinkedIn.'),
  ].join('\n'));
}

export function renderNoscript(pathname: string): string {
  if (pathname === '/') return homeArticle();
  if (pathname === '/work') return workArticle();
  if (pathname === '/about') return aboutArticle();
  if (pathname === '/contact') return contactArticle();

  const slug = pathname.startsWith('/work/') ? pathname.slice('/work/'.length) : '';
  const caseItem = CASES_DATA.find((item) => item.slug === slug);
  if (caseItem) return caseArticle(caseItem);

  return wrap('Página não encontrada', paragraph('O endereço solicitado não corresponde a uma rota publicada.'));
}

export const LLMS_INDEX = buildLlmsIndex();
export const LLMS_FULL = buildLlmsFull();
