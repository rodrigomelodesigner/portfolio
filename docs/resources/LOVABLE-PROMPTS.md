# Roteiro de Produção Visual no Lovable.dev

> **Objetivo:** Este documento contém os **Master Prompts** estruturados para você copiar e colar no Lovable.dev. Eles foram elaborados para garantir que a IA gere código visual de altíssima qualidade (Vibe Coding), mantendo o respeito estrito à arquitetura existente, ao **ADR 005 (Prova sobre Promessa / Swiss Flat)** e ao **A11Y.md v2.2.0**.

---

## Instruções Prévias

1. **Sincronização:** Conecte o Lovable ao seu repositório GitHub (`rodrigomelodesigner/portfolio`) na branch `main`.
2. **Contexto:** Antes de rodar qualquer prompt, certifique-se de que o conteúdo do arquivo `PROJECT_KNOWLEDGE.md` foi colado em **Project Settings → Manage Knowledge**.
3. **Dados Existentes:** O Lovable NÃO deve sobrescrever os dados reais presentes em `src/data/cases.ts`.

---

## 🛠️ Prompt 1: Calibragem Inicial do Design DNA (Executar Primeiro)

**Onde colar:** Na caixa principal do chat do Lovable logo após sincronizar o projeto.

```markdown
Atue como Product Designer e Engenheiro Frontend Sênior. Nosso objetivo agora é refinar a camada visual do projeto atual respeitando estritamente o `PROJECT_KNOWLEDGE.md`.

O projeto atual já possui toda a estrutura de rotas e dados. Sua missão é elevar a qualidade da UI usando o estilo "Swiss Modern Flat": paleta monocromática Zinc (Zinc 50 a Zinc 950), tipografia Inter limpa, e espaçamentos modulares consistentes.

Por favor, faça uma varredura inicial no `src/App.tsx` e confirme que você absorveu as regras de acessibilidade (A11Y.md), garantindo que o `id="main-content"` está acessível e a área de toque dos ícones interativos continua >= 44x44px. Responda apenas "Design DNA absorvido" quando estiver pronto para começarmos a iterar as páginas.
```

---

## 🏠 Prompt 2: Refinamento da Home Page (`/src/pages/Home.tsx`)

**Onde colar:** No chat do Lovable.

```markdown
Vamos refinar a `Home.tsx`. Quero aplicar um visual altamente polido e profissional.

1. **Hero Section:** Adicione um efeito de entrada muito sutil e cinematográfico (fade-in e um leve transform vertical de 10px em 600ms) no H1. Use tipografia densa e refinada (H1 bem grande no desktop).
2. **Proof Strip:** Transforme a faixa de prova social (onde diz "470 / rodada (6,5x)", "Conformidade Portaria SPA/MF 1.231", etc.) em um ticker elegante e fluido ou um grid brutalista que transmita máxima autoridade financeira.
3. **Cards de Projetos em Destaque:** Melhore os cards usando a arquitetura baseada no shadcn/ui. Borda fina de 1px (zinc-200 no light, zinc-800 no dark). Adicione uma micro-interação no hover: um leve aumento de contraste na borda ou leve expansão de sombra, mas SEM gradientes coloridos e SEM quebrar o limite de cantos levemente arredondados.
4. **Animação Funcional:** Respeite rigorosamente a preferência do usuário com as classes `motion-reduce` do Tailwind.

Não altere a fonte de dados (os cases devem continuar vindo da propriedade mapeada). Mantenha as tags semânticas e o contraste AA.
```

---

## 📂 Prompt 3: Índice de Projetos (`/src/pages/WorkIndex.tsx`)

**Onde colar:** No chat do Lovable.

```markdown
Agora vamos atualizar a página de trabalhos (`WorkIndex.tsx`).

1. **Filtros e Busca:** Melhore a UI da barra de busca e dos botões de categoria. Use uma abordagem inspirada em catálogos de design systems, como a minimal.gallery. Os filtros ativos devem ter alto contraste (ex: fundo Zinc 900 e texto Zinc 50 no light mode).
2. **Layout em Grid:** Garanta um grid responsivo perfeito (1 coluna no mobile, 2 colunas no tablet, 3 colunas no desktop).
3. **Card do Case:** Refine o estado vazio (empty state) caso a busca não retorne nada. Certifique-se de que a tag "Fintech" ou "iGaming" dentro dos cards tenha a aparência de badges limpas (`bg-zinc-100 text-zinc-600` e no dark mode `bg-zinc-800 text-zinc-400`).
4. **Acessibilidade:** Mantenha os atributos `role="group"` e `aria-pressed` nos botões de filtro perfeitamente preservados.
```

---

## 📄 Prompt 4: Detalhe do Estudo de Caso (`/src/pages/CaseStudyDetail.tsx`)

**Onde colar:** No chat do Lovable.

```markdown
Esta é a página mais importante: o detalhe do Case de Estudo (`CaseStudyDetail.tsx`). Quero aplicar o conceito de **Scrollytelling** da metodologia Scrolltide, mas mantendo a seriedade do setor financeiro.

1. **Hero do Case:** A imagem/capa do projeto deve usar um leve efeito de parallax na rolagem (use transições baseadas na posição de scroll, se viável com Tailwind puro e React sem bibliotecas pesadas de 3D, ou opte por sticky elements elegantes).
2. **Narrativa em Blocos:** Refine o bloco de problema (Contexto, Problema, Solução, Resultado). Crie um ritmo visual forte intercalando fundos neutros, usando espaçamento denso (py-16 ou py-24).
3. **Tabela de Métricas:** Estilize a tabela financeira do caso (ex: extratos, engajamento) usando inspiração do design system refero.design. Linhas super finas, números monoespaçados (`font-mono`) para as métricas, cores semânticas discretas (emerald-600 para sucesso financeiro, rose-600 para riscos reduzidos).
4. **Mídia:** Garanta que todas as imagens no corpo do case fiquem envoltas em containers com bordas refinadas (ex: cantos de 4px, `ring-1 ring-zinc-200/50`).
```

---

## 🙋 Prompt 5: About & Contact (`/src/pages/About.tsx` e `/src/pages/Contact.tsx`)

**Onde colar:** No chat do Lovable.

```markdown
Por fim, refine as páginas Sobre e Contato.

1. No `About.tsx`: Estruture a lista dos "3 Pilares" como um grid brutalista ou cards horizontais muito limpos. O texto longo deve ter uma largura máxima estreita (ex: `max-w-2xl` ou `max-w-3xl`) para garantir que os recrutadores leiam a linha de visão de 60 a 80 caracteres.
2. No `Contact.tsx`: Refine os campos do formulário para usar bordas limpas e foco altamente contrastante e claro (`focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2`). Isso é crítico para a acessibilidade.
3. Se houver feedback de status de envio ("Mensagem enviada com sucesso"), estilize-o como um toast (notificação) leve que aparece com uma transição suave.
```

---

## 🏁 Dicas Finais

* **Se algo quebrar (Regressão Visual):** O Lovable às vezes alucina e insere bordas arco-íris ou ícones fofos. Se isso acontecer, envie o prompt: *"Você violou o ADR 005. Remova as cores saturadas e volte para o estilo Swiss Flat usando apenas tons de Zinc. Remova qualquer ilustração infantil."*
* **Se a Acessibilidade falhar:** Envie o prompt: *"Lembre-se da regra 2 do A11Y.md. Você removeu uma tag essencial (como o aria-label ou o controle de teclado). Reverta essa parte do código."*
