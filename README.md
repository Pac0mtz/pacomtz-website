# Paco Mtz — Web Developer & Designer

Personal portfolio and business website for **Paco Martinez**, web developer & designer based in Chicago, IL.

**Live:** [pacomtz.com](https://pacomtz.com)

## Stack

- **React 19 + TypeScript + Vite**
- **Tailwind CSS** — custom dark editorial design system (Playfair Display / Rubik / Azeret Mono)
- **Three.js + GLSL** — scroll-driven shader hero (simplex-noise displaced wireframe core + particle orbit, code-split)
- **Framer Motion** — kinetic line-masked headlines, page transitions, scroll reveals
- **Lenis** — smooth scrolling
- **simple-icons + lucide-react** — real brand icons

## Pages

| Route | Content |
|---|---|
| `/` | 3D animated hero, intro, selected work, marquee gallery, services index |
| `/work` | Portfolio with live client sites (AIS Environmental, La Birrieria, Soluna Restoration, A&B Environmental, Marquez Construction) |
| `/services` | 8 services in an interactive accordion |
| `/services/:id` | A unique SEO-targeted page per service (headline, process, deliverables, outcomes) |
| `/about` | Bio, skills, experience, tools & stack |
| `/contact` | Validated contact form + click-to-call |

## SEO

- Semantic HTML5 + per-page `<title>`
- Meta description/keywords, canonical, Open Graph, Twitter cards
- JSON-LD `ProfessionalService` + `Person` structured data
- `public/sitemap.xml` + `public/robots.txt`

## Develop

```bash
npm install
npm run dev      # dev server on :3000
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Accessibility & performance

- Fully responsive (375px → 1440px+), touch targets ≥44px
- `prefers-reduced-motion` honored everywhere; WebGL hero degrades to a static poster
- 3D scene lazy-loaded in its own chunk
