#!/usr/bin/env bash
# Instala/atualiza o site em https://agencia.inovalabs.io na VPS, atrás do Traefik existente.
# Uso (na VPS, como root):  bash deploy-vps.sh
# Variáveis opcionais: GITHUB_TOKEN, APP_DIR, BRANCH, SKIP_GIT, LEAD_WEBHOOK_URL, NEXT_PUBLIC_GA_ID, INDEXNOW_KEY
# SKIP_GIT=1: usa o código já presente em APP_DIR (deploy pelo GitHub Actions via rsync).
set -euo pipefail

REPO="Jeffersonth/Agencia"
BRANCH="${BRANCH:-main}"
APP_DIR="${APP_DIR:-/opt/agencia}"
DOMAIN="agencia.inovalabs.io"

log() { printf '\n\033[1;35m▸ %s\033[0m\n' "$*"; }
die() { printf '\n\033[1;31m✗ %s\033[0m\n' "$*" >&2; exit 1; }
trap 'printf "\n\033[1;31m✗ O script parou na linha %s: %s\033[0m\n" "$LINENO" "$BASH_COMMAND" >&2' ERR

# 1. Docker
log "Verificando Docker"
if ! command -v docker >/dev/null 2>&1; then
  log "Docker não encontrado — instalando"
  curl -fsSL https://get.docker.com | sh
fi
docker compose version >/dev/null 2>&1 || die "Docker Compose v2 não encontrado (instale o plugin docker-compose-plugin)."

# 2. Traefik existente
log "Detectando o Traefik"
TRAEFIK=$(docker ps --format '{{.Names}} {{.Image}}' | awk 'tolower($2) ~ /traefik/ {print $1; exit}')
[ -n "$TRAEFIK" ] || die "Nenhum contêiner Traefik em execução. Veja a seção 'Opção A' do DEPLOY.md (painel)."
echo "Contêiner: $TRAEFIK"

networks_of() { docker inspect -f '{{range $k, $v := .NetworkSettings.Networks}}{{println $k}}{{end}}' "$@" 2>/dev/null | grep -vE '^(bridge|host|none)?$' || true; }
NETWORK=${TRAEFIK_NETWORK:-$(networks_of "$TRAEFIK" | head -1)}
if [ -z "$NETWORK" ]; then
  # Traefik só na rede padrão ou em modo host (ex.: Docker Manager da Hostinger):
  # usa a rede mais comum entre os contêineres que o Traefik já publica.
  ROUTED=$(docker ps -q --filter label=traefik.enable=true | grep -v "$(docker inspect -f '{{.Id}}' "$TRAEFIK" | cut -c1-12)" || true)
  [ -n "$ROUTED" ] && NETWORK=$(networks_of $ROUTED | sort | uniq -c | sort -rn | awk 'NR==1 {print $2}')
fi
[ -n "$NETWORK" ] || die "Não foi possível descobrir a rede do Traefik. Rode: docker inspect $TRAEFIK -f '{{json .NetworkSettings.Networks}}' e envie o resultado."

ARGS=$(docker inspect -f '{{join .Config.Cmd " "}} {{join .Args " "}}' "$TRAEFIK" 2>/dev/null || true)
# Configuração em arquivo (Dokploy e similares): lê o traefik.yml montado, se houver.
for f in $(docker inspect -f '{{range .Mounts}}{{println .Source}}{{end}}' "$TRAEFIK"); do
  if [ -f "$f" ] && grep -qiE 'entry_?points|certificatesresolvers' "$f"; then ARGS="$ARGS $(tr '\n' ' ' < "$f")"; fi
  if [ -d "$f" ]; then
    for y in "$f"/traefik.yml "$f"/traefik.yaml "$f"/traefik.toml; do [ -f "$y" ] && ARGS="$ARGS $(tr '\n' ' ' < "$y")"; done
  fi
done

ENTRYPOINT=$(grep -oE 'entrypoints\.[A-Za-z0-9_-]+\.address=:443' <<<"$ARGS" | head -1 | cut -d. -f2 || true)
[ -n "$ENTRYPOINT" ] || ENTRYPOINT=$(grep -oE '(^| )[A-Za-z0-9_-]+: +address: +"?:443' <<<"$ARGS" | head -1 | awk -F: '{print $1}' | tr -d ' ' || true)
[ -n "$ENTRYPOINT" ] || ENTRYPOINT=$(grep -qw https <<<"$ARGS" && echo https || echo websecure)

RESOLVER=$(grep -oE 'certificatesresolvers\.[A-Za-z0-9_-]+\.' <<<"$ARGS" | head -1 | cut -d. -f2 || true)
[ -n "$RESOLVER" ] || RESOLVER=$(grep -oE 'certificatesResolvers: +[A-Za-z0-9_-]+' <<<"$ARGS" | head -1 | awk '{print $2}' || true)
[ -n "$RESOLVER" ] || RESOLVER=letsencrypt

echo "Rede: $NETWORK · entrypoint HTTPS: $ENTRYPOINT · certresolver: $RESOLVER"

# 3. Código
log "Preparando o código em $APP_DIR"
if [ "${SKIP_GIT:-}" = 1 ]; then
  [ -f "$APP_DIR/docker-compose.yml" ] || die "SKIP_GIT=1, mas não há código em $APP_DIR."
  echo "Usando o código já enviado para $APP_DIR"
elif ! command -v git >/dev/null 2>&1 && ! (apt-get update -y && apt-get install -y git); then
  die "Não foi possível instalar o git."
elif [ -d "$APP_DIR/.git" ]; then
  git -C "$APP_DIR" fetch --depth 1 origin "$BRANCH"
  git -C "$APP_DIR" reset --hard "origin/$BRANCH"
else
  if [ -z "${GITHUB_TOKEN:-}" ]; then
    read -rsp "Token do GitHub com leitura do repositório (deixe vazio se for público): " GITHUB_TOKEN; echo
  fi
  AUTH=""; [ -n "${GITHUB_TOKEN:-}" ] && AUTH="x-access-token:${GITHUB_TOKEN}@"
  mkdir -p "$(dirname "$APP_DIR")"
  git clone --depth 1 --branch "$BRANCH" "https://${AUTH}github.com/${REPO}.git" "$APP_DIR"
  # Não deixa o token salvo no remote.
  git -C "$APP_DIR" remote set-url origin "https://github.com/${REPO}.git"
  if [ -n "${GITHUB_TOKEN:-}" ]; then
    git -C "$APP_DIR" config credential.helper store
    printf 'https://x-access-token:%s@github.com\n' "$GITHUB_TOKEN" > "$HOME/.git-credentials"
    chmod 600 "$HOME/.git-credentials"
  fi
fi

# 4. Configuração (preserva valores já existentes)
log "Gravando $APP_DIR/.env"
ENV_FILE="$APP_DIR/.env"
touch "$ENV_FILE"; chmod 600 "$ENV_FILE"
set_env() { local k=$1 v=$2; if grep -q "^$k=" "$ENV_FILE"; then [ -n "$v" ] && sed -i "s|^$k=.*|$k=$v|" "$ENV_FILE"; else echo "$k=$v" >> "$ENV_FILE"; fi; }
set_env TRAEFIK_NETWORK "$NETWORK"
set_env TRAEFIK_ENTRYPOINT "$ENTRYPOINT"
set_env TRAEFIK_CERTRESOLVER "$RESOLVER"
set_env LEAD_WEBHOOK_URL "${LEAD_WEBHOOK_URL:-}"
set_env NEXT_PUBLIC_GA_ID "${NEXT_PUBLIC_GA_ID:-}"
set_env INDEXNOW_KEY "${INDEXNOW_KEY:-}"

# 5. Build e subida
log "Construindo a imagem e subindo o contêiner (leva alguns minutos na primeira vez)"
cd "$APP_DIR"
docker compose up -d --build
docker image prune -f >/dev/null

# 6. Verificação
log "Verificando"
for i in $(seq 1 30); do
  STATUS=$(docker inspect -f '{{.State.Health.Status}}' agencia-site 2>/dev/null || echo starting)
  [ "$STATUS" = healthy ] && break; sleep 3
done
echo "Saúde do contêiner: $STATUS"
CODE=$(curl --noproxy '*' -s -o /dev/null -w '%{http_code}' --resolve "$DOMAIN:443:127.0.0.1" "https://$DOMAIN/" -k || true)
echo "HTTPS via Traefik: $CODE"
if [ "$CODE" = 200 ]; then
  printf '\n\033[1;32m✓ Site no ar: https://%s\033[0m\n' "$DOMAIN"
  echo "  O certificado Let's Encrypt pode levar até 1–2 minutos na primeira vez."
else
  echo "Algo não respondeu como esperado. Diagnóstico:"
  echo "  docker logs agencia-site --tail 50"
  echo "  docker logs $TRAEFIK --tail 50 | grep -i agencia"
fi
