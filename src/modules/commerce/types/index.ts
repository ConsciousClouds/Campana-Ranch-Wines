import { BaseEntity, Price, Address } from '@types/common'

export interface Cart {
  id: string
  items: CartItem[]
  subtotal: Price
  tax: Price
  shipping: Price
  discount?: Price
  total: Price
  couponCode?: string
  notes?: string
}

export interface CartItem {
  id: string
  productId: string
  productName: string
  productSlug: string
  quantity: number
  price: Price
  total: Price
  image?: string
  metadata?: Record<string, any>
}

export interface Order extends BaseEntity {
  orderNumber: string
  status: OrderStatus
  customerId: string
  items: OrderItem[]
  subtotal: Price
  tax: Price
  shipping: Price
  discount?: Price
  total: Price
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: PaymentMethod
  trackingNumber?: string
  notes?: string
}

export interface OrderItem {
  id: string
  productId: string
  productName: string
  quantity: number
  price: Price
  total: Price
}

export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'confirmed'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export interface PaymentMethod {
  type: 'credit_card' | 'paypal' | 'apple_pay' | 'google_pay'
  last4?: string
  brand?: string
}

export interface CheckoutSession {
  id: string
  cart: Cart
  customer?: Customer
  shippingAddress?: Address
  billingAddress?: Address
  shippingMethod?: ShippingMethod
  paymentMethod?: PaymentMethod
  step: CheckoutStep
}

export type CheckoutStep =
  | 'customer'
  | 'shipping'
  | 'payment'
  | 'review'
  | 'complete'

export interface ShippingMethod {
  id: string
  name: string
  description: string
  price: Price
  estimatedDays: number
}

export interface Customer extends BaseEntity {
  email: string
  firstName: string
  lastName: string
  phone?: string
  birthDate?: Date
  clubMember: boolean
  lifetimeValue: Price
  totalOrders: number
  tags?: string[]
}