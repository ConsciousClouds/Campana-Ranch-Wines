export interface Wine {
  id: string
  name: string
  type: 'Red' | 'White' | 'Rosé' | 'Sparkling'
  vintage: number
  price: number
  description?: string
  image?: string
  available: boolean
  featured?: boolean
  memberPrice?: number
  inventory?: number
}

export interface ShipmentWine extends Wine {
  quantity: number
  isLocked?: boolean
}

export interface Shipment {
  id: string
  season: string
  year: number
  wines: ShipmentWine[]
  totalBottles: number
  subtotal: number
  discount: number
  shipping: number
  total: number
  status?: 'preview' | 'customizing' | 'confirmed'
}

export interface ShipmentPreferences {
  redOnly?: boolean
  whiteOnly?: boolean
  noChardonnay?: boolean
  noMerlot?: boolean
  mixedOnly?: boolean
  organicOnly?: boolean
  maxPricePerBottle?: number
}

export interface ShipmentCustomization {
  shipmentId: string
  originalWines: ShipmentWine[]
  customizedWines: ShipmentWine[]
  preferences?: ShipmentPreferences
  notes?: string
}