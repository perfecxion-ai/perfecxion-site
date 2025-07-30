import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compliance & Governance - AI Security Learning Center | perfecXion.ai',
  description: 'Navigate AI regulations and build compliant, trustworthy AI systems. Learn GDPR, CCPA, EU AI Act, and other regulatory frameworks.',
  keywords: 'AI compliance, GDPR, CCPA, EU AI Act, regulatory compliance, AI governance, data protection, privacy',
}

export default function CompliancePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-6">
        Compliance & Governance
      </h1>
      <p className="text-xl text-gray-300 mb-12 leading-relaxed">
        Navigate AI regulations and build compliant, trustworthy AI systems. Learn regulatory frameworks like GDPR, CCPA, EU AI Act, and governance best practices.
      </p>
      
      <div className="prose prose-invert max-w-none">
        <h2>Coming Soon</h2>
        <p>This comprehensive guide to AI compliance and governance is being prepared. Check back soon for in-depth content covering:</p>
        <ul>
          <li>GDPR compliance for AI systems</li>
          <li>CCPA and CPRA requirements</li>
          <li>EU AI Act implementation</li>
          <li>HIPAA for healthcare AI</li>
          <li>Regulatory risk assessment</li>
          <li>Compliance frameworks and tools</li>
          <li>Governance best practices</li>
          <li>Audit and documentation requirements</li>
        </ul>
      </div>
    </div>
  )
}