import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Shield, Users, CheckCircle, AlertTriangle, Code, Zap, FileWarning, ShieldAlert, Terminal, FileText, Eye, Clock, MessageSquare, RefreshCw, Search, Bell, BarChart3, TrendingUp, Workflow, Package, Building, Target, Lock, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Building AI Security Programs - Learn AI Security - perfecXion.ai',
    description: 'Comprehensive guide to implementing enterprise-grade AI security programs with frameworks, methodologies, and governance structures.',
    keywords: 'AI security program, enterprise security, security framework, governance, risk management, security implementation, security strategy',
}

export default function BuildingAISecurityProgramsPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex">
                    <li className="flex items-center">
                        <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">Building AI Security Programs</li>
                </ol>
            </nav>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
                    <Building className="h-10 w-10 text-blue-600 mr-4" />
                    Building AI Security Programs
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
                    Comprehensive guide to implementing enterprise-grade AI security programs with frameworks, methodologies, 
                    and governance structures. Learn to build robust security programs that protect your AI systems while 
                    enabling innovation and business growth.
                </p>
            </div>

            {/* Program Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">85%</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Risk Reduction</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100">6-12</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Months to Maturity</div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                    <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">5x</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">ROI on Security</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                    <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">24/7</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">Security Coverage</div>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#program-foundations" className="text-primary-600 dark:text-primary-400 hover:underline">Program Foundations</a></li>
                    <li><a href="#governance-framework" className="text-primary-600 dark:text-primary-400 hover:underline">Governance Framework</a></li>
                    <li><a href="#risk-management" className="text-primary-600 dark:text-primary-400 hover:underline">Risk Management</a></li>
                    <li><a href="#implementation-phases" className="text-primary-600 dark:text-primary-400 hover:underline">Implementation Phases</a></li>
                    <li><a href="#team-structure" className="text-primary-600 dark:text-primary-400 hover:underline">Team Structure</a></li>
                    <li><a href="#continuous-improvement" className="text-primary-600 dark:text-primary-400 hover:underline">Continuous Improvement</a></li>
                </ul>
            </div>

            {/* Program Foundations */}
            <section id="program-foundations" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Shield className="h-6 w-6 text-blue-500 mr-3" />
                    Program Foundations
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        A successful AI security program is built on solid foundations that align with business objectives, 
                        regulatory requirements, and industry best practices. These foundations provide the framework for 
                        all security activities and ensure sustainable protection.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg">
                            <Building className="h-8 w-8 text-blue-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Strategic Alignment</h3>
                            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                                <li>• Business objectives integration</li>
                                <li>• Risk appetite definition</li>
                                <li>• Resource allocation</li>
                                <li>• Success metrics</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg">
                            <Lock className="h-8 w-8 text-green-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Policy Framework</h3>
                            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                                <li>• Security policies</li>
                                <li>• Standards and procedures</li>
                                <li>• Compliance requirements</li>
                                <li>• Enforcement mechanisms</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg">
                            <Users className="h-8 w-8 text-purple-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Organizational Structure</h3>
                            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                                <li>• Roles and responsibilities</li>
                                <li>• Reporting relationships</li>
                                <li>• Decision-making authority</li>
                                <li>• Communication channels</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Governance Framework */}
            <section id="governance-framework" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Target className="h-6 w-6 text-green-500 mr-3" />
                    Governance Framework
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        Effective governance ensures that AI security activities are properly directed, controlled, 
                        and monitored. A robust governance framework provides the structure for decision-making and accountability.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                                Governance Components
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Strategic Governance</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Executive oversight committee</li>
                                        <li>• Security strategy alignment</li>
                                        <li>• Resource allocation decisions</li>
                                        <li>• Performance monitoring</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Operational Governance</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Security operations management</li>
                                        <li>• Incident response coordination</li>
                                        <li>• Change management processes</li>
                                        <li>• Compliance monitoring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                                <Workflow className="h-6 w-6 text-blue-600 mr-3" />
                                Governance Structure
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Executive Level</h4>
                                    <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                        <li>• CISO and security leadership</li>
                                        <li>• Risk management committee</li>
                                        <li>• Board oversight</li>
                                        <li>• Strategic planning</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Management Level</h4>
                                    <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                        <li>• Security program managers</li>
                                        <li>• Technical leads</li>
                                        <li>• Compliance officers</li>
                                        <li>• Risk assessors</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Operational Level</h4>
                                    <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                        <li>• Security analysts</li>
                                        <li>• Incident responders</li>
                                        <li>• System administrators</li>
                                        <li>• Compliance specialists</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Risk Management */}
            <section id="risk-management" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
                    Risk Management
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        Comprehensive risk management is the cornerstone of any AI security program. It involves 
                        identifying, assessing, and mitigating risks specific to AI systems and their deployment environments.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <Search className="h-6 w-6 text-blue-600 mr-3" />
                                Risk Assessment Framework
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Risk Identification</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Threat modeling for AI systems</li>
                                        <li>• Vulnerability assessment</li>
                                        <li>• Attack vector analysis</li>
                                        <li>• Business impact assessment</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Risk Analysis</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Likelihood determination</li>
                                        <li>• Impact assessment</li>
                                        <li>• Risk scoring methodology</li>
                                        <li>• Prioritization criteria</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Risk Assessment Example</h4>
                                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# AI Risk Assessment Framework
class AIRiskAssessment:
    def __init__(self):
        self.risk_categories = {
            'data_security': ['poisoning', 'leakage', 'privacy'],
            'model_security': ['extraction', 'inversion', 'adversarial'],
            'infrastructure': ['access_control', 'availability', 'integrity'],
            'operational': ['bias', 'drift', 'performance']
        }
    
    def assess_risk(self, ai_system):
        risk_score = 0
        for category, threats in self.risk_categories.items():
            category_score = self.evaluate_category(ai_system, category, threats)
            risk_score += category_score
        return risk_score
    
    def recommend_controls(self, risk_score):
        if risk_score > 0.8:
            return "Implement comprehensive security controls"
        elif risk_score > 0.5:
            return "Implement standard security controls"
        else:
            return "Implement basic security controls"`}
                                </pre>
                            </div>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                            <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-4 flex items-center">
                                <ShieldAlert className="h-6 w-6 text-orange-600 mr-3" />
                                Risk Mitigation Strategies
                            </h3>
                            <ul className="text-orange-800 dark:text-orange-200 space-y-2">
                                <li>• Implement defense-in-depth security controls</li>
                                <li>• Deploy continuous monitoring and detection</li>
                                <li>• Establish incident response procedures</li>
                                <li>• Conduct regular security assessments</li>
                                <li>• Maintain security awareness training</li>
                                <li>• Implement secure development practices</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Phases */}
            <section id="implementation-phases" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Code className="h-6 w-6 text-green-500 mr-3" />
                    Implementation Phases
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        Successful AI security program implementation follows a structured approach with clear phases, 
                        milestones, and deliverables that build upon each other.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                            <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center">
                                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                                Phase 1: Foundation (Months 1-3)
                            </h3>
                            <ul className="text-green-800 dark:text-green-200 space-y-2">
                                <li>• Establish governance structure and policies</li>
                                <li>• Conduct initial risk assessment</li>
                                <li>• Define security requirements and standards</li>
                                <li>• Set up basic monitoring and controls</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                                <Zap className="h-6 w-6 text-blue-600 mr-3" />
                                Phase 2: Enhancement (Months 4-6)
                            </h3>
                            <ul className="text-blue-800 dark:text-blue-200 space-y-2">
                                <li>• Implement advanced security controls</li>
                                <li>• Deploy comprehensive monitoring systems</li>
                                <li>• Establish incident response procedures</li>
                                <li>• Conduct security training programs</li>
                            </ul>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                            <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4 flex items-center">
                                <TrendingUp className="h-6 w-6 text-purple-600 mr-3" />
                                Phase 3: Optimization (Months 7-12)
                            </h3>
                            <ul className="text-purple-800 dark:text-purple-200 space-y-2">
                                <li>• Optimize security processes and procedures</li>
                                <li>• Implement advanced analytics and automation</li>
                                <li>• Conduct comprehensive security assessments</li>
                                <li>• Establish continuous improvement processes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Structure */}
            <section id="team-structure" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Users className="h-6 w-6 text-purple-500 mr-3" />
                    Team Structure
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        A well-structured security team is essential for program success. The team should include 
                        diverse skills and expertise to address the full spectrum of AI security challenges.
                    </p>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Building className="h-6 w-6 text-blue-600 mr-3" />
                            Core Team Roles
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Leadership Roles</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Chief Information Security Officer (CISO)</li>
                                    <li>• AI Security Program Manager</li>
                                    <li>• Security Architecture Lead</li>
                                    <li>• Risk Management Director</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Roles</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• AI Security Engineers</li>
                                    <li>• Security Analysts</li>
                                    <li>• Incident Response Specialists</li>
                                    <li>• Compliance Specialists</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Operational Roles</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Security Operations Center (SOC)</li>
                                    <li>• Threat Intelligence Analysts</li>
                                    <li>• Vulnerability Management</li>
                                    <li>• Security Awareness Trainers</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Supporting Roles</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Legal and Compliance Advisors</li>
                                    <li>• Business Stakeholders</li>
                                    <li>• External Security Consultants</li>
                                    <li>• Audit and Assessment Teams</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Team Development Timeline</h4>
                            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# Team Development Phases
Phase 1 (Months 1-3): Core Team Formation
- Hire CISO and program manager
- Establish basic security roles
- Define team structure and responsibilities

Phase 2 (Months 4-6): Team Expansion
- Add technical specialists
- Implement operational roles
- Establish external partnerships

Phase 3 (Months 7-12): Team Optimization
- Refine roles and responsibilities
- Implement advanced capabilities
- Establish continuous improvement`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Continuous Improvement */}
            <section id="continuous-improvement" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <RefreshCw className="h-6 w-6 text-green-500 mr-3" />
                    Continuous Improvement
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        AI security programs must continuously evolve to address emerging threats, new technologies, 
                        and changing business requirements. A structured improvement process ensures program effectiveness.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
                                Performance Measurement
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Performance Indicators</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Incident response time</li>
                                        <li>• Security control effectiveness</li>
                                        <li>• Risk reduction metrics</li>
                                        <li>• Compliance achievement rates</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Continuous Monitoring</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Threat landscape analysis</li>
                                        <li>• Security posture assessment</li>
                                        <li>• Program effectiveness review</li>
                                        <li>• Stakeholder feedback collection</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                            <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center">
                                <MessageSquare className="h-6 w-6 text-green-600 mr-3" />
                                Improvement Process
                            </h3>
                            <ul className="text-green-800 dark:text-green-200 space-y-2">
                                <li>• Regular program assessments and reviews</li>
                                <li>• Stakeholder feedback and input</li>
                                <li>• Industry best practice adoption</li>
                                <li>• Technology and tool evaluation</li>
                                <li>• Training and skill development</li>
                                <li>• Process optimization and automation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/learn/types-of-ai-attacks" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Types of AI Attacks
                </Link>
                <Link href="/learn/compliance-for-ai-systems" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                    Compliance for AI Systems
                    <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
            </div>
        </div>
    )
} 