# Agent context (refined memory)

Loaded every Central Design Agent run. Kept short on purpose — detail lives in `knowledge/`.

## Architecture

- Stack: **Ceramic → Knowledge Layer → Agent** ([DK-20260720-aiden-stack](../knowledge/decisions/DK-20260720-aiden-stack.md)).
- After builds: decisions/outcomes → learning review → context and/or Ceramic update → loop ([DK-20260720-learning-loop](../knowledge/decisions/DK-20260720-learning-loop.md)).
- This repo owns memory/agent; Ceramic owns publishable contracts ([DK-20260722-ceramic-boundary](../knowledge/decisions/DK-20260722-ceramic-boundary.md)).

## Ceramic (defaults)

- Discover with `utopia-ds` / MCP before writing UI.
- Semantic tokens only in reusable UI; themes own brand.
- Logical CSS / start-end APIs; Arabic/RTL is first-class.
- Prefer themeable `Select` over `NativeSelect` when the open menu must follow theme tokens.

## Memory hygiene

- New episode → update `knowledge/index/catalog.md`.
- After review → run `refine-memory`; only promote reusable rules here.
- Failures are first-class; do not bury them in chat.

## Open focus

See `context/research-queue.md` for the next improve items.
