---
name: improve-agent
description: >
  Self-recursive improve for Utopia Design Agent — research queue → one gap → ship.
---

# Loop: improve agent

## Goal

Raise one scorecard dimension or close one open research-queue item.

## Steps

1. Select top open item from `context/research-queue.md` (or run `research` once).
2. Plan ≤10 lines.
3. Execute (adapter, knowledge tooling, docs, skills).
4. `ship-ready-pr` if code/docs warrant a PR.
5. Close queue item; update scorecard; append learning.

## Forbidden

- Silent Ceramic edits
- Skipping human merge
- Depth > 3

## Done when

One gap closed or blocked with learning.
