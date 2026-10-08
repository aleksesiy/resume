#!/usr/bin/env bash
# Сборка портфолио и выкладка на сервер. Использование: npm run deploy
set -euo pipefail
cd "$(dirname "$0")"

HOST="${DEPLOY_HOST:-root@170.168.10.198}"

npm run build
rsync -az --delete dist/ "$HOST:/var/www/portfolio/"
echo "Готово: https://aleksey-dev.ru"
