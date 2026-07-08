import { motion } from 'framer-motion'

const nodes = [
  { id: 'orchestrator', x: 210, y: 60, label: 'Agent', primary: true },
  { id: 'rag', x: 70, y: 170, label: 'RAG' },
  { id: 'mcp', x: 210, y: 210, label: 'MCP' },
  { id: 'api', x: 350, y: 170, label: 'API' },
  { id: 'db', x: 350, y: 280, label: 'DB' },
  { id: 'tools', x: 70, y: 280, label: 'Tools' },
]

const edges: [string, string][] = [
  ['orchestrator', 'rag'],
  ['orchestrator', 'mcp'],
  ['orchestrator', 'api'],
  ['mcp', 'db'],
  ['mcp', 'tools'],
  ['rag', 'tools'],
  ['api', 'db'],
]

function nodeById(id: string) {
  return nodes.find((n) => n.id === id)!
}

export function AgentNetworkGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 420 340" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="edge-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {edges.map(([from, to], i) => {
          const a = nodeById(from)
          const b = nodeById(to)
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#edge-gradient)"
              strokeWidth={1.5}
              strokeDasharray="6 6"
              className="dark:opacity-70"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.15 * i, ease: 'easeOut' }}
              style={{ animation: 'dash 2.4s linear infinite' }}
            />
          )
        })}

        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * i, ease: 'easeOut' }}
          >
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.primary ? 30 : 24}
              className={
                node.primary
                  ? 'fill-azure-500 dark:fill-sky-400'
                  : 'fill-white stroke-azure-400/60 dark:fill-ink-900 dark:stroke-sky-400/50'
              }
              strokeWidth={node.primary ? 0 : 1.5}
              animate={node.primary ? { scale: [1, 1.06, 1] } : undefined}
              transition={node.primary ? { duration: 2.6, repeat: Infinity, ease: 'easeInOut' } : undefined}
            />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              className={
                node.primary
                  ? 'fill-white font-mono text-[11px] font-medium'
                  : 'fill-ink-700 font-mono text-[10px] font-medium dark:fill-ink-200'
              }
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  )
}
