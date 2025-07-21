import Link from 'next/link'
import { ArrowRight, Shield, Scan, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-background-dark">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
              Secure Your AI Systems with{' '}
              <span className="text-primary-500">
                perfec<span className="text-primary-400 font-black">X</span>ion
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive AI security and compliance solutions. From red teaming to guardrails, 
              we help you build trustworthy AI systems that meet the highest security standards.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/products" className="btn-primary">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/learning" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32 bg-background-subtle dark:bg-background-dark-subtle">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Complete AI Security Platform
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Everything you need to secure, monitor, and ensure compliance of your AI systems.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  <Shield className="h-5 w-5 flex-none text-primary-500" />
                  Red Team Testing
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">
                    perfecXion Red-T provides comprehensive adversarial testing to identify vulnerabilities 
                    and weaknesses in your AI systems before they reach production.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  <Scan className="h-5 w-5 flex-none text-primary-500" />
                  Agent Monitoring
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">
                    perfecXion Agent delivers real-time monitoring and analysis of AI agent behavior 
                    to detect anomalous activities and potential security threats.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  <CheckCircle className="h-5 w-5 flex-none text-primary-500" />
                  Compliance & Safety
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">
                    perfecXion Comply and G-Rails ensure your AI systems meet all regulatory requirements 
                    and maintain the highest safety standards through automated monitoring.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Ready to Secure Your AI?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Join hundreds of organizations that trust perfecXion.ai to secure their AI systems.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="btn-primary">
                Start Your Security Assessment
              </Link>
              <Link href="/docs" className="btn-secondary">
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
