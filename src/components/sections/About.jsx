import { motion, useReducedMotion } from 'framer-motion'
import { siteContent } from '../../data/siteContent'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { SoftCard } from '../ui/SoftCard'
import { publicUrl } from '../../utils/publicUrl'

export function About() {
  const reduce = useReducedMotion()
  const { aboutParagraphs, aboutPortrait, babyFullName } = siteContent

  return (
    <section id="about" className="mb-20 scroll-mt-28 sm:mb-24">
      <SectionHeading
        eyebrow="Chapter one"
        title="About me"
        subtitle={`A few words about ${babyFullName} — the heart of our home.`}
      />
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className="flex justify-center lg:justify-start">
          <motion.div
            whileHover={reduce ? undefined : { scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="relative w-full max-w-md"
          >
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-fuchsia-600/30 to-cyan-500/20 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-fuchsia-500/35 bg-zinc-900/40 shadow-neon-lg ring-1 ring-cyan-400/15">
              <img
                src={publicUrl(aboutPortrait.src)}
                alt={aboutPortrait.alt}
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void-950/50 to-transparent" />
            </div>
          </motion.div>
        </Reveal>
        <div className="space-y-6">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <SoftCard variant={i % 2 === 0 ? 'pink' : 'blue'}>
                <p className="font-sans text-base leading-relaxed text-zinc-300 sm:text-lg">{p}</p>
              </SoftCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
