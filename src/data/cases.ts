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
  constraint: string;
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
    constraint: "A validação comparou rodada com rodada, sem teste A/B e sem mídia adicional.",
    // Capa oficial com a composição de cards recentes (23/02/2026), evidenciando o craft e a evolução do componente.
    coverImage: "/images/02_artilheiros_casa/extra_artilheiro_cards_rodada.png",
    problem: {
      briefing: "Na estreia do Brasileirão 2025 (R1, 30/03), a promoção Artilheiro da Casa foi publicada na Home como um regulamento de 15 linhas em texto corrido. Resultado: 72 apostas e R$ 821,07 de stake nos cinco mercados de artilheiro.",
      // TODO(sem fonte): "Marketing relatou baixa adesão e pediu mais banners e e-mails" foi retirado; não há registro no vault. "15 linhas" só aparece no meta-case do portfólio (PROJ — Construção do Portfólio), não numa fonte primária.
      reframed: "A leitura foi outra: as pessoas já viam a oferta, mas ela não virava aposta porque exigia interpretar regras antes de chegar ao mercado. A barreira era o atrito entre ler a regra e encontrar a aposta no Sportsbook."
    },
    // TODO(sem fonte): retirado "um toque no card colocava a odd no boletim". O Figma não tem estado selecionado nem boletim, e o kickoff (2025-03-13) fala em "widget que redirecione para a LP". "A verba de mídia e os canais continuaram os mesmos" não tem registro primário.
    hypothesis: "A partir da R2, no mesmo espaço da Home, troquei o texto por um card por atleta, com partida e odd turbinada visíveis. Projeto feito com Gabriel Nascimento (Produto) e Lucca Schramm (Engenharia). A validação foi sequencial, comparando rodada com rodada, sem teste A/B.",
    decisions: [
      {
        title: "Linguagem Visual de Cards Esportivos e Evolução de Craft",
        description: "Os 5 mercados de artilheiro da rodada viraram cards com foto do atleta, confronto e odd turbinada, no lugar dos parágrafos de regras. Na validação inicial de 2025 (R1 a R7), a oferta concedia aposta grátis de R$ 10 para cada gol marcado (aposta mínima de R$ 10); na evolução de 2026, a mecânica foi estendida com chips de chutes a gol ('R$ 5 a cada chute no gol') e multiplicadores, mantendo a mesma matriz anatômica do card."
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
        ["R6", "27/04/2025", "Recuperação com craques em destaque", 628, "R$ 4.383,39", "R$ 6,98"],
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
        url: "/images/02_artilheiros_casa/artilheiro_ui_card_component.png",
        caption: "Card de atleta (componente JOGADOR_CARD) com foto, confronto e odd turbinada. Exibição da versão mais recente (iteração de 23/02/2026), evidenciando o auto-layout, a hierarquia de tokens e a maturidade de craft construída a partir do aprendizado de 2025."
      },
      {
        url: "/images/02_artilheiros_casa/extra_artilheiro_cards_rodada.png",
        caption: "Vitrine dos cards da rodada: evolução do componente em alta fidelidade. O contraste entre a validação de 2025 (72 apostas no texto vs. 827 no pico visual) e a iteração recente demonstra a continuidade de produto e a consistência visual da promoção."
      },
      {
        url: "/images/02_artilheiros_casa/extra_artilheiro_desktop_screen_full.png",
        caption: "Página da promoção no desktop, com os cards de atleta em carrossel integrado no lugar do antigo regulamento em texto."
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
    constraint: "Sem verba de mídia paga. O convite para um grupo privado exige conta na plataforma.",
    coverImage: "/images/covers/bolao_showcase_cover.png",
    problem: {
      briefing: "Durante a Copa do Mundo de 2026, a operação precisava atrair e reativar usuários sem depender de campanhas pagas de aquisição, cujos custos sobem no torneio. A proposta foi criar um bolão esportivo gratuito (fantasy social), onde o público pudesse palpitar nos placares dos jogos e competir tanto em um ranking geral quanto em grupos privados de amigos. O prazo de entrega era de quatro semanas entre o briefing e o pontapé inicial da Copa.",
      reframed: "O desafio foi desenhar uma mecânica de engajamento diário sem dinheiro real capaz de atrair participantes organicamente, avaliando se grupos fechados de amigos funcionariam como motor viral de aquisição."
    },
    // TODO(sem fonte): retirados "testes com 6 colaboradores (CRM, Live Marketing e Design)" e "substituí a estrela pela tag '2x Pontos em dobro' na Sprint 2". O vault só registra o feedback presencial de Adir Filho em 11/06/2026, e o Figma ainda mostra a estrela. A Sprint 2 foi planejada em 19/05, antes desse feedback.
    hypothesis: "Como Product Designer, em parceria com a PM Tamille Rocha e o time de marketing, desenhei o fluxo completo de navegação e palpite para mobile. Em 11/06/2026, Adir Filho (Supervisor de Live Marketing) usou o bolão e trouxe sugestões: a estrela do 'Palpite Dobrado' remetia mais a 'favoritar' do que a 'dobrar', os palpites poderiam começar preenchidos com 0x0 e faltava deixar claro se um palpite valia para todos os grupos. As sugestões entraram na especificação de fluxos. O fluxo foi bifurcado para permitir que o usuário entrasse sozinho pela plataforma ou recebesse um convite via link para um grupo fechado com ranking próprio.",
    decisions: [
      // TODO(sem fonte): decisão "Tag '2x' no lugar da estrela" retirada; não há versão com a tag no Figma nem registro de implementação.
      {
        title: "Partidas Encerradas em Modo Leitura",
        description: "Em jogos que já passaram, o campo de palpite some, o resultado real ganha destaque e o palpite da pessoa aparece menor, embaixo, com o card em estado opaco (decisão de 19/05/2026)."
      },
      {
        title: "Fluxo de Entrada Bifurcado (Convite vs. Orgânico)",
        description: "Quem abria o link de convite via uma tela intermediária com os dados do grupo e os botões 'Criar conta e entrar' e 'Já tenho conta', antes do onboarding; quem entrava pela plataforma começava no onboarding de 4 passos e chegava aos grupos pelo estado vazio da aba."
      },
      {
        title: "Interface de Palpites em Scroll com Bloqueio Automático",
        description: "Cards por jogo com confronto, data e campos de placar, bloqueio dos jogos já iniciados e horário do salvamento usado como critério de desempate."
        // TODO(sem fonte): "bandeiras" retirado. O Figma não tem bandeiras e o teste da API de bandeiras ficou como pergunta em aberto na SPEC.
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
        url: "/images/04_bolao_copa/bolao_palpites_flow.png",
        caption: "Fluxo de palpites no mobile: lista de jogos da rodada, campos de placar e botão 'Salvar palpites'."
      },
      {
        url: "/images/04_bolao_copa/extra_bolao_palpite_card_variants.png",
        caption: "Card de palpite em dois estados: normal e com 'Palpite dobrado' ativo (1 por rodada, dobra a pontuação do acerto)."
      },
      {
        url: "/images/04_bolao_copa/bolao_ranking_screen.png",
        caption: "Ranking geral com Top 10, faixas de corte e posição fixada. A premiação exibida de R$ 400 mil refletia o montante alocado para o ranking geral do Bolão dentro da campanha oficial de R$ 500 mil aprovada pela diretoria (ata de 19/05/2026), com R$ 100 mil dedicados ao ranking do Indique e Ganhe."
      }
    ]
  },
  {
    id: "limites-prudenciais",
    slug: "limites-prudenciais",
    title: "Saída responsável: pausa e autoexclusão sob as regras da SPA/MF",
    subtitle: "Pausa temporária, autoavaliação opcional e autoexclusão em 3 etapas, reunidas numa única página de Jogo Responsável.",
    category: "Compliance & Jogo Responsável",
    tags: ["JOGO RESPONSÁVEL", "COMPLIANCE SPA/MF", "UX WRITING"],
    company: "Casa de Apostas",
    role: "Product Designer (UX, Benchmark & UX Writing)",
    // TODO(sem fonte): Luedy Costa retirada do squad; nenhuma ata da autoexclusão de 2025 a cita.
    squad: "Tamille Rocha (PM), Diego Batista (Produto), Hans Schleier (Compliance)",
    timeline: "Abril a Julho / 2025",
    highlightMetric: "Envio para staging aprovado em 28/07/2025 · Autoexclusão em 3 etapas",
    constraint: "A pausa e o encerramento definitivo ficam na mesma página de Jogo Responsável.",
    // Capa antiga (covers/limites_showcase_cover.png) era print da Betano.
    coverImage: "/images/01_limites_autoexclusao/limites_autoexclusao_flow.png",
    problem: {
      briefing: "Em abril de 2025, a única saída da plataforma era um botão que encerrava a conta na hora e de forma irreversível. A página comunicava apenas o encerramento definitivo, sem pausa temporária nem encaminhamento para apoio. O ticket #1992, aberto pela PM Tamille Rocha em 29/04/2025, pediu um novo layout e copy para a autoexclusão, para web e mobile, com benchmark de Superbet, Betano e Estrelabet.",
      // TODO(sem fonte): retirados "4 a 5 níveis de menu" (não aparece no vault) e "evitar textos persuasivos de retenção". A nota do Figma de 07/07/2025 (node 75:1579) e a ata de 10/07/2025 dizem o contrário: o objetivo declarado era evitar o encerramento definitivo e incentivar a pausa. Rodrigo decide como contar isso.
      reframed: "Na reunião de 10/07/2025, Compliance (Hans Schleier) propôs trocar o botão único por uma jornada em etapas, com autoavaliação, apoio e pausa antes da exclusão definitiva, para dar tempo de a pessoa reavaliar a decisão. O desafio de design foi montar essa jornada sem esconder a saída: o encerramento continua na mesma página e o aviso final diz com clareza que a ação é irreversível."
    },
    // TODO(sem fonte): retirados: etapa de senha (não existe em nenhuma versão do Figma), "tela de efeitos" (só existe na proposta rejeitada), "ilustrações emotivas", "Luedy reprovou em 07/07", "v2 aprovada em 10/07", "API do provedor exige login vinculado ao CPF" e "atalho de chat na tela de login" (as páginas LOGIN e SUPORTE do Figma estão vazias).
    hypothesis: "No painel de Jogo Responsável, os cards 'Limites pessoais', 'Precisa de ajuda?', 'Período de pausa' e 'Encerrar minha conta' ficam na mesma página, sem submenu. A pausa pode ser de 1 dia, 1 semana, 1 mês ou 3 meses. A autoexclusão aprovada (v2) tem três etapas: um modal 'Precisa de ajuda?' que sugere a autoavaliação, a tela 'Encerrar minha conta' com o lembrete de sacar todo o saldo e a opção de pausar, e o modal final 'Tem certeza dessa decisão?', que avisa que a ação é irreversível. A autoavaliação usa o formulário da EBAC, baseado no Canadian Problem Gambling Index (CPGI), e dá para seguir sem preenchê-lo. A v1 se despedia com 'Vamos sentir sua falta por aqui!' e 'Esperamos te ver de novo em breve.'; a v2 trocou isso por 'Esta ação é irreversível.' Depois do encerramento, a tela de conta encerrada informa que o saldo vai para a chave Pix cadastrada e oferece o chat de suporte, disponível 24 horas.",
    benchmark: {
      title: "Auditoria Comparativa no FigJam",
      description: "Mapeamento de boas práticas de UX e copywriting em operadores do mercado, estruturado no FigJam antes dos wireframes.",
      competitors: ["Betano", "Superbet", "Estrelabet"],
      // TODO(sem fonte): os 3 achados antigos (4 a 5 níveis de menu, falta de alternativas graduadas, fluxos deslogados) não têm registro no vault. Se o FigJam do benchmark tiver os achados, citar a partir dele.
      findings: [
        "No fluxo da própria Casa de Apostas, o mapeamento apontou linguagem brusca, ausência de etapas claras e risco de cliques acidentais."
      ]
    },
    decisions: [
      {
        title: "Pausa e Autoexclusão na Mesma Página (Sem Submenus)",
        description: "No painel de Jogo Responsável, 'Período de pausa' (1 dia, 1 semana, 1 mês ou 3 meses) fica logo acima de 'Encerrar minha conta'. Em 28/07/2025, Produto decidiu reunir as ferramentas de Jogo Responsável num menu único que leva a essa página central."
      },
      {
        title: "Autoexclusão em 3 Etapas",
        description: "1. Modal 'Precisa de ajuda?', com a autoavaliação como sugestão e a opção de seguir direto; 2. Tela 'Encerrar minha conta', com o lembrete de sacar todo o saldo e a opção de pausar; 3. Modal 'Tem certeza dessa decisão?', com o aviso 'Esta ação é irreversível'."
      },
      {
        title: "Substituição do Apelo Emotivo e Arquitetura de Escolha Graduada (v1 × v2)",
        description: "A v1 utilizava 'Vamos sentir sua falta por aqui!' e 'Esperamos te ver de novo em breve.', configurando retenção persuasiva. A v2 substituiu isso por linguagem factual ('Esta ação é irreversível'). Para acomodar a diretriz de negócio de mitigar encerramentos intempestivos/definitivos sem recorrer a dark patterns, o modal final priorizou a pausa temporária reversível como ação de menor dano em destaque, mantendo a opção de encerramento permanente acessível logo abaixo, sem labirintos de navegação."
      }
    ],
    learnings: [
      // TODO(sem fonte): retirados "validado por Priscila Santiago e Natália Gomes" e "foi para staging em 28/07". A ata de 28/07/2025 registra a decisão de enviar para staging e diz que a aprovação final de copy e CTAs ainda dependia de Hans Schleier.
      "Em 28/07/2025, Produto (Diego Batista e Tamille Rocha) decidiu enviar as páginas de Autoexclusão e Período de Pausa para staging. A aprovação final de copy e CTAs ainda dependia de Compliance (Hans Schleier).",
      // TODO(sem fonte): reflexão sem registro no vault; confirmar com Rodrigo antes de publicar.
      "Não houve teste A/B por escolha ética: testar variantes de interface para ver qual faz menos pessoas saírem seria manipular usuários em momento de vulnerabilidade.",
      "Métricas a acompanhar em produção: proporção entre pausa e autoexclusão, retorno pós-pausa, tempo de conclusão da exclusão e solicitações manuais via chat de suporte."
    ],
    // As 5 imagens antigas eram prints de concorrentes (Betano, 7K, bet365) e saíram do case. Os arquivos continuam no disco.
    screenshots: [
      {
        url: "/images/01_limites_autoexclusao/extra_limites_painel_jogo_responsavel_topo.png",
        caption: "Painel de Jogo Responsável: limites pessoais, pedido de ajuda, período de pausa e encerramento de conta na mesma página."
      },
      {
        url: "/images/01_limites_autoexclusao/extra_limites_pausa_temporaria_estados.png",
        caption: "Período de pausa em três estados: vazio, lista aberta (1 dia, 1 semana, 1 mês ou 3 meses) e opção escolhida."
      },
      {
        url: "/images/01_limites_autoexclusao/limites_autoexclusao_flow.png",
        caption: "Autoexclusão aprovada (v2) em 3 etapas: modal 'Precisa de ajuda?', tela 'Encerrar minha conta' e confirmação 'Tem certeza dessa decisão?'."
      },
      {
        url: "/images/01_limites_autoexclusao/limites_v1_v2_comparativo.png",
        caption: "Modal final na v1 ('Vamos sentir sua falta por aqui!') e na v2 ('Esta ação é irreversível')."
      },
      {
        url: "/images/01_limites_autoexclusao/extra_limites_autoexclusao_proposta_rejeitada_flow.png",
        caption: "Proposta descartada, registrada no Figma como 'Autoexclusão - Proposta rejeitada', contendo tela de efeitos prévios e questionamento sobre o motivo do encerramento."
      },
      {
        url: "/images/01_limites_autoexclusao/extra_limites_conta_encerrada_logout.png",
        caption: "Tela de conta encerrada: o saldo vai para a chave Pix cadastrada e o chat de suporte está disponível 24 horas."
      }
    ]
  }
];
