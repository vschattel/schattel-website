# schattel-website

Astro-Site für schattel.at (Marke „Schattel", Unternehmensberatung – Mag. Volker Schattel).
Cloudflare Pages baut automatisch bei jedem Push auf `main`.
Vorschau: https://schattel-website.pages.dev

Schwestermarke Payroll: `lohnlotsen-website` (lohnlotsen.at) – gleicher technischer Aufbau,
gemeinsames Dach-Designsystem.

## Regeln

### Design
- Design ausschließlich über die bestehenden Tokens/Klassen in `src/layouts/Base.astro`.
- Keine neuen Farben, keine neuen Fonts. Marken-Akzent Bronze `#9A671F`.
- Maximal ein Serif-Kursiv-Akzent (`.em`) pro Sektion; Versalien nur in Kickern/Buttons.
- Karten-Raster nur für vergleichbare Angebote – sonst Haarlinien-Listen (`.liste`).
- Fotos schwarz-weiß über die CSS-Klasse `.sw`; keine Stock-Fotos, keine generischen
  Illustrationen – lieber kein Bild.
- Jede Seite: genau ein primärer CTA (Erstgespräch), beliebig viele sekundäre.

### Marke
- Wortmarken-Regel: „Schattel" nie nackt – immer mit Subline
  „Volker Schattel · Unternehmensberatung" oder Claim.
- Impressum: voller Gewerbewortlaut („Unternehmensberatung einschließlich
  Unternehmensorganisation", § 94 Z 74 GewO, GISA 21742118, WKO Tirol).
- Personalverrechner-/BiBuG-Themen gehören zu LohnLotsen, nicht hierher.

### Inhalte
- Ton: kurz, direkt, Sie-Form; konkrete Zahlen statt Superlative.
- Zielgruppe: Geschäftsführung/Eigentümer von KMU im DACH-Raum.
- Cases folgen dem Case-Schema (Dropbox:
  `beruf/unternehmensberatung/produkte/schattel-web/20260811 Case-Schema und Projektgalerie.md`).
- Bei Rechts-/Gesetzesthemen immer „Stand: Monat Jahr" angeben, Quellen WKO/RIS/BMF.

### Überschriften-Regeln
- H1 genau ein Mal pro Seite.
- UI-Elemente ohne Themenbezug (Link-Karten, Buttons, Badges) NIE als h1–h3 –
  `span`/`strong` verwenden.
- Meta-Description ≤ 155 Zeichen, mit Handlungsaufforderung.
- Jede Seite hat ein canonical (kommt automatisch aus `Base.astro`).

### Abhängigkeiten
- `@astrojs/sitemap` bleibt auf **3.1.6** – 3.2.x ist mit Astro 4.16.x inkompatibel.

### Veröffentlichen
- Vor jedem `git push` die ausdrückliche Freigabe von Volker einholen („publish").
- Die noindex-Zeile in `src/layouts/Base.astro` (`<meta name="robots" content="noindex" />`)
  und `public/robots.txt` (aktuell `Disallow: /`) erst nach expliziter Go-Live-Anweisung
  ändern. Go-Live-Checkliste: Dropbox
  `beruf/_web/schattel-website/20260811 GoLive Checkliste schattel.at.md`.
