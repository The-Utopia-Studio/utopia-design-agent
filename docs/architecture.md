# Architecture

## Aiden’s stack

```
Design System  →  Design Knowledge Layer  →  Agent
   (Ceramic)         (this repo: knowledge/)    (skills + loops + context)
```

Ceramic answers **what is allowed / how to build**.  
The knowledge layer answers **what we decided, discussed, and learned (including failures)**.  
The agent **orchestrates** builds and closes the learning loop.

## Recursive loop (source of truth)

```
┌─────────────────────────┐
│  Central Design Agent   │◄────────────────────────────┐
└───────────┬─────────────┘                             │
            ▼                                           │
┌─────────────────────────┐                             │
│     Project Build       │                             │
└───────────┬─────────────┘                             │
            ▼                                           │
┌─────────────────────────┐                             │
│ Design decisions &      │                             │
│ outcomes                │                             │
└───────────┬─────────────┘                             │
            ▼                                           │
┌─────────────────────────┐                             │
│ Reusable learning       │                             │
│ review                  │                             │
└───────────┬─────────────┘                             │
            ▼                                           │
┌─────────────────────────┐                             │
│ Design System / Agent   │─────────────────────────────┘
│ Context update          │
└─────────────────────────┘
```

Implemented as `agents/loops/central-design-cycle.md`.

## Layer responsibilities

| Layer | Writable by agent? | Contents |
|-------|--------------------|----------|
| Ceramic packages | Only via explicit human-gated PR | Components, tokens, themes, manifests |
| `knowledge/` | Yes (append episodes) | Decisions, discussions, failures, reviews |
| `context/` | Yes (via refine-memory) | Refined always-on pack the agent loads |
| Product apps | Yes (consumer projects) | Screens built with Ceramic |

## Adapters

`adapters/ceramic/` is the first design-system adapter. Future adapters can plug other systems; the knowledge layer and loops stay stable.

## Relationship to Studio Product Framework

SPF owns **product** agent OS (Convex, billing, Effect, ship/greploop for apps).  
This repo owns **design** agent OS (Ceramic + design knowledge + learning cycle).  
Share patterns (bounded loops, file memory); do not merge stacks.

## Memory (Cerebras Knowledge–shaped)

Accumulate Utopia design knowledge:

1. Capture raw episodes into `knowledge/{decisions,discussions,failures,reviews}/`.
2. Run `refine-memory` so reusable lessons land in `context/agent-context.md` and the index.
3. Next Central Design Agent run loads refined context first — not the entire history dump.

See [knowledge-layer.md](./knowledge-layer.md).
