import { BaseEntity, Price, ImageAsset } from '@types/common'

export interface Wine extends BaseEntity {
  name: string
  slug: string
  description: string
  shortDescription: string
  vintage: number
  varietal: string
  category: WineCategory
  alcohol: number
  volume: number // in ml
  sku: string
  price: Price
  clubPrice?: Price
  inventory: number
  featured: boolean
  images: ImageAsset[]
  tastingNotes: TastingNotes
  vineyard: string
  winemaker: string
  awards?: Award[]
  pairings?: string[]
  servingTemp?: {
    min: number
    max: number
    unit: 'C' | 'F'
  }
  reviews?: Review[]
  rating?: number
  tags?: string[]
}

export interface TastingNotes {
  aroma: string[]
  taste: string[]
  finish: string
  body: 'Light' | 'Medium' | 'Full'
  tannins?: 'Low' | 'Medium' | 'High'
  acidity?: 'Low' | 'Medium' | 'High'
  sweetness?: 'Dry' | 'Off-Dry' | 'Semi-Sweet' | 'Sweet'
}

export interface Award {
  competition: string
  year: number
  medal: 'Gold' | 'Silver' | 'Bronze' | 'Platinum'
  score?: number
}

export interface Review {
  id: string
  author: string
  rating: number
  comment: string
  createdAt: Date
  verified: boolean
}

export type WineCategory = 'Red' | 'White' | 'Rosé' | 'Sparkling' | 'Dessert'

export interface WineFilter {
  category?: WineCategory[]
  varietal?: string[]
  vintage?: number[]
  priceRange?: {
    min: number
    max: number
  }
  rating?: number
  inStock?: boolean
  featured?: boolean
}

export interface WineSearchParams {
  query?: string
  filters?: WineFilter
  sort?: WineSortOption
  page?: number
  limit?: number
}

export type WineSortOption =
  | 'name_asc'
  | 'name_desc'
  | 'price_asc'
  | 'price_desc'
  | 'vintage_asc'
  | 'vintage_desc'
  | 'rating_desc'
  | 'newest'