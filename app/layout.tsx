import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { CookieConsentProvider } from '@/lib/contexts/CookieConsentContext'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import { SearchProvider } from '@/components/search/SearchProvider'
import MobileNav from '@/components/mobile/MobileNav'
import TabNavigation from '@/components/mobile/TabNavigation'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://perfecxion.ai'),
  title: {
    default: 'perfecXion.ai - AI Security & Compliance Solutions',
    template: '%s | perfecXion.ai'
  },
  description: 'Leading AI security and compliance solutions. Protect your AI systems with our comprehensive suite of tools including red teaming, scanning, and guardrails.',
  keywords: ['AI security', 'AI compliance', 'red teaming', 'AI safety', 'machine learning security'],
  authors: [{ name: 'perfecXion.ai Team' }],
  creator: 'perfecXion.ai',
  publisher: 'perfecXion.ai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://perfecxion.ai',
    siteName: 'perfecXion.ai',
    title: 'perfecXion.ai - AI Security & Compliance Solutions',
    description: 'Leading AI security and compliance solutions. Protect your AI systems with our comprehensive suite of tools.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'perfecXion.ai - AI Security Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'perfecXion.ai - AI Security & Compliance Solutions',
    description: 'Leading AI security and compliance solutions for modern AI systems.',
    creator: '@perfecxionai',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'perfecXion.ai',
    url: 'https://perfecxion.ai',
    logo: 'https://perfecxion.ai/logo-perfecxion.svg',
    description: 'Leading AI security and compliance solutions provider',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 AI Security Blvd',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'contact@perfecxion.ai',
      availableLanguage: ['English']
    },
    sameAs: [
      'https://twitter.com/perfecxion-ai',
      'https://www.linkedin.com/company/perfecxion-ai',
      'https://github.com/perfecxion-ai'
    ]
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'perfecXion.ai',
    url: 'https://perfecxion.ai',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://perfecxion.ai/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        <Script
          id="mobile-optimizations"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize mobile optimizations
              if (typeof window !== 'undefined') {
                import('/lib/mobile-performance.js').then(module => {
                  module.initMobileOptimizations();
                }).catch(console.error);
              }
            `
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <SearchProvider>
            <CookieConsentProvider>
              <div className="min-h-screen flex flex-col">
                <div className="hidden lg:block">
                  <Header />
                </div>
                <div className="lg:hidden">
                  <MobileNav />
                </div>
                <main className="flex-1 pb-20 lg:pb-0">
                  {children}
                </main>
                <Footer />
                <TabNavigation />
                <CookieConsentBanner />
              </div>
            </CookieConsentProvider>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
