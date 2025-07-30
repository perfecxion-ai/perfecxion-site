'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, FileText, Scale, Globe, Lock, CheckCircle2, AlertCircle, Info, BookOpen, Briefcase, Users, ClipboardCheck, FileCheck, Database, Key } from 'lucide-react'

export default function CompliancePage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedFramework, setSelectedFramework] = useState('gdpr')
  const [expandedRegulation, setExpandedRegulation] = useState<string | null>(null)

  const toggleRegulation = (regulation: string) => {
    setExpandedRegulation(expandedRegulation === regulation ? null : regulation)
  }

  const regulations = {
    gdpr: {
      name: 'GDPR',
      fullName: 'General Data Protection Regulation',
      region: 'European Union',
      focus: 'Data Protection & Privacy',
      aiSpecific: [
        'Right to explanation for automated decisions',
        'Data minimization in AI training',
        'Purpose limitation for AI models',
        'Privacy by design requirements'
      ]
    },
    ccpa: {
      name: 'CCPA/CPRA',
      fullName: 'California Consumer Privacy Act',
      region: 'California, USA',
      focus: 'Consumer Privacy Rights',
      aiSpecific: [
        'Opt-out rights for AI profiling',
        'Disclosure of AI logic',
        'Non-discrimination for opt-out',
        'Data deletion requirements'
      ]
    },
    'eu-ai-act': {
      name: 'EU AI Act',
      fullName: 'European Union AI Act',
      region: 'European Union',
      focus: 'AI Systems Regulation',
      aiSpecific: [
        'Risk-based AI classification',
        'Prohibited AI practices',
        'High-risk AI requirements',
        'Conformity assessments'
      ]
    },
    hipaa: {
      name: 'HIPAA',
      fullName: 'Health Insurance Portability and Accountability Act',
      region: 'United States',
      focus: 'Healthcare Data Protection',
      aiSpecific: [
        'PHI protection in AI models',
        'Minimum necessary standard',
        'De-identification requirements',
        'Business associate agreements'
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100">
              Compliance & Governance
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
              Navigate AI regulations and build compliant, trustworthy AI systems
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Scale className="h-5 w-5" />
                <span>Regulatory Compliance</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-5 w-5" />
                <span>Risk Management</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Globe className="h-5 w-5" />
                <span>Global Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'overview', label: 'Overview', icon: BookOpen },
              { id: 'regulations', label: 'Regulations', icon: Scale },
              { id: 'implementation', label: 'Implementation', icon: ClipboardCheck },
              { id: 'governance', label: 'Governance', icon: Briefcase },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-4 border-b-2 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                AI Compliance Landscape
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  The regulatory landscape for AI is rapidly evolving as governments and organizations recognize the need to balance innovation with protection of individual rights, safety, and fairness. Understanding and implementing compliance requirements is crucial for building trustworthy AI systems that can operate globally.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
                    <Scale className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Regulatory Requirements
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Navigate complex regulations including GDPR, EU AI Act, sector-specific requirements, and emerging global standards for AI governance.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                    <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Risk Management
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Implement comprehensive risk assessment and mitigation strategies for AI systems, ensuring responsible deployment and operation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Key Compliance Challenges in AI
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg flex items-center justify-center">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Explainability Requirements
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Many regulations require AI systems to provide explanations for their decisions, particularly in high-stakes applications. This creates technical challenges for complex models like deep neural networks.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Solutions:</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li>• Implement interpretable AI techniques</li>
                        <li>• Develop human-readable decision logs</li>
                        <li>• Use explainable AI frameworks</li>
                        <li>• Maintain audit trails</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center">
                    <Database className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Data Privacy & Protection
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      AI systems often require large amounts of data for training, creating tensions with privacy regulations that mandate data minimization and purpose limitation.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Strategies:</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li>• Privacy-preserving machine learning</li>
                        <li>• Federated learning approaches</li>
                        <li>• Differential privacy techniques</li>
                        <li>• Synthetic data generation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Bias & Fairness
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Ensuring AI systems do not discriminate against protected groups is both a legal requirement and ethical imperative, requiring ongoing monitoring and adjustment.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Approaches:</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li>• Bias detection and measurement</li>
                        <li>• Fairness-aware training</li>
                        <li>• Regular audits and assessments</li>
                        <li>• Diverse development teams</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Compliance Maturity Model
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    level: 1,
                    name: 'Initial',
                    description: 'Ad-hoc compliance efforts, reactive approach',
                    characteristics: ['No formal processes', 'Limited documentation', 'Reactive to incidents']
                  },
                  {
                    level: 2,
                    name: 'Developing',
                    description: 'Basic policies in place, some proactive measures',
                    characteristics: ['Written policies', 'Basic training', 'Some monitoring']
                  },
                  {
                    level: 3,
                    name: 'Managed',
                    description: 'Comprehensive compliance program, regular assessments',
                    characteristics: ['Formal governance', 'Regular audits', 'Risk management']
                  },
                  {
                    level: 4,
                    name: 'Optimized',
                    description: 'Integrated compliance, continuous improvement',
                    characteristics: ['Automated compliance', 'Predictive analytics', 'Industry leadership']
                  }
                ].map((level) => (
                  <div key={level.level} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                      {level.level}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Level {level.level}: {level.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">{level.description}</p>
                      <ul className="flex flex-wrap gap-2">
                        {level.characteristics.map((char, index) => (
                          <li key={index} className="text-sm bg-white dark:bg-gray-600 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Regulations Section */}
        {activeTab === 'regulations' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Major AI Regulations
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {Object.entries(regulations).map(([key, reg]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedFramework(key)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedFramework === key
                        ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-400'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{reg.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{reg.region}</p>
                      </div>
                      <Globe className="h-5 w-5 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">{reg.focus}</p>
                  </button>
                ))}
              </div>

              {selectedFramework && (
                <div className="space-y-6">
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {regulations[selectedFramework].fullName}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Key AI-specific requirements:
                    </p>
                    <ul className="space-y-2">
                      {regulations[selectedFramework].aiSpecific.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedFramework === 'gdpr' && (
                    <div className="space-y-6">
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                          GDPR Requirements for AI Systems
                        </h4>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                              Article 22: Automated Decision Making
                            </h5>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">
                              Individuals have the right not to be subject to decisions based solely on automated processing, including profiling.
                            </p>
                            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                              <pre className="text-sm text-gray-100">
{`# GDPR Article 22 Compliance Check
class GDPRComplianceChecker:
    def __init__(self):
        self.automated_decisions = []
        
    def check_automated_decision(self, decision_process):
        """Check if decision meets GDPR Article 22 requirements"""
        compliance_issues = []
        
        # Check for human involvement
        if not decision_process.has_human_review:
            compliance_issues.append({
                'issue': 'No human involvement',
                'article': '22(1)',
                'severity': 'high',
                'recommendation': 'Add human review process'
            })
            
        # Check for legitimate basis
        if decision_process.legal_basis not in ['contract', 'explicit_consent']:
            compliance_issues.append({
                'issue': 'Invalid legal basis',
                'article': '22(2)',
                'severity': 'critical'
            })
            
        # Check for special categories of data
        if decision_process.uses_special_categories:
            if not decision_process.has_explicit_consent:
                compliance_issues.append({
                    'issue': 'Special category data without consent',
                    'article': '22(4)',
                    'severity': 'critical'
                })
                
        return compliance_issues`}
                              </pre>
                            </div>
                          </div>

                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                              Privacy by Design
                            </h5>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-1" />
                                <span>Data minimization in model training</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-1" />
                                <span>Purpose limitation enforcement</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-1" />
                                <span>Default privacy settings</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-1" />
                                <span>End-to-end security</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                          Data Subject Rights in AI Context
                        </h4>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">Right to Explanation</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Provide meaningful information about the logic involved in automated decisions.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">Right to Erasure</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Remove personal data from trained models when requested.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">Right to Rectification</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Update incorrect data used in AI systems.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">Right to Object</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Opt-out of AI-based profiling and automated decisions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedFramework === 'eu-ai-act' && (
                    <div className="space-y-6">
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                          EU AI Act Risk Categories
                        </h4>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                            <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                              Unacceptable Risk (Prohibited)
                            </h5>
                            <ul className="space-y-1 text-sm text-red-800 dark:text-red-200">
                              <li>• Social scoring by governments</li>
                              <li>• Real-time biometric identification in public spaces</li>
                              <li>• Exploitation of vulnerabilities</li>
                              <li>• Subliminal manipulation</li>
                            </ul>
                          </div>
                          
                          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                            <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                              High Risk
                            </h5>
                            <ul className="space-y-1 text-sm text-orange-800 dark:text-orange-200">
                              <li>• Critical infrastructure</li>
                              <li>• Educational or vocational training</li>
                              <li>• Employment and worker management</li>
                              <li>• Essential services (credit, insurance)</li>
                              <li>• Law enforcement</li>
                              <li>• Migration and border control</li>
                            </ul>
                          </div>
                          
                          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                            <h5 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                              Limited Risk
                            </h5>
                            <ul className="space-y-1 text-sm text-yellow-800 dark:text-yellow-200">
                              <li>• Chatbots (transparency obligations)</li>
                              <li>• Emotion recognition systems</li>
                              <li>• Biometric categorization</li>
                              <li>• Deep fake content</li>
                            </ul>
                          </div>
                          
                          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                            <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                              Minimal Risk
                            </h5>
                            <p className="text-sm text-green-800 dark:text-green-200">
                              Most AI systems fall here with no specific obligations, but voluntary codes of conduct are encouraged.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                          High-Risk AI Requirements
                        </h4>
                        
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm text-gray-100">
{`# EU AI Act High-Risk Compliance Framework
class EUAIActCompliance:
    def __init__(self, ai_system):
        self.system = ai_system
        self.risk_category = self.assess_risk_category()
        
    def assess_risk_category(self):
        """Determine AI system risk category per EU AI Act"""
        # Check prohibited uses
        if self.is_prohibited_use():
            return "PROHIBITED"
            
        # Check high-risk categories
        high_risk_domains = [
            'biometric_identification',
            'critical_infrastructure',
            'education_training',
            'employment',
            'essential_services',
            'law_enforcement',
            'migration_border',
            'justice'
        ]
        
        if self.system.domain in high_risk_domains:
            return "HIGH_RISK"
            
        # Check limited risk
        if self.system.type in ['chatbot', 'emotion_recognition', 'deepfake']:
            return "LIMITED_RISK"
            
        return "MINIMAL_RISK"
        
    def generate_technical_documentation(self):
        """Generate required technical documentation"""
        return {
            'system_description': self.document_system(),
            'data_governance': self.document_data_practices(),
            'algorithm_transparency': self.document_algorithms(),
            'testing_validation': self.document_testing(),
            'human_oversight': self.document_oversight(),
            'cybersecurity': self.document_security()
        }
        
    def implement_logging_requirements(self):
        """Implement mandatory logging for high-risk AI"""
        logging_config = {
            'events': ['predictions', 'decisions', 'errors', 'updates'],
            'retention': '3_years',
            'format': 'structured_json',
            'encryption': 'AES-256',
            'access_control': 'role_based'
        }
        
        return self.system.configure_logging(logging_config)`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Sector-Specific Regulations
              </h2>
              
              <div className="space-y-4">
                <button
                  onClick={() => toggleRegulation('healthcare')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span className="font-medium text-gray-900 dark:text-white">Healthcare AI Compliance</span>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    expandedRegulation === 'healthcare' ? 'rotate-90' : ''
                  }`} />
                </button>
                {expandedRegulation === 'healthcare' && (
                  <div className="mt-4 pl-12 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      Healthcare AI must comply with HIPAA, FDA regulations for medical devices, and clinical validation requirements.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• FDA Software as Medical Device (SaMD) framework</li>
                      <li>• Clinical validation and safety testing</li>
                      <li>• Patient consent for AI-based diagnosis</li>
                      <li>• Continuous monitoring requirements</li>
                    </ul>
                  </div>
                )}

                <button
                  onClick={() => toggleRegulation('financial')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-gray-900 dark:text-white">Financial Services AI</span>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    expandedRegulation === 'financial' ? 'rotate-90' : ''
                  }`} />
                </button>
                {expandedRegulation === 'financial' && (
                  <div className="mt-4 pl-12 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      Financial AI systems must meet strict requirements for fairness, explainability, and model risk management.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• SR 11-7 Model Risk Management guidance</li>
                      <li>• Fair lending compliance (ECOA, FHA)</li>
                      <li>• Explainability for credit decisions</li>
                      <li>• Anti-money laundering requirements</li>
                    </ul>
                  </div>
                )}

                <button
                  onClick={() => toggleRegulation('automotive')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="font-medium text-gray-900 dark:text-white">Automotive & Autonomous Systems</span>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    expandedRegulation === 'automotive' ? 'rotate-90' : ''
                  }`} />
                </button>
                {expandedRegulation === 'automotive' && (
                  <div className="mt-4 pl-12 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      Autonomous vehicle AI must meet safety standards and undergo extensive testing and certification.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• ISO 26262 functional safety standards</li>
                      <li>• SOTIF (ISO 21448) for AI safety</li>
                      <li>• Cybersecurity requirements (ISO 21434)</li>
                      <li>• Regional autonomous vehicle regulations</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Implementation Section */}
        {activeTab === 'implementation' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Implementing AI Compliance
              </h2>

              <div className="space-y-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                        Compliance by Design
                      </h3>
                      <p className="text-indigo-800 dark:text-indigo-200">
                        Build compliance into your AI systems from the ground up. This approach is more effective and cost-efficient than retrofitting compliance after deployment.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Step 1: Compliance Assessment
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# AI Compliance Assessment Framework
class ComplianceAssessment:
    def __init__(self, ai_system, jurisdictions):
        self.system = ai_system
        self.jurisdictions = jurisdictions
        self.applicable_regulations = []
        
    def conduct_assessment(self):
        """Comprehensive compliance assessment"""
        assessment_results = {
            'regulatory_mapping': self.map_regulations(),
            'gap_analysis': self.identify_gaps(),
            'risk_assessment': self.assess_risks(),
            'remediation_plan': self.create_remediation_plan()
        }
        
        return assessment_results
        
    def map_regulations(self):
        """Map applicable regulations based on factors"""
        factors = {
            'data_types': self.system.get_data_types(),
            'user_locations': self.system.get_user_locations(),
            'use_cases': self.system.get_use_cases(),
            'industry': self.system.industry
        }
        
        regulations = []
        
        # GDPR applies if processing EU data
        if 'EU' in factors['user_locations']:
            regulations.append({
                'name': 'GDPR',
                'requirements': self.get_gdpr_requirements()
            })
            
        # Sector-specific regulations
        if factors['industry'] == 'healthcare':
            regulations.extend([
                {'name': 'HIPAA', 'requirements': self.get_hipaa_requirements()},
                {'name': 'FDA_SAMD', 'requirements': self.get_fda_requirements()}
            ])
            
        return regulations
        
    def identify_gaps(self):
        """Identify compliance gaps"""
        gaps = []
        
        for regulation in self.applicable_regulations:
            for requirement in regulation['requirements']:
                if not self.check_requirement_met(requirement):
                    gaps.append({
                        'regulation': regulation['name'],
                        'requirement': requirement,
                        'current_state': self.get_current_state(requirement),
                        'gap': self.describe_gap(requirement),
                        'priority': self.assess_priority(requirement)
                    })
                    
        return sorted(gaps, key=lambda x: x['priority'], reverse=True)`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Step 2: Technical Implementation
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Privacy-Preserving Techniques
                      </h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
{`# Implement privacy-preserving ML
import tensorflow as tf
import tensorflow_privacy as tfp

class PrivacyPreservingModel:
    def __init__(self, epsilon=1.0, delta=1e-5):
        self.epsilon = epsilon  # Privacy budget
        self.delta = delta
        
    def create_dp_optimizer(self, learning_rate=0.01):
        """Create differentially private optimizer"""
        return tfp.DPKerasSGDOptimizer(
            l2_norm_clip=1.0,
            noise_multiplier=1.1,
            num_microbatches=256,
            learning_rate=learning_rate
        )
        
    def train_with_privacy(self, model, data, labels):
        """Train model with differential privacy"""
        # Configure privacy accounting
        privacy_accountant = tfp.privacy.analysis.PrivacyAccountant(
            num_samples=len(data),
            batch_size=256,
            noise_multiplier=1.1,
            epochs=10
        )
        
        # Compile with DP optimizer
        model.compile(
            optimizer=self.create_dp_optimizer(),
            loss='sparse_categorical_crossentropy',
            metrics=['accuracy']
        )
        
        # Train with privacy guarantees
        history = model.fit(
            data, labels,
            epochs=10,
            batch_size=256,
            validation_split=0.2
        )
        
        # Compute privacy spent
        epsilon_spent = privacy_accountant.get_privacy_spent(
            target_delta=self.delta
        )
        
        return model, epsilon_spent`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Explainability Implementation
                      </h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
{`# Implement explainable AI for compliance
import shap
import lime
from lime import lime_text

class ExplainableAI:
    def __init__(self, model, model_type='classification'):
        self.model = model
        self.model_type = model_type
        self.explainer = None
        
    def setup_explainer(self, training_data):
        """Initialize appropriate explainer"""
        if self.model_type == 'tabular':
            self.explainer = shap.Explainer(self.model, training_data)
        elif self.model_type == 'text':
            self.explainer = lime_text.LimeTextExplainer()
        elif self.model_type == 'image':
            self.explainer = lime.lime_image.LimeImageExplainer()
            
    def explain_prediction(self, instance):
        """Generate explanation for a single prediction"""
        prediction = self.model.predict(instance)
        
        # Generate explanation
        if self.model_type == 'tabular':
            explanation = self.explainer(instance)
            return {
                'prediction': prediction,
                'feature_importance': explanation.values,
                'base_value': explanation.base_values,
                'explanation_text': self.generate_text_explanation(explanation)
            }
            
    def generate_compliance_report(self, instance, decision):
        """Generate GDPR Article 22 compliant explanation"""
        explanation = self.explain_prediction(instance)
        
        report = {
            'decision': decision,
            'logic_involved': explanation['explanation_text'],
            'significant_features': self.get_top_features(explanation),
            'contestability_info': {
                'how_to_contest': 'Contact appeals@company.com',
                'human_review_available': True
            }
        }
        
        return report`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Audit Trail Implementation
                      </h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
{`# Comprehensive audit trail for AI compliance
import hashlib
import json
from datetime import datetime

class AIAuditTrail:
    def __init__(self, storage_backend):
        self.storage = storage_backend
        self.audit_chain = []
        
    def log_ai_decision(self, decision_data):
        """Log AI decision with full context"""
        audit_entry = {
            'timestamp': datetime.utcnow().isoformat(),
            'decision_id': self.generate_decision_id(),
            'model_version': decision_data['model_version'],
            'input_data_hash': self.hash_input(decision_data['input']),
            'output': decision_data['output'],
            'confidence_scores': decision_data.get('confidence'),
            'explanation': decision_data.get('explanation'),
            'processing_time_ms': decision_data.get('processing_time'),
            'user_consent': decision_data.get('consent_id'),
            'purpose': decision_data.get('processing_purpose')
        }
        
        # Chain entries for tamper detection
        if self.audit_chain:
            audit_entry['previous_hash'] = self.audit_chain[-1]['hash']
            
        audit_entry['hash'] = self.compute_entry_hash(audit_entry)
        
        # Store with encryption
        self.storage.store_encrypted(audit_entry)
        self.audit_chain.append(audit_entry)
        
        return audit_entry['decision_id']
        
    def generate_compliance_evidence(self, regulation, time_period):
        """Generate evidence package for compliance audit"""
        evidence = {
            'regulation': regulation,
            'period': time_period,
            'decision_logs': self.get_filtered_logs(time_period),
            'consent_records': self.get_consent_records(time_period),
            'data_processing_records': self.get_processing_records(time_period),
            'model_documentation': self.get_model_docs(),
            'audit_trail_integrity': self.verify_chain_integrity()
        }
        
        return evidence`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Step 3: Operational Procedures
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                      <Lock className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-3" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Access Controls
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li>• Role-based access to AI systems</li>
                        <li>• Audit logging of all access</li>
                        <li>• Regular access reviews</li>
                        <li>• Principle of least privilege</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                      <Users className="h-8 w-8 text-green-600 dark:text-green-400 mb-3" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Training & Awareness
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li>• AI ethics training</li>
                        <li>• Compliance procedures</li>
                        <li>• Incident reporting</li>
                        <li>• Regular updates</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                      <FileText className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-3" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Documentation
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li>• System design documents</li>
                        <li>• Data processing records</li>
                        <li>• Risk assessments</li>
                        <li>• Compliance certificates</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                      <ClipboardCheck className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Regular Audits
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li>• Internal compliance audits</li>
                        <li>• Third-party assessments</li>
                        <li>• Automated monitoring</li>
                        <li>• Continuous improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Compliance Automation
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-400">
                  Automate compliance monitoring and reporting to ensure continuous adherence to regulations while reducing manual overhead.
                </p>
                
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-100">
{`# Automated Compliance Monitoring System
import asyncio
from typing import Dict, List, Any
import pandas as pd

class ComplianceMonitor:
    def __init__(self, config: Dict[str, Any]):
        self.config = config
        self.regulations = config['regulations']
        self.alert_thresholds = config['alert_thresholds']
        self.monitors = []
        
    async def start_monitoring(self):
        """Start continuous compliance monitoring"""
        tasks = [
            self.monitor_data_retention(),
            self.monitor_consent_validity(),
            self.monitor_access_patterns(),
            self.monitor_model_drift(),
            self.monitor_bias_metrics()
        ]
        
        await asyncio.gather(*tasks)
        
    async def monitor_data_retention(self):
        """Monitor data retention compliance"""
        while True:
            # Check data retention policies
            retention_violations = []
            
            for dataset in self.get_datasets():
                age = self.calculate_data_age(dataset)
                retention_limit = self.get_retention_limit(dataset)
                
                if age > retention_limit:
                    retention_violations.append({
                        'dataset': dataset.id,
                        'age_days': age,
                        'limit_days': retention_limit,
                        'regulation': 'GDPR Article 5(1)(e)'
                    })
                    
            if retention_violations:
                await self.alert_compliance_team(
                    'DATA_RETENTION_VIOLATION',
                    retention_violations
                )
                
            await asyncio.sleep(3600)  # Check hourly
            
    async def monitor_bias_metrics(self):
        """Monitor AI fairness metrics"""
        while True:
            for model in self.get_active_models():
                metrics = await self.calculate_fairness_metrics(model)
                
                violations = []
                for protected_attribute in ['gender', 'race', 'age']:
                    if metrics[protected_attribute]['disparity'] > 0.2:
                        violations.append({
                            'model': model.id,
                            'attribute': protected_attribute,
                            'disparity': metrics[protected_attribute]['disparity'],
                            'threshold': 0.2
                        })
                        
                if violations:
                    await self.alert_compliance_team(
                        'BIAS_THRESHOLD_EXCEEDED',
                        violations
                    )
                    
            await asyncio.sleep(3600 * 6)  # Check every 6 hours
            
    def generate_compliance_dashboard(self):
        """Generate real-time compliance dashboard data"""
        return {
            'overall_score': self.calculate_compliance_score(),
            'regulations': {
                reg: self.get_regulation_status(reg)
                for reg in self.regulations
            },
            'recent_violations': self.get_recent_violations(),
            'upcoming_audits': self.get_audit_schedule(),
            'metrics': {
                'data_requests_processed': self.get_data_request_metrics(),
                'consent_coverage': self.get_consent_coverage(),
                'model_explanations_provided': self.get_explanation_metrics()
            }
        }`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Governance Section */}
        {activeTab === 'governance' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                AI Governance Framework
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Effective AI governance ensures responsible development and deployment of AI systems through clear policies, procedures, and oversight mechanisms. A comprehensive governance framework addresses ethical considerations, risk management, and stakeholder accountability.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Governance Structure
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        AI Ethics Board
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Cross-functional committee providing oversight and guidance on ethical AI practices.
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Review high-risk AI projects</li>
                        <li>• Establish ethical guidelines</li>
                        <li>• Resolve ethical dilemmas</li>
                        <li>• Ensure stakeholder representation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Chief AI Officer
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Executive leadership for AI strategy and governance implementation.
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Define AI strategy and policies</li>
                        <li>• Oversee compliance programs</li>
                        <li>• Manage AI risk portfolio</li>
                        <li>• Report to board of directors</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        AI Risk Committee
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Specialized team for identifying and mitigating AI-specific risks.
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Conduct risk assessments</li>
                        <li>• Develop mitigation strategies</li>
                        <li>• Monitor risk indicators</li>
                        <li>• Incident response planning</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Policy Framework
                  </h3>
                  
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# AI Governance Policy Template
policy:
  name: "AI Governance and Ethics Policy"
  version: "2.0"
  effective_date: "2024-01-01"
  
  principles:
    - transparency:
        description: "AI systems must be explainable and auditable"
        requirements:
          - "Document model architecture and training data"
          - "Provide decision explanations when requested"
          - "Maintain audit logs of all AI decisions"
          
    - fairness:
        description: "AI must not discriminate against protected groups"
        requirements:
          - "Regular bias testing and monitoring"
          - "Diverse training data and development teams"
          - "Fairness metrics integrated into MLOps"
          
    - accountability:
        description: "Clear ownership and responsibility for AI systems"
        requirements:
          - "Designated AI system owners"
          - "Defined escalation procedures"
          - "Regular compliance reviews"
          
    - privacy:
        description: "Protect individual privacy and data rights"
        requirements:
          - "Privacy by design implementation"
          - "Data minimization practices"
          - "User consent management"
          
    - safety:
        description: "Ensure AI systems are safe and secure"
        requirements:
          - "Rigorous testing before deployment"
          - "Continuous monitoring in production"
          - "Fail-safe mechanisms"
          
  procedures:
    project_approval:
      - risk_assessment: "Complete AI risk assessment template"
      - ethics_review: "Submit to Ethics Board if high-risk"
      - compliance_check: "Verify regulatory compliance"
      - approval_gates: "Obtain necessary sign-offs"
      
    incident_response:
      - detection: "Automated monitoring and alerts"
      - assessment: "Evaluate impact and severity"
      - containment: "Isolate affected systems"
      - remediation: "Fix issues and prevent recurrence"
      - reporting: "Notify stakeholders and regulators"`}
                    </pre>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Lifecycle Governance
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Design Phase</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Ethics review, privacy impact assessment, bias prevention planning
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Development Phase</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Secure coding practices, fairness testing, documentation
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Deployment Phase</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Compliance verification, monitoring setup, user training
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Operations Phase</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Continuous monitoring, incident response, regular audits
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Metrics and KPIs
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Compliance Metrics
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Regulatory compliance score</li>
                    <li>• Audit findings closure rate</li>
                    <li>• Data subject request response time</li>
                    <li>• Privacy breach incidents</li>
                    <li>• Training completion rates</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Ethical AI Metrics
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Fairness scores across demographics</li>
                    <li>• Explainability coverage</li>
                    <li>• Model transparency index</li>
                    <li>• Stakeholder trust scores</li>
                    <li>• Ethics review turnaround time</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Risk Metrics
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• AI risk exposure score</li>
                    <li>• Critical vulnerabilities patched</li>
                    <li>• Model drift detection rate</li>
                    <li>• Security incident frequency</li>
                    <li>• Risk mitigation effectiveness</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Operational Metrics
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Model performance monitoring</li>
                    <li>• System availability and uptime</li>
                    <li>• Incident response time</li>
                    <li>• Documentation completeness</li>
                    <li>• Governance process efficiency</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Governance Best Practices
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <Briefcase className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Executive Buy-In
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Board-level AI oversight</li>
                    <li>• Clear accountability structure</li>
                    <li>• Regular executive reporting</li>
                    <li>• Strategic alignment</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <Users className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Stakeholder Engagement
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Regular communication</li>
                    <li>• Feedback mechanisms</li>
                    <li>• Transparency reports</li>
                    <li>• External advisory boards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Next Steps
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/learn/incident-response" className="block group">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-lg transition-all">
                    <AlertCircle className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Incident Response
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Prepare for compliance incidents and breaches.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      Build response plans →
                    </span>
                  </div>
                </Link>

                <Link href="/learn/security-best-practices" className="block group">
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg hover:shadow-lg transition-all">
                    <Shield className="h-8 w-8 text-green-600 dark:text-green-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Security Best Practices
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Implement security controls for compliance.
                    </p>
                    <span className="text-green-600 dark:text-green-400 font-medium group-hover:underline">
                      Enhance security →
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}