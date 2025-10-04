// Wine Club Types - Ready for Commerce7 Integration

export interface ClubTier {
  id: string
  name: string
  slug: string
  description: string
  image: string
  price: {
    quarterly: number
    annual: number
  }
  bottles: number
  shipments: number // per year
  savings: string // e.g., "20% off"
  benefits: string[]
  featured?: boolean
  commerce7Id?: string // For future integration
}

export interface ClubBenefit {
  id: string
  icon: string
  title: string
  description: string
}

export interface ClubMember {
  id: string
  firstName: string
  lastName: string
  email: string
  tier: ClubTier
  joinDate: Date
  status: 'active' | 'paused' | 'cancelled'
  commerce7CustomerId?: string
}

export interface ClubShipment {
  id: string
  memberId: string
  shipmentDate: Date
  wines: {
    wineId: string
    quantity: number
    price: number
  }[]
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  tracking?: string
}

export interface JoinClubFormData {
  tierId: string
  billingFrequency: 'quarterly' | 'annual'
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  shippingAddress: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  billingAddress?: {
    sameAsShipping: boolean
    street?: string
    city?: string
    state?: string
    zip?: string
    country?: string
  }
  paymentMethod?: {
    // Placeholder for Commerce7 payment integration
    token?: string
  }
}