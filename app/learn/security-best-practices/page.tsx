import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, AlertTriangle, Shield, Brain, Target, Lock, Users, CheckCircle, ArrowLeft, AlertCircle, Code, Zap, FileWarning, Award, Server, FileText, Eye, Clock, MessageSquare, RefreshCw, Search, Bell, BarChart3, TrendingUp, Workflow, Package, Network, Settings, Globe, Key, Layers, Monitor, Terminal, Timer, UserCheck, LineChart, Database, GitBranch } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Security Best Practices - Learn AI Security - perfecXion.ai',
    description: 'Master comprehensive security best practices for AI systems. Learn defense-in-depth strategies, secure development lifecycles, operational excellence, and how to build a security-first culture.',
    keywords: 'AI security best practices, secure AI development, operational security, defense in depth, AI governance, security culture',
}

export default function SecurityBestPracticesPage() {
    return (
        <>
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex">
                    <li className="flex items-center">
                        <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">Security Best Practices</li>
                </ol>
            </nav>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
                    <Award className="h-10 w-10 text-green-600 mr-4" />
                    Security Best Practices
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
                    Master comprehensive security best practices for AI systems. Learn defense-in-depth strategies, 
                    secure development lifecycles, operational excellence, and how to build a security-first culture 
                    that protects your AI investments and maintains trust.
                </p>
            </div>

            {/* Security Best Practices Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100">7 Layers</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Defense in Depth</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                    <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">99.9%</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Security Coverage</div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                    <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">24/7</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">Security Monitoring</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                    <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">85%</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">Risk Reduction</div>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#defense-in-depth" className="text-primary-600 dark:text-primary-400 hover:underline">Defense in Depth for AI</a></li>
                    <li><a href="#secure-development" className="text-primary-600 dark:text-primary-400 hover:underline">Secure Development Lifecycle</a></li>
                    <li><a href="#operational-security" className="text-primary-600 dark:text-primary-400 hover:underline">Operational Security</a></li>
                    <li><a href="#access-control" className="text-primary-600 dark:text-primary-400 hover:underline">Access Control & Identity Management</a></li>
                    <li><a href="#data-protection" className="text-primary-600 dark:text-primary-400 hover:underline">Data Protection & Privacy</a></li>
                    <li><a href="#monitoring-detection" className="text-primary-600 dark:text-primary-400 hover:underline">Monitoring & Detection</a></li>
                    <li><a href="#incident-response" className="text-primary-600 dark:text-primary-400 hover:underline">Incident Response & Recovery</a></li>
                    <li><a href="#governance-culture" className="text-primary-600 dark:text-primary-400 hover:underline">Governance & Security Culture</a></li>
                </ul>
            </div>

            {/* Defense in Depth */}
            <section id="defense-in-depth" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Shield className="h-6 w-6 text-green-500 mr-3" />
                    Defense in Depth for AI
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-4">
                        Defense in depth creates multiple layers of security controls, ensuring that if one layer 
                        fails, others continue to protect your AI systems. This approach is critical for AI due 
                        to the unique attack vectors and high-value targets that AI systems represent.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Each layer provides different types of protection, creating a comprehensive security 
                        posture that addresses both traditional IT security concerns and AI-specific threats.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                            <Network className="h-6 w-6 text-blue-600 mr-3" />
                            Network Security
                        </h3>
                        <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                            <li>• Firewalls and network segmentation</li>
                            <li>• Intrusion detection and prevention</li>
                            <li>• DDoS protection</li>
                            <li>• VPN and secure connectivity</li>
                            <li>• API gateway security</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center">
                            <Server className="h-6 w-6 text-green-600 mr-3" />
                            Infrastructure Security
                        </h3>
                        <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                            <li>• Secure compute environments</li>
                            <li>• Container and orchestration security</li>
                            <li>• Secrets management</li>
                            <li>• Infrastructure as code security</li>
                            <li>• Cloud security controls</li>
                        </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4 flex items-center">
                            <Brain className="h-6 w-6 text-purple-600 mr-3" />
                            Model Security
                        </h3>
                        <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                            <li>• Model integrity verification</li>
                            <li>• Adversarial training</li>
                            <li>• Input validation and sanitization</li>
                            <li>• Output filtering and monitoring</li>
                            <li>• Model versioning and rollback</li>
                        </ul>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-4 flex items-center">
                            <Database className="h-6 w-6 text-orange-600 mr-3" />
                            Data Security
                        </h3>
                        <ul className="text-orange-800 dark:text-orange-200 text-sm space-y-1">
                            <li>• Data encryption at rest and in transit</li>
                            <li>• Access controls and permissions</li>
                            <li>• Data loss prevention</li>
                            <li>• Backup and recovery procedures</li>
                            <li>• Privacy-preserving techniques</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Secure Development Lifecycle */}
            <section id="secure-development" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Secure Development Lifecycle</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Integrating security into every phase of AI system development ensures vulnerabilities are 
                    identified and addressed early, reducing risk and cost.
                </p>

                <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Planning & Design</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Define security requirements, threat modeling, and architectural security controls. 
                            Establish security baselines and compliance requirements before development begins.
                        </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Development</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Implement secure coding practices, conduct code reviews, and use automated security 
                            testing. Integrate security tools into the development pipeline.
                        </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Testing</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Perform security testing including penetration testing, vulnerability assessments, 
                            and AI-specific security testing. Validate security controls and compliance.
                        </p>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Deployment</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Secure deployment processes, environment hardening, and configuration management. 
                            Implement secure CI/CD pipelines with security gates.
                        </p>
                    </div>

                    <div className="border-l-4 border-red-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Operations</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Continuous monitoring, security updates, and incident response. Regular security 
                            assessments and compliance audits.
                        </p>
                    </div>
                </div>
            </section>

            {/* Operational Security */}
            <section id="operational-security" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Operational Security</h2>

                <div className="space-y-8">
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Security Operations Center (SOC)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center">
                                <Monitor className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">24/7 Monitoring</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Continuous threat detection and response</p>
                            </div>
                            <div className="text-center">
                                <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Threat Intelligence</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Real-time threat feeds and analysis</p>
                            </div>
                            <div className="text-center">
                                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Incident Response</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Rapid response to security incidents</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Configuration Management</h3>
                            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                <li>• Secure baseline configurations</li>
                                <li>• Configuration drift detection</li>
                                <li>• Automated compliance checking</li>
                                <li>• Change management processes</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">Patch Management</h3>
                            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                                <li>• Automated vulnerability scanning</li>
                                <li>• Risk-based patch prioritization</li>
                                <li>• Testing and validation procedures</li>
                                <li>• Rollback capabilities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Access Control & Identity Management */}
            <section id="access-control" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Access Control & Identity Management</h2>

                <div className="space-y-8">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-4">Identity Management</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">Authentication</h4>
                                <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                                    <li>• Multi-factor authentication (MFA)</li>
                                    <li>• Single sign-on (SSO)</li>
                                    <li>• Biometric authentication</li>
                                    <li>• Hardware security keys</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">Authorization</h4>
                                <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                                    <li>• Role-based access control (RBAC)</li>
                                    <li>• Attribute-based access control (ABAC)</li>
                                    <li>• Just-in-time access</li>
                                    <li>• Privileged access management</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">AI-Specific Access Controls</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Model Access</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Model version control</li>
                                    <li>• Training data access</li>
                                    <li>• Inference API controls</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Access</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Data classification</li>
                                    <li>• Differential privacy</li>
                                    <li>• Data anonymization</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">API Security</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• API key management</li>
                                    <li>• Rate limiting</li>
                                    <li>• Input validation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Protection & Privacy */}
            <section id="data-protection" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Data Protection & Privacy</h2>

                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Data Encryption</h3>
                            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                <li>• Encryption at rest (AES-256)</li>
                                <li>• Encryption in transit (TLS 1.3)</li>
                                <li>• Key management systems</li>
                                <li>• Homomorphic encryption</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">Privacy Protection</h3>
                            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                                <li>• Differential privacy</li>
                                <li>• Federated learning</li>
                                <li>• Data anonymization</li>
                                <li>• Privacy-preserving ML</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">Compliance & Governance</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">GDPR Compliance</h4>
                                <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                                    <li>• Right to explanation</li>
                                    <li>• Data minimization</li>
                                    <li>• Consent management</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">CCPA/CPRA</h4>
                                <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                                    <li>• Opt-out mechanisms</li>
                                    <li>• Data disclosure</li>
                                    <li>• Non-discrimination</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Industry Standards</h4>
                                <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                                    <li>• SOC 2 Type II</li>
                                    <li>• ISO 27001</li>
                                    <li>• NIST Cybersecurity Framework</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monitoring & Detection */}
            <section id="monitoring-detection" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Monitoring & Detection</h2>

                <div className="space-y-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-4">AI-Specific Monitoring</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">Model Monitoring</h4>
                                <ul className="text-orange-800 dark:text-orange-200 text-sm space-y-1">
                                    <li>• Performance drift detection</li>
                                    <li>• Model integrity checks</li>
                                    <li>• Adversarial input detection</li>
                                    <li>• Output quality monitoring</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">Behavioral Analysis</h4>
                                <ul className="text-orange-800 dark:text-orange-200 text-sm space-y-1">
                                    <li>• User behavior analytics</li>
                                    <li>• Anomaly detection</li>
                                    <li>• Threat hunting</li>
                                    <li>• Attack pattern recognition</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Security Information & Event Management (SIEM)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center">
                                <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Log Aggregation</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Centralized log collection and analysis</p>
                            </div>
                            <div className="text-center">
                                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Real-time Analytics</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Live threat detection and correlation</p>
                            </div>
                            <div className="text-center">
                                <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Alert Management</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Intelligent alert prioritization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Incident Response & Recovery */}
            <section id="incident-response" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Incident Response & Recovery</h2>

                <div className="space-y-8">
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-4">AI Incident Response</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">Detection & Analysis</h4>
                                <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                                    <li>• AI-specific threat detection</li>
                                    <li>• Model behavior analysis</li>
                                    <li>• Data integrity verification</li>
                                    <li>• Attack vector identification</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">Containment & Recovery</h4>
                                <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                                    <li>• Model isolation and rollback</li>
                                    <li>• Data quarantine procedures</li>
                                    <li>• System restoration</li>
                                    <li>• Post-incident analysis</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Business Continuity</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backup Strategies</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Model version backups</li>
                                    <li>• Data backup procedures</li>
                                    <li>• Configuration backups</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recovery Procedures</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Disaster recovery plans</li>
                                    <li>• System restoration</li>
                                    <li>• Service continuity</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Testing & Validation</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Recovery testing</li>
                                    <li>• Tabletop exercises</li>
                                    <li>• Performance validation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Governance & Security Culture */}
            <section id="governance-culture" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Governance & Security Culture</h2>

                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Security Governance</h3>
                            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                <li>• Security policies and procedures</li>
                                <li>• Risk management frameworks</li>
                                <li>• Compliance monitoring</li>
                                <li>• Security metrics and KPIs</li>
                                <li>• Executive oversight</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">Security Culture</h3>
                            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                                <li>• Security awareness training</li>
                                <li>• Phishing simulation exercises</li>
                                <li>• Security champions program</li>
                                <li>• Regular security updates</li>
                                <li>• Incident reporting culture</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">Continuous Improvement</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Security Assessments</h4>
                                <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                                    <li>• Regular security audits</li>
                                    <li>• Penetration testing</li>
                                    <li>• Vulnerability assessments</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Training & Development</h4>
                                <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                                    <li>• Security certifications</li>
                                    <li>• Skill development programs</li>
                                    <li>• Knowledge sharing</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Innovation</h4>
                                <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                                    <li>• Emerging threat research</li>
                                    <li>• Technology evaluation</li>
                                    <li>• Best practice adoption</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg p-8 border border-primary-200 dark:border-primary-800">
                    <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4">Building a Security-First Culture</h2>
                    <p className="text-primary-800 dark:text-primary-200 leading-relaxed mb-6">
                        Implementing comprehensive security best practices for AI systems requires a holistic 
                        approach that combines technical controls, operational excellence, and a strong security 
                        culture. Organizations must invest in both technology and people to create robust 
                        defenses against evolving threats.
                    </p>
                    <p className="text-primary-800 dark:text-primary-200 leading-relaxed">
                        The key to success lies in continuous improvement, regular assessment, and adaptation 
                        to new threats. By following these best practices, organizations can build AI systems 
                        that are not only powerful and innovative, but also secure and trustworthy.
                    </p>
                </div>
            </section>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link
                    href="/learn"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Learn
                </Link>
                <Link
                    href="/learn/incident-response"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                    Incident Response for AI
                    <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </>
    )
}