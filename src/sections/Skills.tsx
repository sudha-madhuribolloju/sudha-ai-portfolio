import { SectionHeading } from '../components/SectionHeading'
import { SkillCard } from '../components/SkillCard'
import { skillCategories } from '../utils/data'

export function Skills() {
  return (
    <section id="skills" className="bg-white py-20 sm:py-28 dark:bg-ink-900/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to build agentic AI systems"
          description="From prompt-level engineering down to the cloud infrastructure that keeps it running."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
