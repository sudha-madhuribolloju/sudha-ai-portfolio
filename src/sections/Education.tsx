import { SectionHeading } from '../components/SectionHeading'
import { EducationCard } from '../components/EducationCard'
import { education } from '../utils/data'

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-12 grid max-w-3xl gap-5">
          {education.map((item, i) => (
            <EducationCard key={item.degree} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
