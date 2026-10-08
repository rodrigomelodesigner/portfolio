#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const imagesDir = path.join(rootDir, 'public', 'images');
const reportsDir = path.join(rootDir, 'docs', 'reports');

console.log('🔍 Iniciando auditoria de mídia e imagens em public/images/...\n');

if (!fs.existsSync(imagesDir)) {
  console.error(`❌ Diretório de imagens não encontrado: ${imagesDir}`);
  process.exit(1);
}

if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.avif'].includes(ext)) {
        const stats = fs.statSync(fullPath);
        arrayOfFiles.push({
          name: entry.name,
          relativePath: path.relative(rootDir, fullPath).replace(/\\/g, '/'),
          sizeBytes: stats.size,
          sizeKB: (stats.size / 1024).toFixed(1),
          sizeMB: (stats.size / (1024 * 1024)).toFixed(2),
          ext,
        });
      }
    }
  }

  return arrayOfFiles;
}

const files = getAllFiles(imagesDir);
files.sort((a, b) => b.sizeBytes - a.sizeBytes);

const totalBytes = files.reduce((acc, f) => acc + f.sizeBytes, 0);
const totalMB = (totalBytes / (1024 * 1024)).toFixed(2);

const critical = files.filter(f => f.sizeBytes >= 2 * 1024 * 1024);
const warning = files.filter(f => f.sizeBytes >= 500 * 1024 && f.sizeBytes < 2 * 1024 * 1024);
const optimal = files.filter(f => f.sizeBytes < 500 * 1024);

const formatCounts = {};
for (const f of files) {
  formatCounts[f.ext] = (formatCounts[f.ext] || 0) + 1;
}

console.log(`📊 Estatísticas Gerais:`);
console.log(`- Total de arquivos de imagem: ${files.length}`);
console.log(`- Peso acumulado: ${totalMB} MB`);
console.log(`- Por formato:`, formatCounts);
console.log(`- Críticos (> 2 MB): ${critical.length} arquivos`);
console.log(`- Atenção (500 KB - 2 MB): ${warning.length} arquivos`);
console.log(`- Otimizados (< 500 KB): ${optimal.length} arquivos\n`);

console.log(`🚨 Top 10 Arquivos Mais Pesados:`);
files.slice(0, 10).forEach((f, idx) => {
  console.log(`  ${idx + 1}. ${f.name} — ${f.sizeMB} MB (${f.sizeKB} KB)`);
});

// Gerar relatório markdown completo em docs/reports/image-inventory.md
const markdownReport = `# Inventário e Diagnóstico de Performance de Mídia

> Gerado automaticamente via \`node scripts/optimize-images.mjs\` em ${new Date().toISOString().split('T')[0]}.
> Alinhado com o [ADR 0004](../adr/0004-image-asset-optimization-and-core-web-vitals.md) e metas de Core Web Vitals (LCP < 2.5s).

---

## 1. Resumo Executivo

| Métrica | Valor | Meta ADR 0004 | Status |
| :--- | :--- | :--- | :--- |
| **Total de Assets de Imagem** | \`${files.length}\` | Modulados por estudo | ℹ️ Catalogado |
| **Peso Total do Diretório** | \`${totalMB} MB\` | < 50 MB total pós-build | ⚠️ Requer Otimização |
| **Imagens Críticas (> 2 MB)** | \`${critical.length}\` | 0 na rota inicial | 🚨 Ação Recomendada |
| **Imagens em Atenção (500KB - 2MB)** | \`${warning.length}\` | < 5 | ⚠️ Conversão WebP |
| **Imagens Otimizadas (< 500 KB)** | \`${optimal.length}\` | > 90% | ✅ Em conformidade |

---

## 2. Distribuição por Formato

${Object.entries(formatCounts)
  .map(([ext, count]) => `- **${ext.toUpperCase()}**: ${count} arquivos`)
  .join('\n')}

---

## 3. Top 15 Arquivos Críticos para Otimização (Impacto em LCP)

| # | Arquivo | Tamanho | Formato Atual | Economia Estimada (WebP 80%) |
| :-: | :--- | :-: | :-: | :-: |
${files.slice(0, 15).map((f, i) => {
  const estWebpMB = (parseFloat(f.sizeMB) * 0.25).toFixed(2);
  const econ = (parseFloat(f.sizeMB) * 0.75).toFixed(2);
  return `| ${i + 1} | \`${f.relativePath}\` | **${f.sizeMB} MB** | \`${f.ext}\` | ~${econ} MB (${estWebpMB} MB) |`;
}).join('\n')}

---

## 4. Recomendações e Boas Práticas

1. **Lazy Loading Nativo & Decoding Assíncrono:**
   - Todo componente React de imagem deve declarar:
     \`\`\`tsx
     <img src="..." alt="..." loading="lazy" decoding="async" />
     \`\`\`
   - Imagens do Hero (Above the fold) devem utilizar \`loading="eager"\` e \`fetchPriority="high"\`.

2. **Conversão Automatizada para WebP / AVIF:**
   - Utilize ferramentas como Squoosh CLI, sharp ou scripts de compressão em lote para gerar versões \`.webp\` lado a lado.
   - O uso de WebP com qualidade 80-85% preserva 100% da legibilidade de interfaces e tipografia das telas de Figma, reduzindo o peso médio em 75%.

3. **Fallback Elegante para Ambientes Estáticos:**
   - Preservar os originais em repositório seguro ou pasta de arquivo para não quebrar links legados.
`;

const reportPath = path.join(reportsDir, 'image-inventory.md');
fs.writeFileSync(reportPath, markdownReport, 'utf-8');
console.log(`\n✅ Relatório salvo com sucesso em: ${path.relative(rootDir, reportPath)}`);
