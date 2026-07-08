import { motion } from 'framer-motion'
import {
  Code2,
  Sparkles,
  Workflow,
  Plug,
  Cloud,
  Container,
  Database,
  TerminalSquare,
  type LucideIcon,
} from 'lucide-react'
import type { SkillCategory } from '../utils/data'

const iconMap: Record<SkillCategory['icon'], LucideIcon> = {
  code: Code2,
  sparkles: Sparkles,
  workflow: Workflow,
  plug: Plug,
  cloud: Cloud,
  container: Container,
  database: Database,
  terminal: TerminalSquare,
}

type SkillCardProps = {
  category: SkillCategory
  index: number
}

export function SkillCard({ category, index }: SkillCardProps) {
  const Icon = iconMap[category.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="card-surface group rounded-2xl p-6 transition-shadow hover:shadow-lg hover:shadow-azure-500/5"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-azure-500/10 text-azure-600 transition-colors group-hover:bg-azure-500 group-hover:text-white dark:bg-sky-400/10 dark:text-sky-300 dark:group-hover:bg-sky-400 dark:group-hover:text-ink-950">
        <Icon size={19} />
      </div>
      <h3 className="mb-3 text-sm font-semibold text-ink-900 dark:text-white">{category.title}</h3>
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-ink-50 px-2 py-1 text-xs text-ink-700/80 dark:bg-ink-800 dark:text-ink-200/80"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
