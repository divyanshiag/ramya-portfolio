const variants = {
  default:
    'border-white/10 bg-white/[0.04] shadow-neon-sm backdrop-blur-xl ring-1 ring-white/[0.06]',
  pink: 'border-fuchsia-500/25 bg-fuchsia-950/25 shadow-neon-md backdrop-blur-xl ring-1 ring-fuchsia-500/15',
  blue: 'border-cyan-400/25 bg-cyan-950/20 shadow-neon-sm backdrop-blur-xl ring-1 ring-cyan-400/15',
  cream: 'border-violet-500/20 bg-violet-950/20 shadow-neon-md backdrop-blur-xl ring-1 ring-violet-400/12',
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
