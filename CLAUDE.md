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

# Sitemap Generation
node scripts/generate-sitemap.js  # Generate sitemap.xml

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
- MDX files use frontmatter with title, date, and description fields
- Blog posts go in `/content/blog/`, learning content in `/content/learning/`

### Deployment Architecture

- Hosted on Vercel with automatic deployments from main branch
- DNS configured through Spaceship registrar
- SSL certificates automatically provisioned by Vercel
- Static site generation (SSG) for optimal performance

### Content Organization

- **Blog Posts**: `/content/blog/*.mdx` - Technical articles and security insights
- **Learning Content**: `/content/learning/*.mdx` - Educational materials
- **Documentation**: `/app/docs/[product]/` - Product-specific documentation pages
- **White Papers**: `/public/white-papers/` - PDF downloads and `/app/White Papers/` for web versions

### Product Structure

All products follow a consistent data model defined in `lib/products.ts`:
- Core fields: id, name, description, features, category, status
- Optional fields: technicalSpecs, architecture, useCases, integrationExamples, benefits
- Product pages use dynamic routing: `/products/[product]/page.tsx`
- Documentation follows pattern: `/docs/[product]/[section]/page.tsx`

### Script Utilities

The `/scripts` directory contains Python and JavaScript utilities for content management:
- `fix-mdx-*.py` - Various MDX syntax fixing scripts
- `generate-sitemap.js` - Sitemap generation for SEO
- `update-blog-dates.py` - Blog date management
- `generate-white-paper.py` - White paper generation

## MDX Content Troubleshooting

### Common MDX Parsing Errors and Solutions

When working with MDX files in `/content`, you may encounter parsing errors during build. Here are known issues and their solutions:

1. **"Unexpected closing slash `/` in tag" errors**
   - **Cause**: Self-closing JSX component tags like `<Component />`
   - **Solution**: Convert to regular opening/closing tags: `<Component></Component>`

2. **"Expected the closing tag `</div>` either after the end of `emphasis`" errors**
   - **Cause**: MDX interprets asterisks (*) as emphasis markers, even in code blocks
   - **Common scenarios**:
     - Bold markdown syntax: `**text**`
     - Regex patterns containing `.*`
   - **Solutions**:
     - Replace `**text**` with `<strong>text</strong>`
     - Escape asterisks in regex patterns: change `.*` to `.\*`
     - Wrap loose text between sections in `<p>` tags

3. **General MDX Best Practices**
   - Avoid mixing markdown emphasis markers with JSX tags
   - Ensure proper spacing between MDX elements
   - Use HTML tags instead of markdown when inside JSX components
   - Be careful with special characters in code blocks - escape when necessary