import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Shield, Zap, Target, CheckCircle, Play, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Quick Start Guide - perfecX Red-T Documentation',
    description: 'Get started with perfecX Red-T AI red team testing platform in minutes.',
}

export default function RedTQuickStart() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/perfecxion-red-t" className="hover:text-primary-600 dark:hover:text-primary-400">
                        perfecX Red-T
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">Quick Start</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    🚀 Quick Start Guide
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Get up and running with perfecX Red-T in just 10 minutes! This guide will walk you through setting up your first AI red team testing environment.
                </p>

                {/* Prerequisites */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Prerequisites
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">System Requirements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Minimum</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">4 CPU cores</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">8GB RAM</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">20GB storage</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Docker 20.10+</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Recommended</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">8+ CPU cores</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">16GB+ RAM</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">50GB+ SSD</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">GPU (optional)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 1: Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <span className="mr-3">1.</span>
                        <Shield className="h-6 w-6 mr-2" />
                        Installation
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Docker Installation (Recommended)</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Pull the Red-T container
docker pull perfecxion/red-t:latest

# Create configuration directory
mkdir -p ~/.perfecx-red-t/config

# Run Red-T with default configuration
docker run -d \\
  --name perfecx-red-t \\
  -p 8080:8080 \\
  -p 8443:8443 \\
  -v ~/.perfecx-red-t/config:/app/config \\
  -e REDTEAM_LICENSE_KEY="your-license-key" \\
  perfecxion/red-t:latest

# Verify installation
docker ps | grep perfecx-red-t`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Alternative: Standalone Installation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Download Red-T CLI
curl -L https://releases.perfecxion.ai/red-t/latest/red-t-linux-amd64 -o red-t
chmod +x red-t
sudo mv red-t /usr/local/bin/

# Initialize configuration
red-t init --license-key="your-license-key"

# Start Red-T server
red-t server --port 8080`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2: Configuration */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <span className="mr-3">2.</span>
                        <Target className="h-6 w-6 mr-2" />
                        Initial Configuration
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Basic Configuration</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Create your first configuration file to define your target AI system:
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# ~/.perfecx-red-t/config/targets.yaml
targets:
  - name: "production-chatbot"
    type: "llm_api"
    endpoint: "https://api.yourcompany.com/chat"
    auth:
      type: "bearer"
      token: "\${API_TOKEN}"
    
    # Test configuration
    test_config:
      max_concurrent: 5
      timeout: 30
      retry_attempts: 3
    
    # Scope definition
    scope:
      attack_types:
        - "prompt_injection"
        - "model_inversion"
        - "data_poisoning"
        - "adversarial_examples"
      
      risk_levels: ["low", "medium", "high"]
      
    # Safety limits
    safety:
      max_requests_per_minute: 100
      stop_on_critical: true
      preserve_production: true`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Environment Setup</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# .env file
REDTEAM_LICENSE_KEY=your-license-key-here
API_TOKEN=your-target-api-token

# Database configuration
POSTGRES_HOST=localhost
POSTGRES_DB=redteam_db
POSTGRES_USER=redteam
POSTGRES_PASSWORD=secure-password

# Security settings
JWT_SECRET=your-jwt-secret
ENCRYPTION_KEY=your-32-char-encryption-key

# Optional: AI model configuration
OPENAI_API_KEY=your-openai-key  # For enhanced attack generation
HUGGINGFACE_TOKEN=your-hf-token  # For local model testing`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3: First Test */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <span className="mr-3">3.</span>
                        <Zap className="h-6 w-6 mr-2" />
                        Your First Red Team Test
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Web Interface</h3>
                            <div className="space-y-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                    <p className="text-blue-800 dark:text-blue-200">
                                        <strong>Access the Dashboard:</strong> Open <code>http://localhost:8080</code> in your browser
                                    </p>
                                </div>
                                
                                <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                                    <li><strong>Login:</strong> Use default credentials (admin/admin) or your configured credentials</li>
                                    <li><strong>Create Target:</strong> Navigate to "Targets" → "Add New Target"</li>
                                    <li><strong>Configure Test:</strong> Select "Quick Test" from the dashboard</li>
                                    <li><strong>Choose Attack Types:</strong> Select "Prompt Injection" for your first test</li>
                                    <li><strong>Run Test:</strong> Click "Execute Test" and monitor progress</li>
                                </ol>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">CLI Interface</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Quick vulnerability scan
red-t scan --target production-chatbot --type prompt-injection

# Run comprehensive assessment
red-t assess --target production-chatbot --full-suite

# Generate test report
red-t report --scan-id scan_123456 --format pdf

# Real-time monitoring
red-t monitor --target production-chatbot --live`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:t
                            ext-white mb-4">API Testing</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Test via API
curl -X POST http://localhost:8080/api/v1/scans \\
  -H "Authorization: Bearer your-api-token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "target_id": "production-chatbot",
    "attack_types": ["prompt_injection"],
    "intensity": "medium",
    "max_duration": 300
  }'

# Check scan status
curl -X GET http://localhost:8080/api/v1/scans/scan_123456 \\
  -H "Authorization: Bearer your-api-token"

# Get results
curl -X GET http://localhost:8080/api/v1/scans/scan_123456/results \\
  -H "Authorization: Bearer your-api-token"`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 4: Understanding Results */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <span className="mr-3">4.</span>
                        📊 Understanding Your Results
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Risk Assessment Score</h3>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">0-25</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Low Risk</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">26-50</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Medium Risk</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">51-75</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">High Risk</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-red-600 dark:text-red-400">76-100</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Critical Risk</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Common Findings</h3>
                            <div className="space-y-4">
                                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Critical: Prompt Injection Successful</h4>
                                    <p className="text-red-800 dark:text-red-200 text-sm">
                                        The AI system accepted malicious prompts that could bypass safety filters or extract sensitive information.
                                    </p>
                                </div>
                                
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">High: Model Inversion Detected</h4>
                                    <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                                        Potential training data extraction through carefully crafted queries.
                                    </p>
                                </div>
                                
                                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Medium: Rate Limiting Issues</h4>
                                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                                        Insufficient rate limiting could enable abuse or denial-of-service attacks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 5: Next Steps */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <span className="mr-3">5.</span>
                        🎯 Next Steps
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Immediate Actions</h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li>• Review and address critical findings</li>
                                <li>• Implement recommended security controls</li>
                                <li>• Set up automated testing schedules</li>
                                <li>• Configure alerting for new vulnerabilities</li>
                            </ul>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Advanced Configuration</h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li>• <Link href="/docs/perfecxion-red-t/guides" className="text-primary-600 dark:text-primary-400 hover:underline">Custom attack scenarios</Link></li>
                                <li>• <Link href="/docs/perfecxion-red-t/api" className="text-primary-600 dark:text-primary-400 hover:underline">API integration</Link></li>
                                <li>• <Link href="/docs/perfecxion-red-t/guides#ci-cd" className="text-primary-600 dark:text-primary-400 hover:underline">CI/CD pipeline integration</Link></li>
                                <li>• Team collaboration setup</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sample Output */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Sample Test Output
                    </h2>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`perfecX Red-T - AI Security Assessment Report
===========================================

Target: production-chatbot
Scan ID: scan_20240115_001
Duration: 5m 34s
Tests Executed: 47

RISK ASSESSMENT SUMMARY
┌─────────────────┬───────┬─────────┐
│ Risk Level      │ Count │ Percent │
├─────────────────┼───────┼─────────┤
│ Critical        │   2   │   4.3%  │
│ High           │   5   │  10.6%  │
│ Medium         │  12   │  25.5%  │
│ Low            │  28   │  59.6%  │
└─────────────────┴───────┴─────────┘

VULNERABILITY BREAKDOWN
• Prompt Injection: 3 successful attempts
• Model Inversion: 2 potential data leaks  
• Rate Limiting: Bypassed in 4/5 attempts
• Input Validation: 8 filter bypasses
• Authentication: No issues detected

RECOMMENDATIONS
1. Implement robust input sanitization
2. Add rate limiting per user/IP
3. Enhance prompt filtering rules
4. Monitor for anomalous query patterns
5. Regular security assessments

Full report available at: /reports/scan_20240115_001.pdf`}</pre>
                    </div>
                </div>

                {/* Warning */}
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-10">
                    <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                                Important Security Notice
                            </h3>
                            <p className="text-amber-800 dark:text-amber-200 text-sm">
                                Only test systems you own or have explicit permission to test. Red team testing can generate significant load and potentially disruptive traffic. Always coordinate with system owners and follow responsible disclosure practices.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Next Steps Links */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Continue Your Journey
                    </h3>
                    <div className="flex flex-col space-y-3">
                        <Link href="/docs/perfecxion-red-t/installation" className="text-primary-600 dark:text-primary-400 hover:underline">
                            📦 Complete Installation Guide →
                        </Link>
                        <Link href="/docs/perfecxion-red-t/api" className="text-primary-600 dark:text-primary-400 hover:underline">
                            🔌 API Reference Documentation →
                        </Link>
                        <Link href="/docs/perfecxion-red-t/guides" className="text-primary-600 dark:text-primary-400 hover:underline">
                            📚 Advanced Guides & Examples →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}