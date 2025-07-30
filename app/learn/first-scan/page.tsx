'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Terminal, Shield, AlertTriangle, CheckCircle2, XCircle, Info, Zap, Target, FileSearch, Code, GitBranch, Activity, BarChart3, Filter, Download, Play, Pause, RefreshCw } from 'lucide-react'

export default function FirstScanPage() {
  const [activeTab, setActiveTab] = useState('preparation')
  const [scanStatus, setScanStatus] = useState<'idle' | 'running' | 'complete'>('idle')
  const [selectedScanType, setSelectedScanType] = useState('quick')
  const [expandedResult, setExpandedResult] = useState<string | null>(null)

  const startScan = () => {
    setScanStatus('running')
    setTimeout(() => {
      setScanStatus('complete')
    }, 3000)
  }

  const toggleResult = (result: string) => {
    setExpandedResult(expandedResult === result ? null : result)
  }

  const mockScanResults = {
    critical: 2,
    high: 5,
    medium: 12,
    low: 8,
    info: 15,
    totalScanned: 156,
    timeElapsed: '2m 34s',
    threats: [
      {
        id: '1',
        severity: 'critical',
        type: 'Prompt Injection',
        location: 'chat-api/v2/completions',
        description: 'Unfiltered user input passed directly to LLM',
        impact: 'Attackers can manipulate AI behavior and access restricted functions',
        recommendation: 'Implement input validation and prompt sanitization'
      },
      {
        id: '2',
        severity: 'critical',
        type: 'Model Access Control',
        location: 'models/gpt-4/inference',
        description: 'Missing authentication on model endpoint',
        impact: 'Unauthorized access to proprietary AI models',
        recommendation: 'Add API key validation and rate limiting'
      },
      {
        id: '3',
        severity: 'high',
        type: 'Data Leakage',
        location: 'training/datasets/customer-data.json',
        description: 'Sensitive PII found in training data',
        impact: 'Model may expose customer information',
        recommendation: 'Sanitize training data and implement privacy filters'
      },
      {
        id: '4',
        severity: 'high',
        type: 'Adversarial Input',
        location: 'image-classifier/predict',
        description: 'Model vulnerable to adversarial examples',
        impact: 'Attackers can cause misclassification',
        recommendation: 'Add adversarial example detection'
      },
      {
        id: '5',
        severity: 'medium',
        type: 'Rate Limiting',
        location: 'api/v1/*',
        description: 'No rate limiting on API endpoints',
        impact: 'Potential for abuse and DoS attacks',
        recommendation: 'Implement rate limiting per API key'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Your First Security Scan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Step-by-step guide to running your first AI security scan and understanding the results
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Target className="h-5 w-5" />
                <span>Guided Scanning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-5 w-5" />
                <span>Real-time Analysis</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <BarChart3 className="h-5 w-5" />
                <span>Actionable Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'preparation', label: 'Preparation', icon: FileSearch },
              { id: 'scanning', label: 'Running Scan', icon: Activity },
              { id: 'results', label: 'Understanding Results', icon: BarChart3 },
              { id: 'remediation', label: 'Remediation', icon: Shield },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-4 border-b-2 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Preparation Section */}
        {activeTab === 'preparation' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Before You Start
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                        What You'll Need
                      </h3>
                      <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                        <li>• API endpoints or application URLs to scan</li>
                        <li>• API keys or authentication credentials</li>
                        <li>• List of AI models and their configurations</li>
                        <li>• Access to application logs (optional but recommended)</li>
                        <li>• 15-30 minutes for initial scan and review</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Step 1: Define Scan Scope
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Identify what you want to scan. Start with a focused scope for your first scan:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">API Endpoints</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li>• Chat completion endpoints</li>
                        <li>• Model inference APIs</li>
                        <li>• Training data upload endpoints</li>
                        <li>• Fine-tuning APIs</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">AI Components</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li>• Language models (GPT, BERT, etc.)</li>
                        <li>• Image classifiers</li>
                        <li>• Voice recognition systems</li>
                        <li>• Recommendation engines</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Step 2: Gather Information
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Create a scan configuration file
cat > first-scan-config.yaml << EOF
scan:
  name: "Initial AI Security Assessment"
  type: "comprehensive"
  
targets:
  - type: "api"
    url: "https://api.example.com/v1/chat/completions"
    auth:
      type: "bearer"
      token: "$API_KEY"
      
  - type: "model"
    name: "gpt-4-custom"
    endpoint: "https://models.example.com/inference"
    
  - type: "dataset"
    path: "s3://ml-datasets/training-data/"
    
security_checks:
  - prompt_injection
  - model_extraction
  - data_poisoning
  - adversarial_robustness
  - access_control
  - rate_limiting
  
output:
  format: "json"
  report: "first-scan-report.html"
EOF`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Step 3: Set Up Test Environment
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    For your first scan, we recommend using a test or staging environment:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                      <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-amber-900 dark:text-amber-100">Important</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 mt-1">
                          Never run your first scan on production systems. Some security tests may trigger rate limits or alerts.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100">
{`# Clone your production config for testing
cp production.env test-scan.env

# Update endpoints to point to test environment
sed -i 's/api.example.com/test-api.example.com/g' test-scan.env

# Verify test environment is isolated
curl -I https://test-api.example.com/health`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Choose Scan Type
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    id: 'quick',
                    name: 'Quick Scan',
                    duration: '5-10 minutes',
                    description: 'Basic security checks for common vulnerabilities',
                    checks: ['Prompt injection', 'Basic access control', 'Input validation', 'Error handling'],
                    recommended: true
                  },
                  {
                    id: 'comprehensive',
                    name: 'Comprehensive Scan',
                    duration: '30-60 minutes',
                    description: 'Deep analysis of all security aspects',
                    checks: ['All quick scan checks', 'Model robustness', 'Data leakage', 'Advanced threats'],
                    recommended: false
                  },
                  {
                    id: 'custom',
                    name: 'Custom Scan',
                    duration: 'Varies',
                    description: 'Select specific security checks to run',
                    checks: ['Choose from 50+ security tests', 'Configure test parameters', 'Focus on specific risks'],
                    recommended: false
                  }
                ].map((scanType) => (
                  <button
                    key={scanType.id}
                    onClick={() => setSelectedScanType(scanType.id)}
                    className={`relative p-6 rounded-lg border-2 text-left transition-all ${
                      selectedScanType === scanType.id
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    {scanType.recommended && (
                      <div className="absolute -top-3 -right-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        Recommended
                      </div>
                    )}
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{scanType.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{scanType.duration}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{scanType.description}</p>
                    <ul className="space-y-1">
                      {scanType.checks.map((check, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          {check}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Scanning Section */}
        {activeTab === 'scanning' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Running Your First Scan
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Method 1: Web Dashboard
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <ol className="space-y-4">
                      <li className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">1</span>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Navigate to Scan Dashboard</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Go to https://dashboard.perfecxion.ai/scans/new</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">2</span>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Select Scan Type</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Choose "Quick Scan" for your first assessment</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">3</span>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Enter Target Details</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Provide API endpoints and authentication details</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">4</span>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Start Scan</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Click "Start Scan" and monitor progress in real-time</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Method 2: Command Line
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Run a quick scan using the CLI
perfecxion scan --type quick --config first-scan-config.yaml

# Monitor scan progress
perfecxion scan status --follow

# Example output:
[2024-01-15 10:23:45] Starting AI Security Scan...
[2024-01-15 10:23:46] ✓ Loaded configuration
[2024-01-15 10:23:47] ✓ Authenticated with API
[2024-01-15 10:23:48] Scanning 5 endpoints...
[2024-01-15 10:23:52] [1/5] Testing /v1/chat/completions...
[2024-01-15 10:23:55] ⚠ Found: Potential prompt injection vulnerability
[2024-01-15 10:23:58] [2/5] Testing /v1/models/list...
[2024-01-15 10:24:02] ✓ Passed all security checks
[2024-01-15 10:24:05] [3/5] Testing /v1/fine-tune...
[2024-01-15 10:24:09] ⚠ Found: Missing rate limiting
[2024-01-15 10:24:12] [4/5] Testing /v1/embeddings...
[2024-01-15 10:24:15] ✓ Passed all security checks
[2024-01-15 10:24:18] [5/5] Testing /v1/images/generate...
[2024-01-15 10:24:22] ⚠ Found: Insufficient input validation

Scan completed in 37 seconds
Found 3 issues (0 critical, 2 high, 1 medium)`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Method 3: API Integration
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Start a scan via API
curl -X POST https://api.perfecxion.ai/v1/scans \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "First Security Scan",
    "type": "quick",
    "targets": [
      {
        "type": "api",
        "url": "https://api.example.com/v1/chat/completions",
        "auth": {
          "type": "bearer",
          "token": "YOUR_APP_API_KEY"
        }
      }
    ],
    "notifications": {
      "email": "security@example.com",
      "webhook": "https://hooks.example.com/security"
    }
  }'

# Response:
{
  "scan_id": "scan_abc123",
  "status": "running",
  "created_at": "2024-01-15T10:23:45Z",
  "estimated_completion": "2024-01-15T10:28:00Z",
  "progress_url": "https://api.perfecxion.ai/v1/scans/scan_abc123/progress"
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Scan Demo */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Live Scan Demo
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Demo Scan - E-commerce AI Assistant</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Scanning chat API and recommendation engine</p>
                  </div>
                  <button
                    onClick={startScan}
                    disabled={scanStatus === 'running'}
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${
                      scanStatus === 'idle'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : scanStatus === 'running'
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-green-600 text-white'
                    }`}
                  >
                    {scanStatus === 'idle' && (
                      <span className="flex items-center gap-2">
                        <Play className="h-4 w-4" />
                        Start Scan
                      </span>
                    )}
                    {scanStatus === 'running' && (
                      <span className="flex items-center gap-2">
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        Scanning...
                      </span>
                    )}
                    {scanStatus === 'complete' && (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Complete
                      </span>
                    )}
                  </button>
                </div>

                {scanStatus !== 'idle' && (
                  <div className="space-y-4">
                    <div className="bg-gray-900 rounded-lg p-4 h-64 overflow-y-auto">
                      <div className="space-y-2 font-mono text-sm">
                        <div className="text-gray-400">[2024-01-15 10:23:45] Initializing security scan...</div>
                        <div className="text-green-400">[2024-01-15 10:23:46] ✓ Connected to target system</div>
                        <div className="text-green-400">[2024-01-15 10:23:47] ✓ Authentication successful</div>
                        <div className="text-gray-400">[2024-01-15 10:23:48] Analyzing 5 API endpoints...</div>
                        <div className="text-yellow-400">[2024-01-15 10:23:52] ⚠ Testing prompt injection resistance...</div>
                        <div className="text-red-400">[2024-01-15 10:23:55] ✗ CRITICAL: Unfiltered user input in /chat/completions</div>
                        <div className="text-yellow-400">[2024-01-15 10:23:58] ⚠ Testing model access controls...</div>
                        <div className="text-red-400">[2024-01-15 10:24:01] ✗ CRITICAL: Missing authentication on /models/inference</div>
                        <div className="text-green-400">[2024-01-15 10:24:04] ✓ Rate limiting properly configured</div>
                        <div className="text-yellow-400">[2024-01-15 10:24:07] ⚠ Checking for data leakage...</div>
                        <div className="text-orange-400">[2024-01-15 10:24:10] ! HIGH: PII found in training data</div>
                        {scanStatus === 'complete' && (
                          <>
                            <div className="text-gray-400">[2024-01-15 10:24:13] Generating security report...</div>
                            <div className="text-green-400">[2024-01-15 10:24:15] ✓ Scan completed successfully</div>
                            <div className="text-white mt-2">Found 42 security issues: 2 Critical, 5 High, 12 Medium, 8 Low, 15 Info</div>
                          </>
                        )}
                      </div>
                    </div>

                    {scanStatus === 'complete' && (
                      <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                          <div>
                            <p className="font-medium text-green-900 dark:text-green-100">Scan Complete</p>
                            <p className="text-sm text-green-800 dark:text-green-200">View detailed results in the Results tab</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setActiveTab('results')}
                          className="text-green-600 dark:text-green-400 font-medium hover:underline"
                        >
                          View Results →
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* What Happens During a Scan */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                What Happens During a Scan?
              </h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      Phase 1: Discovery
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">Identify all AI components and endpoints</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">Map model architectures and data flows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">Detect authentication mechanisms</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      Phase 2: Analysis
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">Test for prompt injection vulnerabilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">Check model robustness and defenses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">Evaluate data privacy controls</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      Phase 3: Testing
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">Execute security test cases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">Simulate attack scenarios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">Verify security controls</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      Phase 4: Reporting
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">Compile findings and risk scores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">Generate remediation recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">Create actionable security report</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Section */}
        {activeTab === 'results' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Understanding Your Scan Results
              </h2>

              {/* Summary Dashboard */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-red-700 dark:text-red-300 font-medium">Critical</span>
                    <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <p className="text-3xl font-bold text-red-900 dark:text-red-100">{mockScanResults.critical}</p>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-orange-700 dark:text-orange-300 font-medium">High</span>
                    <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <p className="text-3xl font-bold text-orange-900 dark:text-orange-100">{mockScanResults.high}</p>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-yellow-700 dark:text-yellow-300 font-medium">Medium</span>
                    <Info className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <p className="text-3xl font-bold text-yellow-900 dark:text-yellow-100">{mockScanResults.medium}</p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-700 dark:text-blue-300 font-medium">Low</span>
                    <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">{mockScanResults.low}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Scanned</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{mockScanResults.totalScanned} items</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Time Elapsed</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{mockScanResults.timeElapsed}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Download className="h-4 w-4" />
                  Export Report
                </button>
              </div>

              {/* Detailed Findings */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Security Findings
                </h3>
                
                {mockScanResults.threats.map((threat) => (
                  <div
                    key={threat.id}
                    className={`border rounded-lg overflow-hidden ${
                      threat.severity === 'critical'
                        ? 'border-red-300 dark:border-red-700'
                        : threat.severity === 'high'
                        ? 'border-orange-300 dark:border-orange-700'
                        : 'border-yellow-300 dark:border-yellow-700'
                    }`}
                  >
                    <button
                      onClick={() => toggleResult(threat.id)}
                      className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          threat.severity === 'critical'
                            ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200'
                            : threat.severity === 'high'
                            ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200'
                        }`}>
                          {threat.severity.toUpperCase()}
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{threat.type}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{threat.location}</p>
                        </div>
                      </div>
                      <ArrowRight className={`h-5 w-5 text-gray-400 transition-transform ${
                        expandedResult === threat.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                    
                    {expandedResult === threat.id && (
                      <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="pt-4 space-y-4">
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">Description</h5>
                            <p className="text-gray-600 dark:text-gray-400">{threat.description}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">Impact</h5>
                            <p className="text-gray-600 dark:text-gray-400">{threat.impact}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">Recommendation</h5>
                            <p className="text-gray-600 dark:text-gray-400">{threat.recommendation}</p>
                          </div>
                          
                          <div className="flex gap-3 pt-2">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                              View Details
                            </button>
                            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm text-gray-700 dark:text-gray-300">
                              Create Ticket
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Understanding Severity Levels */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Understanding Severity Levels
              </h2>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <XCircle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-900 dark:text-red-100 mb-1">Critical</h3>
                    <p className="text-red-800 dark:text-red-200">
                      Immediate action required. These vulnerabilities pose an immediate threat and could lead to system compromise, data breaches, or complete AI system manipulation.
                    </p>
                    <p className="text-sm text-red-700 dark:text-red-300 mt-2">
                      <strong>Examples:</strong> Unfiltered prompt injection, exposed model weights, missing authentication
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">High</h3>
                    <p className="text-orange-800 dark:text-orange-200">
                      Should be addressed soon. These issues represent significant security risks that could be exploited with moderate effort.
                    </p>
                    <p className="text-sm text-orange-700 dark:text-orange-300 mt-2">
                      <strong>Examples:</strong> Weak input validation, data leakage risks, inadequate rate limiting
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <Info className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">Medium</h3>
                    <p className="text-yellow-800 dark:text-yellow-200">
                      Should be included in regular security updates. These represent potential vulnerabilities that require specific conditions to exploit.
                    </p>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-2">
                      <strong>Examples:</strong> Verbose error messages, weak logging, outdated dependencies
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Low</h3>
                    <p className="text-blue-800 dark:text-blue-200">
                      Best practice improvements. These are minor issues that improve overall security posture but pose minimal immediate risk.
                    </p>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                      <strong>Examples:</strong> Missing security headers, suboptimal configurations, informational findings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Remediation Section */}
        {activeTab === 'remediation' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Remediation Planning
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                        Prioritization Strategy
                      </h3>
                      <p className="text-blue-800 dark:text-blue-200">
                        Address vulnerabilities based on severity, exploitability, and business impact. Start with critical issues that could lead to immediate compromise.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Immediate Actions (Critical Issues)
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Fix Prompt Injection Vulnerability
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Location: /chat-api/v2/completions
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200 rounded-full text-sm font-medium">
                          Critical
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Quick Fix:</p>
                          <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                            <pre className="text-sm text-gray-100">
{`# Add input validation before sending to LLM
def sanitize_prompt(user_input):
    # Remove system instructions
    forbidden_patterns = [
        r"ignore.*previous.*instructions",
        r"system.*prompt",
        r"you are.*assistant"
    ]
    
    for pattern in forbidden_patterns:
        if re.search(pattern, user_input, re.IGNORECASE):
            raise SecurityException("Potential prompt injection detected")
    
    return user_input`}
                            </pre>
                          </div>
                        </div>
                        
                        <div>
                          <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Long-term Solution:</p>
                          <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                            <li>• Implement comprehensive prompt filtering library</li>
                            <li>• Use prompt templates with strict variable substitution</li>
                            <li>• Add context isolation between user and system prompts</li>
                            <li>• Deploy real-time prompt injection detection</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Add Authentication to Model Endpoint
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Location: /models/gpt-4/inference
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200 rounded-full text-sm font-medium">
                          Critical
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Quick Fix:</p>
                          <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                            <pre className="text-sm text-gray-100">
{`# Add API key validation middleware
@app.before_request
def validate_api_key():
    if request.path.startswith('/models/'):
        api_key = request.headers.get('X-API-Key')
        if not api_key or not is_valid_key(api_key):
            abort(401, 'Invalid or missing API key')
            
# Configure rate limiting
limiter = Limiter(
    app,
    key_func=lambda: request.headers.get('X-API-Key'),
    default_limits=["100 per hour", "10 per minute"]
)`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Remediation Roadmap
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Week 1: Critical Issues</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Fix prompt injection, add authentication, patch critical vulnerabilities
                        </p>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-gray-400" />
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Week 2-3: High Priority</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Implement input validation, fix data leakage, add monitoring
                        </p>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-gray-400" />
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Month 2: Medium Priority</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Enhance logging, update dependencies, improve error handling
                        </p>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-gray-400" />
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Ongoing: Best Practices</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Regular security scans, updates, and continuous monitoring
                        </p>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources and Next Steps */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Resources and Next Steps
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/learn/prompt-injection" className="block group">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-lg transition-all">
                    <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Prompt Injection Defense
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Deep dive into preventing and detecting prompt injection attacks.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      Learn more →
                    </span>
                  </div>
                </Link>

                <Link href="/learn/model-security" className="block group">
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg hover:shadow-lg transition-all">
                    <Code className="h-8 w-8 text-green-600 dark:text-green-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Model Security
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Comprehensive guide to securing AI models and infrastructure.
                    </p>
                    <span className="text-green-600 dark:text-green-400 font-medium group-hover:underline">
                      Explore guide →
                    </span>
                  </div>
                </Link>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white">
                <h3 className="text-xl font-semibold mb-3">Ready for Continuous Security?</h3>
                <p className="mb-4">
                  Set up automated scanning to catch vulnerabilities before they reach production.
                </p>
                <Link
                  href="/learn/configuration"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Configure Automated Scanning
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}