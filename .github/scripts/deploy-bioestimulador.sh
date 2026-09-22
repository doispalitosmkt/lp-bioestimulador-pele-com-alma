#!/usr/bin/env bash
set -euo pipefail

: "${HOSTINGER_HOST:?HOSTINGER_HOST is required}"
: "${HOSTINGER_PORT:?HOSTINGER_PORT is required}"
: "${HOSTINGER_USER:?HOSTINGER_USER is required}"
: "${HOSTINGER_SSH_KEY_PATH:?HOSTINGER_SSH_KEY_PATH is required}"
: "${HOSTINGER_KNOWN_HOSTS_PATH:?HOSTINGER_KNOWN_HOSTS_PATH is required}"
: "${DEPLOY_SOURCE:?DEPLOY_SOURCE is required}"
: "${DEPLOY_RELEASE:?DEPLOY_RELEASE is required}"

test -d "$DEPLOY_SOURCE"
test -s "$DEPLOY_SOURCE/index.html"
test -s "$DEPLOY_SOURCE/deployment.json"
test -f "$HOSTINGER_SSH_KEY_PATH"
test -f "$HOSTINGER_KNOWN_HOSTS_PATH"

case "$DEPLOY_RELEASE" in
  *[!a-zA-Z0-9._-]*)
    echo "Invalid deployment release identifier" >&2
    exit 1
    ;;
esac

ssh_target="${HOSTINGER_USER}@${HOSTINGER_HOST}"
ssh_options=(
  -p "$HOSTINGER_PORT"
  -i "$HOSTINGER_SSH_KEY_PATH"
  -o BatchMode=yes
  -o IdentitiesOnly=yes
  -o StrictHostKeyChecking=yes
  -o "UserKnownHostsFile=$HOSTINGER_KNOWN_HOSTS_PATH"
)

remote_domain="domains/pelecomalma.com.br"
remote_release="bioestimulador-${DEPLOY_RELEASE}"

ssh "${ssh_options[@]}" "$ssh_target" bash -s -- "$remote_domain" "$remote_release" <<'REMOTE_PREPARE'
set -euo pipefail

domain_input=$1
release_name=$2
account_root=$(readlink -f .)
domain=$(readlink -f "$domain_input")
root="$domain/public_html"
live="$root/bioestimulador"
stage="$domain/deploy-staging/$release_name"
backup="$domain/deploy-backups/$release_name"

case "$domain" in
  "$account_root"/domains/*) ;;
  *) echo "Domain path escaped the hosting account" >&2; exit 1 ;;
esac

test "$root" = "$domain/public_html"
test "$live" = "$root/bioestimulador"
test -f "$root/index.php"
test -f "$root/wp-config.php"
test -d "$root/wp-content"
test ! -e "$stage"
test ! -e "$backup"
command -v rsync > /dev/null

mkdir -p "$domain/deploy-staging" "$domain/deploy-backups"
mkdir "$stage"
REMOTE_PREPARE

rsync_ssh="ssh -p $HOSTINGER_PORT -i $HOSTINGER_SSH_KEY_PATH -o BatchMode=yes -o IdentitiesOnly=yes -o StrictHostKeyChecking=yes -o UserKnownHostsFile=$HOSTINGER_KNOWN_HOSTS_PATH"
rsync --archive --compress --delete --chmod=D755,F644 \
  -e "$rsync_ssh" \
  "$DEPLOY_SOURCE/" \
  "$ssh_target:$remote_domain/deploy-staging/$remote_release/"

ssh "${ssh_options[@]}" "$ssh_target" bash -s -- "$remote_domain" "$remote_release" <<'REMOTE_PUBLISH'
set -euo pipefail

domain_input=$1
release_name=$2
account_root=$(readlink -f .)
domain=$(readlink -f "$domain_input")
root="$domain/public_html"
live="$root/bioestimulador"
stage="$domain/deploy-staging/$release_name"
backup="$domain/deploy-backups/$release_name"

case "$domain" in
  "$account_root"/domains/*) ;;
  *) echo "Domain path escaped the hosting account" >&2; exit 1 ;;
esac

test "$root" = "$domain/public_html"
test "$live" = "$root/bioestimulador"
test "$stage" = "$domain/deploy-staging/$release_name"
test "$backup" = "$domain/deploy-backups/$release_name"
test -f "$root/index.php"
test -f "$root/wp-config.php"
test -d "$root/wp-content"
test -s "$stage/index.html"
test -s "$stage/deployment.json"
test -d "$stage/images"
test -d "$stage/videos"
grep -q 'Bioestimulador de colágeno no rosto' "$stage/index.html"

find "$stage" -type d -exec chmod 755 {} +
find "$stage" -type f -exec chmod 644 {} +

had_live=0
if [ -e "$live" ]; then
  test -d "$live"
  mv "$live" "$backup"
  had_live=1
fi

if ! mv "$stage" "$live"; then
  if [ "$had_live" -eq 1 ]; then
    mv "$backup" "$live"
  fi
  exit 1
fi

test -s "$live/index.html"
test -s "$live/deployment.json"
test -f "$root/index.php"
test -f "$root/wp-config.php"
REMOTE_PUBLISH

