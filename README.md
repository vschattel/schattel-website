# schattel-website

Astro-Site für schattel.at (Schattel – Unternehmensberatung, Mag. Volker Schattel).
Gebaut und gehostet via Cloudflare Pages.

- Inhalte: `src/pages/`
- Design: `src/layouts/Base.astro` (Dach-Designsystem, Marken-Akzent Bronze `#9A671F`)
- Build: `npm run build` → `dist/`

## Vor Go-Live auf schattel.at entfernen
1. `<meta name="robots" content="noindex" />` in `src/layouts/Base.astro`
2. `public/robots.txt` auf `Allow` + Sitemap-Zeile umstellen
