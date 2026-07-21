---
name: learning-review
description: >
  Reusable learning review — Aiden loop stage. Turn project outcomes into
  knowledge promotions and optional Ceramic change proposals.
---

# Skill: learning review

## Goal

Convert **design decisions & outcomes** into reusable lessons. Required after every real project build.

## Steps

1. List what was built and what changed (paths / PR links).
2. Extract candidates: decisions, failures, open discussions.
3. Capture missing episodes via `capture-decision` / `capture-failure`.
4. Write `knowledge/reviews/DK-YYYYMMDD-review-<slug>.md` with:
   - What to **promote** to agent context
   - What stays raw-only
   - What requires a **Ceramic** PR (if any) — never silent edit
5. Run `refine-memory.md`.
6. Append a one-liner to `context/learnings.md` if non-obvious.

## Done when

- [ ] Review file exists
- [ ] Catalog updated
- [ ] Context refined or explicitly “nothing to promote”
- [ ] Ceramic follow-ups queued as research items / issues — not sneaked in
