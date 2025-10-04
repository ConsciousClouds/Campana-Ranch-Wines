'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { mockWines } from '@/src/modules/wines/services/mockData'

export default function WineCollection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const categories = [
    { id: 'all', name: 'All Wines' },
    { id: 'red', name: 'Red Wines' },
    { id: 'white', name: 'White Wines' },
    { id: 'rose', name: 'Rosé' },
  ]

  const filteredWines = selectedCategory === 'all'
    ? mockWines.slice(0, 6)
    : mockWines.filter(wine => {
        if (selectedCategory === 'red') return wine.category === 'red'
        if (selectedCategory === 'white') return wine.category === 'white'
        if (selectedCategory === 'rose') return wine.category === 'rose'
        return false
      }).slice(0, 6)

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
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <p className="font-poppins text-xs tracking-[0.3em] text-wine-600 uppercase mb-6">Our Collection</p>
          <h2 className="font-cinzel font-light text-4xl lg:text-5xl text-gray-900 mb-4">
            Exceptional Wines
          </h2>
          <p className="font-poppins text-base text-gray-600 max-w-2xl mx-auto">
            Each bottle represents our commitment to excellence, from vineyard to glass
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex justify-center gap-6 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`font-poppins text-[11px] tracking-[0.15em] uppercase px-4 py-2 transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'text-gray-900 border-b border-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Wine Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredWines.map((wine, index) => (
            <div
              key={wine.id}
              className={`group cursor-pointer transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Link href={`/wines/${wine.id}`}>
                {/* Wine Bottle */}
                <div className="relative h-80 mb-6 overflow-hidden bg-gradient-to-b from-stone-50 to-cream">
                  <Image
                    src={wine.image}
                    alt={wine.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>

                  {/* Quick view button */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="block bg-white text-wine-700 text-center py-3 font-cinzel text-sm tracking-wider">
                      VIEW DETAILS
                    </span>
                  </div>
                </div>

                {/* Wine Info */}
                <div className="text-center">
                  <p className="font-poppins text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-2">{wine.varietal}</p>
                  <h3 className="font-cinzel text-xl text-gray-900 mb-2">{wine.name}</h3>
                  <p className="font-bodoni text-2xl text-gray-800">{wine.vintage}</p>

                  {/* Price */}
                  <div className="mt-4">
                    <p className="font-bodoni text-2xl text-gray-900">${wine.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Link
            href="/wines"
            className="inline-block bg-wine-600 text-white px-10 py-4 font-poppins text-sm tracking-wider uppercase hover:bg-wine-700 transition-colors"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  )
}