import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Code, Shield, Activity, Bell, Key, BarChart, Settings } from 'lucide-react'

export const metadata: Metadata = {
    title: 'API Reference - SafeAI Guard Documentation',
    description: 'Complete API reference for SafeAI Guard endpoints, extension APIs, and parent dashboard integration.',
}

export default function SafeAIGuardAPI() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/safeai-guard" className="hover:text-primary-600 dark:hover:text-primary-400">
                        SafeAI Guard
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">API Reference</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    API Reference
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Complete reference for SafeAI Guard REST API, browser extension APIs, and parent dashboard integration.
                </p>

                {/* Base URL */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-10">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Base URL</h3>
                    <code className="text-sm font-mono text-gray-700 dark:text-gray-300">
                        https://api.safeaiguard.com/v1
                    </code>
                </div>

                {/* Authentication */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Key className="h-6 w-6 mr-2" />
                        Authentication
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        All API requests require authentication using a parent account API key.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# HTTP Header
Authorization: Bearer YOUR_API_KEY

# Example with curl
curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.safeaiguard.com/v1/children`}</pre>
                    </div>
                </div>

                {/* Child Profile Management */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Child Profile Management
                    </h2>

                    {/* Create Child Profile */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Create Child Profile
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/children</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Create a new child profile with protection settings.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Request Body</p>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "name": "Emma",
  "age": 10,
  "protection_settings": {
    "level": "strict", // strict | balanced | relaxed
    "content_filtering": {
      "violence": true,
      "adult": true,
      "drugs": true,
      "self_harm": true,
      "manipulation": true,
      "misinformation": true
    },
    "educational_mode": true,
    "allowed_platforms": ["ChatGPT", "Claude", "Gemini"],
    "time_restrictions": {
      "enabled": true,
      "school_hours": {
        "start": "08:00",
        "end": "15:00",
        "mode": "educational_only"
      },
      "bedtime": {
        "start": "20:00",
        "end": "07:00",
        "mode": "blocked"
      }
    }
  }
}`}</pre>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Response</p>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "id": "child_abc123",
  "name": "Emma",
  "age": 10,
  "created_at": "2024-01-15T10:30:00Z",
  "protection_active": true,
  "device_count": 0,
  "access_code": "EMMA-1234"
}`}</pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* List Children */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            List Children
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/children</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve all child profiles associated with your account.
                        </p>
                    </div>

                    {/* Update Child Settings */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Update Child Settings
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm font-mono">PUT</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/children/{'{child_id}'}/settings</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Update protection settings for a specific child.
                        </p>
                    </div>
                </div>

                {/* Activity Monitoring */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Activity Monitoring
                    </h2>

                    {/* Get Activity Summary */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Get Activity Summary
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/activity/summary</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Get aggregated activity data across all children.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "period": "last_24_hours",
  "total_interactions": 156,
  "blocked_content": 12,
  "educational_redirects": 8,
  "safety_score": 94,
  "by_child": [
    {
      "child_id": "child_abc123",
      "name": "Emma",
      "interactions": 89,
      "blocked": 5,
      "top_platforms": ["ChatGPT", "Claude"],
      "concerns": []
    }
  ],
  "by_category": {
    "homework_help": 67,
    "creative_writing": 34,
    "general_questions": 43,
    "blocked_inappropriate": 12
  }
}`}</pre>
                        </div>
                    </div>

                    {/* Get Flagged Interactions */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Get Flagged Interactions
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/activity/flagged</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve interactions that triggered safety mechanisms.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "flagged_interactions": [
    {
      "id": "flag_123",
      "child_id": "child_abc123",
      "timestamp": "2024-01-15T14:30:00Z",
      "platform": "ChatGPT",
      "severity": "medium",
      "category": "personal_info_request",
      "original_prompt": "What's your phone number?",
      "ai_response": "[Blocked by SafeAI Guard]",
      "safe_alternative": "I cannot share personal information. Is there something else I can help with?",
      "action_taken": "blocked",
      "parent_notified": true
    }
  ],
  "total_count": 12,
  "page": 1,
  "per_page": 20
}`}</pre>
                        </div>
                    </div>
                </div>

                {/* Real-Time Notifications */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Real-Time Notifications
                    </h2>

                    {/* WebSocket Connection */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            WebSocket Connection
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Connect to real-time notification stream.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// JavaScript WebSocket example
const ws = new WebSocket('wss://api.safeaiguard.com/v1/notifications');

ws.on('open', () => {
  // Authenticate
  ws.send(JSON.stringify({
    type: 'auth',
    api_key: 'YOUR_API_KEY'
  }));
});

// Receive real-time notifications
ws.on('message', (data) => {
  const notification = JSON.parse(data);
  
  switch(notification.type) {
    case 'safety_alert':
      console.log('Safety concern:', notification.details);
      break;
    case 'approval_request':
      console.log('Needs approval:', notification.content);
      break;
    case 'activity_update':
      console.log('Activity:', notification.summary);
      break;
  }
});`}</pre>
                        </div>
                    </div>

                    {/* Approve/Deny Content */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Approve/Deny Content
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/approvals/{'{approval_id}'}</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Respond to content approval requests.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "decision": "approve", // approve | deny | modify
  "modified_content": "Here's a safer version...", // if decision is "modify"
  "reason": "Educational content",
  "remember_decision": true,
  "apply_to_similar": true
}`}</pre>
                        </div>
                    </div>
                </div>

                {/* Extension API */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Browser Extension API
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        JavaScript API available within the browser extension context.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Content Filtering</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// Available in content scripts
const safeAIGuard = window.safeAIGuard;

// Check content safety
const result = await safeAIGuard.checkContent({
  text: "User input or AI response",
  context: "homework_help",
  childId: "child_abc123"
});

if (result.action === 'block') {
  // Replace with safe alternative
  element.textContent = result.safeAlternative;
} else if (result.action === 'warn') {
  // Show warning to child
  safeAIGuard.showWarning(result.warning);
} else if (result.action === 'educate') {
  // Transform into learning opportunity
  safeAIGuard.showEducationalContent(result.lesson);
}`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Threat Detection</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// Detect potential threats
safeAIGuard.detectThreats({
  conversation: conversationHistory,
  patterns: ['grooming', 'phishing', 'manipulation']
}).then(threats => {
  if (threats.length > 0) {
    // Alert parent immediately
    safeAIGuard.alertParent({
      severity: 'high',
      threats: threats,
      context: currentContext
    });
  }
});

// Monitor for personal information
safeAIGuard.onPersonalInfoRequest((event) => {
  event.preventDefault();
  safeAIGuard.educate('personal_info_safety');
});`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Educational Features</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// Convert blocked content to learning opportunity
safeAIGuard.educationalMode({
  enabled: true,
  topics: ['digital_citizenship', 'online_safety', 'critical_thinking']
});

// Track learning progress
safeAIGuard.trackLearning({
  childId: 'child_abc123',
  lesson: 'identifying_misinformation',
  completed: true,
  score: 85
});

// Get educational alternatives
const educational = await safeAIGuard.getEducationalAlternative({
  blockedTopic: 'violence',
  originalContext: 'history_homework',
  ageAppropriate: 10
});`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Analytics API */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Analytics & Reporting
                    </h2>

                    {/* Get Safety Metrics */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Get Safety Metrics
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/analytics/safety</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve comprehensive safety metrics and trends.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "period": "last_30_days",
  "safety_score": 92,
  "trend": "improving",
  "metrics": {
    "total_interactions": 3456,
    "safe_interactions": 3178,
    "blocked_harmful": 234,
    "educational_redirects": 44,
    "threat_detections": 2,
    "false_positives": 12
  },
  "top_concerns": [
    {
      "category": "personal_info",
      "count": 89,
      "trend": "decreasing"
    },
    {
      "category": "inappropriate_content",
      "count": 67,
      "trend": "stable"
    }
  ],
  "platform_breakdown": {
    "ChatGPT": {
      "interactions": 1567,
      "safety_score": 94
    },
    "Claude": {
      "interactions": 1234,
      "safety_score": 91
    }
  }
}`}</pre>
                        </div>
                    </div>

                    {/* Generate Reports */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Generate Report
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/reports/generate</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Generate custom safety reports.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "type": "monthly", // daily | weekly | monthly | custom
  "format": "pdf", // pdf | csv | json
  "include": [
    "executive_summary",
    "detailed_activity",
    "safety_incidents",
    "learning_progress",
    "recommendations"
  ],
  "date_range": {
    "start": "2024-01-01",
    "end": "2024-01-31"
  },
  "email_to": "parent@example.com"
}`}</pre>
                        </div>
                    </div>
                </div>

                {/* Rate Limits */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Rate Limits
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Endpoint</th>
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Rate Limit</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300">
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">Child Management</td>
                                    <td className="py-2">100 per hour</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">Activity Queries</td>
                                    <td className="py-2">1,000 per hour</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">Content Checking</td>
                                    <td className="py-2">10,000 per hour</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">Report Generation</td>
                                    <td className="py-2">10 per day</td>
                                </tr>
                                <tr>
                                    <td className="py-2">WebSocket Connections</td>
                                    <td className="py-2">5 concurrent</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Error Codes */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Error Codes
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Code</th>
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Description</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300">
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">400</td>
                                    <td className="py-2">Bad Request - Invalid parameters</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">401</td>
                                    <td className="py-2">Unauthorized - Invalid API key</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">403</td>
                                    <td className="py-2">Forbidden - Insufficient permissions</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">404</td>
                                    <td className="py-2">Not Found - Resource does not exist</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">429</td>
                                    <td className="py-2">Too Many Requests - Rate limit exceeded</td>
                                </tr>
                                <tr>
                                    <td className="py-2 font-mono">500</td>
                                    <td className="py-2">Internal Server Error</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* SDK Reference Links */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Additional Resources
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a href="https://github.com/safeaiguard/api-examples" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>API Examples on GitHub</span>
                        </a>
                        <a href="https://dashboard.safeaiguard.com/api-keys" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Key className="h-4 w-4" />
                            <span>Get Your API Key</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}