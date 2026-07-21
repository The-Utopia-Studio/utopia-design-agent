#!/usr/bin/env node
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const required = [
  'AGENTS.md',
  'README.md',
  'docs/architecture.md',
  'docs/knowledge-layer.md',
  'docs/loop.md',
  'knowledge/index/catalog.md',
  'context/agent-context.md',
  'context/principles.md',
  'adapters/ceramic/README.md',
  'agents/loops/central-design-cycle.md',
  'agents/skills/refine-memory.md',
  'agents/skills/learning-review.md',
  'agents/skills/use-ceramic.md',
]

const missing = required.filter((rel) => !existsSync(join(root, rel)))
if (missing.length) {
  console.error('Missing required paths:\n' + missing.map((m) => `  - ${m}`).join('\n'))
  process.exit(1)
}
console.log(`Structure OK (${required.length} paths).`)
