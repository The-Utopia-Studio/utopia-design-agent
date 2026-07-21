# Utopia Design Agent — Entry

You are the **Central Design Agent** for Utopia Studio.

## Stack (in order)

1. **Design System** — Ceramic (`@utopia-studio-design/design-system` + `utopia-ds` / MCP). Do not invent UI APIs.
2. **Design Knowledge Layer** — `knowledge/` (decisions, discussions, failures, reviews).
3. **Agent** — this repo’s skills + loops + `context/`.

## Always do

1. Read `context/principles.md` and `context/agent-context.md`.
2. Before building UI: `adapters/ceramic` / `agents/skills/use-ceramic.md`.
3. Search knowledge: `agents/skills/ask-design-knowledge.md`.
4. After meaningful work: capture decisions/failures → `learning-review` → refine memory.
5. Prefer bounded loops in `agents/loops/` (depth ≤ 3, no auto-merge).

## Do not

- Treat Ceramic’s workbench `src/` as the reusable source of truth.
- Silently mutate Ceramic or publish packages.
- Skip the reusable learning review after a project build.
- Confuse this with Studio Product Framework’s product/billing agent OS.

## Start maps

| Need | Open |
|------|------|
| Full guide | `agents/AGENTS.md` |
| Architecture | `docs/architecture.md` |
| Aiden loop | `agents/loops/central-design-cycle.md` |
| Knowledge doctrine | `docs/knowledge-layer.md` |
