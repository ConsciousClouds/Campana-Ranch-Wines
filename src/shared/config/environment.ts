export const ENV = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  IS_TEST: process.env.NODE_ENV === 'test',

  // Commerce7 Configuration
  COMMERCE7: {
    API_URL: process.env.NEXT_PUBLIC_COMMERCE7_API_URL || '',
    TENANT_ID: process.env.NEXT_PUBLIC_COMMERCE7_TENANT_ID || '',
    API_KEY: process.env.COMMERCE7_API_KEY || '',
    WEBHOOK_SECRET: process.env.COMMERCE7_WEBHOOK_SECRET || '',
  },

  // CMS Configuration (Strapi)
  CMS: {
    API_URL: process.env.NEXT_PUBLIC_CMS_API_URL || 'http://localhost:1337',
    API_TOKEN: process.env.CMS_API_TOKEN || '',
  },

  // Database
  DATABASE: {
    URL: process.env.DATABASE_URL || '',
  },

  // Redis Cache
  REDIS: {
    URL: process.env.REDIS_URL || '',
  },

  // Analytics
  ANALYTICS: {
    GA_ID: process.env.NEXT_PUBLIC_GA_ID || '',
    PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || '',
  },

  // Email
  EMAIL: {
    SMTP_HOST: process.env.SMTP_HOST || '',
    SMTP_PORT: process.env.SMTP_PORT || '587',
    SMTP_USER: process.env.SMTP_USER || '',
    SMTP_PASS: process.env.SMTP_PASS || '',
    FROM_EMAIL: process.env.EMAIL_FROM || 'noreply@campanaranchwines.com',
  },

  // Feature Flags
  FEATURES: {
    ENABLE_WINE_CLUB: process.env.NEXT_PUBLIC_ENABLE_WINE_CLUB === 'true',
    ENABLE_EVENTS: process.env.NEXT_PUBLIC_ENABLE_EVENTS === 'true',
    ENABLE_BLOG: process.env.NEXT_PUBLIC_ENABLE_BLOG === 'true',
  },
}

export function validateEnvironment(): void {
  const required = [
    'NEXT_PUBLIC_COMMERCE7_API_URL',
    'NEXT_PUBLIC_COMMERCE7_TENANT_ID',
  ]

  const missing = required.filter(key => !process.env[key])

  if (missing.length > 0 && ENV.IS_PRODUCTION) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }
}