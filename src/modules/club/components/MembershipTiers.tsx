'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ClubTier } from '../types'
import ShipmentBuilder from './shipment/ShipmentBuilder'

interface MembershipTiersProps {
  tiers: ClubTier[]
}

export default function MembershipTiers({ tiers }: MembershipTiersProps) {
  const [selectedTier, setSelectedTier] = useState<number>(6) // Default to 6 bottles

  const bottleOptions = [
    { bottles: 3, label: '3 Bottles', price: 180 },
    { bottles: 6, label: '6 Bottles', price: 360, popular: true },
    { bottles: 12, label: '12 Bottles', price: 720 }
  ]

  return (
    <section className="py-24 bg-cream">
      {/* All Members Receive - Full Width White Strip */}
      <div className="bg-white py-12 mb-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <h3 className="font-cinzel text-2xl text-gray-900 text-center mb-8">
            All Members Receive
          </h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <p className="font-bodoni text-3xl text-wine-600 mb-2">20%</p>
              <p className="font-poppins text-sm text-gray-700">Off All Wines</p>
            </div>
            <div className="text-center">
              <p className="font-poppins text-wine-600 text-2xl mb-2">✓</p>
              <p className="font-poppins text-sm text-gray-700">Complimentary Tastings</p>
            </div>
            <div className="text-center">
              <p className="font-poppins text-wine-600 text-2xl mb-2">✓</p>
              <p className="font-poppins text-sm text-gray-700">First Access to New Releases</p>
            </div>
            <div className="text-center">
              <p className="font-poppins text-wine-600 text-2xl mb-2">✓</p>
              <p className="font-poppins text-sm text-gray-700">Member-Only Events</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works - Full Width White Strip */}
      <div className="bg-white py-12 mb-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <h3 className="font-cinzel text-2xl text-gray-900 text-center mb-10">
            How It Works
          </h3>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="font-bodoni text-3xl text-wine-600 mb-3">1</div>
              <h4 className="font-cinzel text-lg text-gray-900 mb-2">Choose Size</h4>
              <p className="font-poppins text-xs text-gray-600">
                Select 3, 6, or 12 bottles per shipment
              </p>
            </div>
            <div className="text-center">
              <div className="font-bodoni text-3xl text-wine-600 mb-3">2</div>
              <h4 className="font-cinzel text-lg text-gray-900 mb-2">Preview</h4>
              <p className="font-poppins text-xs text-gray-600">
                See your upcoming shipment wines
              </p>
            </div>
            <div className="text-center">
              <div className="font-bodoni text-3xl text-wine-600 mb-3">3</div>
              <h4 className="font-cinzel text-lg text-gray-900 mb-2">Customize</h4>
              <p className="font-poppins text-xs text-gray-600">
                Swap wines or set preferences
              </p>
            </div>
            <div className="text-center">
              <div className="font-bodoni text-3xl text-wine-600 mb-3">4</div>
              <h4 className="font-cinzel text-lg text-gray-900 mb-2">Checkout</h4>
              <p className="font-poppins text-xs text-gray-600">
                Complete your membership signup
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8">

        {/* Choose Your Wine Club Section */}
        <div className="text-center mb-10">
          <h3 className="font-cinzel text-3xl text-gray-900">Choose Your Wine Club</h3>
          <p className="font-poppins text-sm text-gray-600 mt-2">
            Select your preferred shipment size
          </p>
        </div>

        {/* Bottle Selector */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {bottleOptions.map((option) => (
              <button
                key={option.bottles}
                onClick={() => setSelectedTier(option.bottles)}
                className={`relative p-12 border-3 bg-white transition-all transform hover:scale-105 ${
                  selectedTier === option.bottles
                    ? 'border-wine-600 shadow-2xl scale-105'
                    : 'border-gray-200 hover:border-wine-300 hover:shadow-xl'
                }`}
              >
                {option.popular && (
                  <span className="absolute top-0 right-0 bg-wine-600 text-white px-4 py-2 text-sm font-poppins tracking-wider uppercase">
                    Most Popular
                  </span>
                )}
                <div className="text-center">
                  <div className="font-bodoni text-7xl text-gray-900 mb-4">
                    {option.bottles}
                  </div>
                  <p className="font-cinzel text-2xl text-gray-800 mb-2">
                    {option.label}
                  </p>
                  <p className="font-poppins text-sm text-gray-600 mb-6">
                    Per Shipment
                  </p>
                  <div className="border-t-2 border-gray-200 pt-6">
                    <p className="font-bodoni text-4xl text-wine-600 mb-2">
                      ${option.price}
                    </p>
                    <p className="font-poppins text-sm text-gray-500">
                      Quarterly (4x per year)
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Shipment & Checkout Section - Using Modular Component */}
        <ShipmentBuilder
          bottleCount={selectedTier}
          isNewMember={true}
        />
      </div>
    </section>
  )
}