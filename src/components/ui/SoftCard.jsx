const variants = {
  default:
    'border-white/10 bg-white/[0.04] shadow-neon-sm backdrop-blur-xl ring-1 ring-white/[0.06]',
  pink: 'border-pink-500/30 bg-pink-950/25 shadow-neon-md backdrop-blur-xl ring-1 ring-pink-500/18',
  blue: 'border-rose-400/25 bg-rose-950/20 shadow-neon-sm backdrop-blur-xl ring-1 ring-rose-400/15',
  cream: 'border-zinc-600/40 bg-zinc-900/50 shadow-neon-sm backdrop-blur-xl ring-1 ring-pink-500/10',
}

export function SoftCard({ children, className = '', variant = 'default' }) {
  return (
    <div
      className={`rounded-3xl border p-5 sm:p-6 ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  )
}
