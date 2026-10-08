# ADR 0002: Vite + React Architecture for Multi-AI Compatibility (Lovable, Cursor, Claude, Antigravity)

## Status
Accepted

## Context
O repositório do portfólio de Rodrigo Melo precisa ser operado por diferentes inteligências artificiais e plataformas:
1. **Lovable.dev**: Plataforma visual de geração e edição que exige um projeto React/Vite com `package.json`, `index.html` apontando para `/src/main.tsx` e componentes reativos.
2. **Cursor & Claude Code**: Exigem tipagem estrita com TypeScript, scripts de compilação padronizados (`dev`, `build`), e separação de dados (`src/data/cases.ts`).
3. **Antigravity**: Utiliza o diretório `.agents/skills/` e regras de domínio em `AGENTS.md` e `GLOSSARY.md`.

Anteriormente, o repositório possuía apenas arquivos HTML soltos com Tailwind via CDN e sem `package.json`, o que impedia o Lovable de executar o servidor de desenvolvimento e causava duplicação de dados entre o código e o HTML.

## Decision
Adotamos uma arquitetura híbrida de alto desempenho:
1. **Fundação Vite + React 18 + TypeScript:**
   - `package.json` padronizado com scripts `dev` e `build`.
   - `vite.config.ts` com suporte a React e alias `@` para `src/`.
   - `src/App.tsx` consumindo diretamente os dados tipados de [`src/data/cases.ts`](../../src/data/cases.ts).
2. **Preservação de Acesso Estático:**
   - As páginas detalhadas dos estudos de caso em `work/*.html` permanecem acessíveis e funcionais.
   - Um arquivo `index.static.html` é mantido como fallback para visualização offline sem servidor.
3. **Multi-Agente Ready:**
   - `AGENTS.md` e `GLOSSARY.md` na raiz orientam os modelos para os princípios da ADR 005.

## Consequences
- O repositório agora abre e roda nativamente no Lovable.dev sem erros de dependência.
- Cursor, Claude e Antigravity têm acesso à tipagem e componentes limpos.
- A camada de dados em `src/data/cases.ts` torna-se a fonte única de verdade para a Home e listagens.
