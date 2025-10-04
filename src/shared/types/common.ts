export interface ApiResponse<T = any> {
  data: T
  error?: string
  success: boolean
  metadata?: {
    timestamp: string
    version: string
  }
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  hasNext: boolean
  hasPrevious: boolean
}

export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface Price {
  amount: number
  currency: 'USD'
  displayPrice: string
}

export interface Address {
  line1: string
  line2?: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface ImageAsset {
  url: string
  alt: string
  width?: number
  height?: number
}

export type Status = 'active' | 'inactive' | 'pending' | 'archived'

export type SortDirection = 'asc' | 'desc'

export interface QueryParams {
  page?: number
  limit?: number
  sort?: string
  direction?: SortDirection
  search?: string
  filters?: Record<string, any>
}