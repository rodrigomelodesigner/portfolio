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
  /** Limites, hipóteses que falharam ou o que faria diferente — distinto de aprendizados. */
  whatWentWrong?: string[];
  learnings: string[];
  /** Status real das telas (produção, staging, homologação). */
  interfaceNote?: string;
  screenshots?: {
    url: string;
    caption: string;
  }[];
}

export const CASES_DATA: CaseStudy[] = [
  {
    id: "extrato-financeiro",
    slug: "extrato-financeiro",
    title: "Extrato de 36 meses: dinheiro, seriação e autosserviço",
    subtitle:
      "Extrato mobile com depósitos, saques Pix, apostas e resultado líquido por modalidade. Homologado em design; sem métricas de produção ainda.",
    category: "Fintech & Autosserviço",
    tags: ["FINTECH", "EXTRATO", "A11Y"],
    company: "Casa de Apostas",
    role: "Product Designer (UX/UI & Design System)",
    squad:
      "Tamille Rocha (PM), Luedy Costa (supervisão de design), Verônica Lima (produto/operações/QA)",
    timeline: "Setembro a Outubro / 2026",
    highlightMetric: "Homologação de design · meta −40% tickets N1 de extrato",
    constraint:
      "A API limita o histórico a 36 meses. O projeto parou na homologação de design antes das férias coletivas de outubro de 2026.",
    coverImage: "/images/03_transacoes_onboarding/transacoes_dashboard_desktop_1920x1440.png",
    problem: {
      briefing:
        "Em setembro de 2026, a Portaria SPA/MF nº 1.231 (Secretaria de Prêmios e Apostas / Ministério da Fazenda) passou a exigir transparência ativa da conta gráfica. O extrato legado misturava apostas esportivas e giros de cassino num feed contínuo, sem resultado líquido por categoria. O suporte Nível 1 recebia pedidos manuais de extrato e contestação de débitos. A demanda veio da PM Tamille Rocha, com prioridade regulatória sobre iniciativas de crescimento.",
      reframed:
        "O problema não era “mostrar mais linhas”. Era deixar o usuário auditar o próprio saldo — depósito, saque Pix, aposta e resultado líquido — sem pedir PDF ao suporte.",
    },
    hypothesis:
      "A partir de um MVP no Vercel v0 da PM, montei em 24 horas o protótipo de alta fidelidade no Figma com os tokens do design system da casa. Hipótese: um scroll único com filtros de período, visão consolidada e feed cronológico (incluindo saque via Pix) reduz tickets de N1 e atende a exigência de transparência da Portaria.",
    decisions: [
      {
        title: "Esportes e cassino separados, com Apostas / Ganhos / Resultado",
        description:
          "Cada modalidade ganha colunas alinhadas de Apostas, Ganhos e Resultado líquido. O usuário deixa de somar de cabeça o que era esporte e o que era cassino.",
      },
      {
        title: "Datepicker travado em 36 meses",
        description:
          "O seletor de datas não deixa pedir intervalo além do que a API entrega. Evita erro de requisição e timeout — restrição de engenharia resolvida na interface, não no erro de backend.",
      },
      {
        title: "Lucro e prejuízo nunca só por cor",
        description:
          "Valores usam prefixo explícito (+R$ / −R$) e contraste WCAG 2.2 AA. Filtros de período seguem alvo de toque mínimo de 44×44px do design system da casa.",
      },
      {
        title: "Link para limites quando o período fecha negativo",
        description:
          "Abaixo do resultado consolidado negativo, um link textual discreto leva ao hub de Jogo Responsável — sem bloqueio e sem tom punitivo.",
      },
    ],
    whatWentWrong: [
      "Não há dados de produção nem teste de usabilidade em campo: o trabalho parou na homologação de design com Produto.",
      "A meta de −40% em tickets N1 sobre extrato veio do briefing; ainda não há medição pós-lançamento.",
    ],
    learnings: [
      "Revisão heurística interna (heurísticas de Nielsen) apontou e corrigiu, ainda no Figma, a trava de 36 meses no calendário e o link contextual de limites.",
      "Métricas a acompanhar em produção: volume de tickets no SAC sobre extrato, taxa de download do PDF/CSV e tempo até a primeira interação com o detalhamento por categoria.",
    ],
    interfaceNote:
      "Telas de alta fidelidade homologadas em design. Ainda sem release em produção no momento deste estudo.",
    screenshots: [
      {
        url: "/images/03_transacoes_onboarding/transacoes_component.png",
        caption:
          "Lista de movimentações: depósito via Pix, aposta esportiva e saque via Pix, com sinal matemático explícito (+/−) e download do extrato dos últimos 36 meses.",
      },
      {
        url: "/images/03_transacoes_onboarding/transacoes_dashboard_desktop_1920x1440.png",
        caption:
          "Visão desktop: histórico com resultado líquido, status de liquidação e filtros rápidos de período.",
      },
      {
        url: "/images/03_transacoes_onboarding/transacoes_mobile_esportes_aba.png",
        caption:
          "Mobile — aba de apostas esportivas com Apostas, Ganhos e Resultado líquido em colunas.",
      },
      {
        url: "/images/03_transacoes_onboarding/transacoes_mobile_cassino_aba.png",
        caption:
          "Mobile — aba de cassino segregada do sportsbook, mesma matriz de leitura.",
      },
      {
        url: "/images/03_transacoes_onboarding/transacoes_mobile_seletor_periodo.png",
        caption:
          "Filtros temporais (7 dias, 30 dias, 12 meses e personalizado) com limite de 36 meses no datepicker.",
      },
      {
        url: "/images/03_transacoes_onboarding/extra_transacoes_estado_negativo.png",
        caption:
          "Estado de período com resultado negativo e link textual para o hub de limites / jogo responsável.",
      },
    ],
  },
  {
    id: "artilheiro-da-casa",
    slug: "artilheiro-da-casa",
    title: "Artilheiro da Casa: cards de atleta no lugar do regulamento",
    subtitle:
      "De 72 apostas na rodada com texto para pico de 827 com cards. Média de 470/rodada — com queda para 221 na R7 e sem teste A/B.",
    category: "Sportsbook UX",
    tags: ["SPORTSBOOK", "CONVERSÃO", "PRODUTO"],
    company: "Casa de Apostas",
    role: "Product Designer (UX/UI & Mecânica)",
    squad: "Gabriel Nascimento (Produto), Lucca Schramm (Engenharia)",
    timeline: "Março a Maio / 2025 (7 Rodadas)",
    highlightMetric: "Pico 827 apostas (R3) · média 470/rodada · R7 em 221",
    constraint:
      "Validação rodada a rodada, sem grupo controle e sem mídia adicional. A odd turbinada e o card entraram juntos — o desenho não isola o efeito de cada variável.",
    coverImage: "/images/02_artilheiros_casa/extra_artilheiro_cards_rodada.png",
    problem: {
      briefing:
        "Na estreia do Brasileirão 2025 (R1, 30/03), a promoção Artilheiro da Casa saiu na Home como regulamento de cerca de 15 linhas em texto. Resultado: 72 apostas e R$ 821,07 de stake nos cinco mercados de artilheiro.",
      reframed:
        "A oferta aparecia, mas o caminho até o mercado era longo: ler a regra e depois achar a aposta no sportsbook. A hipótese de produto foi encurtar essa distância com um card por atleta — foto, confronto e odd turbinada no mesmo bloco.",
    },
    hypothesis:
      "A partir da R2, no mesmo espaço da Home, troquei o texto por um card por atleta, com partida e odd turbinada visíveis. Projeto com Gabriel Nascimento (Produto) e Lucca Schramm (Engenharia). Comparação sequencial entre rodadas, sem teste A/B.",
    decisions: [
      {
        title: "Card por atleta no lugar do regulamento",
        description:
          "Os cinco mercados de artilheiro da rodada viraram cards com foto, confronto e odd turbinada. Na validação de 2025 (R1–R7), a oferta dava R$ 10 em aposta grátis por gol (aposta mínima R$ 10). Em 2026 a mecânica ganhou chips de chutes a gol e multiplicadores, mantendo a mesma anatomia do card.",
      },
      {
        title: "Odd de mercado e odd turbinada lado a lado",
        description:
          "O card mostra a odd regular e a turbinada no mesmo bloco. Isso vende a vantagem da promoção — e também é uma variável confundidora: o salto de volume pode vir do card, da odd, ou dos dois.",
      },
    ],
    metricsTable: {
      headers: ["Rodada", "Data", "Formato / Contexto", "Apostas", "Stake (R$)", "Ticket Médio"],
      rows: [
        ["R1", "30/03/2025", "MVP textual (baseline)", 72, "R$ 821,07", "R$ 11,40"],
        ["R2", "06/04/2025", "Lançamento dos cards", 590, "R$ 6.128,37", "R$ 10,38"],
        ["R3", "13/04/2025", "Pico", 827, "R$ 6.790,55", "R$ 8,21"],
        ["R4", "16/04/2025", "Quarta-feira + instabilidade de provedor", 345, "R$ 2.521,71", "R$ 7,30"],
        ["R5", "20/04/2025", "Atletas com menor apelo", 212, "R$ 2.270,83", "R$ 10,71"],
        ["R6", "27/04/2025", "Recuperação com craques", 628, "R$ 4.383,39", "R$ 6,98"],
        ["R7", "04/05/2025", "Normalização da novidade", 221, "R$ 2.139,81", "R$ 9,68"],
      ],
    },
    whatWentWrong: [
      "Sem grupo controle: card e odd turbinada mudaram juntos; o relatório do provedor não separa usuários únicos.",
      "O ticket médio em várias rodadas com cards ficou abaixo da aposta mínima de R$ 10 da promoção (R$ 6,98–R$ 10,71). O volume reportado inclui apostas que não qualificavam para o bônus — ou a regra de mínimo não se aplicava a todo o volume contabilizado. Isso precisa ficar explícito na leitura da métrica.",
      "Efeito novidade: o pico foi 827 (R3); na R7 o volume caiu para 221 (~3× a baseline, não 6,5×).",
    ],
    learnings: [
      "Média de 470 apostas e R$ 4.039 de stake por rodada com cards (R2–R7), contra 72 e R$ 821 na R1.",
      "Volume também reagiu a dia da semana, estabilidade do provedor e apelo do atleta (R4 e R5).",
      "Na próxima iteração, eu pediria funil (impressão → clique → boletim → aposta) e um teste que isolasse layout da odd.",
    ],
    interfaceNote: "Cards e página da promoção em produção nas rodadas auditadas de 2025; craft iterado em 2026.",
    screenshots: [
      {
        url: "/images/02_artilheiros_casa/extra_artilheiro_cards_rodada.png",
        caption:
          "Vitrine dos cards da rodada na Home: foto do atleta, confronto e odd turbinada no lugar do regulamento em texto.",
      },
      {
        url: "/images/02_artilheiros_casa/extra_artilheiro_desktop_screen_full.png",
        caption:
          "Página da promoção no desktop, com os cards em carrossel no espaço antes ocupado pelo texto de regras.",
      },
      {
        url: "/images/02_artilheiros_casa/artilheiro_board_composition_ui.png",
        caption:
          "Composição de UI no Figma: variantes do card de atleta alinhadas ao design system da casa (espaçamento, tipografia e estados).",
      },
    ],
  },
  {
    id: "bolao-da-copa",
    slug: "bolao-da-copa",
    title: "Bolão da Copa: predição social e o motor viral que não engatou",
    subtitle:
      "9.035 participantes em 25 dias sem mídia paga de aquisição — com R$ 400 mil em prêmios no ranking geral e só 81 grupos privados.",
    category: "Social Gaming & Aquisição",
    tags: ["SOCIAL GAMING", "AQUISIÇÃO", "PRODUTO"],
    company: "Casa de Apostas",
    role: "Product Designer (UX/UI & Descoberta)",
    squad:
      "Tamille Rocha (PM), Gabriel Nascimento (Marketing), Wesley Dias (Engenharia/Zizy)",
    timeline: "Maio a Julho / 2026",
    highlightMetric: "9.035 participantes · 81 grupos · R$ 400 mil em prêmios",
    constraint:
      "Sem verba de mídia paga de aquisição. Havia R$ 400 mil em prêmios do ranking geral (parte de R$ 500 mil aprovados pela diretoria). Convite para grupo privado exige conta na plataforma. Interface sobre o fornecedor Zizy.",
    coverImage: "/images/covers/bolao_showcase_cover.png",
    problem: {
      briefing:
        "Na Copa do Mundo de 2026, a operação precisava atrair e reativar usuários sem campanhas pagas de aquisição, cujo custo sobe no torneio. A proposta foi um bolão gratuito de palpites, com ranking geral e grupos privados de amigos. Prazo: quatro semanas entre o briefing e o pontapé da Copa.",
      reframed:
        "O desafio era uma mecânica diária sem dinheiro real que puxasse participação orgânica — e testar se grupos fechados funcionariam como motor viral.",
    },
    hypothesis:
      "Com a PM Tamille Rocha e o marketing, desenhei o fluxo mobile de navegação e palpite. Em 11/06/2026, Adir Filho (Supervisor de Live Marketing) usou o bolão e apontou: a estrela de “Palpite Dobrado” parecia “favoritar”; os placares podiam nascer em 0×0; faltava deixar claro se um palpite valia para todos os grupos. As sugestões entraram na especificação. O fluxo bifurcou: entrada orgânica pela plataforma ou convite por link para grupo fechado.",
    decisions: [
      {
        title: "Partidas encerradas em modo leitura",
        description:
          "Em jogos já passados, o campo de palpite some, o resultado real ganha destaque e o palpite da pessoa fica menor, com o card opaco (decisão de 19/05/2026).",
      },
      {
        title: "Entrada bifurcada: convite vs. orgânico",
        description:
          "Quem abria o link via tela intermediária do grupo (“Criar conta e entrar” / “Já tenho conta”). Quem entrava pela plataforma fazia onboarding de 4 passos e chegava aos grupos pelo estado vazio da aba.",
      },
      {
        title: "Palpites em scroll com bloqueio automático",
        description:
          "Cards por jogo com confronto, data e placar; jogos já iniciados bloqueados; horário do salvamento como critério de desempate.",
      },
    ],
    whatWentWrong: [
      "A hipótese de crescimento pelos grupos não se confirmou: 81 grupos para 9.035 participantes.",
      "“Sem mídia paga” não significa custo zero: R$ 400 mil em prêmios equivalem a cerca de R$ 44 por inscrito. É aquisição por premiação, não por anúncio.",
      "O feedback de usabilidade registrado é de uma pessoa (Adir Filho), não de um round de testes com vários colaboradores.",
      "A estrela de “Dobrar palpite” ainda aparece no mockup de produção. A marcação “2x” existe no simulador deste portfólio como proposta a partir do feedback — não como tela já shipada.",
      "Não publiquei taxa de depósito ou reativação entre os 9.035 inscritos; sem isso a métrica de adesão fica incompleta para o negócio.",
    ],
    learnings: [
      "Do lançamento (11/06) a 06/07/2026, 9.035 inscritos no Zizy, sem mídia paga de aquisição.",
      "O prêmio do ranking geral puxou mais do que a disputa entre amigos; convidar alguém ainda exige conta na plataforma.",
      "Um mecanismo de convite precisa de incentivo próprio, forte o bastante para compensar o trabalho de trazer outra pessoa.",
    ],
    interfaceNote:
      "Fluxos e telas da operação do bolão. O simulador “2x” abaixo é proposta de UI a partir do feedback de 11/06 — a produção ainda usa a estrela.",
    screenshots: [
      {
        url: "/images/04_bolao_copa/bolao_fluxo_mapeamento.png",
        caption:
          "Mapa do fluxo de entrada: convite com deep link para grupo fechado versus entrada orgânica pela plataforma.",
      },
      {
        url: "/images/04_bolao_copa/bolao_palpites_flow.png",
        caption:
          "Fluxo de palpites no mobile: lista de jogos, campos de placar, botão “Salvar palpites” e controle “☆ Dobrar palpite” ainda com estrela na versão de produção.",
      },
      {
        url: "/images/04_bolao_copa/extra_bolao_palpite_card_variants.png",
        caption:
          "Card de palpite em dois estados: normal e com “Palpite dobrado” ativo (1 por rodada).",
      },
      {
        url: "/images/04_bolao_copa/bolao_ranking_screen.png",
        caption:
          "Ranking geral com Top 10 e posição fixada. Premiação exibida de R$ 400 mil (parte dos R$ 500 mil aprovados em 19/05/2026; R$ 100 mil no Indique e Ganhe).",
      },
    ],
  },
  {
    id: "limites-prudenciais",
    slug: "limites-prudenciais",
    title: "Saída responsável: pausa e encerramento sob a SPA/MF",
    subtitle:
      "Pausa temporária, autoavaliação opcional e encerramento em 3 etapas na mesma página de Jogo Responsável. Enviado para staging em 28/07/2025.",
    category: "Compliance & Jogo Responsável",
    tags: ["JOGO RESPONSÁVEL", "COMPLIANCE", "UX WRITING"],
    company: "Casa de Apostas",
    role: "Product Designer (UX, Benchmark & UX Writing)",
    squad: "Tamille Rocha (PM), Diego Batista (Produto), Hans Schleier (Compliance)",
    timeline: "Abril a Julho / 2025",
    highlightMetric: "Staging em 28/07/2025 · encerramento em 3 etapas",
    constraint:
      "Portaria SPA/MF nº 1.231 exige caminho de afastamento. Produto pediu conter encerramentos impulsivos; Compliance pediu jornada em etapas. A saída definitiva precisa permanecer visível — sem submenu escondido.",
    coverImage: "/images/01_limites_autoexclusao/limites_autoexclusao_flow.png",
    problem: {
      briefing:
        "Em abril de 2025, a única saída era um botão que encerrava a conta na hora, de forma irreversível — sem pausa temporária nem encaminhamento para apoio. O ticket #1992 (PM Tamille Rocha, 29/04/2025) pediu novo layout e copy para web e mobile, com benchmark de Superbet, Betano e Estrelabet.",
      reframed:
        "Entre abril e julho desenhei o painel, o benchmark e as primeiras propostas (incluindo uma versão rejeitada com tela de efeitos e pergunta de motivo). Em 10/07/2025, Compliance (Hans Schleier) pediu jornada em etapas com autoavaliação, apoio e pausa antes do encerramento definitivo. O problema de design ficou: montar essa jornada sem esconder a saída e sem linguagem de retenção.",
    },
    hypothesis:
      "No painel de Jogo Responsável, “Limites pessoais”, “Precisa de ajuda?”, “Período de pausa” e “Encerrar minha conta” ficam na mesma página. A pausa pode ser 1 dia, 1 semana, 1 mês ou 3 meses. O encerramento aprovado (v2) tem três etapas: modal “Precisa de ajuda?” (autoavaliação opcional), tela “Encerrar minha conta” (sacar saldo + opção de pausar) e confirmação “Tem certeza?” com “Esta ação é irreversível.” A autoavaliação usa o formulário EBAC (CPGI) e pode ser pulada. Nota de vocabulário: o fluxo de produto chama o fim da conta de “encerrar”; no jargão regulatório isso se aproxima de autoexclusão permanente — aqui documento o que a interface mostra.",
    benchmark: {
      title: "Benchmark de copy e fluxo (FigJam)",
      description:
        "Antes dos wireframes, mapeei padrões de UX e copy em operadores do mercado.",
      competitors: ["Betano", "Superbet", "Estrelabet"],
      findings: [
        "No fluxo da própria casa, o mapeamento apontou linguagem brusca, poucas etapas claras e risco de clique acidental no encerramento.",
      ],
    },
    decisions: [
      {
        title: "Pausa e encerramento na mesma página",
        description:
          "“Período de pausa” fica logo acima de “Encerrar minha conta”. Em 28/07/2025, Produto reuniu as ferramentas de Jogo Responsável num menu único para essa página.",
      },
      {
        title: "Encerramento em 3 etapas",
        description:
          "1) Modal “Precisa de ajuda?” com autoavaliação opcional; 2) tela para sacar o saldo e opção de pausar; 3) confirmação com aviso de irreversibilidade.",
      },
      {
        title: "v1 emocional descartada; v2 factual com pausa em destaque",
        description:
          "A v1 dizia “Vamos sentir sua falta” e “Esperamos te ver de novo”. A v2 usa “Esta ação é irreversível.” Trade-off explícito: o botão primário do modal final prioriza a pausa (menor dano) e o encerramento fica como ação secundária, ainda na mesma tela. Isso é atrito positivo pedido por Compliance/Produto — não um labirinto. Se o regulador ou o usuário ler como interferência, o desenho precisa ser defendido com essa intenção, não como “zero fricção”.",
      },
    ],
    whatWentWrong: [
      "A proposta com tela de efeitos prévios e pergunta sobre o motivo do encerramento foi rejeitada e registrada no Figma como “Autoexclusão - Proposta rejeitada”.",
      "Em 28/07/2025 o envio para staging foi aprovado por Produto; a aprovação final de copy e CTAs ainda dependia de Compliance (Hans Schleier).",
      "Não houve teste A/B: otimizar a interface para “fazer menos gente sair” manipularia usuários em momento de vulnerabilidade.",
    ],
    learnings: [
      "Métricas a acompanhar em produção: proporção pausa vs. encerramento, retorno pós-pausa, tempo até concluir o encerramento e pedidos manuais via chat.",
      "Copy factual + pausa graduada na mesma página atende a diretriz de conter fechamento impulsivo sem esconder a saída.",
    ],
    interfaceNote:
      "Fluxos aprovados para staging em 28/07/2025. Não tratar estas telas como métricas de produção.",
    screenshots: [
      {
        url: "/images/01_limites_autoexclusao/extra_limites_painel_jogo_responsavel_topo.png",
        caption:
          "Painel de Jogo Responsável: limites pessoais, pedido de ajuda, período de pausa e encerramento na mesma página.",
      },
      {
        url: "/images/01_limites_autoexclusao/extra_limites_pausa_temporaria_estados.png",
        caption:
          "Período de pausa em três estados: vazio, lista aberta (1 dia a 3 meses) e opção escolhida.",
      },
      {
        url: "/images/01_limites_autoexclusao/limites_autoexclusao_flow.png",
        caption:
          "Encerramento (v2) em 3 etapas: “Precisa de ajuda?”, “Encerrar minha conta” e “Tem certeza dessa decisão?”. Nos modais, a ação primária prioriza autoavaliação ou pausa; o encerramento permanece acessível como ação secundária.",
      },
      {
        url: "/images/01_limites_autoexclusao/limites_v1_v2_comparativo.png",
        caption:
          "Modal final na v1 (“Vamos sentir sua falta”) versus v2 (“Esta ação é irreversível”).",
      },
      {
        url: "/images/01_limites_autoexclusao/extra_limites_autoexclusao_proposta_rejeitada_flow.png",
        caption:
          "Proposta descartada no Figma: tela de efeitos prévios e pergunta sobre o motivo do encerramento.",
      },
      {
        url: "/images/01_limites_autoexclusao/extra_limites_conta_encerrada_logout.png",
        caption:
          "Tela de conta encerrada: saldo encaminhado à chave Pix cadastrada; chat de suporte 24h.",
      },
    ],
  },
];
