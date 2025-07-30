import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Code, Database, Shield, Activity, Bell, Key, FileText, CheckSquare } from 'lucide-react'

export const metadata: Metadata = {
    title: 'API Reference - perfecX Comply Documentation',
    description: 'Complete API reference for perfecX Comply endpoints, methods, and data structures.',
}

export default function PerfecxionComplyAPI() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/perfecxion-comply" className="hover:text-primary-600 dark:hover:text-primary-400">
                        perfecX Comply
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">API Reference</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    API Reference
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Complete reference for perfecX Comply REST API endpoints and SDK methods.
                </p>

                {/* Base URL */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-10">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Base URL</h3>
                    <code className="text-sm font-mono text-gray-700 dark:text-gray-300">
                        https://api.perfecxion.ai/v1/comply
                    </code>
                </div>

                {/* Authentication */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Key className="h-6 w-6 mr-2" />
                        Authentication
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        All API requests require authentication using an API key and organization ID.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# HTTP Headers
X-API-Key: YOUR_API_KEY
X-Organization-ID: YOUR_ORG_ID

# Example with curl
curl -H "X-API-Key: YOUR_API_KEY" \\
     -H "X-Organization-ID: YOUR_ORG_ID" \\
     https://api.perfecxion.ai/v1/comply/models`}</pre>
                    </div>
                </div>

                {/* Model Management */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Model Management
                    </h2>

                    {/* Register Model */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Register Model
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/models</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Register a new AI model for compliance tracking.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Request Body</p>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "model_id": "customer-churn-v2",
  "name": "Customer Churn Predictor",
  "version": "2.0.0",
  "type": "classification",
  "purpose": "Predict customer churn probability",
  "deployment_env": "production",
  "data_categories": [
    "customer_demographics",
    "transaction_history",
    "support_interactions"
  ],
  "sensitive_features": ["age", "gender", "location"],
  "training_data": {
    "size": 1000000,
    "date_range": "2023-01-01 to 2023-12-31",
    "source": "customer_database"
  },
  "performance_metrics": {
    "accuracy": 0.89,
    "precision": 0.87,
    "recall": 0.91,
    "f1_score": 0.89
  },
  "metadata": {
    "team": "data-science",
    "owner": "john.doe@company.com",
    "framework": "tensorflow",
    "tags": ["customer-retention", "ml-ops"]
  }
}`}</pre>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Response</p>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "model_id": "customer-churn-v2",
  "compliance_id": "cmp_1234567890abcdef",
  "status": "registered",
  "risk_score": 45,
  "risk_level": "medium",
  "compliance_score": 78,
  "next_assessment": "2024-02-01T00:00:00Z",
  "created_at": "2024-01-15T10:30:00Z"
}`}</pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* List Models */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            List Models
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/models</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve a list of all registered models.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Query Parameters</p>
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                    <ul className="space-y-2 text-sm">
                                        <li><code className="font-mono">status</code> - Filter by compliance status (compliant, non_compliant, pending)</li>
                                        <li><code className="font-mono">risk_level</code> - Filter by risk level (low, medium, high, critical)</li>
                                        <li><code className="font-mono">framework</code> - Filter by compliance framework</li>
                                        <li><code className="font-mono">deployment_env</code> - Filter by environment (production, staging, development)</li>
                                        <li><code className="font-mono">limit</code> - Number of results per page (default: 20, max: 100)</li>
                                        <li><code className="font-mono">offset</code> - Pagination offset</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Update Model */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Update Model
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm font-mono">PUT</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/models/{'{model_id}'}</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Update model information and trigger re-assessment.
                        </p>
                    </div>

                    {/* Delete Model */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Delete Model
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm font-mono">DELETE</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/models/{'{model_id}'}</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Remove a model from compliance tracking.
                        </p>
                    </div>
                </div>

                {/* Compliance Assessment */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Compliance Assessment
                    </h2>

                    {/* Run Assessment */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Run Compliance Assessment
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/models/{'{model_id}'}/assess</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Run a comprehensive compliance assessment on a model.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "frameworks": ["EU_AI_ACT", "NIST_AI_RMF"],
  "include_bias_testing": true,
  "include_fairness_metrics": true,
  "include_explainability": true,
  "test_data": {
    "source": "s3://bucket/test-data.csv",
    "protected_attributes": ["gender", "race", "age"]
  }
}`}</pre>
                        </div>
                    </div>

                    {/* Get Assessment Results */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Get Assessment Results
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/models/{'{model_id}'}/assessments/{'{assessment_id}'}</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve detailed assessment results.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "assessment_id": "asmt_xyz789",
  "model_id": "customer-churn-v2",
  "status": "completed",
  "overall_score": 82,
  "risk_score": 35,
  "frameworks": {
    "EU_AI_ACT": {
      "compliant": true,
      "score": 85,
      "violations": [],
      "recommendations": [
        "Add model card documentation",
        "Implement user opt-out mechanism"
      ]
    },
    "NIST_AI_RMF": {
      "compliant": true,
      "score": 79,
      "violations": [
        {
          "code": "NIST-4.2.1",
          "severity": "low",
          "description": "Missing continuous monitoring plan"
        }
      ]
    }
  },
  "bias_metrics": {
    "demographic_parity": 0.03,
    "equal_opportunity": 0.02,
    "disparate_impact": 0.95
  },
  "completed_at": "2024-01-15T11:00:00Z"
}`}</pre>
                        </div>
                    </div>
                </div>

                {/* Policy Management */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Policy Management
                    </h2>

                    {/* Create Policy */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Create Policy Set
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/policies</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Create a new compliance policy set.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "name": "Production AI Governance",
  "description": "Comprehensive governance for production AI models",
  "rules": [
    {
      "type": "bias_threshold",
      "config": {
        "max_demographic_parity": 0.05,
        "max_equal_opportunity_diff": 0.05,
        "protected_attributes": ["gender", "race", "age"],
        "action": "block_deployment"
      }
    },
    {
      "type": "documentation_required",
      "config": {
        "required_docs": ["model_card", "risk_assessment", "bias_report"],
        "update_frequency": "monthly"
      }
    },
    {
      "type": "drift_detection",
      "config": {
        "threshold": 0.1,
        "check_frequency": "weekly",
        "metrics": ["accuracy", "feature_distribution"],
        "auto_retrain": true
      }
    },
    {
      "type": "data_privacy",
      "config": {
        "require_anonymization": true,
        "pii_detection": true,
        "retention_days": 90,
        "encryption_required": true
      }
    }
  ],
  "applies_to": {
    "deployment_env": ["production"],
    "risk_level": ["medium", "high", "critical"]
  }
}`}</pre>
                        </div>
                    </div>

                    {/* Apply Policy */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Apply Policy to Models
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/policies/{'{policy_id}'}/apply</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Apply a policy set to specific models.
                        </p>
                    </div>
                </div>

                {/* Reporting */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Reporting & Analytics
                    </h2>

                    {/* Generate Report */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Generate Compliance Report
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/reports</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Generate comprehensive compliance reports.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "type": "compliance_audit",
  "framework": "EU_AI_ACT",
  "format": "pdf",
  "include_sections": [
    "executive_summary",
    "model_inventory",
    "risk_assessment",
    "compliance_status",
    "violations",
    "recommendations",
    "evidence"
  ],
  "filters": {
    "date_range": {
      "start": "2024-01-01",
      "end": "2024-01-31"
    },
    "models": ["production/*"],
    "include_archived": false
  },
  "branding": {
    "logo_url": "https://company.com/logo.png",
    "company_name": "Your Company Inc."
  }
}`}</pre>
                        </div>
                    </div>

                    {/* Get Metrics */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Get Compliance Metrics
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/metrics</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve organization-wide compliance metrics.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "organization_id": "org_123",
  "period": "last_30_days",
  "summary": {
    "total_models": 45,
    "compliant_models": 38,
    "compliance_rate": 0.844,
    "average_risk_score": 42.3,
    "critical_violations": 2,
    "pending_assessments": 5
  },
  "by_framework": {
    "EU_AI_ACT": {
      "compliant": 35,
      "non_compliant": 10,
      "average_score": 78.5
    },
    "NIST_AI_RMF": {
      "compliant": 40,
      "non_compliant": 5,
      "average_score": 82.1
    }
  },
  "by_risk_level": {
    "low": 20,
    "medium": 18,
    "high": 5,
    "critical": 2
  },
  "trends": {
    "compliance_rate": [
      {"date": "2024-01-01", "value": 0.80},
      {"date": "2024-01-08", "value": 0.82},
      {"date": "2024-01-15", "value": 0.844}
    ]
  }
}`}</pre>
                        </div>
                    </div>
                </div>

                {/* Webhooks */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Webhooks
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Configure webhooks to receive real-time notifications about compliance events.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`POST /webhooks

{
  "url": "https://your-domain.com/webhooks/compliance",
  "events": [
    "model.registered",
    "assessment.completed",
    "violation.detected",
    "policy.violated",
    "risk.elevated"
  ],
  "secret": "your-webhook-secret"
}`}</pre>
                    </div>

                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Webhook Payload Example</h3>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "event": "violation.detected",
  "timestamp": "2024-01-15T12:00:00Z",
  "data": {
    "model_id": "customer-churn-v2",
    "violation": {
      "type": "bias_threshold_exceeded",
      "severity": "high",
      "framework": "EU_AI_ACT",
      "details": {
        "metric": "demographic_parity",
        "threshold": 0.05,
        "actual": 0.08,
        "protected_attribute": "gender"
      }
    },
    "action_required": "immediate_review"
  }
}`}</pre>
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
                                    <td className="py-2">Model Registration</td>
                                    <td className="py-2">100 per hour</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">Compliance Assessment</td>
                                    <td className="py-2">50 per hour</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">Report Generation</td>
                                    <td className="py-2">10 per hour</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">Metrics Retrieval</td>
                                    <td className="py-2">1,000 per hour</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Policy Management</td>
                                    <td className="py-2">100 per hour</td>
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
                                    <td className="py-2">Bad Request - Invalid parameters or request body</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">401</td>
                                    <td className="py-2">Unauthorized - Invalid or missing API key</td>
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
                                    <td className="py-2 font-mono">409</td>
                                    <td className="py-2">Conflict - Resource already exists</td>
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
                        SDK Documentation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a href="https://pypi.org/project/perfecxion-comply/" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Python SDK Documentation</span>
                        </a>
                        <a href="https://www.npmjs.com/package/@perfecxion/comply" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Node.js SDK Documentation</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}