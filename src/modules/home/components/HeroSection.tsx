'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const heroSlides = [
  {
    image: '/vineyard-hero.png',
    title: 'Welcome to Campana Ranch',
    subtitle: 'Where Tradition Meets Excellence',
    description: 'Crafting exceptional wines in the heart of Sonoma Valley since 1982'
  },
  {
    image: '/cellar-doors.jpg',
    title: 'Historic Wine Cellars',
    subtitle: 'Heritage & Craftsmanship',
    description: 'Step into our storied cellars where time-honored traditions create exceptional wines'
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20 md:pt-28">
      {/* Background Images with Fade Transition */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
          {/* Ken Burns effect */}
          <div className={`absolute inset-0 ${index === currentSlide ? 'animate-ken-burns' : ''}`}>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-cover scale-110"
            />
          </div>
        </div>
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 absolute inset-0'
            }`}
          >
            {/* Small accent text */}
            <p className={`font-cinzel text-gold-400 text-sm md:text-base tracking-[0.3em] mb-4 transition-all duration-1000 delay-300 ${
              index === currentSlide && isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
            }`}>
              {slide.subtitle.toUpperCase()}
            </p>

            {/* Main title */}
            <h1 className={`font-cinzel font-bold text-5xl md:text-7xl lg:text-8xl mb-6 transition-all duration-1000 delay-500 ${
              index === currentSlide && isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              {slide.title}
            </h1>

            {/* Description */}
            <p className={`font-poppins text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${
              index === currentSlide && isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              {slide.description}
            </p>
          </div>
        ))}

        {/* CTA Buttons */}
        <div className={`flex gap-6 justify-center transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Link
            href="/wines"
            className="group relative bg-white text-wine-700 px-10 py-4 overflow-hidden transition-all duration-500 hover:text-white"
          >
            <span className="absolute inset-0 bg-wine-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative z-10 font-cinzel font-semibold text-sm tracking-[0.15em]">EXPLORE COLLECTION</span>
          </Link>

          <Link
            href="/visit"
            className="group relative border-2 border-white text-white px-10 py-4 overflow-hidden transition-all duration-500 hover:border-gold-400 hover:text-gold-400"
          >
            <span className="absolute inset-0 bg-gold-400/10 transform scale-0 group-hover:scale-100 transition-transform duration-500"></span>
            <span className="relative z-10 font-cinzel font-semibold text-sm tracking-[0.15em]">VISIT ESTATE</span>
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 transition-all duration-500 ${
              index === currentSlide ? 'w-12 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}