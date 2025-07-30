import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Play, Code, CheckCircle, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Quick Start Guide - perfecX Comply Documentation',
    description: 'Get started with perfecX Comply in minutes. Learn how to integrate AI governance and compliance automation into your organization.',
}

export default function PerfecxionComplyQuickStart() {
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
                    <span className="text-gray-900 dark:text-white">Quick Start</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Quick Start Guide
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Get perfecX Comply up and running in your organization in under 10 minutes.
                </p>

                {/* Prerequisites */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-10">
                    <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Prerequisites</h3>
                            <ul className="list-disc list-inside space-y-1 text-blue-800 dark:text-blue-200">
                                <li>Python 3.8+ or Node.js 16+</li>
                                <li>Administrative access to your AI/ML platforms</li>
                                <li>A perfecX Comply API key (sign up at perfecxion.ai)</li>
                                <li>Basic understanding of your compliance requirements (EU AI Act, NIST AI RMF, SOC 2, etc.)</li>
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
                                    pip install perfecxion-comply
                                </code>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Node.js</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    npm install @perfecxion/comply
                                </code>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2: Initialize */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 2: Initialize perfecX Comply
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Python Example</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from perfecxion_comply import ComplianceClient

# Initialize the compliance client
client = ComplianceClient(
    api_key="your-api-key",
    organization_id="your-org-id"
)

# Configure compliance frameworks
client.configure_frameworks([
    "EU_AI_ACT",
    "NIST_AI_RMF",
    "SOC_2_TYPE_II",
    "ISO_42001"
])

# Set up automated scanning
scan_config = {
    "scan_interval": "daily",
    "include_models": ["production/*"],
    "risk_threshold": "medium",
    "auto_remediate": True
}

client.setup_automated_scanning(scan_config)`}</pre>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Node.js Example</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`import { ComplianceClient } from '@perfecxion/comply';

// Initialize the compliance client
const client = new ComplianceClient({
    apiKey: 'your-api-key',
    organizationId: 'your-org-id'
});

// Configure compliance frameworks
await client.configureFrameworks([
    'EU_AI_ACT',
    'NIST_AI_RMF',
    'SOC_2_TYPE_II',
    'ISO_42001'
]);

// Set up automated scanning
const scanConfig = {
    scanInterval: 'daily',
    includeModels: ['production/*'],
    riskThreshold: 'medium',
    autoRemediate: true
};

await client.setupAutomatedScanning(scanConfig);`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3: Model Registration */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 3: Register Your AI Models
                    </h2>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Register an AI model for compliance tracking
model = client.register_model({
    "model_id": "customer-churn-predictor",
    "name": "Customer Churn Prediction Model",
    "version": "2.1.0",
    "type": "classification",
    "purpose": "Predict customer churn probability",
    "data_categories": ["customer_behavior", "transaction_history"],
    "deployment_env": "production",
    "risk_category": "medium",
    "metadata": {
        "team": "data-science",
        "framework": "tensorflow",
        "training_date": "2024-01-10"
    }
})

# Perform initial compliance assessment
assessment = client.assess_model(model.id)
print(f"Compliance Score: {assessment.overall_score}/100")
print(f"Violations Found: {len(assessment.violations)}")
print(f"Risk Level: {assessment.risk_level}")`}</pre>
                    </div>
                </div>

                {/* Step 4: Configure Policies */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 4: Configure Compliance Policies
                    </h2>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Define compliance policies
policies = client.create_policy_set({
    "name": "Production AI Governance",
    "rules": [
        {
            "type": "bias_detection",
            "threshold": 0.05,
            "protected_attributes": ["gender", "race", "age"],
            "action": "alert_and_block"
        },
        {
            "type": "data_privacy",
            "require_anonymization": True,
            "pii_categories": ["email", "phone", "ssn"],
            "retention_days": 90
        },
        {
            "type": "model_drift",
            "drift_threshold": 0.1,
            "check_frequency": "weekly",
            "auto_retrain": True
        },
        {
            "type": "documentation",
            "required_docs": ["model_card", "risk_assessment", "bias_report"],
            "update_frequency": "monthly"
        }
    ]
})

# Apply policies to models
client.apply_policies(
    policy_set_id=policies.id,
    model_filters={"deployment_env": "production"}
)`}</pre>
                    </div>
                </div>

                {/* Step 5: Monitor and Report */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 5: Monitor Compliance Status
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Once configured, perfecX Comply provides real-time monitoring through our dashboard:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Compliance Dashboard</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Real-time compliance status across all frameworks</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Risk Assessment</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Automated risk scoring and mitigation recommendations</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Audit Reports</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Automated generation of compliance documentation</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Violation Alerts</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Instant notifications for compliance violations</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Generate compliance report
report = client.generate_compliance_report(
    framework="EU_AI_ACT",
    format="pdf",
    include_evidence=True
)

print(f"Report generated: {report.url}")
print(f"Compliance Status: {report.status}")
print(f"Next Audit Date: {report.next_audit_date}")

# Get real-time metrics
metrics = client.get_compliance_metrics()
print(f"Overall Compliance: {metrics.overall_score}%")
print(f"Models in Compliance: {metrics.compliant_models}/{metrics.total_models}")
print(f"Active Violations: {metrics.active_violations}")`}</pre>
                    </div>
                </div>

                {/* Integration Example */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        MLOps Integration Example
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Integrate perfecX Comply with your existing MLOps pipeline:
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Example: MLflow Integration
from mlflow import log_metric, log_param
from perfecxion_comply import MLflowIntegration

# Initialize MLflow integration
px_mlflow = MLflowIntegration(client)

# Automatic compliance checks during model training
with mlflow.start_run():
    # Train your model
    model = train_model(X_train, y_train)
    
    # Automatic bias detection
    bias_report = px_mlflow.check_bias(
        model=model,
        test_data=X_test,
        protected_attrs=['gender', 'race']
    )
    
    # Log compliance metrics
    log_metric("bias_score", bias_report.score)
    log_metric("fairness_score", bias_report.fairness)
    log_param("compliance_framework", "EU_AI_ACT")
    
    # Register model with compliance metadata
    px_mlflow.register_compliant_model(
        model=model,
        model_name="customer_churn_v2",
        compliance_report=bias_report
    )`}</pre>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Next Steps
                    </h2>
                    <div className="space-y-3">
                        <Link href="/docs/perfecxion-comply/installation" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Read the full installation guide</span>
                        </Link>
                        <Link href="/docs/perfecxion-comply/api" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Explore the API reference</span>
                        </Link>
                        <Link href="/docs/perfecxion-comply/guides" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>View compliance framework guides</span>
                        </Link>
                    </div>
                </div>

                {/* Support Section */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Need Help?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Our compliance experts are here to help you navigate AI governance requirements.
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