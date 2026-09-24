# Sinal — site da agência de IA

Site institucional da agência (estúdio de engenharia de IA), construído a partir da especificação
“Estrutura Completa do Site — Agência de IA”. Next.js com geração estática: todas as páginas saem
em HTML completo no servidor, prontas para Google e para os crawlers de IA.

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção (gera todas as páginas estáticas)
npm start          # serve o build
npm run typecheck
```

Variáveis de ambiente (veja `.env.example`):

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Domínio público. Usado em canonicals, sitemap, Schema.org, robots.txt e llms.txt. |
| `LEAD_WEBHOOK_URL` | Opcional. Recebe os leads dos formulários (n8n, Make, CRM). Sem ele, os leads vão para o log do servidor. |
| `NEXT_PUBLIC_GA_ID` | Opcional. GA4 com banner de consentimento (Consent Mode). Sem ele, nada é carregado. |
| `INDEXNOW_KEY` | Opcional. Publica `/indexnow-key.txt`; depois do deploy, rode `npm run indexnow` para enviar o sitemap ao IndexNow. |
| `ANTHROPIC_API_KEY` | Opcional. Liga o chat "Pergunte à IA" (Claude). Sem ela, o chat não aparece. |
| `CHAT_MODEL` / `CHAT_DAILY_LIMIT` | Opcionais. Modelo do chat (padrão `claude-opus-5`) e limite de mensagens por dia (padrão 500). |

## Stack

- **Next.js 16** (App Router, SSG) + **React 19** + **TypeScript**
- **Tailwind CSS 4** com o design system da Sinal em `src/app/globals.css`, extraído do Claude Design (`Home.dc.html`): índigo/violeta (`#251b60 → #181240`), botões em degradê `#7c4dff → #4d7cff`, fundo claro `#f4f3fa`, texto `#14122b`, acento menta para métricas
- **Sora** (títulos) e **Inter** (texto), auto-hospedadas via `@fontsource-variable`; ícones em linha (`lucide-react`)
- Orbes decorativos (`src/components/Orb.tsx`) e interfaces ilustrativas em HTML/CSS (`src/components/visuals.tsx`), sem imagens de banco

## Estrutura

```
src/
  app/(site)/             páginas com cabeçalho e rodapé completos (uma pasta por URL, com barra final)
  app/(focus)/            páginas de conversão com cabeçalho enxuto: /diagnostico/ e /obrigado/
    solucoes/[solucao]/[servico]/   hubs e páginas-filhas do núcleo (molde padrão)
    servicos/ setores/ cases/ conteudo/ ferramentas/ …
    api/lead/             recebe formulários → LEAD_WEBHOOK_URL
    api/visibilidade/     Teste de Visibilidade em IA (checagem técnica de um site)
    robots.ts sitemap.ts llms.txt/ opengraph-image.tsx
  content/                TODO o conteúdo editável (copy, preços, FAQs, cases, guias)
  components/             componentes reutilizáveis (hero, resposta direta, passos, FAQ, CTA…)
  lib/site.ts             nome, domínio, contato, fundador — placeholders centralizados
  lib/seo.ts              metadata e Schema.org (Organization, Service+Offer, FAQPage, Article…)
  lib/routes.ts           registro único de rotas (alimenta sitemap e llms.txt)
```

### Editando conteúdo

- **Soluções e serviços do núcleo:** `src/content/solutions.ts` — cada página-filha segue o molde da
  especificação (H1, resposta direta, para quem é, como funciona, incluso, integrações, prazo e
  investimento, segurança, prova, FAQ, CTA, assinatura). Adicionar um item ao array cria a página,
  a entrada no sitemap e no llms.txt.
- **Setores:** `src/content/sectors.ts` — cada setor gera a página, o card na home, o item do menu,
  o link no rodapé e as entradas no sitemap e no llms.txt. O guia do setor fica em `articles.ts`.
- **Cases:** `src/content/cases.ts` (ver regra ética abaixo)
- **Guias e comparativos:** `src/content/articles.ts` · **Glossário:** `src/content/glossary.ts`

## Mapa de páginas

Home · Soluções (hub + 4 hubs + 14 páginas-filhas) · Serviços (Sites, SEO/GEO + Auditoria, Sistemas,
Aplicativos) · Setores (Advocacia, Saúde, Imobiliárias, Contabilidade, E-commerce, Educação) ·
Diagnóstico · Investimento · Cases (índice + 16 páginas demonstrativas) · Método · Sobre · Segurança
e LGPD · Conteúdo (11 guias, 6 comparativos, glossário com 40 termos) · Ferramentas (Calculadora de ROI, Teste de Visibilidade em IA) · Contato ·
Privacidade · Termos · `robots.txt` · `sitemap.xml` · `llms.txt`.

## SEO, GEO e LLM SEO (o que já está implementado)

- Uma intenção por URL, estrutura hub-and-spoke e links internos (hub + 2 relacionados + guia + Diagnóstico).
- Resposta direta de 40–60 palavras logo após o H1 (marcada com `data-answer`).
- Schema.org: Organization + WebSite em todas as páginas; BreadcrumbList; Service + Offer + FAQPage
  nas páginas de serviço; Article + author nos guias e cases; DefinedTerm no glossário; WebApplication
  nas ferramentas; Person (fundador) no Sobre.
- `robots.txt` separando robôs de busca (liberados) e de treinamento (liberados por decisão; trocar em `src/app/robots.ts`).
- `llms.txt` gerado a partir do conteúdo; `sitemap.xml` com todas as rotas; canonicals e breadcrumbs visíveis.
- Imagem Open Graph gerada automaticamente.
- GA4 com eventos de conversão: `whatsapp_click`, `generate_lead` (formulários, com a origem) e `tool_use` (calculadora e teste de visibilidade), respeitando o consentimento de cookies.
- IndexNow (`npm run indexnow`), já que o índice do Bing alimenta o Copilot e outros assistentes.

## Antes de publicar (placeholders)

A especificação pede para decidir **nome e domínio antes do lançamento**. Tudo está centralizado:

- [ ] `src/lib/site.ts`: nome **Sinal** e fundador **Jefferson Thales** vêm do design; confirmar domínio (`sinal.com.br` é suposição), razão social, CNPJ, WhatsApp, e-mail e redes sociais
- [ ] LinkedIn do fundador, texto da trajetória e foto em `src/app/(site)/sobre/page.tsx`
- [ ] Logotipo definitivo, se houver além do ícone de pulso do design (`src/components/layout/Logo.tsx` e `src/app/icon.svg`)
- [ ] Cases reais: completar AcertoCLT e Prospector CNPJ com números reais e adicionar 6–8 sites e 2–3 apps/SaaS (`src/content/cases.ts`)
- [ ] Depoimentos reais de clientes e demais pessoas do time: o design traz nomes, depoimentos e métricas de exemplo, que **não** foram publicados (regra ética da especificação)
- [ ] Preços dos planos de sustentação: o design mostra R$ 1.200 e R$ 3.400/mês; o site mantém "sob proposta" até a validação
- [ ] Validar preços e prazos com a planilha de margem. Os prazos das páginas-filhas que a especificação
      não detalhava (ex.: Central Multicanal, CRM, Integração) e os dos formatos de site e da Auditoria são **estimativas** a confirmar
- [ ] Revisar Política de Privacidade e Termos com o jurídico/DPO
- [ ] Configurar `LEAD_WEBHOOK_URL` (ex.: fluxo n8n → CRM + aviso no WhatsApp)
- [ ] Números de demonstração no WhatsApp (Clínica Demo, Escritório Demo, Imobiliária Demo) — hoje apontam para o WhatsApp principal com mensagem pré-preenchida
- [ ] Definir `NEXT_PUBLIC_GA_ID` e `INDEXNOW_KEY`; cadastrar o site no Google Search Console e no Bing Webmaster Tools e marcar `generate_lead` e `whatsapp_click` como conversões no GA4

### Regra ética dos cases

O que é real é apresentado como real; o que é demonstração é rotulado como demonstração (empresa
fictícia declarada, sem números apresentados como alcançados e sem depoimentos). Para publicar um
case real, use `status: "real"` e preencha `results` com números de projeto.

## Chat de IA do site

- Balão "Pergunte à IA" em todas as páginas do site (`src/components/ChatWidget.tsx`), exibido só quando `/api/chat/` informa que há chave configurada.
- `src/app/api/chat/route.ts`: resposta em streaming, esforço `low`, fallback de recusa do lado do servidor (`fallbacks: "default"`), cache de prompt na base de conhecimento, até 20 mensagens por visitante a cada 10 minutos e limite diário (`CHAT_DAILY_LIMIT`).
- `src/lib/chat/knowledge.ts`: base de conhecimento gerada do próprio conteúdo (serviços, preços, setores, Diagnóstico, método, guias, glossário) e as regras do assistente (não inventar preços nem clientes, não dar parecer jurídico/médico, encaminhar para o Diagnóstico ou WhatsApp). Muda sozinha quando o conteúdo muda.
- Na resposta, só viram link as páginas do próprio site e o WhatsApp; o conteúdo das conversas não é gravado pelo site.
- Para ligar na VPS: `ANTHROPIC_API_KEY=sk-ant-... bash scripts/deploy-vps.sh` (a chave fica no `.env` da VPS).

## Ferramentas

- **Calculadora de ROI de Atendimento:** cálculo no navegador, premissas visíveis e ajustáveis; resultado sem cadastro, relatório completo mediante contato.
- **Calculadora de Custo do Atendimento:** custo do atendimento repetitivo, equipe equivalente, custo de ampliar o horário com pessoas e o teto mensal em que um agente ainda gera economia.
- **Raio-X do WhatsApp:** 10 perguntas, nota de 0 a 100 e os três pontos que mais valem a pena melhorar.
- **Teste de Visibilidade em IA:** `POST /api/visibilidade` analisa só páginas públicas do domínio informado
  (HTTPS, conteúdo no HTML, robôs de IA no robots.txt, Schema.org, título, description, H1, sitemap, llms.txt,
  canonical, idioma, Open Graph, tempo de resposta). Bloqueia IPs privados/locais e revalida cada redirecionamento.

## Deploy

Produção: **https://agencia.inovalabs.io**, em contêiner Docker na VPS da Hostinger, atrás do Traefik.
Passo a passo em [`DEPLOY.md`](DEPLOY.md).
