---
name: use-ceramic
description: >
  Discover Ceramic contracts via CLI/MCP before generating or editing UI.
---

# Skill: use Ceramic

## Steps

1. Orient: `npx utopia-ds manifest --json` (or local `npm run ds` in `CERAMIC_ROOT`).
2. Search: `npx utopia-ds search "<intent>" --json`.
3. Inspect component/template/theme/motion as needed.
4. Arabic/RTL: `npx utopia-ds docs arabic-friendly --dense` when relevant.
5. Implement with `@utopia-studio-design/design-system` + semantic tokens.
6. Validate: `npx utopia-ds doctor --json`.

## Forbidden

Invent props, tokens, imports, Arabic copy, or left/right-only APIs.

## Done when

Discovery cited; doctor scoped green; no invented APIs.
