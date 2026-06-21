import { motion, useReducedMotion } from 'framer-motion'

const diamonds = [
  { top: '8%', left: '6%', size: 14, delay: 0, duration: 6 },
  { top: '22%', right: '8%', size: 10, delay: 0.5, duration: 7.5 },
  { top: '45%', left: '3%', size: 12, delay: 1, duration: 8 },
  { top: '60%', right: '12%', size: 16, delay: 0.2, duration: 6.5 },
  { top: '78%', left: '15%', size: 9, delay: 0.8, duration: 9 },
  { top: '88%', right: '20%', size: 11, delay: 1.2, duration: 7 },
]

export function FloatingDecor() {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        {diamonds.map((d, i) => (
          <div
            key={i}
            className="absolute rotate-45 rounded-sm bg-gradient-to-br from-pink-300/20 to-rose-500/12"
            style={{
              top: d.top,
              left: d.left,
              right: d.right,
              width: d.size,
              height: d.size,
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {diamonds.map((d, i) => (
        <motion.div
          key={i}
          className="absolute rotate-45 rounded-sm bg-gradient-to-br from-pink-300/30 to-rose-600/18 shadow-neon-sm"
          style={{
            top: d.top,
            left: d.left,
            right: d.right,
            width: d.size,
            height: d.size,
          }}
          animate={{
            y: [0, -14, 0],
            opacity: [0.35, 0.75, 0.35],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: d.delay,
          }}
        />
      ))}
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-pink-600/18 blur-[100px] animate-glow-pulse" />
      <div className="absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-rose-500/14 blur-[100px] animate-glow-pulse" />
    </div>
  )
}
