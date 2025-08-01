import { Metadata } from 'next'
import QuoteRequest from '@/components/QuoteRequest'
import { Calculator, Shield, Users, Zap, DollarSign, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get a Quote - perfecXion.ai',
  description: 'Get a customized quote for perfecXion.ai AI security solutions. Enterprise pricing tailored to your needs.',
}

export default function QuotePage() {
  const benefits = [
    {
      icon: Calculator,
      title: 'Customized Pricing',
      description: 'Tailored to your specific requirements and scale',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Built for organizations that take AI security seriously',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Get expert assistance throughout your journey',
    },
    {
      icon: DollarSign,
      title: 'Flexible Payment Options',
      description: 'Annual, multi-year, and custom payment terms available',
    },
    {
      icon: FileText,
      title: 'Detailed Proposal',
      description: 'Comprehensive breakdown of features and pricing',
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Receive your quote within 24-48 hours',
    },
  ]

  const pricingFactors = [
    'Number of users and AI systems',
    'Selected products and features',
    'Deployment model (cloud, on-premise, hybrid)',
    'Support level requirements',
    'Compliance and regulatory needs',
    'Implementation and training services',
  ]

  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Information */}
          <div>
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Get Your <span className="gradient-text">Custom Quote</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Every organization's AI security needs are unique. Get a personalized quote 
                tailored to your specific requirements and budget.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Why Choose perfecXion.ai?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Pricing Factors We Consider:
              </h3>
              <ul className="space-y-2">
                {pricingFactors.map((factor, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <span className="text-primary-600 dark:text-primary-400 mt-0.5">•</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-6">
              <h3 className="font-semibold text-primary-900 dark:text-primary-200 mb-2">
                Volume Discounts Available
              </h3>
              <p className="text-primary-800 dark:text-primary-300 text-sm">
                Organizations with 500+ users or multiple product needs qualify for significant 
                volume discounts. Ask about our enterprise packages.
              </p>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div className="lg:sticky lg:top-8">
            <QuoteRequest />
          </div>
        </div>
      </div>
    </main>
  )
}