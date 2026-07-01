---
name: csync
description: Sync .claude/context/ABOUT.md after a session where the codebase changed. Reviews what was modified during the conversation and updates only the drifted sections. Run at the end of a session to keep context current for next time.
---

## What This Skill Does

Keeps `.claude/context/ABOUT.md` accurate after sessions where the codebase changed. Reviews changes made during the conversation, re-reads affected files, and updates only the sections that have drifted — no full rewrite, no unnecessary questions.

---

## Step 1: Check for ABOUT.md

If `.claude/context/ABOUT.md` is missing:
> "No context file found at `.claude/context/ABOUT.md`. Run `/cinit` to create one."

Stop here.

---

## Step 2: Read ABOUT.md

Read `.claude/context/ABOUT.md` fully. Note which files and paths it references.

---

## Step 3: Review Session Changes

Look back at what was modified in this conversation:
- Which files were edited or created?
- Were any directories added or removed?
- Did any dependencies, scripts, or config change?
- Were any new patterns, routes, or conventions introduced?

Also re-read the key files that `ABOUT.md` documents to check for drift against what's currently documented. If a `docs/`, `documentation/`, `doc/`, or `wiki/` directory exists, check for any new or modified files there and incorporate relevant changes into the **Key Documentation** section of `ABOUT.md`.

---

## Step 4: Identify Drift

List what has actually changed vs what `ABOUT.md` documents. Be specific:
- New file or directory not documented
- A route, component, or module added/removed
- A dependency or script changed
- A convention or gotcha that's now outdated

**If nothing has changed:**
> "`ABOUT.md` is current — no changes needed."

Stop here.

---

## Step 5: Ask One Question if Needed

If changes in the code suggest something you can't determine from reading alone (e.g. a new module whose purpose isn't clear from its name or contents), ask one targeted question:
> "I see `{new thing}` was added — what does it do?"

Do not ask about changes you can determine from reading the code.

---

## Step 6: Update ABOUT.md

Edit only the sections that have drifted. Do not rewrite sections that are still accurate. Update the `_Last updated_` date.

Before writing, state what you're changing:
> "Updating: {list of changed sections}"

---

## Step 7: Confirm

```
✓ .claude/context/ABOUT.md synced

Updated: {bullet list of changed sections}
Unchanged: {bullet list of sections still accurate}
```

---

## Notes

- Do not ask questions the code can answer. Minimize friction.
- If the project has changed significantly (new framework, major restructure), recommend `/cinit` instead of patching a deeply stale `ABOUT.md`.
- Only update what has actually changed — preserve accurate sections exactly as they are.
