# Product Restoration Guide

## Overview

This document provides comprehensive instructions for restoring the product information and functionality that was temporarily hidden from the website. All product content has been preserved and can be easily restored when you're ready to launch.

## What Was Hidden

### ✅ **Product Pages (Still Exist, Just Not Linked)**
- `/products/adapt-ai` - ADAPT-AI product page
- `/products/perfecxion-red-t` - perfecX Red-T product page
- `/products/perfecxion-agent` - perfecX Agent product page
- `/products/perfecxion-comply` - perfecX Comply product page
- `/products/perfecxion-g-rails` - perfecX G-Rails product page
- `/products/promptshield` - PromptShield product page
- `/products/safeai-guard` - SafeAI Guard product page
- `/products/torscan` - TorScan product page
- `/products/[product]` - Dynamic product page template

### ✅ **Product Documentation (Still Exist, Just Not Linked)**
- `/docs/adapt-ai/` - ADAPT-AI documentation
- `/docs/perfecxion-red-t/` - perfecX Red-T documentation
- `/docs/perfecxion-agent/` - perfecX Agent documentation
- `/docs/perfecxion-comply/` - perfecX Comply documentation
- `/docs/perfecxion-g-rails/` - perfecX G-Rails documentation
- `/docs/promptshield/` - PromptShield documentation
- `/docs/safeai-guard/` - SafeAI Guard documentation
- `/docs/torscan/` - TorScan documentation

## Restoration Steps

### Phase 1: Restore Navigation Links

#### 1.1 Header Navigation (`components/Header.tsx`)
```tsx
// RESTORE: Add Products back to main navigation
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' }, // ← Add this line back
  { name: 'Learn', href: '/learn' },
  { name: 'Blog', href: '/blog' },
  { name: 'Docs', href: '/docs' },
  { name: 'About', href: '/about' },
]
```

#### 1.2 Mobile Navigation (`components/mobile/MobileNav.tsx`)
```tsx
// RESTORE: Add Products section back to mobile navigation
const navigation: NavItem[] = [
  {
    name: 'Products', // ← Add this section back
    children: [
      { name: 'ADAPT-AI', href: '/products/adapt-ai' },
      { name: 'SafeAI Guard', href: '/products/safeai-guard' },
      { name: 'PromptShield', href: '/products/promptshield' },
      { name: 'TorScan', href: '/products/torscan' },
      { name: 'perfecXion Agent', href: '/products/perfecxion-agent' },
      { name: 'perfecXion Comply', href: '/products/perfecxion-comply' },
      { name: 'perfecXion G-Rails', href: '/products/perfecxion-g-rails' },
      { name: 'perfecXion Red-T', href: '/products/perfecxion-red-t' },
      { name: 'All Products', href: '/products' },
    ],
  },
  {
    name: 'Solutions', // ← Add this section back
    children: [
      { name: 'Enterprise', href: '/products#enterprise' },
      { name: 'Developer Tools', href: '/products#developer-tools' },
      { name: 'Compliance', href: '/compliance/audit-logs' },
    ],
  },
  // ... existing Resources and Company sections
]
```

#### 1.3 Tab Navigation (`components/mobile/TabNavigation.tsx`)
```tsx
// RESTORE: Add Products tab back to mobile bottom navigation
const tabs: TabItem[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Products', href: '/products', icon: Package }, // ← Add this line back
  { name: 'Learn', href: '/learn', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: FileText },
  { name: 'Search', href: '/search', icon: Search },
]
```

#### 1.4 Footer (`components/Footer.tsx`)
```tsx
// RESTORE: Add product links back to footer
const navigation = {
  product: [ // ← Add this section back
    { name: 'ADAPT-AI', href: '/products/adapt-ai' },
    { name: 'perfecX Red-T', href: '/products/perfecxion-red-t' },
    { name: 'perfecX Agent', href: '/products/perfecxion-agent' },
    { name: 'SafeAI Guard', href: '/products/safeai-guard' },
    { name: 'perfecX Comply', href: '/products/perfecxion-comply' },
    { name: 'perfecX G-Rails', href: '/products/perfecxion-g-rails' },
    { name: 'PromptShield', href: '/products/promptshield' },
    { name: 'TorScan', href: '/products/torscan' },
  ],
  // ... existing resources and company sections
}

// RESTORE: Add product links rendering in footer JSX
{navigation.product.map((item) => (
  <li key={item.name}>
    <Link
      href={item.href}
      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      {item.name}
    </Link>
  </li>
))}
```

### Phase 2: Restore Product Pages

#### 2.1 Main Products Page (`app/products/page.tsx`)
```tsx
// RESTORE: Replace "Coming Soon" content with actual products
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

// Replace the entire content with the original products grid
export default function ProductsPage() {
  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            AI Security Platform
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            AI Security Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions to secure, monitor, and ensure compliance of your AI systems.
            From red teaming to real-time monitoring, we've got you covered.
          </p>
        </header>

        {/* All Products Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Products
            </h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="animate-slide-up">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can work with you to develop custom AI security solutions
              tailored to your specific requirements and use cases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/docs" className="btn-secondary">
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
```

### Phase 3: Restore Documentation

#### 3.1 Docs Page (`app/docs/page.tsx`)
```tsx
// RESTORE: Add product documentation sections back
export default function DocumentationPage() {
  return (
    <>
      <div className="max-width container-padding section-padding">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive guides and API references for all perfecXion.ai products.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Core Products
            </h2>
            <div className="space-y-4">
              <Link
                href="/docs/perfecxion-red-t"
                className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">perfecX Red-T</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Advanced red team testing platform</p>
                  </div>
                </div>
              </Link>
              {/* Add back all other product documentation links */}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Security Tools
            </h2>
            <div className="space-y-4">
              {/* Add back all security tool documentation links */}
            </div>
          </div>
        </div>

        {/* API Reference */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            API Reference
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/docs/api/rest"
                className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Code className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                <span className="font-medium text-gray-900 dark:text-white">REST API</span>
              </Link>
              {/* Add back other API links */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
```

#### 3.2 Docs Layout (`app/docs/DocsLayoutClient.tsx`)
```tsx
// RESTORE: Add product documentation sections back to sidebar
const documentationSections = [
    {
        title: 'Core Products', // ← Add this section back
        items: [
            { name: 'ADAPT-AI', href: '/docs/adapt-ai', icon: Zap },
            { name: 'perfecX Red-T', href: '/docs/perfecxion-red-t', icon: Shield },
            { name: 'perfecX Agent', href: '/docs/perfecxion-agent', icon: Users },
            { name: 'perfecX Comply', href: '/docs/perfecxion-comply', icon: BookOpen },
            { name: 'perfecX G-Rails', href: '/docs/perfecxion-g-rails', icon: Shield },
        ]
    },
    {
        title: 'Security Tools', // ← Add this section back
        items: [
            { name: 'PromptShield', href: '/docs/promptshield', icon: Shield },
            { name: 'PromptShield Quick Start', href: '/docs/promptshield-quick-start', icon: Play },
            { name: 'SafeAI Guard', href: '/docs/safeai-guard', icon: Shield },
            { name: 'TorScan', href: '/docs/torscan', icon: Zap },
        ]
    },
    {
        title: 'Resources',
        items: [
            { name: 'White Papers', href: '/docs/white-papers', icon: FileText },
            { name: 'Reference Architectures', href: '/docs/reference-architectures', icon: Layout },
        ]
    },
    {
        title: 'API Reference', // ← Add this section back
        items: [
            { name: 'REST API', href: '/docs/api/rest', icon: Code },
            { name: 'SDKs', href: '/docs/api/sdks', icon: Code },
            { name: 'Webhooks', href: '/docs/api/webhooks', icon: Zap },
        ]
    },
]

// RESTORE: Remove the "Coming Soon" notice from sidebar
// Remove this section:
{/* Coming Soon Notice */}
<div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 mb-6">
    <div className="flex items-center space-x-2 mb-2">
        <Clock className="h-4 w-4 text-primary-600 dark:text-primary-400" />
        <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Coming Soon</span>
    </div>
    <p className="text-xs text-primary-600 dark:text-primary-400">
        Product documentation is in development. Explore our resources below.
    </p>
</div>

// RESTORE: Remove the "Coming Soon" section from navigation
// Remove this section:
{
    title: 'Coming Soon',
    items: [
        { name: 'Product Documentation', href: '#', icon: BookOpen, disabled: true },
        { name: 'API Reference', href: '#', icon: FileText, disabled: true },
    ]
}
```

### Phase 4: Restore Homepage

#### 4.1 Homepage (`app/page.tsx`)
```tsx
// RESTORE: Update hero section to link to products
<div className="mt-24 sm:mt-32 lg:mt-16">
  <Link href="/products/adapt-ai" className="inline-flex space-x-6 group">
    <span className="rounded-full bg-primary-500/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-500/20 dark:text-primary-400 group-hover:bg-primary-500/20 transition-colors">
      What's new
    </span>
    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
      <span>Just shipped ADAPT-AI</span>
      <ArrowRight className="h-4 w-4" />
    </span>
  </Link>
</div>

// RESTORE: Update feature descriptions to reference actual products
<p className="flex-auto">
  ADAPT-AI delivers state-of-the-art adversarial testing with gradient-based optimization,
  multi-modal attacks, and ML-powered adaptation for comprehensive AI security assessment.
</p>
<p className="mt-6">
  <SecondaryCTA
    text="Learn more"
    href="/products/adapt-ai" // ← Change back to product link
    icon="arrow"
    variant="link"
    trackingId="homepage-feature-adapt-ai"
  />
</p>

// RESTORE: Update other feature links similarly
href="/products/perfecxion-red-t" // ← Change back to product link
href="/products/perfecxion-comply" // ← Change back to product link
```

### Phase 5: Restore Sidebar Links

#### 5.1 Learn Layout (`app/learn/LearnLayoutClient.tsx`)
```tsx
// RESTORE: Add Products link back to sidebar
<li>
  <Link
    href="/products" // ← Add this link back
    className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
    onClick={onLinkClick}
  >
    <Shield className="h-4 w-4" />
    <span>Products</span>
  </Link>
</li>
```

#### 5.2 Blog Layout (`app/blog/BlogLayoutClient.tsx`)
```tsx
// RESTORE: Add Products link back to sidebar
<li>
  <Link
    href="/products" // ← Add this link back
    className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
    onClick={onLinkClick}
  >
    <Zap className="h-4 w-4" />
    <span>Products</span>
  </Link>
</li>
```

### Phase 6: Restore Other Page Links

#### 6.1 Case Studies (`app/case-studies/page.tsx`)
```tsx
// RESTORE: Change CTA back to products
<Link href="/products" className="btn-secondary">
  <Zap className="mr-2 h-4 w-4" />
  Explore Products
</Link>
```

#### 6.2 Testimonials (`app/testimonials/page.tsx`)
```tsx
// RESTORE: Change CTA back to products
<Link href="/products" className="btn-primary">
  Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
</Link>
```

#### 6.3 404 Page (`app/not-found.tsx`)
```tsx
// RESTORE: Add Products link back to 404 page
<Link href="/products" className="group block p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600">
  <Sparkles className="w-8 h-8 mb-4 text-primary-600 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300 mx-auto" />
  <div className="font-semibold mb-2 text-gray-900 dark:text-white">Products</div>
  <div className="text-sm text-gray-500 dark:text-gray-400">View our AI security solutions</div>
</Link>
```

## Quick Restoration Commands

If you want to quickly restore everything at once, you can use these git commands:

```bash
# Option 1: Revert the last commit (if you want to undo all changes)
git revert HEAD

# Option 2: Reset to the previous commit (if you want to completely undo)
git reset --hard HEAD~1

# Option 3: Create a new branch with restored functionality
git checkout -b restore-products
git revert HEAD
# Then make your product updates and commit them
```

## Testing Checklist

After restoration, verify these areas work correctly:

- [ ] Products page shows actual products instead of "Coming Soon"
- [ ] Product navigation links work in header, mobile nav, and footer
- [ ] Individual product pages are accessible
- [ ] Documentation sidebar shows product docs
- [ ] Homepage feature links go to product pages
- [ ] Sidebar navigation includes product links
- [ ] All CTAs throughout the site link to appropriate product pages

## Notes

- **All product content is preserved** - we only hid the navigation and links
- **Product pages still exist** at their original URLs
- **Documentation structure is intact** - just not linked in navigation
- **No data loss** - everything can be restored exactly as it was
- **Easy rollback** - you can use git to quickly undo these changes if needed

## Timeline Recommendation

1. **Phase 1-2**: Restore navigation and main products page (1-2 hours)
2. **Phase 3**: Restore documentation structure (1 hour)
3. **Phase 4-6**: Restore remaining links and CTAs (1-2 hours)
4. **Testing**: Verify all functionality works (30 minutes)

**Total estimated time**: 3.5-5.5 hours for complete restoration

---

*This guide was created on [Current Date] to document the temporary hiding of product information. All changes are reversible and no content was deleted.*
