import Link from 'next/link'
import { ArrowRight, Shield, Scan, CheckCircle, Star, Zap, Users, Lock, Eye, Brain } from 'lucide-react'
import ComplianceBadges, { TrustSignals } from '@/components/ComplianceBadges'
import CTAWrapper, { CTAPresets } from '@/components/cta/CTAWrapper'
import PrimaryCTA from '@/components/cta/PrimaryCTA'
import SecondaryCTA from '@/components/cta/SecondaryCTA'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-background-dark">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <div className="inline-flex space-x-6 group">
                <span className="rounded-full bg-primary-500/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-500/20 dark:text-primary-400">
                  Coming Soon
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 dark:text-gray-300">
                  <span>AI Security Platform</span>
                </span>
              </div>
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
            <div className="mt-10">
              <CTAWrapper
                {...CTAPresets.securityAssessment}
                primarySize="lg"
                secondarySize="lg"
                trackingPrefix="homepage-hero"
              />
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
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
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
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Patents</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                3
              </dd>
              <dd className="text-base leading-7 text-gray-600 dark:text-gray-400">pending approval</dd>
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
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  Advanced AI Attack Testing
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    Our platform will deliver state-of-the-art adversarial testing with gradient-based optimization,
                    multi-modal attacks, and ML-powered adaptation for comprehensive AI security assessment.
                  </p>
                  <p className="mt-6">
                    <SecondaryCTA
                      text="Learn more"
                      href="/learn/ai-threats"
                      icon="arrow"
                      variant="link"
                      trackingId="homepage-feature-ai-threats"
                    />
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  Red Team Testing
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    Our red team testing platform will provide comprehensive adversarial testing to identify vulnerabilities
                    and weaknesses in your AI systems before they reach production.
                  </p>
                  <p className="mt-6">
                    <SecondaryCTA
                      text="Learn more"
                      href="/learn/red-team"
                      icon="arrow"
                      variant="link"
                      trackingId="homepage-feature-red-team"
                    />
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
                    Our compliance and safety tools will ensure your AI systems meet all regulatory requirements
                    and maintain the highest safety standards through automated monitoring.
                  </p>
                  <p className="mt-6">
                    <SecondaryCTA
                      text="Learn more"
                      href="/learn/compliance"
                      icon="arrow"
                      variant="link"
                      trackingId="homepage-feature-compliance"
                    />
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Trust & Compliance Section */}
      <div className="bg-gray-50 dark:bg-gray-900/50">
        <div className="max-width container-padding section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built with security at the core, certified by industry standards
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Compliance Certifications
            </h3>
            <ComplianceBadges variant="detailed" />
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Security Features
            </h3>
            <TrustSignals />
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

            <p className="mt-6 text-lg text-white/90">
              Get a comprehensive security audit of your AI systems and implementation roadmap.
            </p>
            <div className="mt-10">
              <CTAWrapper
                primary={{
                  text: 'Book Security Assessment',
                  href: '/assessment',
                  icon: 'calendar',
                  variant: 'default',
                }}
                secondary={{
                  text: 'Contact Sales',
                  href: '/contact/sales',
                  icon: 'arrow',
                  variant: 'ghost',
                }}
                align="center"
                primarySize="xl"
                secondarySize="lg"
                trackingPrefix="homepage-cta"
                className="[&_button]:!bg-white [&_button]:!text-primary-600 [&_button:hover]:!bg-gray-100 [&_a:nth-child(2)]:!text-white [&_a:nth-child(2):hover]:!text-primary-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 