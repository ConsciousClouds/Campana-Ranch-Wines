export default function WineCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="relative bg-white rounded-sm overflow-hidden shadow-md border border-red-900/20">
        {/* Image skeleton */}
        <div className="h-64 bg-gradient-to-b from-red-900/10 to-red-900/5" />

        {/* Content skeleton */}
        <div className="p-5">
          {/* Vintage & Varietal */}
          <div className="flex items-baseline justify-between mb-2">
            <div className="h-8 w-16 bg-red-900/10 rounded" />
            <div className="h-4 w-24 bg-red-900/10 rounded" />
          </div>

          {/* Wine Name */}
          <div className="h-6 w-3/4 bg-gray-200 rounded mb-2" />

          {/* Vineyard info */}
          <div className="h-3 w-1/2 bg-red-900/10 rounded mb-2" />

          {/* Description */}
          <div className="space-y-2 mb-4">
            <div className="h-3 w-full bg-gray-100 rounded" />
            <div className="h-3 w-5/6 bg-gray-100 rounded" />
            <div className="h-3 w-4/6 bg-gray-100 rounded" />
          </div>

          {/* Bottom section */}
          <div className="pt-3 border-t border-red-900/20">
            <div className="flex items-end justify-between">
              <div className="h-7 w-20 bg-gray-200 rounded" />
              <div className="flex gap-2">
                <div className="h-5 w-5 bg-red-900/10 rounded" />
                <div className="h-5 w-5 bg-red-900/10 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}