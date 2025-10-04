'use client'

import { ShipmentWine } from '../../types/shipment'

interface ShipmentSelectorProps {
  wines: ShipmentWine[]
  onSwapWine: (wineId: string) => void
  onRemoveWine?: (wineId: string) => void
  editable?: boolean
}

export default function ShipmentSelector({
  wines,
  onSwapWine,
  onRemoveWine,
  editable = true
}: ShipmentSelectorProps) {
  return (
    <div>
      <h4 className="font-cinzel text-lg text-gray-900 mb-6">
        Selected Wines
      </h4>

      <div className="space-y-4 mb-8">
        {wines.map((wine) => (
          <div
            key={wine.id}
            className="flex justify-between items-center border-b border-gray-200 pb-3"
          >
            <div className="flex-1">
              <h5 className="font-cinzel text-base text-gray-900">
                {wine.name}
              </h5>
              <div className="flex items-center gap-4 mt-1">
                <span className="font-poppins text-xs text-gray-500 uppercase tracking-wider">
                  {wine.type}
                </span>
                {wine.quantity > 1 && (
                  <span className="font-poppins text-xs text-gray-600">
                    × {wine.quantity}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-bodoni text-lg text-gray-700">
                  ${wine.memberPrice || wine.price}
                </p>
                {wine.memberPrice && wine.memberPrice < wine.price && (
                  <p className="font-poppins text-xs text-gray-400 line-through">
                    ${wine.price}
                  </p>
                )}
              </div>

              {editable && !wine.isLocked && (
                <div className="flex gap-2">
                  <button
                    onClick={() => onSwapWine(wine.id)}
                    className="text-xs text-wine-600 font-poppins hover:text-wine-700"
                  >
                    Change
                  </button>
                  {onRemoveWine && wine.quantity === 1 && (
                    <button
                      onClick={() => onRemoveWine(wine.id)}
                      className="text-xs text-gray-400 font-poppins hover:text-gray-600"
                    >
                      Remove
                    </button>
                  )}
                </div>
              )}

              {wine.isLocked && (
                <span className="text-xs text-gray-400 font-poppins">
                  Required
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {wines.length === 0 && (
        <div className="text-center py-8 text-gray-500 font-poppins text-sm">
          No wines selected. Browse our collection to add wines to your shipment.
        </div>
      )}
    </div>
  )
}