import { FloatingDecor } from './FloatingDecor'

export function PageShell({ children }) {
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-void-950">
      <FloatingDecor />
      <div className="pointer-events-none fixed inset-0 -z-10 grid-neon opacity-90" />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}
