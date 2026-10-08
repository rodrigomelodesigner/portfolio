# ADR 0003: Modular React Router Architecture and Case Study Routing

## Status
Accepted

## Context
Na etapa inicial (ADR 0002), o `App.tsx` continha a Home e referências para arquivos HTML estáticos (`work/*.html`).
Para habilitar o Lovable.dev a editar visualmente cada página do site de forma granular, além de permitir transições instantâneas sem recarregar a página (SPA), era necessário:
1. Decompor as páginas monolíticas em componentes modulares dentro de `src/pages/`:
   - `Home.tsx` (Hero, Prova de impacto, Casos em destaque, Filosofia e Contato)
   - `WorkIndex.tsx` (Catálogo completo com filtros interativos por tags e busca)
   - `CaseStudyDetail.tsx` (Template dinâmico consumindo `CASES_DATA` por slug, com métricas longitudinais, timeline de decisões e galeria)
   - `About.tsx` (Manifesto dos 3 pilares, especialização regulada e trajetória)
   - `Contact.tsx` (Canais diretos sem fricção e formulário acessível)
   - `NotFound.tsx` (Tratamento elegante de erro 404)
2. Fornecer navegação global consistente (`Layout`), com persistência de tema Dark/Light e Command Palette (`Cmd+K`).

## Decision
1. **Adotar `react-router-dom` v6:**
   - Rotas declarativas em `src/App.tsx`:
     - `/` ➔ `Home`
     - `/work` ➔ `WorkIndex`
     - `/work/:slug` ➔ `CaseStudyDetail`
     - `/about` ➔ `About`
     - `/contact` ➔ `Contact`
     - `*` ➔ `NotFound`
2. **Dynamic Route para Estudos de Caso:**
   - A rota `/work/:slug` renderiza dinamicamente os estudos a partir do `CASES_DATA` tipado em `src/data/cases.ts`.
   - Suporte a links canônicos para os arquivos legados `work/*.html` como fallback ou leitura profunda.
3. **Command Palette (`Cmd+K`):**
   - Implementar paleta de comando acessível no `Layout` para busca em tempo real de estudos de caso e páginas sem poluição visual.

## Consequences
- **Vantagens:**
  - O Lovable.dev agora identifica e visualiza cada página individualmente através da árvore de rotas padrão.
  - Elimina redundância de cabeçalho e rodapé em páginas separadas.
  - Performance aprimorada com navegação sem refresh e renderização instantânea.
- **Compromissos:**
  - Deploys estáticos em hosts como GitHub Pages ou Vercel exigem redirecionamento SPA (`404.html` ou `vercel.json` rewrites) para evitar erro em reload de sub-rotas.
