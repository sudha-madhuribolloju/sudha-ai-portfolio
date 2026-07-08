import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { ContactForm } from '../components/ContactForm'
import { profile } from '../utils/data'

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: 'linkedin.com/in/sudha-ai', href: profile.linkedin },
  { icon: Github, label: 'github.com/sudha-madhuribolloju', href: profile.github },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to AI engineering roles, freelance builds, and collaborations on agentic AI systems."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-4"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-1.5 text-xs font-medium text-ink-700/80 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200/80">
              <MapPin size={13} className="text-azure-500 dark:text-sky-400" />
              {profile.location}
            </div>

            {contactLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="card-surface flex items-center gap-3 rounded-xl p-4 text-sm text-ink-700/80 transition-colors hover:border-azure-400 hover:text-azure-600 dark:text-ink-200/70 dark:hover:border-sky-400 dark:hover:text-sky-300"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-azure-500/10 text-azure-600 dark:bg-sky-400/10 dark:text-sky-300">
                  <Icon size={16} />
                </span>
                {label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
