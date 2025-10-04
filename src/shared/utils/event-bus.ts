type EventHandler<T = any> = (data: T) => void | Promise<void>

interface EventSubscription {
  unsubscribe: () => void
}

class EventBus {
  private handlers: Map<string, Set<EventHandler>> = new Map()
  private debugMode: boolean = process.env.NODE_ENV === 'development'

  emit<T = any>(event: string, data: T): void {
    if (this.debugMode) {
      console.log(`[EventBus] Emitting event: ${event}`, data)
    }

    const eventHandlers = this.handlers.get(event)
    if (!eventHandlers) return

    eventHandlers.forEach(handler => {
      try {
        Promise.resolve(handler(data)).catch(error => {
          console.error(`[EventBus] Error in handler for event ${event}:`, error)
        })
      } catch (error) {
        console.error(`[EventBus] Sync error in handler for event ${event}:`, error)
      }
    })
  }

  on<T = any>(event: string, handler: EventHandler<T>): EventSubscription {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, new Set())
    }

    const eventHandlers = this.handlers.get(event)!
    eventHandlers.add(handler)

    if (this.debugMode) {
      console.log(`[EventBus] Subscribed to event: ${event}`)
    }

    return {
      unsubscribe: () => {
        eventHandlers.delete(handler)
        if (eventHandlers.size === 0) {
          this.handlers.delete(event)
        }
      }
    }
  }

  once<T = any>(event: string, handler: EventHandler<T>): EventSubscription {
    const subscription = this.on(event, (data: T) => {
      subscription.unsubscribe()
      handler(data)
    })
    return subscription
  }

  off(event: string, handler?: EventHandler): void {
    if (!handler) {
      this.handlers.delete(event)
      return
    }

    const eventHandlers = this.handlers.get(event)
    if (eventHandlers) {
      eventHandlers.delete(handler)
      if (eventHandlers.size === 0) {
        this.handlers.delete(event)
      }
    }
  }

  clear(): void {
    this.handlers.clear()
  }

  getHandlerCount(event: string): number {
    const eventHandlers = this.handlers.get(event)
    return eventHandlers ? eventHandlers.size : 0
  }
}

export const eventBus = new EventBus()

// Define standard events used across modules
export const ModuleEvents = {
  // Catalog Events
  WINE_VIEWED: 'catalog:wine:viewed',
  WINE_ADDED_TO_CART: 'catalog:wine:added_to_cart',

  // Commerce Events
  CART_UPDATED: 'commerce:cart:updated',
  ORDER_PLACED: 'commerce:order:placed',
  PAYMENT_COMPLETED: 'commerce:payment:completed',

  // Customer Events
  USER_LOGGED_IN: 'customer:user:logged_in',
  USER_LOGGED_OUT: 'customer:user:logged_out',
  USER_PROFILE_UPDATED: 'customer:user:profile_updated',

  // Club Events
  CLUB_JOINED: 'club:membership:joined',
  CLUB_SHIPMENT_CUSTOMIZED: 'club:shipment:customized',

  // Content Events
  PAGE_VIEWED: 'content:page:viewed',
  BLOG_POST_READ: 'content:blog:read',

  // Events Module Events
  EVENT_BOOKED: 'events:event:booked',
  EVENT_CANCELLED: 'events:event:cancelled',

  // Analytics Events
  TRACK_EVENT: 'analytics:track:event',
  TRACK_CONVERSION: 'analytics:track:conversion',
} as const

export type ModuleEventType = typeof ModuleEvents[keyof typeof ModuleEvents]