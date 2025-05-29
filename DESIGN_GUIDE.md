# Spark Sophia Web UI – Design Guide (Apple Ivy Style)

## 1. Designphilosophie

Die Benutzeroberfläche von Spark Sophia basiert auf dem minimalistischen, eleganten Stil von Jony Ive (Apple). Ziel ist eine klare, benutzerfreundliche Ästhetik mit Fokus auf Funktionalität, Lesbarkeit und emotionaler Leichtigkeit. 

> "Perfektion entsteht nicht, wenn man nichts mehr hinzufügen kann, sondern wenn man nichts mehr weglassen kann." – Antoine de Saint-Exupéry

---

## 2. Technisches Setup

### Verwendete Datei:
- `apple-ivy.css`

### Einbindung:
```html
<link rel="stylesheet" href="apple-ivy.css">
```

---

## 3. Farb- und Typografiestandards

### Farbpalette:
| Zweck               | Variable         | Farbwert     |
|--------------------|------------------|--------------|
| Primärfarbe        | `--primary`      | `#007aff`    |
| Hintergrund        | `--bg`           | `#f9f9f9`    |
| Textfarbe          | `--text`         | `#1c1c1e`    |
| Akzentfarbe        | `--accent`       | `#e5e5ea`    |
| Mood: Glücklich    | `.happy`         | `#34c759`    |
| Mood: Nachdenklich | `.thinking`      | `#ffcc00`    |
| Mood: Störung      | `.error`         | `#ff3b30`    |

### Schriftart:
```css
font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
```

---

## 4. Komponentenübersicht

### Eingabefeld / Textarea
- Runde Kanten (12px)
- Sanfter Schatten
- Padding: 1rem

### Button
- Apple-Blau (`#007aff`), weißer Text
- Hover-Zustand mit dunklerem Blau
- `border-radius: 12px`
- Transition: 0.3s für Hovereffekte

### Stimmungslinie (Mood Indicator)
- 4px hoher Balken unterhalb des Ausgabefelds
- Dynamische Farbwechsel basierend auf Button-Events

---

## 5. Responsive Design

- Maximale Breite: 480px bei allen Feldern
- Anpassung für Mobile: `@media (max-width: 600px)`
- Buttons auf Mobilgeräten: 100% Breite

---

## 6. Erweiterbarkeit

- Alle Farben und Schriftarten via CSS-Variablen steuerbar
- Struktur modular auf `.css`-Ebene trennbar (Layout, Komponenten, Utilities)
- Kompatibel mit Tailwind- oder SCSS-Migration bei Bedarf

---

## 7. Branding & CI

- Aktuell: Platzhalter-Design mit generischer Farbwelt
- Geplant: CI-konforme Farbpalette, Logo-Einbindung, evtl. Dark Mode

---

## 8. Kontakt & Dokumentationsstatus

**Maintainer:** Projektleitung Sophia (Scriptum AI Systems)  
**Letzte Aktualisierung:** Mai 2025  
**Stand:** V1.0 / GitHub Markdown – PDF-Export optional für Audits
