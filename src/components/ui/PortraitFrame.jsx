import { motion, useReducedMotion } from 'framer-motion'
import { publicUrl } from '../../utils/publicUrl'

/**
 * Photo wrapper: portrait-friendly framing and soft animated shapes behind the subject.
 *
 * @param {object} props
 * @param {string} props.path - Public path, e.g. `photos/hero.png`
 * @param {string} props.alt
 * @param {number} props.width
 * @param {number} props.height
 * @param {'eager'|'lazy'} [props.loading]
 * @param {'hero'|'about'|'gallery'} [props.variant]
 * @param {number} [props.driftPhase] - offsets motion in grids (e.g. index % 3)
 * @param {string} [props.overlayClass] - full classes for overlay on the image (e.g. bg-gradient-to-t …)
 * @param {boolean} [props.hoverScale] - spring scale on hover (gallery)
 * @param {boolean} [props.showOuterHalo] - extra soft halo outside the frame (hero / about)
 * @param {React.ReactNode} [props.children] - overlays (badges); use pointer-events-none inside
 */
export function PortraitFrame({
  path,
  alt,
  width,
  height,
  loading = 'lazy',
  variant = 'gallery',
  driftPhase = 0,
  overlayClass,
  hoverScale = false,
  showOuterHalo = false,
  children,
}) {
  const reduce = useReducedMotion()
  const src = publicUrl(path)

  const isLarge = variant === 'hero' || variant === 'about'
  const innerRadius = isLarge ? 'rounded-[2rem]' : 'rounded-none'
  const chrome =
    variant === 'gallery'
      ? 'border-0 bg-transparent shadow-none ring-0'
      : 'border border-pink-500/45 bg-zinc-900/50 shadow-neon-lg ring-2 ring-pink-400/25'

  const driftDelays = ['0s', '-2.2s', '-4.4s']
  const driftDelay = driftDelays[((driftPhase % 3) + 3) % 3]

  const imgClass =
    'relative z-[1] aspect-[4/5] w-full object-cover [object-position:center_22%] transition duration-500 group-hover:brightness-110'

  const imgEl = (
    <img src={src} alt={alt} width={width} height={height} className={imgClass} loading={loading} decoding="async" />
  )

  const imgBlock = hoverScale ? (
    <motion.div
      className="relative z-[1]"
      whileHover={reduce ? undefined : { scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      {imgEl}
    </motion.div>
  ) : (
    imgEl
  )

  return (
    <div className="group relative w-full">
      {showOuterHalo && !reduce ? (
        <div
          className={`pointer-events-none absolute -inset-3 ${isLarge ? 'rounded-[2rem]' : 'rounded-2xl'} bg-gradient-to-tr from-pink-600/28 via-transparent to-rose-500/22 blur-2xl`}
          aria-hidden
        />
      ) : null}

      <div className={`relative overflow-hidden ${innerRadius} ${chrome}`}>
        <div
          className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${isLarge ? 'rounded-[2rem]' : ''}`}
          aria-hidden
        >
          {!reduce ? (
            <>
              <div
                className="animate-blob-drift-1 absolute -left-[8%] -top-[10%] h-[65%] w-[70%] rounded-full bg-gradient-to-br from-pink-500/35 via-pink-400/12 to-transparent blur-2xl"
                style={{ animationDelay: driftDelay }}
              />
              <div
                className="animate-blob-drift-2 absolute -bottom-[12%] -right-[6%] h-[62%] w-[65%] rounded-full bg-gradient-to-tl from-rose-500/30 via-rose-400/10 to-transparent blur-2xl"
                style={{ animationDelay: driftDelay }}
              />
              <div
                className="animate-spin-slow absolute left-1/2 top-1/2 h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-pink-400/18 opacity-50"
                style={{ animationDelay: driftDelay }}
              />
              <div
                className="animate-blob-drift-3 absolute bottom-[5%] left-[15%] h-[38%] w-[42%] rounded-full bg-pink-600/18 blur-3xl"
                style={{ animationDelay: driftDelay }}
              />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/14 to-rose-600/10 blur-xl" />
          )}
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-zinc-950/35 via-transparent to-zinc-950/45"
          aria-hidden
        />

        {imgBlock}

        {overlayClass ? (
          <div className={`pointer-events-none absolute inset-0 z-[2] ${overlayClass}`} aria-hidden />
        ) : null}

        {children ? <div className="pointer-events-none absolute inset-0 z-[3]">{children}</div> : null}
      </div>
    </div>
  )
}
