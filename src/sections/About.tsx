import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { aboutHighlights, aboutSummary, profile } from '../utils/data'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="About Me" title="Shipping AI that holds up in production" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-base leading-relaxed text-ink-700/80 dark:text-ink-200/70">{aboutSummary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-azure-500/10 px-4 py-2 text-sm font-medium text-azure-600 dark:bg-sky-400/10 dark:text-sky-300">
                {profile.yearsExperience} years in Generative AI
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-ink-50 px-4 py-2 text-sm font-medium text-ink-700/80 dark:bg-ink-800 dark:text-ink-200/80">
                {profile.location}
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {aboutHighlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
                className="card-surface rounded-2xl p-5"
              >
                <p className="text-sm font-semibold leading-snug text-ink-900 dark:text-white">{item.value}</p>
                <p className="mt-1.5 text-xs text-ink-700/60 dark:text-ink-200/50">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
