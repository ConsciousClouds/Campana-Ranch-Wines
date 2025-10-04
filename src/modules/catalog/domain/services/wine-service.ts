import { Wine, WineFilter, WineSearchParams, WineSortOption } from '../../types/wine'
import { mockWines } from '../../data/mock-wines'

class WineService {
  private wines: Wine[] = mockWines

  async getAllWines(): Promise<Wine[]> {
    // Simulate API delay
    await this.delay(100)
    return this.wines
  }

  async getWineBySlug(slug: string): Promise<Wine | null> {
    await this.delay(100)
    return this.wines.find(wine => wine.slug === slug) || null
  }

  async getWineById(id: string): Promise<Wine | null> {
    await this.delay(100)
    return this.wines.find(wine => wine.id === id) || null
  }

  async getFeaturedWines(): Promise<Wine[]> {
    await this.delay(100)
    return this.wines.filter(wine => wine.featured)
  }

  async searchWines(params: WineSearchParams): Promise<{
    wines: Wine[]
    total: number
    page: number
    pageSize: number
  }> {
    await this.delay(150)

    let filteredWines = [...this.wines]

    // Apply filters
    if (params.filters) {
      filteredWines = this.applyFilters(filteredWines, params.filters)
    }

    // Apply search query
    if (params.query) {
      const query = params.query.toLowerCase()
      filteredWines = filteredWines.filter(wine =>
        wine.name.toLowerCase().includes(query) ||
        wine.description.toLowerCase().includes(query) ||
        wine.varietal.toLowerCase().includes(query)
      )
    }

    // Apply sorting
    if (params.sort) {
      filteredWines = this.sortWines(filteredWines, params.sort)
    }

    // Apply pagination
    const page = params.page || 1
    const limit = params.limit || 12
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedWines = filteredWines.slice(startIndex, endIndex)

    return {
      wines: paginatedWines,
      total: filteredWines.length,
      page,
      pageSize: limit,
    }
  }

  private applyFilters(wines: Wine[], filters: WineFilter): Wine[] {
    let filtered = wines

    if (filters.category && filters.category.length > 0) {
      filtered = filtered.filter(wine =>
        filters.category!.includes(wine.category)
      )
    }

    if (filters.varietal && filters.varietal.length > 0) {
      filtered = filtered.filter(wine =>
        filters.varietal!.includes(wine.varietal)
      )
    }

    if (filters.vintage && filters.vintage.length > 0) {
      filtered = filtered.filter(wine =>
        filters.vintage!.includes(wine.vintage)
      )
    }

    if (filters.priceRange) {
      filtered = filtered.filter(wine =>
        wine.price.amount >= filters.priceRange!.min &&
        wine.price.amount <= filters.priceRange!.max
      )
    }

    if (filters.rating !== undefined) {
      filtered = filtered.filter(wine =>
        (wine.rating || 0) >= filters.rating!
      )
    }

    if (filters.inStock !== undefined) {
      filtered = filtered.filter(wine =>
        filters.inStock ? wine.inventory > 0 : wine.inventory === 0
      )
    }

    if (filters.featured !== undefined) {
      filtered = filtered.filter(wine => wine.featured === filters.featured)
    }

    return filtered
  }

  private sortWines(wines: Wine[], sort: WineSortOption): Wine[] {
    const sorted = [...wines]

    switch (sort) {
      case 'name_asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case 'name_desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name))
      case 'price_asc':
        return sorted.sort((a, b) => a.price.amount - b.price.amount)
      case 'price_desc':
        return sorted.sort((a, b) => b.price.amount - a.price.amount)
      case 'vintage_asc':
        return sorted.sort((a, b) => a.vintage - b.vintage)
      case 'vintage_desc':
        return sorted.sort((a, b) => b.vintage - a.vintage)
      case 'rating_desc':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
      case 'newest':
        return sorted.sort((a, b) =>
          b.createdAt.getTime() - a.createdAt.getTime()
        )
      default:
        return sorted
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  // Additional utility methods
  async getWinesByCategory(category: Wine['category']): Promise<Wine[]> {
    await this.delay(100)
    return this.wines.filter(wine => wine.category === category)
  }

  async getWinesByVarietal(varietal: string): Promise<Wine[]> {
    await this.delay(100)
    return this.wines.filter(wine => wine.varietal === varietal)
  }

  async getRelatedWines(wineId: string, limit: number = 4): Promise<Wine[]> {
    await this.delay(100)
    const wine = await this.getWineById(wineId)
    if (!wine) return []

    // Find wines with same category or varietal
    const related = this.wines.filter(w =>
      w.id !== wineId &&
      (w.category === wine.category || w.varietal === wine.varietal)
    )

    return related.slice(0, limit)
  }
}

// Export singleton instance
export const wineService = new WineService()