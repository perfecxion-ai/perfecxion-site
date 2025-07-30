import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

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
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
