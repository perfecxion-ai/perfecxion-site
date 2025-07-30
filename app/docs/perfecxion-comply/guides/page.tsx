import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Code, Users, Shield, Cpu, Brain, Zap, FileText, Scale, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Guides & Examples - perfecX Comply Documentation',
    description: 'Compliance framework guides, integration examples, and best practices for perfecX Comply.',
}

export default function PerfecxionComplyGuides() {
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
                    <span className="text-gray-900 dark:text-white">Guides & Examples</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Guides & Examples
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Learn how to implement AI compliance across different frameworks and integrate with your existing MLOps pipeline.
                </p>

                {/* Compliance Framework Guides */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Compliance Framework Guides
                    </h2>

                    {/* EU AI Act Guide */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Scale className="h-5 w-5 mr-2" />
                            EU AI Act Compliance
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Complete guide for ensuring your AI models comply with the EU AI Act requirements.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from perfecxion_comply import ComplianceClient, EUAIActFramework

# Initialize client with EU AI Act framework
client = ComplianceClient(api_key="your-api-key")
eu_framework = EUAIActFramework()

# Configure risk categorization
risk_config = {
    "high_risk_applications": [
        "credit_scoring",
        "employment_decisions",
        "healthcare_diagnosis",
        "law_enforcement"
    ],
    "prohibited_applications": [
        "social_scoring",
        "mass_surveillance",
        "subliminal_manipulation"
    ]
}

# Register a high-risk AI model
model = client.register_model({
    "model_id": "credit-risk-assessor",
    "name": "Credit Risk Assessment Model",
    "risk_category": "high",
    "purpose": "Evaluate creditworthiness of loan applicants",
    "eu_ai_act": {
        "risk_level": "high_risk",
        "human_oversight": True,
        "transparency_measures": [
            "model_card",
            "explainability_report",
            "user_notification"
        ],
        "data_governance": {
            "data_quality_measures": True,
            "bias_mitigation": True,
            "representative_data": True
        }
    }
})

# Perform EU AI Act specific assessment
assessment = eu_framework.assess_model(
    model_id=model.id,
    requirements=[
        "technical_documentation",
        "conformity_assessment",
        "fundamental_rights_impact",
        "transparency_obligations",
        "human_oversight_capability"
    ]
)

# Generate EU AI Act compliance report
report = eu_framework.generate_compliance_declaration(
    model_id=model.id,
    include_technical_documentation=True,
    language="en"
)

print(f"EU AI Act Compliance Status: {assessment.compliant}")
print(f"Required Actions: {assessment.required_actions}")
print(f"CE Marking Eligible: {assessment.ce_marking_eligible}")`}</pre>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                <strong>Key Requirements:</strong> For high-risk AI systems, ensure human oversight capabilities, maintain technical documentation, implement transparency measures, and conduct fundamental rights impact assessments.
                            </p>
                        </div>
                    </div>

                    {/* NIST AI RMF Guide */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Shield className="h-5 w-5 mr-2" />
                            NIST AI Risk Management Framework
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Implement the NIST AI RMF for comprehensive AI risk management.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from perfecxion_comply import NISTFramework

# Initialize NIST AI RMF
nist = NISTFramework(client)

# Map AI risks according to NIST framework
risk_mapping = nist.map_risks({
    "model_id": "customer-churn-predictor",
    "risk_categories": {
        "technical": {
            "accuracy_degradation": "medium",
            "adversarial_attacks": "low",
            "data_poisoning": "low"
        },
        "socio-technical": {
            "bias_amplification": "medium",
            "privacy_violations": "high",
            "misuse_potential": "low"
        },
        "organizational": {
            "governance_gaps": "low",
            "third_party_risks": "medium",
            "compliance_risks": "low"
        }
    }
})

# Implement NIST AI RMF functions
# 1. GOVERN
governance = nist.establish_governance({
    "policies": ["ai_ethics_policy", "risk_management_policy"],
    "roles": {
        "ai_risk_officer": "jane.doe@company.com",
        "compliance_team": ["compliance@company.com"],
        "model_owners": ["data-science@company.com"]
    },
    "review_frequency": "quarterly"
})

# 2. MAP
context_mapping = nist.map_context({
    "stakeholders": ["customers", "regulators", "employees"],
    "use_cases": ["churn_prediction", "retention_campaigns"],
    "data_sources": ["crm_system", "transaction_history"],
    "impact_assessment": {
        "positive_impacts": ["improved_retention", "cost_savings"],
        "negative_risks": ["false_positives", "customer_trust"]
    }
})

# 3. MEASURE
measurements = nist.measure_performance({
    "model_id": "customer-churn-predictor",
    "metrics": {
        "performance": ["accuracy", "precision", "recall", "f1"],
        "fairness": ["demographic_parity", "equal_opportunity"],
        "robustness": ["adversarial_accuracy", "noise_tolerance"],
        "explainability": ["shap_values", "feature_importance"]
    },
    "thresholds": {
        "accuracy": 0.85,
        "fairness_gap": 0.05,
        "robustness_score": 0.80
    }
})

# 4. MANAGE
risk_management = nist.manage_risks({
    "mitigation_strategies": {
        "bias_mitigation": "rebalancing_algorithm",
        "privacy_protection": "differential_privacy",
        "security_hardening": "input_validation"
    },
    "monitoring_plan": {
        "frequency": "weekly",
        "alerts": ["performance_drop", "fairness_violation"],
        "escalation_path": ["model_owner", "risk_officer", "cto"]
    }
})`}</pre>
                        </div>
                    </div>

                    {/* SOC 2 Type II Guide */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <FileText className="h-5 w-5 mr-2" />
                            SOC 2 Type II for AI Systems
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Achieve SOC 2 Type II compliance for your AI infrastructure.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from perfecxion_comply import SOC2Framework

# Initialize SOC 2 framework
soc2 = SOC2Framework(client)

# Configure Trust Service Criteria for AI
trust_criteria = soc2.configure_criteria({
    "security": {
        "access_controls": {
            "mfa_required": True,
            "rbac_enabled": True,
            "api_key_rotation": "90_days"
        },
        "encryption": {
            "data_at_rest": "AES-256",
            "data_in_transit": "TLS-1.3",
            "model_encryption": True
        }
    },
    "availability": {
        "uptime_target": 99.9,
        "disaster_recovery": True,
        "backup_frequency": "daily",
        "failover_capability": True
    },
    "processing_integrity": {
        "input_validation": True,
        "output_verification": True,
        "audit_logging": "comprehensive",
        "change_management": "documented"
    },
    "confidentiality": {
        "data_classification": True,
        "pii_handling": "encrypted",
        "model_ip_protection": True
    },
    "privacy": {
        "consent_management": True,
        "data_minimization": True,
        "retention_policies": "defined",
        "deletion_capability": True
    }
})

# Implement continuous monitoring
monitoring = soc2.setup_continuous_monitoring({
    "control_testing": {
        "frequency": "monthly",
        "automated_tests": True,
        "evidence_collection": "automated"
    },
    "logging": {
        "model_access": True,
        "data_access": True,
        "configuration_changes": True,
        "security_events": True
    },
    "reporting": {
        "dashboard": "real-time",
        "executive_reports": "monthly",
        "audit_trails": "immutable"
    }
})`}</pre>
                        </div>
                    </div>
                </div>

                {/* MLOps Integration Examples */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Cpu className="h-6 w-6 mr-2" />
                        MLOps Integration Examples
                    </h2>

                    {/* MLflow Integration */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            MLflow Integration
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Integrate compliance checks into your MLflow pipeline.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`import mlflow
from perfecxion_comply import MLflowIntegration

# Initialize MLflow integration
px_mlflow = MLflowIntegration(
    comply_client=client,
    auto_assess=True,
    block_non_compliant=True
)

# Custom MLflow model wrapper with compliance
class CompliantModel(mlflow.pyfunc.PythonModel):
    def __init__(self, model, compliance_config):
        self.model = model
        self.compliance = compliance_config
        
    def predict(self, context, model_input):
        # Pre-prediction compliance checks
        px_mlflow.validate_input(
            model_input,
            check_pii=True,
            check_bias_indicators=True
        )
        
        # Make prediction
        predictions = self.model.predict(model_input)
        
        # Post-prediction compliance checks
        px_mlflow.validate_output(
            predictions,
            check_fairness=True,
            log_metrics=True
        )
        
        return predictions

# Training with compliance tracking
with mlflow.start_run() as run:
    # Train model
    model = train_model(X_train, y_train)
    
    # Compliance assessment during training
    compliance_report = px_mlflow.assess_model(
        model=model,
        test_data=(X_test, y_test),
        frameworks=["EU_AI_ACT", "NIST_AI_RMF"],
        metrics={
            "bias": ["demographic_parity", "equal_opportunity"],
            "fairness": ["individual_fairness", "group_fairness"],
            "robustness": ["adversarial_accuracy"],
            "explainability": ["shap_importance"]
        }
    )
    
    # Log compliance metrics
    mlflow.log_metrics({
        "compliance_score": compliance_report.overall_score,
        "bias_score": compliance_report.bias_metrics.score,
        "risk_level": compliance_report.risk_assessment.numeric_level
    })
    
    # Register model only if compliant
    if compliance_report.is_compliant:
        mlflow.pyfunc.log_model(
            artifact_path="model",
            python_model=CompliantModel(model, compliance_report),
            registered_model_name="compliant_customer_model"
        )
    else:
        mlflow.set_tag("compliance_status", "failed")
        raise ValueError(f"Model failed compliance: {compliance_report.violations}")`}</pre>
                        </div>
                    </div>

                    {/* Kubeflow Integration */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Kubeflow Pipeline Integration
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Add compliance steps to your Kubeflow pipelines.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from kfp import dsl, components
from perfecxion_comply import create_kubeflow_component

# Create reusable compliance components
compliance_check_op = components.create_component_from_func(
    create_kubeflow_component("compliance_check")
)
bias_assessment_op = components.create_component_from_func(
    create_kubeflow_component("bias_assessment")
)
risk_evaluation_op = components.create_component_from_func(
    create_kubeflow_component("risk_evaluation")
)

@dsl.pipeline(
    name="Compliant ML Pipeline",
    description="ML pipeline with integrated compliance checks"
)
def compliant_ml_pipeline(
    data_path: str,
    model_name: str,
    compliance_frameworks: list = ["EU_AI_ACT", "NIST_AI_RMF"]
):
    # Data validation step
    data_validation = dsl.ContainerOp(
        name="validate_data",
        image="perfecxion/data-validator:latest",
        arguments=["--data", data_path, "--check-pii", "--check-quality"]
    )
    
    # Model training
    training = dsl.ContainerOp(
        name="train_model",
        image="your-registry/ml-trainer:latest",
        arguments=["--data", data_validation.output, "--model", model_name]
    ).after(data_validation)
    
    # Compliance assessment
    compliance = compliance_check_op(
        model_path=training.outputs["model_path"],
        frameworks=compliance_frameworks,
        risk_threshold="medium"
    ).after(training)
    
    # Bias assessment
    bias_check = bias_assessment_op(
        model_path=training.outputs["model_path"],
        test_data=data_path,
        protected_attributes=["gender", "race", "age"],
        max_disparity=0.05
    ).after(training)
    
    # Risk evaluation
    risk_eval = risk_evaluation_op(
        compliance_report=compliance.outputs["report"],
        bias_report=bias_check.outputs["report"],
        deployment_env="production"
    ).after(compliance, bias_check)
    
    # Conditional deployment based on compliance
    with dsl.Condition(risk_eval.outputs["approved"] == "true"):
        deploy = dsl.ContainerOp(
            name="deploy_model",
            image="your-registry/model-deployer:latest",
            arguments=[
                "--model", training.outputs["model_path"],
                "--compliance-cert", compliance.outputs["certificate"]
            ]
        )`}</pre>
                        </div>
                    </div>

                    {/* SageMaker Integration */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            AWS SageMaker Integration
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Implement compliance in SageMaker pipelines.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`import sagemaker
from sagemaker.workflow.steps import ProcessingStep, TrainingStep, Condition
from perfecxion_comply import SageMakerCompliance

# Initialize SageMaker compliance
sm_comply = SageMakerCompliance(
    comply_client=client,
    role=sagemaker.get_execution_role()
)

# Create compliance processor
compliance_processor = sm_comply.create_processor(
    instance_type="ml.m5.xlarge",
    frameworks=["EU_AI_ACT", "SOC_2"]
)

# Define compliance step
compliance_step = ProcessingStep(
    name="ComplianceAssessment",
    processor=compliance_processor,
    inputs=[
        ProcessingInput(
            source=training_step.properties.ModelArtifacts.S3ModelArtifacts,
            destination="/opt/ml/processing/model"
        )
    ],
    outputs=[
        ProcessingOutput(
            output_name="compliance_report",
            source="/opt/ml/processing/output/report"
        ),
        ProcessingOutput(
            output_name="compliance_metrics",
            source="/opt/ml/processing/output/metrics"
        )
    ],
    code="compliance_check.py"
)

# Conditional deployment based on compliance
deploy_condition = Condition(
    conditions=[
        ConditionGreaterThanOrEqualTo(
            left=JsonGet(
                step_name=compliance_step.name,
                property_file="compliance_metrics.json",
                json_path="compliance_score"
            ),
            right=80.0
        )
    ],
    if_steps=[deployment_step],
    else_steps=[notification_step]
)`}</pre>
                        </div>
                    </div>
                </div>

                {/* Best Practices */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Shield className="h-6 w-6 mr-2" />
                        Compliance Best Practices
                    </h2>

                    <div className="space-y-6">
                        {/* Continuous Compliance */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                1. Implement Continuous Compliance
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Don't treat compliance as a one-time check. Implement continuous monitoring and assessment.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Set up continuous compliance monitoring
from perfecxion_comply import ContinuousCompliance

continuous = ContinuousCompliance(client)

# Configure monitoring rules
continuous.add_rules([
    {
        "name": "drift_detection",
        "condition": "model.drift_score > 0.1",
        "action": "trigger_reassessment",
        "severity": "high"
    },
    {
        "name": "bias_monitoring",
        "condition": "bias.demographic_parity > 0.05",
        "action": "alert_and_investigate",
        "severity": "critical"
    },
    {
        "name": "performance_degradation",
        "condition": "accuracy < baseline - 0.05",
        "action": "pause_predictions",
        "severity": "critical"
    }
])

# Set up automated remediation
continuous.configure_remediation({
    "auto_retrain": True,
    "auto_rebalance": True,
    "require_approval": ["critical", "high"],
    "notification_channels": ["email", "slack", "pagerduty"]
})`}</pre>
                            </div>
                        </div>

                        {/* Documentation Standards */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                2. Maintain Comprehensive Documentation
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Proper documentation is crucial for compliance audits and regulatory reviews.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Auto-generate required documentation
from perfecxion_comply import DocumentationGenerator

doc_gen = DocumentationGenerator(client)

# Generate model card
model_card = doc_gen.create_model_card({
    "model_id": "risk-predictor",
    "include_sections": [
        "model_details",
        "intended_use",
        "training_data",
        "evaluation_data",
        "performance_metrics",
        "limitations",
        "ethical_considerations",
        "fairness_analysis"
    ],
    "format": "markdown"
})

# Generate technical documentation
tech_docs = doc_gen.create_technical_documentation({
    "architecture": True,
    "algorithms": True,
    "hyperparameters": True,
    "data_pipeline": True,
    "deployment_config": True
})

# Generate compliance artifacts
compliance_docs = doc_gen.create_compliance_package({
    "frameworks": ["EU_AI_ACT", "NIST_AI_RMF"],
    "include_evidence": True,
    "audit_trail": True,
    "sign_electronically": True
})`}</pre>
                            </div>
                        </div>

                        {/* Risk Management */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                3. Proactive Risk Management
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Identify and mitigate risks before they become compliance violations.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Implement risk-based compliance approach
risk_manager = client.create_risk_manager()

# Define risk indicators
risk_manager.define_indicators({
    "data_quality": {
        "missing_values": {"threshold": 0.05, "severity": "medium"},
        "outlier_ratio": {"threshold": 0.1, "severity": "high"},
        "class_imbalance": {"threshold": 3.0, "severity": "high"}
    },
    "model_behavior": {
        "prediction_confidence_low": {"threshold": 0.6, "severity": "medium"},
        "decision_boundary_unclear": {"threshold": 0.7, "severity": "high"},
        "feature_importance_concentrated": {"threshold": 0.8, "severity": "critical"}
    },
    "operational": {
        "latency_increase": {"threshold": 1.5, "severity": "medium"},
        "error_rate": {"threshold": 0.01, "severity": "high"},
        "resource_usage": {"threshold": 0.9, "severity": "medium"}
    }
})

# Set up risk mitigation strategies
risk_manager.configure_mitigation({
    "automatic_actions": {
        "medium": ["log", "monitor_closely"],
        "high": ["alert", "limit_usage", "trigger_review"],
        "critical": ["pause_model", "escalate", "immediate_review"]
    },
    "review_board": ["cto@company.com", "legal@company.com"],
    "escalation_timeline": {
        "medium": "48_hours",
        "high": "24_hours",
        "critical": "immediate"
    }
})`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Common Scenarios */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Zap className="h-6 w-6 mr-2" />
                        Common Compliance Scenarios
                    </h2>

                    {/* High-Risk AI System */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            High-Risk AI System (Healthcare)
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Comprehensive compliance for a medical diagnosis AI system.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Healthcare AI compliance configuration
healthcare_compliance = client.configure_high_risk_compliance({
    "domain": "healthcare",
    "application": "diagnostic_assistance",
    "regulations": ["EU_AI_ACT", "HIPAA", "FDA_AI_ML"],
    
    "requirements": {
        "human_oversight": {
            "mandatory": True,
            "override_capability": True,
            "audit_decisions": True
        },
        "explainability": {
            "method": "SHAP",
            "detail_level": "high",
            "user_friendly": True
        },
        "data_protection": {
            "encryption": "AES-256",
            "anonymization": True,
            "retention": "5_years",
            "patient_consent": True
        },
        "clinical_validation": {
            "trials_required": True,
            "peer_review": True,
            "continuous_monitoring": True
        }
    },
    
    "safety_measures": {
        "confidence_thresholds": {
            "min_confidence": 0.95,
            "uncertainty_handling": "defer_to_human"
        },
        "edge_case_detection": True,
        "fallback_mechanism": "human_expert"
    }
})`}</pre>
                        </div>
                    </div>

                    {/* Financial Services */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Financial Services Compliance
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Ensure fairness and transparency in credit scoring models.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Financial AI compliance with fairness focus
financial_compliance = client.configure_financial_compliance({
    "model_type": "credit_scoring",
    "regulations": ["FCRA", "ECOA", "EU_AI_ACT"],
    
    "fairness_requirements": {
        "protected_classes": [
            "race", "gender", "age", "religion", 
            "national_origin", "marital_status"
        ],
        "fairness_metrics": {
            "demographic_parity": 0.05,
            "equal_opportunity": 0.05,
            "calibration": 0.02
        },
        "proxy_detection": True,
        "disparate_impact_threshold": 0.8
    },
    
    "transparency": {
        "adverse_action_reasons": True,
        "score_factors": "top_5",
        "counterfactual_explanations": True,
        "plain_language": True
    },
    
    "monitoring": {
        "drift_detection": "weekly",
        "fairness_monitoring": "continuous",
        "performance_tracking": "daily",
        "regulatory_reporting": "monthly"
    }
})`}</pre>
                        </div>
                    </div>
                </div>

                {/* Troubleshooting */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-10">
                    <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2" />
                        Common Compliance Issues
                    </h3>
                    <div className="space-y-3 text-yellow-800 dark:text-yellow-200">
                        <div>
                            <p className="font-semibold">Bias Detection Failures</p>
                            <p className="text-sm">Ensure protected attributes are properly identified and test data is representative</p>
                        </div>
                        <div>
                            <p className="font-semibold">Documentation Gaps</p>
                            <p className="text-sm">Use automated documentation generation and maintain version control</p>
                        </div>
                        <div>
                            <p className="font-semibold">Framework Conflicts</p>
                            <p className="text-sm">Map requirements across frameworks to identify conflicts early</p>
                        </div>
                        <div>
                            <p className="font-semibold">Performance vs Compliance Trade-offs</p>
                            <p className="text-sm">Use multi-objective optimization to balance performance and compliance</p>
                        </div>
                    </div>
                </div>

                {/* Resources */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Additional Resources
                    </h3>
                    <div className="space-y-3">
                        <Link href="/docs/perfecxion-comply" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Back to perfecX Comply Documentation</span>
                        </Link>
                        <a href="https://github.com/perfecxion/comply-examples" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Example Repository on GitHub</span>
                        </a>
                        <Link href="/support" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Users className="h-4 w-4" />
                            <span>Contact Compliance Experts</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}