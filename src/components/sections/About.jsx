import { motion, useReducedMotion } from 'framer-motion'
import { siteContent } from '../../data/siteContent'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { SoftCard } from '../ui/SoftCard'
import { PortraitFrame } from '../ui/PortraitFrame'

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
            <PortraitFrame
              variant="about"
              path={aboutPortrait.src}
              alt={aboutPortrait.alt}
              width={800}
              height={1000}
              loading="lazy"
              showOuterHalo
              driftPhase={1}
              overlayClass="bg-gradient-to-t from-void-950/50 via-transparent to-transparent"
            />
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
