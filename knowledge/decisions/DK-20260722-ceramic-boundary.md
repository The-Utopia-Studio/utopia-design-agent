---
id: DK-20260722-ceramic-boundary
type: decision
status: resolved
tags: [ceramic, architecture, boundary]
related: [DK-20260720-aiden-stack]
created: 2026-07-22
updated: 2026-07-22
---

# Ceramic stays the contract; this repo owns memory + agent

## Context

A full `agents/` OS was prototyped inside Ceramic. Review: Ceramic’s job is the publishable design system (packages, manifests, CLI/MCP, Phase 2 authoring, Phase 3 eval). The portable Design Agent + knowledge layer is a different product.

## Detail

- Ceramic: contracts + discovery transports + Aiden’s DS roadmap.
- Utopia Design Agent: knowledge layer, refine-memory, central learning loop, Ceramic adapter.
- Agents must not silently edit Ceramic; propose PRs when contracts must change.

## Outcome / next

Scaffold lives here. Ceramic should keep only thin consumer `init` agent rules.

## Promote to agent context?

yes
