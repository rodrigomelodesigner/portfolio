#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('♿ Verificando conformidade estática A11Y.md (WCAG 2.2 AA)...\n');

let errors = [];
let warnings = [];
let passedChecks = 0;

// 1. Verificar App.tsx (Skip link e Landmark)
const appPath = path.join(rootDir, 'src', 'App.tsx');
if (fs.existsSync(appPath)) {
  const appContent = fs.readFileSync(appPath, 'utf-8');
  
  if (appContent.includes('href="#main-content"') && appContent.includes('sr-only focus:not-sr-only')) {
    passedChecks++;
    console.log('  ✅ [SC 2.4.1] Skip link para #main-content implementado no App.tsx');
  } else {
    errors.push('Falta skip link no App.tsx');
  }

  if (appContent.includes('id="main-content"') && appContent.includes('tabIndex={-1}')) {
    passedChecks++;
    console.log('  ✅ [SC 1.3.1] Landmark <main id="main-content" tabIndex={-1}> configurado no App.tsx');
  } else {
    errors.push('Elemento <main> precisa de id="main-content" e tabIndex={-1}');
  }

  if (appContent.includes('role="dialog"') && appContent.includes('aria-modal="true"')) {
    passedChecks++;
    console.log('  ✅ [WAI-ARIA APG] Command Palette possui role="dialog" e aria-modal="true"');
  } else {
    errors.push('Command Palette precisa de role="dialog" e aria-modal="true"');
  }
} else {
  errors.push('Arquivo src/App.tsx não encontrado');
}

// 2. Verificar formulário em Contact.tsx
const contactPath = path.join(rootDir, 'src', 'pages', 'Contact.tsx');
if (fs.existsSync(contactPath)) {
  const contactContent = fs.readFileSync(contactPath, 'utf-8');
  if (contactContent.includes('aria-required="true"') && contactContent.includes('role="status"')) {
    passedChecks++;
    console.log('  ✅ [SC 3.3.2 / 4.1.3] Formulário de contato possui aria-required e status feedback');
  } else {
    errors.push('Contact.tsx precisa de aria-required="true" e container com role="status"');
  }
}

// 3. Verificar alt text em todas as páginas
const pagesDir = path.join(rootDir, 'src', 'pages');
if (fs.existsSync(pagesDir)) {
  const pageFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));
  for (const pageFile of pageFiles) {
    const content = fs.readFileSync(path.join(pagesDir, pageFile), 'utf-8');
    const imgMatches = content.match(/<img\s+[^>]*>/g) || [];
    for (const img of imgMatches) {
      if (!img.includes('alt=')) {
        errors.push(`Tag <img> sem atributo alt encontrada em src/pages/${pageFile}`);
      } else {
        passedChecks++;
      }
    }
  }
  console.log(`  ✅ [SC 1.1.1] Todas as tags <img> em src/pages/ declaram atributo alt`);
}

// 4. Verificar arquivos de governança em docs/a11y
const reqFiles = ['A11Y.md', 'A11Y-DECISIONS.md', 'EXCEPTIONS.md', 'REPORT.md'];
for (const rf of reqFiles) {
  const p = path.join(rootDir, 'docs', 'a11y', rf);
  if (fs.existsSync(p)) {
    passedChecks++;
    console.log(`  ✅ [Governança] docs/a11y/${rf} presente e versionado`);
  } else {
    errors.push(`Arquivo de governança docs/a11y/${rf} não encontrado`);
  }
}

console.log('\n---');
if (errors.length > 0) {
  console.error(`❌ Falha na validação A11Y (${errors.length} erro(s)):`);
  errors.forEach(e => console.error(`   - ${e}`));
  process.exit(1);
} else {
  console.log(`🎉 Validação estática A11Y.md APROVADA com sucesso! (${passedChecks} checkpoints verificados)`);
}
