'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <p className="font-poppins text-xs tracking-[0.3em] text-wine-600 uppercase mb-6">Our Heritage</p>
            <h2 className="font-cinzel font-light text-4xl lg:text-5xl text-gray-900 mb-8">
              Three Generations<br />of Winemaking
            </h2>
            <p className="font-poppins text-base text-gray-600 leading-relaxed mb-6">
              Founded in 1982, Campana Ranch has been a cornerstone of Sonoma Valley winemaking for over four decades.
              Our family's dedication to sustainable farming and traditional winemaking techniques has earned us recognition
              as one of the region's most respected estates.
            </p>
            <p className="font-poppins text-base text-gray-600 leading-relaxed mb-12">
              From our hillside vineyards overlooking the valley, we cultivate exceptional grapes that reflect the unique
              terroir of our land. Each vintage tells a story of patience, passion, and the pursuit of perfection.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                <p className="font-bodoni text-5xl text-wine-600 mb-2">40+</p>
                <p className="font-poppins text-xs tracking-wider text-gray-500 uppercase">Years</p>
              </div>
              <div className={`transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                <p className="font-bodoni text-5xl text-wine-600 mb-2">120</p>
                <p className="font-poppins text-xs tracking-wider text-gray-500 uppercase">Acres</p>
              </div>
              <div className={`transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                <p className="font-bodoni text-5xl text-wine-600 mb-2">95+</p>
                <p className="font-poppins text-xs tracking-wider text-gray-500 uppercase">Points</p>
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Main Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=800"
                alt="Campana Ranch Vineyards"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating accent image */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1558346489-19413928158b?w=400"
                alt="Wine Barrels"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-400/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}