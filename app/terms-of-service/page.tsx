'use client'

import { Container } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/section-header'

export default function TermsOfServicePage() {
  return (
    <div className="bg-white dark:bg-gray-950 py-16">
      <Container>
        <SectionHeader
          title="Terms of Service"
          subtitle="Last updated: January 31, 2025"
          centered
        />
        
        <div className="max-w-4xl mx-auto mt-12 prose prose-gray dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using perfecXion.ai's services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
            <p>
              perfecXion.ai provides enterprise AI security solutions including:
            </p>
            <ul>
              <li>AI model security scanning and vulnerability assessment</li>
              <li>Real-time threat detection and response</li>
              <li>Compliance monitoring and reporting</li>
              <li>Security orchestration and automated response</li>
              <li>Data protection and privacy enforcement</li>
              <li>Supply chain security monitoring</li>
              <li>Adversarial defense mechanisms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
            <h3 className="text-xl font-semibold mb-2">3.1 Account Requirements</h3>
            <ul>
              <li>You must provide accurate and complete registration information</li>
              <li>You are responsible for maintaining account security</li>
              <li>You must notify us immediately of any unauthorized access</li>
              <li>One account per organization unless otherwise agreed</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">3.2 Account Restrictions</h3>
            <ul>
              <li>Accounts are for business use only</li>
              <li>You must be authorized to bind your organization</li>
              <li>Minimum age requirement: 18 years</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Subscription and Payment Terms</h2>
            <h3 className="text-xl font-semibold mb-2">4.1 Subscription Plans</h3>
            <ul>
              <li>Subscriptions are billed annually or monthly</li>
              <li>Plans are based on usage tiers and features</li>
              <li>Custom enterprise agreements available</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">4.2 Payment</h3>
            <ul>
              <li>Payment is due upon invoice receipt</li>
              <li>Late payments subject to 1.5% monthly interest</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>Prices subject to change with 30 days notice</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">4.3 Free Trials</h3>
            <ul>
              <li>14-day free trial for qualified organizations</li>
              <li>Credit card required for trial activation</li>
              <li>Automatic conversion to paid plan unless cancelled</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Acceptable Use Policy</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use Services for any illegal or unauthorized purpose</li>
              <li>Attempt to breach or test Service security without permission</li>
              <li>Interfere with or disrupt Service integrity or performance</li>
              <li>Transmit malicious code or vulnerabilities</li>
              <li>Access Services through automated means without permission</li>
              <li>Resell or redistribute Services without authorization</li>
              <li>Use Services to develop competing products</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Data Rights and Ownership</h2>
            <h3 className="text-xl font-semibold mb-2">6.1 Your Data</h3>
            <ul>
              <li>You retain all rights to your data</li>
              <li>You grant us license to process data for Service delivery</li>
              <li>You are responsible for data accuracy and legality</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">6.2 Service Data</h3>
            <ul>
              <li>We own all Service-generated insights and analytics</li>
              <li>Aggregated and anonymized data may be used for improvements</li>
              <li>Security intelligence shared across customer base</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of:
            </p>
            <ul>
              <li>Proprietary information and trade secrets</li>
              <li>Security vulnerabilities and incidents</li>
              <li>Technical documentation and methodologies</li>
              <li>Pricing and contract terms</li>
            </ul>
            <p className="mt-4">
              Confidentiality obligations survive termination for 5 years.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Service Level Agreement (SLA)</h2>
            <h3 className="text-xl font-semibold mb-2">8.1 Uptime Commitment</h3>
            <ul>
              <li>99.9% uptime guarantee for Enterprise plans</li>
              <li>99.5% uptime for Professional plans</li>
              <li>Measured monthly excluding scheduled maintenance</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">8.2 Support Response Times</h3>
            <ul>
              <li>Critical issues: 1 hour response time</li>
              <li>High priority: 4 hours response time</li>
              <li>Standard priority: 24 hours response time</li>
              <li>24/7 support for Enterprise customers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Warranties and Disclaimers</h2>
            <h3 className="text-xl font-semibold mb-2">9.1 Our Warranties</h3>
            <ul>
              <li>Services will perform materially as described</li>
              <li>We maintain industry-standard security practices</li>
              <li>Professional services performed with reasonable skill</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">9.2 Disclaimers</h3>
            <p className="uppercase">
              SERVICES PROVIDED "AS IS" WITHOUT WARRANTIES OF MERCHANTABILITY, FITNESS FOR PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT GUARANTEE PREVENTION OF ALL SECURITY INCIDENTS.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
            <p className="uppercase">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY SHALL NOT EXCEED THE FEES PAID IN THE TWELVE MONTHS PRECEDING THE CLAIM. WE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES.
            </p>
            <p className="mt-4">
              This limitation does not apply to breaches of confidentiality, indemnification obligations, or gross negligence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless perfecXion.ai from claims arising from:
            </p>
            <ul>
              <li>Your violation of these Terms</li>
              <li>Your use of Services in violation of law</li>
              <li>Your data or content</li>
              <li>Your breach of confidentiality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Termination</h2>
            <h3 className="text-xl font-semibold mb-2">12.1 Termination by You</h3>
            <ul>
              <li>Cancel subscription anytime with 30 days notice</li>
              <li>No refund for partial periods</li>
              <li>Data export available for 90 days post-termination</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">12.2 Termination by Us</h3>
            <ul>
              <li>Immediate termination for Terms violation</li>
              <li>30 days notice for convenience</li>
              <li>Immediate termination for non-payment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Governing Law and Disputes</h2>
            <ul>
              <li>Governed by laws of California, USA</li>
              <li>Disputes resolved through binding arbitration</li>
              <li>Arbitration conducted in San Francisco, CA</li>
              <li>Each party bears own attorney fees</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">14. Changes to Terms</h2>
            <p>
              We may modify these Terms with 30 days notice. Continued use after changes constitutes acceptance. Material changes may require explicit consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">15. General Provisions</h2>
            <ul>
              <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement</li>
              <li><strong>Severability:</strong> Invalid provisions will be modified to be enforceable</li>
              <li><strong>No Waiver:</strong> Failure to enforce does not constitute waiver</li>
              <li><strong>Assignment:</strong> You may not assign without our consent</li>
              <li><strong>Force Majeure:</strong> Neither party liable for acts beyond control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">16. Contact Information</h2>
            <div className="mt-4">
              <p><strong>perfecXion.ai Legal Department</strong></p>
              <p>Email: legal@perfecxion.ai</p>
              <p>Address: 2261 Market Street #4667, San Francisco, CA 94114</p>
              <p>Phone: 1-800-XXX-XXXX</p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  )
}