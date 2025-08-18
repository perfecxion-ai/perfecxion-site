import Link from 'next/link'
import Image from 'next/image'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

/**
 * Footer Navigation Configuration
 * 
 * IMPORTANT: Navigation links are maintained here for consistency
 * - Product links point to existing product pages
 * - Support link removed until content is ready (was showing placeholder)
 * - Privacy and Terms links use existing pages
 * 
 * Last updated: 2025-01-31
 */
const navigation = {
  resources: [
    { name: 'Knowledge Hub', href: '/knowledge' },
    { name: 'Documentation', href: '/docs' },
    { name: 'RSS Feed', href: '/api/rss' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/about#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

/**
 * Social Media Links
 * 
 * IMPORTANT: Only showing email link as social profiles don't exist yet
 * GitHub, Twitter, LinkedIn links removed to prevent 404 errors
 * 
 * TODO: Add social links back when profiles are created:
 * - GitHub: Create organization at github.com/perfecxion-ai
 * - Twitter/X: Create company profile
 * - LinkedIn: Create company page
 * 
 * Last updated: 2025-01-31
 */
const socialLinks = [
  // Social media links temporarily removed - profiles don't exist
  // { name: 'GitHub', href: 'https://github.com/perfecxion-ai', icon: Github },
  // { name: 'Twitter', href: 'https://twitter.com/perfecxion-ai', icon: Twitter },
  // { name: 'LinkedIn', href: 'https://www.linkedin.com/company/perfecxion-ai', icon: Linkedin },
  { name: 'Email', href: 'mailto:contact@perfecxion.ai', icon: Mail },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="max-width container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                perfecXion.ai
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Leading AI security and compliance solutions for the modern enterprise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-3">
              {/* Removed product links */}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; 2025 perfecXion.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
