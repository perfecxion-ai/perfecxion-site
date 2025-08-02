import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, AlertTriangle, Shield, Brain, Target, Lock, Users, CheckCircle, ArrowLeft, AlertCircle, Code, Zap, FileWarning, ShieldAlert, Terminal, FileText, Eye, Clock, MessageSquare, RefreshCw, Search, Bell, BarChart3, TrendingUp, Workflow, Package } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Incident Response for AI - Learn AI Security - perfecXion.ai',
    description: 'Comprehensive guide to AI-specific incident response procedures, forensics, recovery strategies, and lessons learned from real-world incidents.',
    keywords: 'incident response, AI security, breach response, security operations, forensics, recovery procedures, incident management',
}

export default function IncidentResponsePage() {
    return (
        <>
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex">
                    <li className="flex items-center">
                        <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">Incident Response for AI</li>
                </ol>
            </nav>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
                    <ShieldAlert className="h-10 w-10 text-red-600 mr-4" />
                    Incident Response for AI
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
                    Comprehensive guide to AI-specific incident response procedures, forensics, recovery strategies, 
                    and lessons learned from real-world incidents. Master the unique challenges of responding to 
                    AI security breaches and building robust incident response capabilities.
                </p>
            </div>

            {/* Incident Response Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
                    <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-red-900 dark:text-red-100">15 min</div>
                    <div className="text-sm text-red-700 dark:text-red-300">Avg Detection Time</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                    <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">2.5 hrs</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">Avg Resolution</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">94%</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Containment Success</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100">$2.1M</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Avg Cost Savings</div>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#introduction" className="text-primary-600 dark:text-primary-400 hover:underline">Introduction: AI Incident Response Challenges</a></li>
                    <li><a href="#incident-types" className="text-primary-600 dark:text-primary-400 hover:underline">AI-Specific Incident Types</a></li>
                    <li><a href="#response-framework" className="text-primary-600 dark:text-primary-400 hover:underline">Incident Response Framework</a></li>
                    <li><a href="#detection-analysis" className="text-primary-600 dark:text-primary-400 hover:underline">Detection and Analysis</a></li>
                    <li><a href="#containment" className="text-primary-600 dark:text-primary-400 hover:underline">Containment Strategies</a></li>
                    <li><a href="#recovery" className="text-primary-600 dark:text-primary-400 hover:underline">Recovery Procedures</a></li>
                    <li><a href="#communication" className="text-primary-600 dark:text-primary-400 hover:underline">Communication and Reporting</a></li>
                    <li><a href="#post-incident" className="text-primary-600 dark:text-primary-400 hover:underline">Post-Incident Activities</a></li>
                </ul>
            </div>

            {/* Introduction */}
            <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
                    Introduction: AI Incident Response Challenges
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-4">
                        AI systems introduce unique incident response challenges that traditional cybersecurity 
                        teams are often unprepared to handle. Unlike conventional IT incidents, AI security 
                        breaches can involve model poisoning, data extraction attacks, prompt injection, and 
                        adversarial manipulation—threats that require specialized detection, containment, and 
                        recovery procedures.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        The complexity of AI incident response stems from several factors: the dynamic nature 
                        of machine learning models, the difficulty in detecting subtle data poisoning, the 
                        challenge of preserving forensic evidence in distributed systems, and the need to 
                        maintain model performance while ensuring security.
                    </p>
                    <p className="text-lg leading-relaxed">
                        This comprehensive guide provides security professionals with the frameworks, tools, 
                        and procedures needed to effectively respond to AI-specific incidents, from initial 
                        detection through post-incident analysis and recovery.
                    </p>
                </div>
            </section>

            {/* AI-Specific Incident Types */}
            <section id="incident-types" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">AI-Specific Incident Types</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Understanding the unique characteristics of AI security incidents is crucial for effective response.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-4 flex items-center">
                            <Brain className="h-6 w-6 text-red-600 mr-3" />
                            Model Compromise
                        </h3>
                        <p className="text-red-800 dark:text-red-200 leading-relaxed mb-4">
                            Attacks that manipulate the AI model itself, including poisoning, backdoors, and weight manipulation.
                        </p>
                        <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                            <li>• Training data poisoning</li>
                            <li>• Model backdoor insertion</li>
                            <li>• Weight manipulation attacks</li>
                            <li>• Model extraction attempts</li>
                        </ul>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-4 flex items-center">
                            <MessageSquare className="h-6 w-6 text-orange-600 mr-3" />
                            Prompt Injection
                        </h3>
                        <p className="text-orange-800 dark:text-orange-200 leading-relaxed mb-4">
                            Attacks that manipulate AI system behavior through carefully crafted inputs.
                        </p>
                        <ul className="text-orange-800 dark:text-orange-200 text-sm space-y-1">
                            <li>• Jailbreak attempts</li>
                            <li>• System prompt override</li>
                            <li>• Context manipulation</li>
                            <li>• Instruction injection</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                            <Eye className="h-6 w-6 text-blue-600 mr-3" />
                            Data Extraction
                        </h3>
                        <p className="text-blue-800 dark:text-blue-200 leading-relaxed mb-4">
                            Attempts to extract sensitive training data or model information through queries.
                        </p>
                        <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                            <li>• Training data extraction</li>
                            <li>• Model architecture inference</li>
                            <li>• Membership inference attacks</li>
                            <li>• Model inversion attacks</li>
                        </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4 flex items-center">
                            <Shield className="h-6 w-6 text-purple-600 mr-3" />
                            System Compromise
                        </h3>
                        <p className="text-purple-800 dark:text-purple-200 leading-relaxed mb-4">
                            Attacks on the infrastructure supporting AI systems and their deployment.
                        </p>
                        <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                            <li>• Supply chain attacks</li>
                            <li>• Infrastructure compromise</li>
                            <li>• API endpoint attacks</li>
                            <li>• Authentication bypass</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Response Framework */}
            <section id="response-framework" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Incident Response Framework</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    A structured approach to handling AI security incidents from detection to recovery.
                </p>

                <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Phase 1: Detection & Analysis</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Identify and validate AI-specific incidents using specialized detection methods. 
                            Analyze behavioral anomalies, model integrity issues, and security event correlations 
                            to determine the nature and scope of the incident.
                        </p>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Phase 2: Containment</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Limit damage and prevent the spread of the incident. This may involve isolating 
                            affected models, blocking malicious inputs, implementing emergency filters, and 
                            redirecting traffic to backup systems.
                        </p>
                    </div>

                    <div className="border-l-4 border-red-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Phase 3: Eradication</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Remove the threat and vulnerabilities. This includes cleaning poisoned data, 
                            removing backdoors, updating compromised models, and patching security gaps 
                            in the AI infrastructure.
                        </p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Phase 4: Recovery</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Restore normal operations while maintaining security. This involves validating 
                            model integrity, testing system functionality, implementing enhanced monitoring, 
                            and gradually returning to full operational capacity.
                        </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Phase 5: Lessons Learned</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Document the incident, analyze response effectiveness, and implement improvements. 
                            This includes updating procedures, enhancing detection capabilities, and conducting 
                            team training based on lessons learned.
                        </p>
                    </div>
                </div>
            </section>

            {/* Detection and Analysis */}
            <section id="detection-analysis" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Detection and Analysis</h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">AI-Specific Detection Methods</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Behavioral Anomaly Detection</h4>
                                <p className="text-green-800 dark:text-green-200 text-sm">
                                    Monitor for unusual query patterns, performance deviations, and anomalous 
                                    user interactions that may indicate AI-specific attacks.
                                </p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Model Integrity Monitoring</h4>
                                <p className="text-blue-800 dark:text-blue-200 text-sm">
                                    Track weight distributions, performance drift, output consistency, and 
                                    backdoor trigger detection to identify model compromise.
                                </p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Security Event Correlation</h4>
                                <p className="text-purple-800 dark:text-purple-200 text-sm">
                                    Analyze cross-system events, recognize attack patterns, integrate threat 
                                    intelligence, and prioritize alerts automatically.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Forensic Analysis Techniques</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Model Forensics</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Weight distribution analysis</li>
                                    <li>• Training data integrity checks</li>
                                    <li>• Model version comparison</li>
                                    <li>• Performance baseline validation</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Data Forensics</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Input/output log analysis</li>
                                    <li>• Query pattern reconstruction</li>
                                    <li>• Data flow tracing</li>
                                    <li>• Access pattern analysis</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Containment Strategies */}
            <section id="containment" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Containment Strategies</h2>

                <div className="space-y-8">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-4">Model Poisoning Containment</h3>
                        <ol className="text-yellow-800 dark:text-yellow-200 space-y-2">
                            <li>1. Immediately disable affected model endpoints</li>
                            <li>2. Redirect traffic to backup/previous model version</li>
                            <li>3. Isolate training pipeline and data sources</li>
                            <li>4. Initiate model integrity verification</li>
                            <li>5. Deploy enhanced monitoring on all model servers</li>
                        </ol>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-4">Prompt Injection Containment</h3>
                        <ol className="text-orange-800 dark:text-orange-200 space-y-2">
                            <li>1. Enable emergency prompt filtering rules</li>
                            <li>2. Block identified malicious users/IPs</li>
                            <li>3. Implement strict rate limiting</li>
                            <li>4. Deploy input sanitization layer</li>
                            <li>5. Enable verbose logging for analysis</li>
                        </ol>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">Data Extraction Containment</h3>
                        <ol className="text-blue-800 dark:text-blue-200 space-y-2">
                            <li>1. Implement query complexity limits</li>
                            <li>2. Enable output filtering and redaction</li>
                            <li>3. Block high-volume query sources</li>
                            <li>4. Disable vulnerable API endpoints</li>
                            <li>5. Implement differential privacy measures</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* Recovery Procedures */}
            <section id="recovery" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recovery Procedures</h2>

                <div className="space-y-8">
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">Recovery Workflow</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Technical Recovery</h4>
                                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                                    <li>• Restore systems from clean backups</li>
                                    <li>• Validate system integrity</li>
                                    <li>• Re-apply security patches</li>
                                    <li>• Test all functionality</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Operational Recovery</h4>
                                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                                    <li>• Notify stakeholders</li>
                                    <li>• Update documentation</li>
                                    <li>• Conduct team debriefs</li>
                                    <li>• Implement lessons learned</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recovery Validation</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center">
                                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Functional Tests</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Verify all AI systems operate correctly</p>
                            </div>
                            <div className="text-center">
                                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Security Tests</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Confirm security controls are effective</p>
                            </div>
                            <div className="text-center">
                                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Performance Tests</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Ensure performance meets requirements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Communication and Reporting */}
            <section id="communication" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Communication and Reporting</h2>

                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Internal Communications</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-2">
                                    <Bell className="h-4 w-4 text-yellow-500 mt-0.5" />
                                    <div>
                                        <strong>Immediate (0-15 min):</strong><br />
                                        Security team, on-call engineers
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Bell className="h-4 w-4 text-orange-500 mt-0.5" />
                                    <div>
                                        <strong>Short-term (15-60 min):</strong><br />
                                        Management, affected teams
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Bell className="h-4 w-4 text-blue-500 mt-0.5" />
                                    <div>
                                        <strong>Extended (1-4 hours):</strong><br />
                                        Legal, PR, executive team
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">External Communications</h3>
                            <div className="space-y-2 text-sm">
                                <p><strong>Customers:</strong> Impact assessment, mitigation steps, timeline</p>
                                <p><strong>Partners:</strong> Technical details, collaborative response</p>
                                <p><strong>Regulators:</strong> Compliance notifications, formal reports</p>
                                <p><strong>Media:</strong> Coordinated PR response (if applicable)</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Incident Report Structure</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Executive Summary</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Incident overview and impact</li>
                                    <li>• Key findings and root cause</li>
                                    <li>• Response effectiveness</li>
                                    <li>• Business impact assessment</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technical Details</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Forensic analysis results</li>
                                    <li>• Timeline reconstruction</li>
                                    <li>• Technical remediation steps</li>
                                    <li>• Lessons learned</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Post-Incident Activities */}
            <section id="post-incident" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Post-Incident Activities</h2>

                <div className="space-y-8">
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">Lessons Learned Process</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Post-Incident Review</h4>
                                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                                    <li>• Timeline reconstruction and analysis</li>
                                    <li>• Response effectiveness evaluation</li>
                                    <li>• Communication assessment</li>
                                    <li>• Tool and process gaps identification</li>
                                    <li>• Action items and ownership assignment</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Improvement Implementation</h4>
                                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                                    <li>• Update incident response procedures</li>
                                    <li>• Enhance detection capabilities</li>
                                    <li>• Improve containment mechanisms</li>
                                    <li>• Strengthen preventive controls</li>
                                    <li>• Conduct follow-up training</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Continuous Improvement Metrics</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Detection Metrics</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Mean time to detect (MTTD)</li>
                                    <li>• False positive rate</li>
                                    <li>• Detection coverage</li>
                                    <li>• Alert quality score</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response Metrics</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Mean time to respond (MTTR)</li>
                                    <li>• Containment effectiveness</li>
                                    <li>• Recovery time objective (RTO)</li>
                                    <li>• Automation rate</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Impact Metrics</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Business impact duration</li>
                                    <li>• Data loss prevention</li>
                                    <li>• Customer impact score</li>
                                    <li>• Cost of incident</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg p-8 border border-primary-200 dark:border-primary-800">
                    <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4">Building Effective AI Incident Response</h2>
                    <p className="text-primary-800 dark:text-primary-200 leading-relaxed mb-6">
                        Effective AI incident response requires specialized knowledge, tools, and procedures that 
                        go beyond traditional cybersecurity practices. Organizations must invest in AI-specific 
                        detection capabilities, develop specialized containment strategies, and build teams with 
                        the expertise to handle the unique challenges of AI security incidents.
                    </p>
                    <p className="text-primary-800 dark:text-primary-200 leading-relaxed">
                        The key to success lies in preparation, practice, and continuous improvement. By 
                        implementing the frameworks and procedures outlined in this guide, organizations can 
                        build robust AI incident response capabilities that minimize damage and accelerate recovery.
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
                    href="/learn/security-best-practices"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                    Security Best Practices
                    <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </>
    )
}