import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import type { EducationItem } from '../utils/data'

type EducationCardProps = {
  item: EducationItem
  index: number
}

export function EducationCard({ item, index }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      className="card-surface flex gap-4 rounded-2xl p-6"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-azure-500/10 text-azure-600 dark:bg-sky-400/10 dark:text-sky-300">
        <GraduationCap size={20} />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-ink-900 dark:text-white">{item.degree}</h3>
        {item.institution && (
          <p className="mt-1 text-sm text-ink-700/80 dark:text-ink-200/70">{item.institution}</p>
        )}
        {item.affiliation && (
          <p className="mt-0.5 text-xs text-ink-700/60 dark:text-ink-200/50">{item.affiliation}</p>
        )}
        <p className="mt-2 font-mono text-xs text-azure-600 dark:text-sky-300">{item.detail}</p>
      </div>
    </motion.div>
  )
}
