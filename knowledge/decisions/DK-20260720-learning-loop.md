---
id: DK-20260720-learning-loop
type: decision
status: resolved
tags: [architecture, loop, memory]
related: [DK-20260720-aiden-stack]
created: 2026-07-20
updated: 2026-07-22
---

# Central Design Agent recursive learning loop

## Context

Aiden’s diagram: Central Design Agent → Project Build → Design decisions & outcomes → Reusable learning review → Design System / Agent Context update → back to Central Design Agent.

## Detail

The loop is mandatory after meaningful project work. Skipping the learning review is a process failure. Updates split into:

- **Agent Context update** — refined rules in `context/` (common path).
- **Design System update** — Ceramic PR only when the lesson requires contract change (human-gated).

## Outcome / next

Implemented as `agents/loops/central-design-cycle.md`.

## Promote to agent context?

yes
