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
      'Portfólio de Rodrigo Melo — Product Designer Pleno em operações reguladas pela SPA/MF: conversão, aquisição sem mídia paga e proteção do consumidor.',
  },
  {
    path: '/work',
    title: 'Estudos de Caso — Rodrigo Melo',
    description:
      'Projetos executados sob restrições severas de compliance, volume e dados reais. Cada estudo de caso documenta hipóteses, decisões e impacto longitudinal.',
  },
  {
    path: '/about',
    title: 'Sobre Rodrigo Melo — Product Designer',
    description:
      'Desenho fluxos de produto numa operação de apostas regulada pela SPA/MF: conversão no sportsbook, aquisição sem mídia paga e jogo responsável.',
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
