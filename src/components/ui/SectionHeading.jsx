import { Reveal } from './Reveal'

export function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'

  return (
    <div className={`mb-10 sm:mb-12 ${alignClass}`}>
      {eyebrow ? (
        <Reveal>
          <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="text-gradient-neon">{title}</span>
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.1}>
          <p
            className={`mt-3 font-sans text-base leading-relaxed text-zinc-400 sm:text-lg ${
              align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
