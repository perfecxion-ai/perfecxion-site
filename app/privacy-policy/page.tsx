'use client'

import { Container } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/section-header'

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white dark:bg-gray-950 py-16">
      <Container>
        <SectionHeader
          title="Privacy Policy"
          subtitle="Last updated: January 31, 2025"
          centered
        />
        
        <div className="max-w-4xl mx-auto mt-12 prose prose-gray dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              perfecXion.ai ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI security platform and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-2">2.1 Information You Provide</h3>
            <ul>
              <li>Account information (name, email, company name, job title)</li>
              <li>Payment and billing information</li>
              <li>Communications with our support team</li>
              <li>Feedback and survey responses</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">2.2 Information Collected Automatically</h3>
            <ul>
              <li>Usage data and analytics</li>
              <li>Log data (IP address, browser type, access times)</li>
              <li>Device information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">2.3 AI Model and Security Data</h3>
            <ul>
              <li>AI model configurations and parameters</li>
              <li>Security scan results and vulnerability reports</li>
              <li>Threat detection patterns</li>
              <li>Model performance metrics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Provide and maintain our AI security services</li>
              <li>Process transactions and send billing information</li>
              <li>Detect and prevent security threats</li>
              <li>Improve our products and develop new features</li>
              <li>Send technical notices and security alerts</li>
              <li>Respond to customer support requests</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Third-party vendors who assist in providing our services</li>
              <li><strong>Security Partners:</strong> When necessary to investigate or prevent security incidents</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
            </ul>
            <p className="mt-4">
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data:
            </p>
            <ul>
              <li>End-to-end encryption for data in transit and at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
              <li>24/7 security monitoring</li>
              <li>Incident response procedures</li>
              <li>SOC 2 Type II compliance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our services and comply with legal obligations. Specific retention periods:
            </p>
            <ul>
              <li>Account data: Duration of account plus 90 days</li>
              <li>Security logs: 12 months</li>
              <li>Billing records: 7 years</li>
              <li>AI model data: Until manually deleted or account termination</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and receive a copy of your personal data</li>
              <li>Correct or update inaccurate information</li>
              <li>Delete your personal data (subject to legal requirements)</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including:
            </p>
            <ul>
              <li>Standard contractual clauses</li>
              <li>Data processing agreements</li>
              <li>Privacy Shield certification (where applicable)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of material changes via email or through our platform. Continued use of our services after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
            <p>
              For privacy-related questions or to exercise your rights, contact us at:
            </p>
            <div className="mt-4">
              <p><strong>perfecXion.ai Privacy Team</strong></p>
              <p>Email: privacy@perfecxion.ai</p>
              <p>Address: 2261 Market Street #4667, San Francisco, CA 94114</p>
              <p>Data Protection Officer: dpo@perfecxion.ai</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Additional Disclosures for Specific Jurisdictions</h2>
            
            <h3 className="text-xl font-semibold mb-2">California Residents (CCPA)</h3>
            <p>
              California residents have additional rights under the California Consumer Privacy Act. Please see our CCPA Privacy Notice for details.
            </p>

            <h3 className="text-xl font-semibold mb-2">European Union Residents (GDPR)</h3>
            <p>
              EU residents have additional rights under the General Data Protection Regulation. Our legal basis for processing includes consent, contract performance, and legitimate interests.
            </p>
          </section>
        </div>
      </Container>
    </div>
  )
}