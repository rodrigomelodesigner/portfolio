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
  benchmark?: {
    title: string;
    description: string;
    competitors: string[];
    findings: string[];
  };
  keyMetrics?: {
    value: string;
    label: string;
    description: string;
  }[];
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
    title: "Artilheiro da Casa: cards de atleta no lugar do regulamento",
    subtitle: "470 apostas por rodada em média com cards, contra 72 com regulamento em texto, sem verba de mídia adicional.",
    category: "Sportsbook UX",
    tags: ["SPORTSBOOK UX", "CONVERSÃO", "PRODUTO"],
    company: "Casa de Apostas",
    role: "Product Designer (UX/UI & Mecânica)",
    squad: "Gabriel Nascimento (Produto), Lucca Schramm (Engenharia)",
    timeline: "Março a Maio / 2025 (7 Rodadas)",
    highlightMetric: "470 apostas/rodada (6,5x) · R$ 4.039 stake médio",
    coverImage: "/images/covers/artilheiro_showcase_cover.png",
    problem: {
      briefing: "Na estreia do Brasileirão 2025 (R1, 30/03), a promoção Artilheiro da Casa foi publicada na Home como um regulamento de 15 linhas em texto corrido. Resultado: 72 apostas e R$ 821,07 de stake nos cinco mercados de artilheiro. Marketing relatou baixa adesão e pediu mais banners e e-mails.",
      reframed: "A leitura foi outra: as pessoas já viam a oferta, mas ela não virava aposta porque exigia interpretar regras antes de chegar ao mercado. A barreira era o atrito entre ler a regra e encontrar a aposta no Sportsbook."
    },
    hypothesis: "A partir da R2, no mesmo espaço da Home, troquei o texto por um card por atleta, com partida, odd e multiplicador visíveis. Um toque no card já colocava a odd no boletim de aposta, sem passar pela navegação de esportes. A verba de mídia e os canais continuaram os mesmos. Projeto feito com Gabriel Nascimento (Produto) e Lucca Schramm (Engenharia). A validação foi sequencial, comparando rodada com rodada, sem teste A/B.",
    decisions: [
      {
        title: "Atalho Transacional Direto na Home",
        description: "Em vez de exigir que o usuário lesse termos e depois procurasse a partida na árvore de esportes, o card exibiu odd e atleta com inserção direta no boletim de aposta em um toque."
      },
      {
        title: "Linguagem Visual de Cards Esportivos",
        description: "5 mercados de artilheiros da rodada destacados com fotos dos atletas, confronto e multiplicadores imediatamente escaneáveis, sem parágrafos de regras."
      }
    ],
    metricsTable: {
      headers: ["Rodada", "Data", "Formato / Contexto", "Apostas", "Stake (R$)", "Ticket Médio"],
      rows: [
        ["R1", "30/03/2025", "MVP Textual (Baseline)", 72, "R$ 821,07", "R$ 11,40"],
        ["R2", "06/04/2025", "Lançamento dos Cards Visuais", 590, "R$ 6.128,37", "R$ 10,38"],
        ["R3", "13/04/2025", "Pico de Engajamento", 827, "R$ 6.790,55", "R$ 8,21"],
        ["R4", "16/04/2025", "Quarta-feira (meio de semana) + instabilidade de provedor", 345, "R$ 2.521,71", "R$ 7,30"],
        ["R5", "20/04/2025", "Atletas com menor apelo popular", 212, "R$ 2.270,83", "R$ 10,71"],
        ["R6", "27/04/2025", "Recuperação com craques em destaque (Pedro, Hulk)", 628, "R$ 4.383,39", "R$ 6,98"],
        ["R7", "04/05/2025", "Fechamento de ciclo / normalização da novidade", 221, "R$ 2.139,81", "R$ 9,68"]
      ]
    },
    learnings: [
      "Média de 470 apostas e R$ 4.039 de stake por rodada com cards, contra 72 apostas e R$ 821,07 na R1 (6,5x as apostas e 4,9x o stake).",
      "O ticket médio caiu de R$ 11,40 para R$ 8,58 porque o card virou atalho para apostar direto no atleta, atraindo apostas menores nos mercados elegíveis.",
      "Limites de atribuição: teste sem grupo controle, relatório do provedor sem separação de usuários únicos e volume sensível ao apelo do atleta, estabilidade do provedor e dia da semana (quarta-feira na R4)."
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
    id: "bolao-da-copa",
    slug: "bolao-da-copa",
    title: "Bolão da Copa: predição social, testes internos e adesão orgânica",
    subtitle: "9.035 participantes em 25 dias sem mídia paga, testes com colaboradores internos e a realidade da adesão aos grupos privados.",
    category: "Social Gaming & Aquisição",
    tags: ["SOCIAL GAMING", "AQUISIÇÃO ORGÂNICA", "TESTES INTERNOS"],
    company: "Casa de Apostas",
    role: "Product Designer (UX/UI & Descoberta)",
    squad: "Tamille Rocha (PM), Gabriel Nascimento (Marketing), Wesley Dias (Engenharia/Zizy)",
    timeline: "Maio a Julho / 2026",
    highlightMetric: "9.035 participantes · 81 grupos privados",
    coverImage: "/images/covers/bolao_showcase_cover.png",
    problem: {
      briefing: "Durante a Copa do Mundo de 2026, a operação precisava atrair e reativar usuários sem depender de campanhas pagas de aquisição, cujos custos sobem no torneio. A proposta foi criar um bolão esportivo gratuito (fantasy social), onde o público pudesse palpitar nos placares dos jogos e competir tanto em um ranking geral quanto em grupos privados de amigos. O prazo de entrega era de quatro semanas entre o briefing e o pontapé inicial da Copa.",
      reframed: "O desafio foi desenhar uma mecânica de engajamento diário sem dinheiro real capaz de atrair participantes organicamente, avaliando se grupos fechados de amigos funcionariam como motor viral de aquisição."
    },
    hypothesis: "Como Product Designer, em parceria com a PM Tamille Rocha e o time de marketing, desenhei o fluxo completo de navegação e palpite para mobile. Na abertura da Copa (11 de junho), conduzi uma rodada de testes de usabilidade no escritório com 6 colaboradores internos de outras áreas (CRM, Live Marketing e Design) para observar o primeiro uso. O teste apontou que a estrela no 'Palpite Dobrado' era confundida com um botão de favoritar partida e que inputs de placar vazios geravam dúvida sobre o formato aceito. Substituí a estrela pela tag explícita '2x Pontos em dobro' e adicionei formato nos campos de placar na Sprint 2. O fluxo foi bifurcado para permitir que o usuário entrasse sozinho pelo ranking geral ou recebesse um convite via link para um grupo fechado com ranking próprio.",
    decisions: [
      {
        title: "Tag Visual Explícita '2x' no Lugar da Estrela",
        description: "Eliminação da ambiguidade identificada nos testes internos, deixando claro que a ação dobra a pontuação do acerto em vez de favoritar a partida."
      },
      {
        title: "Fluxo de Entrada Bifurcado (Convite vs. Orgânico)",
        description: "Quem recebia deep link entrava direto no grupo fechado com tela de aceite e ranking privado; quem acessava pela plataforma caía na central geral de palpites."
      },
      {
        title: "Interface de Palpites em Scroll com Bloqueio Automático",
        description: "Cards com confrontos, bandeiras e inputs estruturados, com trava automática no apito inicial do jogo e timestamp de desempate."
      }
    ],
    learnings: [
      "Do lançamento, em 11/06, até 06/07/2026, o bolão teve 9.035 participantes inscritos, sem mídia paga, segundo o sistema Zizy.",
      "A hipótese de crescimento pelos grupos de amigos não se confirmou: foram criados só 81 grupos privados para 9.035 participantes.",
      "Minha leitura é que o prêmio do ranking geral atraía mais do que a disputa entre amigos, e que convidar alguém exigia que essa pessoa tivesse ou criasse uma conta na plataforma.",
      "O aprendizado é que um mecanismo de convite precisa de um incentivo próprio, forte o bastante para compensar o trabalho de trazer outra pessoa."
    ],
    screenshots: [
      {
        url: "/images/04_bolao_copa/bolao_fluxo_mapeamento.png",
        caption: "Mapeamento do fluxo de entrada bifurcado: convite com deep link para grupo fechado vs. entrada orgânica pela plataforma."
      },
      {
        url: "/images/04_bolao_copa/bolao_palpites_rodada.png",
        caption: "Interface de palpites por rodada com confrontos e multiplicador de pontos."
      },
      {
        url: "/images/04_bolao_copa/bolao_antes_depois_rodadas.png",
        caption: "Evolução visual da interface de rodadas e consolidação dos cards de confronto."
      }
    ]
  },
  {
    id: "limites-prudenciais",
    slug: "limites-prudenciais",
    title: "Saída responsável: pausa e autoexclusão sob as regras da SPA/MF",
    subtitle: "Reconstrução da jornada de afastamento com pausa temporária, autoavaliação voluntária e autoexclusão definitiva em 3 etapas sem labirinto de menus.",
    category: "Compliance & Jogo Responsável",
    tags: ["JOGO RESPONSÁVEL", "COMPLIANCE SPA/MF", "DESIGN ÉTICO"],
    company: "Casa de Apostas",
    role: "Product Designer (UX, Benchmark & Ética)",
    squad: "Tamille Rocha (PM), Diego Batista (Produto), Hans Schleier (Compliance), Luedy Costa (Design)",
    timeline: "Maio a Julho / 2025",
    highlightMetric: "Homologado em Staging (28/07) · 3 Etapas Sem Obstrução",
    coverImage: "/images/covers/limites_showcase_cover.png",
    problem: {
      briefing: "Em abril de 2025, já sob as regras de jogo responsável da SPA/MF, a única saída da plataforma era um botão 'Fechar conta' com o aviso 'esta ação é irreversível'. Não havia pausa temporária nem encaminhamento para apoio, então quem queria se afastar por um tempo só podia se excluir de forma definitiva. O ticket #1992, aberto pela PM Tamille Rocha em 29/04/2025, pediu a adequação do fluxo.",
      reframed: "O problema não era apenas adicionar telas, mas evitar dois extremos éticos: não tornar a saída um labirinto obstrutivo (como os 4 a 5 níveis de menu vistos no benchmark da concorrência), nem induzir o usuário com textos persuasivos de retenção. O papel do design foi construir um fluxo sóbrio e direto."
    },
    hypothesis: "No painel de Jogo Responsável, a pausa temporária de 1, 7 ou 30 dias aparece primeiro e a autoexclusão definitiva fica logo abaixo, na mesma tela, sem submenu. A autoexclusão leva três etapas: pedir a exclusão, ler os efeitos (bloqueio de apostas, saque do saldo e canais de apoio) e confirmar com a senha, para impedir que outra pessoa exclua a conta num aparelho compartilhado. A autoavaliação baseada no CPGI é um link opcional, nunca uma etapa obrigatória. A v1 tinha um texto persuasivo e ilustrações emotivas, e a supervisão de design (Luedy Costa) reprovou essa versão em 07/07/2025 porque ela soava como retenção disfarçada. A v2, aprovada em 10/07, trocou isso por texto factual e cores neutras. No benchmark, os operadores analisados exigiam de 4 a 5 níveis de menu para chegar à autoexclusão. Como a API do provedor exige login vinculado ao CPF, quem está deslogado encontra na tela de login um atalho para o chat de suporte 24h, onde pode pedir a exclusão a um atendente.",
    benchmark: {
      title: "Auditoria Comparativa no FigJam",
      description: "Mapeamento de boas práticas e armadilhas de UX em operadores do mercado antes de iniciar os wireframes.",
      competitors: ["Operadores líderes do mercado nacional analisados no benchmark"],
      findings: [
        "A maioria dos operadores analisados escondia a autoexclusão atrás de 4 a 5 níveis de menus (padrão obstrutivo deliberado).",
        "Ausência de alternativas graduadas: o usuário era forçado a escolher entre continuar vulnerável ou rescindir a conta para sempre.",
        "Fluxos deslogados quebravam sem alternativas de suporte para quem havia esquecido a credencial."
      ]
    },
    decisions: [
      {
        title: "Pausa e Autoexclusão na Mesma Tela (Sem Submenus)",
        description: "A pausa temporária (1, 7 ou 30 dias) fica no topo e a autoexclusão logo abaixo. Diferente dos operadores que escondiam a saída em 4 a 5 níveis de menu, o encerramento ficou a um scroll de distância."
      },
      {
        title: "Autoexclusão Definitiva em 3 Etapas Transparentes",
        description: "1. Pedido no painel; 2. Esclarecimento sóbrio dos efeitos legais (saque do saldo remanescente e canais de ajuda); 3. Confirmação por senha para segurança em dispositivos compartilhados."
      },
      {
        title: "Neutralidade Verbal e CPGI Opcional (v2)",
        description: "Rejeição da v1 persuasiva. Adoção de linguagem estritamente neutra e factual, sem ilustrações emotivas, com o questionário de autopercepção CPGI como link voluntário."
      }
    ],
    learnings: [
      "O fluxo foi validado por Compliance (Hans Schleier), Produto (Diego Batista) e Conteúdo/Jurídico (Priscila Santiago e Natália Gomes), e foi para staging em 28/07/2025. Não acompanhei a entrada em produção porque meu ciclo no ticket #1992 terminou nessa homologação.",
      "Não houve teste A/B por escolha ética: testar variantes de interface para ver qual faz menos pessoas saírem seria manipular usuários em momento de vulnerabilidade.",
      "Métricas a acompanhar em produção: proporção entre pausa e autoexclusão, retorno pós-pausa, tempo de conclusão da exclusão e solicitações manuais via chat de suporte, sem meta de conter saídas."
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
  }
];
