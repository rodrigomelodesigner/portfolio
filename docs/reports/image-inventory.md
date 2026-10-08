# Inventário e Diagnóstico de Performance de Mídia

> Gerado automaticamente via `node scripts/optimize-images.mjs` em 2026-10-08.
> Alinhado com o [ADR 0004](../adr/0004-image-asset-optimization-and-core-web-vitals.md) e metas de Core Web Vitals (LCP < 2.5s).

---

## 1. Resumo Executivo

| Métrica | Valor | Meta ADR 0004 | Status |
| :--- | :--- | :--- | :--- |
| **Total de Assets de Imagem** | `89` | Modulados por estudo | ℹ️ Catalogado |
| **Peso Total do Diretório** | `235.08 MB` | < 50 MB total pós-build | ⚠️ Requer Otimização |
| **Imagens Críticas (> 2 MB)** | `37` | 0 na rota inicial | 🚨 Ação Recomendada |
| **Imagens em Atenção (500KB - 2MB)** | `27` | < 5 | ⚠️ Conversão WebP |
| **Imagens Otimizadas (< 500 KB)** | `25` | > 90% | ✅ Em conformidade |

---

## 2. Distribuição por Formato

- **.PNG**: 88 arquivos
- **.JPG**: 1 arquivos

---

## 3. Top 15 Arquivos Críticos para Otimização (Impacto em LCP)

| # | Arquivo | Tamanho | Formato Atual | Economia Estimada (WebP 80%) |
| :-: | :--- | :-: | :-: | :-: |
| 1 | `public/images/02_artilheiros_casa/artilheiro_01_15213KB.png` | **14.86 MB** | `.png` | ~11.14 MB (3.71 MB) |
| 2 | `public/images/02_artilheiros_casa/artilheiro_02_10789KB.png` | **10.54 MB** | `.png` | ~7.90 MB (2.63 MB) |
| 3 | `public/images/02_artilheiros_casa/artilheiro_03_9363KB.png` | **9.14 MB** | `.png` | ~6.86 MB (2.29 MB) |
| 4 | `public/images/02_artilheiros_casa/artilheiro_ui_hero_3000x2000.png` | **9.14 MB** | `.png` | ~6.86 MB (2.29 MB) |
| 5 | `public/images/covers/artilheiro_showcase_cover.png` | **9.14 MB** | `.png` | ~6.86 MB (2.29 MB) |
| 6 | `public/images/02_artilheiros_casa/artilheiro_04_7421KB.jpg` | **7.25 MB** | `.jpg` | ~5.44 MB (1.81 MB) |
| 7 | `public/images/04_home_redesign/redesign_home_01_7011KB.png` | **6.85 MB** | `.png` | ~5.14 MB (1.71 MB) |
| 8 | `public/images/04_home_redesign/redesign_home_02_6667KB.png` | **6.51 MB** | `.png` | ~4.88 MB (1.63 MB) |
| 9 | `public/images/02_artilheiros_casa/artilheiro_05_4859KB.png` | **4.75 MB** | `.png` | ~3.56 MB (1.19 MB) |
| 10 | `public/images/02_artilheiros_casa/artilheiro_cards_spread_3000x2000.png` | **4.75 MB** | `.png` | ~3.56 MB (1.19 MB) |
| 11 | `public/images/02_artilheiros_casa/artilheiro_cards_spread_showcase.png` | **4.75 MB** | `.png` | ~3.56 MB (1.19 MB) |
| 12 | `public/images/02_artilheiros_casa/artilheiro_06_4715KB.png` | **4.60 MB** | `.png` | ~3.45 MB (1.15 MB) |
| 13 | `public/images/02_artilheiros_casa/artilheiro_board_composition.png` | **4.60 MB** | `.png` | ~3.45 MB (1.15 MB) |
| 14 | `public/images/02_artilheiros_casa/artilheiro_board_composition_ui.png` | **4.60 MB** | `.png` | ~3.45 MB (1.15 MB) |
| 15 | `public/images/02_artilheiros_casa/artilheiro_07_4563KB.png` | **4.46 MB** | `.png` | ~3.34 MB (1.11 MB) |

---

## 4. Recomendações e Boas Práticas

1. **Lazy Loading Nativo & Decoding Assíncrono:**
   - Todo componente React de imagem deve declarar:
     ```tsx
     <img src="..." alt="..." loading="lazy" decoding="async" />
     ```
   - Imagens do Hero (Above the fold) devem utilizar `loading="eager"` e `fetchPriority="high"`.

2. **Conversão Automatizada para WebP / AVIF:**
   - Utilize ferramentas como Squoosh CLI, sharp ou scripts de compressão em lote para gerar versões `.webp` lado a lado.
   - O uso de WebP com qualidade 80-85% preserva 100% da legibilidade de interfaces e tipografia das telas de Figma, reduzindo o peso médio em 75%.

3. **Fallback Elegante para Ambientes Estáticos:**
   - Preservar os originais em repositório seguro ou pasta de arquivo para não quebrar links legados.
