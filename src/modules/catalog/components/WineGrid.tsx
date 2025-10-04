import { Wine } from '../types/wine'
import WineCard from './WineCard'

interface WineGridProps {
  wines: Wine[]
  showClubPrice?: boolean
  loading?: boolean
}

export default function WineGrid({ wines, showClubPrice = false, loading = false }: WineGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-lg h-96 animate-pulse" />
        ))}
      </div>
    )
  }

  if (wines.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No wines found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {wines.map(wine => (
        <WineCard key={wine.id} wine={wine} showClubPrice={showClubPrice} />
      ))}
    </div>
  )
}