import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const distDir = path.resolve('dist');
const templatePath = path.join(distDir, 'index.html');
const template = fs.readFileSync(templatePath, 'utf8');
const rootOpen = '<div id="root">';

if (!template.includes(rootOpen)) {
  console.error('O build do Vite não gerou <div id="root"> em dist/index.html.');
  process.exit(1);
}

const BLOCK_CLOSING_TAGS = [
  'div',
  'section',
  'article',
  'p',
  'header',
  'h1',
  'h2',
  'h3',
  'main',
  'nav',
  'footer',
  'li',
  'ul',
  'ol',
  'table',
  'thead',
  'tbody',
  'tr',
  'figure',
  'figcaption',
  'a',
  'button',
  'span',
];

function insertLineBreaks(html) {
  let next = html;
  for (const tag of BLOCK_CLOSING_TAGS) {
    // O \n fica dentro de um comentário. Um \n solto entre elementos vira
    // text node e o hydrateRoot aborta com React #418/#423.
    next = next.replaceAll(`</${tag}>`, `</${tag}><!--\n-->`);
  }
  return next;
}

function noscriptBlock(noscriptHtml) {
  return `<noscript>\n<style>#root{display:none}</style>\n${noscriptHtml}\n</noscript>\n`;
}

function replaceRoot(html, appHtml, noscriptHtml) {
  const start = html.indexOf(rootOpen);
  let index = start + rootOpen.length;
  let depth = 1;

  while (index < html.length && depth > 0) {
    const nextOpen = html.indexOf('<div', index);
    const nextClose = html.indexOf('</div>', index);
    if (nextClose === -1) {
      throw new Error('#root sem fechamento em dist/index.html');
    }
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      index = nextOpen + 4;
    } else {
      depth -= 1;
      if (depth === 0) {
        return `${html.slice(0, start)}${noscriptBlock(noscriptHtml)}<div id="root" data-prerender="true">${appHtml}</div>${html.slice(nextClose + 6)}`;
      }
      index = nextClose + 6;
    }
  }

  throw new Error('#root sem fechamento em dist/index.html');
}

const serverEntry = path.join(path.resolve('.ssr-build'), 'entry-server.js');
const { render, PRERENDER_ROUTES, renderNoscript, LLMS_INDEX, LLMS_FULL } = await import(
  pathToFileURL(serverEntry).href
);

const publicDir = path.resolve('public');
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'llms.txt'), LLMS_INDEX);
fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), LLMS_FULL);
fs.writeFileSync(path.join(distDir, 'llms.txt'), LLMS_INDEX);
fs.writeFileSync(path.join(distDir, 'llms-full.txt'), LLMS_FULL);

if (LLMS_FULL.includes('<p>') || LLMS_FULL.includes('<div')) {
  console.error('llms-full.txt contém marcação HTML.');
  process.exit(1);
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;');
}

function replaceMeta(html, attr, key, value) {
  const pattern = new RegExp(`<meta ${attr}="${key}" content="[^"]*"\\s*/>`);
  if (!pattern.test(html)) {
    throw new Error(`Meta ${attr}="${key}" não encontrada no shell HTML`);
  }
  return html.replace(pattern, `<meta ${attr}="${key}" content="${escapeHtml(value)}" />`);
}

function applyHead(html, route) {
  const title = escapeHtml(route.title);
  let next = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  if (next === html) {
    throw new Error('Tag <title> não encontrada no shell HTML');
  }
  next = replaceMeta(next, 'name', 'description', route.description);
  next = replaceMeta(next, 'property', 'og:title', route.title);
  next = replaceMeta(next, 'property', 'og:description', route.description);
  next = replaceMeta(next, 'name', 'twitter:title', route.title);
  next = replaceMeta(next, 'name', 'twitter:description', route.description);
  if (route.image) {
    next = replaceMeta(next, 'property', 'og:image', route.image);
    next = replaceMeta(next, 'name', 'twitter:image', route.image);
  }
  return next;
}

fs.writeFileSync(path.join(distDir, '404.html'), template);

for (const route of PRERENDER_ROUTES) {
  const appHtml = render(route.path);
  if (!appHtml.includes('<h1')) {
    console.error(`A rota ${route.path} renderizou sem <h1>.`);
    process.exit(1);
  }
  if (!appHtml.includes('Rodrigo Melo.')) {
    console.error(`A rota ${route.path} renderizou sem a navegação.`);
    process.exit(1);
  }

  const noscriptHtml = renderNoscript(route.path);
  if (!noscriptHtml.includes('<h1') || !noscriptHtml.includes('<article')) {
    console.error(`A rota ${route.path} ficou sem fallback semântico em <noscript>.`);
    process.exit(1);
  }

  const withBody = replaceRoot(template, appHtml, noscriptHtml);
  const formatted = insertLineBreaks(route.path === '/' ? withBody : applyHead(withBody, route));
  const maxLine = formatted.split('\n').reduce((max, line) => Math.max(max, line.length), 0);
  if (maxLine > 8000) {
    console.error(`A rota ${route.path} ainda tem uma linha de ${maxLine} caracteres.`);
    process.exit(1);
  }
  if (!formatted.includes('<noscript>') || !formatted.includes('</div><!--\n-->')) {
    console.error(`A rota ${route.path} saiu sem quebra de linha ou sem <noscript>.`);
    process.exit(1);
  }
  const page = formatted;
  const relativePaths = route.path === '/'
    ? ['index.html']
    : [`${route.path.slice(1)}.html`, `${route.path.slice(1)}/index.html`];

  for (const relativePath of relativePaths) {
    const filePath = path.join(distDir, relativePath);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, page);
  }

  console.log(`prerender ${route.path} (${appHtml.length} caracteres)`);
}
