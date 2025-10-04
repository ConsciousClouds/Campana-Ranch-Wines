import { ENV } from '@config/environment'

interface Commerce7Config {
  apiUrl: string
  tenantId: string
  apiKey?: string
}

interface Commerce7Response<T = any> {
  data: T
  errors?: Array<{ message: string; code?: string }>
  success: boolean
}

export class Commerce7Client {
  private config: Commerce7Config

  constructor(config?: Partial<Commerce7Config>) {
    this.config = {
      apiUrl: config?.apiUrl || ENV.COMMERCE7.API_URL,
      tenantId: config?.tenantId || ENV.COMMERCE7.TENANT_ID,
      apiKey: config?.apiKey || ENV.COMMERCE7.API_KEY,
    }

    if (!this.config.apiUrl || !this.config.tenantId) {
      console.warn('Commerce7 client not properly configured')
    }
  }

  private getHeaders(additionalHeaders?: HeadersInit): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'X-Tenant-Id': this.config.tenantId,
      ...additionalHeaders,
    }

    if (this.config.apiKey) {
      headers['Authorization'] = `Bearer ${this.config.apiKey}`
    }

    return headers
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<Commerce7Response<T>> {
    try {
      const url = `${this.config.apiUrl}${endpoint}`
      const response = await fetch(url, {
        ...options,
        headers: this.getHeaders(options?.headers),
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          data: null as any,
          errors: data.errors || [{ message: `HTTP ${response.status}` }],
          success: false,
        }
      }

      return {
        data,
        success: true,
      }
    } catch (error) {
      console.error('Commerce7 request failed:', error)
      return {
        data: null as any,
        errors: [{ message: (error as Error).message }],
        success: false,
      }
    }
  }

  // Products/Wines
  async getProducts(params?: {
    page?: number
    limit?: number
    filter?: string
  }): Promise<Commerce7Response<any[]>> {
    const queryParams = new URLSearchParams()
    if (params?.page) queryParams.set('page', params.page.toString())
    if (params?.limit) queryParams.set('limit', params.limit.toString())
    if (params?.filter) queryParams.set('filter', params.filter)

    return this.request(`/products?${queryParams}`)
  }

  async getProduct(idOrSlug: string): Promise<Commerce7Response<any>> {
    return this.request(`/products/${idOrSlug}`)
  }

  // Cart
  async getCart(cartId: string): Promise<Commerce7Response<any>> {
    return this.request(`/carts/${cartId}`)
  }

  async createCart(): Promise<Commerce7Response<any>> {
    return this.request('/carts', {
      method: 'POST',
      body: JSON.stringify({}),
    })
  }

  async addToCart(
    cartId: string,
    productId: string,
    quantity: number
  ): Promise<Commerce7Response<any>> {
    return this.request(`/carts/${cartId}/items`, {
      method: 'POST',
      body: JSON.stringify({ productId, quantity }),
    })
  }

  async updateCartItem(
    cartId: string,
    itemId: string,
    quantity: number
  ): Promise<Commerce7Response<any>> {
    return this.request(`/carts/${cartId}/items/${itemId}`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity }),
    })
  }

  async removeFromCart(
    cartId: string,
    itemId: string
  ): Promise<Commerce7Response<any>> {
    return this.request(`/carts/${cartId}/items/${itemId}`, {
      method: 'DELETE',
    })
  }

  // Checkout
  async createCheckout(cartId: string): Promise<Commerce7Response<any>> {
    return this.request('/checkout', {
      method: 'POST',
      body: JSON.stringify({ cartId }),
    })
  }

  async updateCheckout(
    checkoutId: string,
    data: any
  ): Promise<Commerce7Response<any>> {
    return this.request(`/checkout/${checkoutId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
  }

  async completeCheckout(checkoutId: string): Promise<Commerce7Response<any>> {
    return this.request(`/checkout/${checkoutId}/complete`, {
      method: 'POST',
    })
  }

  // Customers
  async getCustomer(customerId: string): Promise<Commerce7Response<any>> {
    return this.request(`/customers/${customerId}`)
  }

  async createCustomer(data: {
    email: string
    firstName: string
    lastName: string
    phone?: string
  }): Promise<Commerce7Response<any>> {
    return this.request('/customers', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateCustomer(
    customerId: string,
    data: any
  ): Promise<Commerce7Response<any>> {
    return this.request(`/customers/${customerId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
  }

  // Orders
  async getOrders(customerId: string): Promise<Commerce7Response<any[]>> {
    return this.request(`/customers/${customerId}/orders`)
  }

  async getOrder(orderId: string): Promise<Commerce7Response<any>> {
    return this.request(`/orders/${orderId}`)
  }

  // Wine Club
  async getClubMemberships(customerId: string): Promise<Commerce7Response<any[]>> {
    return this.request(`/customers/${customerId}/club-memberships`)
  }

  async joinClub(
    customerId: string,
    clubId: string
  ): Promise<Commerce7Response<any>> {
    return this.request('/club-memberships', {
      method: 'POST',
      body: JSON.stringify({ customerId, clubId }),
    })
  }

  async updateClubShipment(
    membershipId: string,
    shipmentId: string,
    items: any[]
  ): Promise<Commerce7Response<any>> {
    return this.request(
      `/club-memberships/${membershipId}/shipments/${shipmentId}`,
      {
        method: 'PATCH',
        body: JSON.stringify({ items }),
      }
    )
  }
}

// Export singleton instance
export const commerce7Client = new Commerce7Client()