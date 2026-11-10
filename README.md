# cliffe-ibande-portfolio

Personal site for Cliffe Owino Ibande — software engineer, Core Payment Services
at Prodapt, Nairobi.

React 18 · Vite 5 · Tailwind 3 · Framer Motion · React Router 7

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
npm run lint
```

## Structure

The site is one page in two acts.

**Act I — the narrative**, on deep ink. A single mobile-money transfer moves
through the stages of settlement, and each chapter says what Cliffe is
responsible for at that stage. Copy lives in `src/data/story.js`.

**Act II — the record**, on warm paper. Positions, systems, work, credentials,
contact. Everything here is meant to be checkable. Content lives in
`src/data/record.js`.

```
src/
  data/story.js       Act I copy, chapter by chapter    ← edit the prose here
  data/record.js      Act II facts: jobs, work, links   ← edit the facts here
  components/         TransactionRail, Chapter, CountryNetwork, Nav
  sections/           Opening + the six Act II sections
  pages/              Home, NotFound
  index.css           Design tokens and component classes
```

Two data files hold all the content. Neither component code nor copy is mixed.

## Design system

Defined as CSS custom properties in `src/index.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#0A0C10` | Act I background |
| `--paper` | `#F4F1EA` | Act II background |
| `--cream` | `#EDEAE3` | Type on ink |
| `--settled` | `#34C77B` | Accent on ink — a settled transaction |
| `--settled-deep` | `#0C6B3E` | Accent on paper (contrast-corrected) |
| `--pending` | `#E8A33D` | Reserved |
| `--failed` | `#E5484D` | Errors, 404 |

Accent colours are payment-state semantics, not decoration. Every foreground
and background pair in the table above meets WCAG AA at body-text size; if you
change one, re-check it before shipping.

Type is Instrument Serif for display and Inter for everything else. There is
one theme, deliberately — the two surfaces are a structural device, not a
light/dark toggle.

## Environment

The contact form posts through EmailJS. Without these it degrades to a direct
mailto link rather than failing silently.

```
VITE_SERVICE_ID=
VITE_TEMPLATE_ID=
VITE_USER_ID=
```

## Deploying

Static build in `dist/`. `public/_redirects` provides the SPA fallback so
non-root paths resolve to `index.html` instead of a host 404.
