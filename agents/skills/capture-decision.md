---
name: capture-decision
description: >
  Write a Design Knowledge Layer decision episode and catalog it.
---

# Skill: capture decision

## Steps

1. Create `knowledge/decisions/DK-YYYYMMDD-short-slug.md` using the template in `docs/knowledge-layer.md`.
2. Include context, chosen option, rejected alternatives, outcome.
3. Add a row to `knowledge/index/catalog.md`.
4. If clearly durable, note `Promote to agent context? yes` — actual promotion happens in `refine-memory` after learning review.

## Done when

File + catalog row exist; id is unique.
