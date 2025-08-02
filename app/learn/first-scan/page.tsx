import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Target, Shield, AlertTriangle, CheckCircle, XCircle, Info, Zap, FileSearch, Code, GitBranch, Activity, BarChart3, Filter, Download, Play, Pause, RefreshCw, ArrowRight, FileText, Clock, Eye, TrendingUp, Users, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Your First Security Scan - Learn AI Security - perfecXion.ai',
  description: 'Step-by-step guide to running your first AI security scan and understanding the results. Learn to identify threats and vulnerabilities in your AI systems.',
  keywords: 'AI security scan, first scan, security testing, vulnerability assessment, threat detection, AI security analysis',
}

export default function FirstScanPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700 dark:text-gray-300">Your First Security Scan</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
          <Target className="h-10 w-10 text-primary-600 mr-4" />
          Your First Security Scan
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
          Step-by-step guide to running your first AI security scan and understanding the results. 
          Learn to identify threats, vulnerabilities, and security gaps in your AI systems with 
          confidence and actionable insights.
        </p>
      </div>

      {/* Scan Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
          <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">2 min</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Average Scan Time</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
          <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-900 dark:text-green-100">95%</div>
          <div className="text-sm text-green-700 dark:text-green-300">Threat Detection Rate</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
          <Eye className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">150+</div>
          <div className="text-sm text-purple-700 dark:text-purple-300">Checks Performed</div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
          <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">Real-time</div>
          <div className="text-sm text-orange-700 dark:text-orange-300">Results & Alerts</div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#preparation" className="text-primary-600 dark:text-primary-400 hover:underline">Preparation: Before Your First Scan</a></li>
          <li><a href="#scan-types" className="text-primary-600 dark:text-primary-400 hover:underline">Scan Types: Choosing the Right Approach</a></li>
          <li><a href="#running-scan" className="text-primary-600 dark:text-primary-400 hover:underline">Running Your Scan: Step-by-Step</a></li>
          <li><a href="#understanding-results" className="text-primary-600 dark:text-primary-400 hover:underline">Understanding Results: Interpreting Findings</a></li>
          <li><a href="#remediation" className="text-primary-600 dark:text-primary-400 hover:underline">Remediation: Fixing Issues</a></li>
          <li><a href="#best-practices" className="text-primary-600 dark:text-primary-400 hover:underline">Best Practices: Ongoing Scanning</a></li>
          <li><a href="#next-steps" className="text-primary-600 dark:text-primary-400 hover:underline">Next Steps: Advanced Scanning</a></li>
        </ul>
      </div>

      {/* Preparation */}
      <section id="preparation" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
          Preparation: Before Your First Scan
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Before running your first security scan, it's essential to prepare your environment and understand 
            what you're scanning. This preparation ensures accurate results and helps you interpret findings effectively.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Settings className="h-6 w-6 text-blue-600 mr-3" />
                System Preparation
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Ensure perfecXion is properly installed and configured</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Verify API keys and authentication are working</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Identify target systems and applications to scan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Review network connectivity and firewall rules</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Users className="h-6 w-6 text-green-600 mr-3" />
                Team Preparation
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Notify stakeholders about scheduled scanning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Prepare incident response procedures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Set up communication channels for alerts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Review previous security assessments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scan Types */}
      <section id="scan-types" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <FileSearch className="h-6 w-6 text-blue-500 mr-3" />
          Scan Types: Choosing the Right Approach
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            perfecXion offers multiple scan types to address different security needs. Understanding 
            each type helps you choose the most appropriate approach for your environment.
          </p>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Zap className="h-6 w-6 text-green-600 mr-3" />
                Quick Scan
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Fast, automated scan that checks for common vulnerabilities and misconfigurations. 
                Ideal for regular monitoring and initial assessments.
              </p>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Quick Scan Features</h4>
                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                  <li>• Duration: 2-5 minutes</li>
                  <li>• Coverage: Common vulnerabilities</li>
                  <li>• Resource usage: Low</li>
                  <li>• Frequency: Daily/Weekly</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Scan Command</h4>
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`curl -X POST https://api.perfecxion.ai/v1/scan \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "scan_type": "quick",
    "target": "your-ai-system",
    "options": {
      "include_prompt_injection": true,
      "include_model_security": true,
      "include_data_validation": true
    }
  }'`}
                </pre>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                Comprehensive Scan
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Thorough security assessment that examines all aspects of your AI system, including 
                deep analysis of models, data flows, and integration points.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Comprehensive Scan Features</h4>
                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                  <li>• Duration: 15-30 minutes</li>
                  <li>• Coverage: Full system analysis</li>
                  <li>• Resource usage: Medium</li>
                  <li>• Frequency: Monthly/Quarterly</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Comprehensive Scan Command</h4>
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`curl -X POST https://api.perfecxion.ai/v1/scan \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "scan_type": "comprehensive",
    "target": "your-ai-system",
    "options": {
      "include_prompt_injection": true,
      "include_model_security": true,
      "include_data_validation": true,
      "include_behavioral_analysis": true,
      "include_compliance_check": true,
      "include_performance_analysis": true
    }
  }'`}
                </pre>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Target className="h-6 w-6 text-red-600 mr-3" />
                Targeted Scan
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Focused scan on specific components or vulnerabilities. Useful for testing specific 
                security controls or investigating particular concerns.
              </p>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Targeted Scan Features</h4>
                <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                  <li>• Duration: 5-15 minutes</li>
                  <li>• Coverage: Specific components</li>
                  <li>• Resource usage: Variable</li>
                  <li>• Frequency: As needed</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Targeted Scan Example</h4>
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`curl -X POST https://api.perfecxion.ai/v1/scan \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "scan_type": "targeted",
    "target": "your-ai-system",
    "focus_areas": ["prompt_injection", "data_leakage"],
    "options": {
      "custom_prompts": ["Ignore previous instructions"],
      "sensitivity_level": "high"
    }
  }'`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Running Scan */}
      <section id="running-scan" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Play className="h-6 w-6 text-green-500 mr-3" />
          Running Your Scan: Step-by-Step
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Follow these steps to run your first security scan. We'll start with a quick scan to 
            get you familiar with the process and results.
          </p>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Code className="h-6 w-6 text-blue-600 mr-3" />
                Step 1: Prepare Your Environment
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">API Setup</h4>
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# Set your API key
export PERFECXION_API_KEY="your-api-key-here"

# Test connectivity
curl -X GET https://api.perfecxion.ai/v1/health \\
  -H "Authorization: Bearer $PERFECXION_API_KEY"`}
                </pre>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Target className="h-6 w-6 text-green-600 mr-3" />
                Step 2: Define Your Target
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Target Configuration</h4>
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# Define your target system
TARGET_SYSTEM="your-ai-application"
API_ENDPOINT="https://your-api.example.com"
MODEL_ENDPOINT="https://your-models.example.com"

# Create target configuration
cat > target-config.json << EOF
{
  "name": "$TARGET_SYSTEM",
  "endpoints": {
    "api": "$API_ENDPOINT",
    "models": "$MODEL_ENDPOINT"
  },
  "scan_options": {
    "timeout": 300,
    "max_concurrent": 10
  }
}
EOF`}
                </pre>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Play className="h-6 w-6 text-purple-600 mr-3" />
                Step 3: Execute the Scan
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Run Quick Scan</h4>
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# Start the scan
SCAN_ID=$(curl -X POST https://api.perfecxion.ai/v1/scan \\
  -H "Authorization: Bearer $PERFECXION_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d @target-config.json \\
  | jq -r '.scan_id')

echo "Scan started with ID: $SCAN_ID"

# Monitor scan progress
curl -X GET https://api.perfecxion.ai/v1/scan/$SCAN_ID/status \\
  -H "Authorization: Bearer $PERFECXION_API_KEY"`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Results */}
      <section id="understanding-results" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <BarChart3 className="h-6 w-6 text-blue-500 mr-3" />
          Understanding Results: Interpreting Findings
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Understanding scan results is crucial for effective security management. Learn to interpret 
            findings and prioritize remediation efforts based on risk levels.
          </p>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                Critical Findings
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Critical vulnerabilities require immediate attention. These pose the highest risk to your AI system.
              </p>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Example Critical Finding</h4>
                <pre className="text-sm text-red-800 dark:text-red-200 overflow-x-auto">
{`{
  "severity": "critical",
  "type": "prompt_injection",
  "location": "chat-api/v2/completions",
  "description": "Unfiltered user input passed directly to LLM",
  "impact": "Attackers can manipulate AI behavior and access restricted functions",
  "recommendation": "Implement input validation and prompt sanitization",
  "risk_score": 0.95,
  "cve_id": "CVE-2024-XXXX"
}`}
                </pre>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Info className="h-6 w-6 text-yellow-600 mr-3" />
                High Priority Findings
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                High priority issues should be addressed promptly but may not require immediate action.
              </p>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Example High Priority Finding</h4>
                <pre className="text-sm text-yellow-800 dark:text-yellow-200 overflow-x-auto">
{`{
  "severity": "high",
  "type": "data_leakage",
  "location": "training/datasets/customer-data.json",
  "description": "Sensitive PII found in training data",
  "impact": "Model may expose customer information",
  "recommendation": "Sanitize training data and implement privacy filters",
  "risk_score": 0.78
}`}
                </pre>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                Scan Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Review the overall scan results to understand your security posture.
              </p>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Example Scan Summary</h4>
                <pre className="text-sm text-green-800 dark:text-green-200 overflow-x-auto">
{`{
  "scan_id": "scan_12345",
  "status": "completed",
  "duration": "2m 34s",
  "total_findings": 27,
  "severity_breakdown": {
    "critical": 2,
    "high": 5,
    "medium": 12,
    "low": 8
  },
  "risk_score": 0.65,
  "recommendations": [
    "Implement input validation",
    "Add rate limiting",
    "Update security policies"
  ]
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remediation */}
      <section id="remediation" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Shield className="h-6 w-6 text-blue-500 mr-3" />
          Remediation: Fixing Issues
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Once you identify security issues, it's important to plan and execute a remediation strategy. 
            This section provides guidance on prioritizing and implementing fixes.
          </p>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Info className="h-6 w-6 text-blue-600 mr-3" />
                Prioritization Strategy
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Address vulnerabilities based on severity, exploitability, and business impact. Start with critical issues that could lead to immediate compromise.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Immediate Actions (Critical Issues)</h4>
                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                  <li>• Fix prompt injection vulnerability</li>
                  <li>• Add authentication to model endpoint</li>
                  <li>• Patch critical vulnerabilities</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Fix for Prompt Injection</h4>
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
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

              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Fix for Model Authentication</h4>
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
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

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 text-purple-600 mr-3" />
                Remediation Roadmap
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Plan your remediation efforts over time to ensure a secure and resilient AI system.
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Week 1: Critical Issues</h4>
                <ul className="text-gray-800 dark:text-gray-200 text-sm space-y-1">
                  <li>• Fix prompt injection, add authentication, patch critical vulnerabilities</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Week 2-3: High Priority</h4>
                <ul className="text-gray-800 dark:text-gray-200 text-sm space-y-1">
                  <li>• Implement input validation, fix data leakage, add monitoring</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Month 2: Medium Priority</h4>
                <ul className="text-gray-800 dark:text-gray-200 text-sm space-y-1">
                  <li>• Enhance logging, update dependencies, improve error handling</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ongoing: Best Practices</h4>
                <ul className="text-gray-800 dark:text-gray-200 text-sm space-y-1">
                  <li>• Regular security scans, updates, and continuous monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Users className="h-6 w-6 text-green-500 mr-3" />
          Best Practices: Ongoing Scanning
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Security is an ongoing process. Regularly scanning and improving your security posture 
            is essential to maintain a robust AI system.
          </p>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <FileText className="h-6 w-6 text-blue-600 mr-3" />
                Resources and Next Steps
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Set up automated scanning to catch vulnerabilities before they reach production.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link href="/learn/installation" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
          <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
          Installation Guide
        </Link>
        <Link href="/learn/security-best-practices" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
          Security Best Practices
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  )
}