import { motion, useReducedMotion } from 'framer-motion'
import { siteContent } from '../../data/siteContent'
import { SectionHeading } from '../ui/SectionHeading'
import { SoftCard } from '../ui/SoftCard'
import { approximateAgeLabel, daysOldFromISO } from '../../utils/age'

export function GrowthTracker() {
  const reduce = useReducedMotion()
  const { growthStats, growthDisclaimer, birthDate, babyName } = siteContent
  const days = daysOldFromISO(birthDate)
  const ageLabel = approximateAgeLabel(birthDate)

  const stats = [
    ...growthStats,
    {
      id: 'computed-days',
      label: 'Days in this world',
      value: String(days),
      hint: 'From her first hello to today',
    },
    {
      id: 'computed-age',
      label: 'Her little era',
      value: ageLabel,
      hint: 'A gentle estimate of time so far',
    },
  ]

  return (
    <section id="growth" className="mb-20 scroll-mt-28 sm:mb-24">
      <SectionHeading
        eyebrow="Growing fast"
        title="Growth tracker"
        subtitle="A soft ledger of time — heart first, numbers only where they sparkle."
      />
      <p className="mx-auto mb-8 max-w-2xl text-center font-sans text-sm leading-relaxed text-zinc-500 sm:text-base">
        {growthDisclaimer}
      </p>
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: reduce ? 0 : 0.09 } },
        }}
      >
        {stats.map((s, i) => {
          const target = `${65 + ((i * 7) % 30)}%`
          return (
            <motion.div
              key={s.id}
              variants={{
                hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <SoftCard variant={i % 3 === 0 ? 'pink' : i % 3 === 1 ? 'blue' : 'cream'}>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-pink-400/90">
                  {s.label}
                </p>
                <p className="mt-2 font-display text-3xl font-bold text-gradient-neon sm:text-4xl">
                  {s.value}
                </p>
                {s.hint ? (
                  <p className="mt-2 font-sans text-xs text-zinc-500 sm:text-sm">{s.hint}</p>
                ) : null}
                <div className="progress-neon-track mt-4">
                  <motion.div
                    className={`progress-neon-fill ${reduce ? '' : 'animate-progress-shimmer'}`}
                    initial={{ width: reduce ? target : '0%' }}
                    whileInView={{ width: target }}
                    viewport={{ once: true }}
                    transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </SoftCard>
            </motion.div>
          )
        })}
      </motion.div>
      <p className="mt-6 text-center font-sans text-sm italic leading-relaxed text-zinc-400 sm:text-base">
        Celebrating <span className="font-semibold not-italic text-pink-400">{babyName}</span> —{' '}
        each sunrise another page in a story we never tire of reading.
      </p>
    </section>
  )
}
