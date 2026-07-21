---
name: ask-design-knowledge
description: >
  Ask Utopia–style retrieval over the Design Knowledge Layer before answering
  design questions. Cite DK-* ids.
---

# Skill: ask design knowledge

## Goal

Answer from accumulated Utopia design knowledge (decisions, discussions, failures, reviews) — not vibes.

## Steps

1. Read `context/agent-context.md` (refined pack).
2. Scan `knowledge/index/catalog.md` for matching tags/titles.
3. Open the top matching episodes under `knowledge/`.
4. Prefer **failures** when the question is “what goes wrong.”
5. Answer with citations (`DK-…`). If nothing matches, say so and optionally open a `discussions/` episode.

## Forbidden

- Presenting guesses as catalogued knowledge
- Skipping the catalog when >3 episodes exist

## Done when

Answer cites ids or explicitly reports a knowledge miss.
