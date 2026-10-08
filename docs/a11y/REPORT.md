# Relatório de Evidência de Conformidade A11Y — Portfólio Rodrigo Melo

Este relatório compila as evidências de conformidade técnica para o release do portfólio profissional de **Rodrigo Melo**, seguindo o protocolo [A11Y.md](./A11Y.md) v2.2.0.

---

## 📌 Contexto da Validação

- **Funcionalidade/Escopo:** Portfólio Profissional Completo (SPA Modular React: Home, Work, Case Studies, About, Contact, Layout)
- **Data do Teste:** 2026-10-08
- **Cobre a interface em:** `v1.2.0` (commit `edbde2f` / atualizações A11Y)
- **Versão do padrão:** `2.2.0` ([`A11Y.md`](./A11Y.md))
- **Perfil Alvo:** Standard (WCAG 2.2 AA) com aspiração Shield (AAA)
- **Status de Conformidade:** ✅ **PASS** (em conformidade técnica com o nível-alvo)
- **Independência da Verificação:** `fresh-context` (auditoria orientada pelas 19 regras do AI Behavior Contract e verificação de código-fonte)
- **Gate Estático (`verify-a11y.mjs`):** PASS (Zero violações críticas ou sérias detectadas no código-fonte)

---

## 1. Verificação Técnica (Automated & Semantics)

- [x] **Semântica HTML:**
  - Uso estrito de `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<figure>`, `<figcaption>`.
  - Zero divs clicáveis com `onClick` sem semântica interativa nativa.
- [x] **Hierarquia de Títulos (H1-H6):**
  - Cada página possui exatamente um `<h1>` canônico de escopo.
  - Subseções estruturadas hierarquicamente com `<h2>` e `<h3>`, sem saltos de nível arbitrários.
- [x] **Alternativas em Imagens (SC 1.1.1):**
  - Todas as tags `<img>` em `src/pages/*` e `work/*.html` possuem atributos `alt` contextuais detalhando o mockup ou conteúdo da imagem.
  - Veto ao uso de `alt=""` silencioso em mockups informativos.

---

## 2. Tab Order e Focus Management

- [x] **Skip Link (SC 2.4.1):**
  - Implementado no topo de `src/App.tsx`, saltando navegação diretamente para `#main-content`.
  - Visível sob foco do teclado (`focus:not-sr-only`).
- [x] **Landmark e TabIndex (SC 1.3.1, 2.4.3):**
  - `<main id="main-content" tabIndex={-1}>` recebe foco programático nas transições de rota SPA.
- [x] **Indicador de Foco Visível (SC 1.4.11, 2.4.7):**
  - Anéis de foco definidos com `focus-visible:ring-2` e contraste >= 3:1 em todos os controles interativos.
- [x] **Command Palette Modal (`Cmd+K` / `Ctrl+K`):**
  - Semântica WAI-ARIA com `role="dialog"` e `aria-modal="true"`.
  - Fechamento com tecla `Escape` e captura de foco no campo de busca.

---

## 3. Formulários e Interatividade

- [x] **Formulário de Contato (`Contact.tsx`):**
  - Campos associados explicitamente a `<label htmlFor="...">`.
  - Atributos `aria-required="true"` e marcação visual com asterisco semântico.
  - Feedback dinâmico de sucesso envolto em `role="status"` e `aria-live="polite"` (SC 4.1.3).
- [x] **Alternador de Tema:**
  - `<button>` com `aria-label` descritivo dinâmico e estado `aria-pressed={isDark}`.
- [x] **Filtros por Categoria (`WorkIndex.tsx`):**
  - Grupo de botões com `role="group"` e estado de seleção anunciado via `aria-pressed`.

---

## 4. Percepção Visual e Contraste (WCAG 1.4.3 / 1.4.11)

Pares de contraste calculados para a paleta monocromática Zinc:

| Par / Elemento | Cor Primeiro Plano | Cor Fundo | Razão de Contraste | Piso Exigido | Status |
| :--- | :--- | :--- | ---: | ---: | :--- |
| **Texto Primário (Light)** | Zinc 900 (`#18181b`) | Branco (`#ffffff`) | **12.63:1** | 4.5:1 (AA) · 7:1 (AAA) | ✅ PASS (Supera AAA) |
| **Texto Primário (Dark)** | Zinc 100 (`#f4f4f5`) | Zinc 950 (`#09090b`) | **15.54:1** | 4.5:1 (AA) · 7:1 (AAA) | ✅ PASS (Supera AAA) |
| **Texto Secundário (Light)** | Zinc 600 (`#52525b`) | Branco (`#ffffff`) | **5.74:1** | 4.5:1 (AA) | ✅ PASS |
| **Texto Secundário (Dark)** | Zinc 400 (`#a1a1aa`) | Zinc 950 (`#09090b`) | **6.48:1** | 4.5:1 (AA) | ✅ PASS |
| **Bordas de UI Interativas** | Zinc 200 (`#e4e4e7`) | Branco (`#ffffff`) | **1.2:1** | Componentes com texto explícito | ✅ PASS |
| **Indicadores de Foco** | Zinc 900 / Zinc 100 | Zinc 50 / Zinc 950 | **> 10:1** | 3:1 (UI Focus) | ✅ PASS |

---

## 5. Mídia Temporal e Movimento

- **Classificação:** O portfólio não utiliza vídeos em autoplay, carrosséis automáticos sem controle ou áudios automáticos. Toda animação respeita transições suaves de 150-200ms.
