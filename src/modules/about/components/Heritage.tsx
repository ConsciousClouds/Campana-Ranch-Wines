'use client'

import Image from 'next/image'

export default function Heritage() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Story Text */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-wine-600" />
                <p className="font-poppins text-xs tracking-[0.3em] text-wine-600 uppercase">Our Heritage</p>
              </div>

              <h2 className="font-cinzel font-light text-4xl md:text-5xl text-gray-900 mb-6">
                A Legacy Born<br />from Passion
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 font-poppins text-sm leading-relaxed">
              <p>
                In 1978, Giuseppe Campana arrived in Sonoma Valley with little more than
                a dream and generations of winemaking knowledge passed down through his
                Italian family. He saw in these rolling hills the same potential that his
                ancestors had cultivated in the vineyards of Tuscany.
              </p>

              <p>
                Starting with just 15 acres of neglected vines, Giuseppe transformed the
                land through meticulous care and an unwavering commitment to quality. His
                philosophy was simple: respect the terroir, nurture the vines, and let the
                fruit express itself naturally.
              </p>

              <p>
                Today, under the guidance of third-generation winemaker Marco Campana, our
                estate has grown to encompass 85 acres of pristine vineyards. Yet we remain
                true to Giuseppe's original vision—crafting wines of exceptional character
                that honor both our heritage and the unique expression of Sonoma Valley.
              </p>

              <div className="pt-4">
                <blockquote className="border-l-2 border-wine-600 pl-6 italic">
                  <p className="text-lg font-light text-gray-800 mb-4">
                    "Great wine is made in the vineyard. Our role is simply to guide
                    what nature provides."
                  </p>
                  <cite className="not-italic text-sm text-gray-600">
                    — Giuseppe Campana, Founder
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Right - Heritage Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/vineyard-hero.png"
                    alt="Historic vineyard"
                    fill
                    className="object-cover filter sepia-[0.3]"
                  />
                </div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/vineyard-hero.png"
                    alt="Original cellar"
                    fill
                    className="object-cover filter sepia-[0.3]"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/vineyard-hero.png"
                    alt="Founder Giuseppe"
                    fill
                    className="object-cover filter sepia-[0.3]"
                  />
                </div>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/vineyard-hero.png"
                    alt="Family harvest"
                    fill
                    className="object-cover filter sepia-[0.3]"
                  />
                </div>
              </div>
            </div>

            {/* Decorative year overlay */}
            <div className="absolute -top-8 -right-8 text-[150px] font-bodoni text-gray-200/50 leading-none select-none">
              1978
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}