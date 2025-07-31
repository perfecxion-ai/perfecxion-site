import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight, Shield, Target, Brain, Users, Award, Globe, Zap, Building } from 'lucide-react'

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

        {/* Leadership Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8 text-center">
              <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                [CEO Name]
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                Chief Executive Officer
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Former Head of AI Security at [Major Tech Company]. 15+ years in cybersecurity and AI.
              </p>
            </div>

            {/* CTO */}
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8 text-center">
              <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <Brain className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                [CTO Name]
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                Chief Technology Officer
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                AI researcher and author of influential papers on adversarial AI. PhD in Machine Learning.
              </p>
            </div>

            {/* Head of Security */}
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8 text-center">
              <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Shield className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                [Security Lead Name]
              </h3>
              <p className="text-green-600 dark:text-green-400 font-medium mb-4">
                Head of Security Research
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Former Red Team Lead at [Security Company]. Expert in AI attack vectors and defenses.
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
            * Placeholder profiles - actual team information coming soon
          </p>
        </section>

        {/* Investors & Partners */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Backed By Industry Leaders</h2>
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Investor Logo</span>
                </div>
              </div>
              <div className="text-center">
                <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Partner Logo</span>
                </div>
              </div>
              <div className="text-center">
                <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Investor Logo</span>
                </div>
              </div>
              <div className="text-center">
                <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Partner Logo</span>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
              Trusted by leading investors and technology partners
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join Us in Securing AI's Future
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're looking to protect your AI systems or join our mission, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/careers" className="btn-secondary">
                View Open Positions
              </Link>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/20">
                <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">San Francisco</h3>
              <p className="text-gray-600 dark:text-gray-300">123 AI Security Blvd<br />San Francisco, CA 94105</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Headquarters</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/20">
                <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">New York</h3>
              <p className="text-gray-600 dark:text-gray-300">Coming Soon</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">East Coast Office</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/20">
                <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">London</h3>
              <p className="text-gray-600 dark:text-gray-300">Coming Soon</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">European Office</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}