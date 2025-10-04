'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const experiences = [
  {
    id: 1,
    title: 'Estate Tour & Tasting',
    description: 'Journey through our historic estate and taste our current releases in our elegant tasting room',
    duration: '90 minutes',
    price: '$75',
    image: 'https://images.unsplash.com/photo-1543218024-57a70143c369?w=800'
  },
  {
    id: 2,
    title: 'Private Cellar Experience',
    description: 'Exclusive access to our underground cellar with a curated tasting of library wines',
    duration: '2 hours',
    price: '$150',
    image: 'https://images.unsplash.com/photo-1558346489-19413928158b?w=800'
  },
  {
    id: 3,
    title: 'Vineyard Picnic',
    description: 'Gourmet picnic lunch paired with our wines in the heart of our vineyards',
    duration: '3 hours',
    price: '$225',
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=800'
  }
]

export default function VineyardExperience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null)

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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <p className="font-poppins text-xs tracking-[0.3em] text-wine-600 uppercase mb-6">Visit Us</p>
          <h2 className="font-cinzel font-light text-4xl lg:text-5xl text-gray-900 mb-4">
            The Campana Experience
          </h2>
          <p className="font-poppins text-base text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in the beauty of our estate with exclusive tastings and unforgettable experiences
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`group bg-white border border-gray-200 overflow-hidden transition-all duration-700 delay-${index * 100} hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-cinzel text-xl text-gray-900 mb-3">{exp.title}</h3>
                <p className="font-poppins text-sm text-gray-600 mb-6">{exp.description}</p>

                {/* Details */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="font-poppins text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-1">Duration</p>
                    <p className="font-poppins text-gray-700">{exp.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-poppins text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-1">Per Person</p>
                    <p className="font-bodoni text-2xl text-gray-900">{exp.price}</p>
                  </div>
                </div>

                {/* Book Button */}
                <button className="w-full bg-wine-600 text-white py-3 font-poppins text-sm tracking-wider uppercase hover:bg-wine-700 transition-colors">
                  Reserve Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tasting Room Info */}
        <div className={`bg-cream p-12 text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="font-cinzel text-2xl text-gray-900 mb-8">Tasting Room Hours</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-poppins text-[10px] tracking-[0.3em] text-wine-600 uppercase mb-2">Thursday - Monday</p>
              <p className="font-poppins text-base text-gray-700">11:00 AM - 6:00 PM</p>
            </div>
            <div>
              <p className="font-poppins text-[10px] tracking-[0.3em] text-wine-600 uppercase mb-2">Location</p>
              <p className="font-poppins text-base text-gray-700">123 Vineyard Lane<br />Sonoma, CA 95476</p>
            </div>
            <div>
              <p className="font-poppins text-[10px] tracking-[0.3em] text-wine-600 uppercase mb-2">Reservations</p>
              <p className="font-poppins text-base text-gray-700">(707) 555-0123</p>
            </div>
          </div>

          <Link
            href="/visit"
            className="inline-block border border-wine-600 text-wine-600 px-10 py-3 font-poppins text-sm tracking-wider uppercase hover:bg-wine-600 hover:text-white transition-all"
          >
            Plan Your Visit
          </Link>
        </div>
      </div>
    </section>
  )
}