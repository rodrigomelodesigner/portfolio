# ADR 0006: Persistent Accessibility Protocol (A11Y.md v2.2.0) and Automated Verification Gates

## Status
Accepted

## Context
Como portfólio de Product Design focado em operações reguladas de alto risco (Fintech e iGaming, submetidas à Portaria SPA/MF nº 1.231, Lei Brasileira de Inclusão nº 13.146/2015 e WCAG 2.2), a acessibilidade não pode ser uma camada opcional ou auditada apenas retroativamente.

Ademais, no desenvolvimento assistido por inteligência artificial (Lovable.dev, Cursor, Claude Code, Antigravity), IAs tendem a gerar interfaces com vícios de inacessibilidade por padrão (ex: `div` com `onClick`, anéis de foco suprimidos, `alt=""` silencioso em mockups, e falta de gerenciamento de foco em modais).

Para resolver isso de forma estrutural, incorporamos o padrão canônico **A11Y.md** (criado por Felipe Carrico), complementado pela suíte de skills especializadas de acessibilidade (`accessibility` por Addy Osmani e `web-design-guidelines` da Vercel).

## Decision
1. **Adoção do Padrão Normativo A11Y.md v2.2.0:**
   - O núcleo normativo é versionado localmente em [`docs/a11y/A11Y.md`](../a11y/A11Y.md).
   - Inclusão da diretriz persistente em `AGENTS.md` e `PROJECT_KNOWLEDGE.md`: *"Ao desenvolver o frontend, siga estritamente as regras de acessibilidade do arquivo `docs/a11y/A11Y.md`."*
2. **Definição de Perfil de Conformidade:**
   - **Alvo:** **Standard (WCAG 2.2 Nível AA)**.
   - **Aspiração Shield (AAA):** Contraste da paleta Zinc superando 7:1 em textos primários e alvos de toque mínimos de 44×44px em todos os controles navegáveis.
3. **Ciclo de Vida de Governança:**
   - [`docs/a11y/A11Y-DECISIONS.md`](../a11y/A11Y-DECISIONS.md): Memória compartilhada de decisões técnicas entre humanos e IAs.
   - [`docs/a11y/EXCEPTIONS.md`](../a11y/EXCEPTIONS.md): Registro transparente de exceções temporárias (atualmente zero exceções ativas).
   - [`docs/a11y/REPORT.md`](../a11y/REPORT.md): Relatório de evidência exigido antes de tags ou deploys.
4. **Implementação de Melhorias no Código:**
   - **Skip Link:** Implementado no topo de `src/App.tsx` para `#main-content` (SC 2.4.1).
   - **Landmarks:** `<main id="main-content" tabIndex={-1}>` com foco programático em transição de rota.
   - **WAI-ARIA APG Dialog:** Command Palette (`Cmd+K`) com `role="dialog"`, `aria-modal="true"` e fechamento via `Escape`.
   - **Formulários Acessíveis:** Atributos `aria-required="true"` e feedback com `role="status"` e `aria-live="polite"`.
   - **Tabelas Semânticas:** Inclusão de `scope="col"` e `<caption>` descritiva em tabelas de métricas.
5. **Automação e Gates de Qualidade:**
   - Criação de `tools/verify-a11y.mjs` executável via `npm run verify-a11y`.
   - Instalação da skill especializada `accessibility` (`addyosmani/web-quality-skills`) em `.agents/skills/accessibility/SKILL.md` travada no `skills-lock.json`.

## Consequences
- **Vantagens:**
  - Garantia de que qualquer IA (Lovable, Cursor, Claude, Antigravity) respeita as regras de acessibilidade antes de sugerir ou gerar código.
  - Alinhamento aos mais altos padrões de conformidade técnica exigidos por empresas reguladas globais e nacionais.
  - Zero dependência de terceiros ou overlays externos falsos de acessibilidade.
- **Compromissos:**
  - Todo novo componente interativo deve ser verificado contra `docs/a11y/A11Y-DECISIONS.md` e testado via `npm run verify-a11y`.
