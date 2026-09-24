# Deploy — agencia.inovalabs.io (VPS Hostinger 72.60.247.135)

O DNS de `agencia.inovalabs.io` já aponta para a VPS, e as portas 80/443 são atendidas por um
**Traefik** (há outros sites no servidor). O site roda como um contêiner Docker atrás desse Traefik.

Arquivos: `Dockerfile` (imagem Next.js standalone), `docker-compose.yml` (labels do Traefik) e
`.github/workflows/deploy.yml` (deploy automático a cada merge no `main`).

## Opção A — pelo painel (Coolify, Dokploy ou EasyPanel)

Se a VPS usa um desses painéis (os templates da Hostinger costumam vir com eles):

1. Nova aplicação → origem **GitHub** → repositório `Jeffersonth/Agencia`, branch `main`.
2. Build: **Dockerfile** (na raiz). Porta interna: **3000**.
3. Domínio: `agencia.inovalabs.io` com HTTPS (Let's Encrypt) ativado.
4. Variáveis de ambiente (build e runtime):
   - `NEXT_PUBLIC_SITE_URL=https://agencia.inovalabs.io`
   - `NEXT_PUBLIC_GA_ID=` (opcional)
   - `LEAD_WEBHOOK_URL=` (webhook que recebe os leads, ex.: n8n)
   - `INDEXNOW_KEY=` (opcional)
5. Ative o deploy automático no push. Nesse caso o workflow `deploy.yml` não é necessário.

## Opção rápida — script (Traefik já instalado)

Com o código já no `main`, na VPS (como root):

```bash
curl -fsSL -H "Authorization: token SEU_TOKEN" \
  https://raw.githubusercontent.com/Jeffersonth/Agencia/main/scripts/deploy-vps.sh -o deploy-vps.sh
GITHUB_TOKEN=SEU_TOKEN bash deploy-vps.sh
```

O script instala o Docker se faltar, detecta a rede, o entrypoint HTTPS e o resolvedor de certificado
do Traefik, baixa o código em `/opt/agencia`, grava o `.env`, constrói a imagem e confere se o site responde.
Para atualizar depois, rode `bash deploy-vps.sh` de novo.

## Opção B — Docker Compose direto na VPS

```bash
ssh root@72.60.247.135
docker network ls            # descubra a rede do Traefik (ex.: traefik, coolify, dokploy-network)
docker ps --format '{{.Names}}' | grep -i traefik
docker inspect <traefik> | grep -iE 'certresolver|entrypoints'   # nomes do resolver e do entrypoint HTTPS

mkdir -p /opt/agencia && cd /opt/agencia
git clone https://github.com/Jeffersonth/Agencia.git .   # repo privado: use um deploy key
cat > .env <<'ENV'
TRAEFIK_NETWORK=traefik
TRAEFIK_ENTRYPOINT=websecure
TRAEFIK_CERTRESOLVER=letsencrypt
LEAD_WEBHOOK_URL=
NEXT_PUBLIC_GA_ID=
INDEXNOW_KEY=
ENV
docker compose up -d --build
```

Ajuste as três variáveis `TRAEFIK_*` com o que aparecer no `docker inspect`. Em ~1 minuto o
Traefik emite o certificado e o site responde em https://agencia.inovalabs.io.

### Deploy automático (Opção B)

No GitHub → Settings → Secrets and variables → Actions, crie:

| Secret | Valor |
| --- | --- |
| `VPS_HOST` | `72.60.247.135` |
| `VPS_USER` | usuário SSH com acesso ao Docker (ex.: `root`) |
| `VPS_SSH_KEY` | chave privada SSH cuja pública está em `~/.ssh/authorized_keys` na VPS |
| `VPS_DIR` | opcional, padrão `/opt/agencia` |

A partir daí, cada merge no `main` envia o código e reconstrói o contêiner. O `.env` da VPS é preservado.

## Depois do primeiro deploy

1. Abrir https://agencia.inovalabs.io e testar o formulário do Diagnóstico.
2. Cadastrar o domínio no Google Search Console e no Bing Webmaster Tools; enviar `/sitemap.xml`.
3. Com `INDEXNOW_KEY` definido: `NEXT_PUBLIC_SITE_URL=https://agencia.inovalabs.io INDEXNOW_KEY=... npm run indexnow`.
