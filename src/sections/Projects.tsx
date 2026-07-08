import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../utils/data'

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 sm:py-28 dark:bg-ink-900/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected builds"
          description="Representative AI agent, RAG and automation projects drawn from my day-to-day work."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
