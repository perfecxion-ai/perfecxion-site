import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Shield, Target, Brain, Award, Globe, Zap, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - perfecXion.ai',
  description: 'Learn about perfecXion.ai, our mission to secure AI systems, and the team behind our innovative AI security solutions.',
}

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Securing the Future of AI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to make AI systems secure, compliant, and trustworthy. Our comprehensive
            suite of security tools helps organizations protect their AI infrastructure from emerging
            threats while maintaining peak performance.
          </p>
        </header>

        {/* Mission, Vision, Values */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-8">
              <Target className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To democratize AI security by providing enterprise-grade protection tools that are accessible,
                comprehensive, and continuously evolving to meet new threats.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-8">
              <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A world where AI systems are inherently secure, trustworthy, and aligned with human values,
                enabling innovation without compromising safety or privacy.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-8">
              <Award className="h-8 w-8 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Values
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Security first, transparency always. We believe in responsible AI development, continuous
                innovation, and building trust through proven results.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2024 by a team of AI security researchers and enterprise software veterans,
              perfecXion.ai emerged from a simple observation: as AI systems became more powerful and
              pervasive, the security tools to protect them hadn't kept pace.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our founders witnessed firsthand the vulnerabilities in AI systems at major tech companies
              and realized that traditional security approaches weren't sufficient for the unique challenges
              posed by artificial intelligence. From prompt injection attacks to model extraction, the
              threat landscape was evolving faster than defenses.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Today, we're proud to offer the most comprehensive suite of AI security tools in the market,
              protecting everything from chatbots to autonomous agents. Our platform combines cutting-edge
              research with practical, enterprise-ready solutions that scale with your needs.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Why Choose perfecXion.ai?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/20">
                <Zap className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                State-of-the-Art Technology
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Implementing the latest adversarial AI research and defense mechanisms
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/20">
                <Shield className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Comprehensive Protection
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Full-stack security from training data to production deployment
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/20">
                <Building className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Enterprise Ready
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Scalable solutions with compliance features and dedicated support
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/20">
                <Globe className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Global Reach
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Supporting organizations worldwide with multi-region deployment
              </p>
            </div>
          </div>
        </section>



        {/* Office Location */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Office</h2>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/20">
              <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">San Francisco</h3>
            <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
          </div>
        </section>
      </div>
    </main>
  )
}