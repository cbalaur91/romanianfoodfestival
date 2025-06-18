# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build production bundle  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run analyze` - Build with bundle analyzer enabled

## Architecture

This is a Next.js 15 website for the Romanian Food Festival hosted by the Romanian Orthodox Church in Rochester Hills, Michigan. 

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: TailwindCSS with CSS variables for theming
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion

### Project Structure
- `app/` - Next.js App Router pages (layout, page components)
- `components/` - Reusable React components organized by feature
  - `ui/` - shadcn/ui base components (buttons, cards, forms, etc.)
  - `about/`, `contact/`, `gallery/`, `home/` - Page-specific components
- `lib/` - Utility functions (mainly `cn()` for className merging)
- `hooks/` - Custom React hooks
- `public/` - Static assets (images, videos)

### Component Architecture
Components follow shadcn/ui patterns with:
- Radix UI primitives for accessibility
- Class Variance Authority (CVA) for component variants
- TailwindCSS utility classes merged with `cn()` helper
- TypeScript interfaces for props

### Key Features
- Responsive design optimized for festival information
- Image galleries for past events
- Contact forms with validation
- Sponsor information and donation systems
- Newsletter signup functionality

### shadcn/ui Configuration
The project uses shadcn/ui with default styling and CSS variables. Components are configured in `components.json` with path aliases for easy imports.

### Path Aliases
- `@/components` - Component imports
- `@/lib` - Utility functions  
- `@/hooks` - Custom React hooks
- `@/ui` - shadcn/ui components

### Build Configuration
- Bundle analyzer available via `npm run analyze`
- ESLint errors ignored during builds for deployment
- Next.js 15 App Router with TypeScript strict mode