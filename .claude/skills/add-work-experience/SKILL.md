---
name: add-work-experience
description: Use when someone wants to add a new work experience to the portfolio, add a job entry, add a company, or create a new work experience page.
---

## What This Skill Does

Interviews the user to collect all work experience details, drafts the content in the correct portfolio writing style, then writes all changes: adds the entry to `jobExperienceData.js`, creates the detail component, and registers the route in `App.jsx`.

---

## Step 1: Interview the User

Ask **one round at a time**. Wait for each answer before continuing.

**Round 1 — Company & Role**
> "What is the **company or organisation name**? (This becomes the data key and display name — e.g. `'Kewpump'`, `'Unimelb MoMU Club'`)
> And what was your **job title**? If you held multiple roles, separate with a pipe — e.g. `'Junior DevOps Engineer | Software Developer'`."

**Round 2 — Dates & Status**
> "What were the **start and end dates**?
> Format: `MMM YYYY - MMM YYYY` or `MMM YYYY - Present` if ongoing — e.g. `'Nov 2025 - Present'`, `'Mar 2024 - Oct 2024'`."

**Round 3 — Team**
> "How many people were on the team (including yourself)?"

**Round 4 — What You Did**
> "Describe what you worked on — the product, platform, or service, and what your involvement was. A few sentences is fine. I'll rewrite it in the correct portfolio style."

**Round 5 — Key Responsibilities**
> "List your key responsibilities — what did you specifically do or deliver? Be as specific as you like; I'll format them.
>
> You can write them as bullet points, short phrases, or full sentences — doesn't matter."

**Round 6 — Technologies**
> "What technologies, tools, or platforms did you use? List them however is easiest — I'll format them into a comma-separated string.
> Be specific where relevant — e.g. `React (Javascript)`, `Unity (C#)`, `Next (Typescript)`."

**Round 7 — Image**
> "What image file will you use for this entry? It'll go under `public/assets/WorkExperience/{CompanyName}/`.
>
> If you don't have a filename yet, I'll use `{tokenizedname}-image-1.png` as a placeholder."

---

## Step 2: Draft Content in Portfolio Writing Style

Before assembling the JSON, rewrite the description and key responsibilities to match the existing portfolio style. Show your drafts to the user and confirm before proceeding.

### Description Style

- 2–4 sentences. Use **present tense** if the role is ongoing (`date` ends in `"Present"`); use **past tense** if completed.
- Lead with what you did/do and what the product or service is. Mention team size or context when it adds weight.
- Be specific about the domain and your involvement. No filler phrases like "I was responsible for..." or "My role involved...".
- Match the directness of existing entries:
  - *"Worked on the infrastructure and deployment architecture for a centralized factory and product management platform used internally by company employees."*
  - *"Working with a team of 9 to develop our game Cascade over the course of a year. I focus on implementing core gameplay systems such as player movement and camera mechanics..."*
  - *"Co-founded a web development service based in Kota Kinabalu, Malaysia, specializing in creating custom websites for hotels and Airbnb hosts."*

### Key Responsibilities Style

Use **full sentences with past-tense action verbs** for technical or professional roles. Use the following verb palette:
`Designed`, `Implemented`, `Developed`, `Built`, `Configured`, `Deployed`, `Migrated`, `Integrated`, `Created`, `Documented`, `Planned`, `Managed`, `Optimised`, `Contributed`, `Prepared`, `Collaborated`

Each bullet should name a **specific system, tool, outcome, or technique**. One responsibility per bullet.

- Good: *"Configured staging and production environments on DigitalOcean to support reliable deployments and future scalability."*
- Good: *"Integrated character animations and visual assets created by artists into the game engine."*
- Avoid: *"Helped with backend stuff"*, *"Worked on the website"*

For club roles or simpler entries, short noun-phrase bullets are acceptable (matching how MoMU and UMGMC are written), but always prefer full sentences when there's something technical to say.

---

Show the user:
> "Here's how I'd write the description and responsibilities in portfolio style — let me know if you'd like any changes:
>
> **Description:**
> {draft}
>
> **Key Responsibilities:**
> {bullet list}"

Revise until confirmed.

---

## Step 3: Assemble the JSON

Build the entry using all confirmed data:

```js
"{CompanyName}": {
  tokenizedName: "{kebab-case-id}",
  jobTitle: "{jobTitle}",
  cardImage: "/assets/WorkExperience/{CompanyName}/{filename}",
  headerImage: "/assets/WorkExperience/{CompanyName}/{filename}",
  cardImageSize: "210px",
  headerImageSize: "280px",
  description: `{description}`,
  date: "{MMM YYYY - MMM YYYY or Present}",
  teamSize: N,
  timeInRole: "{Ongoing or N Months}",
  keyResponsibilities: [
    "...",
  ],
  technologies: "Comma, Separated, String"
}
```

**`tokenizedName`:** lowercase, hyphens, no spaces — e.g. `"stego-studios"`, `"bookings-made-easy"`.

**`timeInRole`:** If `date` ends in `"Present"`, set `"Ongoing"`. Otherwise calculate the number of months from the date range and write e.g. `"8 Months"` or `"6 Months"`.

**`cardImageSize` / `headerImageSize`:** Default to `"210px"` / `"280px"`. Adjust upward (e.g. `"320px"` / `"420px"`) only if the image is landscape-dominant — ask the user if unsure.

Show the complete JSON to the user and confirm before writing any files.

---

## Step 4: Write All Changes

**1. Add to `src/Data/jobExperienceData.js`**
Insert the new entry inside the `jobExperienceData` object. Preserve all existing entries.

**2. Create `src/Components/WorkExperience/{CompanyName}Detail.jsx`**

```jsx
import '../../App.css';
import '../WorkExperience/WorkExperienceDetail.css';
import ScrollToTop from '../Utilities/ScrollToTop';
import WorkExperienceHeader from './WorkExperienceHeader';
import jobExperienceData from '../../Data/jobExperienceData';

function {CompanyName}Detail() {
  const job = jobExperienceData["{CompanyName}"];

  if (!job) {
    return <div>Job experience not found.</div>;
  }

  return (
    <main className="main-content">
      <ScrollToTop />
      <WorkExperienceHeader companyName="{CompanyName}" />

      <section className="section" data-aos="fade-up">
        <div className="image-description-section">
          <div className="image-description-block">
            <div className="description">
              {/* Add role-specific detail content here */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default {CompanyName}Detail;
```

**3. Update `src/App.jsx`**

Add import with other work experience imports:
```jsx
import {CompanyName}Detail from './Components/WorkExperience/{CompanyName}Detail';
```

Add route inside `<Routes>` with other work experience routes:
```jsx
<Route path="/work-experience/{tokenizedName}" element={<{CompanyName}Detail />} />
```

---

## Step 5: Confirm

```
✓ Added "{CompanyName}" to src/Data/jobExperienceData.js
✓ Created src/Components/WorkExperience/{CompanyName}Detail.jsx
✓ Registered route /work-experience/{tokenizedName} in src/App.jsx

Next steps:
- Place your image in public/assets/WorkExperience/{CompanyName}/
- Add detail content inside the <section> block in {CompanyName}Detail.jsx
```

---

## Notes

- Do not write any files until the user has confirmed the description, responsibilities, and JSON.
- `technologies` is a **comma-separated string** — not an array (that's projects).
- Work experience detail pages don't use a `details` array — supplementary content is written directly as JSX in the `<section>` block by the user later.
- The data key (e.g. `"Unimelb MoMU Club"`) must exactly match the string passed to `companyName` in the detail component.
