'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { mockWines } from '@/src/modules/wines/services/mockData'
import { VintageData } from '@/src/modules/wines/types'
import VintageDropdown from '@/src/shared/components/VintageDropdown'

export default function WineDetailPage() {
  const params = useParams()
  const wine = mockWines.find(w => w.id === params.id)
  const [quantity, setQuantity] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedVintage, setSelectedVintage] = useState<number | null>(null)
  const [showSubHeader, setShowSubHeader] = useState(false)

  // Get current vintage data
  const currentVintageData: VintageData | null = wine?.vintages?.find(
    v => v.vintage === selectedVintage
  ) || null

  useEffect(() => {
    setIsVisible(true)
    // Set initial vintage to the default wine vintage
    if (wine) {
      setSelectedVintage(wine.vintage)
    }
  }, [wine])

  // Scroll detection for sub-header
  useEffect(() => {
    const handleScroll = () => {
      // Show sub-header after scrolling past the wine title section
      const scrollPosition = window.scrollY
      const titleSectionHeight = 300 // Approximate height of title section
      setShowSubHeader(scrollPosition > titleSectionHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!wine) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-cinzel text-2xl text-gray-900 mb-4">Wine Not Found</h1>
          <Link href="/wines" className="text-wine-600 hover:text-wine-700 underline">
            Return to Collection
          </Link>
        </div>
      </div>
    )
  }

  // Use vintage-specific data if available, otherwise use default
  const displayData = {
    price: currentVintageData?.price || wine.price,
    alcohol: currentVintageData?.alcohol || wine.alcohol,
    production: currentVintageData?.production || wine.production,
    inStock: currentVintageData?.inStock ?? wine.inStock,
    harvestDate: currentVintageData?.harvestDate || wine.harvestDate,
    tastingNotes: currentVintageData?.tastingNotes || wine.tastingNotes,
    story: currentVintageData?.story || wine.story,
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Sticky Sub-Header */}
      <div className={`fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 ${
        showSubHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Back to All Wines */}
            <Link
              href="/wines"
              className="flex items-center text-wine-600 hover:text-wine-700 transition-colors"
            >
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-poppins text-sm uppercase tracking-wider">All Wines</span>
            </Link>

            {/* Center: Vintage Selector & Wine Name */}
            <div className="flex items-center gap-4">
              {/* Vintage Dropdown */}
              {wine.vintages && wine.vintages.length > 0 ? (
                <VintageDropdown
                  vintages={wine.vintages}
                  currentVintage={wine.vintage}
                  selectedVintage={selectedVintage || wine.vintage}
                  onVintageChange={setSelectedVintage}
                  compact={true}
                />
              ) : (
                <div className="font-bodoni text-lg text-gray-900 px-3 py-2">
                  {wine.vintage}
                </div>
              )}

              {/* Wine Name */}
              <h2 className="font-cinzel text-lg text-gray-900">{wine.name}</h2>
            </div>

            {/* Right: Price & Add to Cart */}
            <div className="flex items-center gap-4">
              {/* Price */}
              <div className="text-right">
                <p className="font-bodoni text-xl text-gray-900">${displayData.price}</p>
                <p className="font-poppins text-xs text-gray-600">per bottle</p>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 text-sm hover:bg-gray-50 transition-colors"
                  >
                    −
                  </button>
                  <span className="w-10 text-center font-poppins text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 text-sm hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>

                {displayData.inStock ? (
                  <button className="bg-wine-600 text-white px-6 py-2 font-poppins text-xs tracking-wider uppercase hover:bg-wine-700 transition-colors rounded">
                    Add to Cart
                  </button>
                ) : (
                  <span className="text-gray-500 font-poppins text-xs uppercase">Sold Out</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wine Title Header - Full Width with Better Spacing */}
      <section className="pt-40 pb-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="font-poppins text-xs tracking-[0.3em] text-wine-600 uppercase mb-4">
              {wine.category} • {wine.productionFrequency === 'annual' ? 'Made Every Year' : wine.productionFrequency === 'biennial' ? 'Made Every Other Year' : 'Limited Production'}
            </p>
            <h1 className="font-cinzel font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              {wine.name}
            </h1>
            <p className="font-poppins text-2xl text-gray-600">{wine.varietal}</p>

            {/* Vintage Selector */}
            {wine.vintages && wine.vintages.length > 0 && (
              <div className="mt-8 flex items-center justify-center gap-4">
                <label className="font-poppins text-sm text-gray-600 uppercase tracking-wider">
                  Select Vintage:
                </label>
                <VintageDropdown
                  vintages={wine.vintages}
                  currentVintage={wine.vintage}
                  selectedVintage={selectedVintage || wine.vintage}
                  onVintageChange={setSelectedVintage}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content - Full Width Layout */}
      <section className="pb-20">
        <div className="max-w-[1400px] mx-auto px-8">

          {/* Wine Image and Price - Wide Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-32">
            {/* Wine Bottle Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="aspect-[3/4] bg-white rounded-lg p-12">
                  <Image
                    src={wine.image}
                    alt={wine.name}
                    fill
                    className="object-contain"
                    priority
                  />
                  {/* Vintage Badge on Bottle */}
                  <div className="absolute top-8 right-8 bg-wine-600 text-white px-4 py-2 rounded">
                    <p className="font-bodoni text-2xl">{selectedVintage}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price and Purchase */}
            <div className="flex flex-col justify-center lg:pl-8">
              <div className="mb-12">
                <p className="font-poppins text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">Investment</p>
                <p className="font-bodoni text-7xl lg:text-8xl text-gray-900 mb-2">${displayData.price}</p>
                <p className="font-poppins text-lg text-gray-600">per bottle • {selectedVintage} Vintage</p>
              </div>

              {displayData.inStock ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-14 h-14 text-lg hover:bg-gray-50 transition-colors"
                      >
                        −
                      </button>
                      <span className="w-20 text-center font-poppins text-lg">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-14 h-14 text-lg hover:bg-gray-50 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="bg-wine-600 text-white px-10 py-4 font-poppins text-sm tracking-wider uppercase hover:bg-wine-700 transition-colors rounded"
                      data-commerce7-product-id={currentVintageData?.commerce7Id || wine.commerce7Id}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="font-poppins text-lg text-gray-600 mb-2">
                    {selectedVintage} Vintage is Sold Out
                  </p>
                  <p className="font-poppins text-sm text-gray-500">
                    Please select another vintage or join our wine club for priority access
                  </p>
                </div>
              )}

              {/* Production Info Below Add to Cart */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                {displayData.production && (
                  <div>
                    <p className="font-bodoni text-3xl text-wine-600">{displayData.production.split(' ')[0]}</p>
                    <p className="font-poppins text-xs tracking-[0.2em] text-gray-500 uppercase mt-1">
                      Cases Produced
                    </p>
                  </div>
                )}

                {displayData.alcohol && (
                  <div>
                    <p className="font-bodoni text-3xl text-gray-900">{displayData.alcohol}</p>
                    <p className="font-poppins text-xs tracking-[0.2em] text-gray-500 uppercase mt-1">
                      Alcohol
                    </p>
                  </div>
                )}

                {wine.vineyard && (
                  <div>
                    <p className="font-cinzel text-lg text-gray-900">{wine.vineyard}</p>
                    <p className="font-poppins text-xs tracking-[0.2em] text-gray-500 uppercase mt-1">
                      Estate Vineyard
                    </p>
                  </div>
                )}
              </div>

              {/* Story Snippet */}
              {displayData.story && (
                <div className="mt-8 p-4 bg-cream/50 rounded-lg">
                  <p className="font-poppins text-sm text-gray-600 italic line-clamp-2">
                    "{displayData.story}"
                  </p>
                  <button
                    onClick={() => {
                      const storySection = document.getElementById('winemaker-story')
                      if (storySection) {
                        storySection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="font-poppins text-xs text-wine-600 hover:text-wine-700 uppercase tracking-wider mt-2 inline-block transition-colors"
                  >
                    Read Full Story →
                  </button>
                </div>
              )}

              {/* Accolades Section */}
              {wine.accolades && wine.accolades.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-poppins text-xs tracking-[0.3em] text-gray-500 uppercase mb-4 text-center">
                    Recognition
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {wine.accolades.slice(0, 3).map((accolade, index) => (
                      <div key={index} className="text-center p-3 bg-white/60 rounded">
                        <p className="font-bodoni text-lg text-wine-600 mb-1">
                          {accolade.score}
                        </p>
                        <p className="font-poppins text-xs text-gray-600">
                          {accolade.publication}
                        </p>
                        {accolade.year && (
                          <p className="font-poppins text-xs text-gray-500">
                            {accolade.year}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Wine Description - Wide and Centered */}
          <div className="max-w-5xl mx-auto mb-32 text-center">
            <p className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-relaxed">
              {wine.description}
            </p>
          </div>

          {/* Winemaker Quote - Full Width */}
          {displayData.story && (
            <div className="mb-32" id="winemaker-story">
              <div className="max-w-5xl mx-auto">
                <div className="border-t border-b border-wine-600/20 py-16 text-center">
                  <p className="font-poppins text-2xl lg:text-3xl text-gray-700 italic mb-8 leading-relaxed">
                    "{displayData.story}"
                  </p>
                  {wine.winemaker && (
                    <p className="font-cinzel text-xl text-wine-600">
                      — {wine.winemaker}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tasting Notes - Wide Three Column */}
          {displayData.tastingNotes && (
            <div className="mb-32">
              <h2 className="font-cinzel text-4xl lg:text-5xl text-center text-gray-900 mb-16">
                Tasting Journey • {selectedVintage}
              </h2>

              <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-3 gap-12">
                  {/* The Nose */}
                  <div className="text-center">
                    <h3 className="font-poppins text-xs tracking-[0.3em] text-wine-600 uppercase mb-6">
                      The Nose
                    </h3>
                    <div className="space-y-3">
                      {displayData.tastingNotes.aroma.map((note, i) => (
                        <p key={i} className="font-poppins text-lg text-gray-700">{note}</p>
                      ))}
                    </div>
                  </div>

                  {/* The Palate */}
                  <div className="text-center">
                    <h3 className="font-poppins text-xs tracking-[0.3em] text-wine-600 uppercase mb-6">
                      The Palate
                    </h3>
                    <div className="space-y-3">
                      {displayData.tastingNotes.flavor.map((note, i) => (
                        <p key={i} className="font-poppins text-lg text-gray-700">{note}</p>
                      ))}
                    </div>
                  </div>

                  {/* The Finish */}
                  <div className="text-center">
                    <h3 className="font-poppins text-xs tracking-[0.3em] text-wine-600 uppercase mb-6">
                      The Finish
                    </h3>
                    <p className="font-poppins text-lg text-gray-700 italic">
                      "{displayData.tastingNotes.finish}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Food Pairings - Wide Grid */}
          {displayData.tastingNotes && (
            <div className="mb-32">
              <h2 className="font-cinzel text-4xl lg:text-5xl text-center text-gray-900 mb-12">
                Perfect Pairings
              </h2>

              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {displayData.tastingNotes.pairings.map((pairing, index) => (
                    <div key={index} className="text-center">
                      <p className="font-poppins text-lg text-gray-700 py-4 border-b-2 border-gray-200 hover:border-wine-600 transition-colors">
                        {pairing}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Wine Club Badge */}
          {wine.clubOnly && (
            <div className="text-center py-16 border-t border-wine-600/20">
              <p className="font-poppins text-xs tracking-[0.3em] text-wine-600 uppercase mb-4">
                Wine Club Exclusive
              </p>
              <p className="font-poppins text-xl text-gray-600 mb-8">
                This exceptional wine is reserved for our members
              </p>
              <Link
                href="/club"
                className="inline-block border-2 border-wine-600 text-wine-600 px-10 py-4 font-poppins text-sm tracking-wider uppercase hover:bg-wine-600 hover:text-white transition-all rounded"
              >
                Join the Club
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Wines - Full Width */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="font-cinzel font-light text-4xl lg:text-5xl text-center text-gray-900 mb-16">
            Continue Your Journey
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {mockWines
              .filter(w => w.id !== wine.id && w.category === wine.category)
              .slice(0, 4)
              .map((relatedWine) => (
                <Link
                  key={relatedWine.id}
                  href={`/wines/${relatedWine.id}`}
                  className="group text-center"
                >
                  <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-6 rounded-lg">
                    <Image
                      src={relatedWine.image}
                      alt={relatedWine.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-cinzel text-xl text-gray-900 mb-2">
                    {relatedWine.name}
                  </h3>
                  <p className="font-poppins text-sm text-gray-600 mb-3">
                    {relatedWine.vintage} • {relatedWine.varietal}
                  </p>
                  <p className="font-bodoni text-2xl text-gray-900">${relatedWine.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}