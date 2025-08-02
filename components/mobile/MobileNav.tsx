'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Search, Calendar } from 'lucide-react'
import ThemeToggle from '../ThemeToggle'
import MobileSearch from './MobileSearch'
import { useTheme } from 'next-themes'

interface NavItem {
  name: string
  href?: string
  children?: NavItem[]
}

const navigation: NavItem[] = [
  {
    name: 'Products',
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
    name: 'Solutions',
    children: [
      { name: 'Enterprise', href: '/products#enterprise' },
      { name: 'Developer Tools', href: '/products#developer-tools' },
      { name: 'Compliance', href: '/compliance/audit-logs' },
    ],
  },
  {
    name: 'Resources',
    children: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Blog', href: '/blog' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Learn', href: '/learn' },
    ],
  },
  {
    name: 'Company',
    children: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
    setSearchOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen || searchOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, searchOpen])

  const toggleExpanded = (name: string) => {
    setExpandedItems(prev =>
      prev.includes(name)
        ? prev.filter(item => item !== name)
        : [...prev, name]
    )
  }

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center">
            <div className="relative h-7 w-[140px]">
              <Image
                src="/logos/logo-dark.png"
                alt="perfecXion.ai"
                width={140}
                height={35}
                className="h-7 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl overflow-y-auto">
            {/* Menu header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Menu content */}
            <div className="px-4 py-6">
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => toggleExpanded(item.name)}
                          className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors min-h-[48px]"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              expandedItems.includes(item.name) ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {expandedItems.includes(item.name) && (
                          <div className="mt-1 ml-4 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href!}
                                className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors min-h-[44px] flex items-center"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        className="block px-4 py-3 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors min-h-[48px] flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="mt-8">
                <Link
                  href="/demo"
                  className="block w-full px-6 py-3 text-center text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors min-h-[48px] flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Demo
                </Link>
              </div>

              {/* Theme toggle */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && <MobileSearch onClose={() => setSearchOpen(false)} />}

      {/* Spacer to prevent content from going under fixed header */}
      <div className="lg:hidden h-[60px]" />
    </>
  )
}