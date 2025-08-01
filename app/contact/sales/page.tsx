import { Metadata } from 'next'
import QuoteRequest from '@/components/QuoteRequest'
import CTAWrapper from '@/components/cta/CTAWrapper'
import { Phone, Mail, Calendar, MessageSquare, Users, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Sales - perfecXion.ai',
  description: 'Get in touch with our sales team to discuss your AI security needs. Enterprise solutions tailored to your requirements.',
}

export default function ContactSalesPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Sales',
      description: 'Speak directly with our sales team',
      action: 'Call +1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: Mail,
      title: 'Email Sales',
      description: 'Send us your requirements',
      action: 'sales@perfecxion.ai',
      href: 'mailto:sales@perfecxion.ai',
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book time with our team',
      action: 'Book a Call',
      href: '/demo',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with sales now',
      action: 'Start Chat',
      href: '#chat',
    },
  ]

  const globalOffices = [
    {
      region: 'North America',
      address: '123 AI Security Blvd, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Fri 9:00 AM - 6:00 PM PST',
    },
    {
      region: 'Europe',
      address: '456 Tech Quarter, London EC2A 4BX, UK',
      phone: '+44 20 1234 5678',
      hours: 'Mon-Fri 9:00 AM - 6:00 PM GMT',
    },
    {
      region: 'Asia Pacific',
      address: '789 Innovation Hub, Singapore 018960',
      phone: '+65 6234 5678',
      hours: 'Mon-Fri 9:00 AM - 6:00 PM SGT',
    },
  ]

  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Let's Talk About Your <span className="gradient-text">AI Security</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our sales team is ready to help you find the perfect security solution for your AI systems. 
            Get personalized recommendations and pricing.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <a
                key={method.title}
                href={method.href}
                className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all hover:scale-105 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/30 transition-colors">
                    <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {method.description}
                  </p>
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:underline">
                    {method.action}
                  </span>
                </div>
              </a>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              How We Can Help
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Enterprise Solutions
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Custom security solutions designed for large-scale AI deployments with dedicated support and SLAs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Flexible Pricing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Volume discounts, annual contracts, and custom payment terms to fit your budget.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Expert Consultation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our sales engineers will help you design the perfect security architecture for your needs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Proof of Concept
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try our solutions in your environment with a guided proof of concept program.
                </p>
              </div>
            </div>

            {/* Global Offices */}
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                Global Offices
              </h3>
              <div className="space-y-4">
                {globalOffices.map((office) => (
                  <div key={office.region} className="border-l-2 border-primary-500 pl-4">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {office.region}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {office.address}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {office.phone} • {office.hours}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div>
            <QuoteRequest />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Prefer to explore on your own first?
          </p>
          <CTAWrapper
            primary={{
              text: 'View All Products',
              href: '/products',
              icon: 'arrow',
              variant: 'default' as const,
            }}
            secondary={{
              text: 'Download Pricing Guide',
              href: '#download-pricing',
              icon: 'download',
              variant: 'link' as const,
            }}
            align="center"
            trackingPrefix="contact-sales-bottom"
          />
        </div>
      </div>
    </main>
  )
}