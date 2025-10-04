import { ClubTier, ClubBenefit } from '../types'

// Mock data based on typical wine club structure
// Ready to be replaced with Commerce7 API calls

export const clubTiers: ClubTier[] = [
  {
    id: '1',
    name: 'Estate Collection',
    slug: 'estate-collection',
    description: 'Our signature tier featuring hand-selected wines from our estate vineyard. Perfect for the discerning wine enthusiast.',
    image: '/vineyard-hero.png',
    price: {
      quarterly: 195,
      annual: 720
    },
    bottles: 3,
    shipments: 4,
    savings: '15% off retail',
    benefits: [
      'Complimentary tastings for 4 guests',
      '15% discount on all wine purchases',
      'Free shipping on club shipments',
      'Early access to new releases',
      'Invitations to exclusive member events',
      'Birthday month bonus bottle'
    ],
    featured: false,
    commerce7Id: 'club_estate' // Placeholder for Commerce7 integration
  },
  {
    id: '2',
    name: 'Reserve Selection',
    slug: 'reserve-selection',
    description: 'Experience our most exclusive wines, including limited production and library selections available only to members.',
    image: '/cellar-doors.jpg',
    price: {
      quarterly: 395,
      annual: 1480
    },
    bottles: 6,
    shipments: 4,
    savings: '20% off retail',
    benefits: [
      'Complimentary tastings for 6 guests',
      '20% discount on all wine purchases',
      'Free shipping on all orders',
      'First access to limited releases',
      'VIP invitations to winemaker dinners',
      'Personalized wine consultations',
      'Annual harvest experience invitation',
      'Birthday month magnum upgrade'
    ],
    featured: true,
    commerce7Id: 'club_reserve'
  },
  {
    id: '3',
    name: "Collector's Circle",
    slug: 'collectors-circle',
    description: 'The ultimate membership for serious collectors. Receive our rarest allocations and enjoy unparalleled access to the winery.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=2000',
    price: {
      quarterly: 795,
      annual: 2980
    },
    bottles: 12,
    shipments: 4,
    savings: '25% off retail',
    benefits: [
      'Unlimited complimentary tastings',
      '25% discount on all wine purchases',
      'Free shipping worldwide',
      'Guaranteed allocations of all wines',
      'Private cellar tours with the winemaker',
      'Exclusive access to library wines',
      'Custom wine blending experience',
      'Annual private dinner at the estate',
      'Personalized case curation',
      'Complimentary vineyard picnic setup'
    ],
    featured: false,
    commerce7Id: 'club_collectors'
  }
]

export const clubBenefits: ClubBenefit[] = [
  {
    id: '1',
    icon: '🍷',
    title: 'Curated Selections',
    description: 'Hand-picked wines selected by our winemaker, delivered to your door quarterly'
  },
  {
    id: '2',
    icon: '💰',
    title: 'Member Savings',
    description: 'Enjoy 15-25% off all wine purchases and exclusive member pricing'
  },
  {
    id: '3',
    icon: '📦',
    title: 'Free Shipping',
    description: 'Complimentary shipping on all club shipments and qualifying orders'
  },
  {
    id: '4',
    icon: '🎉',
    title: 'Exclusive Events',
    description: 'Invitations to member-only events, dinners, and vineyard experiences'
  },
  {
    id: '5',
    icon: '🥂',
    title: 'Tasting Privileges',
    description: 'Complimentary tastings for you and your guests at our tasting room'
  },
  {
    id: '6',
    icon: '🎁',
    title: 'Special Perks',
    description: 'Birthday bonuses, early access to new releases, and surprise gifts'
  }
]

// Mock Commerce7 API service (to be replaced with actual API)
export const clubService = {
  async getTiers(): Promise<ClubTier[]> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(clubTiers), 100)
    })
  },

  async getTierBySlug(slug: string): Promise<ClubTier | null> {
    const tier = clubTiers.find(t => t.slug === slug)
    return new Promise((resolve) => {
      setTimeout(() => resolve(tier || null), 100)
    })
  },

  async joinClub(formData: any): Promise<{ success: boolean; memberId?: string }> {
    // This will be replaced with Commerce7 API call
    console.log('Commerce7 Integration: Join club with data:', formData)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          memberId: 'mock-member-' + Date.now()
        })
      }, 1000)
    })
  }
}