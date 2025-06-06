# Lokale Entwicklungsumgebung – Avatar Sophia V1

## Voraussetzungen

| Tool | Version | Download |
|------|---------|----------|
| Blender | 4.0+ | https://www.blender.org/download/ |
| NVIDIA Omniverse Audio2Face | 2024.1+ | https://developer.nvidia.com/omniverse/audio2face |
| Node.js | 20+ | https://nodejs.org/ |
| Python | 3.11+ | https://www.python.org/downloads/ |
| Unity (optional) | 2022 LTS | https://unity.com/ |
| Unreal Engine (optional) | 5.4+ | https://www.unrealengine.com/ |

> **Hinweis:** Für DGX Spark werden die GPU‑Treiber (NVIDIA 550.xx) und CUDA 12 bereits bereitgestellt.

## Einrichtungsschritte

1. **Blender installieren**  
   - Add‑On „Omniverse“ aktivieren (`Edit → Preferences → Add‑ons → Omniverse`).  
   - Pfad zu Omniverse Nucleus (`omniverse://spark-nucleus/`) hinterlegen.

2. **Audio2Face installieren**  
   - Im Launcher „DGX Spark“ als Compute‑Server auswählen.  
   - Sample‑Projekt `audio2face/sophia_base.usd` öffnen und auf korrekte GPU‑Zuweisung prüfen.

3. **Node.js & Python**  
   ```bash
   # Node
   nvm install 20
   nvm use 20

   # Python
   pyenv install 3.11.8
   pyenv local 3.11.8
   ```

4. **Repository klonen**  
   ```bash
   git clone git@github.com:ScriptumAISystems/Spark-sophia-Webapp.git
   cd Spark-sophia-Webapp
   npm install
   ```

5. **Lokalen Entwicklungsserver starten**  
   ```bash
   npm run dev
   ```

6. **Test der Avatar‑Pipeline**  
   - `scripts/run_audio2face_local.sh` ausführen (legt WebSocket auf Port 8022 an).  
   - Im Browser `http://localhost:5173` öffnen → Avatar sollte als Platzhalter erscheinen.

## Troubleshooting

| Symptom | Lösung |
|---------|--------|
| Audio2Face startet nicht | Prüfen, ob DGX Spark als Compute‑Server ausgewählt ist. |
| Keine Lippenbewegung | WebSocket‑Port 8022 in `scripts/config.js` anpassen. |

---

Stand: 06.06.2025
