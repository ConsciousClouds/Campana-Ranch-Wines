'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import Image from 'next/image'
import WineCard from '@/src/modules/wines/components/WineCard'
import WineCardSkeleton from '@/src/modules/wines/components/WineCardSkeleton'
import WineFilters from '@/src/modules/wines/components/WineFilters'
import { mockWines } from '@/src/modules/wines/services/mockData'

export default function WinesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSort, setSelectedSort] = useState('featured')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])
  const [showInStock, setShowInStock] = useState(false)
  const [showClubOnly, setShowClubOnly] = useState(true)
  const [selectedVarietals, setSelectedVarietals] = useState<string[]>([])
  const [selectedYears, setSelectedYears] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false)
  const winesSectionRef = useRef<HTMLElement>(null)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Auto-scroll after hero animation
  useEffect(() => {
    if (!hasAutoScrolled) {
      // Wait for hero to be visible, then auto-scroll
      const scrollTimer = setTimeout(() => {
        if (winesSectionRef.current) {
          winesSectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
        setHasAutoScrolled(true)
      }, 3500) // 3.5 seconds to appreciate the hero

      // Cancel auto-scroll if user scrolls manually
      const handleManualScroll = () => {
        clearTimeout(scrollTimer)
        setHasAutoScrolled(true)
      }

      window.addEventListener('scroll', handleManualScroll, { once: true })

      return () => {
        clearTimeout(scrollTimer)
        window.removeEventListener('scroll', handleManualScroll)
      }
    }
  }, [hasAutoScrolled])

  // Filter and sort wines
  const filteredWines = useMemo(() => {
    let wines = [...mockWines]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      wines = wines.filter(wine =>
        wine.name.toLowerCase().includes(query) ||
        wine.varietal.toLowerCase().includes(query) ||
        wine.vineyard?.toLowerCase().includes(query) ||
        wine.description.toLowerCase().includes(query)
      )
    }

    // Filter by category
    if (selectedCategory === 'member') {
      wines = wines.filter(wine => wine.clubOnly === true)
    } else if (selectedCategory === 'library') {
      wines = wines.filter(wine => wine.vintage && wine.vintage < 2019) // Library = older vintages
    } else if (selectedCategory !== 'all') {
      wines = wines.filter(wine => wine.category === selectedCategory)
    }

    // Price range filter
    wines = wines.filter(wine => wine.price >= priceRange[0] && wine.price <= priceRange[1])

    // In stock filter
    if (showInStock) {
      wines = wines.filter(wine => wine.inStock)
    }

    // Club only filter
    if (!showClubOnly) {
      wines = wines.filter(wine => !wine.clubOnly)
    }

    // Varietal filter
    if (selectedVarietals.length > 0) {
      wines = wines.filter(wine => selectedVarietals.includes(wine.varietal))
    }

    // Year filter
    if (selectedYears.length > 0) {
      wines = wines.filter(wine => selectedYears.includes(wine.vintage))
    }

    // Sort wines
    switch (selectedSort) {
      case 'featured':
        wines.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      case 'price-low':
        wines.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        wines.sort((a, b) => b.price - a.price)
        break
      case 'vintage-new':
        wines.sort((a, b) => b.vintage - a.vintage)
        break
      case 'vintage-old':
        wines.sort((a, b) => a.vintage - b.vintage)
        break
    }

    return wines
  }, [selectedCategory, selectedSort, searchQuery, priceRange, showInStock, showClubOnly, selectedVarietals, selectedYears])

  return (
    <main className="min-h-screen bg-cream">
      {/* Neoclassical Hero - Minimal and elegant with animations */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/vineyard-hero.png"
            alt="Campana Ranch Vineyard"
            fill
            className="object-cover animate-ken-burns"
            priority
          />
          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          {/* Minimal accent - Fade in */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="w-20 h-[1px] bg-white/30" />
            <p className="font-poppins text-xs tracking-[0.3em] text-white/70 uppercase">Collection</p>
            <div className="w-20 h-[1px] bg-white/30" />
          </div>

          <h1 className="font-cinzel font-light text-5xl md:text-7xl mb-6 tracking-wide animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Our Wines
          </h1>

          <p className="font-poppins font-light text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto tracking-wide animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            Meticulously crafted from our estate vineyards,<br className="hidden md:block" />
            each vintage represents the pinnacle of our terroir.
          </p>

          {/* Scroll indicator - appears after content */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up opacity-0" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <WineFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        showInStock={showInStock}
        onInStockChange={setShowInStock}
        showClubOnly={showClubOnly}
        onClubOnlyChange={setShowClubOnly}
        selectedVarietals={selectedVarietals}
        onVarietalsChange={setSelectedVarietals}
        selectedYears={selectedYears}
        onYearsChange={setSelectedYears}
      />

      {/* Wine Collection - Luxury grid */}
      <section id="wines-collection" ref={winesSectionRef} className="py-20 bg-cream">
        <div className="max-w-[1400px] mx-auto px-8">
          {/* Results count - Minimal */}
          <div className="mb-12">
            <p className="font-poppins text-xs tracking-[0.2em] text-gray-500 uppercase text-center">
              {filteredWines.length} Selections Available
            </p>
          </div>

          {/* Wine Grid - Symmetrical neoclassical */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
              {[...Array(8)].map((_, i) => (
                <WineCardSkeleton key={i} />
              ))}
            </div>
          ) : filteredWines.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
              {filteredWines.map((wine, index) => (
                <div
                  key={wine.id}
                  className="opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <WineCard wine={wine} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-poppins text-gray-600 mb-4">
                No wines found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setPriceRange([0, 500])
                  setShowInStock(false)
                  setShowClubOnly(true)
                  setSelectedCategory('all')
                  setSelectedSort('featured')
                  setSelectedVarietals([])
                  setSelectedYears([])
                }}
                className="text-wine-600 hover:text-wine-700 font-poppins text-sm underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Winemaker's Philosophy - Elegant */}
          <div className="mt-32 mb-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex items-center justify-center gap-8 mb-12">
                <div className="w-24 h-[1px] bg-gray-300" />
                <span className="font-poppins text-[10px] tracking-[0.3em] text-gray-500 uppercase">Philosophy</span>
                <div className="w-24 h-[1px] bg-gray-300" />
              </div>

              <h2 className="font-cinzel font-light text-4xl text-gray-900">
                The Art of Winemaking
              </h2>

              <p className="font-poppins font-light text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                "We believe in minimal intervention, allowing our terroir to express itself fully
                in each bottle. Every vintage captures a moment in time—the unique convergence
                of soil, climate, and craftsmanship."
              </p>

              <div className="mt-8">
                <p className="font-poppins text-xs tracking-[0.2em] text-gray-500 uppercase mb-2">Marco Campana</p>
                <p className="font-bodoni text-sm text-gray-600 italic">Third Generation Winemaker</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit CTA - Refined luxury */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="space-y-8">
            <h3 className="font-cinzel font-light text-3xl text-white tracking-wide">
              Experience Campana Ranch
            </h3>

            <p className="font-poppins font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
              Visit our estate for an intimate tasting experience.<br />
              Discover the story behind each vintage.
            </p>

            <div className="flex gap-6 justify-center pt-4">
              <a
                href="/visit"
                className="group relative overflow-hidden bg-white text-gray-900 px-10 py-4 font-poppins text-sm tracking-wider uppercase transition-all hover:text-white"
              >
                <span className="relative z-10">Reserve Tasting</span>
                <div className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </a>

              <a
                href="/club"
                className="border border-white/30 text-white px-10 py-4 font-poppins text-sm tracking-wider uppercase hover:bg-white/10 transition-all"
              >
                Wine Club
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}