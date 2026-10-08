# Changelog — Rodrigo Melo Portfolio

Todas as modificações notáveis deste projeto serão documentadas neste arquivo.
O formato é baseado no [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/) e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

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
