export const APP_CONFIG = {
  name: 'Campana Ranch Wines',
  tagline: 'Exceptional Wines from Sonoma Valley',
  locale: 'en-US',
  currency: 'USD',
  timeZone: 'America/Los_Angeles',
}

export const API_ENDPOINTS = {
  COMMERCE7_BASE: process.env.NEXT_PUBLIC_COMMERCE7_API_URL || '',
  CMS_BASE: process.env.NEXT_PUBLIC_CMS_API_URL || '',
}

export const CACHE_KEYS = {
  WINES: 'wines',
  WINE_DETAIL: 'wine-detail',
  CART: 'cart',
  USER: 'user',
  CONTENT: 'content',
}

export const CACHE_TTL = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  LONG: 3600, // 1 hour
  DAY: 86400, // 24 hours
}

export const QUERY_DEFAULTS = {
  PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 100,
}

export const ROUTES = {
  HOME: '/',
  WINES: '/wines',
  WINE_DETAIL: '/wines/:slug',
  CLUB: '/club',
  ABOUT: '/about',
  VISIT: '/visit',
  EVENTS: '/events',
  BLOG: '/blog',
  CONTACT: '/contact',
  ACCOUNT: '/account',
  CART: '/cart',
  CHECKOUT: '/checkout',
}

export const WINE_CATEGORIES = [
  'Red',
  'White',
  'Rosé',
  'Sparkling',
  'Dessert',
] as const

export const WINE_VARIETALS = [
  'Cabernet Sauvignon',
  'Merlot',
  'Pinot Noir',
  'Chardonnay',
  'Sauvignon Blanc',
  'Pinot Grigio',
  'Zinfandel',
  'Syrah',
  'Malbec',
  'Riesling',
] as const