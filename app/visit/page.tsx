import VisitHero from '@/src/modules/visit/components/VisitHero'
import TastingOptions from '@/src/modules/visit/components/TastingOptions'
import VisitInfo from '@/src/modules/visit/components/VisitInfo'
import BookingForm from '@/src/modules/visit/components/BookingForm'

export default function VisitPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <VisitHero />

      {/* Tasting Options */}
      <TastingOptions />

      {/* Visit Information */}
      <VisitInfo />

      {/* Booking Form */}
      <BookingForm />

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="font-poppins text-sm text-gray-600 mb-4">
              123 Vineyard Lane, Sonoma, CA 95476
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-wine-600 text-white px-6 py-2 font-poppins text-xs tracking-wider uppercase hover:bg-wine-700 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}