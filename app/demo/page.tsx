import { Metadata } from 'next'
import DemoBooking from '@/components/DemoBooking'
import { Shield, Clock, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book a Demo - perfecXion.ai',
  description: 'Schedule a personalized demo of our AI security solutions. See how perfecXion.ai can protect your AI systems.',
}

export default function DemoPage() {
  const benefits = [
    {
      icon: Shield,
      title: 'Personalized Security Assessment',
      description: 'Get insights specific to your AI infrastructure',
    },
    {
      icon: Clock,
      title: '30-45 Minute Deep Dive',
      description: 'Comprehensive overview tailored to your needs',
    },
    {
      icon: Users,
      title: 'Expert-Led Demonstration',
      description: 'Learn from our AI security specialists',
    },
    {
      icon: Zap,
      title: 'Actionable Recommendations',
      description: 'Leave with clear next steps for your security',
    },
  ]

  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Information */}
          <div>
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Book Your <span className="gradient-text">AI Security Demo</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                See how perfecXion.ai can protect your AI systems with our comprehensive security platform. 
                Get a personalized walkthrough from our experts.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                What to Expect
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                During Your Demo, We'll Cover:
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-0.5">•</span>
                  <span>Your current AI security challenges and requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-0.5">•</span>
                  <span>Live demonstration of relevant perfecXion.ai products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-0.5">•</span>
                  <span>Integration options with your existing infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-0.5">•</span>
                  <span>Pricing and implementation timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-0.5">•</span>
                  <span>Q&A with our security experts</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:sticky lg:top-8">
            <DemoBooking />
          </div>
        </div>
      </div>
    </main>
  )
}