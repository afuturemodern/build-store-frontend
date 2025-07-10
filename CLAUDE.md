# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack (fast refresh)
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

### Testing
No testing framework is currently configured. Consider adding Jest/Vitest with React Testing Library for future development.

## Architecture Overview

This is a **Next.js 15 App Router** application for $BUILD Store, a creative agency frontend with HubSpot CRM integration.

### Tech Stack
- **Next.js 15.2.4** with App Router
- **React 19** with TypeScript 5
- **Tailwind CSS** for styling
- **HubSpot API** for CRM integration

### Key Directories
- `src/app/` - Next.js App Router pages and API routes
- `src/app/api/crm/` - HubSpot CRM integration endpoint
- `src/app/signup/` - Multi-step signup form with context management
- `src/components/` - Reusable UI components
- `src/utils/` - Utility functions (includes `cn()` for class merging)
- `public/` - Static assets organized by type

### Data Management
- **JSON files** in `src/app/` drive dynamic content:
  - `FeaturedArtists.json` - Team member profiles (14 members)
  - `portfolio.json` - Project showcase data
  - `ProcessSteps.json` - Company process steps
  - `affiliates.json` - Partner/client information
- **React Context API** for form state management (`SignupFormContext`)
- **Custom hooks** for form logic (`useSignupForm`)

### API Architecture
- RESTful endpoint at `/api/crm` handles form submissions to HubSpot
- Environment variables required for HubSpot integration (API key, etc.)
- Error handling and response formatting implemented

### Styling Patterns
- **Tailwind CSS** utility classes throughout
- **`cn()` utility** combines `clsx` and `tw-merge` for conditional classes
- Responsive design implemented with Tailwind breakpoints

### Form Management
The signup flow uses a sophisticated multi-step form system:
- Context-based state management across form steps
- Loading states and error handling
- HubSpot lead capture integration
- Form validation and user feedback

### Component Patterns
- Functional React components with TypeScript
- Props interfaces defined for type safety
- Separation of data (JSON) from presentation logic
- Modular component structure for reusability

## Development Notes

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)

### Environment Variables
HubSpot integration requires environment variables (check `.env.local` or ask for configuration).

### Code Quality
- ESLint configured with Next.js core web vitals rules
- TypeScript strict mode for type safety
- Consistent import/export patterns throughout codebase