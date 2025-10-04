import { ENV } from '@config/environment'

interface StrapiConfig {
  apiUrl: string
  apiToken?: string
}

interface StrapiResponse<T = any> {
  data: T
  meta?: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
  error?: {
    status: number
    name: string
    message: string
    details?: any
  }
}

interface StrapiQuery {
  populate?: string | string[] | Record<string, any>
  filters?: Record<string, any>
  sort?: string | string[]
  pagination?: {
    page?: number
    pageSize?: number
  }
  publicationState?: 'live' | 'preview'
}

export class StrapiClient {
  private config: StrapiConfig

  constructor(config?: Partial<StrapiConfig>) {
    this.config = {
      apiUrl: config?.apiUrl || ENV.CMS.API_URL,
      apiToken: config?.apiToken || ENV.CMS.API_TOKEN,
    }

    if (!this.config.apiUrl) {
      console.warn('Strapi client not configured with API URL')
    }
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }

    if (this.config.apiToken) {
      headers['Authorization'] = `Bearer ${this.config.apiToken}`
    }

    return headers
  }

  private buildQueryString(query?: StrapiQuery): string {
    if (!query) return ''

    const params = new URLSearchParams()

    if (query.populate) {
      if (typeof query.populate === 'string') {
        params.set('populate', query.populate)
      } else if (Array.isArray(query.populate)) {
        params.set('populate', query.populate.join(','))
      } else {
        params.set('populate', JSON.stringify(query.populate))
      }
    }

    if (query.filters) {
      Object.entries(query.filters).forEach(([key, value]) => {
        if (typeof value === 'object') {
          params.set(`filters[${key}]`, JSON.stringify(value))
        } else {
          params.set(`filters[${key}]`, String(value))
        }
      })
    }

    if (query.sort) {
      const sortString = Array.isArray(query.sort)
        ? query.sort.join(',')
        : query.sort
      params.set('sort', sortString)
    }

    if (query.pagination) {
      if (query.pagination.page) {
        params.set('pagination[page]', query.pagination.page.toString())
      }
      if (query.pagination.pageSize) {
        params.set('pagination[pageSize]', query.pagination.pageSize.toString())
      }
    }

    if (query.publicationState) {
      params.set('publicationState', query.publicationState)
    }

    const queryString = params.toString()
    return queryString ? `?${queryString}` : ''
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<StrapiResponse<T>> {
    try {
      const url = `${this.config.apiUrl}/api${endpoint}`
      const response = await fetch(url, {
        ...options,
        headers: this.getHeaders(),
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          data: null as any,
          error: data.error || {
            status: response.status,
            name: 'RequestError',
            message: `Request failed with status ${response.status}`,
          },
        }
      }

      return data
    } catch (error) {
      console.error('Strapi request failed:', error)
      return {
        data: null as any,
        error: {
          status: 500,
          name: 'NetworkError',
          message: (error as Error).message,
        },
      }
    }
  }

  // Content Types
  async find<T>(
    contentType: string,
    query?: StrapiQuery
  ): Promise<StrapiResponse<T[]>> {
    const queryString = this.buildQueryString(query)
    return this.request(`/${contentType}${queryString}`)
  }

  async findOne<T>(
    contentType: string,
    id: string | number,
    query?: StrapiQuery
  ): Promise<StrapiResponse<T>> {
    const queryString = this.buildQueryString(query)
    return this.request(`/${contentType}/${id}${queryString}`)
  }

  async create<T>(contentType: string, data: any): Promise<StrapiResponse<T>> {
    return this.request(`/${contentType}`, {
      method: 'POST',
      body: JSON.stringify({ data }),
    })
  }

  async update<T>(
    contentType: string,
    id: string | number,
    data: any
  ): Promise<StrapiResponse<T>> {
    return this.request(`/${contentType}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ data }),
    })
  }

  async delete(
    contentType: string,
    id: string | number
  ): Promise<StrapiResponse<any>> {
    return this.request(`/${contentType}/${id}`, {
      method: 'DELETE',
    })
  }

  // Specific content helpers
  async getPages(query?: StrapiQuery) {
    return this.find('pages', {
      ...query,
      populate: ['seo', 'content', 'content.image'],
    })
  }

  async getPage(slug: string) {
    return this.find('pages', {
      filters: { slug },
      populate: ['seo', 'content', 'content.image'],
      pagination: { pageSize: 1 },
    })
  }

  async getBlogPosts(query?: StrapiQuery) {
    return this.find('blog-posts', {
      ...query,
      populate: ['author', 'featuredImage', 'seo'],
      sort: query?.sort || 'publishedAt:desc',
    })
  }

  async getBlogPost(slug: string) {
    return this.find('blog-posts', {
      filters: { slug },
      populate: ['author', 'featuredImage', 'seo'],
      pagination: { pageSize: 1 },
    })
  }

  async getEvents(query?: StrapiQuery) {
    return this.find('events', {
      ...query,
      populate: ['image', 'location'],
      sort: query?.sort || 'startDate:asc',
    })
  }

  async getEvent(slug: string) {
    return this.find('events', {
      filters: { slug },
      populate: ['image', 'location'],
      pagination: { pageSize: 1 },
    })
  }

  async getNavigation(name: 'main' | 'footer' | 'mobile' = 'main') {
    return this.find('navigations', {
      filters: { name },
      populate: ['items'],
      pagination: { pageSize: 1 },
    })
  }
}

// Export singleton instance
export const strapiClient = new StrapiClient()