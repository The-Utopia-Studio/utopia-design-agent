# Design Knowledge Layer

The middle layer in Aiden’s stack: **Design System → Knowledge → Agent**.

## What belongs here

| Bucket | Stores | Example |
|--------|--------|---------|
| `decisions/` | Chosen options + why + alternatives rejected | “Use themeable Select, not NativeSelect, for branded menus” |
| `discussions/` | Open or resolved debates (not yet decided) | Theme motion profile vs per-component timing |
| `failures/` | What broke or misled agents/humans | Invented prop; RTL overflow; token misuse |
| `reviews/` | Outputs of reusable learning review | Post-project synthesis with promote/demote list |
| `index/` | Catalog / tags for retrieval | `catalog.md` |

## What does **not** belong here

- Ceramic component source (lives in Ceramic).
- Product business logic.
- Secrets, customer PII, one-off polish tickets with no reusable lesson.

## Episode template

Every file under `decisions/`, `discussions/`, `failures/`:

```markdown
---
id: DK-YYYYMMDD-short-slug
type: decision | discussion | failure
status: open | resolved | superseded
tags: [ceramic, rtl, tokens, motion, agent, …]
related: []  # other DK ids or Ceramic paths
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# Title

## Context
…

## Detail
…

## Outcome / next
…

## Promote to agent context?
yes | no | already
```

## Refine skill

`agents/skills/refine-memory.md` is the Cerebras Knowledge–style refiner:

- Promote: durable rules → `context/agent-context.md`
- Index: ensure `knowledge/index/catalog.md` lists the episode
- Demote: noise stays in knowledge but is not loaded every run
- Escalate: if Ceramic itself must change → research queue item pointing at Ceramic PR, never silent edit

## Ask Utopia–style retrieval

`agents/skills/ask-design-knowledge.md` searches tags + catalog + recent reviews before answering design questions. Prefer citing `DK-*` ids.
