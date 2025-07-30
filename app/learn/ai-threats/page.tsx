import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, AlertTriangle, Shield, Brain, Target, Lock, Users, CheckCircle, ArrowLeft, AlertCircle, Database, Zap, Eye, ShieldAlert, Cpu, FileWarning } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Understanding AI Threats - Learn AI Security - perfecXion.ai',
    description: 'Master the AI security landscape. Learn about data poisoning, model inversion, adversarial attacks, and how to protect your AI systems from emerging threats.',
    keywords: 'AI threats, AI security, data poisoning, model inversion, adversarial examples, model stealing, backdoor attacks, AI vulnerabilities',
}

export default function AIThreatsPage() {
    return (
        <>
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex">
                    <li className="flex items-center">
                        <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">Understanding AI Threats</li>
                </ol>
            </nav>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                    Understanding AI Threats
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
                    The AI threat landscape represents a paradigm shift in cybersecurity. Unlike traditional attacks that target infrastructure, 
                    AI attacks manipulate intelligence itself. From subtle data poisoning that corrupts decision-making to sophisticated model 
                    stealing operations, these threats can undermine your entire AI strategy. This comprehensive guide explores the full spectrum 
                    of AI security threats and provides actionable strategies to defend against them.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#introduction" className="text-primary-600 dark:text-primary-400 hover:underline">Introduction: The New Security Paradigm</a></li>
                    <li><a href="#core-concepts" className="text-primary-600 dark:text-primary-400 hover:underline">Core Concepts: Understanding AI Attack Vectors</a></li>
                    <li><a href="#practical-examples" className="text-primary-600 dark:text-primary-400 hover:underline">Practical Examples: Real-World AI Attacks</a></li>
                    <li><a href="#implementation-guide" className="text-primary-600 dark:text-primary-400 hover:underline">Implementation Guide: Building Threat Detection</a></li>
                    <li><a href="#best-practices" className="text-primary-600 dark:text-primary-400 hover:underline">Best Practices: Industry Standards</a></li>
                    <li><a href="#case-studies" className="text-primary-600 dark:text-primary-400 hover:underline">Case Studies: Lessons from the Field</a></li>
                    <li><a href="#troubleshooting" className="text-primary-600 dark:text-primary-400 hover:underline">Troubleshooting: Common Issues</a></li>
                    <li><a href="#next-steps" className="text-primary-600 dark:text-primary-400 hover:underline">Next Steps: Advanced Protection</a></li>
                </ul>
            </div>

            {/* Introduction */}
            <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
                    Introduction: The New Security Paradigm
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-4">
                        Artificial Intelligence has fundamentally changed the cybersecurity landscape. While traditional security focuses on 
                        protecting data and infrastructure, AI security must protect the intelligence layer itself—the algorithms, models, 
                        and decision-making processes that increasingly drive business operations.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        The stakes are unprecedented. A compromised database can be restored from backups, but a poisoned AI model may make 
                        subtly wrong decisions for months before detection. A stolen password grants access to a system, but a stolen AI model 
                        represents the theft of years of competitive advantage and intellectual property.
                    </p>
                    <p className="text-lg leading-relaxed">
                        This new reality demands a complete rethinking of security strategies. Organizations must understand that AI systems 
                        face unique vulnerabilities that traditional security tools cannot address. The question is no longer whether your AI 
                        will be attacked, but whether you'll be prepared when it happens.
                    </p>
                </div>
            </section>

            {/* Core Concepts */}
            <section id="core-concepts" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Concepts: Understanding AI Attack Vectors</h2>
                
                <div className="space-y-8">
                    {/* Data Poisoning */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Database className="h-5 w-5 text-blue-500 mr-2" />
                            Data Poisoning Attacks
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Data poisoning represents one of the most insidious threats to AI systems. Attackers introduce carefully crafted 
                            malicious data during the training phase, causing the model to learn incorrect patterns that persist into production.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Training-Time Poisoning</h4>
                                <p className="text-blue-800 dark:text-blue-200 text-sm">
                                    Occurs when attackers inject malicious samples into training datasets. Even a small percentage of 
                                    poisoned data (often less than 1%) can significantly degrade model performance or introduce targeted 
                                    vulnerabilities.
                                </p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Inference-Time Poisoning</h4>
                                <p className="text-purple-800 dark:text-purple-200 text-sm">
                                    Happens when online learning systems continuously update based on new data. Attackers exploit this 
                                    by feeding malicious inputs that gradually shift the model's behavior over time.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                <strong>Key Indicators:</strong> Gradual performance degradation, increased false positives/negatives in 
                                specific categories, unusual clustering of errors around certain data characteristics.
                            </p>
                        </div>
                    </div>

                    {/* Model Inversion */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Eye className="h-5 w-5 text-green-500 mr-2" />
                            Model Inversion Attacks
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Model inversion attacks extract sensitive information about training data by analyzing model outputs. Attackers 
                            can potentially reconstruct training samples, revealing private data that was used to train the model.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong className="text-gray-900 dark:text-white">Membership Inference:</strong>
                                    <span className="text-gray-600 dark:text-gray-400 ml-1">
                                        Determines whether specific data was part of the training set, potentially revealing sensitive 
                                        information about individuals or organizations.
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong className="text-gray-900 dark:text-white">Attribute Inference:</strong>
                                    <span className="text-gray-600 dark:text-gray-400 ml-1">
                                        Extracts specific features or attributes of training data, such as demographic information or 
                                        behavioral patterns.
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong className="text-gray-900 dark:text-white">Data Reconstruction:</strong>
                                    <span className="text-gray-600 dark:text-gray-400 ml-1">
                                        In extreme cases, attackers can reconstruct actual training samples, including images, text, 
                                        or other sensitive data.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Adversarial Examples */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                            Adversarial Examples
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Adversarial examples are inputs specifically crafted to fool AI systems while appearing normal to humans. 
                            These attacks exploit the fundamental differences between how humans and AI systems perceive information.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
                                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">White-Box Attacks</h4>
                                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                                    Attackers have full knowledge of the model architecture and parameters, allowing precise 
                                    crafting of adversarial inputs.
                                </p>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                                <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Black-Box Attacks</h4>
                                <p className="text-orange-800 dark:text-orange-200 text-sm">
                                    Attackers only have access to model outputs, using query-based methods to discover 
                                    effective adversarial examples.
                                </p>
                            </div>
                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Transfer Attacks</h4>
                                <p className="text-red-800 dark:text-red-200 text-sm">
                                    Adversarial examples created for one model often transfer to other models, even with 
                                    different architectures.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Model Stealing */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Cpu className="h-5 w-5 text-purple-500 mr-2" />
                            Model Stealing
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Model stealing attacks aim to replicate the functionality of proprietary AI models through systematic 
                            querying and analysis. This represents a direct threat to intellectual property and competitive advantage.
                        </p>
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Attack Methodology</h4>
                            <ol className="list-decimal list-inside text-purple-800 dark:text-purple-200 text-sm space-y-1">
                                <li>Query the target model with carefully selected inputs</li>
                                <li>Collect input-output pairs to create a training dataset</li>
                                <li>Train a substitute model that mimics the original's behavior</li>
                                <li>Refine the substitute through iterative querying and training</li>
                            </ol>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Modern model stealing attacks can achieve over 90% accuracy in replicating target models with as few as 
                            10,000 queries, making them a serious threat to commercial AI systems.
                        </p>
                    </div>

                    {/* Backdoor Attacks */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <FileWarning className="h-5 w-5 text-red-500 mr-2" />
                            Backdoor Attacks
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Backdoor attacks embed hidden functionality in AI models that activate only when specific trigger patterns 
                            are present. The model behaves normally otherwise, making these attacks extremely difficult to detect.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Supply Chain Backdoors</h4>
                                <p className="text-red-800 dark:text-red-200 text-sm">
                                    Introduced through compromised pre-trained models, datasets, or third-party components. 
                                    These can lie dormant until activated by specific inputs.
                                </p>
                            </div>
                            <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded">
                                <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Training-Time Backdoors</h4>
                                <p className="text-pink-800 dark:text-pink-200 text-sm">
                                    Inserted during model training by malicious insiders or through compromised training 
                                    infrastructure. Often target specific use cases or deployments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practical Examples */}
            <section id="practical-examples" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Practical Examples: Real-World AI Attacks</h2>
                
                <div className="space-y-6">
                    {/* Microsoft Tay Example */}
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-4">Microsoft Tay: Data Poisoning in Action</h3>
                        <p className="text-red-800 dark:text-red-200 mb-3">
                            In 2016, Microsoft's AI chatbot Tay was corrupted within 24 hours through coordinated data poisoning. 
                            Attackers exploited the bot's learning mechanism by feeding it inflammatory content, causing it to 
                            generate inappropriate responses.
                        </p>
                        <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded">
                            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Key Lessons:</h4>
                            <ul className="list-disc list-inside text-red-800 dark:text-red-200 text-sm space-y-1">
                                <li>Online learning systems are particularly vulnerable to poisoning attacks</li>
                                <li>Content filtering alone is insufficient—behavioral monitoring is essential</li>
                                <li>Rapid response mechanisms must be in place for AI system compromise</li>
                                <li>Human oversight remains critical for AI systems interacting with the public</li>
                            </ul>
                        </div>
                    </div>

                    {/* Adversarial Stop Signs */}
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-4">Adversarial Stop Signs: Physical World Attacks</h3>
                        <p className="text-yellow-800 dark:text-yellow-200 mb-3">
                            Researchers demonstrated that carefully placed stickers on stop signs could cause autonomous vehicle 
                            vision systems to misclassify them as speed limit signs. This attack works consistently across different 
                            viewing angles and lighting conditions.
                        </p>
                        <div className="bg-yellow-100 dark:bg-yellow-900/40 p-4 rounded">
                            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Attack Characteristics:</h4>
                            <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                                <li>Perturbations appear as innocent graffiti or weathering to humans</li>
                                <li>Attack remains effective across multiple computer vision models</li>
                                <li>Demonstrates the gap between human and AI perception</li>
                                <li>Highlights risks in safety-critical AI applications</li>
                            </ul>
                        </div>
                    </div>

                    {/* Model Extraction Attack */}
                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">Commercial ML API Extraction</h3>
                        <p className="text-purple-800 dark:text-purple-200 mb-3">
                            In 2020, researchers successfully extracted a commercial machine learning model with 99.7% accuracy 
                            using only 13,000 queries. The attack cost less than $100 in API fees while the original model 
                            represented millions in development costs.
                        </p>
                        <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Technical Details:</h4>
                            <ul className="list-disc list-inside text-purple-800 dark:text-purple-200 text-sm space-y-1">
                                <li>Used adaptive query selection to maximize information gain</li>
                                <li>Exploited confidence scores returned by the API</li>
                                <li>Achieved near-perfect replication of decision boundaries</li>
                                <li>Demonstrated economic viability of model stealing attacks</li>
                            </ul>
                        </div>
                    </div>

                    {/* Backdoored Face Recognition */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">Backdoored Face Recognition Systems</h3>
                        <p className="text-blue-800 dark:text-blue-200 mb-3">
                            Security researchers discovered backdoors in several commercial face recognition systems that allowed 
                            attackers to authenticate as anyone by wearing specific patterns of makeup or accessories that served 
                            as trigger patterns.
                        </p>
                        <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Impact Analysis:</h4>
                            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                <li>Backdoor remained undetected through standard testing procedures</li>
                                <li>Affected multiple deployments across different organizations</li>
                                <li>Triggered by patterns invisible in normal lighting conditions</li>
                                <li>Highlighted supply chain vulnerabilities in AI systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Guide */}
            <section id="implementation-guide" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Implementation Guide: Building Threat Detection</h2>
                
                <div className="space-y-8">
                    {/* Step 1: Assessment */}
                    <div className="border-l-4 border-blue-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Step 1: Comprehensive Threat Assessment</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Begin by mapping your AI attack surface. This involves identifying all AI systems, their data sources, 
                            deployment environments, and potential threat vectors.
                        </p>
                        
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">AI System Inventory Checklist:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Catalog all AI/ML models in production, development, and testing</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Document data sources, pipelines, and preprocessing steps</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Identify third-party models, APIs, and components</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Map integration points with existing systems</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Assess criticality and business impact of each system</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                            <p className="text-blue-800 dark:text-blue-200 text-sm">
                                <strong>Pro Tip:</strong> Use automated discovery tools to find shadow AI deployments—models deployed 
                                by individual teams without central oversight. These often represent the greatest security risk.
                            </p>
                        </div>
                    </div>

                    {/* Step 2: Data Security */}
                    <div className="border-l-4 border-green-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Step 2: Implement Data Security Controls</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Secure your data pipeline to prevent poisoning attacks. This requires controls at every stage from 
                            collection to preprocessing to model training.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Data Validation Framework</h4>
                                <pre className="text-xs text-green-800 dark:text-green-200 overflow-x-auto">
{`# Example validation pipeline
def validate_training_data(data):
    # Statistical validation
    check_distributions(data)
    detect_anomalies(data)
    
    # Business rule validation
    enforce_constraints(data)
    check_consistency(data)
    
    # Provenance tracking
    verify_sources(data)
    audit_transformations(data)`}
                                </pre>
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
                                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Anomaly Detection</h4>
                                <pre className="text-xs text-yellow-800 dark:text-yellow-200 overflow-x-auto">
{`# Detect poisoning attempts
def detect_poisoning(new_data, baseline):
    # Compare distributions
    kl_divergence = calculate_kl(
        new_data, baseline
    )
    
    # Flag suspicious patterns
    if kl_divergence > threshold:
        trigger_alert()
        quarantine_data()`}
                                </pre>
                            </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Critical Implementation Points:</h4>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                                <li>Implement cryptographic signing for data provenance</li>
                                <li>Use differential privacy techniques for sensitive data</li>
                                <li>Maintain separate validation datasets that attackers cannot influence</li>
                                <li>Regular retraining with clean, verified data</li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 3: Model Hardening */}
                    <div className="border-l-4 border-purple-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Step 3: Model Hardening Techniques</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Make your models inherently more resistant to attacks through defensive training techniques and 
                            architectural choices.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Adversarial Training</h4>
                                <p className="text-purple-800 dark:text-purple-200 text-sm mb-2">
                                    Incorporate adversarial examples during training to improve model robustness:
                                </p>
                                <pre className="text-xs text-purple-800 dark:text-purple-200 overflow-x-auto">
{`# Adversarial training loop
for epoch in range(num_epochs):
    # Generate adversarial examples
    adv_examples = generate_adversarial(
        model, clean_data, epsilon=0.1
    )
    
    # Train on mixed data
    mixed_data = combine(clean_data, adv_examples)
    model.train(mixed_data)
    
    # Validate robustness
    test_robustness(model, test_adversarial)`}
                                </pre>
                            </div>

                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded">
                                <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Ensemble Defense</h4>
                                <p className="text-indigo-800 dark:text-indigo-200 text-sm mb-2">
                                    Use multiple models with different architectures to detect attacks:
                                </p>
                                <pre className="text-xs text-indigo-800 dark:text-indigo-200 overflow-x-auto">
{`# Ensemble prediction with anomaly detection
def ensemble_predict(models, input_data):
    predictions = []
    for model in models:
        pred = model.predict(input_data)
        predictions.append(pred)
    
    # Check for consensus
    if variance(predictions) > threshold:
        flag_potential_attack(input_data)
    
    return majority_vote(predictions)`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Step 4: Runtime Monitoring */}
                    <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Step 4: Runtime Monitoring and Detection</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Implement comprehensive monitoring to detect attacks in production environments.
                        </p>

                        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">Monitoring Architecture</h4>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <AlertCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-orange-900 dark:text-orange-100">Input Monitoring:</strong>
                                        <span className="text-orange-800 dark:text-orange-200 text-sm ml-1">
                                            Track input distributions, detect anomalies, identify potential adversarial patterns
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <AlertCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-orange-900 dark:text-orange-100">Model Behavior:</strong>
                                        <span className="text-orange-800 dark:text-orange-200 text-sm ml-1">
                                            Monitor prediction confidence, decision boundaries, performance metrics
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <AlertCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-orange-900 dark:text-orange-100">Output Analysis:</strong>
                                        <span className="text-orange-800 dark:text-orange-200 text-sm ml-1">
                                            Detect distribution shifts, identify systematic biases, track error patterns
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Metrics to Monitor:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                                <li>• Prediction confidence distributions</li>
                                <li>• Input feature statistics</li>
                                <li>• Model accuracy by segment</li>
                                <li>• Query patterns and volumes</li>
                                <li>• Response time variations</li>
                                <li>• Error rate trends</li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 5: Incident Response */}
                    <div className="border-l-4 border-red-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Step 5: AI-Specific Incident Response</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Develop and practice incident response procedures specifically designed for AI security events.
                        </p>

                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">AI Incident Response Playbook</h4>
                            <ol className="list-decimal list-inside text-red-800 dark:text-red-200 space-y-2">
                                <li>
                                    <strong>Detection & Triage:</strong> Identify attack type, assess impact, isolate affected systems
                                </li>
                                <li>
                                    <strong>Containment:</strong> Roll back to known-good models, implement input filtering, increase monitoring
                                </li>
                                <li>
                                    <strong>Investigation:</strong> Analyze attack vectors, identify compromised data, determine timeline
                                </li>
                                <li>
                                    <strong>Remediation:</strong> Retrain models with clean data, patch vulnerabilities, update defenses
                                </li>
                                <li>
                                    <strong>Recovery:</strong> Gradual redeployment with enhanced monitoring, validation of model behavior
                                </li>
                                <li>
                                    <strong>Lessons Learned:</strong> Document attack patterns, update threat models, improve defenses
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Best Practices: Industry Standards</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">NIST AI Risk Management Framework</h3>
                        <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                            The National Institute of Standards and Technology provides comprehensive guidance for AI security:
                        </p>
                        <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Govern:</strong> Establish policies and accountability structures</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Map:</strong> Identify and document AI risks and impacts</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Measure:</strong> Assess and track identified risks</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Manage:</strong> Prioritize and act on risk findings</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">OWASP Top 10 for LLM Applications</h3>
                        <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                            Key vulnerabilities to address in AI deployments:
                        </p>
                        <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                            <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>Prompt Injection vulnerabilities</span>
                            </li>
                            <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>Insecure Output Handling</span>
                            </li>
                            <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>Training Data Poisoning</span>
                            </li>
                            <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>Model Denial of Service</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">ISO/IEC 23053 AI Trustworthiness</h3>
                        <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">
                            International standards for building trustworthy AI:
                        </p>
                        <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
                            <li>• Robustness and resilience requirements</li>
                            <li>• Transparency and explainability guidelines</li>
                            <li>• Privacy and data governance standards</li>
                            <li>• Bias mitigation and fairness criteria</li>
                            <li>• Security control implementation</li>
                        </ul>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">Industry-Specific Regulations</h3>
                        <p className="text-orange-800 dark:text-orange-200 text-sm mb-3">
                            Sector-specific AI security requirements:
                        </p>
                        <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
                            <li><strong>Healthcare:</strong> HIPAA compliance for AI/ML systems</li>
                            <li><strong>Financial:</strong> Model risk management (SR 11-7)</li>
                            <li><strong>Automotive:</strong> ISO 26262 for autonomous systems</li>
                            <li><strong>Defense:</strong> DoD AI ethical principles</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Security by Design Principles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Minimize Attack Surface</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Reduce model complexity, limit API exposure, implement strict access controls, minimize data collection.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Defense in Depth</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Layer multiple security controls, combine preventive and detective measures, implement fail-safe mechanisms.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Continuous Validation</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Regular security assessments, automated testing pipelines, ongoing model validation, threat model updates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section id="case-studies" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Case Studies: Lessons from the Field</h2>
                
                <div className="space-y-6">
                    {/* Financial Services Case Study */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Major Bank Prevents $50M Fraud Through AI Security
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-1">$50M</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Fraud Prevented</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-1">99.2%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Detection Accuracy</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600 mb-1">3 months</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Implementation Time</div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge:</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                The bank's fraud detection AI began showing degraded performance, with false negative rates 
                                increasing by 15% over six months. Traditional security tools showed no signs of compromise.
                            </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Solution Implemented:</h4>
                            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                <li>Deployed data validation pipeline to detect poisoning attempts</li>
                                <li>Implemented ensemble models with cross-validation</li>
                                <li>Added behavioral monitoring for model drift detection</li>
                                <li>Established secure retraining procedures with verified data</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Results:</h4>
                            <p className="text-green-800 dark:text-green-200 text-sm">
                                Within weeks, the system detected coordinated data poisoning attempts targeting specific 
                                transaction patterns. The bank prevented $50M in potential fraud losses and achieved 
                                industry-leading detection rates through hardened AI systems.
                            </p>
                        </div>
                    </div>

                    {/* Healthcare Case Study */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Healthcare Provider Thwarts Model Extraction Attack
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-red-600 mb-1">$12M</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">R&D Investment Protected</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600 mb-1">10K</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Suspicious Queries Blocked</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-600 mb-1">24 hrs</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Attack Detection Time</div>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Attack Details:</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                A competitor attempted to steal a proprietary diagnostic AI model through systematic API queries. 
                                The attack used distributed sources and carefully crafted queries to avoid rate limiting.
                            </p>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Defense Mechanisms:</h4>
                            <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                                <li>Query pattern analysis to detect extraction attempts</li>
                                <li>Differential privacy techniques to limit information leakage</li>
                                <li>Adaptive rate limiting based on query complexity</li>
                                <li>Watermarking techniques to trace stolen models</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Outcome:</h4>
                            <p className="text-green-800 dark:text-green-200 text-sm">
                                The attack was detected and blocked within 24 hours. The healthcare provider's $12M 
                                investment in AI development was protected, and the incident led to industry-wide 
                                improvements in API security for medical AI systems.
                            </p>
                        </div>
                    </div>

                    {/* Retail Case Study */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            E-commerce Giant Defeats Adversarial Attack Campaign
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-1">1M+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Attacks Blocked Daily</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-1">99.8%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Legitimate Traffic Preserved</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600 mb-1">$200M</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Annual Revenue Protected</div>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Threat Scenario:</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Competitors launched sophisticated adversarial attacks against product recommendation 
                                and pricing algorithms, attempting to manipulate rankings and trigger incorrect pricing.
                            </p>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Defensive Strategy:</h4>
                            <ul className="list-disc list-inside text-purple-800 dark:text-purple-200 text-sm space-y-1">
                                <li>Adversarial training for all customer-facing models</li>
                                <li>Real-time input validation and sanitization</li>
                                <li>Multi-model consensus for critical decisions</li>
                                <li>Automated rollback for anomalous behavior</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Business Impact:</h4>
                            <p className="text-green-800 dark:text-green-200 text-sm">
                                The defensive measures blocked over 1 million daily attack attempts while maintaining 
                                99.8% availability for legitimate users. The company protected $200M in annual revenue 
                                and gained competitive advantage through superior AI security.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Troubleshooting: Common Issues</h2>
                
                <div className="space-y-6">
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">
                            Issue: High False Positive Rate in Attack Detection
                        </h3>
                        <p className="text-red-800 dark:text-red-200 mb-3">
                            Security measures flag legitimate user behavior as potential attacks, impacting user experience.
                        </p>
                        <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded">
                            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Solutions:</h4>
                            <ul className="list-disc list-inside text-red-800 dark:text-red-200 text-sm space-y-1">
                                <li>Tune detection thresholds based on historical data</li>
                                <li>Implement user behavior profiling for baseline establishment</li>
                                <li>Use ensemble methods to reduce individual model false positives</li>
                                <li>Deploy gradual response escalation instead of immediate blocking</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                            Issue: Performance Degradation from Security Measures
                        </h3>
                        <p className="text-yellow-800 dark:text-yellow-200 mb-3">
                            Security controls significantly increase inference latency or computational costs.
                        </p>
                        <div className="bg-yellow-100 dark:bg-yellow-900/40 p-4 rounded">
                            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Optimization Strategies:</h4>
                            <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                                <li>Implement tiered security based on request risk assessment</li>
                                <li>Use hardware acceleration for cryptographic operations</li>
                                <li>Deploy edge-based filtering for obvious attack patterns</li>
                                <li>Optimize model architectures for security and performance balance</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                            Issue: Difficulty Detecting Slow Data Poisoning
                        </h3>
                        <p className="text-blue-800 dark:text-blue-200 mb-3">
                            Gradual poisoning attacks evade detection by making small changes over extended periods.
                        </p>
                        <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Detection Approaches:</h4>
                            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                <li>Maintain long-term baselines for statistical comparison</li>
                                <li>Implement time-series anomaly detection on data characteristics</li>
                                <li>Use holdout validation sets unaffected by production data</li>
                                <li>Regular model retraining with certified clean datasets</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                            Issue: Limited Visibility into Third-Party Model Security
                        </h3>
                        <p className="text-purple-800 dark:text-purple-200 mb-3">
                            Organizations struggle to assess security of external models and APIs they depend on.
                        </p>
                        <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Risk Mitigation:</h4>
                            <ul className="list-disc list-inside text-purple-800 dark:text-purple-200 text-sm space-y-1">
                                <li>Require security attestations from model providers</li>
                                <li>Implement wrapper layers for input/output validation</li>
                                <li>Deploy redundancy with multiple model providers</li>
                                <li>Conduct regular security assessments of integrated models</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section id="next-steps" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Next Steps: Advanced Protection</h2>
                
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg p-8 border border-primary-200 dark:border-primary-800">
                    <p className="text-primary-800 dark:text-primary-200 text-lg leading-relaxed mb-6">
                        Understanding AI threats is the first critical step in securing your AI infrastructure. The landscape 
                        evolves rapidly, with new attack vectors emerging as AI capabilities expand. Your security strategy 
                        must be equally dynamic and comprehensive.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Immediate Actions</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Conduct AI system inventory and risk assessment</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Implement basic monitoring for anomalous behavior</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Establish data validation procedures</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Create AI incident response playbook</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Advanced Topics to Explore</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Prompt injection defense strategies</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Model security hardening techniques</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Continuous agent monitoring systems</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Red team testing methodologies</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <p className="text-primary-800 dark:text-primary-200 font-semibold">
                        Ready to take the next step? Explore our Quick Start Guide to begin implementing AI security 
                        measures in your organization today.
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
                    href="/learn/quick-start"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                    Quick Start Guide
                    <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </>
    )
}