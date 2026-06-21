import { Heart } from 'lucide-react'
import { siteContent } from '../../data/siteContent'

export function Footer() {
  const { footer, babyFullName } = siteContent

  return (
    <footer
      id="footer"
      className="mt-4 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-void-900 via-fuchsia-950/30 to-void-900 px-6 py-10 text-center shadow-neon-lg backdrop-blur-xl sm:px-10"
    >
      <div className="mx-auto flex max-w-lg flex-col items-center gap-3">
        <Heart
          className="h-8 w-8 text-fuchsia-400 drop-shadow-[0_0_12px_rgba(232,121,249,0.6)]"
          fill="currentColor"
          strokeWidth={1.25}
          aria-hidden
        />
        <p className="font-display text-lg font-bold sm:text-xl">
          <span className="text-gradient-neon">{babyFullName}&apos;s portfolio</span>
        </p>
        <p className="font-sans text-sm text-zinc-400">{footer.note}</p>
        <p className="font-sans text-xs text-zinc-500">
          © {footer.year} — crafted with care for family and friends.
        </p>
      </div>
    </footer>
  )
}
