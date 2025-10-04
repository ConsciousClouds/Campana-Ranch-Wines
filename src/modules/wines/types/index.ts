// Wine types with ranch-authentic fields

export interface VintageData {
  vintage: number
  price: number
  inStock: boolean
  alcohol?: string
  production?: string // e.g., "450 cases"
  harvestDate?: string
  bottlingDate?: string
  tastingNotes?: {
    aroma: string[]
    flavor: string[]
    finish: string
    pairings: string[]
  }
  story?: string
  commerce7Id?: string
  commerce7Sku?: string
}

export interface Wine {
  id: string
  name: string
  vintage: number // Current/default vintage
  varietal: string
  price: number // Current/default price
  image: string
  description: string
  category: 'red' | 'white' | 'rose'
  featured: boolean
  inStock: boolean // Current/default stock
  clubOnly: boolean

  // Ranch-specific details
  vineyard?: string
  block?: string
  alcohol?: string // Current/default
  production?: string // Current/default
  harvestDate?: string
  bottlingDate?: string

  // Tasting notes with country feel
  tastingNotes?: {
    aroma: string[]
    flavor: string[]
    finish: string
    pairings: string[]
  }

  // Winemaker's story
  story?: string
  winemaker?: string

  // Commerce7 integration
  commerce7Id?: string
  commerce7Sku?: string

  // Multiple vintages support
  vintages?: VintageData[]
  productionFrequency?: 'annual' | 'biennial' | 'occasional' // How often wine is made

  // Awards and recognition
  accolades?: {
    score: string // e.g., "95 Points", "Gold Medal", "★★★★★"
    publication: string // e.g., "Wine Spectator", "Robert Parker"
    year?: string
    description?: string
  }[]
}