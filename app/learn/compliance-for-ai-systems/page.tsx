import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, FileText, Shield, CheckCircle, AlertTriangle, Users, Lock, ArrowLeft, Code, Zap, FileWarning, ShieldAlert, Terminal, BookOpen, Eye, Clock, MessageSquare, RefreshCw, Search, Bell, BarChart3, TrendingUp, Workflow, Package, Globe, Award } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Compliance for AI Systems - Learn AI Security - perfecXion.ai',
    description: 'Navigate the complex regulatory landscape for AI systems including EU AI Act, NIST AI RMF, GDPR, and industry-specific requirements.',
    keywords: 'AI compliance, EU AI Act, NIST AI RMF, GDPR, regulatory requirements, AI governance, compliance frameworks, audit preparation',
}

export default function ComplianceForAISystemsPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex">
                    <li className="flex items-center">
                        <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">Compliance for AI Systems</li>
                </ol>
            </nav>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
                    <FileText className="h-10 w-10 text-blue-600 mr-4" />
                    Compliance for AI Systems
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
                    Navigate the complex regulatory landscape for AI systems including EU AI Act, NIST AI RMF, GDPR, 
                    and industry-specific requirements. Learn to implement robust compliance frameworks that protect 
                    your organization while enabling AI innovation.
                </p>
            </div>

            {/* Compliance Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                    <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">50+</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Regulations Worldwide</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100">€35M</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Max EU AI Act Fine</div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">100%</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">Compliance Rate</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                    <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">2024</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">EU AI Act Effective</div>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#regulatory-landscape" className="text-primary-600 dark:text-primary-400 hover:underline">Regulatory Landscape Overview</a></li>
                    <li><a href="#eu-ai-act" className="text-primary-600 dark:text-primary-400 hover:underline">EU AI Act Compliance</a></li>
                    <li><a href="#nist-framework" className="text-primary-600 dark:text-primary-400 hover:underline">NIST AI Risk Management Framework</a></li>
                    <li><a href="#gdpr-privacy" className="text-primary-600 dark:text-primary-400 hover:underline">GDPR and Privacy Requirements</a></li>
                    <li><a href="#implementation" className="text-primary-600 dark:text-primary-400 hover:underline">Implementation Strategies</a></li>
                    <li><a href="#audit-preparation" className="text-primary-600 dark:text-primary-400 hover:underline">Audit Preparation</a></li>
                </ul>
            </div>

            {/* Regulatory Landscape Overview */}
            <section id="regulatory-landscape" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Globe className="h-6 w-6 text-blue-500 mr-3" />
                    Regulatory Landscape Overview
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        The AI regulatory landscape is rapidly evolving with new frameworks and requirements emerging 
                        globally. Understanding these regulations is crucial for organizations deploying AI systems.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg">
                            <FileText className="h-8 w-8 text-blue-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">EU AI Act</h3>
                            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                                <li>• Risk-based classification</li>
                                <li>• Transparency requirements</li>
                                <li>• Human oversight mandates</li>
                                <li>• Conformity assessments</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg">
                            <Shield className="h-8 w-8 text-green-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">NIST AI RMF</h3>
                            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                                <li>• Risk management framework</li>
                                <li>• Governance structures</li>
                                <li>• Continuous monitoring</li>
                                <li>• Documentation requirements</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg">
                            <Lock className="h-8 w-8 text-purple-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">GDPR & Privacy</h3>
                            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                                <li>• Data protection principles</li>
                                <li>• Privacy by design</li>
                                <li>• Right to explanation</li>
                                <li>• Data minimization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* EU AI Act Compliance */}
            <section id="eu-ai-act" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Award className="h-6 w-6 text-blue-500 mr-3" />
                    EU AI Act Compliance
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        The EU AI Act establishes a comprehensive regulatory framework for AI systems, classifying them 
                        by risk level and imposing specific requirements for each category.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                            <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-4 flex items-center">
                                <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                                Prohibited AI Practices
                            </h3>
                            <ul className="text-red-800 dark:text-red-200 space-y-2">
                                <li>• Social scoring systems</li>
                                <li>• Manipulative AI systems</li>
                                <li>• Remote biometric identification</li>
                                <li>• Emotion recognition in workplaces</li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                            <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-4 flex items-center">
                                <ShieldAlert className="h-6 w-6 text-orange-600 mr-3" />
                                High-Risk AI Systems
                            </h3>
                            <ul className="text-orange-800 dark:text-orange-200 space-y-2">
                                <li>• Critical infrastructure AI</li>
                                <li>• Educational and vocational training</li>
                                <li>• Employment and worker management</li>
                                <li>• Essential private and public services</li>
                                <li>• Law enforcement and migration</li>
                                <li>• Administration of justice</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                                Compliance Requirements
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Requirements</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Risk management systems</li>
                                        <li>• Data governance</li>
                                        <li>• Technical documentation</li>
                                        <li>• Quality management systems</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Operational Requirements</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Human oversight</li>
                                        <li>• Transparency measures</li>
                                        <li>• Accuracy and robustness</li>
                                        <li>• Cybersecurity protection</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NIST AI Risk Management Framework */}
            <section id="nist-framework" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Shield className="h-6 w-6 text-green-500 mr-3" />
                    NIST AI Risk Management Framework
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        The NIST AI Risk Management Framework provides a comprehensive approach to managing AI risks 
                        through governance, mapping, measurement, and management.
                    </p>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Workflow className="h-6 w-6 text-blue-600 mr-3" />
                            Framework Core Functions
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Govern</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Establish AI risk management culture</li>
                                    <li>• Define roles and responsibilities</li>
                                    <li>• Set policies and procedures</li>
                                    <li>• Ensure accountability</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Map</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Identify AI system context</li>
                                    <li>• Assess risk factors</li>
                                    <li>• Document system boundaries</li>
                                    <li>• Map data flows</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Measure</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Develop metrics and testing</li>
                                    <li>• Monitor performance</li>
                                    <li>• Validate outcomes</li>
                                    <li>• Assess effectiveness</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Manage</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Implement risk responses</li>
                                    <li>• Monitor and review</li>
                                    <li>• Update strategies</li>
                                    <li>• Communicate results</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Implementation Example</h4>
                            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# NIST AI RMF Implementation Framework
class AIRiskManagement:
    def __init__(self):
        self.risk_factors = {
            'governance': ['policies', 'roles', 'accountability'],
            'mapping': ['context', 'boundaries', 'data_flows'],
            'measurement': ['metrics', 'testing', 'validation'],
            'management': ['responses', 'monitoring', 'updates']
        }
    
    def assess_risk_level(self, ai_system):
        risk_score = 0
        for factor, criteria in self.risk_factors.items():
            risk_score += self.evaluate_factor(ai_system, factor, criteria)
        return risk_score
    
    def implement_controls(self, risk_score):
        if risk_score > 0.7:
            return "High-risk controls required"
        elif risk_score > 0.4:
            return "Medium-risk controls required"
        else:
            return "Standard controls sufficient"`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* GDPR and Privacy Requirements */}
            <section id="gdpr-privacy" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Lock className="h-6 w-6 text-purple-500 mr-3" />
                    GDPR and Privacy Requirements
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        AI systems must comply with data protection regulations, particularly GDPR, which imposes 
                        strict requirements for personal data processing and individual rights.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <Eye className="h-6 w-6 text-blue-600 mr-3" />
                                Privacy by Design Principles
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Minimization</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Collect only necessary data</li>
                                        <li>• Limit data retention periods</li>
                                        <li>• Implement data anonymization</li>
                                        <li>• Use synthetic data where possible</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Transparency</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Clear privacy notices</li>
                                        <li>• Explainable AI decisions</li>
                                        <li>• User consent mechanisms</li>
                                        <li>• Right to information</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                            <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4 flex items-center">
                                <Users className="h-6 w-6 text-purple-600 mr-3" />
                                Individual Rights Under GDPR
                            </h3>
                            <ul className="text-purple-800 dark:text-purple-200 space-y-2">
                                <li>• Right to access personal data</li>
                                <li>• Right to rectification of inaccurate data</li>
                                <li>• Right to erasure ("right to be forgotten")</li>
                                <li>• Right to data portability</li>
                                <li>• Right to object to processing</li>
                                <li>• Right to explanation of automated decisions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Strategies */}
            <section id="implementation" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Code className="h-6 w-6 text-green-500 mr-3" />
                    Implementation Strategies
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        Successful compliance implementation requires a systematic approach that integrates regulatory 
                        requirements into your AI development and deployment processes.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                                Compliance Framework Implementation
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Phase 1: Assessment</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Current state analysis</li>
                                        <li>• Gap identification</li>
                                        <li>• Risk assessment</li>
                                        <li>• Resource planning</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Phase 2: Implementation</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Policy development</li>
                                        <li>• Process establishment</li>
                                        <li>• Tool deployment</li>
                                        <li>• Training programs</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Phase 3: Monitoring</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Continuous monitoring</li>
                                        <li>• Regular assessments</li>
                                        <li>• Performance tracking</li>
                                        <li>• Improvement cycles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                                <Zap className="h-6 w-6 text-blue-600 mr-3" />
                                Key Success Factors
                            </h3>
                            <ul className="text-blue-800 dark:text-blue-200 space-y-2">
                                <li>• Executive sponsorship and commitment</li>
                                <li>• Cross-functional team collaboration</li>
                                <li>• Regular training and awareness programs</li>
                                <li>• Automated compliance monitoring tools</li>
                                <li>• Continuous improvement processes</li>
                                <li>• Regular audit and assessment cycles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Audit Preparation */}
            <section id="audit-preparation" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <FileText className="h-6 w-6 text-orange-500 mr-3" />
                    Audit Preparation
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        Preparing for compliance audits requires thorough documentation, evidence collection, and 
                        demonstration of effective controls and processes.
                    </p>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <BarChart3 className="h-6 w-6 text-green-600 mr-3" />
                            Audit Readiness Checklist
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Documentation</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Risk assessments and mitigation plans</li>
                                    <li>• Policy and procedure documentation</li>
                                    <li>• Training records and certifications</li>
                                    <li>• Incident response documentation</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Evidence</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• System logs and monitoring data</li>
                                    <li>• Test results and validation reports</li>
                                    <li>• Change management records</li>
                                    <li>• Performance metrics and KPIs</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Audit Preparation Timeline</h4>
                            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# 12-Week Audit Preparation Timeline
Week 1-2:   Gap analysis and remediation planning
Week 3-4:   Policy and procedure updates
Week 5-6:   Implementation of missing controls
Week 7-8:   Documentation review and updates
Week 9-10:  Internal audit and testing
Week 11-12: Final preparation and mock audits

# Key Milestones
- Complete risk assessments
- Implement all required controls
- Document all processes
- Conduct internal audits
- Prepare evidence packages
- Train audit team`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/learn/building-ai-security-programs" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Building AI Security Programs
                </Link>
                <Link href="/learn/incident-response-for-ai" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                    Incident Response for AI
                    <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
            </div>
        </div>
    )
} 