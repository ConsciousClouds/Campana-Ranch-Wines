'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const upcomingEvents = [
  {
    id: 1,
    date: 'MAR 15',
    title: 'Spring Release Party',
    description: 'Celebrate the arrival of spring with our newest vintages',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800'
  },
  {
    id: 2,
    date: 'APR 22',
    title: 'Winemaker Dinner',
    description: 'An intimate evening with our head winemaker',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800'
  },
  {
    id: 3,
    date: 'MAY 10',
    title: 'Vineyard Concert Series',
    description: 'Live jazz among the vines with wine tasting',
    image: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=800'
  }
]

export default function EventsSection() {
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <p className="font-poppins text-xs tracking-[0.3em] text-wine-600 uppercase mb-6">Upcoming</p>
          <h2 className="font-cinzel font-light text-4xl lg:text-5xl text-gray-900 mb-4">
            Events & Experiences
          </h2>
          <p className="font-poppins text-base text-gray-600 max-w-2xl mx-auto">
            Join us for exclusive events celebrating wine, food, and culture
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className={`group cursor-pointer transition-all duration-700 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Image */}
              <div className="relative h-72 mb-6 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Date Badge */}
                <div className="absolute top-6 left-6 bg-white px-4 py-3">
                  <p className="font-bodoni text-2xl text-wine-600 leading-none">{event.date}</p>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-cinzel text-xl text-gray-900 mb-3 group-hover:text-wine-600 transition-colors">
                {event.title}
              </h3>
              <p className="font-poppins text-sm text-gray-600 mb-4">{event.description}</p>

              <Link
                href="/events"
                className="font-poppins text-sm text-wine-600 tracking-wider hover:text-wine-700 transition-colors inline-flex items-center gap-2 uppercase"
              >
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Events */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Link
            href="/events"
            className="inline-block border border-wine-600 text-wine-600 px-10 py-4 font-poppins text-sm tracking-wider uppercase hover:bg-wine-600 hover:text-white transition-all"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  )
}