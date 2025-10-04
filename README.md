# Campana Ranch Wines - Modular Monolith Architecture

A modern, scalable e-commerce platform for Campana Ranch Wines, built with Next.js 14+, TypeScript, and a modular monolith architecture. Integrates with Commerce7 for wine commerce and supports free CMS options like Strapi.

## 🏗️ Architecture Overview

This project implements a **modular monolith** architecture, providing:
- Clear module boundaries with defined interfaces
- Shared kernel for common functionality
- Event-driven inter-module communication
- Ready for microservices migration if needed

### Key Modules

- **Catalog**: Wine product management and display
- **Commerce**: Commerce7 integration, cart, and checkout
- **Content**: CMS integration for pages and blog
- **Club**: Wine club management
- **Customer**: Authentication and user profiles
- **Events**: Event management and bookings
- **Analytics**: Tracking and reporting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Commerce7 account (for e-commerce functionality)
- Strapi instance (optional, for CMS)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/campana-ranch-wines.git
cd campana-ranch-wines
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your `.env.local` with:
   - Commerce7 API credentials
   - CMS API URL and token (if using Strapi)
   - Other optional services

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
campana-ranch-wines/
├── src/
│   ├── modules/           # Business modules
│   │   ├── catalog/       # Wine catalog
│   │   ├── commerce/      # E-commerce & checkout
│   │   ├── content/       # CMS content
│   │   ├── club/          # Wine club
│   │   ├── customer/      # User management
│   │   ├── events/        # Events & tastings
│   │   └── analytics/     # Analytics tracking
│   │
│   ├── shared/            # Shared kernel
│   │   ├── components/    # Common UI components
│   │   ├── hooks/         # Shared React hooks
│   │   ├── utils/         # Utility functions
│   │   ├── types/         # Shared TypeScript types
│   │   └── config/        # Configuration
│   │
│   ├── infrastructure/    # Technical infrastructure
│   │   ├── database/      # Database utilities
│   │   ├── cache/         # Caching layer
│   │   └── monitoring/    # Logging & monitoring
│   │
│   └── app/               # Next.js App Router
│       ├── (public)/      # Public routes
│       ├── (authenticated)/ # Protected routes
│       └── api/           # API routes
│
├── tests/                 # Test suites
├── docs/                  # Documentation
└── public/                # Static assets
```

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier
npm run test         # Run tests
npm run analyze      # Analyze bundle size
```

## 🔧 Module Development

### Creating a New Module

1. Create module directory structure:
```bash
mkdir -p src/modules/your-module/{api,components,data,domain,types}
```

2. Define the module's public API in `index.ts`
3. Keep all internal logic private to the module
4. Use the event bus for cross-module communication

### Module Communication

Modules communicate via the event bus:

```typescript
import { eventBus, ModuleEvents } from '@shared/utils/event-bus'

// Emit an event
eventBus.emit(ModuleEvents.WINE_ADDED_TO_CART, { wineId, quantity })

// Subscribe to events
eventBus.on(ModuleEvents.ORDER_PLACED, handleOrderPlaced)
```

## 🔌 External Integrations

### Commerce7

The Commerce module integrates with Commerce7 for:
- Product catalog sync
- Cart and checkout
- Customer management
- Wine club operations
- Order processing

Configure in `.env.local`:
```
NEXT_PUBLIC_COMMERCE7_API_URL=https://api.commerce7.com/v1
NEXT_PUBLIC_COMMERCE7_TENANT_ID=your-tenant-id
COMMERCE7_API_KEY=your-api-key
```

### Strapi CMS (Free Option)

The Content module can integrate with Strapi for:
- Page content management
- Blog posts
- Event listings
- Media management

Configure in `.env.local`:
```
NEXT_PUBLIC_CMS_API_URL=http://localhost:1337
CMS_API_TOKEN=your-strapi-token
```

## 🎨 Styling

The project uses Tailwind CSS with custom wine-themed configuration:
- Custom color palette (wine, cream, gold)
- Typography presets
- Animation utilities
- Responsive design system

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Docker

```bash
docker build -t campana-ranch-wines .
docker run -p 3000:3000 campana-ranch-wines
```

## 📈 Performance

- Modular architecture for code splitting
- Image optimization with Next.js Image
- API response caching
- Static page generation where possible
- Progressive Web App capabilities

## 🔒 Security

- Environment variables for sensitive data
- API route protection
- Input validation
- CORS configuration
- Rate limiting on API routes

## 🧪 Testing

```bash
npm run test:unit        # Unit tests
npm run test:integration # Integration tests
npm run test:e2e        # End-to-end tests
```

## 📚 Documentation

- [Architecture Guide](docs/architecture/README.md)
- [Module Development](docs/modules/README.md)
- [API Documentation](docs/api/README.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Submit a pull request

## 📄 License

Copyright © 2024 Campana Ranch Wines. All rights reserved.

## 🆘 Support

For issues and questions:
- Create an issue on GitHub
- Contact: dev@campanaranchwines.com

---

Built with ❤️ using Next.js, TypeScript, and modular architecture principles.
