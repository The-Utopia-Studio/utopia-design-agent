# Builder guide — Utopia Design Agent

## Map

| Path | Purpose |
|------|---------|
| `adapters/ceramic` | Ceramic discovery / boundary |
| `knowledge/` | Design Knowledge Layer episodes |
| `context/` | Refined always-on memory |
| `agents/skills` | Playbooks |
| `agents/loops` | Bounded recursive workflows |
| `docs/` | Architecture + doctrine |

## Skills

| Skill | When |
|-------|------|
| `use-ceramic.md` | Any UI / token / theme work |
| `ask-design-knowledge.md` | Answer from accumulated Utopia knowledge |
| `capture-decision.md` | Record a chosen path |
| `capture-failure.md` | Record what misled or broke |
| `learning-review.md` | Reusable learning review stage |
| `refine-memory.md` | Promote/demote into `context/` (Cerebras-style) |
| `rams.md` | Design / a11y review |
| `research.md` | Feed research queue |

## Loops

| Loop | When |
|------|------|
| `central-design-cycle.md` | Default — Aiden’s full loop |
| `project-build.md` | Execute one bounded build |
| `improve-agent.md` | Improve this repo |
| `ship-ready-pr.md` | PR quality |
| `operate-handover.md` | Hand operators the cycle |

## Hard rules

1. Load `context/agent-context.md` first.
2. Never invent Ceramic APIs.
3. Never skip learning review after a real project build.
4. Never silently edit Ceramic.
5. Depth ≤ 3; no auto-merge.
