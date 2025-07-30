import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Database, Shield, CheckCircle, AlertTriangle, FileCheck, Filter, Search, Lock, Key, Users, Settings, BarChart3, TrendingUp, Zap, Eye, Clock, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Validation - AI Security Learning Center | perfecXion.ai',
  description: 'Master data validation for AI security. Learn input validation, training data verification, output filtering, and anomaly detection techniques.',
  keywords: 'data validation, AI security, input validation, output filtering, data quality, anomaly detection, schema validation',
}

export default function DataValidationPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700 dark:text-gray-300">Data Validation</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
          <Database className="h-10 w-10 text-blue-600 mr-4" />
          Data Validation for AI Security
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
          Master comprehensive data validation techniques for AI systems. Learn how to validate inputs, ensure training 
          data quality, filter outputs, and implement robust data governance for maximum security and reliability.
        </p>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
          <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-red-900 dark:text-red-100">89%</div>
          <div className="text-sm text-red-700 dark:text-red-300">of AI Failures from Bad Data</div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
          <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">$15M</div>
          <div className="text-sm text-orange-700 dark:text-orange-300">Avg. Cost of Data Quality Issues</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
          <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">24/7</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Continuous Monitoring Required</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
          <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-900 dark:text-green-100">95%</div>
          <div className="text-sm text-green-700 dark:text-green-300">Attack Prevention Rate</div>
        </div>
      </div>

      {/* Core Validation Types */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Essential Validation Techniques</h2>
        
        <div className="space-y-8">
          {/* Input Validation */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Filter className="h-6 w-6 text-blue-600 mr-3" />
              Input Validation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Comprehensive validation of all data entering your AI system, from user inputs to API calls 
              and data ingestion processes.
            </p>

            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Python Input Validation Framework</h4>
              <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`import re
import json
from typing import Any, Dict, List, Union
from datetime import datetime
import validators
from pydantic import BaseModel, ValidationError, validator

class AIInputValidator:
    def __init__(self):
        self.validation_rules = {
            'max_length': 10000,
            'min_length': 1,
            'allowed_file_types': ['.txt', '.json', '.csv', '.pdf'],
            'max_file_size': 50 * 1024 * 1024,  # 50MB
            'blocked_patterns': [
                r'<script.*?>.*?</script>',
                r'javascript:',
                r'vbscript:',
                r'data:text/html',
                r'eval\s*\(',
                r'exec\s*\('
            ]
        }
    
    def validate_text_input(self, text: str) -> Dict[str, Any]:
        """Validate text input for AI processing"""
        errors = []
        warnings = []
        
        # Length validation
        if len(text) > self.validation_rules['max_length']:
            errors.append(f"Text exceeds maximum length of {self.validation_rules['max_length']}")
        
        if len(text) < self.validation_rules['min_length']:
            errors.append(f"Text below minimum length of {self.validation_rules['min_length']}")
        
        # Pattern validation
        for pattern in self.validation_rules['blocked_patterns']:
            if re.search(pattern, text, re.IGNORECASE):
                errors.append(f"Blocked pattern detected: {pattern}")
        
        # Character encoding validation
        try:
            text.encode('utf-8')
        except UnicodeEncodeError:
            errors.append("Invalid character encoding detected")
        
        # Suspicious content detection
        suspicious_indicators = [
            'prompt injection', 'system override', 'ignore instructions',
            'admin mode', 'debug mode', 'sudo', 'rm -rf'
        ]
        
        for indicator in suspicious_indicators:
            if indicator.lower() in text.lower():
                warnings.append(f"Suspicious content detected: {indicator}")
        
        return {
            'valid': len(errors) == 0,
            'errors': errors,
            'warnings': warnings,
            'sanitized_text': self._sanitize_text(text) if len(errors) == 0 else None
        }
    
    def validate_structured_data(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Validate structured data inputs"""
        errors = []
        
        # Schema validation
        required_fields = ['input_type', 'content', 'timestamp']
        for field in required_fields:
            if field not in data:
                errors.append(f"Missing required field: {field}")
        
        # Type validation
        if 'timestamp' in data:
            try:
                datetime.fromisoformat(data['timestamp'])
            except ValueError:
                errors.append("Invalid timestamp format")
        
        # Size validation
        data_size = len(json.dumps(data))
        if data_size > 1024 * 1024:  # 1MB
            errors.append("Data payload too large")
        
        return {
            'valid': len(errors) == 0,
            'errors': errors,
            'validated_data': data if len(errors) == 0 else None
        }
    
    def _sanitize_text(self, text: str) -> str:
        """Sanitize text input"""
        # Remove null bytes
        text = text.replace('\x00', '')
        
        # Normalize whitespace
        text = ' '.join(text.split())
        
        # Remove potentially dangerous HTML/script tags
        text = re.sub(r'<[^>]+>', '', text)
        
        return text.strip()`}
              </pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Validation Points</h5>
                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                  <li>• Length and size constraints</li>
                  <li>• Character encoding validation</li>
                  <li>• Pattern matching for threats</li>
                  <li>• Data type verification</li>
                  <li>• Schema compliance checking</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">Security Benefits</h5>
                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                  <li>• Prevents injection attacks</li>
                  <li>• Blocks malicious payloads</li>
                  <li>• Ensures data quality</li>
                  <li>• Maintains system stability</li>
                  <li>• Enables audit trails</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Training Data Validation */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <BarChart3 className="h-6 w-6 text-purple-600 mr-3" />
              Training Data Validation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Ensure the integrity, quality, and security of data used to train AI models. Critical for 
              preventing model poisoning and ensuring robust performance.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Training Data Quality Framework</h4>
              <pre className="text-sm text-purple-800 dark:text-purple-200 overflow-x-auto">
{`import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import IsolationForest
import hashlib
from typing import Tuple, List, Dict

class TrainingDataValidator:
    def __init__(self):
        self.outlier_detector = IsolationForest(contamination=0.1)
        self.quality_thresholds = {
            'completeness': 0.95,  # 95% non-null values
            'uniqueness': 0.8,     # 80% unique values where expected
            'consistency': 0.98,   # 98% consistent format
            'accuracy': 0.95       # 95% accurate labels
        }
    
    def validate_dataset(self, df: pd.DataFrame, target_column: str = None) -> Dict:
        """Comprehensive dataset validation"""
        
        validation_results = {
            'summary': self._generate_summary(df),
            'quality_metrics': self._assess_quality(df),
            'anomalies': self._detect_anomalies(df),
            'duplicates': self._check_duplicates(df),
            'missing_data': self._analyze_missing_data(df),
            'data_drift': self._detect_drift(df),
            'security_issues': self._check_security_issues(df)
        }
        
        if target_column and target_column in df.columns:
            validation_results['label_analysis'] = self._analyze_labels(df, target_column)
        
        # Overall validation score
        validation_results['overall_score'] = self._calculate_overall_score(validation_results)
        validation_results['recommendation'] = self._generate_recommendation(validation_results)
        
        return validation_results
    
    def _generate_summary(self, df: pd.DataFrame) -> Dict:
        """Generate dataset summary statistics"""
        return {
            'total_rows': len(df),
            'total_columns': len(df.columns),
            'memory_usage_mb': df.memory_usage(deep=True).sum() / 1024**2,
            'data_types': df.dtypes.value_counts().to_dict(),
            'null_percentage': (df.isnull().sum() / len(df) * 100).to_dict()
        }
    
    def _assess_quality(self, df: pd.DataFrame) -> Dict:
        """Assess data quality metrics"""
        quality_scores = {}
        
        # Completeness
        completeness = 1 - (df.isnull().sum().sum() / (len(df) * len(df.columns)))
        quality_scores['completeness'] = completeness
        
        # Consistency (format validation for string columns)
        consistency_scores = []
        for col in df.select_dtypes(include=['object']).columns:
            # Example: check if email columns have valid format
            if 'email' in col.lower():
                email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                valid_emails = df[col].dropna().str.match(email_pattern).mean()
                consistency_scores.append(valid_emails)
        
        quality_scores['consistency'] = np.mean(consistency_scores) if consistency_scores else 1.0
        
        return quality_scores
    
    def _detect_anomalies(self, df: pd.DataFrame) -> Dict:
        """Detect statistical anomalies in numerical data"""
        numeric_cols = df.select_dtypes(include=[np.number]).columns
        anomalies = {}
        
        if len(numeric_cols) > 0:
            # Standardize numerical features
            scaler = StandardScaler()
            numeric_data = scaler.fit_transform(df[numeric_cols].fillna(0))
            
            # Detect outliers
            outlier_predictions = self.outlier_detector.fit_predict(numeric_data)
            outlier_count = np.sum(outlier_predictions == -1)
            
            anomalies = {
                'outlier_count': outlier_count,
                'outlier_percentage': outlier_count / len(df) * 100,
                'outlier_indices': np.where(outlier_predictions == -1)[0].tolist()
            }
        
        return anomalies
    
    def _check_security_issues(self, df: pd.DataFrame) -> Dict:
        """Check for potential security issues in data"""
        security_issues = []
        
        # Check for potential PII in text columns
        pii_patterns = {
            'ssn': r'\b\d{3}-\d{2}-\d{4}\b',
            'credit_card': r'\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b',
            'email': r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',
            'phone': r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b'
        }
        
        for col in df.select_dtypes(include=['object']).columns:
            col_data = df[col].astype(str)
            for pii_type, pattern in pii_patterns.items():
                if col_data.str.contains(pattern, na=False).any():
                    security_issues.append({
                        'column': col,
                        'issue': f'Potential {pii_type.upper()} detected',
                        'severity': 'high'
                    })
        
        return {'issues': security_issues, 'count': len(security_issues)}
    
    def create_data_fingerprint(self, df: pd.DataFrame) -> str:
        """Create a fingerprint for data versioning and integrity checking"""
        # Create hash of column names, dtypes, and sample data
        columns_hash = hashlib.md5(str(sorted(df.columns.tolist())).encode()).hexdigest()
        dtypes_hash = hashlib.md5(str(df.dtypes.to_dict()).encode()).hexdigest()
        
        # Sample hash (first and last 100 rows)
        sample_data = pd.concat([df.head(100), df.tail(100)])
        sample_hash = hashlib.md5(str(sample_data.values.tobytes())).hexdigest()
        
        # Combine hashes
        combined_hash = hashlib.md5(f"{columns_hash}{dtypes_hash}{sample_hash}".encode()).hexdigest()
        
        return combined_hash`}
              </pre>
            </div>
          </div>

          {/* Output Validation */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
              Output Validation & Filtering
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Validate and filter AI model outputs to ensure they meet safety, quality, and compliance 
              requirements before being delivered to users or downstream systems.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Output Validation Pipeline</h4>
              <pre className="text-sm text-green-800 dark:text-green-200 overflow-x-auto">
{`import re
import json
from typing import Dict, Any, List
from textblob import TextBlob
import language_tool_python

class OutputValidator:
    def __init__(self):
        self.safety_filters = {
            'profanity': self._load_profanity_list(),
            'sensitive_topics': ['violence', 'hatred', 'discrimination'],
            'pii_patterns': {
                'email': r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',
                'phone': r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b',
                'ssn': r'\b\d{3}-\d{2}-\d{4}\b',
                'credit_card': r'\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b'
            }
        }
        
        self.quality_checkers = {
            'grammar': language_tool_python.LanguageTool('en-US'),
            'sentiment': TextBlob,
            'coherence': self._coherence_checker
        }
    
    def validate_output(self, output: str, output_type: str = 'text') -> Dict[str, Any]:
        """Comprehensive output validation"""
        
        validation_result = {
            'original_output': output,
            'safety_check': self._safety_validation(output),
            'quality_check': self._quality_validation(output),
            'compliance_check': self._compliance_validation(output),
            'filtered_output': None,
            'approval_required': False,
            'confidence_score': 0.0
        }
        
        # Generate filtered output if issues found
        if validation_result['safety_check']['issues'] or validation_result['compliance_check']['issues']:
            validation_result['filtered_output'] = self._apply_filters(output, validation_result)
            validation_result['approval_required'] = True
        
        # Calculate confidence score
        validation_result['confidence_score'] = self._calculate_confidence(validation_result)
        
        return validation_result
    
    def _safety_validation(self, output: str) -> Dict[str, Any]:
        """Check output for safety issues"""
        issues = []
        
        # Profanity check
        profanity_found = any(word.lower() in output.lower() for word in self.safety_filters['profanity'])
        if profanity_found:
            issues.append({'type': 'profanity', 'severity': 'medium'})
        
        # PII detection
        for pii_type, pattern in self.safety_filters['pii_patterns'].items():
            if re.search(pattern, output):
                issues.append({'type': f'pii_{pii_type}', 'severity': 'high'})
        
        # Harmful content detection
        harmful_indicators = [
            'how to make', 'instructions for', 'step by step guide to harm',
            'illegal activities', 'violence against', 'discriminate against'
        ]
        
        for indicator in harmful_indicators:
            if indicator.lower() in output.lower():
                issues.append({'type': 'harmful_content', 'severity': 'high'})
        
        return {
            'safe': len(issues) == 0,
            'issues': issues,
            'risk_level': max([issue['severity'] for issue in issues], default='low')
        }
    
    def _quality_validation(self, output: str) -> Dict[str, Any]:
        """Check output quality metrics"""
        quality_metrics = {}
        
        # Grammar check
        grammar_errors = self.quality_checkers['grammar'].check(output)
        quality_metrics['grammar_score'] = max(0, 1 - len(grammar_errors) / max(len(output.split()), 1))
        
        # Readability check
        blob = TextBlob(output)
        sentences = blob.sentences
        avg_sentence_length = np.mean([len(str(s).split()) for s in sentences]) if sentences else 0
        quality_metrics['readability_score'] = min(1.0, max(0.0, 1 - (avg_sentence_length - 15) / 30))
        
        # Coherence check
        quality_metrics['coherence_score'] = self._coherence_checker(output)
        
        # Overall quality score
        quality_metrics['overall_score'] = np.mean(list(quality_metrics.values()))
        
        return quality_metrics
    
    def _compliance_validation(self, output: str) -> Dict[str, Any]:
        """Check compliance with regulations and policies"""
        compliance_issues = []
        
        # GDPR compliance - check for personal data mentions
        gdpr_triggers = ['personal data', 'individual', 'identifies', 'private information']
        if any(trigger in output.lower() for trigger in gdpr_triggers):
            compliance_issues.append({
                'regulation': 'GDPR',
                'issue': 'Potential personal data reference',
                'action_required': 'Review for data protection compliance'
            })
        
        # Corporate policy compliance
        restricted_topics = ['internal processes', 'confidential', 'proprietary', 'trade secret']
        if any(topic in output.lower() for topic in restricted_topics):
            compliance_issues.append({
                'regulation': 'Corporate Policy',
                'issue': 'Restricted information detected',
                'action_required': 'Remove or redact sensitive information'
            })
        
        return {
            'compliant': len(compliance_issues) == 0,
            'issues': compliance_issues
        }
    
    def _apply_filters(self, output: str, validation_result: Dict) -> str:
        """Apply filters to clean problematic output"""
        filtered_output = output
        
        # Remove PII
        for pii_type, pattern in self.safety_filters['pii_patterns'].items():
            filtered_output = re.sub(pattern, f'[{pii_type.upper()}_REDACTED]', filtered_output)
        
        # Replace profanity
        for word in self.safety_filters['profanity']:
            filtered_output = re.sub(re.escape(word), '[FILTERED]', filtered_output, flags=re.IGNORECASE)
        
        return filtered_output
    
    def _coherence_checker(self, text: str) -> float:
        """Simple coherence scoring based on sentence flow"""
        sentences = text.split('.')
        if len(sentences) < 2:
            return 1.0
        
        # Simple heuristic: check for topic consistency
        words_per_sentence = [len(s.split()) for s in sentences if s.strip()]
        if not words_per_sentence:
            return 0.0
        
        # Penalize very short or very long sentences
        avg_length = np.mean(words_per_sentence)
        length_variance = np.var(words_per_sentence)
        
        coherence_score = max(0.0, min(1.0, 1 - (length_variance / (avg_length ** 2))))
        return coherence_score
    
    def _load_profanity_list(self) -> List[str]:
        """Load profanity word list (simplified for example)"""
        return ['bad_word1', 'bad_word2', 'inappropriate_term']  # Replace with actual list`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Validation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Real-time Validation Systems</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg">
            <Clock className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Stream Processing</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>• Apache Kafka integration</li>
              <li>• Real-time anomaly detection</li>
              <li>• Continuous quality monitoring</li>
              <li>• Automated alert systems</li>
              <li>• Performance optimization</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg">
            <Target className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Edge Validation</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>• Client-side validation</li>
              <li>• Lightweight rule engines</li>
              <li>• Offline capability</li>
              <li>• Reduced latency</li>
              <li>• Privacy preservation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Data Validation Best Practices</h2>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start mb-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Defense in Depth</h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Implement multiple layers of validation at input, processing, and output stages. No single 
                  validation method is foolproof.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Continuous Monitoring</h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Monitor data quality continuously in production. Data drift and quality degradation 
                  can occur gradually and require ongoing attention.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Automated Testing</h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Implement automated data validation tests in your CI/CD pipeline. Treat data validation 
                  as seriously as code testing.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Privacy by Design</h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Build privacy protection into your validation processes. Detect and handle PII 
                  appropriately throughout the data lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Checklist */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Implementation Checklist</h2>
        
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Essential Controls</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Input validation framework deployed</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Output filtering system active</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Training data quality checks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Real-time monitoring enabled</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Anomaly detection configured</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Advanced Features</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Automated quality scoring</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>PII detection and redaction</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Data lineage tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Compliance reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Performance optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/learn/model-security"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          ← Model Security
        </Link>
        <Link
          href="/learn/behavioral-monitoring"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Behavioral Monitoring →
        </Link>
      </div>
    </div>
  )
}