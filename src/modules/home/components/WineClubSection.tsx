'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const benefits = [
  { title: '20% Savings', description: 'On all wine purchases' },
  { title: 'Quarterly Shipments', description: 'Curated selections delivered' },
  { title: 'Exclusive Events', description: 'Member-only experiences' },
  { title: 'Early Access', description: 'To new releases & library wines' },
]

export default function WineClubSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative h-[600px] overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=800"
                alt="Wine Club Member Event"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-lg max-w-xs">
              <p className="font-bodoni text-5xl text-wine-600 mb-2">2,500+</p>
              <p className="font-poppins text-gray-600">Happy Members</p>
            </div>
          </div>

          {/* Content Side */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <p className="font-poppins text-xs tracking-[0.3em] text-wine-600 uppercase mb-6">Membership</p>
            <h2 className="font-cinzel font-light text-4xl lg:text-5xl text-gray-900 mb-8">
              Join the<br />Campana Family
            </h2>

            <p className="font-poppins text-base text-gray-600 leading-relaxed mb-10">
              As a member of our wine club, you'll enjoy exclusive access to limited releases,
              special pricing, and unforgettable experiences at our estate. Choose the membership
              level that suits your taste.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 delay-${400 + index * 100} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                >
                  <h3 className="font-cinzel text-lg text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="font-poppins text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <Link
                href="/club"
                className="bg-wine-600 text-white px-8 py-4 font-poppins text-sm tracking-wider uppercase hover:bg-wine-700 transition-colors"
              >
                Join Now
              </Link>

              <Link
                href="/club"
                className="border border-wine-600 text-wine-600 px-8 py-4 font-poppins text-sm tracking-wider uppercase hover:bg-wine-600 hover:text-white transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}