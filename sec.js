# HAC Terminal

Hard Assets Club Intelligence Console — alles in één: Briefing, Sprott Watch, Congress Tracker, Portfolio en Watchlist.

## Wat zit erin

- **📡 BRIEFING** — dagelijkse goud/zilver/macro briefing (kost API credits)
- **👁 SPROTT** — Eric Sprott + Sprott Inc + Sprott Asset Management filings via SEC EDGAR (gratis via eigen proxy)
- **🏛 CONGRESS** — US congressional stock trades met signal scoring (kost API credits)
- **📊 PORTFOLIO** — eigen posities + per-positie analyse op aanvraag
- **⭐ WATCH** — watchlist met zelfde analyse-feature

## Deployment op Vercel

### Drag & drop methode (snelst)

1. Maak een ZIP van de hele `hac-terminal-v2` map (inclusief `api/`)
2. Ga naar https://vercel.com/new
3. Sleep de ZIP naar de pagina
4. Klik "Deploy"
5. Klaar — krijgt een URL als `hac-terminal-xxx.vercel.app`

### Belangrijk: API key

De app vraagt zelf om je Anthropic API key bij eerste gebruik. Deze blijft lokaal in de browser opgeslagen.

### Custom domein

Als je later een eigen domein wilt (bv. `terminal.hardassetsclub.com`):
1. Project Settings → Domains
2. Voeg domein toe
3. DNS records aanpassen volgens Vercel instructies

## Hoe het werkt

- `index.html` — de hele app, één bestand, vanilla JS
- `api/sec.js` — Vercel serverless function die als proxy fungeert voor SEC EDGAR (deze stuurt de juiste User-Agent header die browsers niet mogen sturen)
- `vercel.json` — minimale config

## Cache strategie

- **Briefing**: blijft staan tot je 'NIEUWE BRIEFING' drukt
- **Sprott filings**: 6 uur cache
- **Congress trades**: 1 uur cache
- **Posities + analyses**: localStorage, persistent

## Updates uitrollen

Sleep gewoon de nieuwe ZIP opnieuw naar Vercel — wordt automatisch nieuwe versie. Of koppel later aan GitHub voor auto-deploy bij commits.

---

**Geen beleggingsadvies. Alleen informatie.**
