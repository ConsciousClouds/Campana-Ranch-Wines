'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { mockWines } from '@/src/modules/wines/services/mockData'

export default function WineCollection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Get latest releases (most recent vintages, featured wines)
  const latestReleases = mockWines
    .filter(wine => wine.featured || wine.vintage >= 2020)
    .sort((a, b) => b.vintage - a.vintage)
    .slice(0, 8)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

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

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      checkScrollButtons()
      scrollContainer.addEventListener('scroll', checkScrollButtons)
      window.addEventListener('resize', checkScrollButtons)
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollButtons)
        window.removeEventListener('resize', checkScrollButtons)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-16 h-[1px] bg-wine-300" />
            <p className="font-poppins text-[10px] tracking-[0.3em] text-wine-600 uppercase">Latest Releases</p>
            <div className="w-16 h-[1px] bg-wine-300" />
          </div>
          <h2 className="font-cinzel font-light text-4xl lg:text-5xl text-gray-900 mb-4">
            Exceptional Wines
          </h2>
          <p className="font-poppins text-sm text-gray-600 max-w-2xl mx-auto">
            Discover our newest vintages and celebrated releases
          </p>
        </div>

        {/* Horizontal Scroller Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 ${
              canScrollLeft 
                ? 'opacity-100 hover:bg-white hover:scale-110' 
                : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-wine-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 ${
              canScrollRight 
                ? 'opacity-100 hover:bg-white hover:scale-110' 
                : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-wine-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Wine Cards */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {latestReleases.map((wine, index) => (
              <Link
                key={wine.id}
                href={`/wines/${wine.id}`}
                className={`group flex-shrink-0 w-[280px] transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Tighter Card Design */}
                <div className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full border border-gray-100">
                  {/* Wine Image - Compact */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-b from-stone-50 to-white">
                    <Image
                      src={wine.image}
                      alt={wine.name}
                      fill
                      sizes="280px"
                      className="object-contain p-6 transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* New Release Badge */}
                    {wine.vintage >= 2022 && (
                      <div className="absolute top-3 right-3 bg-wine-600 text-white px-3 py-1 text-[9px] font-poppins tracking-wider uppercase">
                        New
                      </div>
                    )}

                    {/* Featured Badge */}
                    {wine.featured && (
                      <div className="absolute top-3 left-3 bg-gold-500 text-white px-3 py-1 text-[9px] font-poppins tracking-wider uppercase">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Wine Info - Compact */}
                  <div className="p-5 text-center">
                    <p className="font-poppins text-[9px] tracking-[0.25em] text-gray-500 uppercase mb-2">
                      {wine.varietal}
                    </p>
                    <h3 className="font-cinzel text-lg text-gray-900 mb-1 leading-tight">
                      {wine.name}
                    </h3>
                    <p className="font-bodoni text-xl text-gray-700 mb-3">
                      {wine.vintage}
                    </p>

                    {/* Divider */}
                    <div className="w-12 h-[1px] bg-gray-200 mx-auto mb-3" />

                    {/* Price */}
                    <p className="font-bodoni text-2xl text-gray-900 mb-3">
                      ${wine.price}
                    </p>

                    {/* Quick Info */}
                    <div className="flex items-center justify-center gap-3 text-[10px] text-gray-500 mb-4">
                      <span>{wine.alcohol}</span>
                      <span>•</span>
                      <span>{wine.production}</span>
                    </div>

                    {/* View Button */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-block w-full bg-wine-600 text-white py-2 font-poppins text-[10px] tracking-[0.2em] uppercase hover:bg-wine-700 transition-colors">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Link
            href="/wines"
            className="inline-block border-2 border-wine-600 text-wine-600 px-10 py-3 font-poppins text-xs tracking-[0.2em] uppercase hover:bg-wine-600 hover:text-white transition-all duration-300"
          >
            View Full Collection
          </Link>
        </div>
      </div>

      {/* Hide scrollbar globally for this section */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}