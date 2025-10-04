'use client'

import { useState, useRef, useEffect } from 'react'
import { VintageData } from '@/src/modules/wines/types'

interface VintageDropdownProps {
  vintages: VintageData[]
  currentVintage: number
  selectedVintage: number
  onVintageChange: (vintage: number) => void
  className?: string
  compact?: boolean
}

export default function VintageDropdown({
  vintages,
  currentVintage,
  selectedVintage,
  onVintageChange,
  className = '',
  compact = false
}: VintageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Sort vintages by year descending
  const sortedVintages = [...vintages].sort((a, b) => b.vintage - a.vintage)
  const selectedVintageData = vintages.find(v => v.vintage === selectedVintage)

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group relative flex items-center justify-between
          bg-white border border-gray-200 rounded-sm
          font-poppins text-gray-900
          hover:border-wine-600 focus:outline-none focus:border-wine-600
          transition-all duration-200 cursor-pointer
          ${compact ? 'px-3 py-2 text-sm min-w-[100px]' : 'px-6 py-3 text-base min-w-[140px]'}
          ${isOpen ? 'border-wine-600 shadow-lg' : 'shadow-sm hover:shadow-md'}
        `}
      >
        {/* Selected Value */}
        <div className="flex flex-col items-start">
          <span className={`font-bodoni ${compact ? 'text-lg' : 'text-2xl'} leading-none`}>
            {selectedVintage}
          </span>
          {!compact && !selectedVintageData?.inStock && (
            <span className="font-poppins text-[10px] text-red-600 uppercase tracking-wider mt-1">
              Sold Out
            </span>
          )}
        </div>

        {/* Dropdown Icon */}
        <svg
          className={`ml-3 text-gray-400 group-hover:text-wine-600 transition-all duration-200 ${
            isOpen ? 'rotate-180 text-wine-600' : ''
          } ${compact ? 'w-3 h-3' : 'w-4 h-4'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`
          absolute z-50 mt-2 bg-white border border-gray-200 rounded-sm shadow-xl
          overflow-hidden animate-fade-in-down
          ${compact ? 'min-w-[100px]' : 'min-w-[140px] right-0'}
        `}>
          {/* Vintage Label */}
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
            <p className="font-poppins text-[10px] tracking-[0.2em] text-gray-600 uppercase">
              Select Vintage
            </p>
          </div>

          {/* Vintage Options */}
          <div className="max-h-64 overflow-y-auto">
            {sortedVintages.map((vintage) => {
              const isSelected = vintage.vintage === selectedVintage
              const isCurrent = vintage.vintage === currentVintage

              return (
                <button
                  key={vintage.vintage}
                  onClick={() => {
                    onVintageChange(vintage.vintage)
                    setIsOpen(false)
                  }}
                  className={`
                    w-full px-4 py-3 flex items-center justify-between
                    hover:bg-wine-50 transition-colors duration-150
                    ${isSelected ? 'bg-wine-50 border-l-2 border-wine-600' : ''}
                  `}
                >
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2">
                      <span className={`font-bodoni ${compact ? 'text-lg' : 'text-xl'} text-gray-900`}>
                        {vintage.vintage}
                      </span>
                      {isCurrent && !isSelected && (
                        <span className="font-poppins text-[9px] tracking-wider text-wine-600 uppercase">
                          Current
                        </span>
                      )}
                    </div>

                    {!compact && (
                      <div className="flex items-center gap-3 mt-1">
                        <span className="font-poppins text-xs text-gray-600">
                          ${vintage.price}
                        </span>
                        {vintage.production && (
                          <>
                            <span className="text-gray-400">·</span>
                            <span className="font-poppins text-xs text-gray-500">
                              {vintage.production}
                            </span>
                          </>
                        )}
                        {!vintage.inStock && (
                          <>
                            <span className="text-gray-400">·</span>
                            <span className="font-poppins text-[10px] text-red-600 uppercase tracking-wider">
                              Sold Out
                            </span>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {isSelected && (
                    <svg className="w-4 h-4 text-wine-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              )
            })}
          </div>

          {/* Quick Stats Footer (only in full mode) */}
          {!compact && sortedVintages.length > 1 && (
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
              <p className="font-poppins text-[10px] text-gray-500">
                {sortedVintages.length} vintages available · {sortedVintages.filter(v => v.inStock).length} in stock
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}