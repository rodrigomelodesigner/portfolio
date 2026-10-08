# PROJECT KNOWLEDGE — Portfólio Rodrigo Melo (Lovable.dev)

> **Instrução de uso no Lovable:** Acesse **Project Settings → Manage Knowledge** e cole o conteúdo integral deste arquivo.
> O Lovable envia este arquivo de contexto em **todos os prompts**, garantindo que o design system, os valores emocionais e a arquitetura do produto nunca sofram regressão.

---

## 1. Visão do Produto & Definição do Problema (Lovable Tip 1)

* **Problema a Resolver:** Recrutadores e Hiring Managers de tecnologia (Fintechs, Scale-ups, Setores Regulados no Brasil) precisam avaliar a senioridade, o rigor metodológico e a capacidade de entrega de um Product Designer em menos de 5 minutos, sem ruído visual ou textos inflados.
* **Usuário-Alvo:** Hiring Managers, Diretores de Design/Produto e Recrutadores técnicos.
* **3 a 5 Funcionalidades Obrigatórias (Must-Have):**
  1. *Hero & Proof Strip Escaneável:* Proposta de valor em 5 segundos com dados reais (+1.048% de engajamento, Portaria SPA/MF 1.231).
  2. *Cards de Estudos de Caso Direcionados:* Acesso rápido aos 3 cases principais com problema, decisões e métricas.
  3. *Páginas Individuais de Case Study:* Estrutura de narrativa em blocos (Contexto → Problema Real → Decisões/Trade-offs → Solução Visual → Impacto Longitudinal).
  4. *Página Sobre Mim & Princípios:* Os 3 pilares operacionais (Prova sobre Promessa, Método sobre Ruído, Escuta Ativa).
  5. *Navegação Acessível e Responsiva:* Suporte nativo a Light/Dark Mode (WCAG AA) e renderização limpa em mobile (375px).
* **Armazenamento de Dados:** Conteúdo estruturado estaticamente em arquivos de dados (`data/projects.ts` ou componentes dedicados), sem necessidade de banco relacional pesado para leitura do portfólio.

---

## 2. Definição da Marca & Sistema Visual (Lovable Tip 4)

### Valores Emocionais & Preset de Referência (Emotional Values)
* **Preset Canônico no Lovable:** Basear toda a geração no estilo oficial **`Modern Flat`** de `prompt.lovable.app` (superfícies limpas e planas, bordas de 1px, tipografia Inter, espaçamento modular de 4 a 32px, transições funcionais de 150ms).
* **Contraste:** Muito alto (texto escuro nítido sobre fundo claro / inverso no dark).
* **Leveza e Rigor Técnico:** Estrutura brutalista refinada / Swiss Design funcional.
* **Calor & Ludicidade:** Baixo/Nulo. Zero fofura, zero elementos decorativos vazios, zero mascotes ou ilustrações genéricas de IA.
* **Expressividade:** Editorial e tipográfica — a credibilidade emana da densidade da informação e dos dados reais.

### Paleta de Cores (Colors)
* **Primary (Ação Principal):** Preto sólido no Light (`#18181b` / `bg-zinc-900`) e Branco sólido no Dark (`#f4f4f5` / `bg-zinc-100`). Usado apenas para a ação mais importante de cada tela (ex: CTA "Ver Projetos" ou "Baixar Currículo").
* **Secondary (Ações Secundárias):** Cinza suave e neutro (`bg-zinc-100` / `hover:bg-zinc-200` no Light; `bg-zinc-800` / `hover:bg-zinc-700` no Dark).
* **Neutral (Estrutura e Leitura):**
  * Fundo: `#ffffff` (Light) / `#09090b` ou `#121212` (Dark).
  * Texto Primário: `#18181b` (Light) / `#f4f4f5` (Dark).
  * Texto Secundário (Legendas e Metadados): `#52525b` (Light) / `#a1a1aa` (Dark).
  * Bordas e Divisórias: `#e4e4e7` (Light) / `#27272a` (Dark).
* **Semantic (Dados e Estados):**
  * Sucesso / Lucro / Retenção positiva: Verde semântico (`text-emerald-600` / `text-emerald-400`).
  * Alerta / Risco / Perda financeira: Vermelho semântico (`text-rose-600` / `text-rose-400`).

### Tipografia (Typography)
* **Família:** `font-sans` com fonte `Inter` ou fontes de sistema neo-grotescas.
* **Títulos (Headings):**
  * `H1`: 36px mobile / 48px desktop (`text-4xl` a `text-5xl`), `font-bold`, `tracking-tight`, `leading-tight`.
  * `H2`: 24px (`text-2xl`), `font-bold`, `tracking-tight`.
  * `H3`: 18px a 20px (`text-lg` a `text-xl`), `font-semibold`.
* **Corpo (Body):**
  * Desktop: 16px (`text-base`), `leading-relaxed`.
  * Mobile: 16px para legibilidade máxima.
  * Metadados/Tags: 12px a 14px (`text-xs` a `text-sm`), `font-medium`, `uppercase tracking-wider`.

### Escala de Espaçamento (Spacing)
* Escala consistente: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px.
* Largura máxima do container central: `max-w-4xl` (896px) para garantir linha de leitura ideal (60–80 caracteres).
* Espaçamento entre seções: `py-16` no desktop, `py-12` no mobile.

### Estilo dos Componentes (Components)
* **Botões:** Cantos levemente arredondados (`rounded` ou `rounded-md`, 4px a 6px). Sem cantos totalmente circulares (*pill*). Sem sombras.
* **Cards:** Borda fina de 1px (`border border-zinc-200 dark:border-zinc-800`), sem sombra (*no drop-shadow*), com transição suave de elevação no hover (`hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors`).
* **Tags e Badges:** `bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-0.5 rounded text-xs`.

---

## 3. Diretrizes de Conteúdo & Proibições (Strict Prohibitions)

* **Tom de Voz:** "Prova sobre Promessa. Método sobre Ruído."
* **Proibições Textuais:**
  * Banido qualquer termo coach ou adjetivo vazio: `mindset transformador`, `apaixonado por design`, `disruptivo`, `inovador`, `iluminar caminhos`, `visionário`, `mágico`.
  * Banido texto "Lorem Ipsum" ou métricas fictícias.
* **Proibições Visuais (ADR 005):**
  * PROIBIDO criar logotipos, brasões ou símbolos abstratos. O identificador de marca é puramente tipográfico: `Rodrigo Melo.`
  * PROIBIDO usar gradientes coloridos, neomorfismo ou sombras pesadas.
  * PROIBIDO aninhar cards dentro de cards.

---

## 4. Arquitetura de Rotas do Projeto

* `/` — **Home:** Hero, Proof Strip, Featured Work (3 cards), Sobre Mim Preview, Contato.
* `/work` — **Índice de Projetos:** Lista completa de cases com tags de setor e contexto de entrega.
* `/work/:slug` — **Estudo de Caso Individual:**
  * `/work/artilheiro-da-casa` — Mecânica de Cartas Colecionáveis (+1.048% de engajamento).
  * `/work/limites-prudenciais` — Jogo Responsável e Proteção do Jogador (Portaria SPA/MF 1.231).
  * `/work/pagina-transacoes` — Extrato de 36 meses e autosserviço financeiro.
* `/about` — **Sobre Mim Completo:** Filosofia profissional, 3 pilares de atuação e trajetória.
* `/contact` — **Contato:** E-mail direto, perfil do LinkedIn e download de Currículo (PDF).

---

## 5. Regras Técnicas de Engenharia

1. **HTML Semântico:** Sempre utilizar `<main>`, `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`.
2. **Acessibilidade:** Contraste mínimo 4.5:1, foco visível via teclado (`focus-visible:ring-2 focus-visible:ring-zinc-400`), alt text descritivo em imagens.
3. **Mobile-First:** Testar rigidez em 375px. Botões com área de toque mínima de 44×44px.
4. **Isolamento de Mudanças:** Nunca quebrar componentes ou páginas funcionais ao aplicar novas alterações.
