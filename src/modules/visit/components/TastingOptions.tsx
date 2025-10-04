'use client'

import { useState } from 'react'

interface TastingOption {
  id: string
  name: string
  duration: string
  price: string
  description: string
  highlights: string[]
  availability: string
  groupSize: string
}

const tastingOptions: TastingOption[] = [
  {
    id: 'signature',
    name: 'Signature Tasting',
    duration: '60 minutes',
    price: '$45 per person',
    description: 'Explore our current releases with a guided tasting of five estate wines, paired with artisanal cheeses.',
    highlights: [
      '5 current release wines',
      'Artisanal cheese pairings',
      'Seated indoor or patio experience',
      'Complimentary for club members'
    ],
    availability: 'Thursday - Monday',
    groupSize: 'Up to 8 guests'
  },
  {
    id: 'reserve',
    name: 'Reserve Experience',
    duration: '90 minutes',
    price: '$85 per person',
    description: 'An intimate journey through our limited production and library wines, featuring exclusive vintages.',
    highlights: [
      '7 wines including library selections',
      'Charcuterie and cheese board',
      'Private tasting room',
      'Vineyard tour option',
      '10% discount on 6+ bottles'
    ],
    availability: 'By appointment',
    groupSize: '2-6 guests'
  },
  {
    id: 'vineyard',
    name: 'Vineyard & Cellar Tour',
    duration: '2 hours',
    price: '$125 per person',
    description: 'Walk through our estate vineyards, explore the production facility, and enjoy a premium tasting.',
    highlights: [
      'Guided vineyard walk',
      'Cellar and production tour',
      'Barrel tasting',
      '8 wine flight',
      'Light lunch included',
      'Souvenir wine glass'
    ],
    availability: 'Friday - Sunday',
    groupSize: '4-12 guests'
  },
  {
    id: 'private',
    name: 'Private Event',
    duration: 'Customizable',
    price: 'Starting at $1,500',
    description: 'Create your perfect wine country experience with exclusive use of our tasting room and grounds.',
    highlights: [
      'Exclusive venue access',
      'Customized wine selection',
      'Full catering options',
      'Private sommelier',
      'Event planning assistance'
    ],
    availability: 'Upon request',
    groupSize: '10-50 guests'
  }
]

export default function TastingOptions() {
  const [selectedOption, setSelectedOption] = useState<string>('signature')

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-[1px] bg-gray-300" />
            <p className="font-poppins text-xs tracking-[0.3em] text-gray-500 uppercase">Experiences</p>
            <div className="w-20 h-[1px] bg-gray-300" />
          </div>

          <h2 className="font-cinzel font-light text-4xl md:text-5xl text-gray-900 mb-6">
            Tasting Experiences
          </h2>

          <p className="font-poppins font-light text-gray-600 max-w-3xl mx-auto">
            Choose from our curated tasting experiences, each designed to showcase
            the distinctive character of our estate wines.
          </p>
        </div>

        {/* Option Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tastingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedOption(option.id)}
              className={`px-6 py-3 font-poppins text-xs tracking-wider uppercase transition-all duration-300 ${
                selectedOption === option.id
                  ? 'bg-wine-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>

        {/* Selected Option Details */}
        {tastingOptions.map((option) => (
          <div
            key={option.id}
            className={`transition-all duration-500 ${
              selectedOption === option.id
                ? 'opacity-100 visible'
                : 'opacity-0 invisible hidden'
            }`}
          >
            <div className="bg-white p-10 max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-cinzel font-light text-3xl text-gray-900 mb-4">
                    {option.name}
                  </h3>

                  <p className="font-poppins text-gray-600 mb-6">
                    {option.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4">
                      <svg className="w-5 h-5 text-wine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-poppins text-sm text-gray-700">{option.duration}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <svg className="w-5 h-5 text-wine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-poppins text-sm text-gray-700">{option.price}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <svg className="w-5 h-5 text-wine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="font-poppins text-sm text-gray-700">{option.groupSize}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <svg className="w-5 h-5 text-wine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-poppins text-sm text-gray-700">{option.availability}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-poppins text-xs tracking-wider text-gray-600 uppercase mb-4">
                    Experience Includes
                  </h4>

                  <ul className="space-y-3 mb-8">
                    {option.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-wine-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="font-poppins text-sm text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="w-full bg-wine-600 text-white py-3 font-poppins text-sm tracking-wider uppercase hover:bg-wine-700 transition-colors"
                  >
                    Reserve This Experience
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="font-poppins text-sm text-gray-600 mb-4">
            All tastings require advance reservation. Walk-ins welcome based on availability.
          </p>
          <p className="font-poppins text-xs text-gray-500">
            21+ only. Groups larger than 8 guests, please contact us for special arrangements.
          </p>
        </div>
      </div>
    </section>
  )
}