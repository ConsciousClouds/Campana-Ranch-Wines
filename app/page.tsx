import HeroSection from '@/src/modules/home/components/HeroSection'
import StorySection from '@/src/modules/home/components/StorySection'
import WineCollection from '@/src/modules/home/components/WineCollection'
import VineyardExperience from '@/src/modules/home/components/VineyardExperience'
import WineClubSection from '@/src/modules/home/components/WineClubSection'
import EventsSection from '@/src/modules/home/components/EventsSection'
import NewsletterSection from '@/src/modules/home/components/NewsletterSection'

export default function Home() {
  return (
    <main className="bg-cream overflow-hidden">
      <HeroSection />
      <StorySection />
      <WineCollection />
      <VineyardExperience />
      <WineClubSection />
      <EventsSection />
      <NewsletterSection />
    </main>
  )
}