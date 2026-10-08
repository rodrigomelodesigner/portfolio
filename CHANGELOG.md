# Changelog — Rodrigo Melo Portfolio

Todas as modificações notáveis deste projeto serão documentadas neste arquivo.
O formato é baseado no [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/) e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [v1.3.0] — 2026-10-08 — Protocolo de Acessibilidade Persistente A11Y.md, Skill Accessibility & ADR 0006

### 🚀 Visão Geral da Versão
Esta versão estabelece a conformidade canônica com acessibilidade digital através da integração do protocolo **A11Y.md v2.2.0** como contexto persistente para agentes de IA (**Lovable.dev, Cursor, Claude Code e Antigravity**). Adiciona a skill especializada `accessibility` (`addyosmani/web-quality-skills`), formaliza o **ADR 0006**, implementa melhorias de acessibilidade no código (skip links, landmarks, WAI-ARIA Dialog, `aria-required` e tabelas semânticas) e cria o validador automatizado `verify-a11y`.

---

### ♿ Acessibilidade Canônica & Protocolo A11Y.md v2.2.0
- **Núcleo Normativo e Governança (`docs/a11y/`):**
  - Integração do [`A11Y.md`](docs/a11y/A11Y.md) (v2.2.0 por Felipe Carrico) estabelecendo o Princípio Zero e as 19 regras do AI Behavior Contract.
  - Criação de [`docs/a11y/A11Y-DECISIONS.md`](docs/a11y/A11Y-DECISIONS.md) (memória de decisões técnicas e conformidade WCAG 2.2 AA / Shield AAA).
  - Criação de [`docs/a11y/EXCEPTIONS.md`](docs/a11y/EXCEPTIONS.md) (registro de desvios com status zero exceções ativas).
  - Criação de [`docs/a11y/REPORT.md`](docs/a11y/REPORT.md) (relatório oficial de release evidence com status PASS).
- **ADR 0006 Registrado:**
  - [`ADR 0006`](docs/adr/0006-a11ymd-persistent-accessibility-contract.md): Persistent Accessibility Protocol (A11Y.md v2.2.0) and Automated Verification Gates.
- **Implementações na Interface:**
  - Adição de Skip Link para `#main-content` no topo do `src/App.tsx` (SC 2.4.1).
  - Landmark `<main id="main-content" tabIndex={-1}>` para foco acessível em transição de SPA.
  - Diálogo acessível WAI-ARIA no Command Palette (`role="dialog"`, `aria-modal="true"`).
  - Estados `aria-pressed` no botão de alternância de tema e filtros de categoria.
  - Acessibilidade semântica de formulário com `aria-required="true"` e feedback `role="status"` no `Contact.tsx`.
  - Cabeçalhos `scope="col"` e `<caption>` descritiva nas tabelas de métricas do `CaseStudyDetail.tsx`.
- **Automação e Nova Skill (`.agents/skills/accessibility`):**
  - Instalação da skill `accessibility` (`addyosmani/web-quality-skills`) travada no `skills-lock.json` (20 skills no total).
  - Criação de `tools/verify-a11y.mjs` com script `npm run verify-a11y` no `package.json`.

---

## [v1.2.0] — 2026-10-08 — Rotas Modulares React, Suíte Completa de 19 Skills, Manual In-Repo & Pipeline de Mídia

### 🚀 Visão Geral da Versão
Esta versão consolida a arquitetura modular SPA do portfólio para edição visual total no **Lovable.dev** e desenvolvimento ágil no **Cursor / Claude Code / Antigravity**. Expande a suíte de skills de IA para 19 ferramentas especializadas, introduz os manuais definitivos de skills e workflow, formaliza os ADRs 0003 e 0004, e adiciona pipeline automatizado de auditoria de mídia para conformidade com Core Web Vitals.

---

### ⚛️ Arquitetura de Páginas Modulares React (`src/pages/`)
- **Decomposição em Componentes Especializados:**
  - `src/pages/Home.tsx`: Hero de alta densidade, Proof Strip, Featured Work conectado ao `CASES_DATA`, Prévia do Manifesto e Callout de contato.
  - `src/pages/WorkIndex.tsx`: Catálogo completo de projetos com filtros dinâmicos por categoria (Gamificação, Compliance, Autosserviço) e barra de busca.
  - `src/pages/CaseStudyDetail.tsx`: Rota dinâmica `/work/:slug` com breadcrumbs, refatoração de problema, hipótese de design, métricas longitudinais completas, timeline de decisões e galeria com lazy-loading.
  - `src/pages/About.tsx`: Manifesto completo dos três pilares operacionais (*Fricção como Proteção*, *Sistemas sobre Artefatos*, *Evidência sobre Opinião*) e domínio de regulação.
  - `src/pages/Contact.tsx`: Canais diretos rápidos (E-mail e LinkedIn) e formulário acessível com validação e feedback.
  - `src/pages/NotFound.tsx`: Rota fallback 404 estilizada sob o design system.
- **Casca de Layout Unificada (`src/App.tsx`):**
  - Header fixo com efeito blur, alternador de tema Dark/Light persistente e acionador da Command Palette.
  - Command Palette global (`Cmd+K` / `Ctrl+K`) permitindo busca instantânea em tempo real de estudos de caso e páginas.
  - Rodapé semântico unificado com menção ao ADR 005.

### 📦 Suíte Completa de 19 Skills de Agente (`.agents/skills/`)
- **Instalação do Lote 2 & Sincronização em `skills-lock.json`:**
  - `vercel-react-best-practices`: Otimização de performance React e Next.js.
  - `handoff`: Transição estruturada de contexto entre sessões e agentes de IA.
  - `web-design-guidelines`: Auditoria de conformidade com WCAG 2.2 AA e UX moderno.
  - `caveman`: Modo conciso de alta densidade técnica com economia de tokens.
  - `redesign-existing-projects`: Elevação de sofisticação visual e eliminação de *AI slop*.
  - `skill-creator`: Criação, teste e calibração de novas skills especializadas.
  - `writing-for-agents`: Engenharia de documentação otimizada para modelos de linguagem.
  - `obsidian-vault`: Integração e catalogação de notas de pesquisa em cofre Obsidian.
  - `vercel-composition-patterns`: Padrões de composição e erradicação de props booleanas.

### 📖 Manuais e Governança In-Repo
- **Manual de Skills (`docs/MANUAL-SKILLS.md`):**
  - Guia definitivo para as 19 skills com matriz de decisão, quando usar / quando evitar, prompts de exemplo validados e combos encadeados.
- **Workflow Multi-IA (`docs/WORKFLOW.md`):**
  - Ciclo de trabalho integrado entre Lovable.dev (visual), Cursor (tipos e código), Claude Code (conteúdo e ADRs) e Antigravity (skills e testes). Protocolo rigoroso de handoff e quality gates inegociáveis.
- **Decisões de Arquitetura Registradas (`docs/adr/`):**
  - `ADR 0003`: Modular React Router Architecture and Case Study Routing.
  - `ADR 0004`: Image Asset Optimization and Core Web Vitals Budget.

### 🖼️ Pipeline e Auditoria de Mídia
- **Script Executável de Auditoria (`scripts/optimize-images.mjs`):**
  - Adicionado comando `npm run optimize-images` no `package.json`.
  - Diagnóstico automatizado de 89 arquivos de imagem em `public/images/` totalizando 235 MB.
  - Relatório gerado em `docs/reports/image-inventory.md` classificando assets críticos (> 2 MB), de atenção e otimizados, projetando economia de até 75% na conversão para WebP.

---

## [v1.1.0] — 2026-10-08 — Suíte de Skills de Agente, Compatibilidade Multi-IA (Lovable/Cursor) & Governança de ADRs

### 🚀 Visão Geral da Versão
Esta versão introduz a infraestrutura completa para operação colaborativa por múltiplos agentes de inteligência artificial (**Antigravity, Cursor, Claude Code e Lovable.dev**). Estabelece a suíte de skills de engenharia, governança formalizada via ADRs e compatibilidade nativa com o Lovable através de uma fundação moderna em Vite + React 18 + TypeScript.

---

### 📦 Suíte de Skills de Agentes (`.agents/skills/`)
- **Descoberta & Rastreamento:** Adição de `skills-lock.json` com hashes SHA-256 determinísticos.
- **9 Skills Instaladas e Validadas:**
  - `find-skills` (Vercel Labs): busca e descoberta no ecossistema aberto de skills.
  - `grill-with-docs` (Matt Pocock): entrevistas estruturadas para refinamento com geração automática de docs.
  - `improve-codebase-architecture` (Matt Pocock): auditoria de modularidade e geração de relatório visual em HTML.
  - `agent-browser` (Vercel Labs): automação e QA em navegador via CLI Rust nativo.
  - `frontend-design` (Anthropic): diretrizes estéticas e combate ao *AI slop*.
  - `setup-matt-pocock-skills` (Matt Pocock): configuração inicial do workspace de engenharia.
  - `domain-modeling`, `grilling` e `codebase-design`: dependências internas complementares da suíte de engenharia.

### 🏛️ Governança & Arquitetura de Domínio
- **Architecture Decision Records (`docs/adr/`):**
  - `ADR 0001`: Record Architecture Decisions.
  - `ADR 0002`: Vite + React Architecture for Multi-AI Compatibility.
  - `ADR 0005`: Prova sobre Promessa (Design Philosophy & Brand Voice).
- **Instruções de Agente & Vocabulário:**
  - `AGENTS.md`: convenções unificadas para Lovable, Cursor, Claude e Antigravity.
  - `GLOSSARY.md`: vocabulário canônico do domínio e sistema de tokens.
  - `docs/agents/issue-tracker.md`: mapeamento para GitHub Issues (`rodrigomelodesigner/portfolio`).
  - `docs/agents/domain.md`: regras de consumo de domínio single-context.

### ⚛️ Arquitetura de Código & Compatibilidade Lovable.dev
- **Ambiente Vite + React 18 + TypeScript:**
  - Adição de `package.json`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.js` e `postcss.config.js`.
  - Implementação de `src/App.tsx` renderizando a interface a partir da fonte única de verdade em `src/data/cases.ts`.
  - Inclusão de alternador de tema Dark/Light e Command Palette interativo (`Cmd+K`).
  - Preservação da versão estática em `index.static.html` e dos cases em `work/*.html`.

---

## [v1.0.0] — 2026-10-08 — Fundação do Portfólio, Casos de Estudo Regulados & Design System Base

### 🚀 Visão Geral da Versão
Lançamento inicial oficial do repositório do portfólio profissional de **Rodrigo Melo** (Product Designer Pleno). Esta versão estabelece a fundação completa da aplicação sob a diretriz **"Prova sobre Promessa"** (ADR 005), priorizando métricas empíricas reais, ausência de alegações infladas e foco em ambientes regulados de alta complexidade (Fintech e iGaming).

---

### 🏛️ Arquitetura & Estrutura de Informação
- **Home Estruturada (`index.html`):**
  - Header de posicionamento sênior com métricas consolidadas (`-54% tempo de onboarding`, `+1.048% engajamento gamificado`, `+237% aquisição B2C`).
  - Seção *Featured Work* com cards semânticos de alto contraste, tags de categoria e links para estudos de caso.
  - Seção *Sobre Mim* apresentando os três pilares metodológicos: *Fricção como Proteção*, *Sistemas sobre Artefatos* e *Evidência sobre Opinião*.
  - Alternador nativo de tema (Dark / Light Mode) sem dependência externa pesada.
- **Páginas de Estudo de Caso Dedicadas (`work/*.html`):**
  - `/work/artilheiro-da-casa.html` — Case completo da mecânica de cards colecionáveis e retenção esportiva.
  - `/work/limites-prudenciais.html` — Case do fluxo ético de autoexclusão e limites (Portaria SPA/MF nº 1.231).
  - `/work/pagina-transacoes.html` — Case da arquitetura de extrato de 36 meses e autosserviço financeiro.

### 📊 Camada de Dados & Tipagem (`src/data/cases.ts`)
- **Interface TypeScript `CaseStudy`:** Tipagem estrita de metadados, métricas de impacto, hipóteses de design, problemas refatorados, tabelas de dados e capturas de tela.
- **Métricas Longitudinais Verificadas:** Rastreamento tabular das 7 rodadas do Brasileirão 2025 para o projeto Artilheiro da Casa (de 72 para 827 apostas), discriminando picos de retenção e causas de queda externa com total transparência.

### 🎨 Design System & Estilização
- **Tokens Semânticos Zinc:** Paleta monocromática balanceada (Zinc 50 a 950) com contraste rigorosamente testado sob WCAG 2.2 Nível AA.
- **Preset Estético *Modern Flat*:** Estilo suíço, bordas refinadas, superfícies neutras e hierarquia tipográfica neo-grotesca sem decorações supérfluas.

### 🖼️ Ativos Visuais de Alta Fidelidade (Figma Mine)
- **Descarte de Thumbnails Internos:** Eliminação dos thumbnails genéricos de organização do Figma como capas de projeto.
- **3 Capas de Showcase de Alta Resolução (`public/images/covers/`):**
  - `artilheiro_showcase_cover.png` (3000 × 2000 px): Mockup e composição dos cards colecionáveis.
  - `limites_showcase_cover.png` (1080 × 2400 px): Frame mobile real de definição de limites diários e semanais.
  - `transacoes_showcase_cover.png` (2600 × 1463 px): Mockup do painel consolidado desktop.
- **42 Telas e Componentes Reais Anexados:**
  - Cards individuais de atletas em alta definição (Pedro, Hulk, Raphael Veiga, Estêvão).
  - Telas mobile do fluxo de proteção do jogador (depósitos, pausas conscientes, perdas líquidas, carência de 24h).
  - Telas mobile e desktop de extrato financeiro (segregação esportes vs cassino, seletores temporais até 36 meses).

### 📋 Documentação para IA & Lovable (`PROJECT_KNOWLEDGE.md`)
- Documento de contexto completo pronto para o **Manage Knowledge** do Lovable.dev, contendo:
  - Diretrizes do Brand Voice ("calmo, factual, sem adjetivos vazios").
  - Regras de navegação e atalhos (`Cmd+K`).
  - Especificação dos 3 cases com hipóteses, métricas e trade-offs de engenharia.

### ⚖️ Governança & Setup
- Licença MIT para código-fonte e proteção de propriedade intelectual para conteúdos autorais.
- Configuração de `.gitignore` abrangente para ecossistemas Node/React/Vite.
- `README.md` detalhado com instruções de clone, execução local e estrutura do projeto.
