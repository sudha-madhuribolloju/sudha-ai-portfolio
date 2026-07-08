import { SectionHeading } from '../components/SectionHeading'
import { CertificationCard } from '../components/CertificationCard'
import { certifications } from '../utils/data'

export function Certifications() {
  return (
    <section id="certifications" className="bg-white py-20 sm:py-28 dark:bg-ink-900/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications"
          title="Currently building this out"
          description="Reserved space for upcoming certifications — swap these placeholders for your own credentials."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item, i) => (
            <CertificationCard key={item.title + i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
