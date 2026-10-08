# ADR 0004: Image Asset Optimization and Core Web Vitals Budget

## Status
Accepted

## Context
O diretório `public/images/` acumulava 89 imagens de alta fidelidade totalizando ~235 MB. Telas exportadas em resolução full-res do Figma (algumas excedendo 14 MB por arquivo) impõem sério risco de degradação do Largest Contentful Paint (LCP > 4s), consumo excessivo de dados em dispositivos móveis e lentidão no carregamento de páginas.

Como portfólio de Product Design de alto padrão para operações reguladas, a experiência visual e a rapidez de resposta devem refletir o rigor técnico do autor.

## Decision
1. **Orçamento de Performance (Performance Budget):**
   - **LCP (Largest Contentful Paint):** < 2.5s em redes 4G simuladas.
   - **CLS (Cumulative Layout Shift):** < 0.05 (todas as tags `<img>` devem ter aspect ratio reservado ou dimensões explícitas).
   - **Tamanho Máximo por Asset em Rotas Críticas:** < 500 KB por imagem; < 2.5 MB de peso acumulado por página inicial.
2. **Diretrizes de Implementação:**
   - Todo componente React que exibe imagens fora do fold deve aplicar `loading="lazy"` e `decoding="async"`.
   - Elementos de destaque no Hero devem utilizar `loading="eager"` com `fetchPriority="high"` para otimizar LCP.
3. **Pipeline de Auditoria Automatizada:**
   - Adotar o script `scripts/optimize-images.mjs` (disponível via `npm run optimize-images`), gerando inventário automático em `docs/reports/image-inventory.md`.
   - Classificação em três faixas de risco:
     - 🚨 **Crítico (> 2 MB):** Conversão prioritária para WebP/AVIF ou redimensionamento de densidade.
     - ⚠️ **Atenção (500 KB - 2 MB):** Compressão recomendada.
     - ✅ **Otimizado (< 500 KB):** Adequado para produção.

## Consequences
- **Vantagens:**
  - Visibilidade contínua do footprint de mídia no repositório.
  - Alinhamento aos padrões técnicos exigidos por líderes de engenharia e produto que avaliam o portfólio.
  - Economia de até 75% na transferência de dados com a adoção de WebP.
- **Compromissos:**
  - Preservação dos arquivos originais em alta resolução para que previews e materiais de conferência não sejam degradados.
