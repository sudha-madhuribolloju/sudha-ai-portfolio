import { motion } from 'framer-motion'
import { Award, Plus } from 'lucide-react'
import type { Certification } from '../utils/data'

type CertificationCardProps = {
  item: Certification
  index: number
}

export function CertificationCard({ item, index }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      className="flex flex-col items-start gap-3 rounded-2xl border border-dashed border-ink-200 p-6 text-left transition-colors hover:border-azure-400 dark:border-ink-700 dark:hover:border-sky-400"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-50 text-ink-400 dark:bg-ink-800 dark:text-ink-500">
        <Award size={18} />
      </span>
      <div>
        <p className="text-sm font-semibold text-ink-700 dark:text-ink-200">{item.title}</p>
        <p className="mt-1 text-xs text-ink-700/60 dark:text-ink-200/50">{item.issuer}</p>
      </div>
      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-azure-500 dark:text-sky-400">
        <Plus size={12} />
        Placeholder
      </span>
    </motion.div>
  )
}
