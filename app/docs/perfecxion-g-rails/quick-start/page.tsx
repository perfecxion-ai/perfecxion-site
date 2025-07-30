import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Play, Code, CheckCircle, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Quick Start Guide - perfecX G-Rails Documentation',
    description: 'Get started with perfecX G-Rails in minutes. Learn how to integrate AI safety guardrails into your ML pipeline.',
}

export default function PerfecxionGRailsQuickStart() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/perfecxion-g-rails" className="hover:text-primary-600 dark:hover:text-primary-400">
                        perfecX G-Rails
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">Quick Start</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Quick Start Guide
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Get perfecX G-Rails up and running in your ML pipeline in under 5 minutes.
                </p>

                {/* Prerequisites */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-10">
                    <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Prerequisites</h3>
                            <ul className="list-disc list-inside space-y-1 text-blue-800 dark:text-blue-200">
                                <li>Python 3.8+ or Node.js 16+</li>
                                <li>An existing ML model or AI application</li>
                                <li>A perfecX G-Rails API key (sign up at perfecxion.ai)</li>
                                <li>Basic understanding of AI safety and guardrails</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 1: Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 1: Install the SDK
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Python</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    pip install perfecxion-g-rails
                                </code>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Node.js</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    npm install @perfecxion/g-rails
                                </code>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2: Initialize */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 2: Initialize perfecX G-Rails
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Python Example</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from perfecxion_g_rails import GRailsClient
from perfecxion_g_rails.guardrails import (
    ToxicityGuardrail,
    BiasGuardrail,
    HallucinationGuardrail,
    PIIGuardrail
)

# Initialize G-Rails client
grails = GRailsClient(
    api_key="your-api-key",
    environment="production"
)

# Configure guardrails for your use case
guardrails = grails.create_guardrail_set(
    name="production_safety",
    guardrails=[
        ToxicityGuardrail(threshold=0.7, action="block"),
        BiasGuardrail(
            protected_attributes=["gender", "race", "age"],
            max_disparity=0.05,
            action="warn"
        ),
        HallucinationGuardrail(
            fact_check=True,
            confidence_threshold=0.8,
            action="flag"
        ),
        PIIGuardrail(
            detect_types=["email", "phone", "ssn"],
            action="redact"
        )
    ]
)`}</pre>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Node.js Example</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`import { GRailsClient, Guardrails } from '@perfecxion/g-rails';

// Initialize G-Rails client
const grails = new GRailsClient({
    apiKey: 'your-api-key',
    environment: 'production'
});

// Configure guardrails
const guardrails = await grails.createGuardrailSet({
    name: 'production_safety',
    guardrails: [
        new Guardrails.ToxicityGuardrail({
            threshold: 0.7,
            action: 'block'
        }),
        new Guardrails.BiasGuardrail({
            protectedAttributes: ['gender', 'race', 'age'],
            maxDisparity: 0.05,
            action: 'warn'
        }),
        new Guardrails.HallucinationGuardrail({
            factCheck: true,
            confidenceThreshold: 0.8,
            action: 'flag'
        }),
        new Guardrails.PIIGuardrail({
            detectTypes: ['email', 'phone', 'ssn'],
            action: 'redact'
        })
    ]
});`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3: Integrate with Your Model */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 3: Integrate with Your AI Model
                    </h2>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Wrap your model with G-Rails protection
class SafeAIModel:
    def __init__(self, base_model, guardrails):
        self.model = base_model
        self.guardrails = guardrails
    
    def predict(self, input_text):
        # Pre-processing guardrails
        pre_check = self.guardrails.check_input(input_text)
        
        if pre_check.action == "block":
            return {
                "error": "Input blocked by safety guardrails",
                "reason": pre_check.violations
            }
        
        # Apply input modifications (e.g., PII redaction)
        safe_input = pre_check.modified_input or input_text
        
        # Get model prediction
        raw_output = self.model.predict(safe_input)
        
        # Post-processing guardrails
        post_check = self.guardrails.check_output(
            input=safe_input,
            output=raw_output
        )
        
        if post_check.action == "block":
            return {
                "error": "Output blocked by safety guardrails",
                "reason": post_check.violations
            }
        
        # Return safe output with guardrail metadata
        return {
            "output": post_check.modified_output or raw_output,
            "guardrail_report": {
                "checks_performed": post_check.checks,
                "modifications": post_check.modifications,
                "warnings": post_check.warnings
            }
        }

# Use the safe model
safe_model = SafeAIModel(your_existing_model, guardrails)
result = safe_model.predict("User input text here")`}</pre>
                    </div>
                </div>

                {/* Step 4: Monitor Performance */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 4: Monitor Guardrail Performance
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Track how your guardrails are performing and their impact on your model:
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Enable performance monitoring
grails.enable_monitoring({
    "track_latency": True,
    "track_violations": True,
    "track_modifications": True,
    "export_metrics": True
})

# Get real-time metrics
metrics = grails.get_metrics(
    guardrail_set_id=guardrails.id,
    time_range="last_hour"
)

print(f"Total requests: {metrics.total_requests}")
print(f"Blocked requests: {metrics.blocked_count} ({metrics.block_rate:.2%})")
print(f"Average latency: {metrics.avg_latency_ms}ms")
print(f"Most common violations: {metrics.top_violations}")

# Performance impact analysis
impact = grails.analyze_performance_impact(
    guardrail_set_id=guardrails.id,
    baseline_model_id="original_model"
)

print(f"Latency increase: {impact.latency_increase:.2%}")
print(f"Throughput impact: {impact.throughput_decrease:.2%}")
print(f"Safety improvement: {impact.safety_score_increase:.2%}")`}</pre>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Real-Time Dashboard</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Monitor guardrail triggers and violations</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Performance Metrics</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Track latency and throughput impact</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Violation Analytics</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Understand patterns in safety violations</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Custom Alerts</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Set thresholds and get notifications</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 5: Optimize Guardrails */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 5: Optimize Your Guardrails
                    </h2>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Use G-Rails optimization recommendations
recommendations = grails.get_optimization_recommendations(
    guardrail_set_id=guardrails.id,
    optimization_goals={
        "minimize_latency": 0.4,
        "maximize_safety": 0.6
    }
)

# Apply recommended optimizations
for rec in recommendations:
    print(f"Recommendation: {rec.description}")
    print(f"Expected improvement: {rec.expected_improvement}")
    
    if rec.auto_applicable:
        grails.apply_optimization(rec.id)

# A/B test different guardrail configurations
ab_test = grails.create_ab_test(
    name="toxicity_threshold_test",
    variants=[
        {"name": "strict", "config": {"toxicity_threshold": 0.6}},
        {"name": "balanced", "config": {"toxicity_threshold": 0.7}},
        {"name": "lenient", "config": {"toxicity_threshold": 0.8}}
    ],
    metrics=["block_rate", "user_satisfaction", "safety_score"],
    duration_hours=24
)`}</pre>
                    </div>
                </div>

                {/* Common Patterns */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Common Integration Patterns
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">LangChain Integration</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from langchain.chains import LLMChain
from perfecxion_g_rails import LangChainGuardrail

# Create guardrail-protected chain
protected_chain = LangChainGuardrail(
    chain=your_langchain,
    guardrails=guardrails,
    on_violation="return_safe_response"
)

# Use as normal LangChain
result = protected_chain.run("Tell me about AI safety")`}</pre>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">OpenAI Integration</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`import openai
from perfecxion_g_rails import OpenAIGuardrail

# Wrap OpenAI client
safe_openai = OpenAIGuardrail(
    client=openai,
    guardrails=guardrails
)

# Use with automatic protection
response = safe_openai.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Hello!"}]
)`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Next Steps
                    </h2>
                    <div className="space-y-3">
                        <Link href="/docs/perfecxion-g-rails/installation" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Read the full installation guide</span>
                        </Link>
                        <Link href="/docs/perfecxion-g-rails/api" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Explore the API reference</span>
                        </Link>
                        <Link href="/docs/perfecxion-g-rails/guides" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>View advanced guardrail configurations</span>
                        </Link>
                    </div>
                </div>

                {/* Support Section */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Need Help?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Our team is here to help you implement effective AI safety guardrails.
                    </p>
                    <div className="flex items-center space-x-4">
                        <Link href="/support" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Contact Support
                        </Link>
                        <Link href="/docs" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Browse Documentation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}