---
id: DK-20260720-aiden-stack
type: decision
status: resolved
tags: [architecture, agent, knowledge]
related: [DK-20260720-learning-loop, DK-20260722-ceramic-boundary]
created: 2026-07-20
updated: 2026-07-22
---

# Design System → Design Knowledge Layer → Agent

## Context

Aiden (2026-07-20): Ceramic should evolve with a **context base** / memory value — accumulate Utopia design knowledge (decisions, discussions, failures), similar in spirit to Cerebras Knowledge / Ask Utopia memory structure. Not only a component library.

## Detail

Chosen stack:

1. **Design System** — Ceramic (contracts, CLI, MCP).
2. **Design Knowledge Layer** — durable episodes (decisions, discussions, failures) + refine path into agent context.
3. **Agent** — Central Design Agent that builds with Ceramic and closes the learning loop.

Rejected: stuffing the full agent OS into the Ceramic package repo (muddies publish surface and DS identity).

## Outcome / next

Landed as the **Utopia Design Agent** repo. Ceramic remains the adapter target.

## Promote to agent context?

yes
