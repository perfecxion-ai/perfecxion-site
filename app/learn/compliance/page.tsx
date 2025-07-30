import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, FileText, Scale, Globe, Lock, CheckCircle, AlertCircle, Info, BookOpen, Briefcase, Users, ClipboardCheck, FileCheck, Database, Key } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Compliance & Governance - AI Security Learning Center | perfecXion.ai',
  description: 'Navigate AI regulations and build compliant, trustworthy AI systems. Learn GDPR, CCPA, EU AI Act, and other regulatory frameworks.',
  keywords: 'AI compliance, GDPR, CCPA, EU AI Act, regulatory compliance, AI governance, data protection, privacy',
}

export default function CompliancePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
          <Scale className="h-10 w-10 text-indigo-600 mr-4" />
          Compliance & Governance
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
          Navigate AI regulations and build compliant, trustworthy AI systems. Master regulatory frameworks 
          like GDPR, CCPA, EU AI Act, and governance best practices for responsible AI deployment.
        </p>
      </div>

      {/* Key Regulations Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Major AI Regulations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GDPR */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">GDPR</h3>
            </div>
            <p className="text-blue-800 dark:text-blue-200 mb-3">
              <strong>General Data Protection Regulation</strong> - European Union
            </p>
            <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
              Focus: Data Protection & Privacy
            </p>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• Right to explanation for automated decisions</li>
              <li>• Data minimization in AI training</li>
              <li>• Purpose limitation for AI models</li>
              <li>• Privacy by design requirements</li>
            </ul>
          </div>

          {/* EU AI Act */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-purple-600 mr-2" />
              <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100">EU AI Act</h3>
            </div>
            <p className="text-purple-800 dark:text-purple-200 mb-3">
              <strong>European Union AI Act</strong> - European Union
            </p>
            <p className="text-purple-700 dark:text-purple-300 text-sm mb-4">
              Focus: AI Systems Regulation
            </p>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Risk-based AI classification</li>
              <li>• Prohibited AI practices</li>
              <li>• High-risk AI requirements</li>
              <li>• Conformity assessments</li>
            </ul>
          </div>

          {/* CCPA */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-100">CCPA/CPRA</h3>
            </div>
            <p className="text-green-800 dark:text-green-200 mb-3">
              <strong>California Consumer Privacy Act</strong> - California, USA
            </p>
            <p className="text-green-700 dark:text-green-300 text-sm mb-4">
              Focus: Consumer Privacy Rights
            </p>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• Opt-out rights for AI profiling</li>
              <li>• Disclosure of AI logic</li>
              <li>• Non-discrimination for opt-out</li>
              <li>• Data deletion requirements</li>
            </ul>
          </div>

          {/* HIPAA */}
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-red-600 mr-2" />
              <h3 className="text-xl font-semibold text-red-900 dark:text-red-100">HIPAA</h3>
            </div>
            <p className="text-red-800 dark:text-red-200 mb-3">
              <strong>Health Insurance Portability and Accountability Act</strong> - United States
            </p>
            <p className="text-red-700 dark:text-red-300 text-sm mb-4">
              Focus: Healthcare Data Protection
            </p>
            <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
              <li>• PHI protection in AI models</li>
              <li>• Minimum necessary standard</li>
              <li>• De-identification requirements</li>
              <li>• Business associate agreements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* GDPR Deep Dive */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">GDPR Requirements for AI Systems</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Article 22: Automated Decision Making
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Individuals have the right not to be subject to decisions based solely on automated processing, including profiling.
          </p>
          
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
            <pre className="text-sm text-gray-100">
{`# GDPR Article 22 Compliance Check
class GDPRComplianceChecker:
    def __init__(self):
        self.automated_decisions = []
        
    def check_automated_decision(self, decision_process):
        """Check if automated decision requires human oversight"""
        
        # Check for high-impact decisions
        high_impact_categories = [
            'credit_scoring', 'employment', 'healthcare',
            'insurance', 'legal_proceedings'
        ]
        
        if decision_process.category in high_impact_categories:
            return {
                'requires_human_review': True,
                'explanation_required': True,
                'opt_out_available': True,
                'reason': 'High-impact automated decision'
            }
        
        # Check for profiling
        if decision_process.uses_profiling:
            return {
                'requires_human_review': True,
                'explanation_required': True,
                'opt_out_available': True,
                'reason': 'Decision involves profiling'
            }
        
        return {
            'requires_human_review': False,
            'explanation_required': False,
            'opt_out_available': True
        }`}
            </pre>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Implementation Requirements:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• Implement meaningful human oversight for high-impact decisions</li>
              <li>• Provide clear explanations of automated decision logic</li>
              <li>• Allow individuals to contest automated decisions</li>
              <li>• Maintain records of automated decision-making processes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AI Governance Framework */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">AI Governance Framework</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-6 rounded-lg">
            <FileCheck className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Policy Development</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>• AI Ethics Policy</li>
              <li>• Risk Management Framework</li>
              <li>• Data Governance Policies</li>
              <li>• Incident Response Procedures</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg">
            <ClipboardCheck className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Risk Assessment</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>• AI Impact Assessments</li>
              <li>• Bias Detection & Mitigation</li>
              <li>• Privacy Impact Analysis</li>
              <li>• Security Risk Evaluation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg">
            <Database className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Audit & Monitoring</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>• Continuous Monitoring</li>
              <li>• Performance Metrics</li>
              <li>• Compliance Reporting</li>
              <li>• External Audits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Compliance Implementation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Implementation Roadmap</h2>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-semibold mr-4 mt-1">1</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Assessment & Planning</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Conduct comprehensive assessment of current AI systems and identify compliance gaps.
              </p>
              <ul className="text-gray-500 dark:text-gray-500 text-sm space-y-1">
                <li>• Inventory all AI systems and data flows</li>
                <li>• Map regulatory requirements to business processes</li>
                <li>• Identify high-risk AI applications</li>
                <li>• Create compliance project roadmap</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full text-sm font-semibold mr-4 mt-1">2</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Policy & Governance</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Establish comprehensive AI governance framework and policies.
              </p>
              <ul className="text-gray-500 dark:text-gray-500 text-sm space-y-1">
                <li>• Develop AI ethics and governance policies</li>
                <li>• Create risk management procedures</li>
                <li>• Establish review and approval processes</li>
                <li>• Define roles and responsibilities</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full text-sm font-semibold mr-4 mt-1">3</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technical Implementation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Implement technical controls and monitoring systems for compliance.
              </p>
              <ul className="text-gray-500 dark:text-gray-500 text-sm space-y-1">
                <li>• Deploy privacy-preserving technologies</li>
                <li>• Implement bias detection and mitigation</li>
                <li>• Create audit trails and logging</li>
                <li>• Build consent management systems</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full text-sm font-semibold mr-4 mt-1">4</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Training & Culture</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Build organizational awareness and capability for responsible AI.
              </p>
              <ul className="text-gray-500 dark:text-gray-500 text-sm space-y-1">
                <li>• Train teams on AI ethics and compliance</li>
                <li>• Establish AI review boards</li>
                <li>• Create escalation procedures</li>
                <li>• Foster culture of responsible AI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Tools */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Compliance Tools & Templates</h2>
        
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Essential Documentation</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-700">
              <FileText className="h-6 w-6 text-blue-600 mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Processing Impact Assessment (DPIA)</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Required for high-risk AI processing under GDPR
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-700">
              <Shield className="h-6 w-6 text-green-600 mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Risk Assessment Framework</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Systematic approach to evaluating AI system risks
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-700">
              <BookOpen className="h-6 w-6 text-purple-600 mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Model Documentation</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Comprehensive documentation of AI system capabilities and limitations
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-700">
              <AlertCircle className="h-6 w-6 text-orange-600 mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Incident Response Plan</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Procedures for handling AI-related security or compliance incidents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Best Practices</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start mb-6">
            <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Privacy by Design</h3>
              <p className="text-blue-800 dark:text-blue-200">
                Embed privacy considerations into AI system design from the ground up, not as an afterthought.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Transparency & Explainability</h3>
              <p className="text-blue-800 dark:text-blue-200">
                Provide clear explanations of AI decision-making processes, especially for high-impact applications.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Continuous Monitoring</h3>
              <p className="text-blue-800 dark:text-blue-200">
                Implement ongoing monitoring for bias, performance degradation, and compliance drift.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Documentation & Audit Trails</h3>
              <p className="text-blue-800 dark:text-blue-200">
                Maintain comprehensive documentation and audit trails for all AI systems and decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/learn/incident-response"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          ← Incident Response
        </Link>
        <Link
          href="/learn/security-best-practices"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Security Best Practices →
        </Link>
      </div>
    </div>
  )
}