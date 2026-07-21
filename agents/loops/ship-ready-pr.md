---
name: ship-ready-pr
description: >
  Get a PR merge-ready for this repo (or a linked Ceramic/product PR).
---

# Loop: ship-ready PR

## Steps

1. `gh pr view` (create only if human asked).
2. Ensure docs/knowledge links valid; no secrets.
3. Rams if UI touched.
4. CI green when present.
5. Clear actionable review comments.

## Done when

Mergeable with human gate; no auto-merge.
