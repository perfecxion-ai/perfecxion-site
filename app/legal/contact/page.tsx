import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, MapPin, Scale, Shield, FileText, AlertCircle, Clock, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal Contact - perfecXion.ai',
  description: 'Contact our legal department for compliance, privacy, and regulatory inquiries.',
}

export default function LegalContactPage() {
  const contactInfo = [
    {
      title: 'Legal Department',
      icon: Scale,
      details: [
        { label: 'Email', value: 'legal@perfecxion.ai', href: 'mailto:legal@perfecxion.ai' },
        { label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
        { label: 'Fax', value: '+1 (555) 123-4568' },
      ],
    },
    {
      title: 'Data Protection Officer',
      icon: Shield,
      details: [
        { label: 'Email', value: 'dpo@perfecxion.ai', href: 'mailto:dpo@perfecxion.ai' },
        { label: 'Phone', value: '+1 (555) 123-4569', href: 'tel:+15551234569' },
      ],
    },
    {
      title: 'Compliance Team',
      icon: FileText,
      details: [
        { label: 'Email', value: 'compliance@perfecxion.ai', href: 'mailto:compliance@perfecxion.ai' },
        { label: 'Regulatory', value: 'regulatory@perfecxion.ai', href: 'mailto:regulatory@perfecxion.ai' },
      ],
    },
  ]

  const mailingAddress = {
    company: 'perfecXion.ai',
    street: '123 AI Security Blvd',
    suite: 'Suite 500',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    country: 'United States',
  }

  const responseTime = {
    general: '2-3 business days',
    urgent: '24 hours',
    dataRequests: '30 days (as required by law)',
  }

  const legalResources = [
    {
      title: 'Privacy Policy',
      description: 'Our commitment to protecting your data',
      href: '/privacy',
      icon: Shield,
    },
    {
      title: 'Terms of Service',
      description: 'Legal agreement for using our services',
      href: '/terms',
      icon: FileText,
    },
    {
      title: 'Data Subject Rights',
      description: 'Exercise your privacy rights',
      href: '/privacy/data-request',
      icon: Scale,
    },
    {
      title: 'Cookie Preferences',
      description: 'Manage your privacy settings',
      href: '/privacy-preferences',
      icon: Globe,
    },
  ]

  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Scale className="h-4 w-4" />
            Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Legal Contact Information
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Contact our legal team for compliance inquiries, regulatory questions, data protection matters, 
            or any legal concerns related to our services.
          </p>
        </header>

        {/* Contact Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((dept) => {
              const Icon = dept.icon
              return (
                <div key={dept.title} className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                      <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {dept.title}
                    </h3>
                  </div>
                  <dl className="space-y-2">
                    {dept.details.map((detail, index) => (
                      <div key={index}>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {detail.label}:
                        </dt>
                        <dd className="text-sm text-gray-900 dark:text-white">
                          {detail.href ? (
                            <a href={detail.href} className="text-primary-600 dark:text-primary-400 hover:underline">
                              {detail.value}
                            </a>
                          ) : (
                            detail.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )
            })}
          </div>
        </section>

        {/* Mailing Address */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Mailing Address</h2>
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 max-w-md">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
              <address className="not-italic text-gray-900 dark:text-white">
                <div className="font-semibold">{mailingAddress.company}</div>
                <div>Attn: Legal Department</div>
                <div>{mailingAddress.street}</div>
                <div>{mailingAddress.suite}</div>
                <div>
                  {mailingAddress.city}, {mailingAddress.state} {mailingAddress.zip}
                </div>
                <div>{mailingAddress.country}</div>
              </address>
            </div>
          </div>
        </section>

        {/* Response Times */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Response Times</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">
                  Expected Response Times
                </h3>
                <ul className="space-y-2 text-blue-800 dark:text-blue-300">
                  <li>
                    <strong>General Inquiries:</strong> {responseTime.general}
                  </li>
                  <li>
                    <strong>Urgent Legal Matters:</strong> {responseTime.urgent}
                  </li>
                  <li>
                    <strong>Data Subject Requests:</strong> {responseTime.dataRequests}
                  </li>
                </ul>
                <p className="mt-4 text-sm text-blue-700 dark:text-blue-400">
                  For immediate assistance with critical legal matters, please call our legal hotline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Legal Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {legalResources.map((resource) => {
              const Icon = resource.icon
              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
                >
                  <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {resource.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Important Notice */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-200 mb-2">
                Important Legal Notice
              </h3>
              <p className="text-amber-800 dark:text-amber-300 mb-3">
                Please note the following when contacting our legal department:
              </p>
              <ul className="space-y-2 text-amber-800 dark:text-amber-300 text-sm">
                <li>• Include all relevant documentation with your inquiry</li>
                <li>• Provide your full name and contact information</li>
                <li>• Clearly state the nature of your legal concern</li>
                <li>• For subpoenas or legal process, use certified mail</li>
                <li>• Attorney communications should be marked as confidential</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}