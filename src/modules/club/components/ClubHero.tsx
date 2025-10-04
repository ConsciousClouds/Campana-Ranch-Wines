'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ClubHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558346489-19413928158b?w=1600"
          alt="Wine barrels in cellar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-8">
        {/* Label */}
        <p className="font-poppins text-xs tracking-[0.3em] text-white/80 uppercase mb-6">
          Exclusive Membership
        </p>

        {/* Title */}
        <h1 className="font-cinzel font-light text-5xl md:text-6xl lg:text-7xl mb-6">
          The Campana Ranch
          <span className="block mt-2">Wine Club</span>
        </h1>

        {/* Description */}
        <p className="font-poppins text-lg text-white/90 mb-10 max-w-3xl mx-auto">
          Join our exclusive community of wine enthusiasts and enjoy hand-selected wines,
          member-only events, and unparalleled access to our estate
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <a
            href="#join-now"
            className="bg-white text-wine-600 px-8 py-3 font-poppins text-sm tracking-wider uppercase hover:bg-gray-100 transition-colors"
          >
            Join Today
          </a>

          <a
            href="#benefits"
            className="border border-white text-white px-8 py-3 font-poppins text-sm tracking-wider uppercase hover:bg-white hover:text-wine-600 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}