import { PageShell } from './components/layout/PageShell'
import { SiteNav } from './components/layout/SiteNav'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { MilestonesTimeline } from './components/sections/MilestonesTimeline'
import { MemoryGallery } from './components/sections/MemoryGallery'
import { ThingsILove } from './components/sections/ThingsILove'
import { GrowthTracker } from './components/sections/GrowthTracker'
import { ParentMessage } from './components/sections/ParentMessage'
import { Footer } from './components/sections/Footer'

export default function App() {
  return (
    <PageShell>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <MilestonesTimeline />
        <MemoryGallery />
        <ThingsILove />
        <GrowthTracker />
        <ParentMessage />
      </main>
      <Footer />
    </PageShell>
  )
}
