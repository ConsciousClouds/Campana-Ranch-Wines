// Public API for Catalog Module
export * from './types/wine'
export * from './domain/services/wine-service'
export * from './domain/services/wine-recommendation'
export * from './hooks/useWines'
export * from './hooks/useWineDetail'

// Export components (lazy loaded in app)
export { default as WineCard } from './components/WineCard'
export { default as WineGrid } from './components/WineGrid'
export { default as WineDetail } from './components/WineDetail'
export { default as WineFilters } from './components/WineFilters'