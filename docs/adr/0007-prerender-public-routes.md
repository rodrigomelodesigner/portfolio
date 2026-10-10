# ADR 0007: Pré-render das rotas públicas no HTML inicial

## Status
Accepted

## Context
O site é uma SPA Vite + React (ADR 0002 e ADR 0003). O `index.html` publicado contém o `<head>` e um `<div id="root">` vazio. Hero, estudos de caso, Sobre e navegação só existem depois que o navegador executa o bundle.

Crawlers, cartões de link e qualquer cliente que não executa JavaScript leem só essa casca. O conteúdo do portfólio não chega ao primeiro byte.

## Decision
1. O `npm run build` continua gerando o bundle do cliente e, em seguida, renderiza cada rota pública com `renderToString` e `StaticRouter`.
2. As rotas gravadas são `/`, `/work`, `/about`, `/contact` e `/work/:slug` para cada item de `CASES_DATA`.
3. O HTML resultante entra em `#root` no arquivo da rota (`/about/index.html` e `/about.html`). A home reutiliza `dist/index.html`.
4. `dist/404.html` permanece com `#root` vazio, para o fallback de host estático subir o cliente sem divergir da hidratação.
5. No navegador, `#root` com filhos usa `hydrateRoot`. No `vite dev`, o shell segue vazio e usa `createRoot`.
6. Título e descrição de cada rota, fora da home, saem do texto já publicado na página. A home mantém o `<head>` atual.

## Consequences
- O primeiro HTML de cada URL pública contém navegação e o texto da página.
- A navegação no cliente continua sem recarregar a página.
- Recarregar uma rota pré-renderizada depende do host servir o arquivo estático antes de qualquer rewrite para `index.html`.
- Uma rota nova precisa entrar na lista de pré-render para o crawler vê-la sem JavaScript.
