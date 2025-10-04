'use client'

import { useState, useEffect, useRef } from 'react'

interface WineFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  selectedSort: string
  onSortChange: (sort: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  priceRange: [number, number]
  onPriceRangeChange: (range: [number, number]) => void
  showInStock: boolean
  onInStockChange: (show: boolean) => void
  showClubOnly: boolean
  onClubOnlyChange: (show: boolean) => void
  selectedVarietals: string[]
  onVarietalsChange: (varietals: string[]) => void
  selectedYears: number[]
  onYearsChange: (years: number[]) => void
}

export default function WineFilters({
  selectedCategory,
  onCategoryChange,
  selectedSort,
  onSortChange,
  searchQuery,
  onSearchChange,
  priceRange,
  onPriceRangeChange,
  showInStock,
  onInStockChange,
  showClubOnly,
  onClubOnlyChange,
  selectedVarietals,
  onVarietalsChange,
  selectedYears,
  onYearsChange
}: WineFiltersProps) {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Mark that initial load is complete after mount
  useEffect(() => {
    setIsInitialLoad(false)
  }, [])

  // Scroll to wines section when category changes (but not on initial load)
  useEffect(() => {
    if (!isInitialLoad) {
      // Find the wines section and scroll to it
      const winesSection = document.getElementById('wines-collection')
      if (winesSection) {
        const headerHeight = 64 // Height of the fixed header
        const filterHeight = winesSection.offsetTop - headerHeight
        window.scrollTo({
          top: filterHeight,
          behavior: 'smooth'
        })
      }
    }
  }, [selectedCategory])

  // Focus search input when it appears
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [showSearch])

  const categories = [
    { value: 'all', label: 'All Wines' },
    { value: 'red', label: 'Reds' },
    { value: 'white', label: 'Whites' },
    { value: 'rose', label: 'Rosé' },
    { value: 'member', label: 'Member Exclusive' },
    { value: 'library', label: 'Library Selection' }
  ]

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price ↑' },
    { value: 'price-high', label: 'Price ↓' },
    { value: 'vintage-new', label: 'Newest' },
    { value: 'vintage-old', label: 'Oldest' }
  ]

  const varietals = [
    'Cabernet Sauvignon',
    'Merlot',
    'Pinot Noir',
    'Chardonnay',
    'Sauvignon Blanc',
    'Zinfandel',
    'Syrah',
    'Malbec'
  ]

  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
      <div className="max-w-[1400px] mx-auto px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Left side - Categories with dividers */}
          <div className="flex items-center">
            {categories.slice(0, 4).map((cat, index) => (
              <div key={cat.value} className="flex items-center">
                <button
                  onClick={() => onCategoryChange(cat.value)}
                  className={`relative py-2 px-3 transition-all duration-300 ${
                    selectedCategory === cat.value
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className="font-poppins text-[10px] tracking-[0.15em] uppercase">{cat.label}</span>
                  {selectedCategory === cat.value && (
                    <div className="absolute bottom-1 left-3 right-3 h-[1px] bg-gray-900" />
                  )}
                </button>
                {index < 3 && <div className="h-4 w-[1px] bg-gray-300" />}
              </div>
            ))}

            {/* Divider between wine types and special collections */}
            <div className="h-4 w-[1px] bg-gray-400 mx-2" />

            {categories.slice(4).map((cat, index) => (
              <div key={cat.value} className="flex items-center">
                <button
                  onClick={() => onCategoryChange(cat.value)}
                  className={`relative py-2 px-3 transition-all duration-300 ${
                    selectedCategory === cat.value
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className="font-poppins text-[10px] tracking-[0.15em] uppercase">{cat.label}</span>
                  {selectedCategory === cat.value && (
                    <div className="absolute bottom-1 left-3 right-3 h-[1px] bg-gray-900" />
                  )}
                </button>
                {index < categories.slice(4).length - 1 && <div className="h-4 w-[1px] bg-gray-300" />}
              </div>
            ))}
          </div>

          {/* Right side - Sort and Search/Filters */}
          <div className="flex items-center gap-3">
            <select
              value={selectedSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-transparent px-2 py-1 pr-6 font-poppins text-[10px] tracking-wider text-gray-700 uppercase focus:outline-none cursor-pointer border-b border-transparent hover:border-gray-300 transition-all"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className="h-4 w-[1px] bg-gray-300" />

            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className={`flex items-center gap-2 px-3 py-1 transition-all duration-200 ${
                showAdvancedFilters
                  ? 'text-wine-600 bg-wine-50 rounded'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              title="Search & Filters"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="font-poppins text-[10px] tracking-wider uppercase">Search & Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Search and Filters Panel */}
      {showAdvancedFilters && (
        <div className="border-t border-gray-200 bg-white/50">
          <div className="max-w-[1400px] mx-auto px-8 py-4">

            {/* Search Bar - Always show when panel is open */}
            <div className="mb-4">
              <div className="relative max-w-2xl mx-auto">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search wines, varietals, vineyards, or tasting notes..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 bg-white font-poppins text-sm placeholder:text-gray-400 focus:outline-none focus:border-wine-600 transition-colors"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Advanced Filters Grid */}
            {showAdvancedFilters && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Price Range */}
                <div>
                  <label className="font-poppins text-[9px] text-gray-600 uppercase tracking-wider mb-2 block">Price Range</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0"
                      max="500"
                      value={priceRange[0]}
                      onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
                      className="w-16 px-2 py-1 border border-gray-300 bg-white font-poppins text-xs focus:outline-none focus:border-wine-600"
                    />
                    <span className="text-gray-400 text-xs">–</span>
                    <input
                      type="number"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                      className="w-16 px-2 py-1 border border-gray-300 bg-white font-poppins text-xs focus:outline-none focus:border-wine-600"
                    />
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <label className="font-poppins text-[9px] text-gray-600 uppercase tracking-wider mb-2 block">Availability</label>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showInStock}
                        onChange={(e) => onInStockChange(e.target.checked)}
                        className="w-3 h-3 text-wine-600 border-gray-300 focus:ring-wine-600 rounded"
                      />
                      <span className="font-poppins text-[11px] text-gray-600">In Stock Only</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showClubOnly}
                        onChange={(e) => onClubOnlyChange(e.target.checked)}
                        className="w-3 h-3 text-wine-600 border-gray-300 focus:ring-wine-600 rounded"
                      />
                      <span className="font-poppins text-[11px] text-gray-600">Include Club Wines</span>
                    </label>
                  </div>
                </div>

                {/* Wine Types */}
                <div>
                  <label className="font-poppins text-[9px] text-gray-600 uppercase tracking-wider mb-2 block">Wine Types</label>
                  <div className="space-y-1 max-h-32 overflow-y-auto">
                    {varietals.slice(0, 5).map((varietal) => (
                      <label key={varietal} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedVarietals.includes(varietal)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              onVarietalsChange([...selectedVarietals, varietal])
                            } else {
                              onVarietalsChange(selectedVarietals.filter(v => v !== varietal))
                            }
                          }}
                          className="w-3 h-3 text-wine-600 border-gray-300 focus:ring-wine-600 rounded"
                        />
                        <span className="font-poppins text-[11px] text-gray-600">{varietal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Vintage Years */}
                <div>
                  <label className="font-poppins text-[9px] text-gray-600 uppercase tracking-wider mb-2 block">Vintage</label>
                  <div className="grid grid-cols-3 gap-1">
                    {years.slice(0, 6).map((year) => (
                      <label key={year} className="flex items-center gap-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedYears.includes(year)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              onYearsChange([...selectedYears, year])
                            } else {
                              onYearsChange(selectedYears.filter(y => y !== year))
                            }
                          }}
                          className="w-2.5 h-2.5 text-wine-600 border-gray-300 focus:ring-wine-600 rounded"
                        />
                        <span className="font-poppins text-[10px] text-gray-600">{year}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Clear All - Only show if filters are active */}
            {(showSearch || showAdvancedFilters) && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    onSearchChange('')
                    onPriceRangeChange([0, 500])
                    onInStockChange(false)
                    onClubOnlyChange(true)
                    onCategoryChange('all')
                    onSortChange('featured')
                    onVarietalsChange([])
                    onYearsChange([])
                    setShowSearch(false)
                    setShowAdvancedFilters(false)
                  }}
                  className="px-4 py-1 text-gray-500 hover:text-gray-700 font-poppins text-[9px] uppercase tracking-wider transition-all"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}