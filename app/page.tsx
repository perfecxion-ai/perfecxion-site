import Link from 'next/link'
import { ArrowRight, Shield, Scan, CheckCircle, Star, Zap, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-background-dark">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-primary-500/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-500/20 dark:text-primary-400">
                  What's new
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 dark:text-gray-300">
                  <span>Just shipped v1.0</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Secure Your AI Systems with{' '}
              <span className="gradient-text">
                perfec<span className="text-primary-400 font-black">X</span>ion
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Comprehensive AI security and compliance solutions. From red teaming to guardrails,
              we help you build trustworthy AI systems that meet the highest security standards.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/products" className="btn-primary">
                Explore Products<ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/learn" className="btn-ghost">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="rounded-md bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:bg-gray-100/5 dark:ring-gray-100/10 lg:rounded-lg">
                <div className="rounded-md bg-white p-6 shadow-2xl ring-1 ring-gray-900/10 dark:bg-gray-900 dark:ring-gray-100/10 lg:rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 dark:bg-gray-900/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Security frameworks</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                15+
              </dd>
              <dd className="text-base leading-7 text-gray-600 dark:text-gray-400">supported standards</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Attack vectors</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                50+
              </dd>
              <dd className="text-base leading-7 text-gray-600 dark:text-gray-400">detected & prevented</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Integration</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                10+
              </dd>
              <dd className="text-base leading-7 text-gray-600 dark:text-gray-400">major AI platforms</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Features Section */}
      <div className="section-padding">
        <div className="max-width container-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Complete AI Security Platform
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Everything you need to secure, monitor, and ensure compliance of your AI systems.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  Red Team Testing
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    perfecX Red-T provides comprehensive adversarial testing to identify vulnerabilities
                    and weaknesses in your AI systems before they reach production.
                  </p>
                  <p className="mt-6">
                    <Link href="/products" className="text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500">
                    <Scan className="h-6 w-6 text-white" />
                  </div>
                  Agent Monitoring
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    perfecX Agent delivers real-time monitoring and analysis of AI agent behavior
                    to detect anomalous activities and potential security threats.
                  </p>
                  <p className="mt-6">
                    <Link href="/products" className="text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  Compliance & Safety
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    perfecX Comply and G-Rails ensure your AI systems meet all regulatory requirements
                    and maintain the highest safety standards through automated monitoring.
                  </p>
                  <p className="mt-6">
                    <Link href="/products" className="text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-500">
        <div className="max-width container-padding section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Secure Your AI?
            </h2>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/about" className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                Start Your Security Assessment
              </Link>
              <Link href="/docs" className="text-white hover:text-primary-100 px-6 py-3 rounded-lg font-medium transition-colors">
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
