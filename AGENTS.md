# Agent Instructions — Portfólio Rodrigo Melo

Este repositório é operado de forma colaborativa por múltiplos agentes de IA (**Antigravity, Cursor, Claude Code, Lovable.dev**).
Todas as inteligências artificiais atuando neste workspace devem seguir estritamente as convenções abaixo.

---

## 🎯 Princípios Norteadores (ADR 005)

1. **"Prova sobre Promessa. Método sobre Ruído."**
   - Nunca use chavões de autoajuda, termos vazios ("apaixonado por inovação", "visionário") ou texto *Lorem Ipsum*.
   - Todas as alegações de impacto no portfólio devem ser ancoradas em dados reais (ex: +1.048% de engajamento, conformidade Portaria SPA/MF 1.231).
2. **Estilo Swiss / Modern Flat:**
   - Paleta monocromática Zinc com suporte consistente a Light e Dark mode.
   - Contraste rigoroso WCAG 2.2 Nível AA (mínimo 4.5:1).
   - Tipografia neo-grotesca (`Inter`).
   - Sem gradientes coloridos, sem neomorfismo e sem cards aninhados dentro de cards.
   - Identificador de marca puramente tipográfico: `Rodrigo Melo.`

---

## ♿ Acessibilidade Canônica (A11Y.md v2.2.0)

> **Regra de Ouro:** Ao desenvolver o frontend, siga estritamente as regras de acessibilidade do arquivo [`docs/a11y/A11Y.md`](./docs/a11y/A11Y.md).

1. **Princípio Zero:** Acessibilidade é pré-condição para o uso. Uma barreira que bloqueia a conclusão da tarefa torna a funcionalidade tecnicamente quebrada.
2. **Perfil de Conformidade:** Standard (WCAG 2.2 AA) com metas do perfil Shield (AAA) para operações reguladas (Fintech / iGaming - Portaria SPA/MF 1.231).
3. **Memória de Padrões:** Consulte e registre decisões técnicas em [`docs/a11y/A11Y-DECISIONS.md`](./docs/a11y/A11Y-DECISIONS.md).
4. **Veto a Anti-Patterns:** Proibido `onClick` em divs/spans, anéis de foco invisíveis, e `alt=""` silencioso em mockups informativos.
5. **Gate Estático:** Valide sempre via `npm run verify-a11y` antes de releases.

---

## 💻 Compatibilidade Multi-Plataforma

### 1. Lovable.dev
- Mantenha sincronizado com as instruções do [`PROJECT_KNOWLEDGE.md`](./PROJECT_KNOWLEDGE.md).
- Respeite o preset oficial `Modern Flat` de `prompt.lovable.app`.
- Componentes e páginas devem ser modulares e fáceis de editar visualmente.

### 2. Cursor, Claude Code & Antigravity
- Inspecione sempre o [`GLOSSARY.md`](./GLOSSARY.md) antes de propor novos termos de domínio.
- Respeite as decisões arquiteturais registradas em [`docs/adr/`](./docs/adr).
- Utilize a suíte de skills instalada em `.agents/skills/`.

---

## Agent skills

### Issue tracker

GitHub issues (`rodrigomelodesigner/portfolio`) com suporte alternativo para notas locais em `.scratch/`. See `docs/agents/issue-tracker.md`.

### Domain docs

single-context (`GLOSSARY.md` na raiz e ADRs em `docs/adr/`). See `docs/agents/domain.md`.
