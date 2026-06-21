const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#milestones', label: 'Milestones' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#loves', label: 'Loves' },
  { href: '#growth', label: 'Growth' },
  { href: '#parents', label: 'Letter' },
]

export function SiteNav() {
  return (
    <nav
      aria-label="Page sections"
      className="sticky top-4 z-50 mb-8 flex justify-center sm:top-6"
    >
      <div className="flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-white/10 bg-void-900/85 px-1.5 py-1.5 shadow-neon-md backdrop-blur-xl [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-1 sm:px-2 [&::-webkit-scrollbar]:hidden">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-full px-3 py-2 font-sans text-xs font-semibold text-zinc-400 transition hover:bg-pink-500/15 hover:text-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400 sm:text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
