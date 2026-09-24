# Site — Agência de IA

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

## Stack

- **Next.js 16** (App Router, SSG) + **React 19** + **TypeScript**
- **Tailwind CSS 4** com os tokens da marca em `src/app/globals.css` (Azul Sinal `#0B5FFF`, Navy `#0A1F44`, `#F7F8FA`, `#1A2233`, `#5B6472`, acento verde só para métricas)
- **Inter** auto-hospedada (`@fontsource-variable/inter`), ícones em linha (`lucide-react`)
- Sem imagens de banco nem clichês de IA: os visuais são interfaces ilustrativas feitas em HTML/CSS (`src/components/visuals.tsx`)

## Estrutura

```
src/
  app/                    rotas (uma pasta por URL, sempre com barra final)
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
- **Setores:** `src/content/sectors.ts`
- **Cases:** `src/content/cases.ts` (ver regra ética abaixo)
- **Guias e comparativos:** `src/content/articles.ts` · **Glossário:** `src/content/glossary.ts`

## Mapa de páginas

Home · Soluções (hub + 4 hubs + 14 páginas-filhas) · Serviços (Sites, SEO/GEO + Auditoria, Sistemas,
Aplicativos) · Setores (Advocacia, Saúde) · Diagnóstico · Investimento · Cases (índice + 15 páginas
demonstrativas) · Método · Sobre · Segurança e LGPD · Conteúdo (4 guias, 4 comparativos, glossário
com 11 termos) · Ferramentas (Calculadora de ROI, Teste de Visibilidade em IA) · Contato ·
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

## Antes de publicar (placeholders)

A especificação pede para decidir **nome e domínio antes do lançamento**. Tudo está centralizado:

- [ ] `src/lib/site.ts`: nome da empresa (`[Nome]`), razão social, CNPJ, domínio, WhatsApp, e-mail, redes sociais
- [ ] `src/lib/site.ts`: nome, cargo e LinkedIn do fundador (`[Fundador]`); texto da trajetória e foto em `src/app/sobre/page.tsx`
- [ ] Logotipo definitivo (`src/components/layout/Logo.tsx` e `src/app/icon.svg`)
- [ ] Cases reais: completar AcertoCLT e Prospector CNPJ com números reais e adicionar 6–8 sites e 2–3 apps/SaaS (`src/content/cases.ts`)
- [ ] Depoimentos reais de clientes (não há nenhum inventado no site)
- [ ] Validar preços e prazos com a planilha de margem. Os prazos das páginas-filhas que a especificação
      não detalhava (ex.: Central Multicanal, CRM, Integração) e os dos formatos de site e da Auditoria são **estimativas** a confirmar
- [ ] Revisar Política de Privacidade e Termos com o jurídico/DPO
- [ ] Configurar `LEAD_WEBHOOK_URL` (ex.: fluxo n8n → CRM + aviso no WhatsApp)
- [ ] Números de demonstração no WhatsApp (Clínica Demo, Escritório Demo, Imobiliária Demo) — hoje apontam para o WhatsApp principal com mensagem pré-preenchida
- [ ] Google Search Console, Bing Webmaster Tools + IndexNow e GA4 (eventos: clique no WhatsApp, envio de formulário, uso das ferramentas)

### Regra ética dos cases

O que é real é apresentado como real; o que é demonstração é rotulado como demonstração (empresa
fictícia declarada, sem números apresentados como alcançados e sem depoimentos). Para publicar um
case real, use `status: "real"` e preencha `results` com números de projeto.

## Ferramentas

- **Calculadora de ROI de Atendimento:** cálculo no navegador, premissas visíveis e ajustáveis; resultado sem cadastro, relatório completo mediante contato.
- **Teste de Visibilidade em IA:** `POST /api/visibilidade` analisa só páginas públicas do domínio informado
  (HTTPS, conteúdo no HTML, robôs de IA no robots.txt, Schema.org, título, description, H1, sitemap, llms.txt,
  canonical, idioma, Open Graph, tempo de resposta). Bloqueia IPs privados/locais e revalida cada redirecionamento.

## Deploy

Qualquer plataforma que rode Next.js (Vercel recomendado). As páginas são estáticas; apenas
`/api/lead` e `/api/visibilidade` executam no servidor.
