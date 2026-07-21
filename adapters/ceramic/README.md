# Ceramic adapter

How the Utopia Design Agent talks to [Ceramic Design System](https://github.com/The-Utopia-Studio/Ceramic-Design-System).

## Contract

Ceramic owns: packages, manifests, themes, CLI, MCP, `utopia-ds init` for **consumers**.  
This adapter owns: discovery commands, env layout, and “never invent API” rules for the Central Design Agent.

## Layout

Preferred sibling checkout:

```
Utopia Design/
  Ceramic-Design-System/
  utopia-design-agent/     ← you are here
```

Or set `CERAMIC_ROOT` to the Ceramic clone.

## Commands

```bash
# From consumer project or via npx
npx utopia-ds manifest --json
npx utopia-ds search "<intent>" --json
npx utopia-ds component <Name> --json
npx utopia-ds doctor --json

# MCP (stdio)
npx --package @utopia-studio-design/design-system-cli utopia-ds mcp
```

If developing Ceramic locally:

```bash
cd "$CERAMIC_ROOT"
npm run ds -- manifest --json
npm run ds:mcp
```

## Rules

1. Discover before invent — see `agents/skills/use-ceramic.md`.
2. Propose Ceramic changes as PRs in the Ceramic repo after a learning review justifies them.
3. Do not copy Ceramic `src/` into products as the source of truth.

## Init (consumer products)

```bash
npx utopia-ds init --theme utopia-default
```

Creates consumer `AGENTS.md` + MCP config. That is the **product** agent surface. This repo is the **central** design agent + knowledge layer.
