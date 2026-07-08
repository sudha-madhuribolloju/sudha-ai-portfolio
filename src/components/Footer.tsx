import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../utils/data'

export function Footer() {
  return (
    <footer className="border-t border-ink-100 py-10 dark:border-ink-800">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-sm text-ink-700/70 dark:text-ink-200/60 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.</p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-azure-600 dark:hover:text-sky-300">
            <Mail size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-azure-600 dark:hover:text-sky-300">
            <Linkedin size={17} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-azure-600 dark:hover:text-sky-300">
            <Github size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}
