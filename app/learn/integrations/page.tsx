'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Package, Code, Cloud, GitBranch, Webhook, Database, Server, Lock, Zap, Globe, Terminal, Settings, CheckCircle2, AlertCircle, Info } from 'lucide-react'

export default function IntegrationsPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedIntegration, setSelectedIntegration] = useState('api')
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const integrationTypes = {
    api: {
      name: 'REST API',
      description: 'RESTful API integration for real-time security scanning',
      languages: ['Python', 'JavaScript', 'Go', 'Java'],
      useCases: ['Real-time scanning', 'Batch processing', 'Async operations']
    },
    sdk: {
      name: 'SDK Libraries',
      description: 'Native SDKs for seamless integration into your applications',
      languages: ['Python', 'Node.js', 'Java', 'C#', 'Go'],
      useCases: ['Embedded security', 'Custom workflows', 'High performance']
    },
    webhook: {
      name: 'Webhooks',
      description: 'Event-driven integration for automated responses',
      languages: ['Any'],
      useCases: ['Event notifications', 'Automated workflows', 'Real-time alerts']
    },
    plugin: {
      name: 'Platform Plugins',
      description: 'Pre-built integrations for popular platforms',
      languages: ['Platform-specific'],
      useCases: ['Quick deployment', 'No-code setup', 'Platform native']
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
              Integration Patterns
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Seamlessly integrate AI security into your existing infrastructure and workflows
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Package className="h-5 w-5" />
                <span>Multiple SDKs</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Webhook className="h-5 w-5" />
                <span>Event-Driven</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Cloud className="h-5 w-5" />
                <span>Cloud Native</span>
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
              { id: 'overview', label: 'Overview', icon: Globe },
              { id: 'api', label: 'API Integration', icon: Code },
              { id: 'sdk', label: 'SDK Usage', icon: Package },
              { id: 'cicd', label: 'CI/CD Pipeline', icon: GitBranch },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-4 border-b-2 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400'
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
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Integration Architecture
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  perfecXion provides multiple integration patterns to fit seamlessly into your existing infrastructure. Whether you need real-time API calls, embedded SDK functionality, or event-driven webhooks, our platform adapts to your architecture.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                    <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Real-Time Protection
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Integrate security checks directly into your AI pipeline with sub-100ms latency for immediate threat detection and prevention.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
                    <Cloud className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Cloud Native Design
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Built for modern cloud architectures with support for containerization, microservices, and serverless deployments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Integration Options
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {Object.entries(integrationTypes).map(([key, integration]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedIntegration(key)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedIntegration === key
                        ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-400'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{integration.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{integration.description}</p>
                  </button>
                ))}
              </div>

              {selectedIntegration && (
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {integrationTypes[selectedIntegration].name} Details
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Supported Languages</h4>
                        <div className="flex flex-wrap gap-2">
                          {integrationTypes[selectedIntegration].languages.map((lang) => (
                            <span key={lang} className="px-3 py-1 bg-white dark:bg-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Common Use Cases</h4>
                        <ul className="space-y-1">
                          {integrationTypes[selectedIntegration].useCases.map((useCase) => (
                            <li key={useCase} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Common Integration Patterns
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Synchronous API Gateway Pattern
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    Place perfecXion as a security gateway in front of your AI services:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# API Gateway Pattern
┌─────────┐     ┌──────────────┐     ┌────────────┐
│ Client  │────▶│  perfecXion  │────▶│ AI Service │
└─────────┘     │   Gateway    │     └────────────┘
                └──────────────┘
                       │
                       ▼
                ┌──────────────┐
                │   Security   │
                │   Analysis   │
                └──────────────┘`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Asynchronous Queue Pattern
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    Process security checks asynchronously for high-throughput scenarios:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Queue-Based Pattern
┌─────────┐     ┌─────────┐     ┌──────────────┐
│ Client  │────▶│  Queue  │────▶│  perfecXion  │
└─────────┘     └─────────┘     │   Worker     │
                                └──────────────┘
                                       │
                ┌─────────┐            │
                │   AI    │◀───────────┘
                │ Service │
                └─────────┘`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Sidecar Pattern
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    Deploy perfecXion as a sidecar container alongside your AI services:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Kubernetes Sidecar Pattern
apiVersion: v1
kind: Pod
metadata:
  name: ai-service
spec:
  containers:
  - name: ai-app
    image: myapp:latest
    ports:
    - containerPort: 8080
  - name: perfecxion-sidecar
    image: perfecxion/security:latest
    ports:
    - containerPort: 9090
    env:
    - name: TARGET_PORT
      value: "8080"`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* API Integration Section */}
        {activeTab === 'api' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                REST API Integration
              </h2>

              <div className="space-y-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                        API Overview
                      </h3>
                      <p className="text-purple-800 dark:text-purple-200">
                        The perfecXion REST API provides comprehensive endpoints for security scanning, threat analysis, and compliance monitoring. All API calls use HTTPS and require authentication via API keys.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Authentication
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# API Authentication
curl -X POST https://api.perfecxion.ai/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "your-api-key",
    "api_secret": "your-api-secret"
  }'

# Response
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "def50200..."
}

# Use token in subsequent requests
curl -X POST https://api.perfecxion.ai/v1/scan \\
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIs..." \\
  -H "Content-Type: application/json"`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Core Endpoints
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        POST /v1/scan/prompt
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Analyze prompts for security threats in real-time
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
{`# Python Example
import requests

def scan_prompt(prompt, context=None):
    response = requests.post(
        "https://api.perfecxion.ai/v1/scan/prompt",
        headers={
            "Authorization": f"Bearer {access_token}",
            "Content-Type": "application/json"
        },
        json={
            "prompt": prompt,
            "context": context,
            "model": "gpt-4",
            "scan_types": ["injection", "jailbreak", "pii"],
            "real_time": True
        }
    )
    
    result = response.json()
    
    if result["risk_score"] > 0.7:
        # High risk detected
        return {
            "allowed": False,
            "reason": result["threats_detected"],
            "sanitized_prompt": result.get("sanitized_version")
        }
    
    return {"allowed": True, "prompt": prompt}`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        POST /v1/scan/model
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Comprehensive model security assessment
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
{`# Node.js Example
const axios = require('axios');

async function scanModel(modelPath, modelType) {
    try {
        const response = await axios.post(
            'https://api.perfecxion.ai/v1/scan/model',
            {
                model_url: modelPath,
                model_type: modelType,
                checks: [
                    "backdoor_detection",
                    "adversarial_robustness",
                    "privacy_leakage",
                    "model_extraction_risk"
                ],
                compliance: ["gdpr", "eu_ai_act"]
            },
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        
        return response.data;
    } catch (error) {
        console.error('Model scan failed:', error);
        throw error;
    }
}

// Usage
const results = await scanModel(
    's3://models/production/classifier-v2.pkl',
    'sklearn_classifier'
);

console.log('Security Score:', results.security_score);
console.log('Vulnerabilities:', results.vulnerabilities);`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        POST /v1/monitor/stream
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Real-time monitoring of AI interactions
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
{`# Go Example
package main

import (
    "encoding/json"
    "fmt"
    "github.com/gorilla/websocket"
)

type MonitorEvent struct {
    SessionID   string      \`json:"session_id"\`
    Timestamp   int64       \`json:"timestamp"\`
    EventType   string      \`json:"event_type"\`
    Prompt      string      \`json:"prompt"\`
    Response    string      \`json:"response"\`
    Metadata    interface{} \`json:"metadata"\`
}

func streamMonitoring(apiKey string) error {
    url := "wss://api.perfecxion.ai/v1/monitor/stream"
    
    header := http.Header{}
    header.Add("Authorization", "Bearer " + apiKey)
    
    conn, _, err := websocket.DefaultDialer.Dial(url, header)
    if err != nil {
        return err
    }
    defer conn.Close()
    
    // Send monitoring events
    event := MonitorEvent{
        SessionID: "user-123-session-456",
        Timestamp: time.Now().Unix(),
        EventType: "prompt_submission",
        Prompt:    userPrompt,
        Response:  aiResponse,
    }
    
    if err := conn.WriteJSON(event); err != nil {
        return err
    }
    
    // Receive analysis results
    var result map[string]interface{}
    if err := conn.ReadJSON(&result); err != nil {
        return err
    }
    
    if result["action"] == "block" {
        // Handle security violation
        fmt.Printf("Security alert: %v\\n", result["reason"])
    }
    
    return nil
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Batch Processing
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Batch API for High-Volume Processing
import asyncio
import aiohttp

class PerfecXionBatchClient:
    def __init__(self, api_key, batch_size=100):
        self.api_key = api_key
        self.batch_size = batch_size
        self.base_url = "https://api.perfecxion.ai/v1"
        
    async def batch_scan_prompts(self, prompts):
        """Scan multiple prompts in parallel batches"""
        async with aiohttp.ClientSession() as session:
            batches = [
                prompts[i:i + self.batch_size]
                for i in range(0, len(prompts), self.batch_size)
            ]
            
            tasks = []
            for batch in batches:
                task = self._scan_batch(session, batch)
                tasks.append(task)
                
            results = await asyncio.gather(*tasks)
            
            # Flatten results
            all_results = []
            for batch_result in results:
                all_results.extend(batch_result)
                
            return all_results
            
    async def _scan_batch(self, session, batch):
        """Scan a single batch of prompts"""
        async with session.post(
            f"{self.base_url}/batch/scan",
            headers={
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            },
            json={
                "items": [
                    {"id": i, "prompt": prompt}
                    for i, prompt in enumerate(batch)
                ],
                "scan_config": {
                    "parallel": True,
                    "timeout_per_item": 5000,
                    "fail_fast": False
                }
            }
        ) as response:
            return await response.json()

# Usage
client = PerfecXionBatchClient(api_key="your-key")

prompts = load_prompts_from_database()  # Thousands of prompts
results = await client.batch_scan_prompts(prompts)

# Process results
high_risk_prompts = [
    r for r in results 
    if r['risk_score'] > 0.8
]`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Error Handling & Retries
              </h2>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-100">
{`# Robust API Client with Retries
import time
from typing import Dict, Any, Optional
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

class PerfecXionClient:
    def __init__(self, api_key: str, timeout: int = 30):
        self.api_key = api_key
        self.base_url = "https://api.perfecxion.ai/v1"
        self.timeout = timeout
        
        # Configure retry strategy
        retry_strategy = Retry(
            total=3,
            backoff_factor=1,
            status_forcelist=[429, 500, 502, 503, 504],
            allowed_methods=["GET", "POST", "PUT", "DELETE"]
        )
        
        adapter = HTTPAdapter(max_retries=retry_strategy)
        self.session = requests.Session()
        self.session.mount("https://", adapter)
        self.session.headers.update({
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        })
        
    def scan(self, endpoint: str, data: Dict[str, Any]) -> Dict[str, Any]:
        """Make API call with error handling"""
        try:
            response = self.session.post(
                f"{self.base_url}/{endpoint}",
                json=data,
                timeout=self.timeout
            )
            
            # Handle rate limiting
            if response.status_code == 429:
                retry_after = int(response.headers.get("Retry-After", 60))
                time.sleep(retry_after)
                return self.scan(endpoint, data)  # Retry
                
            response.raise_for_status()
            return response.json()
            
        except requests.exceptions.Timeout:
            return {
                "error": "timeout",
                "message": "Request timed out",
                "fallback": self._get_fallback_response(endpoint)
            }
            
        except requests.exceptions.RequestException as e:
            return {
                "error": "request_failed",
                "message": str(e),
                "fallback": self._get_fallback_response(endpoint)
            }
            
    def _get_fallback_response(self, endpoint: str) -> Dict[str, Any]:
        """Provide safe fallback when API is unavailable"""
        if "prompt" in endpoint:
            # Conservative fallback - mark as potentially risky
            return {
                "risk_score": 0.5,
                "action": "review",
                "reason": "Unable to perform full security scan"
            }
        return {"status": "degraded", "action": "allow_with_logging"}`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* SDK Usage Section */}
        {activeTab === 'sdk' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                SDK Libraries
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Python SDK
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Installation</h4>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <pre className="text-sm text-gray-100">pip install perfecxion-security</pre>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Python SDK Usage
from perfecxion import SecurityClient, ScanConfig
from perfecxion.monitors import RealtimeMonitor
from perfecxion.exceptions import SecurityViolation

# Initialize client
client = SecurityClient(
    api_key="your-api-key",
    environment="production",
    async_mode=True
)

# Configure scanning
config = ScanConfig(
    threat_types=["injection", "jailbreak", "data_leakage"],
    sensitivity="high",
    compliance=["gdpr", "ccpa"],
    real_time=True
)

# Synchronous scanning
try:
    result = client.scan_prompt(
        prompt="User input here",
        context={"user_id": "123", "session": "abc"},
        config=config
    )
    
    if result.is_safe:
        # Process the prompt
        processed_prompt = result.sanitized_prompt
    else:
        # Handle threats
        print(f"Threats detected: {result.threats}")
        print(f"Risk score: {result.risk_score}")
        
except SecurityViolation as e:
    # Critical security violation
    log_security_incident(e)
    
# Asynchronous batch scanning
async def process_batch(prompts):
    results = await client.batch_scan_async(
        prompts=prompts,
        config=config,
        parallel_workers=10
    )
    
    safe_prompts = [r.prompt for r in results if r.is_safe]
    return safe_prompts

# Real-time monitoring
monitor = RealtimeMonitor(client)

@monitor.on_threat_detected
def handle_threat(event):
    print(f"Threat detected: {event.threat_type}")
    # Send alert, block request, etc.
    
@monitor.on_anomaly
def handle_anomaly(event):
    print(f"Anomaly detected: {event.description}")
    
# Start monitoring
monitor.start()`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Node.js/TypeScript SDK
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Installation</h4>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <pre className="text-sm text-gray-100">npm install @perfecxion/security-sdk</pre>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`// TypeScript SDK Usage
import { 
    PerfecXionClient, 
    ScanConfig, 
    ThreatLevel,
    SecurityMiddleware 
} from '@perfecxion/security-sdk';

// Initialize client
const client = new PerfecXionClient({
    apiKey: process.env.PERFECXION_API_KEY,
    region: 'us-east-1',
    timeout: 5000,
    retries: 3
});

// Express.js middleware
const securityMiddleware = new SecurityMiddleware(client, {
    blockOnHighRisk: true,
    logAllRequests: true,
    customValidators: [
        async (req) => {
            // Custom validation logic
            return { valid: true };
        }
    ]
});

app.use('/api/ai/*', securityMiddleware.protect());

// Direct API usage
async function processUserPrompt(prompt: string, userId: string) {
    try {
        const result = await client.scanPrompt({
            prompt,
            metadata: {
                userId,
                timestamp: Date.now(),
                source: 'web-app'
            },
            config: {
                threatTypes: ['injection', 'jailbreak'],
                maxProcessingTime: 200, // ms
                returnSanitized: true
            }
        });
        
        if (result.riskLevel === ThreatLevel.Critical) {
            // Block and alert
            await alertSecurityTeam(result);
            throw new Error('Security violation detected');
        }
        
        if (result.riskLevel === ThreatLevel.High) {
            // Log and sanitize
            logger.warn('High risk prompt detected', result);
            return result.sanitizedPrompt;
        }
        
        return prompt;
        
    } catch (error) {
        logger.error('Security scan failed', error);
        // Fail-safe behavior
        return null;
    }
}

// Stream processing
const stream = client.createMonitoringStream();

stream.on('threat', (event) => {
    console.log('Threat detected:', event);
    // React to threats in real-time
});

stream.on('anomaly', (event) => {
    console.log('Anomaly detected:', event);
});

stream.on('error', (error) => {
    console.error('Stream error:', error);
});

// Send events to stream
stream.send({
    type: 'prompt',
    data: {
        prompt: userInput,
        response: aiResponse,
        model: 'gpt-4'
    }
});`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Java SDK
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Maven Installation</h4>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <pre className="text-sm text-gray-100">
{`<dependency>
    <groupId>ai.perfecxion</groupId>
    <artifactId>security-sdk</artifactId>
    <version>2.1.0</version>
</dependency>`}
                      </pre>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`// Java SDK Usage
import ai.perfecxion.SecurityClient;
import ai.perfecxion.ScanRequest;
import ai.perfecxion.ScanResult;
import ai.perfecxion.ThreatType;
import ai.perfecxion.annotations.SecureEndpoint;

@Component
public class AISecurityService {
    
    private final SecurityClient securityClient;
    
    public AISecurityService() {
        this.securityClient = SecurityClient.builder()
            .apiKey(System.getenv("PERFECXION_API_KEY"))
            .region("us-east-1")
            .connectionTimeout(5000)
            .build();
    }
    
    // Spring Boot integration
    @SecureEndpoint(
        threatTypes = {ThreatType.INJECTION, ThreatType.JAILBREAK},
        blockOnHighRisk = true
    )
    @PostMapping("/api/chat")
    public ResponseEntity<ChatResponse> processChat(
        @RequestBody ChatRequest request
    ) {
        // Annotation automatically scans the request
        return ResponseEntity.ok(
            chatService.process(request)
        );
    }
    
    // Manual scanning
    public CompletableFuture<String> scanPromptAsync(
        String prompt, 
        Map<String, Object> context
    ) {
        ScanRequest request = ScanRequest.builder()
            .prompt(prompt)
            .context(context)
            .scanTypes(Arrays.asList(
                ThreatType.INJECTION,
                ThreatType.DATA_LEAKAGE,
                ThreatType.JAILBREAK
            ))
            .timeout(Duration.ofMillis(200))
            .build();
            
        return securityClient.scanAsync(request)
            .thenApply(result -> {
                if (result.getRiskScore() > 0.7) {
                    throw new SecurityException(
                        "High risk detected: " + result.getThreats()
                    );
                }
                return result.getSanitizedPrompt();
            });
    }
    
    // Batch processing with reactive streams
    @Service
    public class BatchSecurityProcessor {
        
        public Flux<ScanResult> processBatch(
            Flux<String> prompts
        ) {
            return prompts
                .buffer(100) // Batch size
                .flatMap(batch -> 
                    securityClient.batchScan(batch)
                        .subscribeOn(Schedulers.parallel())
                )
                .filter(result -> result.isSafe())
                .doOnError(error -> 
                    log.error("Batch scan failed", error)
                );
        }
    }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                SDK Features Comparison
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Feature</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Python</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Node.js</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Java</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Go</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Async Support</td>
                      <td className="py-3 px-4 text-green-600">✓ Native</td>
                      <td className="py-3 px-4 text-green-600">✓ Native</td>
                      <td className="py-3 px-4 text-green-600">✓ CompletableFuture</td>
                      <td className="py-3 px-4 text-green-600">✓ Goroutines</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Streaming</td>
                      <td className="py-3 px-4 text-green-600">✓</td>
                      <td className="py-3 px-4 text-green-600">✓</td>
                      <td className="py-3 px-4 text-green-600">✓ Reactive</td>
                      <td className="py-3 px-4 text-green-600">✓ Channels</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Framework Integration</td>
                      <td className="py-3 px-4 text-gray-600">Django, Flask, FastAPI</td>
                      <td className="py-3 px-4 text-gray-600">Express, Koa, NestJS</td>
                      <td className="py-3 px-4 text-gray-600">Spring, Quarkus</td>
                      <td className="py-3 px-4 text-gray-600">Gin, Echo, Fiber</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Auto-retry</td>
                      <td className="py-3 px-4 text-green-600">✓</td>
                      <td className="py-3 px-4 text-green-600">✓</td>
                      <td className="py-3 px-4 text-green-600">✓</td>
                      <td className="py-3 px-4 text-green-600">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* CI/CD Pipeline Section */}
        {activeTab === 'cicd' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                CI/CD Integration
              </h2>

              <div className="space-y-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <GitBranch className="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                        Shift-Left Security
                      </h3>
                      <p className="text-indigo-800 dark:text-indigo-200">
                        Integrate AI security scanning directly into your CI/CD pipeline to catch vulnerabilities before deployment. Our tools support all major CI/CD platforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    GitHub Actions
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# .github/workflows/ai-security.yml
name: AI Security Scan

on:
  pull_request:
    branches: [main, develop]
  push:
    branches: [main]

jobs:
  security-scan:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup perfecXion CLI
      uses: perfecxion/setup-cli@v1
      with:
        version: 'latest'
        api-key: \${{ secrets.PERFECXION_API_KEY }}
    
    - name: Scan AI Models
      run: |
        perfecxion scan models \\
          --path ./models \\
          --recursive \\
          --format sarif \\
          --output scan-results.sarif
    
    - name: Scan Prompts and Code
      run: |
        perfecxion scan code \\
          --path ./src \\
          --include "**/*.py,**/*.js,**/*.ts" \\
          --check-prompts \\
          --check-embeddings
    
    - name: Compliance Check
      run: |
        perfecxion compliance check \\
          --regulations gdpr,ccpa,eu-ai-act \\
          --fail-on-violation
    
    - name: Upload Results
      uses: github/codeql-action/upload-sarif@v2
      if: always()
      with:
        sarif_file: scan-results.sarif
    
    - name: Comment PR
      uses: actions/github-script@v6
      if: github.event_name == 'pull_request'
      with:
        script: |
          const results = require('./scan-results.json');
          const comment = \`
          ## 🔒 AI Security Scan Results
          
          **Risk Score**: \${results.overall_risk_score}/10
          
          ### Summary
          - Critical: \${results.critical_count}
          - High: \${results.high_count}
          - Medium: \${results.medium_count}
          - Low: \${results.low_count}
          
          ### Top Issues
          \${results.top_issues.map(issue => 
            \`- **\${issue.severity}**: \${issue.title} in \\\`\${issue.file}\\\`\`
          ).join('\\n')}
          
          [View Full Report](\${results.report_url})
          \`;
          
          github.rest.issues.createComment({
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body: comment
          });`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    GitLab CI/CD
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# .gitlab-ci.yml
stages:
  - build
  - test
  - security
  - deploy

variables:
  PERFECXION_API_KEY: \${CI_PERFECXION_API_KEY}

ai-security-scan:
  stage: security
  image: perfecxion/scanner:latest
  
  before_script:
    - perfecxion auth login --api-key $PERFECXION_API_KEY
    
  script:
    # Scan models
    - |
      perfecxion scan models \\
        --path ./models \\
        --output-format gitlab \\
        --severity-threshold high
    
    # Scan application code
    - |
      perfecxion scan code \\
        --path ./src \\
        --check-prompts \\
        --check-api-calls \\
        --parallel 4
    
    # Data validation scan
    - |
      perfecxion scan data \\
        --path ./datasets \\
        --check-pii \\
        --check-bias \\
        --sample-size 1000
    
    # Generate security report
    - |
      perfecxion report generate \\
        --format html \\
        --output ai-security-report.html
        
  artifacts:
    reports:
      security: gl-security-report.json
    paths:
      - ai-security-report.html
    expire_in: 30 days
    
  only:
    - merge_requests
    - main
    - develop`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Jenkins Pipeline
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`// Jenkinsfile
pipeline {
    agent any
    
    environment {
        PERFECXION_API_KEY = credentials('perfecxion-api-key')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('AI Security Scan') {
            parallel {
                stage('Model Security') {
                    steps {
                        script {
                            def scanResult = sh(
                                script: '''
                                    perfecxion scan models \\
                                        --path ./models \\
                                        --json-output
                                ''',
                                returnStdout: true
                            ).trim()
                            
                            def results = readJSON text: scanResult
                            if (results.critical_count > 0) {
                                error("Critical security issues found in models")
                            }
                        }
                    }
                }
                
                stage('Prompt Security') {
                    steps {
                        sh '''
                            perfecxion scan prompts \\
                                --config prompts.yaml \\
                                --test-file test-prompts.txt \\
                                --junit-output prompt-test-results.xml
                        '''
                        junit 'prompt-test-results.xml'
                    }
                }
                
                stage('Compliance Check') {
                    steps {
                        sh '''
                            perfecxion compliance audit \\
                                --scope full \\
                                --output compliance-report.pdf
                        '''
                    }
                }
            }
        }
        
        stage('Quality Gates') {
            steps {
                script {
                    def qualityGate = sh(
                        script: 'perfecxion gate check --policy production',
                        returnStatus: true
                    )
                    
                    if (qualityGate != 0) {
                        unstable("Quality gate failed")
                        
                        // Send notifications
                        emailext(
                            subject: "AI Security Issues: \${env.JOB_NAME}",
                            body: "Security scan found issues. Check the report.",
                            to: "security-team@company.com"
                        )
                    }
                }
            }
        }
    }
    
    post {
        always {
            archiveArtifacts artifacts: '**/*-report.*', allowEmptyArchive: true
            
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: '.',
                reportFiles: 'ai-security-report.html',
                reportName: 'AI Security Report'
            ])
        }
    }
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Pre-commit Hooks
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# .pre-commit-config.yaml
repos:
  - repo: https://github.com/perfecxion/pre-commit-hooks
    rev: v2.1.0
    hooks:
      - id: scan-prompts
        name: Scan hardcoded prompts
        entry: perfecxion-scan-prompts
        language: system
        files: \\.(py|js|ts|java)$
        
      - id: check-model-security
        name: Check model files
        entry: perfecxion-check-models
        language: system
        files: \\.(pkl|pt|h5|onnx|pb)$
        
      - id: validate-ai-config
        name: Validate AI configuration
        entry: perfecxion-validate-config
        language: system
        files: (ai|ml)-config\\.(yaml|json)$

# Install pre-commit
# pip install pre-commit
# pre-commit install

# Manual run
# pre-commit run --all-files`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Container Scanning
              </h2>
              
              <div className="space-y-4">
                <button
                  onClick={() => toggleSection('dockerfile')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-gray-900 dark:text-white">Dockerfile Integration</span>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    expandedSection === 'dockerfile' ? 'rotate-90' : ''
                  }`} />
                </button>
                {expandedSection === 'dockerfile' && (
                  <div className="mt-4 pl-12 space-y-4">
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100">
{`# Dockerfile with integrated security scanning
FROM python:3.11-slim AS builder

# Install perfecXion CLI
RUN pip install perfecxion-cli

# Copy application files
COPY . /app
WORKDIR /app

# Run security scan during build
RUN perfecxion scan . \\
    --fail-on-critical \\
    --output /tmp/scan-results.json

# Multi-stage build - only proceed if scan passes
FROM python:3.11-slim

# Copy verified application
COPY --from=builder /app /app
COPY --from=builder /tmp/scan-results.json /app/security-scan.json

# Install dependencies
RUN pip install -r requirements.txt

# Add runtime security
RUN pip install perfecxion-runtime

# Configure runtime protection
ENV PERFECXION_RUNTIME_ENABLED=true
ENV PERFECXION_API_KEY=\${PERFECXION_API_KEY}

ENTRYPOINT ["perfecxion-runtime", "python", "app.py"]`}
                      </pre>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => toggleSection('kubernetes')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Cloud className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span className="font-medium text-gray-900 dark:text-white">Kubernetes Admission Controller</span>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    expandedSection === 'kubernetes' ? 'rotate-90' : ''
                  }`} />
                </button>
                {expandedSection === 'kubernetes' && (
                  <div className="mt-4 pl-12 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      Deploy perfecXion as a Kubernetes admission controller to scan all AI workloads before deployment:
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100">
{`# perfecxion-admission-controller.yaml
apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingWebhookConfiguration
metadata:
  name: perfecxion-ai-security
webhooks:
  - name: ai.security.perfecxion.io
    clientConfig:
      service:
        name: perfecxion-webhook
        namespace: perfecxion-system
        path: "/validate"
      caBundle: LS0tLS1CRUdJTi...
    rules:
      - operations: ["CREATE", "UPDATE"]
        apiGroups: ["apps", "batch"]
        apiVersions: ["v1"]
        resources: ["deployments", "jobs"]
    admissionReviewVersions: ["v1", "v1beta1"]
    sideEffects: None
    namespaceSelector:
      matchLabels:
        ai-security: "enabled"`}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Integration Best Practices */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Integration Best Practices
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Performance
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Use async/batch APIs for scale</li>
                    <li>• Implement caching strategies</li>
                    <li>• Set appropriate timeouts</li>
                    <li>• Monitor API usage and limits</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <Lock className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Security
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Rotate API keys regularly</li>
                    <li>• Use environment variables</li>
                    <li>• Implement fail-safe defaults</li>
                    <li>• Log security events</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Next Steps
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/learn/optimization" className="block group">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-lg transition-all">
                    <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Performance Optimization
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Optimize your integration for maximum performance.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      Optimize performance →
                    </span>
                  </div>
                </Link>

                <Link href="/learn/monitoring" className="block group">
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg hover:shadow-lg transition-all">
                    <Terminal className="h-8 w-8 text-green-600 dark:text-green-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Monitoring Setup
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Set up monitoring for your AI security integration.
                    </p>
                    <span className="text-green-600 dark:text-green-400 font-medium group-hover:underline">
                      Configure monitoring →
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}