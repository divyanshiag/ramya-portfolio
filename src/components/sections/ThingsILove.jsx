import { motion, useReducedMotion } from 'framer-motion'
import { siteContent } from '../../data/siteContent'
import { SectionHeading } from '../ui/SectionHeading'
import { LucideByName } from '../../lib/lucideIcon'

const toneClasses = [
  'border-pink-500/30 from-pink-950/45 to-zinc-900/60 shadow-neon-sm',
  'border-rose-500/28 from-rose-950/35 to-zinc-900/60 shadow-neon-sm',
  'border-pink-400/22 from-zinc-900/85 to-pink-950/30 shadow-neon-md',
  'border-rose-400/25 from-rose-950/30 to-zinc-900/65 shadow-neon-sm',
]

export function ThingsILove() {
  const reduce = useReducedMotion()
  const { loves, babyName } = siteContent

  return (
    <section id="loves" className="mb-20 scroll-mt-28 sm:mb-24">
      <SectionHeading
        eyebrow="Favorites"
        title="Things I love"
        subtitle={`Tiny joys that make ${babyName} light up from head to toe.`}
      />
      <motion.ul
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: reduce ? 0 : 0.07 } },
        }}
      >
        {loves.map((love, i) => (
          <motion.li
            key={love.id}
            variants={{
              hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: reduce ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <motion.div
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ type: 'spring', stiffness: 360, damping: 22 }}
              className={`flex items-center gap-4 rounded-2xl border bg-gradient-to-br p-4 backdrop-blur-md sm:p-5 ${toneClasses[i % toneClasses.length]}`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/80 text-pink-400 shadow-neon-sm">
                <LucideByName name={love.icon} className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <span className="font-display text-lg font-bold text-white sm:text-xl">
                {love.label}
              </span>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
