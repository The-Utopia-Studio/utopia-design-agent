# Utopia Design Agent

Central design agent for Utopia Studio. **Ceramic** is the design-system contract. This repo is the **agent + Design Knowledge Layer** that accumulates decisions, discussions, and failures — then feeds them back into agent context and (when justified) Ceramic.

> Design System → Design Knowledge Layer → Agent  
> (Aiden, 2026-07-20)

## The loop

```
Central Design Agent
        ↓
  Project Build
        ↓
Design decisions & outcomes
        ↓
Reusable learning review
        ↓
Design System / Agent Context update
        ↺ (back to Central Design Agent)
```

See [docs/architecture.md](./docs/architecture.md) and [docs/loop.md](./docs/loop.md).

## Why a separate repo

| Repo | Owns |
|------|------|
| [Ceramic Design System](https://github.com/The-Utopia-Studio/Ceramic-Design-System) | Components, tokens, themes, manifests, CLI, MCP |
| **Utopia Design Agent** (this) | Agent harness, knowledge/memory, learning loops |
| [Studio Product Framework](https://github.com/The-Utopia-Studio/studio-product-framework) | Product/SaaS agent OS (billing, Convex, ship loops) |

Ceramic stays a publishable design system. Anyone can benefit from this agent by pointing it at Ceramic (or later other adapters) without forking the DS.

## Layout

```
adapters/ceramic/     How the agent discovers & applies Ceramic (CLI/MCP)
knowledge/            Design Knowledge Layer — decisions, discussions, failures, reviews
context/              Always-on agent memory pack (principles, scorecard, queues)
agents/skills/        Playbooks (use Ceramic, refine memory, capture, review…)
agents/loops/         Bounded recursive workflows (central cycle, project build…)
docs/                 Architecture + knowledge-layer doctrine
```

## Quick start

1. Clone Ceramic beside this repo (or set `CERAMIC_ROOT`).
2. Open this repo in Cursor / Claude / Codex.
3. Read `AGENTS.md` → run `agents/loops/central-design-cycle.md`.
4. Before UI work: Ceramic discovery via `adapters/ceramic` (`utopia-ds` / MCP).
5. After a project: capture outcomes → `learning-review` → update `knowledge/` + `context/`.

```bash
# From a product using Ceramic
npx utopia-ds manifest --json
npx utopia-ds search "data table" --json
npx utopia-ds doctor --json
```

## Memory model (Cerebras Knowledge–shaped)

Inspired by Aiden’s note on **Cerebras Knowledge** / Ask Utopia–style memory:

- **Raw episodes** live in `knowledge/` (decisions, discussions, failures, reviews).
- **Refined context** lives in `context/` (what the agent loads every run).
- Skill `agents/skills/refine-memory.md` promotes reusable lessons and demotes noise.
- Nothing auto-edits Ceramic. Design-system updates are explicit, reviewed PRs.

## Status

Scaffold aligned with Aiden’s architecture. First real knowledge entries and Ceramic adapter wiring are the next improve pass — see `context/research-queue.md`.
