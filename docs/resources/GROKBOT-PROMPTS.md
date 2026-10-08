# Guia de Prompts Estratégicos para o Grokbot (xAI)

> **Objetivo:** Utilizar o Grokbot como **Diretor de Design Crítico, Head de Produto em Fintechs/iGaming e Estrategista de Copywriting**.
> O Grokbot tem uma capacidade analítica afiada para questionar premissas, eliminar qualquer traço de autoajuda/jargão e simular sabatinas de recrutamento de alto nível sob o **ADR 005 (Prova sobre Promessa)**.

---

## 🧭 Como Usar no Grokbot
1. Abra o app do Grokbot no seu computador ou no navegador.
2. Copie e cole os prompts na ordem abaixo.
3. Use o modo **Fun** ou **Normal** (o modo normal é ideal para rigor analítico estrito).

---

## 🎯 Prompt 1: Calibração de Persona — O Diretor de Design Cético

```markdown
Você é um Diretor Sênior de Design de Produto em uma grande fintech regulada pelo Banco Central e com operação de apostas licenciada pela Secretaria de Prêmios e Apostas (SPA/MF). 

Você é pragmático, orientado a dados empíricos e odeia chavões corporativos como "design centrado no ser humano que transforma vidas", "mindset inovador" ou "apaixonado por interfaces". 

Sua regra número 1 é: "PROVA SOBRE PROMESSA. MÉTODO SOBRE RUÍDO."
Se um designer disser que melhorou uma métrica, você quer ver a tabela de validação longitudinal, as rodadas de teste, os trade-offs regulatórios e por que a decisão foi tomada.

Você vai me ajudar a lapidar o conteúdo do meu portfólio de Product Designer Pleno/Sênior (Rodrigo Melo).
Responda confirmando que você entendeu a persona e a regra "Prova sobre Promessa", e pergunte qual estudo de caso vamos analisar primeiro.
```

---

## ⚽ Prompt 2: Case 1 Fechado — "Artilheiro da Casa" (Cards de atleta no lugar do regulamento)

```markdown
Aqui está o primeiro estudo de caso aprovado do meu portfólio:

- **Título:** Artilheiro da Casa: cards de atleta no lugar do regulamento
- **Subtítulo:** 470 apostas por rodada em média com cards, contra 72 com regulamento em texto, sem verba de mídia adicional.
- **Contexto:** Casa de apostas esportivas durante as primeiras 7 rodadas do Brasileirão 2025.
- **Problema:** Na estreia (R1, 30/03), a promoção foi publicada na Home como regulamento de 15 linhas em texto corrido (72 apostas e R$ 821,07). Marketing pediu mais banners e e-mails. A leitura de UX foi que as pessoas viam a oferta, mas havia atrito entre ler regras e encontrar o mercado no Sportsbook.
- **Intervenção:** A partir da R2, no mesmo espaço da Home, troquei o texto por um card por atleta com odd e multiplicador visíveis e toque direto para o boletim de apostas (betslip), sem passar pela navegação de esportes. Verba e canais idênticos. Squad: Gabriel Nascimento (Produto) e Lucca Schramm (Engenharia).
- **Métrica Principal:** 470 apostas e R$ 4.039 de stake por rodada em média (6,5x as apostas e 4,9x o stake da R1).
- **Apreciação de Risco:** Ticket médio caiu de R$ 11,40 para R$ 8,58 (o card virou atalho para apostar direto no atleta, capturando apostas menores). Variações por calendário (R4 quarta-feira), instabilidade de provedor e apelo de atletas (R5 vs R6).
```

**Sua tarefa como Grokbot:**
1. Aponte se há qualquer fragilidade narrativa que um Hiring Manager sênior questionaria.
2. Formule 3 perguntas difíceis que você me faria em uma entrevista sobre esse projeto.
3. Reescreva o resumo do problema e a proposta de valor em 3 parágrafos contundentes, enxutos e estritamente técnicos para colocar na abertura da página.
```

---

## 🛡️ Prompt 3: Case 2 Fechado — "Saída Responsável" (Pausa e autoexclusão sob a SPA/MF)

> **Status:** FECHADO E HOMOLOGADO PELO GROKBOT.

```markdown
Aqui está o segundo estudo de caso aprovado do meu portfólio:

- **Título:** Saída responsável: pausa e autoexclusão sob as regras da SPA/MF
- **Subtítulo:** Reconstrução da jornada de afastamento com pausa temporária, autoavaliação voluntária e autoexclusão definitiva em 3 etapas sem labirinto de menus.
- **Contexto:** Casa de apostas sob as regras de jogo responsável da SPA/MF (abril a julho de 2025).
- **Problema:** A única saída da plataforma era um botão "Fechar conta" com aviso de irreversibilidade, sem pausa temporária nem encaminhamento de apoio. Quem queria se afastar temporariamente só podia se excluir definitivamente. Ticket #1992 aberto pela PM Tamille Rocha em 29/04/2025.
- **Intervenção:** No painel de Jogo Responsável, pausa temporária (1, 7 ou 30 dias) no topo e autoexclusão definitiva logo abaixo, na mesma tela, sem submenu. A autoexclusão leva 3 etapas: pedido, efeitos legais (bloqueio, saque e canais de apoio) e confirmação por senha. Autoavaliação CPGI como link opcional. A v1 com tom emotivo foi reprovada pela supervisão de design (Luedy Costa) em 07/07/2025 por soar como retenção disfarçada; a v2 aprovada em 10/07 adotou tom factual e cores neutras. No benchmark, concorrentes exigiam de 4 a 5 níveis de menu. Usuários deslogados encontram atalho para chat 24h na tela de login.
- **Resultados e Limites:** Validado por Compliance (Hans Schleier), Produto (Diego Batista) e Conteúdo/Jurídico (Priscila Santiago e Natália Gomes), entregue em staging em 28/07/2025. Sem teste A/B por escolha ética e sem teste de usabilidade. Métricas a acompanhar em produção: proporção pausa vs autoexclusão, retorno pós-pausa e tempo de conclusão, sem meta de conter saídas.
```

---

## 💳 Prompt 4: Case 3 Lapidado — "Painel de Transações" (Extrato Segregado SPA/MF 1.231)

```markdown
Grok, aqui estão as respostas diretas baseadas nas atas e no arquivo do Figma para fechar o Case 3:

1. Sobrenome da PM: É Tamille Rocha (no CRM oficial e organograma da CDA; Tamille Andrade é seu alias profissional). Corrigi para Tamille Rocha em todos os pontos de contato para eliminar inconsistências.
2. Mês/Ano: Setembro de 2026 (a demanda foi aberta em 23/09/2026 e o protótipo no Figma entregue em 24/09/2026, dias antes das férias coletivas de outubro).
3. 92% e -40%:
   - Cortamos os "92% de conformidade com Nielsen". A formulação correta é metodológica: revisão heurística interna baseada nas 10 Heurísticas de Nielsen (Gate 1 de design), que identificou e corrigiu duas fricções de severidade 1 no Figma (trava de 36 meses no datepicker e link contextual para limites).
   - Cortamos a alegação de "-40% no SAC" como resultado medido. Declaramos honestamente como a meta de negócio (Key Result) estipulada pela PM no briefing, sem reivindicar dado de produção, já que o projeto parou no handoff de design.
4. Latência e 44px:
   - Cortamos a latência de 1,5s da narrativa de UX (era requisito não-funcional de backend).
   - 44px é a regra estrita de alvo mínimo de toque do Design System da CDA para chips e botões mobile (WCAG 2.2 AA).
5. P&L e complexidade: O extrato consolidado foca no fluxo da conta gráfica em moeda real (BRL): Apostas debitadas vs. Ganhos creditados. Cashout entra como ganho liquidado; apostas anuladas entram como eventos individuais com ID no feed cronológico; bônus/freebets têm regramento promocional apartado.
6. Atalho para limites no prejuízo: No cenário negativo (resultado consolidado em perda), surge um link textual sutil abaixo do card de visão geral: "Deseja definir um limite para suas perdas? [Configurar limites]". É voluntário, não interrompe a navegação e não tem tom punitivo.

Aqui está a versão definitiva dos 3 blocos:

**Problema.** Em setembro de 2026, a Portaria SPA/MF nº 1.231 exigia transparência ativa da conta gráfica do apostador. O extrato legado misturava apostas esportivas e giros de cassino num feed contínuo, sem resultado líquido por categoria. O apostador não conseguia auditar o próprio saldo, e o suporte Nível 1 recebia frequentes pedidos manuais de extrato e contestação de débitos. A demanda veio da PM Tamille Rocha, com prioridade regulatória sobre iniciativas de crescimento.

**Intervenção.** Redesenhei o extrato mobile em um scroll único: filtros de 7 dias, 30 dias, 12 meses e período personalizado, com o datepicker limitado a 36 meses por restrição da API; um card de visão geral com resultado consolidado e tempo de uso, e um link textual discreto para limites quando o resultado consolidado do período é negativo; detalhamento separado de Apostas Esportivas e Cassino, com Apostas, Ganhos e Resultado líquido em colunas; e um feed cronológico de depósitos, saques e apostas, com download do extrato oficial em PDF/CSV. Lucro e prejuízo nunca dependem só de cor (usam sinal matemático +/- e cor). As pills de filtro seguem o alvo de toque mínimo de 44px do design system da CDA. Protótipo de alta fidelidade no Figma a partir de um MVP de referência da PM, com tokens do design system da CDA. Squad: Tamille Rocha (PM), Luedy Costa (supervisão de design), Verônica Lima (produto/operações/QA) e Rodrigo Melo (Product Designer).

**Resultado e limites.** O trabalho passou por revisão heurística interna baseada nas 10 Heurísticas de Nielsen (corrigindo a trava de 36 meses no calendário e o link contextual de limites) e parou na homologação de design com Produto, antes das férias coletivas de outubro de 2026. Não há dado de produção nem teste de usabilidade com usuários. A meta de negócio estipulada no briefing era reduzir em 40% os chamados de N1 sobre extrato, mas o número não foi medido em campo. Em produção, eu acompanharia volume de chamados de extrato no SAC, taxa de download do PDF/CSV e tempo até a primeira interação com o detalhamento por categoria.
```

---

## 🎤 Prompt 5: Simulação Final de Sabatina (Mock Interview)

```markdown
Simule uma entrevista comigo agora. Faça UMA pergunta de cada vez sobre as minhas decisões técnicas nos projetos de compliance e gamificação. 
Espere minha resposta, critique com base na regra "Prova sobre Promessa", e me dê nota de 1 a 10 com o feedback do que melhorar na argumentação.
```
