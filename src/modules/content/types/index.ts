import { BaseEntity, ImageAsset } from '@types/common'

export interface Page extends BaseEntity {
  title: string
  slug: string
  description?: string
  content: ContentBlock[]
  seo: SEOMetadata
  status: 'draft' | 'published'
  publishedAt?: Date
}

export interface BlogPost extends BaseEntity {
  title: string
  slug: string
  excerpt: string
  content: string // Markdown or rich text
  author: Author
  featuredImage?: ImageAsset
  category: string
  tags: string[]
  seo: SEOMetadata
  status: 'draft' | 'published'
  publishedAt: Date
  readingTime: number // in minutes
}

export interface Author {
  id: string
  name: string
  bio?: string
  avatar?: ImageAsset
  role?: string
}

export interface ContentBlock {
  id: string
  type: ContentBlockType
  data: any
}

export type ContentBlockType =
  | 'hero'
  | 'text'
  | 'image'
  | 'gallery'
  | 'video'
  | 'quote'
  | 'cta'
  | 'wines-grid'
  | 'testimonial'
  | 'accordion'
  | 'tabs'

export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: ImageAsset
  ogTitle?: string
  ogDescription?: string
  twitterCard?: 'summary' | 'summary_large_image'
  canonical?: string
  robots?: string
}

export interface Event extends BaseEntity {
  title: string
  slug: string
  description: string
  type: EventType
  startDate: Date
  endDate: Date
  location: EventLocation
  capacity: number
  attendees: number
  price?: number
  image?: ImageAsset
  status: 'upcoming' | 'ongoing' | 'past' | 'cancelled'
  registrationRequired: boolean
  registrationDeadline?: Date
}

export type EventType =
  | 'tasting'
  | 'tour'
  | 'dinner'
  | 'release'
  | 'private'
  | 'virtual'

export interface EventLocation {
  name: string
  address?: string
  city?: string
  state?: string
  coordinates?: {
    lat: number
    lng: number
  }
  isVirtual: boolean
  virtualUrl?: string
}

export interface MenuItem {
  id: string
  label: string
  url: string
  target?: '_self' | '_blank'
  children?: MenuItem[]
}

export interface Navigation {
  main: MenuItem[]
  footer: MenuItem[]
  mobile?: MenuItem[]
}