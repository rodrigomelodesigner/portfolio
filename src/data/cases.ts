export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  company: string;
  role: string;
  squad: string;
  timeline: string;
  highlightMetric: string;
  coverImage: string;
  problem: {
    briefing: string;
    reframed: string;
  };
  hypothesis?: string;
  decisions: {
    title: string;
    description: string;
  }[];
  metricsTable?: {
    headers: string[];
    rows: (string | number)[][];
  };
  learnings: string[];
  screenshots?: {
    url: string;
    caption: string;
  }[];
}

export const CASES_DATA: CaseStudy[] = [
  {
    id: "artilheiro-da-casa",
    slug: "artilheiro-da-casa",
    title: "Retenção Longitudinal através de Cartas Colecionáveis",
    subtitle: "A transição de uma regra promocional textual para uma mecânica visual inspirada em card games esportivos. Salto de 72 para 827 apostas (+1.048%) no Brasileirão.",
    category: "Gamificação",
    tags: ["GAMIFICAÇÃO", "VALIDAÇÃO DATA-FIRST", "IGAMING"],
    company: "Casa de Apostas",
    role: "Product Designer (UX/UI & Mecânica)",
    squad: "Gabriel Nascimento (PM), Lucca Schramm (Dev), Paulo Ricardo",
    timeline: "Março a Maio / 2025 (7 Rodadas)",
    highlightMetric: "+1.048% Apostas / +727% Volume",
    coverImage: "/images/covers/artilheiro_showcase_cover.png",
    problem: {
      briefing: "Divulgar a promoção do Artilheiro com mais banners na Home e enviar e-mails com as regras da rodada.",
      reframed: "O problema não era falta de canais de mídia, mas sim a fricção cognitiva de exigir leitura regulamentar densa para uma ação lúdica. Era necessário transformar o modelo mental em uma experiência visual imediata."
    },
    hypothesis: "Testar a mecânica comercial antes do pixel: Rodada 1 como baseline textual (72 apostas) e introdução da interface visual de cartas esportivas a partir da Rodada 2.",
    decisions: [
      {
        title: "Modelo Mental de Cartas Colecionáveis",
        description: "Adoção da linguagem visual de cards esportivos (estilo FIFA Ultimate Team), onde o atleta, a partida e o multiplicador de odd estão imediatamente legíveis sem necessidade de ler termos e condições."
      },
      {
        title: "Mecânica Transparente de Recompensa",
        description: "Aposta mínima de R$ 10 gerando R$ 10 de aposta grátis (freebet) para cada gol real marcado pelo atleta escolhido."
      }
    ],
    metricsTable: {
      headers: ["Rodada", "Data", "Formato / Evento", "Apostas", "Volume (R$)"],
      rows: [
        ["Rodada 1", "30/03/2025", "MVP Textual (Baseline)", 72, "R$ 821,07"],
        ["Rodada 2", "06/04/2025", "Lançamento da Interface Visual", 590, "R$ 6.128,37"],
        ["Rodada 3", "13/04/2025", "Pico de Engajamento Retido", 827, "R$ 6.790,55"],
        ["Rodada 4", "16/04/2025", "Instabilidade técnica de provedor externo", 345, "R$ 2.521,71"],
        ["Rodada 5", "20/04/2025", "Atletas com menor apelo popular", 212, "R$ 2.270,83"],
        ["Rodada 6", "27/04/2025", "Recuperação com craques em destaque", 628, "R$ 4.383,39"],
        ["Rodada 7", "04/05/2025", "Fechamento de ciclo de temporada", 221, "R$ 2.139,81"]
      ]
    },
    learnings: [
      "O design visual gerou um salto de +1.048% sem alteração na verba de marketing.",
      "A experiência depende de alinhamento estreito com curadoria esportiva (queda na Rodada 5 por falta de apelo dos atletas).",
      "Resiliência técnica e empty states claros são fundamentais quando integrações de terceiros oscilam (Rodada 4)."
    ],
    screenshots: [
      {
        url: "/images/02_artilheiros_casa/artilheiro_cards_spread_showcase.png",
        caption: "Composição visual de cards colecionáveis inspirada em card games esportivos com odds e metas legíveis."
      },
      {
        url: "/images/02_artilheiros_casa/card_pedro_flamengo_2048x1365.png",
        caption: "Card individual do atleta Pedro (Flamengo) com multiplicadores e regras de freebet."
      },
      {
        url: "/images/02_artilheiros_casa/card_hulk_atletico_2048x1365.png",
        caption: "Card individual do atleta Hulk (Atlético-MG) em alta definição para grid promocional."
      },
      {
        url: "/images/02_artilheiros_casa/card_raphael_veiga_2048x1365.png",
        caption: "Card individual do atleta Raphael Veiga (Palmeiras) detalhando mecânica de bônus por gol."
      },
      {
        url: "/images/02_artilheiros_casa/card_estevao_palmeiras_2048x1365.png",
        caption: "Card individual da revelação Estêvão (Palmeiras) com odd turbinada e CTA direto."
      }
    ]
  },
  {
    id: "limites-prudenciais",
    slug: "limites-prudenciais",
    title: "Redesign do Fluxo de Autoexclusão & Proteção Financeira",
    subtitle: "Conversão de um requisito regulatório compulsório (Portaria SPA/MF nº 1.231) em uma experiência ética de acolhimento. Inversão de CTAs e veto a padrões escuros.",
    category: "Jogo Responsável",
    tags: ["JOGO RESPONSÁVEL", "COMPLIANCE SPA/MF", "DESIGN ÉTICO"],
    company: "Casa de Apostas",
    role: "Product Designer (UX, Benchmark & Ética)",
    squad: "Tamille Ramos (PM), Luedy Costa (Design Supervisor), Jimmy",
    timeline: "Junho a Julho / 2025",
    highlightMetric: "100% Conformidade Regulatória SPA/MF",
    coverImage: "/images/covers/limites_showcase_cover.png",
    problem: {
      briefing: "Atender a Portaria 1.231 inserindo os limites obrigatórios de apostas e perdas no sistema.",
      reframed: "O fluxo anterior oferecia apenas um botão nuclear de encerramento irreversível de conta. Era indispensável criar um painel preventivo graduado de proteção ao jogador com fricções éticas."
    },
    decisions: [
      {
        title: "Inversão da Hierarquia de CTAs",
        description: "Transformar a Pausa Temporária (1, 7 ou 30 dias) na ação primária, evitando o rage quit irreversível e acolhendo o usuário em sofrimento."
      },
      {
        title: "Veto a Padrões Escuros no Onboarding (Flow 1)",
        description: "Rejeição ao pré-preenchimento sugestivo de valores altos no cadastro, garantindo inputs neutros com conformidade ética estrita."
      },
      {
        title: "Fricção Assimétrica (Flow 2)",
        description: "Reduções de limite são imediatas; aumentos de limite exigem carência legal de 24 horas para reconfirmação consciente."
      }
    ],
    learnings: [
      "Benchmark em 6 plataformas concorrentes revelou que padrões escuros eram predominantes no setor.",
      "O design orientado a compliance protege tanto o usuário vulnerável quanto a empresa contra autuações federais."
    ],
    screenshots: [
      {
        url: "/images/01_limites_autoexclusao/limites_tela_definicao_deposito.png",
        caption: "Definição de limites de depósito diário, semanal e mensal com prevenção de rage betting."
      },
      {
        url: "/images/01_limites_autoexclusao/limites_tela_pausa_temporaria.png",
        caption: "Hierarquia invertida: pausa temporária graduada (1, 7 ou 30 dias) como ação de acolhimento primária."
      },
      {
        url: "/images/01_limites_autoexclusao/limites_tela_perdas_liquidas.png",
        caption: "Controle estrito de perdas líquidas (Apostas vs Ganhos) conforme Portaria SPA/MF nº 1.231."
      },
      {
        url: "/images/01_limites_autoexclusao/limites_tela_autoexclusao_definitiva.png",
        caption: "Autoexclusão definitiva com modal de confirmação e fricção de segurança de 24 horas."
      },
      {
        url: "/images/01_limites_autoexclusao/limites_tela_tempo_sessao.png",
        caption: "Configuração de tempo máximo de sessão diária com notificações de alerta."
      }
    ]
  },
  {
    id: "pagina-transacoes",
    slug: "pagina-transacoes",
    title: "Painel Gráfico de Extrato e Autosserviço Financeiro",
    subtitle: "Arquitetura mobile-first de extrato de 36 meses segregando apostas esportivas de cassino em conformidade com a Portaria SPA/MF 1.231.",
    category: "Transparência Financeira",
    tags: ["TRANSPARÊNCIA FINANCEIRA", "REGULAÇÃO", "SELF-SERVICE UX"],
    company: "Casa de Apostas",
    role: "Product Designer (IA Pipeline & UX Lead)",
    squad: "Tamille Ramos (PM), Luedy Costa, Verônica Lima",
    timeline: "Agosto a Setembro / 2025",
    highlightMetric: "-40% Tickets de Suporte / 36 Meses de Histórico",
    coverImage: "/images/covers/transacoes_showcase_cover.png",
    problem: {
      briefing: "Atualizar a tela de Minhas Transações para cumprir a nova portaria do Ministério da Fazenda.",
      reframed: "A ausência de filtros e o extrato misturado sobrecarregavam o SAC Nível 1 com pedidos manuais de planilha. Era preciso transformar o extrato em uma ferramenta de autoauditoria pelo usuário."
    },
    decisions: [
      {
        title: "Segregação Esportes vs Cassino",
        description: "Abas dedicadas que separam as métricas de partidas esportivas do volume de giros de cassino, com cálculo de P&L líquido em tempo real."
      },
      {
        title: "Filtros Temporais Modulares (7d, 30d, 12m e Custom)",
        description: "Seletores intuitivos para auditoria pessoal e suporte a exportação compatível com declarações fiscais."
      },
      {
        title: "Indicador de Tempo de Uso",
        description: "Contador de horas ativas na semana como guardrail de jogo consciente integrado ao fluxo de limites."
      }
    ],
    learnings: [
      "A transparência de dados reduz drasticamente o custo operacional de suporte.",
      "Interfaces reguladas exigem performance extrema (< 1.5s em mobile 4G) para garantir confiabilidade de auditoria."
    ],
    screenshots: [
      {
        url: "/images/03_transacoes_onboarding/transacoes_dashboard_desktop_1920x1440.png",
        caption: "Visão consolidada desktop do extrato financeiro com métricas de P&L líquido e histórico estendido."
      },
      {
        url: "/images/03_transacoes_onboarding/transacoes_mobile_esportes_aba.png",
        caption: "Extrato segregado de apostas esportivas no mobile com status em tempo real."
      },
      {
        url: "/images/03_transacoes_onboarding/transacoes_mobile_cassino_aba.png",
        caption: "Extrato segregado de sessões e giros de cassino com saldo resultante."
      },
      {
        url: "/images/03_transacoes_onboarding/transacoes_mobile_seletor_periodo.png",
        caption: "Filtros temporais dinâmicos (7d, 30d, 90d, custom) para auditoria e histórico de até 36 meses."
      },
      {
        url: "/images/03_transacoes_onboarding/transacoes_mobile_detalhe_aposta.png",
        caption: "Detalhamento individual da aposta com comprovante e ID de transação para SAC e conformidade."
      }
    ]
  }
];
