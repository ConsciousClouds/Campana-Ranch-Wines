'use client'

import Image from 'next/image'

export default function VisitHero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/vineyard-hero.png"
          alt="Campana Ranch Estate"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-20 h-[1px] bg-white/30" />
          <p className="font-poppins text-xs tracking-[0.3em] text-white/70 uppercase">Experience</p>
          <div className="w-20 h-[1px] bg-white/30" />
        </div>

        <h1 className="font-cinzel font-light text-5xl md:text-7xl mb-6 tracking-wide">
          Visit Our Estate
        </h1>

        <p className="font-poppins font-light text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto tracking-wide">
          Discover the beauty of Sonoma Valley and experience our<br className="hidden md:block" />
          award-winning wines in an intimate, elegant setting.
        </p>

        <div className="mt-12">
          <a
            href="#book-tasting"
            className="inline-block bg-white/10 border border-white/30 text-white px-8 py-3 font-poppins text-sm tracking-wider uppercase hover:bg-white hover:text-gray-900 transition-all duration-500"
          >
            Reserve Your Visit
          </a>
        </div>
      </div>
    </section>
  )
}