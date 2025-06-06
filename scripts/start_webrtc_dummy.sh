#!/usr/bin/env bash
#
# start_webrtc_dummy.sh
# Startet einen einfachen GStreamer‑Loopback‑Stream mit dem Platzhalter‑Avatar.
# Voraussetzung: FFmpeg & GStreamer installiert.

AVATAR_PATH="../avatars/sophia/business/placeholder_sophia.glb"
FPS=30
WIDTH=1280
HEIGHT=720

echo "Starte Dummy‑WebRTC‑Stream mit $AVATAR_PATH ..."

gst-launch-1.0 \
  videotestsrc pattern=ball is-live=true ! \
  video/x-raw,width=$WIDTH,height=$HEIGHT,framerate=$FPS/1 ! \
  queue ! \
  webrtcbin bundle-policy=max-bundle name=sendrecv \
  stunservers=stun://stun.l.google.com:19302
