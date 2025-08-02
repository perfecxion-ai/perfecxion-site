import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, AlertTriangle, Shield, Brain, Target, Lock, Users, CheckCircle, ArrowLeft, AlertCircle, Code, Zap, FileWarning, ShieldAlert, Terminal, FileText, Eye, Clock, MessageSquare, RefreshCw, Search, Bell, BarChart3, TrendingUp, Workflow, Package, Bug } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Understanding AI Vulnerabilities - Learn AI Security - perfecXion.ai',
    description: 'Comprehensive guide to AI security fundamentals and common vulnerabilities that threaten AI systems in production.',
    keywords: 'AI vulnerabilities, security fundamentals, threat landscape, AI security risks, vulnerability assessment, security threats',
}

export default function UnderstandingAIVulnerabilitiesPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex">
                    <li className="flex items-center">
                        <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">Understanding AI Vulnerabilities</li>
                </ol>
            </nav>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
                    <Bug className="h-10 w-10 text-red-600 mr-4" />
                    Understanding AI Vulnerabilities
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
                    Comprehensive guide to AI security fundamentals and common vulnerabilities that threaten AI systems in production. 
                    Learn to identify, assess, and mitigate the unique security risks that AI systems face in modern environments.
                </p>
            </div>

            {/* Vulnerability Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
                    <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-red-900 dark:text-red-100">73%</div>
                    <div className="text-sm text-red-700 dark:text-red-300">AI Systems Vulnerable</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                    <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">15+</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">Attack Vectors</div>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">$2.9M</div>
                    <div className="text-sm text-yellow-700 dark:text-yellow-300">Avg. Breach Cost</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                    <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">300%</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Attack Increase</div>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#vulnerability-overview" className="text-primary-600 dark:text-primary-400 hover:underline">Vulnerability Overview</a></li>
                    <li><a href="#data-vulnerabilities" className="text-primary-600 dark:text-primary-400 hover:underline">Data Vulnerabilities</a></li>
                    <li><a href="#model-vulnerabilities" className="text-primary-600 dark:text-primary-400 hover:underline">Model Vulnerabilities</a></li>
                    <li><a href="#infrastructure-vulnerabilities" className="text-primary-600 dark:text-primary-400 hover:underline">Infrastructure Vulnerabilities</a></li>
                    <li><a href="#operational-vulnerabilities" className="text-primary-600 dark:text-primary-400 hover:underline">Operational Vulnerabilities</a></li>
                    <li><a href="#assessment-frameworks" className="text-primary-600 dark:text-primary-400 hover:underline">Assessment Frameworks</a></li>
                </ul>
            </div>

            {/* Vulnerability Overview */}
            <section id="vulnerability-overview" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Bug className="h-6 w-6 text-red-500 mr-3" />
                    Vulnerability Overview
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        AI systems face unique vulnerabilities that differ significantly from traditional software systems. 
                        These vulnerabilities stem from the complex nature of AI models, their training processes, and the 
                        data they rely on for learning and inference.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-lg">
                            <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Data Vulnerabilities</h3>
                            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                                <li>• Training data poisoning</li>
                                <li>• Privacy violations</li>
                                <li>• Data leakage</li>
                                <li>• Bias introduction</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-lg">
                            <Brain className="h-8 w-8 text-orange-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Model Vulnerabilities</h3>
                            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                                <li>• Adversarial attacks</li>
                                <li>• Model extraction</li>
                                <li>• Model inversion</li>
                                <li>• Backdoor attacks</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg">
                            <Shield className="h-8 w-8 text-blue-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Infrastructure Vulnerabilities</h3>
                            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                                <li>• Access control weaknesses</li>
                                <li>• Network vulnerabilities</li>
                                <li>• Supply chain risks</li>
                                <li>• Deployment vulnerabilities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Vulnerabilities */}
            <section id="data-vulnerabilities" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <FileText className="h-6 w-6 text-blue-500 mr-3" />
                    Data Vulnerabilities
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        Data is the foundation of AI systems, making it a prime target for attackers. Data vulnerabilities 
                        can compromise model integrity, violate privacy, and introduce biases that affect system performance.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                            <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-4 flex items-center">
                                <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
                                Training Data Poisoning
                            </h3>
                            <ul className="text-red-800 dark:text-red-200 space-y-2">
                                <li>• Injection of malicious training samples</li>
                                <li>• Label manipulation attacks</li>
                                <li>• Feature contamination</li>
                                <li>• Backdoor trigger insertion</li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                            <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-4 flex items-center">
                                <Eye className="h-6 w-6 text-orange-600 mr-3" />
                                Privacy Violations
                            </h3>
                            <ul className="text-orange-800 dark:text-orange-200 space-y-2">
                                <li>• Membership inference attacks</li>
                                <li>• Model inversion attacks</li>
                                <li>• Data reconstruction</li>
                                <li>• Attribute inference</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <ShieldAlert className="h-6 w-6 text-yellow-600 mr-3" />
                                Data Protection Strategies
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Sanitization</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Input validation and filtering</li>
                                        <li>• Data anonymization techniques</li>
                                        <li>• Differential privacy implementation</li>
                                        <li>• Secure data handling protocols</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Access Controls</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Role-based access control</li>
                                        <li>• Data encryption at rest and in transit</li>
                                        <li>• Audit logging and monitoring</li>
                                        <li>• Data retention policies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Model Vulnerabilities */}
            <section id="model-vulnerabilities" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Brain className="h-6 w-6 text-purple-500 mr-3" />
                    Model Vulnerabilities
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        AI models themselves can be vulnerable to various attacks that exploit their learning mechanisms, 
                        decision boundaries, and internal representations.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <Target className="h-6 w-6 text-red-600 mr-3" />
                                Adversarial Attacks
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">White-Box Attacks</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Fast Gradient Sign Method (FGSM)</li>
                                        <li>• Projected Gradient Descent (PGD)</li>
                                        <li>• Carlini & Wagner (C&W) attacks</li>
                                        <li>• DeepFool attacks</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Black-Box Attacks</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Query-based attacks</li>
                                        <li>• Transfer attacks</li>
                                        <li>• Decision-based attacks</li>
                                        <li>• Score-based attacks</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Adversarial Defense Example</h4>
                                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# Adversarial Training Implementation
import torch
import torch.nn as nn

class AdversarialTraining:
    def __init__(self, model, epsilon=0.3, alpha=0.01):
        self.model = model
        self.epsilon = epsilon
        self.alpha = alpha
    
    def fgsm_attack(self, data, target):
        data.requires_grad = True
        output = self.model(data)
        loss = nn.CrossEntropyLoss()(output, target)
        loss.backward()
        
        # Create adversarial example
        perturbed_data = data + self.epsilon * data.grad.sign()
        perturbed_data = torch.clamp(perturbed_data, 0, 1)
        
        return perturbed_data
    
    def train_step(self, data, target):
        # Generate adversarial examples
        adv_data = self.fgsm_attack(data, target)
        
        # Train on both clean and adversarial data
        clean_output = self.model(data)
        adv_output = self.model(adv_data)
        
        loss = nn.CrossEntropyLoss()(clean_output, target) + \
               nn.CrossEntropyLoss()(adv_output, target)
        
        return loss`}
                                </pre>
                            </div>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                            <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4 flex items-center">
                                <Shield className="h-6 w-6 text-purple-600 mr-3" />
                                Model Extraction Attacks
                            </h3>
                            <ul className="text-purple-800 dark:text-purple-200 space-y-2">
                                <li>• Model stealing through API queries</li>
                                <li>• Architecture extraction</li>
                                <li>• Parameter estimation</li>
                                <li>• Training data reconstruction</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Vulnerabilities */}
            <section id="infrastructure-vulnerabilities" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Shield className="h-6 w-6 text-blue-500 mr-3" />
                    Infrastructure Vulnerabilities
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        The infrastructure supporting AI systems can introduce vulnerabilities through weak access controls, 
                        network security issues, and supply chain risks.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <Lock className="h-6 w-6 text-blue-600 mr-3" />
                                Access Control Vulnerabilities
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Authentication Issues</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Weak password policies</li>
                                        <li>• Missing multi-factor authentication</li>
                                        <li>• Inadequate session management</li>
                                        <li>• Privilege escalation vulnerabilities</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Authorization Problems</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Overly permissive access controls</li>
                                        <li>• Missing role-based access</li>
                                        <li>• Inadequate audit logging</li>
                                        <li>• Insufficient monitoring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                                <Workflow className="h-6 w-6 text-blue-600 mr-3" />
                                Network Security Vulnerabilities
                            </h3>
                            <ul className="text-blue-800 dark:text-blue-200 space-y-2">
                                <li>• Unencrypted data transmission</li>
                                <li>• Weak network segmentation</li>
                                <li>• Inadequate firewall configurations</li>
                                <li>• Missing intrusion detection systems</li>
                                <li>• Vulnerable API endpoints</li>
                                <li>• Insufficient network monitoring</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operational Vulnerabilities */}
            <section id="operational-vulnerabilities" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Workflow className="h-6 w-6 text-green-500 mr-3" />
                    Operational Vulnerabilities
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        Operational vulnerabilities arise from human factors, process weaknesses, and organizational 
                        deficiencies that can compromise AI system security.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                            <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center">
                                <Users className="h-6 w-6 text-green-600 mr-3" />
                                Human Factor Vulnerabilities
                            </h3>
                            <ul className="text-green-800 dark:text-green-200 space-y-2">
                                <li>• Social engineering attacks</li>
                                <li>• Insider threats and malicious actors</li>
                                <li>• Inadequate security training</li>
                                <li>• Poor security awareness</li>
                                <li>• Human error in configuration</li>
                                <li>• Lack of security culture</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <BarChart3 className="h-6 w-6 text-orange-600 mr-3" />
                                Process Vulnerabilities
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Development Process</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Insecure coding practices</li>
                                        <li>• Missing security reviews</li>
                                        <li>• Inadequate testing</li>
                                        <li>• Poor change management</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Operational Process</h4>
                                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                        <li>• Weak incident response</li>
                                        <li>• Inadequate monitoring</li>
                                        <li>• Poor backup procedures</li>
                                        <li>• Insufficient disaster recovery</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Assessment Frameworks */}
            <section id="assessment-frameworks" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Search className="h-6 w-6 text-purple-500 mr-3" />
                    Assessment Frameworks
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        Systematic vulnerability assessment frameworks help organizations identify, prioritize, and 
                        remediate AI security vulnerabilities effectively.
                    </p>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                            Vulnerability Assessment Process
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Assessment Phases</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Scope definition and planning</li>
                                    <li>• Asset inventory and classification</li>
                                    <li>• Threat modeling and analysis</li>
                                    <li>• Vulnerability scanning and testing</li>
                                    <li>• Risk assessment and prioritization</li>
                                    <li>• Remediation planning and execution</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Assessment Tools</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Automated vulnerability scanners</li>
                                    <li>• Penetration testing frameworks</li>
                                    <li>• Static and dynamic analysis tools</li>
                                    <li>• Configuration assessment tools</li>
                                    <li>• Security monitoring platforms</li>
                                    <li>• Compliance assessment tools</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Assessment Framework Example</h4>
                            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# AI Vulnerability Assessment Framework
class AIVulnerabilityAssessment:
    def __init__(self):
        self.vulnerability_categories = {
            'data': ['poisoning', 'leakage', 'privacy'],
            'model': ['adversarial', 'extraction', 'inversion'],
            'infrastructure': ['access', 'network', 'supply_chain'],
            'operational': ['human', 'process', 'organizational']
        }
    
    def assess_vulnerabilities(self, ai_system):
        results = {}
        for category, threats in self.vulnerability_categories.items():
            category_score = self.evaluate_category(ai_system, category, threats)
            results[category] = category_score
        return results
    
    def generate_report(self, assessment_results):
        total_score = sum(assessment_results.values())
        risk_level = self.calculate_risk_level(total_score)
        return {
            'risk_level': risk_level,
            'recommendations': self.generate_recommendations(assessment_results),
            'priority_actions': self.identify_priority_actions(assessment_results)
        }`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/learn/trad-vs-ai" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Traditional vs AI Security
                </Link>
                <Link href="/learn/types-of-ai-attacks" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                    Types of AI Attacks
                    <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
            </div>
        </div>
    )
} 