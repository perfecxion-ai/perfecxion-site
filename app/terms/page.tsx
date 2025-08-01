import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Scale, Shield, AlertCircle, Ban, Gavel, Mail, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - perfecXion.ai',
  description: 'Terms and conditions for using perfecXion.ai products and services. Legal agreement for AI security solutions.',
}

export default function TermsOfServicePage() {
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
            <Scale className="h-4 w-4" />
            Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            By using perfecXion.ai services, you agree to these terms. Please read them carefully.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: {lastUpdated}
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#acceptance" className="text-primary-600 dark:text-primary-400 hover:underline">1. Acceptance of Terms</a></li>
            <li><a href="#services" className="text-primary-600 dark:text-primary-400 hover:underline">2. Description of Services</a></li>
            <li><a href="#use-license" className="text-primary-600 dark:text-primary-400 hover:underline">3. Use License and Restrictions</a></li>
            <li><a href="#user-responsibilities" className="text-primary-600 dark:text-primary-400 hover:underline">4. User Responsibilities</a></li>
            <li><a href="#intellectual-property" className="text-primary-600 dark:text-primary-400 hover:underline">5. Intellectual Property</a></li>
            <li><a href="#payment" className="text-primary-600 dark:text-primary-400 hover:underline">6. Payment Terms</a></li>
            <li><a href="#warranties" className="text-primary-600 dark:text-primary-400 hover:underline">7. Warranties and Disclaimers</a></li>
            <li><a href="#limitation" className="text-primary-600 dark:text-primary-400 hover:underline">8. Limitation of Liability</a></li>
            <li><a href="#data-processing" className="text-primary-600 dark:text-primary-400 hover:underline">9. Data Processing and Privacy</a></li>
            <li><a href="#security-testing" className="text-primary-600 dark:text-primary-400 hover:underline">10. Security Testing Terms</a></li>
            <li><a href="#termination" className="text-primary-600 dark:text-primary-400 hover:underline">11. Termination</a></li>
            <li><a href="#governing-law" className="text-primary-600 dark:text-primary-400 hover:underline">12. Governing Law</a></li>
          </ul>
        </nav>

        {/* Content Sections */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section id="acceptance" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              1. Acceptance of Terms
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By accessing or using any perfecXion.ai service, product, or website (collectively, the "Services"), 
              you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
              do not use our Services.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              These Terms constitute a legally binding agreement between you (either an individual or entity) 
              and perfecXion.ai. You must be at least 18 years old to use our Services.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mt-6">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Enterprise Agreements</h4>
              <p className="text-blue-800 dark:text-blue-300 text-sm">
                If you are using our Services on behalf of an organization, you represent and warrant that you have 
                the authority to bind that organization to these Terms.
              </p>
            </div>
          </section>

          <section id="services" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              2. Description of Services
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              perfecXion.ai provides AI security and compliance solutions, including but not limited to:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• AI red team testing and vulnerability assessment</li>
              <li>• Real-time AI monitoring and threat detection</li>
              <li>• Compliance management and reporting tools</li>
              <li>• AI safety guardrails and protection systems</li>
              <li>• Security APIs and integration services</li>
              <li>• Technical documentation and support</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">Service Modifications</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time. 
              We will provide reasonable notice for material changes that adversely affect your use of the Services.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Service Level Agreement</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enterprise customers may be eligible for Service Level Agreements (SLAs) as specified in their 
              subscription plan. SLA terms, including uptime guarantees and support response times, are documented 
              separately in your service agreement.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mt-6">
              <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">AI/ML Specific Terms</h4>
              <p className="text-green-800 dark:text-green-300 text-sm">
                Our AI services operate based on machine learning models that continuously improve. Results may vary 
                and should be validated by security professionals. We do not guarantee 100% detection of all security threats.
              </p>
            </div>
          </section>

          <section id="use-license" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Globe className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              3. Use License and Restrictions
            </h2>
            
            <h3 className="text-xl font-semibold mb-4">License Grant</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access 
              and use our Services for your internal business purposes.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Restrictions</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">You may not:</p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Use our Services for any illegal or unauthorized purpose</li>
              <li>• Reverse engineer, decompile, or disassemble our software</li>
              <li>• Use our Services to attack or harm other systems</li>
              <li>• Resell or redistribute our Services without written permission</li>
              <li>• Remove or alter any proprietary notices</li>
              <li>• Use our Services to develop competing products</li>
              <li>• Exceed usage limits or circumvent access controls</li>
            </ul>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mt-6">
              <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Responsible Use Policy
              </h4>
              <p className="text-amber-800 dark:text-amber-300 text-sm">
                Our AI security tools are powerful and must be used responsibly. You agree to use our Services only 
                for legitimate security testing on systems you own or have explicit permission to test.
              </p>
            </div>
          </section>

          <section id="user-responsibilities" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              4. User Responsibilities
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">You are responsible for:</p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Maintaining the confidentiality of your account credentials</li>
              <li>• All activities that occur under your account</li>
              <li>• Ensuring your use complies with applicable laws and regulations</li>
              <li>• Obtaining necessary permissions before testing third-party systems</li>
              <li>• Backing up your data and configurations</li>
              <li>• Promptly reporting any security breaches or unauthorized access</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">Data Accuracy</h3>
            <p className="text-gray-600 dark:text-gray-300">
              You represent and warrant that all information you provide to us is accurate, current, and complete. 
              You agree to maintain and update this information as needed.
            </p>
          </section>

          <section id="intellectual-property" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              5. Intellectual Property
            </h2>
            
            <h3 className="text-xl font-semibold mb-4">Our Property</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              All intellectual property rights in our Services, including software, algorithms, documentation, 
              and branding, remain with perfecXion.ai or our licensors. These Terms do not grant you any rights 
              to our intellectual property except as expressly stated.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">AI Models and Algorithms</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our proprietary AI models, machine learning algorithms, and security detection patterns are trade secrets 
              and confidential information. You may not attempt to extract, reverse engineer, or replicate our AI systems.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Your Data</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You retain all rights to your data. By using our Services, you grant us a limited license to process 
              your data solely to provide the Services and as described in our Privacy Policy.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Security Findings</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Security vulnerabilities and findings discovered through our Services belong to you. However, we may use 
              anonymized and aggregated threat intelligence to improve our Services and protect other customers.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Feedback</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Any feedback, suggestions, or ideas you provide about our Services may be used by us without 
              compensation or attribution to you.
            </p>
          </section>

          <section id="payment" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              6. Payment Terms
            </h2>
            
            <h3 className="text-xl font-semibold mb-4">Fees</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You agree to pay all fees associated with your use of our Services according to your subscription 
              plan or as otherwise agreed in writing. All fees are non-refundable except as required by law.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Payment Processing</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Payments are processed through third-party payment providers. You authorize us to charge your 
              payment method for all fees due. You are responsible for keeping payment information current.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Taxes</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Fees do not include taxes. You are responsible for all applicable taxes related to your use 
              of our Services, except for taxes based on our net income.
            </p>
          </section>

          <section id="warranties" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Ban className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              7. Warranties and Disclaimers
            </h2>
            
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
              <p className="text-red-800 dark:text-red-300 font-semibold mb-2">
                DISCLAIMER OF WARRANTIES
              </p>
              <p className="text-red-700 dark:text-red-400 text-sm">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS 
                OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF 
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              We do not warrant that our Services will be uninterrupted, error-free, or completely secure. 
              You acknowledge that AI security testing involves inherent risks and limitations.
            </p>
          </section>

          <section id="limitation" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              8. Limitation of Liability
            </h2>
            
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
              <p className="text-red-800 dark:text-red-300 font-semibold mb-2">
                LIMITATION OF LIABILITY
              </p>
              <p className="text-red-700 dark:text-red-400 text-sm">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, PERFECXION.AI SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, 
                WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, OR GOODWILL.
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our total liability for any claims under these Terms shall not exceed the amount you paid us 
              in the twelve months preceding the claim.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Security Testing Disclaimer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              perfecXion.ai is not liable for any damages resulting from security testing activities, including but not 
              limited to system downtime, data corruption, or business interruption. You are solely responsible for 
              obtaining proper authorization and backing up systems before testing.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Professional Liability</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our Services are tools to assist security professionals. We do not provide professional security consulting 
              services. You should engage qualified security professionals to interpret and act on our findings.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Indemnification</h3>
            <p className="text-gray-600 dark:text-gray-300">
              You agree to indemnify and hold harmless perfecXion.ai from any claims, damages, or expenses 
              arising from your violation of these Terms or misuse of our Services, including unauthorized security testing.
            </p>
          </section>

          <section id="data-processing" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              9. Data Processing and Privacy
            </h2>
            
            <h3 className="text-xl font-semibold mb-4">Data Processing Agreement</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For enterprise customers processing personal data, we offer a Data Processing Agreement (DPA) that 
              governs our processing of personal data on your behalf. The DPA includes appropriate technical and 
              organizational measures to protect personal data.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Privacy Compliance</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We comply with applicable data protection laws including GDPR and CCPA. Our detailed privacy practices 
              are described in our <Link href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</Link>.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Data Retention</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We retain your data only as long as necessary to provide our Services and comply with legal obligations. 
              You may request deletion of your data at any time, subject to our retention requirements.
            </p>
          </section>

          <section id="security-testing" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              10. Security Testing Terms
            </h2>
            
            <h3 className="text-xl font-semibold mb-4">Authorized Testing Only</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You represent and warrant that you have full authorization to conduct security testing on any systems 
              tested using our Services. Unauthorized testing may violate computer fraud and abuse laws.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Testing Limitations</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
              <li>• Do not test systems you do not own or lack permission to test</li>
              <li>• Avoid testing that could cause service disruption or data loss</li>
              <li>• Do not use our Services to exploit discovered vulnerabilities</li>
              <li>• Report critical vulnerabilities through responsible disclosure</li>
              <li>• Comply with all applicable laws and regulations</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">AI Model Limitations</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our AI models are trained on diverse datasets but may not detect all security issues. False positives 
              and false negatives are possible. Always validate findings with manual review and additional testing.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mt-6">
              <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">Responsible Disclosure</h4>
              <p className="text-purple-800 dark:text-purple-300 text-sm">
                If you discover vulnerabilities in third-party systems, follow responsible disclosure practices. 
                We support coordinated vulnerability disclosure and will assist in reporting critical findings.
              </p>
            </div>
          </section>

          <section id="termination" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              11. Termination
            </h2>
            
            <h3 className="text-xl font-semibold mb-4">Termination by Either Party</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Either party may terminate these Terms at any time with written notice. Upon termination, 
              your right to use our Services will immediately cease.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Effect of Termination</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Upon termination:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Your access to our Services will be disabled</li>
              <li>• You must cease all use of our Services</li>
              <li>• You must return or destroy any confidential information</li>
              <li>• Accrued fees remain due and payable</li>
              <li>• Sections that by their nature should survive will remain in effect</li>
            </ul>
          </section>

          <section id="governing-law" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Gavel className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              12. Governing Law
            </h2>
            
            <h3 className="text-xl font-semibold mb-4">Applicable Law</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              These Terms are governed by the laws of the State of California, United States, without regard 
              to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Dispute Resolution</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Any disputes arising from these Terms shall be resolved through binding arbitration in 
              San Francisco, California, under the rules of the American Arbitration Association.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">General Provisions</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• These Terms constitute the entire agreement between the parties</li>
              <li>• If any provision is found unenforceable, the rest remains valid</li>
              <li>• Our failure to enforce any right is not a waiver</li>
              <li>• You may not assign these Terms without our written consent</li>
              <li>• Notices must be sent to legal@perfecxion.ai</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              Contact Information
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you have questions about these Terms of Service, please contact us:
            </p>

            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Legal Department</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><strong>Email:</strong> <a href="mailto:legal@perfecxion.ai" className="text-primary-600 dark:text-primary-400 hover:underline">legal@perfecxion.ai</a></li>
                <li><strong>Mail:</strong> perfecXion.ai, Attn: Legal, 123 AI Security Blvd, San Francisco, CA 94105</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
              </ul>
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