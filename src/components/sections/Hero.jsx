import { motion, useReducedMotion } from 'framer-motion'
import { siteContent } from '../../data/siteContent'
import { Reveal } from '../ui/Reveal'
import { PortraitFrame } from '../ui/PortraitFrame'
import { daysOldFromISO } from '../../utils/age'

const makeContainer = (reduce) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: reduce ? 0 : 0.12,
      delayChildren: reduce ? 0 : 0.05,
    },
  },
})

const makeItem = (reduce) => ({
  hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] },
  },
})

export function Hero() {
  const reduce = useReducedMotion()
  const { babyName, tagline, birthDate, birthTime, heroImage } = siteContent
  const days = daysOldFromISO(birthDate)
  const bornLabel = new Date(birthDate + 'T12:00:00').toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  const bornWithTime = `${bornLabel} · ${birthTime}`

  return (
    <header
      id="hero"
      className="glass-panel relative mb-16 scroll-mt-28 overflow-hidden px-5 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pink-600/22 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-rose-600/16 blur-3xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <motion.div
          variants={makeContainer(reduce)}
          initial="hidden"
          animate="show"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.div variants={makeItem(reduce)} className="mb-4 flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/35 bg-pink-500/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-pink-300 shadow-neon-sm sm:text-xs">
              <span
                className="relative flex h-2 w-2"
                aria-hidden
              >
                {!reduce ? (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-60" />
                ) : null}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-400" />
              </span>
              Little legend online
            </span>
          </motion.div>
          <motion.p
            variants={makeItem(reduce)}
            className="mb-2 font-sans text-sm font-medium text-zinc-400"
          >
            Hi, welcome to
          </motion.p>
          <motion.h1
            variants={makeItem(reduce)}
            className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient-neon">{babyName}&apos;s world</span>
          </motion.h1>

          <motion.div variants={makeItem(reduce)} className="mx-auto mt-6 max-w-md lg:mx-0">
            <p className="mb-1 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500 sm:text-xs">
              <span>Growing strong</span>
              <span className="text-pink-400/95">
                {Math.min(100, Math.round((days / 365) * 100))}% · year one
              </span>
            </p>
            <div className="progress-neon-track">
              <motion.div
                className="progress-neon-fill animate-progress-shimmer"
                initial={{ width: reduce ? '12%' : '0%' }}
                animate={{ width: `${Math.min(100, 8 + (days / 365) * 100)}%` }}
                transition={{ duration: reduce ? 0 : 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              />
            </div>
          </motion.div>

          <motion.p
            variants={makeItem(reduce)}
            className="mt-5 max-w-xl font-sans text-lg text-zinc-400 sm:text-xl lg:mx-0 lg:mr-auto"
          >
            {tagline}
          </motion.p>
          <motion.div
            variants={makeItem(reduce)}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/60 px-4 py-2 text-sm font-medium text-zinc-200 shadow-neon-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.65)]" aria-hidden />
              Born {bornWithTime}
            </span>
            <a
              href="#about"
              className="btn-neon inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400"
            >
              Peek inside
            </a>
          </motion.div>
        </motion.div>

        <Reveal className="order-1 flex justify-center lg:order-2 lg:justify-end" amount={0.2}>
          <motion.div
            className="relative w-full max-w-[280px] sm:max-w-sm"
            animate={
              reduce
                ? undefined
                : {
                    y: [0, -10, 0],
                  }
            }
            transition={
              reduce
                ? undefined
                : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }
            }
          >
            <PortraitFrame
              variant="hero"
              path={heroImage.src}
              alt={heroImage.alt}
              width={720}
              height={880}
              loading="eager"
              showOuterHalo
              driftPhase={0}
              overlayClass="bg-gradient-to-t from-void-950/80 via-transparent to-pink-500/10"
            >
              <motion.div
                className="absolute left-3 top-3 rounded-lg border border-white/15 bg-zinc-950/70 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wide text-pink-300 shadow-neon-sm backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:text-xs"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.45 }}
              >
                Days {days}+
              </motion.div>
              <motion.div
                className="absolute bottom-3 right-3 rounded-lg border border-white/15 bg-zinc-950/70 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wide text-rose-300 shadow-neon-sm backdrop-blur-md sm:bottom-4 sm:right-4 sm:px-3 sm:text-xs"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.45 }}
              >
                Love XP max
              </motion.div>
            </PortraitFrame>
          </motion.div>
        </Reveal>
      </div>
    </header>
  )
}
