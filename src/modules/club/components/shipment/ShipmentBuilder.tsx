'use client'

import { useState, useEffect } from 'react'
import ShipmentSelector from './ShipmentSelector'
import ShipmentCustomizer from './ShipmentCustomizer'
import OrderSummary from './OrderSummary'
import { Shipment, ShipmentPreferences } from '../../types/shipment'
import { shipmentService } from '../../services/shipmentService'

interface ShipmentBuilderProps {
  bottleCount: number
  isNewMember?: boolean
}

export default function ShipmentBuilder({
  bottleCount,
  isNewMember = true
}: ShipmentBuilderProps) {
  const [shipment, setShipment] = useState<Shipment | null>(null)
  const [isCustomizing, setIsCustomizing] = useState(false)
  const [selectedWineForSwap, setSelectedWineForSwap] = useState<string | null>(null)

  useEffect(() => {
    // Load initial shipment
    const initialShipment = shipmentService.getCurrentShipment(bottleCount)
    setShipment(initialShipment)
  }, [bottleCount])

  const handleSwapWine = (wineId: string) => {
    setSelectedWineForSwap(wineId)
    setIsCustomizing(true)
  }

  const handleRemoveWine = (wineId: string) => {
    if (!shipment) return

    const updatedWines = shipment.wines.filter(w => w.id !== wineId)
    const updatedShipment = {
      ...shipment,
      wines: updatedWines,
      totalBottles: updatedWines.reduce((sum, w) => sum + w.quantity, 0)
    }
    setShipment(updatedShipment)
  }

  const handleBrowseCollection = () => {
    setIsCustomizing(true)
    // In production, this would open a modal or navigate to collection page
    console.log('Browse collection')
  }

  const handleSetPreferences = (preferences: ShipmentPreferences) => {
    if (!shipment) return

    const updatedShipment = shipmentService.applyPreferences(shipment, preferences)
    setShipment(updatedShipment)
  }

  const handleAddWines = () => {
    setIsCustomizing(true)
    // In production, this would open wine selection modal
    console.log('Add wines')
  }

  const handleCheckout = () => {
    if (!shipment) return

    // In production, this would initiate Commerce7 checkout
    console.log('Proceed to checkout', shipment)
  }

  if (!shipment) return null

  return (
    <div className="bg-white p-12">
      <div className="text-center mb-10">
        <h3 className="font-cinzel text-2xl text-gray-900 mb-2">
          Your Shipment
        </h3>
        <p className="font-poppins text-sm text-gray-600">
          {shipment.season} {shipment.year} Collection
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Wine Selection & Customization */}
          <div>
            <ShipmentSelector
              wines={shipment.wines}
              onSwapWine={handleSwapWine}
              onRemoveWine={handleRemoveWine}
              editable={true}
            />

            <ShipmentCustomizer
              onBrowseCollection={handleBrowseCollection}
              onSetPreferences={handleSetPreferences}
              onAddWines={handleAddWines}
              availableWines={shipmentService.getAvailableWines(
                shipment.wines.map(w => w.id)
              ).slice(0, 3)}
            />
          </div>

          {/* Right: Order Summary */}
          <div>
            <OrderSummary
              shipment={shipment}
              onCheckout={handleCheckout}
              isNewMember={isNewMember}
            />
          </div>
        </div>

        {/* Wine Selection Modal (placeholder) */}
        {isCustomizing && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white max-w-4xl w-full max-h-[80vh] overflow-auto p-8">
              <h3 className="font-cinzel text-2xl text-gray-900 mb-6">
                Customize Your Shipment
              </h3>
              <p className="font-poppins text-sm text-gray-600 mb-8">
                Wine selection interface would go here. This would show available wines,
                allow swapping, and manage preferences.
              </p>
              <button
                onClick={() => setIsCustomizing(false)}
                className="bg-wine-600 text-white px-6 py-2 font-poppins text-sm hover:bg-wine-700"
              >
                Done Customizing
              </button>
            </div>
          </div>
        )}

        <p className="font-poppins text-xs text-gray-500 text-center mt-8">
          Questions? Contact us at{' '}
          <a href="mailto:info@campanaranchwines.com" className="text-wine-600 hover:text-wine-700">
            info@campanaranchwines.com
          </a>
        </p>
      </div>
    </div>
  )
}