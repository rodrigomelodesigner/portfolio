# Rodrigo Melo — Product Design Portfolio

> Sistemas que sustentam decisões e simplificam jornadas de alto risco.

Site pessoal e portfólio profissional de **Rodrigo Melo**, Product Designer focado em operações reguladas (Fintech / iGaming), Design Systems e Inteligência Artificial aplicada a produto.

---

## 🎯 Visão Geral

Este projeto foi projetado sob o princípio **"Prova sobre Promessa"**: uma interface funcional baseada no estilo *Swiss / Modern Flat*, com alto contraste (WCAG 2.2 AA), tipografia neo-grotesca e foco em evidências empíricas e decisões rastreáveis de design.

### Casos de Estudo em Destaque:
1. **Artilheiro da Casa (Gamificação & Retenção):** Transição de mecânica promocional textual para interface de cartas colecionáveis. Salto de 72 para 827 participações (+1.048%) comprovado em 7 rodadas de operação.
2. **Limites Prudenciais & Jogo Responsável (Compliance SPA/MF nº 1.231):** Redesign do fluxo de proteção ao jogador com inversão de hierarquia de CTAs e veto a padrões escuros no onboarding.
3. **Página de Transações (Autosserviço & Transparência):** Arquitetura mobile-first de extrato de 36 meses segregando apostas esportivas de cassino, mitigando sobrecarga crônica do suporte nível 1.

---

## 🛠️ Stack Tecnológica

- **Framework:** React 18 / Vite
- **Estilização & Tokens:** Tailwind CSS (Paleta monocromática Zinc com suporte a Dark/Light mode)
- **Componentes:** shadcn/ui & Lucide React
- **Navegação & Atalhos:** Command Palette (`Cmd+K` / `Ctrl+K`)
- **Acessibilidade:** WCAG 2.2 Nível AA

---

## 🚀 Como Rodar Localmente

```bash
# 1. Clonar o repositório
git clone https://github.com/rodrigomelodesigner/portfolio.git

# 2. Entrar no diretório
cd portfolio

# 3. Instalar dependências
npm install

# 4. Rodar o servidor de desenvolvimento
npm run dev
```

Abra `http://localhost:5173` no navegador para visualizar.

---

## 📚 Documentação, Governança e Skills

Este repositório possui uma arquitetura documentada para colaboração contínua entre humanos e agentes de inteligência artificial (**Lovable.dev, Cursor, Claude Code e Antigravity**):

- **[Manual de Skills de Agentes](docs/MANUAL-SKILLS.md):** Guia detalhado de uso, prompts e combos para as 19 skills instaladas em `.agents/skills/`.
- **[Workflow Operacional Multi-IA](docs/WORKFLOW.md):** Fluxo de trabalho integrado entre Lovable, Cursor, Claude e Antigravity, handoffs e quality gates.
- **[Instruções Globais de IA](AGENTS.md):** Regras de operação, princípios da marca e compatibilidade entre plataformas.
- **[Glossário de Domínio](GLOSSARY.md):** Dicionário semântico unificado para termos de iGaming regulado, compliance e design systems.
- **[Decisões de Arquitetura (ADRs)](docs/adr/):** Registros formais de decisões arquiteturais (ADR 0001 a 0005).
- **[Auditoria de Mídia & Imagens](docs/reports/image-inventory.md):** Diagnóstico contínuo de peso de assets e Core Web Vitals (`npm run optimize-images`).

---

## 📦 Releases & Versionamento

Este repositório adere estritamente ao [Versionamento Semântico](https://semver.org/lang/pt-BR/) (SemVer 2.0.0) e mantém notas estruturadas no padrão *Keep a Changelog*:
- **Histórico Completo:** Consulte o [CHANGELOG.md](CHANGELOG.md).
- **Última Release:** [`v1.1.0`](https://github.com/rodrigomelodesigner/portfolio/releases/tag/v1.1.0) — *Suíte de Skills de Agente, Compatibilidade Multi-IA (Lovable/Cursor) & Governança de ADRs*.

---

## 📄 Licença & Direitos

- O **código-fonte** da aplicação é disponibilizado sob a licença [MIT](LICENSE).
- Os **textos, estudos de caso, marcas, dados de pesquisa e imagens de produto** são propriedade intelectual exclusiva de **Rodrigo Melo** e das respectivas organizações citadas. Todos os direitos reservados. Proibida reprodução ou uso comercial não autorizado.
