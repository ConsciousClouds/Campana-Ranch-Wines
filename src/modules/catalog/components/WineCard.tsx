import Image from 'next/image'
import Link from 'next/link'
import { Wine } from '../types/wine'

interface WineCardProps {
  wine: Wine
  showClubPrice?: boolean
}

export default function WineCard({ wine, showClubPrice = false }: WineCardProps) {
  return (
    <Link href={wine.slug ? `/wines/${wine.slug}` : `/wines/${wine.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
          <Image
            src={wine.images[0]?.url || '/images/wine-placeholder.jpg'}
            alt={wine.images[0]?.alt || wine.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {wine.featured && (
            <span className="absolute top-4 left-4 bg-wine-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
          {wine.inventory < 10 && wine.inventory > 0 && (
            <span className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
              Low Stock
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-wine-600 transition-colors">
            {wine.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{wine.varietal} • {wine.vintage}</p>
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">
            {wine.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-bold text-gray-900">
                {wine.price.displayPrice}
              </p>
              {showClubPrice && wine.clubPrice && (
                <p className="text-sm text-wine-600">
                  Club: {wine.clubPrice.displayPrice}
                </p>
              )}
            </div>
            {wine.rating && (
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-600 ml-1">{wine.rating}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}