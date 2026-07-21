---
name: refine-memory
description: >
  Cerebras Knowledge–style refine: promote durable lessons into context/,
  keep noise in knowledge/, demote stale rules. Use after learning-review.
---

# Skill: refine memory

## Goal

Accumulate Utopia design knowledge without bloating the always-on pack.

## Steps

1. Read new/updated episodes flagged `Promote to agent context? yes`.
2. Read latest `knowledge/reviews/*`.
3. Update `context/agent-context.md`:
   - Add short bullets with `DK-*` links
   - Remove superseded or wrong rules (note supersession in the old episode)
4. Keep `agent-context.md` skimable (aim ≤ ~80 lines). Detail stays in `knowledge/`.
5. Ensure `knowledge/index/catalog.md` is current.
6. If a lesson requires Ceramic contract change → add `context/research-queue.md` item pointing at Ceramic — do not edit Ceramic here.

## Forbidden

- Dumping full episode text into agent-context
- Deleting failure history
- Editing Ceramic packages from this skill

## Done when

Context updated or explicitly unchanged; catalog consistent.
