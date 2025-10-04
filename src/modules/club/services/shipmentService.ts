import { Wine, Shipment, ShipmentWine, ShipmentPreferences } from '../types/shipment'

// Mock wine collection - in production, this would come from Commerce7
export const wineCollection: Wine[] = [
  { id: '1', name: '2021 Estate Cabernet', type: 'Red', vintage: 2021, price: 75, available: true, featured: true, memberPrice: 60 },
  { id: '2', name: '2022 Reserve Chardonnay', type: 'White', vintage: 2022, price: 55, available: true, memberPrice: 44 },
  { id: '3', name: '2021 Pinot Noir', type: 'Red', vintage: 2021, price: 65, available: true, featured: true, memberPrice: 52 },
  { id: '4', name: '2022 Sauvignon Blanc', type: 'White', vintage: 2022, price: 45, available: true, memberPrice: 36 },
  { id: '5', name: '2020 Merlot', type: 'Red', vintage: 2020, price: 60, available: true, memberPrice: 48 },
  { id: '6', name: '2021 Rosé', type: 'Rosé', vintage: 2021, price: 40, available: true, memberPrice: 32 },
  { id: '7', name: '2019 Reserve Cabernet', type: 'Red', vintage: 2019, price: 95, available: true, featured: true, memberPrice: 76 },
  { id: '8', name: '2022 Viognier', type: 'White', vintage: 2022, price: 50, available: true, memberPrice: 40 },
  { id: '9', name: '2020 Syrah', type: 'Red', vintage: 2020, price: 70, available: true, memberPrice: 56 },
  { id: '10', name: '2021 Zinfandel', type: 'Red', vintage: 2021, price: 55, available: true, memberPrice: 44 },
]

export const shipmentService = {
  // Get current/upcoming shipment
  getCurrentShipment: (bottleCount: number = 6): Shipment => {
    const wines = getDefaultSelection(bottleCount)
    return calculateShipmentTotals({
      id: 'spring-2024',
      season: 'Spring',
      year: 2024,
      wines,
      totalBottles: bottleCount,
      subtotal: 0,
      discount: 0,
      shipping: 0,
      total: 0,
      status: 'preview'
    })
  },

  // Apply member preferences to shipment
  applyPreferences: (shipment: Shipment, preferences: ShipmentPreferences): Shipment => {
    let wines = [...wineCollection]

    if (preferences.redOnly) {
      wines = wines.filter(w => w.type === 'Red')
    } else if (preferences.whiteOnly) {
      wines = wines.filter(w => w.type === 'White')
    }

    if (preferences.noChardonnay) {
      wines = wines.filter(w => !w.name.toLowerCase().includes('chardonnay'))
    }

    if (preferences.noMerlot) {
      wines = wines.filter(w => !w.name.toLowerCase().includes('merlot'))
    }

    if (preferences.maxPricePerBottle) {
      wines = wines.filter(w => (w.memberPrice || w.price) <= preferences.maxPricePerBottle)
    }

    const selectedWines = wines
      .slice(0, shipment.totalBottles)
      .map(w => ({ ...w, quantity: 1, isLocked: false }))

    return calculateShipmentTotals({
      ...shipment,
      wines: selectedWines
    })
  },

  // Swap a wine in the shipment
  swapWine: (shipment: Shipment, oldWineId: string, newWineId: string): Shipment => {
    const newWine = wineCollection.find(w => w.id === newWineId)
    if (!newWine) return shipment

    const updatedWines = shipment.wines.map(w =>
      w.id === oldWineId
        ? { ...newWine, quantity: w.quantity, isLocked: false }
        : w
    )

    return calculateShipmentTotals({
      ...shipment,
      wines: updatedWines
    })
  },

  // Add additional bottles
  addBottles: (shipment: Shipment, wineId: string, quantity: number): Shipment => {
    const wine = wineCollection.find(w => w.id === wineId)
    if (!wine) return shipment

    const existingWine = shipment.wines.find(w => w.id === wineId)

    let updatedWines
    if (existingWine) {
      updatedWines = shipment.wines.map(w =>
        w.id === wineId
          ? { ...w, quantity: w.quantity + quantity }
          : w
      )
    } else {
      updatedWines = [...shipment.wines, { ...wine, quantity, isLocked: false }]
    }

    return calculateShipmentTotals({
      ...shipment,
      wines: updatedWines,
      totalBottles: shipment.totalBottles + quantity
    })
  },

  // Get available wines for swapping
  getAvailableWines: (excludeIds: string[] = []): Wine[] => {
    return wineCollection.filter(w => w.available && !excludeIds.includes(w.id))
  },

  // Get wine recommendations based on preferences
  getRecommendations: (preferences: ShipmentPreferences, limit: number = 6): Wine[] => {
    let wines = [...wineCollection]

    if (preferences.redOnly) {
      wines = wines.filter(w => w.type === 'Red')
    } else if (preferences.whiteOnly) {
      wines = wines.filter(w => w.type === 'White')
    }

    // Sort by featured first, then by price
    wines.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return a.price - b.price
    })

    return wines.slice(0, limit)
  }
}

// Helper functions
function getDefaultSelection(bottleCount: number): ShipmentWine[] {
  // Create a balanced selection
  const selection: ShipmentWine[] = []
  const featuredWines = wineCollection.filter(w => w.featured)
  const otherWines = wineCollection.filter(w => !w.featured)

  // Add featured wines first
  featuredWines.slice(0, Math.min(3, bottleCount)).forEach(wine => {
    selection.push({ ...wine, quantity: 1, isLocked: false })
  })

  // Fill remaining with other wines
  const remaining = bottleCount - selection.length
  otherWines.slice(0, remaining).forEach(wine => {
    selection.push({ ...wine, quantity: 1, isLocked: false })
  })

  return selection
}

function calculateShipmentTotals(shipment: Shipment): Shipment {
  const subtotal = shipment.wines.reduce((sum, wine) => {
    return sum + (wine.price * wine.quantity)
  }, 0)

  const memberDiscount = shipment.wines.reduce((sum, wine) => {
    const memberPrice = wine.memberPrice || wine.price * 0.8
    return sum + ((wine.price - memberPrice) * wine.quantity)
  }, 0)

  const shipping = 0 // Free shipping for members
  const total = subtotal - memberDiscount + shipping

  return {
    ...shipment,
    subtotal,
    discount: memberDiscount,
    shipping,
    total
  }
}