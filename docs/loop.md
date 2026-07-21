# Loop engineering

Bounded recursion for the Utopia Design Agent. Humans set outcomes and merge gates; agents iterate.

## Contract (every loop)

| Field | Required |
|-------|----------|
| Goal | One measurable outcome |
| Done when | Checklist |
| Max iterations / depth | Default depth ≤ 3 |
| Forbidden moves | Invent Ceramic APIs; skip learning review; auto-merge; silent Ceramic edits |
| Artifacts | Paths written under `knowledge/`, `context/`, or consumer/Ceramic PRs |
| Human gate | Merge, npm publish, irreversible deletes |

## Primary loop

`agents/loops/central-design-cycle.md` — Aiden’s five-stage cycle.

## Supporting loops

| Loop | Role |
|------|------|
| `project-build.md` | Execute a bounded UI/theme build with Ceramic |
| `learning-review.md` (skill-driven) | Turn outcomes into reusable knowledge |
| `improve-agent.md` | Raise this repo’s scorecard via research queue |
| `ship-ready-pr.md` | Merge-ready PR hygiene |
| `operate-handover.md` | Teach operators to run the cycle |

## Self-recursion rules

1. Depth ≤ 3.
2. Child inherits forbidden moves.
3. Recurse only if score/queue/knowledge quality improved.
4. Same failure twice → stop + `context/learnings.md`.
5. **Never** skip “Reusable learning review” after a real project build.

## Cadence

| When | Loop |
|------|------|
| Every design project | `central-design-cycle` |
| After capture backlog grows | `refine-memory` |
| Weekly | `improve-agent` (1 gap) |
| Never unattended | Ceramic publish, force-push, auto-merge |
