'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function StoryHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/vineyard-hero.png"
          alt="Campana Ranch Heritage"
          fill
          className="object-cover animate-ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '300ms' }}>
          <div className="w-20 h-[1px] bg-white/30" />
          <p className="font-poppins text-xs tracking-[0.3em] text-white/70 uppercase">Est. 1978</p>
          <div className="w-20 h-[1px] bg-white/30" />
        </div>

        <h1 className={`font-cinzel font-light text-5xl md:text-7xl mb-6 tracking-wide transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '600ms' }}>
          Our Story
        </h1>

        <p className={`font-poppins font-light text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto tracking-wide transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '900ms' }}>
          Three generations of winemaking tradition,<br className="hidden md:block" />
          rooted in the heart of Sonoma Valley.
        </p>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{ transitionDelay: '1500ms' }}>
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}