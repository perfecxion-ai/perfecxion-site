import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageCircle, FileText, BookOpen, ArrowRight, Phone, Clock, Users, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Support - perfecXion.ai',
  description: 'Get help with perfecXion.ai products and services. Contact our support team for technical assistance and guidance.',
}

export default function SupportPage() {
  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4" />
            Support
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            We're Here to <span className="gradient-text">Help</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get the support you need to secure your AI systems. Our team of experts is ready to help
            with technical questions, implementation guidance, and strategic advice.
          </p>
        </header>

        {/* Support Options */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">How Can We Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Support */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Technical Support
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get help with product implementation, configuration, and technical issues.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span>Product installation & setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span>Configuration assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span>Integration support</span>
                </li>
              </ul>
              <Link
                href="/contact?subject=Technical Support"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                Contact Technical Support
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Documentation */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Documentation
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Access comprehensive guides, tutorials, and API documentation.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Product documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>API reference guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Best practices</span>
                </li>
              </ul>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                Browse Documentation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Strategic Guidance */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Strategic Guidance
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get expert advice on AI security strategy and implementation planning.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Security assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Implementation planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Compliance guidance</span>
                </li>
              </ul>
              <Link
                href="/contact?subject=Strategic Guidance"
                className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-medium hover:underline"
              >
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Contact Our Support Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/20">
                <Mail className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get detailed responses to your questions
              </p>
              <a
                href="mailto:support@perfecxion.ai"
                className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                support@perfecxion.ai
              </a>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/20">
                <Phone className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Speak directly with our experts
              </p>
              <a
                href="tel:+15551234567"
                className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
              >
                +1 (555) 123-4567
              </a>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/20">
                <Clock className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Response Time</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We aim to respond within 24 hours
              </p>
              <span className="text-green-600 dark:text-green-400 font-medium">
                &lt; 24 hours
              </span>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/20">
                <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Priority Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Available for enterprise customers
              </p>
              <Link
                href="/contact?subject=Priority Support"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still Need Help?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find what you're looking for? Our support team is ready to help with any questions
              about our AI security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?subject=General Support"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Contact Support
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
