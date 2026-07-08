import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import type { ExperienceItem } from '../utils/data'

type ExperienceCardProps = {
  item: ExperienceItem
  index: number
  isLast: boolean
}

export function ExperienceCard({ item, index, isLast }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="relative flex gap-6 pb-12 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-azure-500 text-white shadow-lg shadow-azure-500/30 dark:bg-sky-400 dark:text-ink-950">
          <Briefcase size={16} />
        </span>
        {!isLast && <span className="mt-2 w-px flex-1 bg-gradient-to-b from-azure-400/50 to-transparent" />}
      </div>

      <div className="card-surface flex-1 rounded-2xl p-6">
        <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-base font-semibold text-ink-900 dark:text-white">{item.role}</h3>
          <span className="font-mono text-xs text-azure-600 dark:text-sky-300">{item.duration}</span>
        </div>
        <p className="mb-4 text-sm font-medium text-ink-700/80 dark:text-ink-200/70">{item.company}</p>
        <ul className="space-y-2.5">
          {item.points.map((point) => (
            <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-700/80 dark:text-ink-200/70">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-azure-400" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
