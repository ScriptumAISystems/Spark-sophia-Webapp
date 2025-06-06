#!/usr/bin/env bash
#
# mvp_smoketest.sh
# Prüft, ob Frontend und Dummy-WebRTC-Stream laufen.

set -e

echo "🔍 Prüfe Frontend (http://localhost:5173)…"
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:5173 | grep -q "200" && echo "✅ Frontend erreichbar"

echo "🔍 Prüfe WebRTC-Port 8022…"
nc -z localhost 8022 && echo "✅ WebRTC-Port offen" || echo "⚠️  Port 8022 nicht erreichbar"

echo "🔍 Prüfe FPS-Output…"
if pgrep -f start_webrtc_dummy.sh >/dev/null; then
  echo "✅ Dummy-Stream läuft"
else
  echo "⚠️  Dummy-Stream nicht gefunden"
fi

echo "Smoke-Test abgeschlossen."
