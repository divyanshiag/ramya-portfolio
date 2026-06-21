import { motion, useReducedMotion } from 'framer-motion'
import { siteContent } from '../../data/siteContent'
import { SectionHeading } from '../ui/SectionHeading'
import { PortraitFrame } from '../ui/PortraitFrame'

export function MemoryGallery() {
  const reduce = useReducedMotion()
  const { gallery } = siteContent

  return (
    <section id="gallery" className="mb-20 scroll-mt-28 sm:mb-24">
      <SectionHeading
        eyebrow="Snapshots"
        title="Memory gallery"
        subtitle="A pocketful of light — swap these placeholders for your own favorite frames."
      />
      <motion.div
        className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.08 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
        }}
      >
        {gallery.map((g, i) => (
          <motion.figure
            key={g.id}
            variants={{
              hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 20, scale: reduce ? 1 : 0.97 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-neon-sm ring-1 ring-pink-500/15 transition hover:border-pink-400/45 hover:shadow-neon-md"
          >
            <PortraitFrame
              variant="gallery"
              path={g.src}
              alt={g.alt}
              width={600}
              height={750}
              loading="lazy"
              driftPhase={i}
              hoverScale
              overlayClass="bg-gradient-to-t from-void-950/40 via-transparent to-transparent"
            />
            <figcaption className="border-t border-white/10 bg-void-900/90 px-3 py-2.5 text-center font-sans text-xs font-medium text-zinc-300 sm:text-sm">
              {g.caption}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  )
}
