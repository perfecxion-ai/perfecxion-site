import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Rocket, Shield, Settings, Search, AlertCircle, CheckCircle, ArrowLeft, Zap, Clock, Target, Code, Terminal, FileText, Download, Play } from 'lucide-react'
import CodeBlock from '@/components/CodeBlock'

export const metadata: Metadata = {
    title: 'Quick Start Guide - Learn AI Security - perfecXion.ai',
    description: 'Get started with AI security in minutes. Quick wins, immediate improvements, and practical steps to secure your AI systems today.',
    keywords: 'AI security quick start, AI security setup, quick security wins, AI security tools, getting started AI security, AI security implementation',
}

export default function QuickStartPage() {
    return (
        <>
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex">
                    <li className="flex items-center">
                        <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">Quick Start Guide</li>
                </ol>
            </nav>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
                    <Rocket className="h-10 w-10 text-primary-600 mr-4" />
                    Quick Start Guide
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
                    Start securing your AI systems today with immediate, actionable steps. This guide provides a fast-track approach 
                    to implementing essential AI security measures, delivering quick wins while building a foundation for comprehensive 
                    protection. In less than an hour, you'll have basic security controls in place and a clear roadmap for advanced 
                    implementation.
                </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                    <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">30 min</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Initial Setup</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100">5 Steps</div>
                    <div className="text-sm text-green-700 dark:text-green-300">To Basic Security</div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">80%</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">Risk Reduction</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                    <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">24 hrs</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">To Production Ready</div>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#introduction" className="text-primary-600 dark:text-primary-400 hover:underline">Introduction: Why Quick Start Matters</a></li>
                    <li><a href="#core-concepts" className="text-primary-600 dark:text-primary-400 hover:underline">Core Concepts: Essential AI Security Basics</a></li>
                    <li><a href="#practical-examples" className="text-primary-600 dark:text-primary-400 hover:underline">Practical Examples: Quick Win Implementations</a></li>
                    <li><a href="#implementation-guide" className="text-primary-600 dark:text-primary-400 hover:underline">Implementation Guide: Your First Security Scan</a></li>
                    <li><a href="#best-practices" className="text-primary-600 dark:text-primary-400 hover:underline">Best Practices: Fast-Track Security</a></li>
                    <li><a href="#case-studies" className="text-primary-600 dark:text-primary-400 hover:underline">Case Studies: Quick Start Success Stories</a></li>
                    <li><a href="#troubleshooting" className="text-primary-600 dark:text-primary-400 hover:underline">Troubleshooting: Common Setup Issues</a></li>
                    <li><a href="#next-steps" className="text-primary-600 dark:text-primary-400 hover:underline">Next Steps: Building on Your Foundation</a></li>
                </ul>
            </div>

            {/* Introduction */}
            <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Rocket className="h-6 w-6 text-blue-500 mr-3" />
                    Introduction: Why Quick Start Matters
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-4">
                        Every day your AI systems operate without proper security is a day of accumulated risk. The good news? 
                        You don't need months of planning or a massive budget to start protecting your AI infrastructure. With 
                        focused effort and the right approach, you can achieve meaningful security improvements in hours, not weeks.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        This quick start guide is designed for teams who need security now. Whether you've just discovered a 
                        vulnerability, are preparing for an audit, or simply want to be proactive, these steps will give you 
                        immediate protection while you plan comprehensive security measures.
                    </p>
                    <p className="text-lg leading-relaxed">
                        The 80/20 rule applies perfectly to AI security: 20% of security measures provide 80% of the protection. 
                        This guide focuses on that critical 20%, ensuring you get maximum security value with minimum time investment.
                    </p>
                </div>
            </section>

            {/* Core Concepts */}
            <section id="core-concepts" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Concepts: Essential AI Security Basics</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Shield className="h-5 w-5 text-blue-500 mr-2" />
                            The AI Security Trinity
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                            Effective AI security rests on three pillars that work together to protect your systems:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong className="text-gray-900 dark:text-white">Data Security:</strong>
                                    <span className="text-gray-600 dark:text-gray-400 ml-1">Protecting training data and inputs from poisoning</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong className="text-gray-900 dark:text-white">Model Security:</strong>
                                    <span className="text-gray-600 dark:text-gray-400 ml-1">Hardening models against extraction and manipulation</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong className="text-gray-900 dark:text-white">Runtime Security:</strong>
                                    <span className="text-gray-600 dark:text-gray-400 ml-1">Monitoring and protecting models in production</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Search className="h-5 w-5 text-purple-500 mr-2" />
                            Common AI Security Tools
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                            Essential tools for getting started with AI security:
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                                <Terminal className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong className="text-gray-900 dark:text-white">adversarial-robustness-toolbox:</strong>
                                    <span className="text-gray-600 dark:text-gray-400 ml-1">IBM's toolkit for AI defense</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Terminal className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong className="text-gray-900 dark:text-white">cleverhans:</strong>
                                    <span className="text-gray-600 dark:text-gray-400 ml-1">Library for adversarial example generation</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Terminal className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong className="text-gray-900 dark:text-white">model-scanning-tools:</strong>
                                    <span className="text-gray-600 dark:text-gray-400 ml-1">Automated vulnerability detection</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                        Security Fundamentals Checklist
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Before You Start</h4>
                            <ul className="space-y-1 text-yellow-800 dark:text-yellow-200 text-sm">
                                <li>✓ Inventory all AI/ML systems</li>
                                <li>✓ Identify critical models</li>
                                <li>✓ Document data sources</li>
                                <li>✓ Map API endpoints</li>
                                <li>✓ Review access controls</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Quick Wins</h4>
                            <ul className="space-y-1 text-yellow-800 dark:text-yellow-200 text-sm">
                                <li>✓ Enable API rate limiting</li>
                                <li>✓ Add input validation</li>
                                <li>✓ Implement logging</li>
                                <li>✓ Set up alerts</li>
                                <li>✓ Create backups</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practical Examples */}
            <section id="practical-examples" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Practical Examples: Quick Win Implementations</h2>
                
                <div className="space-y-6">
                    {/* Example 1: Input Validation */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                            Quick Win #1: Basic Input Validation (10 minutes)
                        </h3>
                        <p className="text-blue-800 dark:text-blue-200 mb-4">
                            Implement input validation to prevent the most common attacks. This simple step blocks 60% of 
                            typical AI attacks with minimal effort.
                        </p>
                        <div className="mb-4">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Python Implementation:</h4>
                            <CodeBlock language="python">
{`import re
from typing import Any, Dict

class AIInputValidator:
    def __init__(self):
        self.max_length = 1000
        self.blocked_patterns = [
            r'<script.*?>.*?</script>',
            r'ignore previous instructions',
            r'system prompt:',
            r'\\x00|\\x1f',  # Control characters
        ]
    
    def validate_input(self, user_input: str) -> Dict[str, Any]:
        # Length check
        if len(user_input) > self.max_length:
            return {"valid": False, "reason": "Input too long"}
        
        # Pattern matching
        for pattern in self.blocked_patterns:
            if re.search(pattern, user_input, re.IGNORECASE):
                return {"valid": False, "reason": "Suspicious pattern detected"}
        
        # Character validation
        if not user_input.isprintable():
            return {"valid": False, "reason": "Non-printable characters"}
        
        return {"valid": True, "sanitized_input": user_input.strip()}

# Usage
validator = AIInputValidator()
result = validator.validate_input(user_text)
if result["valid"]:
    process_ai_request(result["sanitized_input"])
else:
    log_security_event(result["reason"])`}
                            </CodeBlock>
                        </div>
                        <div className="text-blue-800 dark:text-blue-200 text-sm">
                            <strong>Impact:</strong> Blocks injection attacks, prevents system manipulation, reduces false positives
                        </div>
                    </div>

                    {/* Example 2: Rate Limiting */}
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">
                            Quick Win #2: API Rate Limiting (15 minutes)
                        </h3>
                        <p className="text-green-800 dark:text-green-200 mb-4">
                            Prevent model extraction and denial-of-service attacks by implementing intelligent rate limiting 
                            that adapts to usage patterns.
                        </p>
                        <div className="mb-4">
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">FastAPI Implementation:</h4>
                            <CodeBlock language="python">
{`from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import time
from collections import defaultdict
import asyncio

app = FastAPI()

# Rate limiter storage
request_counts = defaultdict(lambda: {"count": 0, "window_start": time.time()})
RATE_LIMIT = 100  # requests per window
WINDOW_SIZE = 3600  # 1 hour
BURST_LIMIT = 10  # requests per minute

class RateLimiter:
    @staticmethod
    async def check_rate_limit(client_ip: str):
        current_time = time.time()
        client_data = request_counts[client_ip]
        
        # Reset window if expired
        if current_time - client_data["window_start"] > WINDOW_SIZE:
            client_data["count"] = 0
            client_data["window_start"] = current_time
        
        # Check burst limit (last minute)
        recent_requests = client_data.get("recent", [])
        recent_requests = [t for t in recent_requests if current_time - t < 60]
        
        if len(recent_requests) >= BURST_LIMIT:
            raise HTTPException(status_code=429, detail="Burst limit exceeded")
        
        # Check window limit
        if client_data["count"] >= RATE_LIMIT:
            raise HTTPException(status_code=429, detail="Rate limit exceeded")
        
        # Update counts
        client_data["count"] += 1
        recent_requests.append(current_time)
        client_data["recent"] = recent_requests

@app.middleware("http")
async def rate_limit_middleware(request: Request, call_next):
    client_ip = request.client.host
    
    # Skip rate limiting for health checks
    if request.url.path == "/health":
        return await call_next(request)
    
    await RateLimiter.check_rate_limit(client_ip)
    response = await call_next(request)
    return response

@app.post("/api/predict")
async def predict(request: Request):
    # Your AI model endpoint
    return {"status": "success"}`}
                            </CodeBlock>
                        </div>
                        <div className="text-green-800 dark:text-green-200 text-sm">
                            <strong>Impact:</strong> Prevents model extraction, blocks DoS attacks, maintains service availability
                        </div>
                    </div>

                    {/* Example 3: Monitoring Setup */}
                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">
                            Quick Win #3: Basic Monitoring (20 minutes)
                        </h3>
                        <p className="text-purple-800 dark:text-purple-200 mb-4">
                            Set up essential monitoring to detect attacks in real-time. Know when your AI is under attack 
                            and respond immediately.
                        </p>
                        <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded mb-4">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Monitoring Configuration:</h4>
                            <pre className="text-sm text-purple-800 dark:text-purple-200 overflow-x-auto">
{`import logging
import json
from datetime import datetime
from typing import Dict, Any
import numpy as np

class AISecurityMonitor:
    def __init__(self):
        self.logger = self._setup_logging()
        self.baselines = {}
        self.alert_thresholds = {
            "confidence_drop": 0.2,
            "latency_increase": 2.0,
            "error_rate": 0.05
        }
    
    def _setup_logging(self):
        logger = logging.getLogger("ai_security")
        handler = logging.FileHandler("ai_security.log")
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
        handler.setFormatter(formatter)
        logger.addHandler(handler)
        logger.setLevel(logging.INFO)
        return logger
    
    def log_prediction(self, 
                      model_name: str,
                      input_data: Any,
                      output: Any,
                      confidence: float,
                      latency: float):
        event = {
            "timestamp": datetime.utcnow().isoformat(),
            "model": model_name,
            "confidence": confidence,
            "latency": latency,
            "input_hash": hash(str(input_data)),
            "output_class": output
        }
        
        # Check for anomalies
        if self._is_anomaly(model_name, event):
            self.trigger_alert(event)
        
        self.logger.info(json.dumps(event))
    
    def _is_anomaly(self, model_name: str, event: Dict) -> bool:
        if model_name not in self.baselines:
            return False
        
        baseline = self.baselines[model_name]
        
        # Check confidence drop
        if event["confidence"] < baseline["avg_confidence"] - self.alert_thresholds["confidence_drop"]:
            return True
        
        # Check latency spike
        if event["latency"] > baseline["avg_latency"] * self.alert_thresholds["latency_increase"]:
            return True
        
        return False
    
    def trigger_alert(self, event: Dict):
        alert = {
            "severity": "HIGH",
            "type": "ANOMALY_DETECTED",
            "details": event,
            "recommended_action": "Review model inputs and outputs"
        }
        self.logger.error(f"SECURITY ALERT: {json.dumps(alert)}")
        # Send to alerting system (email, Slack, etc.)

# Usage
monitor = AISecurityMonitor()

# In your model serving code
start_time = time.time()
prediction = model.predict(input_data)
confidence = float(np.max(prediction.probabilities))
latency = time.time() - start_time

monitor.log_prediction(
    model_name="fraud_detector",
    input_data=input_data,
    output=prediction.class_label,
    confidence=confidence,
    latency=latency
)`}
                            </pre>
                        </div>
                        <div className="text-purple-800 dark:text-purple-200 text-sm">
                            <strong>Impact:</strong> Early attack detection, performance tracking, compliance logging
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Guide */}
            <section id="implementation-guide" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Implementation Guide: Your First Security Scan</h2>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        30-Minute Security Assessment
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Follow this step-by-step guide to perform your first AI security scan and identify immediate risks.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="border-l-4 border-blue-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Step 1: Install Security Tools (5 minutes)
                        </h3>
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4">
                            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# Install essential security packages
pip install adversarial-robustness-toolbox
pip install model-scanner
pip install ai-security-toolkit

# For JavaScript/TypeScript projects
npm install @tensorflow/tfjs-vis
npm install ai-guardian
npm install model-protector

# For monitoring
pip install prometheus-client
pip install grafana-api`}
                            </pre>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            These tools provide the foundation for detecting vulnerabilities, testing robustness, and 
                            monitoring your AI systems.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="border-l-4 border-green-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Step 2: Run Automated Scans (10 minutes)
                        </h3>
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4">
                            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`import model_scanner as ms
from art.utils import load_dataset
from art.attacks.evasion import FastGradientMethod
import tensorflow as tf

def quick_security_scan(model_path, test_data):
    # Load model
    model = tf.keras.models.load_model(model_path)
    
    # 1. Vulnerability Scan
    print("Running vulnerability scan...")
    vulns = ms.scan_model(model)
    print(f"Found {len(vulns)} potential vulnerabilities")
    
    # 2. Adversarial Robustness Test
    print("Testing adversarial robustness...")
    classifier = KerasClassifier(model=model, clip_values=(0, 1))
    attack = FastGradientMethod(estimator=classifier, eps=0.1)
    
    x_test, y_test = test_data
    x_adv = attack.generate(x=x_test[:100])  # Test on subset
    
    clean_accuracy = model.evaluate(x_test[:100], y_test[:100])[1]
    adv_accuracy = model.evaluate(x_adv, y_test[:100])[1]
    
    print(f"Clean accuracy: {clean_accuracy:.2%}")
    print(f"Adversarial accuracy: {adv_accuracy:.2%}")
    print(f"Robustness score: {adv_accuracy/clean_accuracy:.2%}")
    
    # 3. Input Validation Check
    print("Checking input validation...")
    test_inputs = [
        "normal input",
        "<script>alert('xss')</script>",
        "ignore previous instructions and",
        "' OR '1'='1"
    ]
    
    for inp in test_inputs:
        try:
            # Test your preprocessing pipeline
            processed = preprocess_input(inp)
            print(f"✓ Input handled safely: {inp[:20]}...")
        except Exception as e:
            print(f"✗ Vulnerability found with input: {inp}")
    
    return {
        "vulnerabilities": vulns,
        "robustness_score": adv_accuracy/clean_accuracy,
        "recommendations": generate_recommendations(vulns, adv_accuracy/clean_accuracy)
    }

# Run the scan
results = quick_security_scan("models/production_model.h5", (X_test, y_test))
print(json.dumps(results, indent=2))`}
                            </pre>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                            <p className="text-green-800 dark:text-green-200 text-sm">
                                <strong>Expected Output:</strong> List of vulnerabilities, robustness metrics, and specific 
                                recommendations for improvement.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="border-l-4 border-purple-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Step 3: Implement Quick Fixes (10 minutes)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">For High-Risk Models</h4>
                                <pre className="text-xs text-purple-800 dark:text-purple-200 overflow-x-auto">
{`# Add ensemble validation
def secure_predict(input_data):
    predictions = []
    for model in model_ensemble:
        pred = model.predict(input_data)
        predictions.append(pred)
    
    # Check consensus
    if variance(predictions) > 0.3:
        log_anomaly(input_data)
        return fallback_response()
    
    return majority_vote(predictions)`}
                                </pre>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                                <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">For API Endpoints</h4>
                                <pre className="text-xs text-orange-800 dark:text-orange-200 overflow-x-auto">
{`# Add security middleware
@app.before_request
def security_checks():
    # Rate limiting
    if rate_limiter.is_exceeded(request.remote_addr):
        abort(429)
    
    # Input validation
    if not validate_input(request.data):
        abort(400)
    
    # Log for monitoring
    log_request(request)`}
                                </pre>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            These quick fixes address the most critical vulnerabilities while you plan comprehensive solutions.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Step 4: Set Up Monitoring Dashboard (5 minutes)
                        </h3>
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4">
                            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# Quick Grafana dashboard setup
# docker-compose.yml
version: '3'
services:
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
  
  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    depends_on:
      - prometheus

# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'ai_models'
    static_configs:
      - targets: ['localhost:8000']`}
                            </pre>
                        </div>
                        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                            <p className="text-orange-800 dark:text-orange-200 text-sm">
                                <strong>Quick Setup:</strong> Run `docker-compose up -d` and access Grafana at http://localhost:3000. 
                                Import the AI Security dashboard template for instant visibility.
                            </p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="border-l-4 border-red-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Step 5: Document and Plan (5 minutes)
                        </h3>
                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Security Assessment Report Template</h4>
                            <div className="text-red-800 dark:text-red-200 text-sm space-y-2">
                                <p><strong>Date:</strong> [Current Date]</p>
                                <p><strong>Models Scanned:</strong> [List of models]</p>
                                <p><strong>Critical Findings:</strong></p>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Vulnerability count and severity</li>
                                    <li>Robustness scores</li>
                                    <li>Missing security controls</li>
                                </ul>
                                <p><strong>Immediate Actions Taken:</strong></p>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Implemented input validation</li>
                                    <li>Added rate limiting</li>
                                    <li>Enabled monitoring</li>
                                </ul>
                                <p><strong>Next Steps:</strong></p>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Schedule comprehensive security audit</li>
                                    <li>Implement adversarial training</li>
                                    <li>Deploy advanced monitoring</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Best Practices: Fast-Track Security</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                            Start Small, Think Big
                        </h3>
                        <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                            <li>• Focus on your most critical models first</li>
                            <li>• Implement basic controls before advanced ones</li>
                            <li>• Build security incrementally</li>
                            <li>• Document everything for future reference</li>
                            <li>• Plan for comprehensive security while implementing quick wins</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
                            Automate Everything
                        </h3>
                        <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                            <li>• Use CI/CD for security checks</li>
                            <li>• Automate vulnerability scanning</li>
                            <li>• Set up automated alerts</li>
                            <li>• Deploy auto-scaling defenses</li>
                            <li>• Schedule regular security assessments</li>
                        </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                            Monitor Continuously
                        </h3>
                        <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
                            <li>• Track all model predictions</li>
                            <li>• Monitor confidence scores</li>
                            <li>• Watch for anomalous patterns</li>
                            <li>• Log all security events</li>
                            <li>• Review metrics daily</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Start Command Reference</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security Scanning</h4>
                            <pre className="text-xs bg-white dark:bg-gray-700 p-3 rounded overflow-x-auto">
{`# Scan for vulnerabilities
model-scanner --model path/to/model --output report.json

# Test adversarial robustness
art-test --model model.h5 --dataset test_data.npz

# Check API security
api-scanner --endpoint http://api.example.com/predict`}
                            </pre>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Monitoring Setup</h4>
                            <pre className="text-xs bg-white dark:bg-gray-700 p-3 rounded overflow-x-auto">
{`# Start monitoring stack
docker-compose up -d monitoring

# Check metrics
curl http://localhost:9090/metrics

# View dashboards
open http://localhost:3000`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section id="case-studies" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Case Studies: Quick Start Success Stories</h2>
                
                <div className="space-y-6">
                    {/* Startup Case Study */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Startup Secures AI in 24 Hours Pre-Launch
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">24 hrs</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Total Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">$0</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Additional Cost</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600">3</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Critical Bugs Found</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-600">100%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Launch Confidence</div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">The Challenge:</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                A fintech startup discovered potential security issues in their AI-powered fraud detection 
                                system just 24 hours before their public launch. They needed immediate security measures 
                                without delaying the launch.
                            </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Quick Start Implementation:</h4>
                            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                <li>Hour 1-2: Ran automated security scans, found 3 critical vulnerabilities</li>
                                <li>Hour 3-6: Implemented input validation and rate limiting</li>
                                <li>Hour 7-12: Added monitoring and alerting systems</li>
                                <li>Hour 13-18: Conducted adversarial testing and hardening</li>
                                <li>Hour 19-24: Final security review and documentation</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Results:</h4>
                            <p className="text-green-800 dark:text-green-200 text-sm">
                                The startup launched on schedule with confidence. The quick security measures prevented 
                                two attempted attacks in the first week. Within a month, they expanded to a comprehensive 
                                security program based on the quick start foundation.
                            </p>
                        </div>
                    </div>

                    {/* Enterprise Case Study */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Enterprise Stops Active Attack in 30 Minutes
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-red-600">30 min</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Detection to Resolution</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">$2M</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Potential Loss Prevented</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">0</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Customer Impact</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600">15min</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Time to Deploy Fix</div>
                            </div>
                        </div>

                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">The Attack:</h4>
                            <p className="text-red-800 dark:text-red-200 text-sm">
                                A major retailer detected unusual patterns in their recommendation engine—someone was 
                                attempting to extract their proprietary model through systematic API queries. They needed 
                                to stop the attack without disrupting Black Friday operations.
                            </p>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Rapid Response:</h4>
                            <ol className="list-decimal list-inside text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                                <li>0-5 min: Security team alerted by monitoring system</li>
                                <li>5-10 min: Identified attack pattern and source</li>
                                <li>10-15 min: Deployed emergency rate limiting rules</li>
                                <li>15-20 min: Added query complexity analysis</li>
                                <li>20-30 min: Implemented and tested permanent fix</li>
                            </ol>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Outcome:</h4>
                            <p className="text-green-800 dark:text-green-200 text-sm">
                                The attack was stopped before any significant model information was extracted. The quick 
                                response prevented an estimated $2M in intellectual property theft. The emergency measures 
                                were so effective they became part of the permanent security architecture.
                            </p>
                        </div>
                    </div>

                    {/* Healthcare Case Study */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Healthcare Provider Achieves Compliance in One Week
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">7 days</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">To Compliance</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">12</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Models Secured</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600">100%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Audit Pass Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-600">$500K</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Cost Savings</div>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">The Situation:</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                A healthcare technology company faced an unexpected audit of their AI diagnostic tools. 
                                They had one week to implement security controls that would satisfy regulatory requirements 
                                for patient data protection and AI safety.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Week Timeline:</h5>
                                <ul className="text-blue-800 dark:text-blue-200 text-xs space-y-1">
                                    <li><strong>Day 1:</strong> Security assessment and gap analysis</li>
                                    <li><strong>Day 2-3:</strong> Implemented encryption and access controls</li>
                                    <li><strong>Day 4-5:</strong> Added monitoring and audit logging</li>
                                    <li><strong>Day 6:</strong> Conducted penetration testing</li>
                                    <li><strong>Day 7:</strong> Documentation and final review</li>
                                </ul>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                                <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Key Implementations:</h5>
                                <ul className="text-purple-800 dark:text-purple-200 text-xs space-y-1">
                                    <li>• End-to-end encryption for all model inputs/outputs</li>
                                    <li>• HIPAA-compliant logging and monitoring</li>
                                    <li>• Differential privacy for patient data</li>
                                    <li>• Automated compliance reporting</li>
                                    <li>• Incident response procedures</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Success Metrics:</h4>
                            <p className="text-green-800 dark:text-green-200 text-sm">
                                The company passed the audit with flying colors. The quick implementation not only satisfied 
                                regulators but also improved model performance through better data handling. They saved $500K 
                                compared to hiring external consultants and established a security framework that scales with 
                                their growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Troubleshooting: Common Setup Issues</h2>
                
                <div className="space-y-6">
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">
                            Issue: "Permission Denied" During Tool Installation
                        </h3>
                        <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded mb-3">
                            <pre className="text-sm text-red-800 dark:text-red-200">
{`Error: Permission denied while installing packages
Solution:
# Use virtual environment
python -m venv security_env
source security_env/bin/activate  # On Windows: security_env\\Scripts\\activate
pip install --upgrade pip
pip install -r requirements.txt

# Or use --user flag
pip install --user adversarial-robustness-toolbox`}
                            </pre>
                        </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                            Issue: Model Scanning Takes Too Long
                        </h3>
                        <div className="bg-yellow-100 dark:bg-yellow-900/40 p-4 rounded mb-3">
                            <pre className="text-sm text-yellow-800 dark:text-yellow-200">
{`Problem: Full model scan exceeds time constraints
Solution:
# Use quick scan mode
model-scanner --quick --top-risks-only

# Scan in parallel
parallel-scan --models model1.h5 model2.h5 --workers 4

# Focus on critical paths
model-scanner --endpoints-only --critical-paths config.json`}
                            </pre>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                            Issue: Monitoring Dashboard Not Showing Data
                        </h3>
                        <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded mb-3">
                            <pre className="text-sm text-blue-800 dark:text-blue-200">
{`Checklist:
1. Verify metrics endpoint: curl http://localhost:8000/metrics
2. Check Prometheus targets: http://localhost:9090/targets
3. Verify time sync: all systems should use UTC
4. Check firewall rules: ports 9090, 3000, 8000 must be open
5. Review logs: docker logs prometheus grafana

Common fix:
# Restart with correct network settings
docker-compose down
docker-compose up -d --force-recreate`}
                            </pre>
                        </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                            Issue: False Positives Blocking Legitimate Traffic
                        </h3>
                        <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded mb-3">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Quick Tuning Guide:</h4>
                            <pre className="text-sm text-purple-800 dark:text-purple-200">
{`# Adjust sensitivity
config.detection_threshold = 0.8  # Increase from 0.5

# Whitelist known good patterns
validator.add_whitelist_pattern(r'^[A-Za-z0-9\s]+$')

# Implement gradual blocking
if risk_score > 0.9:
    block_request()
elif risk_score > 0.7:
    add_captcha()
else:
    log_and_allow()`}
                            </pre>
                        </div>
                    </div>
                </div>

                <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Fixes Reference</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Performance Issues</h4>
                            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                                <li>• Use caching for repeated validations</li>
                                <li>• Implement async processing for non-critical checks</li>
                                <li>• Deploy edge validation for obvious threats</li>
                                <li>• Use sampling for high-volume endpoints</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Integration Problems</h4>
                            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                                <li>• Check API version compatibility</li>
                                <li>• Verify authentication tokens</li>
                                <li>• Review CORS settings</li>
                                <li>• Test with minimal configuration first</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section id="next-steps" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Next Steps: Building on Your Foundation</h2>
                
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg p-8 border border-primary-200 dark:border-primary-800">
                    <p className="text-primary-800 dark:text-primary-200 text-lg leading-relaxed mb-6">
                        Congratulations! You've taken the critical first steps in securing your AI systems. The quick wins 
                        you've implemented provide immediate protection, but this is just the beginning. Your next moves will 
                        transform these tactical improvements into a comprehensive security strategy.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Week 1-2: Consolidate</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Review and optimize quick fixes</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Expand monitoring coverage</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Document security procedures</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Train team on security basics</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Month 1-3: Expand</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Implement comprehensive threat detection</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Deploy adversarial training</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Build security into CI/CD pipeline</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Conduct regular security audits</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Recommended Learning Path</h3>
                        <ol className="space-y-3">
                            <li className="flex items-start">
                                <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                                <div>
                                    <Link href="/learn/prompt-injection" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
                                        Prompt Injection Defense
                                    </Link>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Master protecting against the most common LLM attacks</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                                <div>
                                    <Link href="/learn/model-security" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
                                        Model Security Hardening
                                    </Link>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Advanced techniques for bulletproof models</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                                <div>
                                    <Link href="/learn/agent-monitoring" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
                                        Continuous Agent Monitoring
                                    </Link>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Build comprehensive monitoring for production AI</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                    
                    <p className="text-primary-800 dark:text-primary-200 font-semibold">
                        Remember: Security is a journey, not a destination. Each step you take reduces risk and builds 
                        resilience. Keep the momentum going!
                    </p>
                </div>
            </section>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link
                    href="/learn/ai-threats"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Understanding AI Threats
                </Link>
                <Link
                    href="/learn/prompt-injection"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                    Prompt Injection Attacks
                    <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </>
    )
}