#!/usr/bin/env bash
set -e

ICON_PATH="$1"

if [ -z "$ICON_PATH" ]; then
  echo "Usage: $0 <icon-path.svg>"
  exit 1
fi

BASENAME=$(basename "$ICON_PATH" .svg)
OUTPUT_DIR="frontend/public/assets/icons"
mkdir -p "$OUTPUT_DIR"

# Export PNG in 1x, 2x, 3x resolutions
for SCALE in 1 2 3; do
  SIZE=$(( 64 * SCALE ))
  rsvg-convert -w $SIZE -h $SIZE "$ICON_PATH" -o "$OUTPUT_DIR/${BASENAME}@${SCALE}x.png"
  # Optimize PNG
  pngquant --force --ext .png 256 "$OUTPUT_DIR/${BASENAME}@${SCALE}x.png"
  echo "Generated ${BASENAME}@${SCALE}x.png (${SIZE}x${SIZE})"
done

# Generate favicon.ico with multiple resolutions
convert "$OUTPUT_DIR/${BASENAME}@1x.png" -define icon:auto-resize=64,48,32,16 "$OUTPUT_DIR/favicon.ico"

echo "Icons exported to $OUTPUT_DIR"
