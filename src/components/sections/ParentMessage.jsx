import { motion, useReducedMotion } from 'framer-motion'
import { siteContent } from '../../data/siteContent'
import { SectionHeading } from '../ui/SectionHeading'
import { SoftCard } from '../ui/SoftCard'

export function ParentMessage() {
  const reduce = useReducedMotion()
  const { parentMessage } = siteContent

  return (
    <section id="parents" className="mb-20 scroll-mt-28 sm:mb-24">
      <SectionHeading
        eyebrow="A note for you"
        title="Message from parents"
        subtitle="For rainy days, big feelings, and all the chapters still unwritten."
      />
      <motion.div
        initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduce ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <SoftCard variant="default" className="relative overflow-hidden px-6 py-10 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-8 top-0 font-display text-[8rem] leading-none text-fuchsia-500/[0.12] sm:text-[10rem]">
            &ldquo;
          </div>
          <blockquote className="relative mx-auto max-w-3xl text-center">
            <p className="font-display text-xl italic leading-relaxed text-zinc-200 sm:text-2xl lg:text-[1.65rem] lg:leading-relaxed">
              {parentMessage.quote}
            </p>
            <footer className="mt-8 font-sans text-sm font-semibold tracking-wide text-fuchsia-300/90 sm:text-base">
              {parentMessage.attribution}
            </footer>
          </blockquote>
        </SoftCard>
      </motion.div>
    </section>
  )
}
