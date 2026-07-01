---
name: cinit
description: Initialize project context for the first time. Reads the repo, asks the user targeted questions, and creates .claude/context/ABOUT.md. If ABOUT.md already exists, updates it instead. Run this once per project to give Claude background on what it is.
---

## What This Skill Does

Creates `.claude/context/ABOUT.md` — a concise, accurate document describing the project's purpose, stack, structure, and conventions. This file is the foundation that `/cload` reads at the start of every session.

If `.claude/context/ABOUT.md` already exists, update it to reflect the current state of the repo rather than starting from scratch.

---

## Step 1: Check for Existing ABOUT.md

Check if `.claude/context/ABOUT.md` exists.

**If it exists:**
> "`ABOUT.md` already exists. Updating it to reflect the current repo state."

Proceed to Step 2, but treat this as an update rather than a creation — preserve accurate sections, only rewrite what has drifted or is missing.

**If it does not exist:**
> "No context found. Reading the repo to create `.claude/context/ABOUT.md`."

Proceed to Step 2 as a fresh creation.

---

## Step 2: Explore the Repo

Read the project to build a factual foundation before asking anything.

**Identity & build:**
- `package.json` / `Cargo.toml` / `go.mod` / `pyproject.toml` — framework, dependencies, scripts
- `vite.config.*` / `next.config.*` / `webpack.config.*` — build config
- `README.md` — stated purpose or architecture
- `git remote get-url origin` — repo name and host

**Documentation:**
- Check for a `docs/`, `documentation/`, `doc/`, or `wiki/` directory at the repo root — if found, read all files inside
- Also check for any `*.md` files at the root beyond README (e.g. `CONTRIBUTING.md`, `ARCHITECTURE.md`, `DEVELOPMENT.md`)
- Extract all meaningful information: architecture decisions, setup instructions, conventions, API descriptions, data models, workflow guides — anything a developer needs to understand the project

**Structure:**
- Top-level directory listing
- `src/` or equivalent — subdirectory layout
- Where does data live? Where do pages/routes live? Where do components/modules live?

**Key patterns:**
- Main entry point
- Router or routing config
- Data files or schemas (read 2–3 representative ones)
- State management approach if visible
- File naming conventions

Do not ask the user anything yet.

---

## Step 3: Interview for Gaps

Ask only what the repo information cannot answer. One question at a time, wait for each answer before asking the next.

Also read any text the user attached when invoking this skill — if it answers a question, skip it.

**Q1 — Purpose** _(skip if README clearly states it)_:
> "In one sentence: what does this project do, and who uses it?"

**Q2 — Gotchas** _(only if the code suggests non-obvious constraints)_:
> "Any non-obvious conventions or constraints I should document? E.g. 'always register routes manually in X', 'image keys must match exactly'."

Skip any question you already have the answer to from reading the code or user-provided text.

---

## Step 4: Write .claude/context/ABOUT.md

Create `.claude/context/` if it doesn't exist, then write or update `ABOUT.md`:

```markdown
# About

_Last updated: {date}_

## What It Is

{one sentence: what the project does and who uses it}

## Stack

- **Framework:** {name and version}
- **Language:** {language}
- **Build tool:** {tool}
- **Deployment:** {how/where, if determinable}

## Structure

{annotated directory tree — only directories that matter, one-line explanations each}

## Key Files

| File | Purpose |
|------|---------|
| {path} | {what it is} |

## Common Tasks

- **{task name}:** touch `{file A}`, then `{file B}` — {one-line recipe}

## Conventions & Gotchas

- {non-obvious rule or constraint}

## Key Documentation

{Only include if a docs folder or notable markdown files exist. Summarize the most important points from each — architecture decisions, data models, setup requirements, workflow rules, anything a developer must know. Do not just list file names; extract the substance.}
```

**Quality rules:**
- Every file path must be real and verified from what you read
- Every field must reflect actual current data — read the real files
- No generic advice — only project-specific facts
- Keep under 100 lines

---

## Step 5: Confirm

```
✓ .claude/context/ABOUT.md {created|updated}

Run /cload at the start of any session to orient Claude on this project.
Run /csync after a session to keep ABOUT.md current.
```

---

## Notes

- Never document things you haven't verified by reading actual files.
- Ask questions one at a time. Do not batch them.
- If the project has changed significantly since a previous ABOUT.md, rewrite affected sections fully rather than patching around stale content.
