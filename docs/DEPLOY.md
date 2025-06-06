# Deploy auf Spark (Staging)

## Voraussetzungen
- Zugang zum Spark-Dashboard
- SSH-Zugriff auf DGX Spark
- Node.js 20+ und pnpm 8+

## Schritte

```bash
# 1. Build erzeugen
npm run build

# 2. Dateien hochladen
rsync -avz dist/ spark@dgx-spark:/srv/www/sophia-mvp

# 3. Service neustarten
ssh spark@dgx-spark "sudo systemctl restart sophia-mvp"
```

## Rollback
Falls etwas schiefgeht:

```bash
ssh spark@dgx-spark "sudo systemctl stop sophia-mvp && sudo mv /srv/www/sophia-mvp.bak /srv/www/sophia-mvp && sudo systemctl start sophia-mvp"
```

## Monitoring
- `journalctl -u sophia-mvp -f`
- `nvidia-smi` für GPU‑Load
