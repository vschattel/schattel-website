# schattel-website

Astro-Site für schattel.at (Marke „Schattel", Unternehmensberatung – Mag. Volker Schattel).
Cloudflare Pages baut automatisch bei jedem Push auf `main`.
Vorschau: https://schattel-website.pages.dev

Schwestermarke Payroll: `lohnlotsen-website` (lohnlotsen.at) – gleicher technischer Aufbau,
gemeinsames Dach-Designsystem.

## Regeln

### Blogartikel
- Blogartikel sind Markdown-Dateien in `src/pages/blog/` (Layout `src/layouts/BlogPost.astro`,
  Übersicht `src/pages/blog/index.astro`).
- Pflicht-Frontmatter: `layout`, `title`, `description`, `date`, `kategorie`, `stand`
  (Stand der Rechtslage, „Monat Jahr"). Optional: `aktualisiert` (Datum) – wird nur
  ausgegeben, wenn gesetzt, und landet als `dateModified` im Article-Schema.
- Autorenzeile immer „Mag. Volker Schattel" mit Foto (Schattel-Regel, keine Hybrid-Autorenzeile).
- Artikel-Quelle ist die Dropbox-Inbox `beruf/_web/artikel-inbox/` („nimm die Inbox"):
  übernehmen, nach Freigabe pushen, danach in der Inbox nach `erledigt/` verschieben.
- **Solange kein Artikel liegt**, setzt die Blog-Übersicht automatisch `noindex` und
  „Blog" steht NICHT in der Navigation. Mit dem ersten Artikel: „Blog" in `Base.astro`
  einbauen (`nav.main` zwischen „Über uns" und „Erstgespräch", ebenso in `.mnav`).

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

### Veröffentlichen (Stand 17.08.2026)
- Eine von Volker eingefügte Anweisung (Copy-paste-Block aus der CMO-Session) IST die
  Freigabe: Aufgaben abarbeiten, dann direkt bauen, pushen und den Abschlussblock der
  Anweisung ausführen – KEINE erneute Publish-Rückfrage.
- Nur ohne solche Anweisung (Zuruf im Chat, eigene Idee, Arbeit über den Auftrag hinaus):
  vor `git push` kurz Freigabe einholen.
- Die noindex-Zeile in `src/layouts/Base.astro` (`<meta name="robots" content="noindex" />`)
  und `public/robots.txt` (aktuell `Disallow: /`) erst nach expliziter Go-Live-Anweisung
  ändern. Go-Live-Checkliste: Dropbox
  `beruf/_web/schattel-website/20260811 GoLive Checkliste schattel.at.md`.
