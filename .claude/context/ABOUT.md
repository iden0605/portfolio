# About

_Last updated: 2026-07-01_

## What It Is

Personal portfolio website for Iden McElhone (Systems & Cloud Architect / DevOps Engineer), showcasing projects and work experience at [idenmcelhone.dev](https://idenmcelhone.dev/).

## Stack

- **Framework:** React 19 + React Router v7
- **Language:** JavaScript (JSX)
- **Build tool:** Vite 6
- **Styling:** Custom CSS (no Tailwind) — Catppuccin Macchiato terminal dark theme
- **Animations:** Framer Motion, AOS (scroll reveal)
- **Contact:** EmailJS (`@emailjs/browser`)
- **Deployment:** Vercel (primary), GitHub Pages via `gh-pages` script

## Structure

```
src/
  App.jsx                  # Router root — all routes defined here
  Components/
    Global/                # Navbar, Footer, ContactMePopup, ContactMePage, ImageModal, NotFound
    HomePage/              # Body.jsx (landing page), Profile.jsx, Terminal.jsx
    Projects/              # Projects.jsx (grid), ProjectDetail.jsx (router shim),
                           # ProjectHeader.jsx, ProjectDetailTabSection.jsx, TroopCarousel.jsx
    WorkExperience/        # WorkExperience.jsx (list), WorkExperienceDetailPage.jsx, WorkExperienceHeader.jsx
    Utilities/             # ScrollToTop.jsx
  Data/
    projectData.js         # All project entries (object keyed by display name)
    jobExperienceData.js   # Work experience entries
    skillsData.js          # Skills/tech for homepage display
public/
  assets/project/{Name}/  # Project images/videos per project
  {tokenizedname}-hover.mp4  # Card hover preview videos (root of public/)
```

## Key Files

| File | Purpose |
|------|---------|
| `src/Data/projectData.js` | Single source of truth for all projects — add new entries here |
| `src/Data/jobExperienceData.js` | Work experience entries |
| `src/App.jsx` | All routes — add new project/work-experience routes here |
| `src/Components/Projects/ProjectHeader.jsx` | Terminal-style header for every project detail page |
| `src/Components/Projects/ProjectDetailTabSection.jsx` | Tab-based detail section (image/text/video/carousel blocks) |
| `vercel.json` | Vercel deployment config |

## Common Tasks

- **Add a new project:** Add entry to `projectData.js`, create `{Name}Detail.jsx` using `ProjectHeader` + `ProjectDetailTabSection`, add route in `App.jsx` — use `/update-portfolio-project` skill for guided flow
- **Add work experience:** Add entry to `jobExperienceData.js`, create detail component, add route in `App.jsx`
- **Run locally:** `npm run dev`
- **Deploy:** Vercel handles automatically on push to master; `npm run deploy` for GitHub Pages fallback

## Conventions & Gotchas

- Project detail pages must use only `ProjectHeader` + `ProjectDetailTabSection` — no raw HTML sections or custom layouts in detail components
- `projectName` prop passed to both components must exactly match the key string in `projectData.js`
- `award` key must be omitted entirely (not `""` or `null`) if no award
- Empty link fields use `""` — all link keys must be present
- `previewVid` path: `"/{tokenizedname}-hover.mp4"` — root of `public/`, no subfolder
- Detail content types: `"image"`, `"text"`, `"video"`, `"troop-carousel"` — handled by `ProjectDetailTabSection`
- Theme is Catppuccin Macchiato: base `#24273a`, mantle `#1e2030`, green `#a6da95`, blue `#8aadf4`, pink/red `#ed8796`
- ContactMePopup only renders on desktop (auto-closes on resize to ≤768px); mobile uses `/contact` route instead
