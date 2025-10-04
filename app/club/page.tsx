import { Metadata } from 'next'
import ClubHero from '@/src/modules/club/components/ClubHero'
import ImprovedStepFlow from '@/src/modules/club/components/ImprovedStepFlow'
import BenefitsSection from '@/src/modules/club/components/BenefitsSection'
import { clubTiers, clubBenefits } from '@/src/modules/club/services/mockData'

export const metadata: Metadata = {
  title: 'Wine Club | Campana Ranch Wines',
  description: 'Join the Campana Ranch Wine Club for exclusive access to our finest wines, member-only events, and special benefits.',
}

export default async function ClubPage() {
  // In production, these would come from Commerce7 API
  const tiers = clubTiers
  const benefits = clubBenefits

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <ClubHero />

      {/* Benefits Section - Now First */}
      <div id="benefits">
        <BenefitsSection benefits={benefits} />
      </div>

      {/* Improved Step-Based Membership Flow */}
      <div id="join-now">
        <ImprovedStepFlow />
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="font-poppins text-xs tracking-[0.3em] text-wine-600 uppercase mb-6">Have Questions?</p>
            <h2 className="font-cinzel font-light text-4xl lg:text-5xl text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-cream border border-gray-200 hover:border-wine-600/30 transition-all">
                <span className="font-cinzel text-lg text-gray-900">
                  How does wine club shipping work?
                </span>
                <span className="text-wine-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 font-poppins text-sm text-gray-600 border-x border-b border-gray-200">
                Club shipments are sent quarterly (March, June, September, December). We'll notify you
                two weeks before each shipment. Shipping is complimentary for all club members.
                You can customize your shipment or skip if needed through your member portal.
              </div>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-cream border border-gray-200 hover:border-wine-600/30 transition-all">
                <span className="font-cinzel text-lg text-gray-900">
                  Can I pause or cancel my membership?
                </span>
                <span className="text-wine-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 font-poppins text-sm text-gray-600 border-x border-b border-gray-200">
                Yes! You can pause your membership for up to 6 months or cancel anytime after
                receiving your first shipment. Simply contact our member services team or manage
                your subscription through the Commerce7 member portal.
              </div>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-cream border border-gray-200 hover:border-wine-600/30 transition-all">
                <span className="font-cinzel text-lg text-gray-900">
                  What are the member benefits?
                </span>
                <span className="text-wine-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 font-poppins text-sm text-gray-600 border-x border-b border-gray-200">
                Benefits vary by tier but all members enjoy discounts (15-25% off), complimentary
                tastings, free shipping on club shipments, early access to new releases, and
                invitations to exclusive events. Higher tiers include additional perks like
                winemaker dinners and private tours.
              </div>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-cream border border-gray-200 hover:border-wine-600/30 transition-all">
                <span className="font-cinzel text-lg text-gray-900">
                  How do I access my member account?
                </span>
                <span className="text-wine-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 font-poppins text-sm text-gray-600 border-x border-b border-gray-200">
                Once you join, you'll receive login credentials for our Commerce7 member portal.
                There you can manage your shipments, update payment methods, track orders, access
                exclusive wines, and register for events. The portal is mobile-friendly and
                available 24/7.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Commerce7 Integration Note */}
      <div className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <p className="font-poppins text-xs text-gray-500">
            Powered by Commerce7 • Secure checkout • Member portal access
          </p>
        </div>
      </div>
    </main>
  )
}