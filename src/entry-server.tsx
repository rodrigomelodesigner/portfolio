import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './App';
import { PRERENDER_ROUTES } from './prerenderRoutes';
import { LLMS_FULL, LLMS_INDEX, renderNoscript } from './seo/crawlText';

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>
  );
}

export { PRERENDER_ROUTES, renderNoscript, LLMS_INDEX, LLMS_FULL };
