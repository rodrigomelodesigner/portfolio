import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const distDir = path.resolve('dist');
const templatePath = path.join(distDir, 'index.html');
const template = fs.readFileSync(templatePath, 'utf8');
const rootMarker = '<div id="root"></div>';

if (!template.includes(rootMarker)) {
  console.error('O build do Vite não gerou <div id="root"></div> em dist/index.html.');
  process.exit(1);
}

const serverEntry = path.join(path.resolve('.ssr-build'), 'entry-server.js');
const { render, PRERENDER_ROUTES } = await import(pathToFileURL(serverEntry).href);

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

  const withBody = template.replace(rootMarker, () => `<div id="root">${appHtml}</div>`);
  const page = route.path === '/' ? withBody : applyHead(withBody, route);
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
