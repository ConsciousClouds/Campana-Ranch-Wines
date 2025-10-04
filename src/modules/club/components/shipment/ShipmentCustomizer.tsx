'use client'

import { useState } from 'react'
import { Wine, ShipmentPreferences } from '../../types/shipment'

interface ShipmentCustomizerProps {
  onBrowseCollection: () => void
  onSetPreferences: (preferences: ShipmentPreferences) => void
  onAddWines?: () => void
  availableWines?: Wine[]
}

export default function ShipmentCustomizer({
  onBrowseCollection,
  onSetPreferences,
  onAddWines,
  availableWines
}: ShipmentCustomizerProps) {
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<ShipmentPreferences>({})

  const handleSavePreferences = () => {
    onSetPreferences(preferences)
    setShowPreferences(false)
  }

  return (
    <div className="space-y-3">
      <button
        onClick={onBrowseCollection}
        className="w-full text-left border border-gray-300 px-4 py-3 font-poppins text-sm hover:border-wine-600 transition-colors flex justify-between items-center group"
      >
        <span>Browse Full Collection</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>

      <button
        onClick={() => setShowPreferences(!showPreferences)}
        className="w-full text-left border border-gray-300 px-4 py-3 font-poppins text-sm hover:border-wine-600 transition-colors flex justify-between items-center group"
      >
        <span>Set Preferences</span>
        <span className={`transition-transform ${showPreferences ? 'rotate-90' : ''} group-hover:translate-x-1`}>
          →
        </span>
      </button>

      {showPreferences && (
        <div className="bg-gray-50 p-4 space-y-4">
          <h5 className="font-cinzel text-sm text-gray-900 mb-3">
            Wine Preferences
          </h5>

          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={preferences.redOnly}
                onChange={(e) => setPreferences({
                  ...preferences,
                  redOnly: e.target.checked,
                  whiteOnly: false
                })}
                className="w-4 h-4 text-wine-600 focus:ring-wine-500"
              />
              <span className="font-poppins text-sm text-gray-700">Red wines only</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={preferences.whiteOnly}
                onChange={(e) => setPreferences({
                  ...preferences,
                  whiteOnly: e.target.checked,
                  redOnly: false
                })}
                className="w-4 h-4 text-wine-600 focus:ring-wine-500"
              />
              <span className="font-poppins text-sm text-gray-700">White wines only</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={preferences.mixedOnly}
                onChange={(e) => setPreferences({
                  ...preferences,
                  mixedOnly: e.target.checked
                })}
                className="w-4 h-4 text-wine-600 focus:ring-wine-500"
              />
              <span className="font-poppins text-sm text-gray-700">Mixed selection</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={preferences.noChardonnay}
                onChange={(e) => setPreferences({
                  ...preferences,
                  noChardonnay: e.target.checked
                })}
                className="w-4 h-4 text-wine-600 focus:ring-wine-500"
              />
              <span className="font-poppins text-sm text-gray-700">No Chardonnay</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={preferences.noMerlot}
                onChange={(e) => setPreferences({
                  ...preferences,
                  noMerlot: e.target.checked
                })}
                className="w-4 h-4 text-wine-600 focus:ring-wine-500"
              />
              <span className="font-poppins text-sm text-gray-700">No Merlot</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={preferences.organicOnly}
                onChange={(e) => setPreferences({
                  ...preferences,
                  organicOnly: e.target.checked
                })}
                className="w-4 h-4 text-wine-600 focus:ring-wine-500"
              />
              <span className="font-poppins text-sm text-gray-700">Organic only</span>
            </label>
          </div>

          <div>
            <label className="block font-poppins text-sm text-gray-700 mb-2">
              Max price per bottle
            </label>
            <select
              value={preferences.maxPricePerBottle || ''}
              onChange={(e) => setPreferences({
                ...preferences,
                maxPricePerBottle: e.target.value ? Number(e.target.value) : undefined
              })}
              className="w-full border border-gray-300 px-3 py-2 font-poppins text-sm focus:border-wine-600 focus:ring-wine-600"
            >
              <option value="">No limit</option>
              <option value="40">Under $40</option>
              <option value="50">Under $50</option>
              <option value="60">Under $60</option>
              <option value="75">Under $75</option>
              <option value="100">Under $100</option>
            </select>
          </div>

          <button
            onClick={handleSavePreferences}
            className="w-full bg-wine-600 text-white px-4 py-2 font-poppins text-sm hover:bg-wine-700 transition-colors"
          >
            Apply Preferences
          </button>
        </div>
      )}

      {onAddWines && (
        <button
          onClick={onAddWines}
          className="w-full text-left border border-gray-300 px-4 py-3 font-poppins text-sm hover:border-wine-600 transition-colors flex justify-between items-center group"
        >
          <span>Add Extra Bottles</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      )}

      {availableWines && availableWines.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h5 className="font-cinzel text-sm text-gray-900 mb-3">
            Quick Add
          </h5>
          <div className="space-y-2">
            {availableWines.slice(0, 3).map(wine => (
              <button
                key={wine.id}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
              >
                <div>
                  <p className="font-poppins text-sm text-gray-900">{wine.name}</p>
                  <p className="font-poppins text-xs text-gray-500">{wine.type}</p>
                </div>
                <p className="font-bodoni text-sm text-gray-700">
                  ${wine.memberPrice || wine.price}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}