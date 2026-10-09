# Registro de Decisões A11Y (Memória de Padrões) — Portfólio Rodrigo Melo

> **Padrão Normativo:** [A11Y.md](./A11Y.md) v2.2.0 (WCAG 2.2 AA)
> **Perfil de Conformidade Alvo:** **Standard (AA)** com aspiração de **Shield (AAA)** para contrastes da paleta Zinc e alvos de toque em operações reguladas.

## Regras de Registro

1. **Registre apenas decisões deliberadas entre opções válidas:** Indexado por padrão, nunca por tela.
2. **Consulte antes de construir:** Todo componente interativo novo deve consultar este registro e estendê-lo.
3. **Versionado no Git:** Compartilhado entre humanos, Lovable, Cursor, Claude Code e Antigravity.

---

## Decisões Ativas

- **Perfil de Conformidade** → Standard (WCAG 2.2 AA) com requisitos do perfil Shield (AAA) em contrastes (>= 4.5:1 texto normal, >= 7:1 títulos) e áreas de toque mínimas de 44×44px — reflete o rigor de produto para setores regulados (Fintech e iGaming / Portaria SPA/MF nº 1.231). (2026-10-08)
- **Skip Link** → Ancorado em `#main-content`, posicionado no topo da ordem do DOM, oculto visualmente até receber foco (`focus:not-sr-only`), estilizado com destaque de alto contraste — garante atalho direto de teclado sem repetição de cabeçalho (SC 2.4.1). (2026-10-08)
- **Landmark Principal e Gerenciamento de Foco em SPA** → Elemento `<main id="main-content" tabIndex={-1}>` — permite foco programático e leitura por tecnologias assistivas na transição de rota (SC 1.3.1, 2.4.3). (2026-10-08)
- **Command Palette (`Cmd+K`)** → `role="dialog"`, `aria-modal="true"`, `aria-label="Busca de estudos de caso e navegação"`, foco automático no campo de busca com escape para fechar e retorno ao acionador — semântica padrão WAI-ARIA APG Dialog (Modal). (2026-10-08)
- **Alternador de Tema (Dark / Light)** → `<button>` nativo com `aria-label` descritivo dinâmico e `aria-pressed={isDark}` — anuncia estado de ativação para tecnologias assistivas sem depender de pistas puramente visuais. (2026-10-08)
- **Imagens e Casos de Estudo** → Todas as imagens de mockups de interface e capas possuem texto descritivo informando o conteúdo da interface e métrica relevante (ex: "Mockup da interface do projeto Artilheiro da Casa: 470 apostas/rodada") — banido o uso de `alt=""` silencioso em mockups informativos (SC 1.1.1). (2026-10-08)
- **Sumário do estudo de caso** → Links nativos `<a href="#id">` com alvo mínimo de 44×44px, `aria-current="location"` na seção visível e anel `focus-visible`. A seção destino usa `tabIndex={-1}`, `scroll-mt-24` e anel em `:focus` (não só `:focus-visible`), porque o foco chega por script depois do clique ou Enter no sumário e precisa permanecer visível sob o menu fixo (SC 2.4.1, 2.4.7, 2.4.11). (2026-10-09)
- **Tabelas de Métricas Longitudinais** → `<table>` com `<caption>` semântica acessível (`sr-only`), cabeçalhos identificados com `scope="col"` — conformidade estrita com leitura linear de leitores de tela (SC 1.3.1). (2026-10-08)
- **Medida de leitura e contraste de texto (Shield)** → Parágrafos de narrativa em `max-w-prose`, `leading-relaxed` e `space-y-4`. Texto principal `text-zinc-900` / `dark:text-zinc-100`; secundário `text-zinc-600` / `dark:text-zinc-400`. Metadados e datas em `text-xs` (12px) com `font-medium` ou `font-mono`. Nenhum texto abaixo de 12px (SC 1.4.6, 1.4.8, 2.3.3). (2026-10-09)
- **Formulário de Contato Direto** → Inputs com rótulos semânticos explícitos `<label htmlFor="...">`, `aria-required="true"`, indicação visual de obrigatoriedade sem depender apenas de cor, e container de confirmação de envio com `role="status"` e `aria-live="polite"` (SC 3.3.1, 3.3.2, 4.1.3). (2026-10-08)
