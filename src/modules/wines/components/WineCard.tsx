'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Wine } from '../types'

interface WineCardProps {
  wine: Wine
}

export default function WineCard({ wine }: WineCardProps) {
  return (
    <Link href={`/wines/${wine.id}`} className="group block">

      <div className="relative bg-cream overflow-hidden transition-all duration-700 group-hover:shadow-2xl">
        {/* Club Only Badge - Elegant minimal */}
        {wine.clubOnly && (
          <div className="absolute top-4 left-4 z-10">
            <span className="font-poppins text-[10px] tracking-[0.2em] text-white bg-black/80 px-3 py-1.5 uppercase">Members Only</span>
          </div>
        )}

        {/* Wine Image - Luxury presentation */}
        <div className="relative h-80 overflow-hidden bg-gradient-to-b from-stone-50 to-cream">
          <Image
            src={wine.image}
            alt={wine.name}
            fill
            className="object-contain transition-all duration-1000 group-hover:scale-110"
          />
          {/* Elegant gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent opacity-40" />

          {/* Hover overlay with details */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <p className="font-cinzel text-sm tracking-wider mb-2">View Details</p>
              <div className="w-16 h-[1px] bg-white/50 mx-auto" />
            </div>
          </div>
        </div>

        {/* Content - Neoclassical luxury */}
        <div className="p-6 space-y-3">
          {/* Varietal - Minimal elegance */}
          <p className="font-poppins text-[10px] tracking-[0.3em] text-gray-500 uppercase">
            {wine.varietal}
          </p>

          {/* Wine Name & Vintage - Classic typography */}
          <div>
            <h3 className="font-cinzel font-light text-xl text-gray-900 leading-tight">
              {wine.name}
            </h3>
            <p className="font-bodoni text-2xl text-gray-800 mt-1">{wine.vintage}</p>
          </div>

          {/* Minimal divider */}
          <div className="w-12 h-[1px] bg-gray-200" />

          {/* Vineyard - Subtle detail */}
          {wine.vineyard && (
            <p className="font-poppins text-[11px] text-gray-500">
              {wine.vineyard}
            </p>
          )}

          {/* Price section - Refined */}
          <div className="pt-4">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-poppins text-[11px] text-gray-500">From</span>
                <p className="font-bodoni text-2xl text-gray-900">${wine.price}</p>
              </div>
              {!wine.inStock && (
                <span className="font-poppins text-[10px] tracking-wider text-gray-400 uppercase">Sold Out</span>
              )}
            </div>
          </div>

        </div>
      </div>
    </Link>
  )
}