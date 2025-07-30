import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Code, Users, Shield, Cpu, Brain, Zap, AlertTriangle, BarChart } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Guides & Examples - perfecX G-Rails Documentation',
    description: 'Guardrail configuration guides, integration examples, and best practices for perfecX G-Rails.',
}

export default function PerfecxionGRailsGuides() {
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
                    <span className="text-gray-900 dark:text-white">Guides & Examples</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Guides & Examples
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Learn how to configure guardrails, integrate with popular frameworks, and optimize AI safety mechanisms.
                </p>

                {/* Guardrail Configuration Guides */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Guardrail Configuration Guides
                    </h2>

                    {/* Toxicity Guardrail */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Shield className="h-5 w-5 mr-2" />
                            Toxicity Detection Guardrail
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Configure multi-model toxicity detection for comprehensive content safety.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from perfecxion_g_rails.guardrails import ToxicityGuardrail

# Basic toxicity guardrail
toxicity_guardrail = ToxicityGuardrail(
    threshold=0.7,
    action="block"
)

# Advanced configuration with multiple models
toxicity_guardrail = ToxicityGuardrail(
    models=[
        {
            "name": "perspective",
            "weight": 0.6,
            "categories": ["TOXICITY", "SEVERE_TOXICITY", "THREAT", "INSULT"]
        },
        {
            "name": "detoxify",
            "weight": 0.4,
            "categories": ["toxic", "obscene", "threat", "insult"]
        }
    ],
    threshold=0.7,
    action="block",
    custom_responses={
        "SEVERE_TOXICITY": "I cannot process this request due to inappropriate content.",
        "THREAT": "Threatening language is not allowed in our system."
    },
    log_violations=True,
    notify_moderators=True
)

# Category-specific thresholds
toxicity_guardrail.set_category_thresholds({
    "hate_speech": 0.5,      # More strict for hate speech
    "profanity": 0.8,        # More lenient for mild profanity
    "threat": 0.6,           # Moderate for threats
    "insult": 0.75           # Standard for insults
})`}</pre>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                <strong>Best Practice:</strong> Use multiple toxicity models with weighted scoring for more accurate detection and reduced false positives.
                            </p>
                        </div>
                    </div>

                    {/* Bias Detection */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Users className="h-5 w-5 mr-2" />
                            Bias Detection and Mitigation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Detect and mitigate various forms of bias in AI outputs.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from perfecxion_g_rails.guardrails import BiasGuardrail

# Configure bias detection
bias_guardrail = BiasGuardrail(
    protected_attributes=[
        "gender", "race", "ethnicity", "religion", 
        "age", "disability", "sexual_orientation"
    ],
    bias_types={
        "stereotyping": {
            "enabled": True,
            "threshold": 0.6,
            "examples": ["women are bad at math", "men don't cry"]
        },
        "discrimination": {
            "enabled": True,
            "threshold": 0.5,
            "examples": ["only hire young people", "avoid certain neighborhoods"]
        },
        "representation": {
            "enabled": True,
            "check_diversity": True,
            "min_representation": 0.2
        }
    },
    mitigation_strategies={
        "rebalancing": True,
        "counterfactual_augmentation": True,
        "neutral_rephrasing": True
    },
    action="modify",
    explain_modifications=True
)

# Test for bias in responses
def check_response_bias(response):
    result = bias_guardrail.check(response)
    
    if result.bias_detected:
        print(f"Bias detected: {result.bias_types}")
        print(f"Confidence: {result.confidence}")
        print(f"Suggested modification: {result.modified_text}")
        
        # Apply mitigation
        if result.action == "modify":
            return result.modified_text
        elif result.action == "warn":
            return f"⚠️ Potential bias detected: {response}"
        else:  # block
            return "Response blocked due to bias concerns."
    
    return response`}</pre>
                        </div>
                    </div>

                    {/* PII Protection */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Shield className="h-5 w-5 mr-2" />
                            PII Detection and Redaction
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Protect sensitive personal information with intelligent detection and redaction.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from perfecxion_g_rails.guardrails import PIIGuardrail

# Configure PII detection
pii_guardrail = PIIGuardrail(
    detect_types={
        "email": {
            "enabled": True,
            "redact_domain": False,  # Keep domain for context
            "replacement": "[EMAIL]"
        },
        "phone": {
            "enabled": True,
            "formats": ["US", "UK", "EU"],
            "replacement": "[PHONE]"
        },
        "ssn": {
            "enabled": True,
            "partial_redact": True,  # Show last 4 digits
            "replacement": "XXX-XX-[LAST4]"
        },
        "credit_card": {
            "enabled": True,
            "replacement": "[CARD]"
        },
        "address": {
            "enabled": True,
            "keep_city": True,  # Keep city for context
            "replacement": "[ADDRESS]"
        },
        "name": {
            "enabled": True,
            "use_initials": True,  # Replace with initials
            "common_names_only": False
        }
    },
    custom_patterns=[
        {
            "name": "employee_id",
            "pattern": r"EMP\d{6}",
            "replacement": "[EMPLOYEE_ID]"
        },
        {
            "name": "medical_record",
            "pattern": r"MRN-\d{8}",
            "replacement": "[MEDICAL_RECORD]"
        }
    ],
    context_aware=True,  # Consider context when detecting
    confidence_threshold=0.8,
    action="redact"
)

# Advanced PII handling with context preservation
def process_with_pii_protection(text, preserve_context=True):
    result = pii_guardrail.check(text)
    
    if preserve_context:
        # Keep some information for context
        return result.redacted_with_context
    else:
        # Full redaction
        return result.fully_redacted`}</pre>
                        </div>
                    </div>

                    {/* Hallucination Detection */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Brain className="h-5 w-5 mr-2" />
                            Hallucination Detection
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Detect and prevent AI hallucinations with fact-checking and source verification.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from perfecxion_g_rails.guardrails import HallucinationGuardrail

# Configure hallucination detection
hallucination_guardrail = HallucinationGuardrail(
    fact_sources=[
        {
            "name": "company_kb",
            "type": "vector_db",
            "endpoint": "https://kb.company.com/api",
            "weight": 0.8
        },
        {
            "name": "wikipedia",
            "type": "api",
            "endpoint": "https://api.wikipedia.org",
            "weight": 0.5
        }
    ],
    verification_methods={
        "entity_verification": True,
        "date_verification": True,
        "numerical_verification": True,
        "citation_checking": True
    },
    confidence_threshold=0.8,
    require_sources=True,
    max_unverified_claims=2,
    action="flag"
)

# Check for hallucinations with source attribution
def verify_ai_response(question, answer):
    result = hallucination_guardrail.check(
        input=question,
        output=answer
    )
    
    if result.hallucination_detected:
        print(f"Potential hallucination detected!")
        print(f"Unverified claims: {result.unverified_claims}")
        print(f"Confidence: {result.confidence}")
        
        if result.suggested_correction:
            return {
                "original": answer,
                "corrected": result.suggested_correction,
                "sources": result.verified_sources,
                "warning": "Some claims could not be verified"
            }
    
    return {
        "response": answer,
        "sources": result.verified_sources,
        "confidence": result.confidence
    }`}</pre>
                        </div>
                    </div>
                </div>

                {/* Framework Integration Examples */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Cpu className="h-6 w-6 mr-2" />
                        Framework Integration Examples
                    </h2>

                    {/* LangChain Integration */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            LangChain Integration
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Seamlessly integrate G-Rails with LangChain applications.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from langchain.chains import LLMChain
from langchain.callbacks import BaseCallbackHandler
from perfecxion_g_rails import LangChainGuardrail

# Create guardrail callback handler
class GRailsHandler(BaseCallbackHandler):
    def __init__(self, guardrails):
        self.guardrails = guardrails
    
    def on_llm_start(self, serialized, prompts, **kwargs):
        # Check inputs before sending to LLM
        for prompt in prompts:
            result = self.guardrails.check_input(prompt)
            if result.action == "block":
                raise ValueError(f"Input blocked: {result.reason}")
    
    def on_llm_end(self, response, **kwargs):
        # Check outputs before returning
        for generation in response.generations:
            result = self.guardrails.check_output(
                output=generation[0].text
            )
            if result.action == "block":
                generation[0].text = "[Content blocked by guardrails]"
            elif result.action == "modify":
                generation[0].text = result.modified_output

# Use with LangChain
guardrails = GRailsClient(api_key="your-key").create_guardrail_set(...)
handler = GRailsHandler(guardrails)

chain = LLMChain(
    llm=llm,
    prompt=prompt,
    callbacks=[handler]
)

# Alternative: Use the wrapper
from perfecxion_g_rails.integrations import LangChainWrapper

safe_chain = LangChainWrapper(
    chain=chain,
    guardrails=guardrails,
    stream_safe=True  # Enable for streaming
)`}</pre>
                        </div>
                    </div>

                    {/* OpenAI Integration */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            OpenAI API Integration
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Add guardrails to OpenAI API calls.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`import openai
from perfecxion_g_rails import OpenAIGuardrail

# Wrap OpenAI client
safe_openai = OpenAIGuardrail(
    client=openai,
    guardrails=guardrails,
    log_all_calls=True
)

# Use as normal - guardrails applied automatically
response = safe_openai.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "Tell me about AI safety"}
    ]
)

# Advanced: Custom handling for violations
@safe_openai.on_violation
def handle_violation(violation):
    if violation.severity == "high":
        # Log to security system
        security_logger.error(f"High severity violation: {violation}")
        # Return safe response
        return "I cannot process this request due to safety concerns."
    else:
        # Return modified response
        return violation.safe_alternative

# Streaming with guardrails
stream = safe_openai.chat.completions.create(
    model="gpt-4",
    messages=messages,
    stream=True
)

for chunk in stream:
    # Each chunk is checked before yielding
    print(chunk.choices[0].delta.content, end="")`}</pre>
                        </div>
                    </div>

                    {/* Hugging Face Integration */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Hugging Face Transformers Integration
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Protect Hugging Face model outputs with guardrails.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from transformers import pipeline
from perfecxion_g_rails import HuggingFaceGuardrail

# Create protected pipeline
generator = pipeline("text-generation", model="gpt2")
safe_generator = HuggingFaceGuardrail(
    pipeline=generator,
    guardrails=guardrails
)

# Generate with protection
result = safe_generator(
    "Write a story about AI",
    max_length=100,
    num_return_sequences=3
)

# Batch processing with guardrails
texts = ["Question 1", "Question 2", "Question 3"]
safe_results = safe_generator(texts, batch_size=2)

# Custom model with guardrails
from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("model-name")
tokenizer = AutoTokenizer.from_pretrained("model-name")

@guardrails.protect
def generate_text(prompt, **kwargs):
    inputs = tokenizer(prompt, return_tensors="pt")
    outputs = model.generate(**inputs, **kwargs)
    return tokenizer.decode(outputs[0], skip_special_tokens=True)`}</pre>
                        </div>
                    </div>
                </div>

                {/* Performance Optimization */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Zap className="h-6 w-6 mr-2" />
                        Performance Optimization
                    </h2>

                    <div className="space-y-6">
                        {/* Caching Strategy */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                1. Intelligent Caching
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Reduce latency with smart caching strategies.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Configure caching for guardrails
from perfecxion_g_rails import CacheConfig

cache_config = CacheConfig(
    enabled=True,
    backend="redis",  # or "memory", "dynamodb"
    ttl=3600,  # 1 hour
    max_size=10000,
    
    # Smart caching rules
    cache_rules={
        "toxicity": {
            "cache_similar": True,  # Cache similar inputs
            "similarity_threshold": 0.95,
            "ttl": 7200  # Longer TTL for toxicity
        },
        "pii": {
            "cache_exact_only": True,  # Only exact matches
            "ttl": 1800  # Shorter TTL for PII
        }
    }
)

grails = GRailsClient(
    api_key="your-key",
    cache_config=cache_config
)

# Preload common violations
grails.preload_cache([
    "common profanity list",
    "known spam patterns",
    "frequent policy violations"
])`}</pre>
                            </div>
                        </div>

                        {/* Batch Processing */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                2. Batch Processing
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Process multiple requests efficiently.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Batch processing for high throughput
batch_processor = grails.create_batch_processor(
    max_batch_size=100,
    max_wait_ms=50,  # Max time to wait for batch
    parallel_processing=True,
    num_workers=4
)

# Process many inputs efficiently
inputs = ["text1", "text2", ..., "text1000"]
results = batch_processor.check_batch(inputs)

# Async batch processing
async def process_stream(stream):
    async for batch in batch_processor.process_stream(stream):
        for result in batch:
            if result.passed:
                await forward_to_model(result.input)
            else:
                await handle_violation(result)`}</pre>
                            </div>
                        </div>

                        {/* GPU Acceleration */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                3. GPU Acceleration
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Leverage GPU for faster processing.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Enable GPU acceleration
grails = GRailsClient(
    api_key="your-key",
    device="cuda:0",  # Use first GPU
    precision="fp16",  # Mixed precision for speed
    batch_size=64  # Larger batches for GPU
)

# Monitor GPU usage
gpu_stats = grails.get_gpu_stats()
print(f"GPU Memory: {gpu_stats.memory_used}/{gpu_stats.memory_total}")
print(f"GPU Utilization: {gpu_stats.utilization}%")`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Monitoring and Analytics */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <BarChart className="h-6 w-6 mr-2" />
                        Monitoring and Analytics
                    </h2>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Real-Time Monitoring Dashboard
                        </h3>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Set up monitoring dashboard
from perfecxion_g_rails import Dashboard

dashboard = Dashboard(grails)

# Configure metrics
dashboard.add_metrics([
    {
        "name": "violation_rate",
        "type": "percentage",
        "window": "5m",
        "alert_threshold": 0.1
    },
    {
        "name": "latency_p95",
        "type": "histogram",
        "window": "1m",
        "alert_threshold": 100  # ms
    },
    {
        "name": "guardrail_effectiveness",
        "type": "custom",
        "calculation": lambda m: m.blocks / (m.blocks + m.passes)
    }
])

# Export to monitoring systems
dashboard.export_prometheus(port=9090)
dashboard.export_datadog(api_key="dd-key")
dashboard.export_cloudwatch(region="us-east-1")

# Custom alerts
@dashboard.alert(
    condition="violation_rate > 0.15",
    channels=["email", "slack"]
)
def high_violation_alert(metrics):
    return f"High violation rate: {metrics.violation_rate:.2%}"`}</pre>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            A/B Testing Guardrails
                        </h3>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# A/B test different guardrail configurations
ab_test = grails.create_ab_test(
    name="toxicity_threshold_optimization",
    hypothesis="Lower threshold reduces harmful content without impacting UX",
    variants={
        "control": {
            "toxicity_threshold": 0.7,
            "action": "block"
        },
        "treatment": {
            "toxicity_threshold": 0.6,
            "action": "warn"
        }
    },
    metrics=[
        "user_satisfaction",
        "violation_rate", 
        "false_positive_rate",
        "response_time"
    ],
    sample_size=10000,
    duration_days=7
)

# Monitor test progress
status = ab_test.get_status()
print(f"Progress: {status.samples_collected}/{status.sample_size}")
print(f"Current winner: {status.leading_variant}")
print(f"Statistical significance: {status.p_value}")

# Auto-deploy winner
ab_test.auto_deploy_winner(
    confidence_level=0.95,
    min_improvement=0.05
)`}</pre>
                        </div>
                    </div>
                </div>

                {/* Common Scenarios */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Zap className="h-6 w-6 mr-2" />
                        Common Implementation Scenarios
                    </h2>

                    {/* Customer Support Chatbot */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Customer Support Chatbot
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Comprehensive guardrails for customer-facing AI.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Customer support guardrail configuration
support_guardrails = grails.create_guardrail_set(
    name="customer_support",
    guardrails=[
        ToxicityGuardrail(
            threshold=0.3,  # Very strict for customer service
            action="block",
            custom_response="I apologize, but I cannot process that request."
        ),
        PIIGuardrail(
            action="redact",
            store_safely=True,  # Store PII securely for support tickets
            compliance="GDPR"
        ),
        BiasGuardrail(
            action="modify",
            ensure_inclusivity=True
        ),
        CustomGuardrail(
            name="company_policy",
            rules={
                "no_legal_advice": {
                    "pattern": r"legal|lawsuit|sue",
                    "response": "For legal matters, please consult our legal department."
                },
                "no_medical_advice": {
                    "pattern": r"medical|health|diagnosis",
                    "response": "For health concerns, please consult a medical professional."
                }
            }
        )
    ],
    fallback_response="I'm sorry, I cannot help with that request. Please contact human support."
)`}</pre>
                        </div>
                    </div>

                    {/* Content Generation */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Content Generation Platform
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Ensure safe and appropriate content generation.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Content generation guardrails
content_guardrails = grails.create_guardrail_set(
    name="content_generation",
    guardrails=[
        CopyrightGuardrail(
            check_plagiarism=True,
            similarity_threshold=0.8,
            sources=["web", "books", "academic"]
        ),
        BrandSafetyGuardrail(
            inappropriate_topics=["violence", "adult", "gambling"],
            competitor_mentions="block",
            brand_guidelines_url="https://company.com/brand"
        ),
        FactualityGuardrail(
            fact_check=True,
            require_citations=True,
            confidence_threshold=0.85
        ),
        SEOGuardrail(
            check_keyword_stuffing=True,
            optimal_keyword_density=0.02,
            readability_score_min=60
        )
    ]
)

# Use with content generation
def generate_article(topic, keywords):
    prompt = f"Write an article about {topic} including {keywords}"
    
    # Generate with guardrails
    result = safe_generator(prompt)
    
    # Additional post-processing
    if result.seo_score < 0.7:
        result = optimize_for_seo(result)
    
    return {
        "content": result.text,
        "safety_score": result.safety_score,
        "seo_score": result.seo_score,
        "citations": result.citations
    }`}</pre>
                        </div>
                    </div>
                </div>

                {/* Troubleshooting */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-10">
                    <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2" />
                        Common Issues and Solutions
                    </h3>
                    <div className="space-y-3 text-yellow-800 dark:text-yellow-200">
                        <div>
                            <p className="font-semibold">High False Positive Rate</p>
                            <p className="text-sm">Adjust thresholds, use multiple models, and implement context-aware detection</p>
                        </div>
                        <div>
                            <p className="font-semibold">Performance Degradation</p>
                            <p className="text-sm">Enable caching, use batch processing, and consider GPU acceleration</p>
                        </div>
                        <div>
                            <p className="font-semibold">Inconsistent Results</p>
                            <p className="text-sm">Ensure model versions are locked and use deterministic settings</p>
                        </div>
                        <div>
                            <p className="font-semibold">Integration Conflicts</p>
                            <p className="text-sm">Check version compatibility and use provided integration wrappers</p>
                        </div>
                    </div>
                </div>

                {/* Resources */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Additional Resources
                    </h3>
                    <div className="space-y-3">
                        <Link href="/docs/perfecxion-g-rails" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Back to perfecX G-Rails Documentation</span>
                        </Link>
                        <a href="https://github.com/perfecxion/g-rails-examples" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Example Repository on GitHub</span>
                        </a>
                        <Link href="/support" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Users className="h-4 w-4" />
                            <span>Contact Support</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}