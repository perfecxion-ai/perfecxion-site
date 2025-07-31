import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Mail, Lock, Eye, Database, Globe, FileText, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - perfecXion.ai',
  description: 'Learn how perfecXion.ai collects, uses, and protects your personal information. Our commitment to data privacy and security.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date('2025-01-31').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Your privacy is important to us. This policy describes how perfecXion.ai collects, uses, and protects your information.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: {lastUpdated}
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#information-we-collect" className="text-primary-600 dark:text-primary-400 hover:underline">1. Information We Collect</a></li>
            <li><a href="#how-we-use" className="text-primary-600 dark:text-primary-400 hover:underline">2. How We Use Your Information</a></li>
            <li><a href="#data-sharing" className="text-primary-600 dark:text-primary-400 hover:underline">3. Data Sharing and Disclosure</a></li>
            <li><a href="#data-security" className="text-primary-600 dark:text-primary-400 hover:underline">4. Data Security</a></li>
            <li><a href="#your-rights" className="text-primary-600 dark:text-primary-400 hover:underline">5. Your Rights</a></li>
            <li><a href="#cookies" className="text-primary-600 dark:text-primary-400 hover:underline">6. Cookies and Tracking</a></li>
            <li><a href="#contact" className="text-primary-600 dark:text-primary-400 hover:underline">7. Contact Information</a></li>
          </ul>
        </nav>

        {/* Content Sections */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section id="information-we-collect" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Database className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              1. Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">Information You Provide</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Contact information (name, email, phone number, company)</li>
              <li>• Account credentials for our services</li>
              <li>• Payment information (processed securely through third-party providers)</li>
              <li>• Communications you send to us</li>
              <li>• Information submitted through forms, demos, or assessments</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">Information Collected Automatically</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• IP address and device information</li>
              <li>• Browser type and operating system</li>
              <li>• Pages visited and time spent on our site</li>
              <li>• Referring website information</li>
              <li>• Usage data from our AI security products</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">AI System Data</h3>
            <p className="text-gray-600 dark:text-gray-300">
              When you use our AI security testing tools, we may process:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 mt-2">
              <li>• API endpoints and system configurations (anonymized)</li>
              <li>• Security test results and vulnerability reports</li>
              <li>• Performance metrics and usage patterns</li>
              <li>• Model behavior data for improving our security algorithms</li>
            </ul>
          </section>

          <section id="how-we-use" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Eye className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              2. How We Use Your Information
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Provide and improve our AI security services</li>
              <li>• Process transactions and send related information</li>
              <li>• Send technical notices and security alerts</li>
              <li>• Respond to your comments and questions</li>
              <li>• Analyze usage patterns to enhance our products</li>
              <li>• Develop new features and services</li>
              <li>• Comply with legal obligations</li>
              <li>• Protect against fraudulent or illegal activity</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mt-6">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">AI Training Note</h4>
              <p className="text-blue-800 dark:text-blue-300 text-sm">
                We do NOT use your private data or AI models to train our security systems. All training is done on synthetic data or with explicit customer permission in controlled environments.
              </p>
            </div>
          </section>

          <section id="data-sharing" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Globe className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              3. Data Sharing and Disclosure
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We do not sell your personal information. We may share your information only in these circumstances:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">Service Providers</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We work with trusted third parties who assist us in operating our business:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 mt-2">
              <li>• Cloud infrastructure providers (AWS, Google Cloud)</li>
              <li>• Payment processors (Stripe)</li>
              <li>• Analytics services (privacy-focused)</li>
              <li>• Customer support tools</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">Legal Requirements</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We may disclose information if required by law or if we believe such action is necessary to:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 mt-2">
              <li>• Comply with legal obligations</li>
              <li>• Protect our rights and property</li>
              <li>• Prevent fraud or cybersecurity incidents</li>
              <li>• Protect the safety of any person</li>
            </ul>
          </section>

          <section id="data-security" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Lock className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              4. Data Security
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Encryption in transit and at rest</li>
              <li>• Regular security audits and penetration testing</li>
              <li>• Access controls and authentication</li>
              <li>• Employee training on data protection</li>
              <li>• Incident response procedures</li>
              <li>• SOC 2 Type II compliance (in progress)</li>
            </ul>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mt-6">
              <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Security Commitment
              </h4>
              <p className="text-amber-800 dark:text-amber-300 text-sm">
                As an AI security company, we hold ourselves to the highest standards of data protection. We use our own tools to continuously monitor and protect our systems.
              </p>
            </div>
          </section>

          <section id="your-rights" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              5. Your Rights
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Depending on your location, you may have the following rights:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">GDPR Rights (European Users)</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Right to access your personal data</li>
              <li>• Right to correct inaccurate data</li>
              <li>• Right to request deletion ("right to be forgotten")</li>
              <li>• Right to restrict processing</li>
              <li>• Right to data portability</li>
              <li>• Right to object to processing</li>
              <li>• Right to withdraw consent</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">CCPA Rights (California Users)</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Right to know what information we collect</li>
              <li>• Right to delete personal information</li>
              <li>• Right to opt-out of sale (we don't sell data)</li>
              <li>• Right to non-discrimination</li>
            </ul>

            <p className="text-gray-600 dark:text-gray-300 mt-6">
              To exercise any of these rights, please contact us at <a href="mailto:privacy@perfecxion.ai" className="text-primary-600 dark:text-primary-400 hover:underline">privacy@perfecxion.ai</a>
            </p>
          </section>

          <section id="cookies" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              6. Cookies and Tracking
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Remember your preferences</li>
              <li>• Analyze site traffic and usage</li>
              <li>• Personalize content and ads</li>
              <li>• Improve our services</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">Cookie Types</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Essential:</strong> Required for site functionality</li>
              <li><strong>Analytics:</strong> Help us understand site usage</li>
              <li><strong>Preferences:</strong> Remember your settings</li>
              <li><strong>Marketing:</strong> Used for targeted advertising (optional)</li>
            </ul>

            <p className="text-gray-600 dark:text-gray-300 mt-6">
              You can control cookies through your browser settings. Note that disabling certain cookies may limit site functionality.
            </p>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              7. Contact Information
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>

            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Data Protection Officer</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><strong>Email:</strong> <a href="mailto:privacy@perfecxion.ai" className="text-primary-600 dark:text-primary-400 hover:underline">privacy@perfecxion.ai</a></li>
                <li><strong>Mail:</strong> perfecXion.ai, Attn: Privacy, 123 AI Security Blvd, San Francisco, CA 94105</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
              </ul>
            </div>

            <div className="mt-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Updates to This Policy</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </section>
        </div>

        {/* Back to Top */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}