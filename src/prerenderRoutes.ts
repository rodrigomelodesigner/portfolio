import { CASES_DATA } from './data/cases';

export interface PrerenderRoute {
  path: string;
  title: string;
  description: string;
  image?: string;
}

export const PRERENDER_ROUTES: PrerenderRoute[] = [
  {
    path: '/',
    title: 'Rodrigo Melo — Product Designer',
    description:
      'Product Designer Pleno em produtos regulados (SPA/MF): extrato e Pix, sportsbook e saída responsável — com dados auditados.',
  },
  {
    path: '/work',
    title: 'Estudos de Caso — Rodrigo Melo',
    description:
      'Estudos com restrição regulatória, métricas auditadas e limites de atribuição explícitos.',
  },
  {
    path: '/about',
    title: 'Sobre Rodrigo Melo — Product Designer',
    description:
      'Product Designer Pleno em casa de apostas regulada pela SPA/MF: dinheiro em movimento, sportsbook e jogo responsável.',
  },
  {
    path: '/contact',
    title: 'Contato — Rodrigo Melo',
    description:
      'Disponível para posições de Product Design em fintechs, scale-ups de tecnologia e ambientes de operação regulada no Brasil e internacional.',
  },
  ...CASES_DATA.map((caseItem) => ({
    path: `/work/${caseItem.slug}`,
    title: `${caseItem.title} — Rodrigo Melo`,
    description: caseItem.subtitle,
    image: caseItem.coverImage,
  })),
];
