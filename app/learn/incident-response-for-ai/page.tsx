import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, AlertTriangle, Shield, Brain, Target, Lock, Users, CheckCircle, ArrowLeft, AlertCircle, Code, Zap, FileWarning, ShieldAlert, Terminal, FileText, Eye, Clock, MessageSquare, RefreshCw, Search, Bell, BarChart3, TrendingUp, Workflow, Package } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Incident Response for AI - Learn AI Security - perfecXion.ai',
    description: 'Comprehensive guide to AI-specific incident response procedures, forensics, recovery strategies, and lessons learned from real-world incidents.',
    keywords: 'incident response, AI security, breach response, security operations, AI forensics, recovery strategies, post-incident analysis',
}

export default function IncidentResponseForAIPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
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
                    <AlertTriangle className="h-10 w-10 text-red-600 mr-4" />
                    Incident Response for AI
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
                    AI security incidents require specialized response procedures that differ significantly from traditional cybersecurity incidents. 
                    The unique nature of AI systems—including their learning capabilities, data dependencies, and decision-making autonomy—creates 
                    novel challenges for incident detection, containment, and recovery.
                </p>
            </div>

            {/* Incident Response Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
                    <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-red-900 dark:text-red-100">15 min</div>
                    <div className="text-sm text-red-700 dark:text-red-300">Avg. Detection Time</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                    <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">2.5 hrs</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">Avg. Resolution Time</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100">94%</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Containment Rate</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                    <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">$2.1M</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Avg. Cost Savings</div>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#incident-types" className="text-primary-600 dark:text-primary-400 hover:underline">AI-Specific Incident Types</a></li>
                    <li><a href="#detection" className="text-primary-600 dark:text-primary-400 hover:underline">Detection and Monitoring</a></li>
                    <li><a href="#response-procedures" className="text-primary-600 dark:text-primary-400 hover:underline">Response Procedures</a></li>
                    <li><a href="#forensics" className="text-primary-600 dark:text-primary-400 hover:underline">AI Forensics Analysis</a></li>
                    <li><a href="#recovery" className="text-primary-600 dark:text-primary-400 hover:underline">Recovery Strategies</a></li>
                    <li><a href="#lessons-learned" className="text-primary-600 dark:text-primary-400 hover:underline">Lessons Learned</a></li>
                </ul>
            </div>

            {/* AI-Specific Incident Types */}
            <section id="incident-types" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
                    AI-Specific Incident Types
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        AI security incidents can be classified into three main categories: training-time incidents, inference-time incidents, 
                        and operational incidents. Each requires specialized detection and response procedures.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-lg">
                            <ShieldAlert className="h-8 w-8 text-red-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Training-Time Incidents</h3>
                            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                                <li>• Data poisoning attacks</li>
                                <li>• Model supply chain compromises</li>
                                <li>• Intellectual property theft</li>
                                <li>• Training data breaches</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-lg">
                            <Target className="h-8 w-8 text-orange-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Inference-Time Incidents</h3>
                            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                                <li>• Adversarial attacks</li>
                                <li>• Prompt injection attacks</li>
                                <li>• Model extraction attacks</li>
                                <li>• Privacy violations</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg">
                            <Workflow className="h-8 w-8 text-blue-600 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Operational Incidents</h3>
                            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                                <li>• Model drift and degradation</li>
                                <li>• Performance anomalies</li>
                                <li>• Bias and fairness issues</li>
                                <li>• System availability problems</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detection and Monitoring */}
            <section id="detection" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Eye className="h-6 w-6 text-blue-500 mr-3" />
                    Detection and Monitoring
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        Effective AI incident response begins with robust detection and monitoring systems that can identify 
                        anomalies in model behavior, data patterns, and system performance.
                    </p>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Bell className="h-6 w-6 text-yellow-600 mr-3" />
                            Real-Time Monitoring Systems
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Model Behavior Monitoring</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Confidence score distributions</li>
                                    <li>• Prediction accuracy tracking</li>
                                    <li>• Input pattern analysis</li>
                                    <li>• Output quality metrics</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">System Performance Monitoring</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Response time anomalies</li>
                                    <li>• Resource utilization spikes</li>
                                    <li>• Error rate monitoring</li>
                                    <li>• Throughput analysis</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Response Procedures */}
            <section id="response-procedures" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Shield className="h-6 w-6 text-green-500 mr-3" />
                    Response Procedures
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        AI incident response follows a structured approach with specific procedures for containment, 
                        investigation, and recovery that account for the unique characteristics of AI systems.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                            <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-4 flex items-center">
                                <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
                                Immediate Response (0-15 minutes)
                            </h3>
                            <ul className="text-red-800 dark:text-red-200 space-y-2">
                                <li>• Isolate affected AI models and data</li>
                                <li>• Stop training processes if compromised</li>
                                <li>• Implement emergency access controls</li>
                                <li>• Activate incident response team</li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                            <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-4 flex items-center">
                                <Search className="h-6 w-6 text-orange-600 mr-3" />
                                Investigation Phase (15 minutes - 2 hours)
                            </h3>
                            <ul className="text-orange-800 dark:text-orange-200 space-y-2">
                                <li>• Analyze model behavior and outputs</li>
                                <li>• Review access logs and audit trails</li>
                                <li>• Assess data integrity and contamination</li>
                                <li>• Determine incident scope and impact</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                                <RefreshCw className="h-6 w-6 text-blue-600 mr-3" />
                                Recovery Phase (2-24 hours)
                            </h3>
                            <ul className="text-blue-800 dark:text-blue-200 space-y-2">
                                <li>• Restore from clean model checkpoints</li>
                                <li>• Implement enhanced security controls</li>
                                <li>• Validate model performance and safety</li>
                                <li>• Resume operations with monitoring</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Forensics Analysis */}
            <section id="forensics" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <FileText className="h-6 w-6 text-purple-500 mr-3" />
                    AI Forensics Analysis
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        AI forensics involves specialized techniques for analyzing model behavior, training data, 
                        and system logs to understand the root cause and impact of security incidents.
                    </p>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Terminal className="h-6 w-6 text-green-600 mr-3" />
                            Forensic Analysis Techniques
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Model Analysis</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Model weight analysis</li>
                                    <li>• Activation pattern examination</li>
                                    <li>• Gradient flow analysis</li>
                                    <li>• Adversarial example detection</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Analysis</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Training data integrity checks</li>
                                    <li>• Poisoned sample identification</li>
                                    <li>• Privacy violation detection</li>
                                    <li>• Bias analysis and measurement</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Forensic Tools and Techniques</h4>
                            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# Example: Model integrity verification
def verify_model_integrity(model_path, expected_hash):
    import hashlib
    
    with open(model_path, 'rb') as f:
        model_bytes = f.read()
        actual_hash = hashlib.sha256(model_bytes).hexdigest()
    
    if actual_hash != expected_hash:
        raise SecurityAlert("Model integrity compromised")
    
    return True

# Example: Adversarial example detection
def detect_adversarial_inputs(inputs, model, threshold=0.1):
    import numpy as np
    
    predictions = model.predict(inputs)
    confidence_scores = np.max(predictions, axis=1)
    
    # Low confidence may indicate adversarial examples
    suspicious_indices = np.where(confidence_scores < threshold)[0]
    
    return suspicious_indices`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recovery Strategies */}
            <section id="recovery" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <RefreshCw className="h-6 w-6 text-green-500 mr-3" />
                    Recovery Strategies
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        Effective recovery from AI security incidents requires careful planning to restore system 
                        functionality while maintaining security and performance standards.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                                Model Recovery Procedures
                            </h3>
                            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                                <li>• Restore from verified clean checkpoints</li>
                                <li>• Retrain with sanitized datasets</li>
                                <li>• Implement enhanced validation pipelines</li>
                                <li>• Deploy with additional monitoring</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                                Security Hardening
                            </h3>
                            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                                <li>• Implement input validation and sanitization</li>
                                <li>• Add adversarial example detection</li>
                                <li>• Enhance access controls and monitoring</li>
                                <li>• Deploy rate limiting and abuse prevention</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lessons Learned */}
            <section id="lessons-learned" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <MessageSquare className="h-6 w-6 text-purple-500 mr-3" />
                    Lessons Learned
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        Post-incident analysis is crucial for improving AI security practices and preventing 
                        similar incidents in the future.
                    </p>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
                            Post-Incident Analysis
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Process Improvements</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Update detection mechanisms</li>
                                    <li>• Enhance response procedures</li>
                                    <li>• Improve training and awareness</li>
                                    <li>• Strengthen security controls</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Documentation Updates</h4>
                                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    <li>• Update incident response playbooks</li>
                                    <li>• Revise security policies</li>
                                    <li>• Enhance monitoring guidelines</li>
                                    <li>• Improve recovery procedures</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/learn/compliance-for-ai-systems" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Compliance for AI Systems
                </Link>
                <Link href="/learn/security-best-practices" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                    Security Best Practices
                    <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
            </div>
        </div>
    )
} 