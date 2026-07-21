---
name: central-design-cycle
description: >
  Aiden’s recursive design loop — Central Design Agent → Project Build →
  decisions & outcomes → reusable learning review → Design System / Agent
  Context update → back. Default loop for design work.
---

# Loop: central design cycle

## Goal

Complete one bounded design project **and** close the learning loop so the next run is smarter.

## Budget

| Knob | Default |
|------|--------:|
| Outer iterations | 1 project |
| Recursion depth | ≤ 3 |
| Auto-merge / Ceramic publish | **never** |

## Forbidden

- Skip reusable learning review after a real build
- Invent Ceramic APIs
- Silently edit Ceramic
- Recurse after identical failure

## Stages

### 1. Central Design Agent

1. Load `context/principles.md` + `context/agent-context.md`.
2. `ask-design-knowledge` for relevant prior art / failures.
3. State goal, done-when, and out-of-scope (≤10 lines).

### 2. Project Build (depth +1)

Run `agents/loops/project-build.md` (uses `use-ceramic`, optional Rams).

### 3. Design decisions & outcomes

- List decisions made and outcomes (what shipped / what failed).
- Capture with `capture-decision` / `capture-failure` as needed.
- Open `discussions/` only if unresolved.

### 4. Reusable learning review (depth +1)

Run `agents/skills/learning-review.md` (includes `refine-memory`).

### 5. Design System / Agent Context update

| Update type | Action |
|-------------|--------|
| Agent Context | Already done via refine-memory → `context/agent-context.md` |
| Design System | If review requires contract change: open Ceramic issue/PR (human gate). Queue in `context/research-queue.md` if deferred. |

Return to stage 1 only if budget remains **and** knowledge/context improved.

## Done when

- [ ] Build done-when met or explicitly blocked
- [ ] Learning review artifact written
- [ ] Context refined or “nothing to promote”
- [ ] Ceramic follow-ups explicit (or none)
- [ ] No silent merge/publish

## Report

```
Central design cycle complete.
  Goal:     …
  Build:    … (paths/PR)
  Review:   knowledge/reviews/…
  Context:  updated | unchanged
  Ceramic:  none | issue/PR url
  Next:     stop | another cycle | human gate
```
