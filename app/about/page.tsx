import StoryHero from '@/src/modules/about/components/StoryHero'
import Heritage from '@/src/modules/about/components/Heritage'
import Philosophy from '@/src/modules/about/components/Philosophy'
import Team from '@/src/modules/about/components/Team'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <StoryHero />
      <Heritage />
      <Philosophy />
      <Team />
    </main>
  )
}