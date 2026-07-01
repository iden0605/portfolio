---
name: cload
description: Load project context at the start of a session. Reads .claude/context/ABOUT.md so Claude understands the project's purpose, stack, structure, and conventions. Read-only — no writes, no questions. If ABOUT.md is missing, directs to /cinit.
---

## What This Skill Does

Orients Claude at the start of a session by reading `.claude/context/ABOUT.md`. Read-only — no writes, no questions. One short confirmation output.

---

## Step 1: Check for ABOUT.md

Look for `.claude/context/ABOUT.md`.

**If missing:**
> "No context file found at `.claude/context/ABOUT.md`. Run `/cinit` to create one."

Stop here.

**If present:** Continue to Step 2.

---

## Step 2: Read ABOUT.md

Read `.claude/context/ABOUT.md` in full. Internalize:
- What the project is and who uses it
- The tech stack
- Directory structure and what each part does
- Key files and their roles
- Common tasks and how they're done
- Conventions and gotchas

---

## Step 3: Output Orientation Summary

One concise block — enough to confirm orientation, not a full readout:

```
Context loaded: {project name}

What it is: {one sentence from ABOUT.md}
Stack: {framework / language}
```

---

## Notes

- This skill is read-only. It never writes files or asks questions.
- Keep the output short. The goal is orientation, not a summary of everything in the file.
- After loading, apply the conventions and project knowledge naturally in all subsequent responses during the session.
