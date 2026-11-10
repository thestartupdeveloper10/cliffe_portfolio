#!/usr/bin/env bash
# Renders cv.html to the PDF the portfolio serves. Uses a throwaway Chrome
# profile so it never touches the signed-in browser.
set -euo pipefail
cd "$(dirname "$0")"

OUT="../src/assets/cv/Cliffe_Owino_Ibande_CV.pdf"
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

google-chrome \
  --headless=new \
  --disable-gpu \
  --no-first-run \
  --no-default-browser-check \
  --user-data-dir="$PROFILE" \
  --virtual-time-budget=5000 \
  --run-all-compositor-stages-before-draw \
  --no-pdf-header-footer \
  --print-to-pdf="$OUT" \
  "file://$PWD/cv.html" 2>/dev/null

echo "wrote $(cd "$(dirname "$OUT")" && pwd)/$(basename "$OUT")"
