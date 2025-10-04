'use client'

import { ClubBenefit } from '../types'
import Image from 'next/image'

interface BenefitsSectionProps {
  benefits: ClubBenefit[]
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-poppins text-xs tracking-[0.3em] text-wine-600 uppercase mb-6">
            Why Join
          </p>
          <h2 className="font-cinzel font-light text-4xl lg:text-5xl text-gray-900 mb-4">
            The Campana Ranch Experience
          </h2>
          <p className="font-poppins text-base text-gray-600 max-w-3xl mx-auto mb-8">
            More than just wine delivery – join a community of wine lovers with exclusive access to our estate
          </p>
          <a
            href="#join-now"
            className="inline-block bg-wine-600 text-white px-8 py-3 font-poppins text-sm tracking-wider uppercase hover:bg-wine-700 transition-colors"
          >
            Join Now
          </a>
        </div>

        {/* Visual Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-cream p-8 text-center">
            <div className="mb-4">
              <Image
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400"
                alt="Wine Events"
                width={300}
                height={200}
                className="w-full h-48 object-cover mb-4"
              />
            </div>
            <h3 className="font-cinzel text-xl text-gray-900 mb-2">
              Exclusive Events
            </h3>
            <p className="font-poppins text-sm text-gray-600">
              Member-only dinners, harvest parties, and winemaker meetups throughout the year
            </p>
          </div>

          <div className="bg-cream p-8 text-center">
            <div className="mb-4">
              <Image
                src="https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400"
                alt="Vineyard Tours"
                width={300}
                height={200}
                className="w-full h-48 object-cover mb-4"
              />
            </div>
            <h3 className="font-cinzel text-xl text-gray-900 mb-2">
              Estate Access
            </h3>
            <p className="font-poppins text-sm text-gray-600">
              Complimentary tastings and private tours for you and your guests
            </p>
          </div>

          <div className="bg-cream p-8 text-center">
            <div className="mb-4">
              <Image
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400"
                alt="Wine Selection"
                width={300}
                height={200}
                className="w-full h-48 object-cover mb-4"
              />
            </div>
            <h3 className="font-cinzel text-xl text-gray-900 mb-2">
              Curated Selections
            </h3>
            <p className="font-poppins text-sm text-gray-600">
              Hand-picked wines with the flexibility to customize every shipment to your taste
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="font-cinzel text-2xl text-gray-900 mb-4">
            Ready to Experience Campana Ranch?
          </h3>
          <p className="font-poppins text-base text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our wine club today and start enjoying exclusive benefits, curated selections, and member-only experiences.
          </p>
          <a
            href="#join-now"
            className="inline-block bg-wine-600 text-white px-12 py-4 font-poppins text-sm tracking-wider uppercase hover:bg-wine-700 transition-colors"
          >
            Start Your Membership
          </a>
        </div>
      </div>
    </section>
  )
}