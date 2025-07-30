import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Activity, TrendingUp, AlertTriangle, Shield, Eye, Brain, Target, CheckCircle, ArrowLeft, BarChart3, Monitor, Users, Clock, Zap, Database, Settings } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Behavioral Monitoring for AI Systems - Learn AI Security - perfecXion.ai',
    description: 'Master behavioral monitoring for AI systems. Learn pattern recognition, anomaly detection, real-time monitoring, and automated response strategies.',
    keywords: 'behavioral monitoring, AI security, anomaly detection, pattern recognition, threat detection, AI monitoring, security analytics, machine learning',
}

export default function BehavioralMonitoringPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex">
                    <li className="flex items-center">
                        <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">Behavioral Monitoring</li>
                </ol>
            </nav>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
                    <Activity className="h-10 w-10 text-primary-600 mr-4" />
                    Behavioral Monitoring for AI Systems
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
                    Behavioral monitoring represents the next frontier in AI security, providing continuous insight into how your AI systems 
                    interact with users, process data, and respond to requests. This comprehensive guide teaches you to build sophisticated 
                    monitoring systems that detect anomalies, prevent abuse, and ensure your AI operates within expected parameters while 
                    maintaining optimal performance and user experience.
                </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                    <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">98.7%</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Anomaly Detection Rate</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100">43%</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Threat Reduction</div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                    <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">&lt;200ms</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">Detection Latency</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">89%</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">False Positive Reduction</div>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#fundamentals" className="text-primary-600 dark:text-primary-400 hover:underline">Fundamentals: Understanding Behavioral Patterns</a></li>
                    <li><a href="#monitoring-architecture" className="text-primary-600 dark:text-primary-400 hover:underline">Monitoring Architecture: System Design</a></li>
                    <li><a href="#detection-algorithms" className="text-primary-600 dark:text-primary-400 hover:underline">Detection Algorithms: Machine Learning Approaches</a></li>
                    <li><a href="#implementation" className="text-primary-600 dark:text-primary-400 hover:underline">Implementation: Building Your Monitoring System</a></li>
                    <li><a href="#response-automation" className="text-primary-600 dark:text-primary-400 hover:underline">Response Automation: Intelligent Threat Mitigation</a></li>
                    <li><a href="#analytics-dashboard" className="text-primary-600 dark:text-primary-400 hover:underline">Analytics Dashboard: Visualization and Insights</a></li>
                    <li><a href="#best-practices" className="text-primary-600 dark:text-primary-400 hover:underline">Best Practices: Production Deployment</a></li>
                    <li><a href="#next-steps" className="text-primary-600 dark:text-primary-400 hover:underline">Next Steps: Advanced Monitoring</a></li>
                </ul>
            </div>

            {/* Fundamentals */}
            <section id="fundamentals" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Brain className="h-6 w-6 text-primary-500 mr-3" />
                    Fundamentals: Understanding Behavioral Patterns
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-4">
                        Behavioral monitoring for AI systems operates on the principle that normal usage patterns create predictable 
                        baselines. By continuously analyzing user interactions, system responses, and resource utilization, we can 
                        detect deviations that indicate potential threats, abuse, or system malfunctions.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        Unlike traditional rule-based security systems, behavioral monitoring adapts to your specific environment, 
                        learning what constitutes normal behavior for your AI applications and users. This approach is particularly 
                        effective against zero-day attacks, sophisticated prompt injections, and gradual abuse patterns that might 
                        otherwise go unnoticed.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <Users className="h-5 w-5 text-blue-500 mr-2" />
                                User Behavior Patterns
                            </h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Request Frequency:</strong> Normal users have predictable interaction patterns</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Query Complexity:</strong> Typical questions follow logical progression</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Session Duration:</strong> Legitimate users have consistent engagement periods</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Error Rates:</strong> Normal usage produces predictable error patterns</span>
                                </li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <Monitor className="h-5 w-5 text-green-500 mr-2" />
                                System Response Patterns
                            </h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Response Time:</strong> Processing latency should remain within expected ranges</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Token Usage:</strong> Output length patterns indicate normal operation</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Memory Consumption:</strong> Resource utilization follows predictable patterns</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Content Categories:</strong> Response types should match expected domains</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monitoring Architecture */}
            <section id="monitoring-architecture" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Monitoring Architecture: System Design</h2>
                
                <div className="space-y-8">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">High-Level Architecture</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            A robust behavioral monitoring system requires multiple components working in harmony. Here&apos;s the 
                            recommended architecture for production deployments:
                        </p>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-6">
                            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   AI System     │───▶│  Data Collector │───▶│  Event Stream   │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                        │
┌─────────────────┐    ┌─────────────────┐            ▼
│   Alert System  │◀───│  ML Detector    │    ┌─────────────────┐
│                 │    │                 │◀───│  Behavior DB    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │                        │
                                ▼                        ▼
                        ┌─────────────────┐    ┌─────────────────┐
                        │   Dashboard     │    │  Long-term      │
                        │                 │    │  Analytics      │
                        └─────────────────┘    └─────────────────┘`}
                            </pre>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Data Collection Layer</h4>
                                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                    <li>• Request/response logging</li>
                                    <li>• Performance metrics</li>
                                    <li>• User session tracking</li>
                                    <li>• System resource monitoring</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Processing Layer</h4>
                                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                                    <li>• Real-time analysis</li>
                                    <li>• Pattern recognition</li>
                                    <li>• Anomaly detection</li>
                                    <li>• Threat classification</li>
                                </ul>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Response Layer</h4>
                                <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                                    <li>• Automated alerting</li>
                                    <li>• Threat mitigation</li>
                                    <li>• Dashboard visualization</li>
                                    <li>• Compliance reporting</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Data Collection Implementation</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            The foundation of effective behavioral monitoring is comprehensive data collection. Here&apos;s how to 
                            implement a robust data collection system:
                        </p>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`import asyncio
import time
import json
from datetime import datetime
from typing import Dict, Any, Optional
from dataclasses import dataclass, asdict

@dataclass
class BehaviorEvent:
    timestamp: float
    user_id: str
    session_id: str
    event_type: str
    request_data: Dict[str, Any]
    response_data: Dict[str, Any]
    processing_time: float
    resource_usage: Dict[str, float]
    metadata: Dict[str, Any]

class BehaviorCollector:
    def __init__(self, event_queue: asyncio.Queue):
        self.event_queue = event_queue
        self.active_sessions = {}
        
    async def log_interaction(self, 
                            user_id: str,
                            session_id: str,
                            request: Dict[str, Any],
                            response: Dict[str, Any],
                            start_time: float,
                            end_time: float,
                            resource_stats: Dict[str, float]):
        
        # Create behavior event
        event = BehaviorEvent(
            timestamp=end_time,
            user_id=user_id,
            session_id=session_id,
            event_type="ai_interaction",
            request_data={
                "prompt_length": len(request.get("prompt", "")),
                "prompt_complexity": self._analyze_complexity(request),
                "request_type": request.get("type", "unknown")
            },
            response_data={
                "response_length": len(response.get("content", "")),
                "response_time": end_time - start_time,
                "token_count": response.get("usage", {}).get("total_tokens", 0)
            },
            processing_time=end_time - start_time,
            resource_usage=resource_stats,
            metadata={
                "ip_address": request.get("client_ip"),
                "user_agent": request.get("user_agent"),
                "api_version": request.get("api_version", "v1")
            }
        )
        
        # Update session tracking
        await self._update_session(session_id, event)
        
        # Queue for processing
        await self.event_queue.put(event)
    
    def _analyze_complexity(self, request: Dict[str, Any]) -> float:
        """Analyze prompt complexity using various metrics"""
        prompt = request.get("prompt", "")
        
        # Basic complexity metrics
        word_count = len(prompt.split())
        unique_words = len(set(prompt.lower().split()))
        avg_word_length = sum(len(word) for word in prompt.split()) / max(word_count, 1)
        
        # Complexity indicators
        special_chars = sum(1 for c in prompt if not c.isalnum() and not c.isspace())
        question_marks = prompt.count("?")
        exclamations = prompt.count("!")
        
        # Calculate complexity score (0-1)
        complexity = min(1.0, (
            (word_count / 100) * 0.3 +
            (unique_words / word_count if word_count > 0 else 0) * 0.2 +
            (avg_word_length / 10) * 0.2 +
            (special_chars / max(len(prompt), 1)) * 0.3
        ))
        
        return complexity
    
    async def _update_session(self, session_id: str, event: BehaviorEvent):
        """Update session tracking information"""
        if session_id not in self.active_sessions:
            self.active_sessions[session_id] = {
                "start_time": event.timestamp,
                "interaction_count": 0,
                "total_processing_time": 0.0,
                "user_id": event.user_id
            }
        
        session = self.active_sessions[session_id]
        session["interaction_count"] += 1
        session["total_processing_time"] += event.processing_time
        session["last_activity"] = event.timestamp`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detection Algorithms */}
            <section id="detection-algorithms" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Detection Algorithms: Machine Learning Approaches</h2>
                
                <div className="space-y-8">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Anomaly Detection with Isolation Forest</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Isolation Forest is particularly effective for detecting behavioral anomalies in AI systems because it 
                            can identify outliers in high-dimensional feature spaces without requiring labeled data.
                        </p>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4">
                            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`import numpy as np
import pandas as pd
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import StandardScaler
from datetime import datetime, timedelta
from typing import List, Dict, Tuple

class BehaviorAnomalyDetector:
    def __init__(self, contamination_rate: float = 0.1):
        self.contamination_rate = contamination_rate
        self.model = IsolationForest(
            contamination=contamination_rate,
            random_state=42,
            n_estimators=100
        )
        self.scaler = StandardScaler()
        self.feature_columns = [
            'request_frequency',
            'avg_response_time', 
            'prompt_complexity',
            'token_usage_rate',
            'error_rate',
            'session_duration',
            'unique_prompt_ratio'
        ]
        self.is_trained = False
    
    def extract_features(self, events: List[BehaviorEvent]) -> pd.DataFrame:
        """Extract behavioral features from events"""
        user_features = {}
        
        # Group events by user
        for event in events:
            user_id = event.user_id
            if user_id not in user_features:
                user_features[user_id] = {
                    'requests': [],
                    'response_times': [],
                    'complexities': [],
                    'token_counts': [],
                    'errors': 0,
                    'sessions': set(),
                    'prompts': set()
                }
            
            features = user_features[user_id]
            features['requests'].append(event.timestamp)
            features['response_times'].append(event.processing_time)
            features['complexities'].append(
                event.request_data.get('prompt_complexity', 0)
            )
            features['token_counts'].append(
                event.response_data.get('token_count', 0)
            )
            features['sessions'].add(event.session_id)
            features['prompts'].add(event.request_data.get('prompt_length', 0))
        
        # Calculate features for each user
        feature_rows = []
        for user_id, data in user_features.items():
            if len(data['requests']) < 5:  # Need minimum interactions
                continue
                
            requests = sorted(data['requests'])
            time_diffs = [requests[i+1] - requests[i] 
                         for i in range(len(requests)-1)]
            
            feature_row = {
                'request_frequency': len(requests) / max(
                    (requests[-1] - requests[0]) / 3600, 1  # requests per hour
                ),
                'avg_response_time': np.mean(data['response_times']),
                'prompt_complexity': np.mean(data['complexities']),
                'token_usage_rate': np.mean(data['token_counts']),
                'error_rate': data['errors'] / len(requests),
                'session_duration': np.mean(time_diffs) if time_diffs else 0,
                'unique_prompt_ratio': len(data['prompts']) / len(requests)
            }
            feature_rows.append(feature_row)
        
        return pd.DataFrame(feature_rows)
    
    def train(self, historical_events: List[BehaviorEvent]):
        """Train the anomaly detection model"""
        features_df = self.extract_features(historical_events)
        
        if len(features_df) < 50:  # Need sufficient training data
            raise ValueError("Insufficient training data")
        
        # Scale features
        features_scaled = self.scaler.fit_transform(
            features_df[self.feature_columns]
        )
        
        # Train model
        self.model.fit(features_scaled)
        self.is_trained = True
        
        return {
            'training_samples': len(features_df),
            'feature_stats': features_df.describe().to_dict()
        }
    
    def detect_anomalies(self, 
                        recent_events: List[BehaviorEvent]) -> List[Dict[str, Any]]:
        """Detect anomalous behavior in recent events"""
        if not self.is_trained:
            raise ValueError("Model must be trained first")
        
        features_df = self.extract_features(recent_events)
        if len(features_df) == 0:
            return []
        
        # Scale features
        features_scaled = self.scaler.transform(
            features_df[self.feature_columns]
        )
        
        # Predict anomalies
        anomaly_scores = self.model.decision_function(features_scaled)
        is_anomaly = self.model.predict(features_scaled) == -1
        
        anomalies = []
        for idx, is_anom in enumerate(is_anomaly):
            if is_anom:
                anomalies.append({
                    'anomaly_score': anomaly_scores[idx],
                    'features': features_df.iloc[idx].to_dict(),
                    'severity': self._calculate_severity(anomaly_scores[idx]),
                    'timestamp': datetime.now().isoformat()
                })
        
        return anomalies
    
    def _calculate_severity(self, score: float) -> str:
        """Calculate severity based on anomaly score"""
        if score < -0.5:
            return "critical"
        elif score < -0.3:
            return "high"
        elif score < -0.1:
            return "medium"
        else:
            return "low"`}
                            </pre>
                        </div>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sequential Pattern Analysis</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Sequential pattern analysis identifies unusual sequences of interactions that might indicate 
                            coordinated attacks or systematic probing of your AI system.
                        </p>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`from collections import defaultdict, deque
import re
from typing import List, Dict, Tuple, Set

class SequentialPatternDetector:
    def __init__(self, window_size: int = 10, min_support: float = 0.1):
        self.window_size = window_size
        self.min_support = min_support
        self.known_patterns = set()
        self.suspicious_sequences = [
            ['high_complexity', 'high_complexity', 'error'],
            ['system_query', 'privilege_escalation', 'data_extraction'],
            ['rapid_fire', 'rapid_fire', 'rapid_fire'],
            ['injection_attempt', 'error', 'injection_attempt']
        ]
    
    def classify_event(self, event: BehaviorEvent) -> str:
        """Classify an event into a pattern category"""
        request_data = event.request_data
        response_data = event.response_data
        
        # Analyze request characteristics
        prompt_length = request_data.get('prompt_length', 0)
        complexity = request_data.get('prompt_complexity', 0)
        processing_time = event.processing_time
        
        # Classification logic
        if complexity > 0.8:
            return 'high_complexity'
        elif processing_time > 10.0:  # seconds
            return 'slow_processing'
        elif prompt_length < 10:
            return 'minimal_input'
        elif prompt_length > 1000:
            return 'verbose_input'
        elif 'system' in str(request_data).lower():
            return 'system_query'
        elif processing_time < 0.1:
            return 'rapid_fire'
        elif response_data.get('error'):
            return 'error'
        else:
            return 'normal'
    
    def analyze_sequence(self, 
                        events: List[BehaviorEvent], 
                        user_id: str) -> Dict[str, Any]:
        """Analyze event sequence for suspicious patterns"""
        # Filter events for specific user
        user_events = [e for e in events if e.user_id == user_id]
        user_events.sort(key=lambda x: x.timestamp)
        
        # Classify events
        event_sequence = [self.classify_event(e) for e in user_events]
        
        # Sliding window analysis
        suspicious_patterns = []
        for i in range(len(event_sequence) - self.window_size + 1):
            window = event_sequence[i:i + self.window_size]
            
            # Check against known suspicious patterns
            for pattern in self.suspicious_sequences:
                if self._matches_pattern(window, pattern):
                    suspicious_patterns.append({
                        'pattern': pattern,
                        'window': window,
                        'start_time': user_events[i].timestamp,
                        'end_time': user_events[i + len(pattern) - 1].timestamp,
                        'confidence': self._calculate_confidence(window, pattern)
                    })
        
        # Frequency analysis
        pattern_counts = defaultdict(int)
        for event_type in event_sequence:
            pattern_counts[event_type] += 1
        
        total_events = len(event_sequence)
        unusual_frequencies = {}
        for pattern, count in pattern_counts.items():
            frequency = count / total_events
            if frequency > 0.5 and pattern in ['error', 'high_complexity']:
                unusual_frequencies[pattern] = frequency
        
        return {
            'user_id': user_id,
            'total_events': total_events,
            'event_sequence': event_sequence,
            'suspicious_patterns': suspicious_patterns,
            'unusual_frequencies': unusual_frequencies,
            'risk_score': self._calculate_risk_score(
                suspicious_patterns, unusual_frequencies
            )
        }
    
    def _matches_pattern(self, window: List[str], pattern: List[str]) -> bool:
        """Check if window contains the suspicious pattern"""
        if len(pattern) > len(window):
            return False
        
        for i in range(len(window) - len(pattern) + 1):
            if window[i:i+len(pattern)] == pattern:
                return True
        return False
    
    def _calculate_confidence(self, window: List[str], pattern: List[str]) -> float:
        """Calculate confidence score for pattern match"""
        matches = sum(1 for i in range(len(window) - len(pattern) + 1)
                     if window[i:i+len(pattern)] == pattern)
        return min(1.0, matches / len(pattern))
    
    def _calculate_risk_score(self, 
                             suspicious_patterns: List[Dict],
                             unusual_frequencies: Dict[str, float]) -> float:
        """Calculate overall risk score for the sequence"""
        pattern_score = len(suspicious_patterns) * 0.3
        frequency_score = sum(unusual_frequencies.values()) * 0.7
        
        return min(1.0, pattern_score + frequency_score)`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Guide */}
            <section id="implementation" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Implementation: Building Your Monitoring System</h2>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Complete Monitoring System</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Here&apos;s a production-ready implementation that combines all the components we&apos;ve discussed:
                    </p>

                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                        <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`import asyncio
import json
import logging
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from dataclasses import dataclass
import redis
import sqlite3
from concurrent.futures import ThreadPoolExecutor

class BehavioralMonitoringSystem:
    def __init__(self, config: Dict[str, Any]):
        self.config = config
        self.redis_client = redis.Redis(**config['redis'])
        self.db_path = config['database']['path']
        self.event_queue = asyncio.Queue(maxsize=10000)
        self.anomaly_detector = BehaviorAnomalyDetector()
        self.pattern_detector = SequentialPatternDetector()
        self.collector = BehaviorCollector(self.event_queue)
        self.executor = ThreadPoolExecutor(max_workers=4)
        self.running = False
        
        # Initialize database
        self._init_database()
        
        # Load existing model if available
        self._load_model()
    
    def _init_database(self):
        """Initialize SQLite database for storing events and patterns"""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS behavior_events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                timestamp REAL NOT NULL,
                user_id TEXT NOT NULL,
                session_id TEXT NOT NULL,
                event_type TEXT NOT NULL,
                event_data TEXT NOT NULL,
                risk_score REAL DEFAULT 0.0,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS anomalies (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id TEXT NOT NULL,
                anomaly_type TEXT NOT NULL,
                severity TEXT NOT NULL,
                details TEXT NOT NULL,
                resolved BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        cursor.execute('''
            CREATE INDEX IF NOT EXISTS idx_events_user_time 
            ON behavior_events(user_id, timestamp)
        ''')
        
        conn.commit()
        conn.close()
    
    async def start_monitoring(self):
        """Start the behavioral monitoring system"""
        self.running = True
        
        # Start background tasks
        tasks = [
            asyncio.create_task(self._event_processor()),
            asyncio.create_task(self._periodic_analysis()),
            asyncio.create_task(self._model_retraining())
        ]
        
        logging.info("Behavioral monitoring system started")
        
        try:
            await asyncio.gather(*tasks)
        except Exception as e:
            logging.error(f"Monitoring system error: {e}")
        finally:
            self.running = False
    
    async def _event_processor(self):
        """Process events from the queue"""
        while self.running:
            try:
                # Get event with timeout
                event = await asyncio.wait_for(
                    self.event_queue.get(), timeout=1.0
                )
                
                # Store event in database
                await self._store_event(event)
                
                # Real-time anomaly detection
                await self._check_real_time_anomalies(event)
                
            except asyncio.TimeoutError:
                continue
            except Exception as e:
                logging.error(f"Event processing error: {e}")
    
    async def _store_event(self, event: BehaviorEvent):
        """Store event in database and cache"""
        # Store in database
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        event_data = {
            'request_data': event.request_data,
            'response_data': event.response_data,
            'processing_time': event.processing_time,
            'resource_usage': event.resource_usage,
            'metadata': event.metadata
        }
        
        cursor.execute('''
            INSERT INTO behavior_events 
            (timestamp, user_id, session_id, event_type, event_data)
            VALUES (?, ?, ?, ?, ?)
        ''', (
            event.timestamp,
            event.user_id,
            event.session_id,
            event.event_type,
            json.dumps(event_data)
        ))
        
        conn.commit()
        conn.close()
        
        # Cache recent events for real-time analysis
        cache_key = f"recent_events:{event.user_id}"
        self.redis_client.lpush(cache_key, json.dumps(asdict(event)))
        self.redis_client.ltrim(cache_key, 0, 99)  # Keep last 100 events
        self.redis_client.expire(cache_key, 3600)  # 1 hour TTL
    
    async def _check_real_time_anomalies(self, event: BehaviorEvent):
        """Perform real-time anomaly detection on incoming events"""
        try:
            # Get recent events for this user
            cache_key = f"recent_events:{event.user_id}"
            recent_events_data = self.redis_client.lrange(cache_key, 0, -1)
            
            if len(recent_events_data) < 5:
                return  # Need sufficient data
            
            # Convert to BehaviorEvent objects
            recent_events = []
            for event_data in recent_events_data:
                try:
                    data = json.loads(event_data)
                    recent_events.append(BehaviorEvent(**data))
                except Exception:
                    continue
            
            # Run anomaly detection
            if self.anomaly_detector.is_trained:
                anomalies = self.anomaly_detector.detect_anomalies(recent_events)
                
                for anomaly in anomalies:
                    await self._handle_anomaly(event.user_id, anomaly)
            
            # Run pattern detection
            pattern_analysis = self.pattern_detector.analyze_sequence(
                recent_events, event.user_id
            )
            
            if pattern_analysis['risk_score'] > 0.7:
                await self._handle_suspicious_pattern(
                    event.user_id, pattern_analysis
                )
                
        except Exception as e:
            logging.error(f"Real-time analysis error: {e}")
    
    async def _handle_anomaly(self, user_id: str, anomaly: Dict[str, Any]):
        """Handle detected anomaly"""
        # Store anomaly
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute('''
            INSERT INTO anomalies (user_id, anomaly_type, severity, details)
            VALUES (?, ?, ?, ?)
        ''', (
            user_id,
            'behavioral_anomaly',
            anomaly['severity'],
            json.dumps(anomaly)
        ))
        
        conn.commit()
        conn.close()
        
        # Trigger alerts for high-severity anomalies
        if anomaly['severity'] in ['critical', 'high']:
            await self._send_alert({
                'type': 'behavioral_anomaly',
                'user_id': user_id,
                'severity': anomaly['severity'],
                'details': anomaly,
                'timestamp': datetime.now().isoformat()
            })
    
    async def _send_alert(self, alert_data: Dict[str, Any]):
        """Send alert to configured channels"""
        # Log alert
        logging.warning(f"SECURITY ALERT: {alert_data}")
        
        # Send to external systems (webhook, Slack, etc.)
        alert_channels = self.config.get('alerts', {}).get('channels', [])
        
        for channel in alert_channels:
            try:
                if channel['type'] == 'webhook':
                    # Send webhook (implementation depends on your setup)
                    pass
                elif channel['type'] == 'email':
                    # Send email alert
                    pass
            except Exception as e:
                logging.error(f"Alert sending failed: {e}")
    
    async def get_user_behavior_summary(self, 
                                      user_id: str, 
                                      hours: int = 24) -> Dict[str, Any]:
        """Get behavioral summary for a user"""
        start_time = datetime.now() - timedelta(hours=hours)
        
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        # Get events
        cursor.execute('''
            SELECT * FROM behavior_events 
            WHERE user_id = ? AND timestamp >= ?
            ORDER BY timestamp DESC
        ''', (user_id, start_time.timestamp()))
        
        events = cursor.fetchall()
        
        # Get anomalies
        cursor.execute('''
            SELECT * FROM anomalies 
            WHERE user_id = ? AND created_at >= ?
            ORDER BY created_at DESC
        ''', (user_id, start_time.isoformat()))
        
        anomalies = cursor.fetchall()
        conn.close()
        
        return {
            'user_id': user_id,
            'period_hours': hours,
            'total_events': len(events),
            'total_anomalies': len(anomalies),
            'risk_level': self._calculate_user_risk_level(events, anomalies),
            'recent_events': events[:10],  # Last 10 events
            'recent_anomalies': anomalies[:5]  # Last 5 anomalies
        }
    
    def _calculate_user_risk_level(self, events: List, anomalies: List) -> str:
        """Calculate overall risk level for user"""
        if not events:
            return 'unknown'
        
        anomaly_rate = len(anomalies) / len(events)
        
        if anomaly_rate > 0.3:
            return 'critical'
        elif anomaly_rate > 0.1:
            return 'high'
        elif anomaly_rate > 0.05:
            return 'medium'
        else:
            return 'low'

# Usage example
async def main():
    config = {
        'redis': {'host': 'localhost', 'port': 6379, 'db': 0},
        'database': {'path': 'behavioral_monitoring.db'},
        'alerts': {
            'channels': [
                {'type': 'webhook', 'url': 'https://your-webhook.com/alerts'},
                {'type': 'email', 'recipients': ['security@yourcompany.com']}
            ]
        }
    }
    
    monitoring_system = BehavioralMonitoringSystem(config)
    await monitoring_system.start_monitoring()

if __name__ == "__main__":
    asyncio.run(main())`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* Response Automation */}
            <section id="response-automation" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Response Automation: Intelligent Threat Mitigation</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4 flex items-center">
                            <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                            Automated Response Levels
                        </h3>
                        <ul className="space-y-3 text-red-800 dark:text-red-200 text-sm">
                            <li className="flex items-start">
                                <div className="w-3 h-3 bg-red-600 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                                <div>
                                    <strong>Level 1 - Monitoring:</strong> Log and track anomalous behavior
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-3 h-3 bg-red-600 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                                <div>
                                    <strong>Level 2 - Throttling:</strong> Rate limit suspicious users
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-3 h-3 bg-red-600 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                                <div>
                                    <strong>Level 3 - Filtering:</strong> Apply additional input/output filters
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-3 h-3 bg-red-600 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                                <div>
                                    <strong>Level 4 - Quarantine:</strong> Isolate user sessions for review
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-3 h-3 bg-red-600 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                                <div>
                                    <strong>Level 5 - Block:</strong> Temporary or permanent access denial
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                            <Zap className="h-5 w-5 text-blue-600 mr-2" />
                            Response Triggers
                        </h3>
                        <ul className="space-y-3 text-blue-800 dark:text-blue-200 text-sm">
                            <li className="flex items-start">
                                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                                <div>
                                    <strong>Anomaly Score:</strong> Threshold-based automated responses
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                                <div>
                                    <strong>Pattern Matching:</strong> Known attack signature detection
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                                <div>
                                    <strong>Rate Limiting:</strong> Excessive request frequency protection
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                                <div>
                                    <strong>Content Analysis:</strong> Suspicious prompt/response patterns
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                                <div>
                                    <strong>Resource Usage:</strong> Abnormal computational demands
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Analytics Dashboard */}
            <section id="analytics-dashboard" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Analytics Dashboard: Visualization and Insights</h2>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Metrics to Monitor</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-semibold text-blue-900 dark:text-blue-100">User Behavior</h4>
                                <Users className="h-6 w-6 text-blue-600" />
                            </div>
                            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                                <li>• Active users per hour/day</li>
                                <li>• Average session duration</li>
                                <li>• Request patterns by user type</li>
                                <li>• Geographical distribution</li>
                                <li>• Device and platform usage</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-semibold text-green-900 dark:text-green-100">System Performance</h4>
                                <BarChart3 className="h-6 w-6 text-green-600" />
                            </div>
                            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                                <li>• Response time distribution</li>
                                <li>• Token usage trends</li>
                                <li>• Error rates by category</li>
                                <li>• Resource utilization</li>
                                <li>• Throughput metrics</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-lg">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-semibold text-red-900 dark:text-red-100">Security Events</h4>
                                <Shield className="h-6 w-6 text-red-600" />
                            </div>
                            <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
                                <li>• Anomaly detection alerts</li>
                                <li>• Attack attempt frequency</li>
                                <li>• Blocked/throttled users</li>
                                <li>• False positive rates</li>
                                <li>• Incident response times</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            <strong>Pro Tip:</strong> Implement real-time dashboards using tools like Grafana, Kibana, or 
                            custom React dashboards that connect to your monitoring system&apos;s API. Focus on actionable 
                            metrics that help your security team make quick decisions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Best Practices: Production Deployment</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                            Implementation Guidelines
                        </h3>
                        <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Start Simple:</strong> Begin with basic metrics before advanced ML</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Baseline Period:</strong> Collect 2-4 weeks of normal behavior data</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Gradual Rollout:</strong> Deploy monitoring incrementally across user segments</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Privacy First:</strong> Anonymize sensitive data in monitoring logs</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>False Positive Management:</strong> Tune thresholds based on feedback</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                            Operational Excellence
                        </h3>
                        <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                            <li className="flex items-start">
                                <Target className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>SLA Targets:</strong> Maintain &lt;200ms detection latency, 99.9% uptime</span>
                            </li>
                            <li className="flex items-start">
                                <Target className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Model Retraining:</strong> Update detection models weekly or monthly</span>
                            </li>
                            <li className="flex items-start">
                                <Target className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Incident Response:</strong> Define clear escalation procedures</span>
                            </li>
                            <li className="flex items-start">
                                <Target className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Documentation:</strong> Maintain runbooks for common scenarios</span>
                            </li>
                            <li className="flex items-start">
                                <Target className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Team Training:</strong> Regular security team education on new threats</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section id="next-steps" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Next Steps: Advanced Monitoring</h2>
                
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg p-8 border border-primary-200 dark:border-primary-800">
                    <p className="text-primary-800 dark:text-primary-200 text-lg leading-relaxed mb-6">
                        Behavioral monitoring is an evolving discipline that becomes more sophisticated as your AI systems 
                        mature. The key to success lies in continuous learning, adaptation, and staying ahead of emerging 
                        threats through proactive monitoring and analysis.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Advanced Techniques</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Implement federated learning for privacy-preserving detection</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Deploy graph neural networks for relationship analysis</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Build ensemble models combining multiple detection approaches</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Integrate threat intelligence feeds for proactive defense</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Recommended Learning</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <Link href="/learn/threat-modeling" className="text-primary-600 dark:text-primary-400 hover:underline">
                                        AI Threat Modeling
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <Link href="/learn/red-team" className="text-primary-600 dark:text-primary-400 hover:underline">
                                        Red Team Testing
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <Link href="/learn/data-validation" className="text-primary-600 dark:text-primary-400 hover:underline">
                                        Data Validation
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <Link href="/learn/optimization" className="text-primary-600 dark:text-primary-400 hover:underline">
                                        Performance Optimization
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <p className="text-primary-800 dark:text-primary-200 font-semibold">
                        Remember: Effective behavioral monitoring requires a balance between security and user experience. 
                        Always prioritize user privacy while maintaining robust threat detection capabilities.
                    </p>
                </div>
            </section>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link
                    href="/learn/prompt-injection"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Prompt Injection
                </Link>
                <Link
                    href="/learn/data-validation"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                    Data Validation
                    <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </div>
    )
}