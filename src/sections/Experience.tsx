import { SectionHeading } from '../components/SectionHeading'
import { ExperienceCard } from '../components/ExperienceCard'
import { experience } from '../utils/data'

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built these systems"
          description="Nearly four years embedded with product and engineering teams, shipping Generative AI end to end."
        />

        <div className="mt-12 max-w-3xl">
          {experience.map((item, i) => (
            <ExperienceCard key={item.company} item={item} index={i} isLast={i === experience.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
