# Site Briefing — Luas Creative Solutions
> Geef dit document aan Claude Code bij het starten van het project.

---

## Opdracht

Bouw een volledige, statische website voor **Luas Creative Solutions** — een freelance videograaf gespecialiseerd in sportevenementen en aftermovies. De site vervangt een bestaande Wix-site (csluas.com) en moet direct deploybaar zijn via **Vercel** of **Netlify**.

---

## Tech stack

- **Puur HTML + CSS + minimaal vanilla JS** (geen frameworks, geen build tools)
- Één gedeeld CSS-bestand: `style.css`
- Gedeelde navigatie en footer via een klein JS-snippet (of simpele includes)
- Responsive: mobile-first
- Deployment: statische bestanden, klaar voor Vercel/Netlify

### Bestandsstructuur
```
/
├── index.html         (Home)
├── portfolio.html
├── diensten.html
├── over-saul.html
├── contact.html
├── style.css
├── script.js
└── assets/
    └── logo.png       (oranje LUAS-icoon, aangeleverd door gebruiker)
```

---

## Design & Huisstijl

### Kleuren
```css
--orange:      #E06820;   /* primaire accent, logo-kleur */
--orange-dim:  #B85218;   /* hover states */
--black:       #0E0E0E;   /* achtergrond */
--card:        #161616;   /* kaarten / secties */
--card-warm:   #1C1408;   /* featured kaarten */
--border:      #272727;
--text:        #F0ECE4;   /* hoofdtekst */
--muted:       #888888;   /* subtekst */
```

### Typografie (Google Fonts)
- **Display / koppen:** `Barlow Condensed` (800, 700) — groot, vet, uppercase
- **Body:** `DM Sans` (300, 400, 500) — licht en leesbaar

### Stijl
- Dark theme door de hele site
- Oranje accenten (borders, highlights, prijzen, labels)
- Strakke kaarten met subtiele borders
- Minimale animaties: `fadeUp` bij laden, `translateY(-3px)` bij hover
- Geen stockfoto's, geen nep-content
- Vaste navbar bovenaan met `backdrop-filter: blur`

---

## Pagina's

### 1. `index.html` — Home

**Doel:** Direct duidelijk maken wie Saul is en wat hij doet. Prikkelend genoeg om door te klikken.

**Secties:**
1. **Hero** — Grote typografische kop, bijv.:
   - Kop: `JOUW EVENT. VASTGELEGD.`
   - Sub: *"Energieke aftermovies en sportcontent voor clubs, evenementen en organisaties in de regio."*
   - CTA-knop: `Bekijk portfolio` → portfolio.html
2. **Intro blok** — Drie korte USP's naast elkaar:
   - `Run & Gun` — Ik werk snel en onopvallend
   - `Alles inbegrepen` — Filmen én montage, één tarief
   - `Regio & verder` — Ede, Veenendaal, Wageningen en omgeving
3. **Featured werk** — 3 video-thumbnails (YouTube embeds of stilstaande placeholders) met titels:
   - Aftermovie Sportolympiade Wageningen 2025 (`czWanVPqHII`)
   - Aftermovie NK Wielrennen Ede (`GM8YiR7wwc0`)
   - We Are All Stars Aftermovie (`jwo1dgW5skM`)
4. **CTA strip** — `Klaar om iets gafs te maken?` + knop naar contact

---

### 2. `portfolio.html` — Portfolio

**Doel:** Werk laten zien. Niets meer, niets minder.

**Secties:**
1. **Video grid** — Responsive grid van YouTube embeds:

| Titel | YouTube ID |
|---|---|
| Aftermovie Sportolympiade Wageningen 2025 | `czWanVPqHII` |
| Introductievideo Nieuwe Collega's Sportservice | `zZnmnHNersY` |
| We Are All Stars Aftermovie | `jwo1dgW5skM` |
| FC Kruisband Willem II | `qMK7XysUnC8` |
| Clip Athletic Bilbao wint de Copa Del Rey | `2nO50JStH4Y` |
| Aftermovie NK Wielrennen Ede | `GM8YiR7wwc0` |

> Embed als lazy-load thumbnails die bij klik openen als iframe (geen autoplay bij laden).

2. **Foto grid** — Masonry-achtige grid van foto's. Gebruik voorlopig placeholder-blokken in de huisstijlkleuren; de gebruiker vult zelf foto's in vanuit zijn bestaande Wix-galerij.

3. **Client logo's** — Horizontale rij van klant-logo's (Sportservice De Vallei, FC Kruisband, Bouwbedrijf Kreeft, overige). Gebruik `<img>` placeholders met alt-tekst.

---

### 3. `diensten.html` — Diensten

**Doel:** Tarieven helder communiceren, vertrouwen wekken.

> **Gebruik de bestaande HTML uit de bijlage (`luas_diensten.html`) als directe basis voor deze pagina.** Kopieer de structuur en stijl exact over — pas alleen de navigatie en footer aan zodat ze passen bij de rest van de site.

**Pakketten:**

| Pakket | Duur | Prijs (excl. BTW) |
|---|---|---|
| Social Clip | 15–30 sec | € 350 |
| Short Edit | 1–2 min | € 700 |
| Aftermovie Basis ⭐ | 2–4 min | € 1.350 |
| Aftermovie Pro | 4–6 min | € 1.850 |

**Uurtarief:** € 100/uur (filmen én montage inbegrepen, min. 2 uur, reizen tot 30 km gratis)

**Add-ons:**
- Drone-opnames: + € 150
- Extra revisieronde: + € 75
- Spoedlevering (< 48 uur): + € 200
- Reiskosten buiten 30 km: € 0,23/km

**Voorwaarden:**
- Alle prijzen excl. 21% BTW
- 50% aanbetaling bij bevestiging
- Annulering binnen 7 dagen: 100% tarief
- Levertijd: 7–14 werkdagen
- Maatwerk op basis van offerte

---

### 4. `over-saul.html` — Over Saul

**Doel:** Persoonlijk, geen corporate onzin. Klanten moeten het gevoel krijgen dat ze Saul kennen.

**Secties:**
1. **Intro tekst** (gebruik deze tekst letterlijk, dit is Sauls stem):

> *"Als ik mijn stijl in drie woorden moet omschrijven? Snel, plezier en persoonlijk. Ik ben geen maker van stijve, gepolijste plaatjes — ik maak video's waar energie in zit. Run and gun is mijn favoriete stijl."*
>
> *"Het vak heb ik geleerd op het Technova College in Ede, maar het echte werk leerde ik de afgelopen jaren gewoon door te doen. Ik hou ervan om met de camera op pad te gaan en precies die shots te pakken die je niet van tevoren kunt plannen."*
>
> *"Hoe we samenwerken? We beginnen met koffie. Altijd. Ik hoef geen concrete plannen — ik wil horen wat jouw idee is, en dan gaan we daarvandaan verder."*

2. **Foto** — Placeholder voor profielfoto (gebruiker levert aan)
3. **Ervaring blok** — Twee regels:
   - Voormalig video-editor bij DMC Productions / Ziggo Sport (Hilversum)
   - Eigenaar Luas Creative Solutions sinds [jaar]
4. **Client logo's** — Zelfde rij als op de portfolio-pagina

---

### 5. `contact.html` — Contact

**Doel:** Zo laagdrempeldig mogelijk contact opnemen.

**Secties:**
1. **Contactgegevens:**
   - Email: info@csluas.com
   - Telefoon: 06-20596561
   - Instagram: @luascreativesolutions
2. **Contactformulier** — Velden: Naam, Email, Telefoonnummer (optioneel), Bericht, Verstuur-knop
   - Gebruik [Formspree](https://formspree.io) voor formulier-afhandeling (gratis, geen backend nodig)
   - Formspree endpoint invullen: `https://formspree.io/f/JOUW_ID` (gebruiker maakt zelf gratis account aan)
3. **Sfeer-tekst boven het formulier:**
   > *"Geen lange intake, geen gedoe. Stuur een berichtje, dan plannen we die koffie in."*

---

## Navigatie (gedeeld)

```
Logo (links) | Portfolio  Diensten  Over Saul  Contact (rechts) | Instagram-icoon
```

- Vast bovenaan (`position: fixed`)
- Transparant met blur-achtergrond
- Actieve pagina krijgt `color: var(--text)` i.p.v. `var(--muted)`
- Hamburger-menu op mobiel

---

## Footer (gedeeld)

```
© 2026 Luas Creative Solutions — Saul Walet    |    info@csluas.com · 06-20596561
```

---

## Deployment

Na het bouwen:
1. Initialiseer een Git-repo: `git init && git add . && git commit -m "init"`
2. Push naar GitHub
3. Koppel repo aan Vercel (vercel.com) — gratis, automatische deploys
4. Wijs het bestaande domein `csluas.com` aan in Vercel DNS-instellingen

---

## Wat de gebruiker zelf aanlevert

- `assets/logo.png` — het oranje LUAS-icoon (al aanwezig)
- Profielfoto voor Over Saul-pagina
- Foto's voor de portfolio-galerij
- Formspree account ID voor het contactformulier
- Client-logo's (optioneel, anders placeholders laten staan)

---

*Briefing gegenereerd als onderdeel van het Luas Creative Solutions website-project. Vragen? info@csluas.com*
