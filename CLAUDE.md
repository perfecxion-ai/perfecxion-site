# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

perfecXion.ai is a Next.js 14 application showcasing AI security and compliance solutions. The site uses the App Router, TypeScript, Tailwind CSS, and MDX for content management.

## Common Development Commands

```bash
# Development
npm run dev        # Start development server on http://localhost:3000

# Production Build
npm run build      # Build for production
npm start          # Start production server

# Code Quality
npm run lint       # Run ESLint

# Deployment
git push origin main  # Triggers automatic deployment via Vercel
```

## High-Level Architecture

### Core Technology Stack
- **Framework**: Next.js 14 with App Router (`/app` directory)
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS with custom theme configuration
- **Content**: MDX for blog posts and learning content
- **State**: Theme provider using React Context for dark mode

### Key Architectural Patterns

1. **Product Management**: Centralized product data in `lib/products.ts` with TypeScript interfaces. Products are dynamically rendered across multiple pages using a single source of truth.

2. **Layout Structure**: Root layout (`app/layout.tsx`) provides theme context, header, and footer. Individual pages use nested layouts (e.g., blog, learn sections).

3. **Content Strategy**: 
   - Static pages for product info and marketing content
   - MDX files in `/content` for blog and learning materials
   - Dynamic routing for products (`[product]`) and blog posts (`[slug]`)

4. **Theme System**: Dark mode implementation with system preference detection and localStorage persistence via ThemeProvider component.

5. **SEO & Metadata**: Comprehensive metadata configuration in root layout with OpenGraph and Twitter card support. Each page can override with specific metadata.

### Important Conventions

- Always use absolute imports with `@/` prefix (configured in tsconfig.json)
- Follow existing component patterns - functional components with TypeScript
- Maintain consistent styling using Tailwind utility classes
- Dark mode support required for all new components (use `dark:` prefix)
- Product information must be added/modified in `lib/products.ts`, not in individual pages

### Deployment Architecture

- Hosted on Vercel with automatic deployments from main branch
- DNS configured through Spaceship registrar
- SSL certificates automatically provisioned by Vercel
- Static site generation (SSG) for optimal performance