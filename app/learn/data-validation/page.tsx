'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, Database, FileCheck, AlertTriangle, CheckCircle2, XCircle, Info, Filter, Lock, Search, Eye, BarChart3, Zap } from 'lucide-react'

export default function DataValidationPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedValidation, setSelectedValidation] = useState('input')
  const [expandedTechnique, setExpandedTechnique] = useState<string | null>(null)

  const toggleTechnique = (technique: string) => {
    setExpandedTechnique(expandedTechnique === technique ? null : technique)
  }

  const validationTypes = {
    input: {
      name: 'Input Validation',
      description: 'Validate user inputs before AI processing',
      risks: ['Prompt injection', 'Data poisoning', 'Malformed inputs'],
      techniques: ['Schema validation', 'Content filtering', 'Format checking']
    },
    training: {
      name: 'Training Data Validation',
      description: 'Ensure training data quality and safety',
      risks: ['Backdoor attacks', 'Bias introduction', 'Data corruption'],
      techniques: ['Statistical analysis', 'Anomaly detection', 'Privacy scanning']
    },
    output: {
      name: 'Output Validation',
      description: 'Verify AI outputs before delivery',
      risks: ['Information leakage', 'Harmful content', 'Hallucinations'],
      techniques: ['Content moderation', 'Fact checking', 'PII detection']
    },
    pipeline: {
      name: 'Pipeline Validation',
      description: 'End-to-end data flow validation',
      risks: ['Data integrity', 'Version mismatch', 'Processing errors'],
      techniques: ['Checksum verification', 'Schema evolution', 'Lineage tracking']
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-100">
              Data Validation
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8 leading-relaxed">
              Comprehensive data validation strategies for secure AI systems
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-5 w-5" />
                <span>Security First</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Database className="h-5 w-5" />
                <span>Data Integrity</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Filter className="h-5 w-5" />
                <span>Quality Control</span>
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
              { id: 'overview', label: 'Overview', icon: Eye },
              { id: 'techniques', label: 'Techniques', icon: FileCheck },
              { id: 'implementation', label: 'Implementation', icon: Database },
              { id: 'monitoring', label: 'Monitoring', icon: BarChart3 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-4 border-b-2 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400'
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
                Why Data Validation Matters
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Data validation is the first line of defense in AI security. By ensuring data quality, integrity, and safety at every stage of the AI pipeline, you can prevent a wide range of attacks and operational issues. From malicious inputs designed to manipulate AI behavior to corrupted training data that can introduce backdoors, comprehensive data validation is essential for trustworthy AI systems.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                    <Shield className="h-8 w-8 text-teal-600 dark:text-teal-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Security Protection
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Prevent injection attacks, data poisoning, and malicious payloads from compromising your AI systems.
                    </p>
                  </div>
                  
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-6">
                    <Database className="h-8 w-8 text-cyan-600 dark:text-cyan-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Data Quality
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ensure high-quality inputs and outputs, reducing errors, biases, and improving model performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Validation Types
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {Object.entries(validationTypes).map(([key, validation]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedValidation(key)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedValidation === key
                        ? 'border-teal-600 bg-teal-50 dark:bg-teal-900/20 dark:border-teal-400'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{validation.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{validation.description}</p>
                  </button>
                ))}
              </div>

              {selectedValidation && (
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {validationTypes[selectedValidation].name} Details
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                          Risks Addressed
                        </h4>
                        <ul className="space-y-1">
                          {validationTypes[selectedValidation].risks.map((risk) => (
                            <li key={risk} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                              <XCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              {risk}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                          Key Techniques
                        </h4>
                        <ul className="space-y-1">
                          {validationTypes[selectedValidation].techniques.map((technique) => (
                            <li key={technique} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              {technique}
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
                Data Validation Pipeline
              </h2>
              
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-gray-100">
{`┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Input     │────▶│  Validation │────▶│ Processing  │────▶│   Output    │
│   Data      │     │   Layer     │     │   Layer     │     │ Validation  │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
      │                    │                    │                    │
      ▼                    ▼                    ▼                    ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Schema    │     │  Security   │     │   Quality   │     │  Content    │
│   Check     │     │   Scan      │     │   Check     │     │   Filter    │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
      │                    │                    │                    │
      ▼                    ▼                    ▼                    ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Format    │     │  Malware    │     │ Statistical │     │    PII      │
│ Validation  │     │  Detection  │     │  Analysis   │     │  Detection  │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Techniques Section */}
        {activeTab === 'techniques' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Data Validation Techniques
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Input Validation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Comprehensive validation of all inputs before AI processing:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Schema Validation
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Enforce strict schemas for all input data
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
{`import jsonschema
from typing import Dict, Any, List
import re

class InputValidator:
    def __init__(self):
        self.schemas = {
            'prompt': {
                'type': 'object',
                'properties': {
                    'text': {
                        'type': 'string',
                        'minLength': 1,
                        'maxLength': 4096,
                        'pattern': '^[\\w\\s\\p{L}\\p{N}\\p{P}]+$'
                    },
                    'user_id': {
                        'type': 'string',
                        'pattern': '^[a-zA-Z0-9-]+$'
                    },
                    'context': {
                        'type': 'object',
                        'additionalProperties': True
                    }
                },
                'required': ['text'],
                'additionalProperties': False
            },
            'training_data': {
                'type': 'object',
                'properties': {
                    'samples': {
                        'type': 'array',
                        'items': {
                            'type': 'object',
                            'properties': {
                                'input': {'type': 'string'},
                                'output': {'type': 'string'},
                                'metadata': {'type': 'object'}
                            },
                            'required': ['input', 'output']
                        }
                    },
                    'version': {'type': 'string'},
                    'source': {'type': 'string'}
                },
                'required': ['samples']
            }
        }
        
    def validate_input(self, data: Dict[str, Any], schema_type: str) -> Dict[str, Any]:
        """Validate input against schema"""
        try:
            jsonschema.validate(data, self.schemas[schema_type])
        except jsonschema.ValidationError as e:
            return {
                'valid': False,
                'error': str(e),
                'path': '.'.join(str(p) for p in e.path)
            }
            
        # Additional security validations
        security_check = self.security_validation(data)
        if not security_check['passed']:
            return {
                'valid': False,
                'error': 'Security validation failed',
                'details': security_check['issues']
            }
            
        return {'valid': True, 'data': self.sanitize_input(data)}
        
    def security_validation(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Perform security-specific validations"""
        issues = []
        
        # Check for injection patterns
        injection_patterns = [
            r'<script[^>]*>.*?</script>',
            r'javascript:',
            r'on\\w+\\s*=',
            r'\\x[0-9a-fA-F]{2}',
            r'\\\\u[0-9a-fA-F]{4}',
            r'eval\\s*\\(',
            r'exec\\s*\\('
        ]
        
        def check_value(value: Any, path: str = ''):
            if isinstance(value, str):
                for pattern in injection_patterns:
                    if re.search(pattern, value, re.IGNORECASE):
                        issues.append({
                            'type': 'injection_attempt',
                            'path': path,
                            'pattern': pattern
                        })
            elif isinstance(value, dict):
                for k, v in value.items():
                    check_value(v, f"{path}.{k}" if path else k)
            elif isinstance(value, list):
                for i, v in enumerate(value):
                    check_value(v, f"{path}[{i}]")
                    
        check_value(data)
        
        return {
            'passed': len(issues) == 0,
            'issues': issues
        }`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Content Filtering
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Filter harmful or inappropriate content
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
{`class ContentFilter:
    def __init__(self):
        self.load_filters()
        
    def load_filters(self):
        """Load content filtering rules"""
        self.profanity_list = load_profanity_database()
        self.harmful_patterns = load_harmful_patterns()
        self.pii_patterns = {
            'ssn': r'\\b\\d{3}-\\d{2}-\\d{4}\\b',
            'credit_card': r'\\b\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}\\b',
            'email': r'\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b',
            'phone': r'\\b\\d{3}[\\s.-]?\\d{3}[\\s.-]?\\d{4}\\b',
            'ip_address': r'\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b'
        }
        
    def filter_content(self, text: str) -> Dict[str, Any]:
        """Apply content filters"""
        issues = []
        
        # Profanity check
        profanity_found = self.check_profanity(text)
        if profanity_found:
            issues.append({
                'type': 'profanity',
                'severity': 'medium',
                'matches': profanity_found
            })
            
        # Harmful content check
        harmful_found = self.check_harmful_content(text)
        if harmful_found:
            issues.append({
                'type': 'harmful_content',
                'severity': 'high',
                'categories': harmful_found
            })
            
        # PII detection
        pii_found = self.detect_pii(text)
        if pii_found:
            issues.append({
                'type': 'pii_detected',
                'severity': 'high',
                'types': list(pii_found.keys())
            })
            
        return {
            'clean': len(issues) == 0,
            'issues': issues,
            'sanitized_text': self.sanitize_text(text, issues)
        }
        
    def detect_pii(self, text: str) -> Dict[str, List[str]]:
        """Detect personally identifiable information"""
        found_pii = {}
        
        for pii_type, pattern in self.pii_patterns.items():
            matches = re.findall(pattern, text)
            if matches:
                found_pii[pii_type] = matches
                
        return found_pii
        
    def sanitize_text(self, text: str, issues: List[Dict]) -> str:
        """Sanitize text based on identified issues"""
        sanitized = text
        
        # Redact PII
        for issue in issues:
            if issue['type'] == 'pii_detected':
                for pii_type, pattern in self.pii_patterns.items():
                    if pii_type in issue.get('types', []):
                        sanitized = re.sub(pattern, '[REDACTED]', sanitized)
                        
        return sanitized`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-cyan-600 pl-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Training Data Validation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Ensure training data quality and detect poisoning attempts:
                  </p>
                  
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`import numpy as np
from sklearn.ensemble import IsolationForest
from typing import Tuple, List
import hashlib

class TrainingDataValidator:
    def __init__(self, baseline_stats: Dict[str, Any] = None):
        self.baseline_stats = baseline_stats or {}
        self.anomaly_detector = IsolationForest(
            contamination=0.1,
            random_state=42
        )
        
    def validate_dataset(self, 
                        data: np.ndarray, 
                        labels: np.ndarray) -> Dict[str, Any]:
        """Comprehensive training data validation"""
        validation_results = {
            'statistical_checks': self.statistical_validation(data, labels),
            'anomaly_detection': self.detect_anomalies(data),
            'label_consistency': self.check_label_consistency(labels),
            'data_quality': self.assess_data_quality(data),
            'poisoning_detection': self.detect_poisoning_attempts(data, labels)
        }
        
        # Overall assessment
        validation_results['passed'] = all(
            check.get('passed', False) 
            for check in validation_results.values()
        )
        
        return validation_results
        
    def statistical_validation(self, 
                              data: np.ndarray, 
                              labels: np.ndarray) -> Dict[str, Any]:
        """Validate statistical properties"""
        stats = {
            'mean': np.mean(data, axis=0),
            'std': np.std(data, axis=0),
            'min': np.min(data, axis=0),
            'max': np.max(data, axis=0),
            'class_distribution': np.bincount(labels)
        }
        
        # Check for distribution shifts
        if self.baseline_stats:
            drift_score = self.calculate_drift(stats, self.baseline_stats)
            
            return {
                'passed': drift_score < 0.1,
                'drift_score': drift_score,
                'stats': stats,
                'message': 'Significant distribution shift detected' if drift_score >= 0.1 else 'OK'
            }
            
        return {
            'passed': True,
            'stats': stats,
            'message': 'No baseline for comparison'
        }
        
    def detect_anomalies(self, data: np.ndarray) -> Dict[str, Any]:
        """Detect anomalous samples in dataset"""
        # Fit anomaly detector
        self.anomaly_detector.fit(data)
        
        # Predict anomalies
        predictions = self.anomaly_detector.predict(data)
        anomaly_scores = self.anomaly_detector.score_samples(data)
        
        anomalies = np.where(predictions == -1)[0]
        anomaly_ratio = len(anomalies) / len(data)
        
        return {
            'passed': anomaly_ratio < 0.15,  # Less than 15% anomalies
            'anomaly_ratio': anomaly_ratio,
            'anomaly_indices': anomalies.tolist(),
            'severity_scores': anomaly_scores[anomalies].tolist()
        }
        
    def detect_poisoning_attempts(self, 
                                  data: np.ndarray, 
                                  labels: np.ndarray) -> Dict[str, Any]:
        """Detect potential data poisoning"""
        suspicious_patterns = []
        
        # Check for backdoor patterns
        for i in range(len(data)):
            # Look for unusual patterns (simplified example)
            if self.has_backdoor_pattern(data[i]):
                suspicious_patterns.append({
                    'index': i,
                    'type': 'potential_backdoor',
                    'confidence': 0.8
                })
                
        # Check for label flipping
        label_consistency = self.check_label_neighborhood(data, labels)
        flipped_labels = [i for i, consistent in enumerate(label_consistency) if not consistent]
        
        return {
            'passed': len(suspicious_patterns) == 0 and len(flipped_labels) < len(data) * 0.01,
            'backdoor_candidates': suspicious_patterns,
            'flipped_label_candidates': flipped_labels,
            'risk_score': self.calculate_poisoning_risk(suspicious_patterns, flipped_labels)
        }
        
    def has_backdoor_pattern(self, sample: np.ndarray) -> bool:
        """Check for known backdoor patterns"""
        # Simplified example - check for specific pixel patterns in images
        # or specific token sequences in text
        
        # Example: Check for a specific pattern in corner pixels (for images)
        if len(sample.shape) == 3:  # Image data
            corner_pattern = sample[:3, :3].flatten()
            known_patterns = [
                np.array([1, 0, 1, 0, 1, 0, 1, 0, 1]),  # Checkerboard
                np.array([1, 1, 1, 1, 1, 1, 1, 1, 1])   # All white
            ]
            
            for pattern in known_patterns:
                if np.allclose(corner_pattern, pattern, atol=0.1):
                    return True
                    
        return False`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Output Validation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Validate AI outputs before delivery to users:
                  </p>
                  
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`class OutputValidator:
    def __init__(self, config: Dict[str, Any]):
        self.config = config
        self.fact_checker = FactCheckingService()
        self.toxicity_classifier = ToxicityClassifier()
        
    async def validate_output(self, 
                            output: str, 
                            context: Dict[str, Any]) -> Dict[str, Any]:
        """Comprehensive output validation"""
        validation_tasks = [
            self.check_hallucination(output, context),
            self.check_toxicity(output),
            self.check_pii_leakage(output, context),
            self.check_consistency(output, context),
            self.check_factual_accuracy(output)
        ]
        
        # Run all validations in parallel
        results = await asyncio.gather(*validation_tasks)
        
        # Aggregate results
        issues = []
        for result in results:
            if not result['passed']:
                issues.extend(result.get('issues', []))
                
        return {
            'valid': len(issues) == 0,
            'issues': issues,
            'sanitized_output': self.sanitize_output(output, issues),
            'confidence_score': self.calculate_confidence(results)
        }
        
    async def check_hallucination(self, 
                                 output: str, 
                                 context: Dict[str, Any]) -> Dict[str, Any]:
        """Detect potential hallucinations"""
        # Extract claims from output
        claims = self.extract_claims(output)
        
        # Verify against context and knowledge base
        unverified_claims = []
        for claim in claims:
            if not self.verify_claim(claim, context):
                unverified_claims.append(claim)
                
        hallucination_score = len(unverified_claims) / max(len(claims), 1)
        
        return {
            'passed': hallucination_score < 0.1,
            'hallucination_score': hallucination_score,
            'unverified_claims': unverified_claims
        }
        
    async def check_consistency(self, 
                               output: str, 
                               context: Dict[str, Any]) -> Dict[str, Any]:
        """Check output consistency with context and history"""
        inconsistencies = []
        
        # Check against conversation history
        if 'history' in context:
            for previous in context['history']:
                if self.contradicts(output, previous['output']):
                    inconsistencies.append({
                        'type': 'historical_contradiction',
                        'previous': previous['output'],
                        'current': output
                    })
                    
        # Check against provided facts
        if 'facts' in context:
            for fact in context['facts']:
                if self.contradicts(output, fact):
                    inconsistencies.append({
                        'type': 'factual_contradiction',
                        'fact': fact,
                        'output': output
                    })
                    
        return {
            'passed': len(inconsistencies) == 0,
            'issues': inconsistencies
        }`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Advanced Validation Techniques
              </h2>
              
              <div className="space-y-4">
                <button
                  onClick={() => toggleTechnique('differential')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Search className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="font-medium text-gray-900 dark:text-white">Differential Privacy Validation</span>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    expandedTechnique === 'differential' ? 'rotate-90' : ''
                  }`} />
                </button>
                {expandedTechnique === 'differential' && (
                  <div className="mt-4 pl-12 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      Ensure data meets differential privacy requirements:
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100">
{`class DifferentialPrivacyValidator:
    def __init__(self, epsilon: float = 1.0, delta: float = 1e-5):
        self.epsilon = epsilon
        self.delta = delta
        
    def validate_privacy_budget(self, 
                               queries: List[Query], 
                               data_size: int) -> Dict[str, Any]:
        """Validate that queries respect privacy budget"""
        total_epsilon = 0
        total_delta = 0
        
        for query in queries:
            # Calculate privacy cost
            query_epsilon, query_delta = self.calculate_privacy_cost(
                query, data_size
            )
            
            # Composition
            total_epsilon += query_epsilon
            total_delta += query_delta
            
        return {
            'within_budget': total_epsilon <= self.epsilon and total_delta <= self.delta,
            'epsilon_used': total_epsilon,
            'delta_used': total_delta,
            'remaining_budget': {
                'epsilon': max(0, self.epsilon - total_epsilon),
                'delta': max(0, self.delta - total_delta)
            }
        }`}
                      </pre>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => toggleTechnique('homomorphic')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span className="font-medium text-gray-900 dark:text-white">Encrypted Data Validation</span>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    expandedTechnique === 'homomorphic' ? 'rotate-90' : ''
                  }`} />
                </button>
                {expandedTechnique === 'homomorphic' && (
                  <div className="mt-4 pl-12 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      Validate encrypted data without decryption:
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100">
{`class EncryptedDataValidator:
    def __init__(self, public_key):
        self.public_key = public_key
        
    def validate_encrypted_range(self, 
                                encrypted_value, 
                                min_value, 
                                max_value) -> bool:
        """Validate value is within range without decryption"""
        # Using homomorphic properties
        encrypted_min = self.encrypt(min_value)
        encrypted_max = self.encrypt(max_value)
        
        # Homomorphic comparison
        diff_min = self.homomorphic_subtract(encrypted_value, encrypted_min)
        diff_max = self.homomorphic_subtract(encrypted_max, encrypted_value)
        
        # Check if both differences are positive (encrypted)
        return self.is_positive_encrypted(diff_min) and self.is_positive_encrypted(diff_max)`}
                      </pre>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => toggleTechnique('blockchain')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-gray-900 dark:text-white">Blockchain-Based Validation</span>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    expandedTechnique === 'blockchain' ? 'rotate-90' : ''
                  }`} />
                </button>
                {expandedTechnique === 'blockchain' && (
                  <div className="mt-4 pl-12 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      Immutable data validation using blockchain:
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100">
{`class BlockchainDataValidator:
    def __init__(self, blockchain_client):
        self.blockchain = blockchain_client
        
    async def validate_data_integrity(self, 
                                     data_hash: str, 
                                     block_number: int) -> Dict[str, Any]:
        """Validate data integrity using blockchain records"""
        # Retrieve validation record from blockchain
        validation_record = await self.blockchain.get_validation_record(
            data_hash, 
            block_number
        )
        
        if not validation_record:
            return {
                'valid': False,
                'error': 'No validation record found'
            }
            
        # Verify signatures
        validators = validation_record['validators']
        valid_signatures = 0
        
        for validator in validators:
            if self.verify_signature(
                data_hash, 
                validator['signature'], 
                validator['public_key']
            ):
                valid_signatures += 1
                
        # Require majority validation
        threshold = len(validators) // 2 + 1
        
        return {
            'valid': valid_signatures >= threshold,
            'validators': len(validators),
            'valid_signatures': valid_signatures,
            'timestamp': validation_record['timestamp']
        }`}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Implementation Section */}
        {activeTab === 'implementation' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Implementation Guide
              </h2>

              <div className="space-y-6">
                <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-6 w-6 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">
                        Implementation Strategy
                      </h3>
                      <p className="text-teal-800 dark:text-teal-200">
                        Implement data validation in layers, starting with basic schema validation and progressively adding more sophisticated checks. Each layer should be independently testable and configurable.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Complete Validation Pipeline
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`from typing import Dict, Any, List, Optional
import asyncio
from dataclasses import dataclass
from enum import Enum

class ValidationLevel(Enum):
    BASIC = "basic"
    STANDARD = "standard"
    STRICT = "strict"

@dataclass
class ValidationResult:
    passed: bool
    level: ValidationLevel
    errors: List[Dict[str, Any]]
    warnings: List[Dict[str, Any]]
    metadata: Dict[str, Any]
    
class DataValidationPipeline:
    def __init__(self, config: Dict[str, Any]):
        self.config = config
        self.validators = self._initialize_validators()
        self.cache = ValidationCache()
        
    def _initialize_validators(self) -> Dict[str, Any]:
        """Initialize all validation components"""
        return {
            'schema': SchemaValidator(self.config['schemas']),
            'security': SecurityValidator(self.config['security']),
            'content': ContentValidator(self.config['content']),
            'quality': QualityValidator(self.config['quality']),
            'privacy': PrivacyValidator(self.config['privacy'])
        }
        
    async def validate(self, 
                      data: Dict[str, Any], 
                      context: Dict[str, Any],
                      level: ValidationLevel = ValidationLevel.STANDARD) -> ValidationResult:
        """Run complete validation pipeline"""
        # Check cache
        cache_key = self._generate_cache_key(data, context)
        cached_result = self.cache.get(cache_key)
        if cached_result:
            return cached_result
            
        # Run validations based on level
        validation_tasks = self._get_validation_tasks(data, context, level)
        
        # Execute validations in parallel
        results = await asyncio.gather(*validation_tasks, return_exceptions=True)
        
        # Aggregate results
        final_result = self._aggregate_results(results, level)
        
        # Cache result
        self.cache.set(cache_key, final_result)
        
        # Log validation metrics
        self._log_metrics(final_result)
        
        return final_result
        
    def _get_validation_tasks(self, 
                             data: Dict[str, Any], 
                             context: Dict[str, Any],
                             level: ValidationLevel) -> List[asyncio.Task]:
        """Get validation tasks based on level"""
        tasks = []
        
        # Basic validations (always run)
        tasks.append(self.validators['schema'].validate_async(data))
        
        if level in [ValidationLevel.STANDARD, ValidationLevel.STRICT]:
            # Standard validations
            tasks.append(self.validators['security'].validate_async(data))
            tasks.append(self.validators['content'].validate_async(data))
            
        if level == ValidationLevel.STRICT:
            # Strict validations
            tasks.append(self.validators['quality'].validate_async(data))
            tasks.append(self.validators['privacy'].validate_async(data))
            
        return tasks
        
    def _aggregate_results(self, 
                          results: List[Dict[str, Any]], 
                          level: ValidationLevel) -> ValidationResult:
        """Aggregate validation results"""
        errors = []
        warnings = []
        metadata = {'validations_run': len(results)}
        
        for result in results:
            if isinstance(result, Exception):
                errors.append({
                    'type': 'validation_error',
                    'message': str(result)
                })
                continue
                
            if not result.get('passed', False):
                errors.extend(result.get('errors', []))
                
            warnings.extend(result.get('warnings', []))
            
        return ValidationResult(
            passed=len(errors) == 0,
            level=level,
            errors=errors,
            warnings=warnings,
            metadata=metadata
        )
        
# Middleware integration
class ValidationMiddleware:
    def __init__(self, pipeline: DataValidationPipeline):
        self.pipeline = pipeline
        
    async def __call__(self, request, call_next):
        """FastAPI/Flask middleware for automatic validation"""
        # Extract data from request
        data = await request.json() if request.method == "POST" else {}
        
        # Determine validation level
        level = self._determine_validation_level(request)
        
        # Run validation
        result = await self.pipeline.validate(
            data,
            {'request': request},
            level
        )
        
        if not result.passed:
            return JSONResponse(
                status_code=400,
                content={
                    'error': 'Validation failed',
                    'details': result.errors
                }
            )
            
        # Continue with request
        response = await call_next(request)
        
        # Add validation metadata to response
        response.headers['X-Validation-Level'] = result.level.value
        
        return response`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Real-time Validation Service
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Real-time streaming validation
import asyncio
from collections import deque
import time

class StreamingValidator:
    def __init__(self, window_size: int = 1000):
        self.window_size = window_size
        self.data_window = deque(maxlen=window_size)
        self.anomaly_scores = deque(maxlen=window_size)
        self.baseline_updated = time.time()
        
    async def validate_stream(self, data_stream):
        """Validate streaming data in real-time"""
        async for data_point in data_stream:
            # Quick validation
            quick_result = self.quick_validate(data_point)
            
            if not quick_result['passed']:
                # Immediate rejection
                yield {
                    'action': 'reject',
                    'data': data_point,
                    'reason': quick_result['reason']
                }
                continue
                
            # Add to window
            self.data_window.append(data_point)
            
            # Anomaly detection
            anomaly_score = self.calculate_anomaly_score(data_point)
            self.anomaly_scores.append(anomaly_score)
            
            # Check for drift
            if self.detect_drift():
                yield {
                    'action': 'alert',
                    'type': 'drift_detected',
                    'severity': 'high'
                }
                
            # Periodic baseline update
            if time.time() - self.baseline_updated > 3600:  # 1 hour
                self.update_baseline()
                
            yield {
                'action': 'accept',
                'data': data_point,
                'anomaly_score': anomaly_score,
                'metadata': {
                    'window_size': len(self.data_window),
                    'avg_anomaly_score': np.mean(self.anomaly_scores)
                }
            }
            
    def detect_drift(self) -> bool:
        """Detect distribution drift in streaming data"""
        if len(self.data_window) < self.window_size:
            return False
            
        # Split window into two halves
        mid = len(self.data_window) // 2
        first_half = list(self.data_window)[:mid]
        second_half = list(self.data_window)[mid:]
        
        # Statistical test for drift
        drift_score = self.kolmogorov_smirnov_test(first_half, second_half)
        
        return drift_score > 0.05  # 5% significance level`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Configuration Management
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Validation configuration management
validation_config:
  # Global settings
  global:
    timeout: 5000  # ms
    max_retries: 3
    cache_ttl: 3600  # seconds
    
  # Schema validation
  schema:
    strict_mode: true
    allow_additional_properties: false
    coerce_types: false
    
  # Security validation
  security:
    injection_detection:
      enabled: true
      patterns_file: "security/injection_patterns.yaml"
    
    rate_limiting:
      enabled: true
      window: 60  # seconds
      max_requests: 100
      
  # Content validation
  content:
    profanity_filter:
      enabled: true
      languages: ["en", "es", "fr"]
      
    toxicity_threshold: 0.7
    
    pii_detection:
      enabled: true
      redact_mode: "mask"  # or "remove"
      
  # Quality validation
  quality:
    min_confidence_score: 0.8
    max_hallucination_score: 0.1
    
    statistical_checks:
      outlier_detection: true
      distribution_validation: true
      
  # Privacy validation
  privacy:
    differential_privacy:
      enabled: true
      epsilon: 1.0
      delta: 1e-5
      
    encryption_required: true
    
  # Monitoring
  monitoring:
    metrics:
      enabled: true
      export_interval: 60  # seconds
      
    alerts:
      - type: "validation_failure_rate"
        threshold: 0.05  # 5%
        window: 300  # 5 minutes
        severity: "high"
        
      - type: "anomaly_score"
        threshold: 0.9
        window: 60
        severity: "critical"`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Testing Data Validation
              </h2>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-100">
{`import pytest
import asyncio
from unittest.mock import Mock, patch

class TestDataValidation:
    @pytest.fixture
    def validator(self):
        """Create validator instance for testing"""
        config = {
            'schemas': {'test': test_schema},
            'security': {'injection_patterns': test_patterns}
        }
        return DataValidationPipeline(config)
        
    @pytest.mark.asyncio
    async def test_valid_input(self, validator):
        """Test validation of valid input"""
        valid_data = {
            'text': 'Hello, this is a valid input',
            'user_id': 'user123'
        }
        
        result = await validator.validate(valid_data, {})
        
        assert result.passed
        assert len(result.errors) == 0
        
    @pytest.mark.asyncio
    async def test_injection_detection(self, validator):
        """Test detection of injection attempts"""
        malicious_data = {
            'text': '<script>alert("xss")</script>',
            'user_id': 'attacker'
        }
        
        result = await validator.validate(
            malicious_data, 
            {}, 
            ValidationLevel.STRICT
        )
        
        assert not result.passed
        assert any(e['type'] == 'injection_attempt' for e in result.errors)
        
    @pytest.mark.asyncio
    async def test_pii_detection(self, validator):
        """Test PII detection and redaction"""
        data_with_pii = {
            'text': 'My SSN is 123-45-6789 and email is test@example.com'
        }
        
        result = await validator.validate(data_with_pii, {})
        
        assert result.warnings  # PII detected as warning
        assert any(w['type'] == 'pii_detected' for w in result.warnings)
        
    def test_performance(self, validator, benchmark):
        """Benchmark validation performance"""
        test_data = generate_test_data(1000)
        
        result = benchmark(
            asyncio.run,
            validator.validate(test_data, {})
        )
        
        assert result.metadata['validations_run'] > 0
        
    @pytest.mark.parametrize("level,expected_validations", [
        (ValidationLevel.BASIC, 1),
        (ValidationLevel.STANDARD, 3),
        (ValidationLevel.STRICT, 5)
    ])
    async def test_validation_levels(self, validator, level, expected_validations):
        """Test different validation levels"""
        test_data = {'text': 'test'}
        
        result = await validator.validate(test_data, {}, level)
        
        assert result.metadata['validations_run'] == expected_validations`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Monitoring Section */}
        {activeTab === 'monitoring' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Validation Monitoring
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Key Metrics to Track
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                      <BarChart3 className="h-8 w-8 text-teal-600 dark:text-teal-400 mb-3" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Validation Metrics
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li>• Validation pass/fail rates</li>
                        <li>• Average validation latency</li>
                        <li>• Cache hit rates</li>
                        <li>• Error type distribution</li>
                      </ul>
                    </div>
                    
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-6">
                      <AlertTriangle className="h-8 w-8 text-cyan-600 dark:text-cyan-400 mb-3" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Security Metrics
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li>• Injection attempts detected</li>
                        <li>• PII exposures prevented</li>
                        <li>• Anomaly detection rate</li>
                        <li>• Data poisoning attempts</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Monitoring Dashboard
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Prometheus metrics for validation monitoring
from prometheus_client import Counter, Histogram, Gauge

class ValidationMetrics:
    def __init__(self):
        # Counters
        self.validation_total = Counter(
            'data_validation_total',
            'Total number of validations',
            ['type', 'level', 'status']
        )
        
        self.security_threats = Counter(
            'security_threats_detected',
            'Security threats detected',
            ['threat_type', 'severity']
        )
        
        # Histograms
        self.validation_duration = Histogram(
            'validation_duration_seconds',
            'Validation processing time',
            ['validation_type'],
            buckets=(0.01, 0.05, 0.1, 0.5, 1.0, 2.5, 5.0)
        )
        
        # Gauges
        self.anomaly_score = Gauge(
            'current_anomaly_score',
            'Current anomaly score',
            ['data_type']
        )
        
        self.data_quality_score = Gauge(
            'data_quality_score',
            'Overall data quality score'
        )
        
    def record_validation(self, 
                         validation_type: str, 
                         level: str, 
                         passed: bool, 
                         duration: float):
        """Record validation metrics"""
        status = 'passed' if passed else 'failed'
        
        self.validation_total.labels(
            type=validation_type,
            level=level,
            status=status
        ).inc()
        
        self.validation_duration.labels(
            validation_type=validation_type
        ).observe(duration)
        
    def record_threat(self, threat_type: str, severity: str):
        """Record detected security threat"""
        self.security_threats.labels(
            threat_type=threat_type,
            severity=severity
        ).inc()
        
# Grafana dashboard query examples
dashboards = {
    "validation_success_rate": '''
        rate(data_validation_total{status="passed"}[5m]) /
        rate(data_validation_total[5m])
    ''',
    
    "p95_validation_latency": '''
        histogram_quantile(0.95, 
            rate(validation_duration_seconds_bucket[5m])
        )
    ''',
    
    "threat_detection_rate": '''
        sum(rate(security_threats_detected[5m])) by (threat_type)
    ''',
    
    "anomaly_trend": '''
        avg_over_time(current_anomaly_score[10m])
    '''
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Alert Configuration
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                        <div>
                          <h4 className="font-medium text-red-900 dark:text-red-100">Critical: High Failure Rate</h4>
                          <p className="text-sm text-red-800 dark:text-red-200">
                            Validation failure rate > 10% for 5 minutes
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                        <div>
                          <h4 className="font-medium text-yellow-900 dark:text-yellow-100">Warning: Anomaly Spike</h4>
                          <p className="text-sm text-yellow-800 dark:text-yellow-200">
                            Anomaly score > 0.8 for multiple data points
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Data Validation Best Practices
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <Shield className="h-8 w-8 text-teal-600 dark:text-teal-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Defense in Depth
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Multiple validation layers</li>
                    <li>• Fail-safe defaults</li>
                    <li>• Regular security audits</li>
                    <li>• Continuous monitoring</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <Zap className="h-8 w-8 text-cyan-600 dark:text-cyan-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Performance
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Async validation</li>
                    <li>• Intelligent caching</li>
                    <li>• Batch processing</li>
                    <li>• Early rejection</li>
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
                <Link href="/learn/behavioral-monitoring" className="block group">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-lg transition-all">
                    <Eye className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Behavioral Monitoring
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Monitor AI behavior patterns and anomalies.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      Learn monitoring →
                    </span>
                  </div>
                </Link>

                <Link href="/learn/threat-modeling" className="block group">
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg hover:shadow-lg transition-all">
                    <Search className="h-8 w-8 text-green-600 dark:text-green-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Threat Modeling
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Model threats to your data pipeline.
                    </p>
                    <span className="text-green-600 dark:text-green-400 font-medium group-hover:underline">
                      Model threats →
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