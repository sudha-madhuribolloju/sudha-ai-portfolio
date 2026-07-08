import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Download, MapPin } from 'lucide-react'
import { profile } from '../utils/data'
import { RotatingWords } from '../components/RotatingWords'
import { AgentNetworkGraphic } from '../components/AgentNetworkGraphic'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.12),transparent)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.14),transparent)]"
      />

      <div className="section-container grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-1.5 text-xs font-medium text-ink-700/80 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200/80"
          >
            <MapPin size={13} className="text-azure-500 dark:text-sky-400" />
            {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-4 text-xl font-medium text-azure-600 dark:text-sky-300 sm:text-2xl"
          >
            {profile.role} —{' '}
            <RotatingWords words={['RAG Pipelines', 'MCP Servers', 'Multi-Agent Systems', 'LLM Workflows']} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-700/80 dark:text-ink-200/70"
          >
            {profile.tagline} 3.6 years turning Generative AI ideas into dependable, production-grade software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-azure-600 dark:bg-white dark:text-ink-900 dark:hover:bg-sky-300"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-3 text-sm font-medium text-ink-800 transition-colors hover:border-azure-400 hover:text-azure-600 dark:border-ink-700 dark:text-ink-100 dark:hover:border-sky-400 dark:hover:text-sky-300"
            >
              Contact Me
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex items-center gap-5"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:border-azure-400 hover:text-azure-600 dark:border-ink-700 dark:text-ink-100 dark:hover:border-sky-400 dark:hover:text-sky-300"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:border-azure-400 hover:text-azure-600 dark:border-ink-700 dark:text-ink-100 dark:hover:border-sky-400 dark:hover:text-sky-300"
            >
              <Github size={17} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="relative animate-float"
        >
          <AgentNetworkGraphic />
        </motion.div>
      </div>
    </section>
  )
}
