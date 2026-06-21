import { motion, useReducedMotion } from 'framer-motion'
import { siteContent } from '../../data/siteContent'
import { SectionHeading } from '../ui/SectionHeading'
import { SoftCard } from '../ui/SoftCard'
import { LucideByName } from '../../lib/lucideIcon'

export function MilestonesTimeline() {
  const reduce = useReducedMotion()
  const { milestones } = siteContent

  return (
    <section id="milestones" className="mb-20 scroll-mt-28 sm:mb-24">
      <SectionHeading
        eyebrow="Little wins"
        title="Milestones"
        subtitle="The moments we want to remember forever — big and beautifully small."
      />
      <div className="relative mx-auto max-w-2xl pl-2 sm:pl-4">
        <div
          className="absolute left-[21px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-fuchsia-500 to-violet-600 opacity-70 sm:left-[25px]"
          aria-hidden
        />
        <motion.ul
          className="relative space-y-8 sm:space-y-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            show: {
              transition: { staggerChildren: reduce ? 0 : 0.14 },
            },
            hidden: {},
          }}
        >
          {milestones.map((m, index) => (
            <motion.li
              key={m.id}
              variants={{
                hidden: { opacity: reduce ? 1 : 0, x: reduce ? 0 : -12 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="relative flex gap-5 pl-10 sm:gap-6 sm:pl-12"
            >
              <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-fuchsia-500/50 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-neon-md sm:left-1 sm:top-6 sm:h-11 sm:w-11">
                <LucideByName name={m.icon} className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" strokeWidth={2} />
              </div>
              <SoftCard variant={index % 2 === 0 ? 'pink' : 'blue'} className="min-w-0 flex-1">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-fuchsia-300/90">
                  {m.date}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-white">{m.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {m.body}
                </p>
              </SoftCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
