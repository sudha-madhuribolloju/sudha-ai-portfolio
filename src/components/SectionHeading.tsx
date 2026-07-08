import { motion } from 'framer-motion'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}
    >
      <p className="font-mono text-xs tracking-[0.2em] uppercase text-azure-500 dark:text-sky-400 mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-ink-700/80 dark:text-ink-200/70 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
