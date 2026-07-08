import { motion } from 'framer-motion'
import { Github, ExternalLink, Check } from 'lucide-react'
import type { Project } from '../utils/data'
import { Badge } from './Badge'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -5 }}
      className="card-surface flex h-full flex-col rounded-2xl p-6 transition-shadow hover:shadow-lg hover:shadow-azure-500/5"
    >
      <h3 className="mb-2 text-base font-semibold text-ink-900 dark:text-white">{project.name}</h3>
      <p className="mb-4 text-sm leading-relaxed text-ink-700/80 dark:text-ink-200/70">{project.description}</p>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <ul className="mb-6 space-y-2">
        {project.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-xs leading-relaxed text-ink-700/70 dark:text-ink-200/60">
            <Check size={13} className="mt-0.5 shrink-0 text-azure-500 dark:text-sky-400" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-3 pt-2">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-xs font-medium text-ink-800 transition-colors hover:border-azure-400 hover:text-azure-600 dark:border-ink-700 dark:text-ink-100 dark:hover:border-sky-400 dark:hover:text-sky-300"
        >
          <Github size={14} />
          Code
        </a>
        <a
          href={project.demo ?? '#contact'}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-azure-600 dark:bg-white dark:text-ink-900 dark:hover:bg-sky-300"
        >
          <ExternalLink size={14} />
          Live Demo
        </a>
      </div>
    </motion.div>
  )
}
