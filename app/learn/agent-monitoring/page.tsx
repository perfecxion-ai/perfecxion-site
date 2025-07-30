import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Eye, Shield, Brain, Activity, AlertCircle, BarChart, Bell, ArrowLeft, CheckCircle, Zap, Monitor, TrendingUp, Server, Clock, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Agent Monitoring - Learn AI Security - perfecXion.ai',
    description: 'Master AI agent monitoring. Learn behavioral analysis, anomaly detection, response protocols, and comprehensive monitoring systems for AI security.',
    keywords: 'AI agent monitoring, behavioral analysis, anomaly detection, AI monitoring, agent security, continuous monitoring, AI observability',
}

export default function AgentMonitoringPage() {
    return (
        <>
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex">
                    <li className="flex items-center">
                        <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">Agent Monitoring</li>
                </ol>
            </nav>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
                    <Eye className="h-10 w-10 text-primary-600 mr-4" />
                    Agent Monitoring
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
                    AI agents operate autonomously, making thousands of decisions per second. Without proper monitoring, 
                    you're flying blind. This comprehensive guide covers everything from real-time behavioral analysis to 
                    advanced anomaly detection, helping you build monitoring systems that catch threats before they cause 
                    damage while maintaining operational excellence.
                </p>
            </div>

            {/* Monitoring Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                    <Activity className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">99.9%</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Threat Detection</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100">&lt;100ms</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Alert Latency</div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                    <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">10TB/day</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">Data Processed</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                    <Bell className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">0.01%</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">False Positive Rate</div>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#introduction" className="text-primary-600 dark:text-primary-400 hover:underline">Introduction: Why Monitor AI Agents</a></li>
                    <li><a href="#core-concepts" className="text-primary-600 dark:text-primary-400 hover:underline">Core Concepts: Monitoring Fundamentals</a></li>
                    <li><a href="#practical-examples" className="text-primary-600 dark:text-primary-400 hover:underline">Practical Examples: Real-World Monitoring</a></li>
                    <li><a href="#implementation-guide" className="text-primary-600 dark:text-primary-400 hover:underline">Implementation Guide: Building Your System</a></li>
                    <li><a href="#best-practices" className="text-primary-600 dark:text-primary-400 hover:underline">Best Practices: Industry Standards</a></li>
                    <li><a href="#case-studies" className="text-primary-600 dark:text-primary-400 hover:underline">Case Studies: Success Stories</a></li>
                    <li><a href="#troubleshooting" className="text-primary-600 dark:text-primary-400 hover:underline">Troubleshooting: Common Challenges</a></li>
                    <li><a href="#next-steps" className="text-primary-600 dark:text-primary-400 hover:underline">Next Steps: Advanced Monitoring</a></li>
                </ul>
            </div>

            {/* Introduction */}
            <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Eye className="h-6 w-6 text-blue-500 mr-3" />
                    Introduction: Why Monitor AI Agents
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-4">
                        AI agents are the autonomous workforce of the digital age. They make decisions, interact with users, 
                        process data, and execute actions—all without human intervention. This autonomy brings tremendous 
                        value but also introduces unique risks. Unlike traditional software that follows predetermined paths, 
                        AI agents can exhibit emergent behaviors, drift from their intended purpose, or fall victim to 
                        sophisticated attacks.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Consider this: A financial trading agent processes millions of transactions daily. A slight behavioral 
                        drift could cost millions. A customer service agent handles sensitive queries—one compromised response 
                        could breach privacy regulations. A medical diagnostic agent analyzes patient data—an undetected 
                        anomaly could endanger lives. The stakes couldn't be higher.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Effective agent monitoring isn't just about catching problems—it's about understanding your AI's 
                        behavior deeply enough to predict and prevent issues before they occur. This guide will equip you 
                        with the knowledge and tools to build monitoring systems that provide complete visibility into your 
                        AI agents' operations while maintaining the performance and autonomy that make them valuable.
                    </p>
                </div>
            </section>

            {/* Core Concepts */}
            <section id="core-concepts" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Concepts: Monitoring Fundamentals</h2>
                
                <div className="space-y-8">
                    {/* Behavioral Analysis */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Brain className="h-5 w-5 text-blue-500 mr-2" />
                            Behavioral Analysis
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Understanding normal agent behavior is the foundation of effective monitoring. By establishing 
                            baselines and tracking deviations, you can detect issues before they become critical.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Behavioral Metrics</h4>
                                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                    <li>• Response time distributions</li>
                                    <li>• Decision confidence levels</li>
                                    <li>• Action frequency patterns</li>
                                    <li>• Resource utilization trends</li>
                                    <li>• Interaction complexity metrics</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Analysis Techniques</h4>
                                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                                    <li>• Statistical process control</li>
                                    <li>• Time series analysis</li>
                                    <li>• Pattern recognition</li>
                                    <li>• Clustering algorithms</li>
                                    <li>• Predictive modeling</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`# Behavioral baseline establishment
class BehaviorBaseline:
    def __init__(self, window_size=7*24*60*60):  # 7 days
        self.metrics = defaultdict(list)
        self.window_size = window_size
        
    def update(self, agent_id, metric_name, value):
        timestamp = time.time()
        self.metrics[f"{agent_id}:{metric_name}"].append({
            "value": value,
            "timestamp": timestamp
        })
        self._cleanup_old_data()
    
    def get_baseline(self, agent_id, metric_name):
        data = self.metrics[f"{agent_id}:{metric_name}"]
        if len(data) < 100:  # Minimum samples
            return None
            
        values = [d["value"] for d in data]
        return {
            "mean": np.mean(values),
            "std": np.std(values),
            "percentiles": np.percentile(values, [5, 25, 50, 75, 95])
        }`}
                            </pre>
                        </div>
                    </div>

                    {/* Anomaly Detection */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                            Anomaly Detection
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Detecting anomalies in AI agent behavior requires sophisticated techniques that can distinguish 
                            between normal variations and genuine threats.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Multi-Layer Anomaly Detection</h4>
                                <pre className="text-sm text-red-800 dark:text-red-200 overflow-x-auto">
{`class AnomalyDetector:
    def __init__(self):
        self.detectors = {
            "statistical": StatisticalDetector(),
            "ml_based": MLAnomalyDetector(),
            "rule_based": RuleBasedDetector(),
            "temporal": TemporalAnomalyDetector()
        }
        
    def detect_anomalies(self, agent_metrics):
        anomalies = []
        
        # Layer 1: Statistical detection
        stat_anomalies = self.detectors["statistical"].detect(
            agent_metrics,
            z_threshold=3.0
        )
        
        # Layer 2: ML-based detection
        ml_anomalies = self.detectors["ml_based"].predict(
            agent_metrics
        )
        
        # Layer 3: Rule-based detection
        rule_anomalies = self.detectors["rule_based"].check(
            agent_metrics
        )
        
        # Layer 4: Temporal patterns
        temporal_anomalies = self.detectors["temporal"].analyze(
            agent_metrics
        )
        
        # Combine and score
        all_anomalies = self._combine_detections(
            stat_anomalies, ml_anomalies, 
            rule_anomalies, temporal_anomalies
        )
        
        return self._rank_by_severity(all_anomalies)`}
                                </pre>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
                                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Real-time Stream Processing</h4>
                                <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-2">
                                    Process millions of events per second with sub-second detection latency:
                                </p>
                                <pre className="text-xs text-yellow-800 dark:text-yellow-200 overflow-x-auto">
{`# Apache Flink stream processing
def anomaly_detection_pipeline():
    env = StreamExecutionEnvironment.get_execution_environment()
    
    # Ingest agent metrics stream
    metrics_stream = env.add_source(
        KafkaSource("agent-metrics")
    )
    
    # Window aggregation
    windowed = metrics_stream \
        .key_by(lambda x: x.agent_id) \
        .window(TumblingWindow(60))  # 1-minute windows
        
    # Anomaly detection
    anomalies = windowed \
        .process(AnomalyDetectionFunction()) \
        .filter(lambda x: x.severity > 0.7)
    
    # Alert sink
    anomalies.add_sink(AlertingSink())`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Continuous Monitoring */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Activity className="h-5 w-5 text-purple-500 mr-2" />
                            Continuous Monitoring Architecture
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Build a monitoring system that provides 24/7 visibility into agent operations with minimal 
                            performance impact.
                        </p>

                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Monitoring Stack Components</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-purple-800 dark:text-purple-200 text-sm">
                                <div>
                                    <strong>Data Collection:</strong>
                                    <ul className="mt-1 space-y-1">
                                        <li>• Agent instrumentation</li>
                                        <li>• Metrics exporters</li>
                                        <li>• Log aggregation</li>
                                        <li>• Trace collection</li>
                                    </ul>
                                </div>
                                <div>
                                    <strong>Processing:</strong>
                                    <ul className="mt-1 space-y-1">
                                        <li>• Stream processing</li>
                                        <li>• Time series DB</li>
                                        <li>• Analytics engine</li>
                                        <li>• ML pipelines</li>
                                    </ul>
                                </div>
                                <div>
                                    <strong>Visualization:</strong>
                                    <ul className="mt-1 space-y-1">
                                        <li>• Real-time dashboards</li>
                                        <li>• Alert management</li>
                                        <li>• Historical analysis</li>
                                        <li>• Report generation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Response Protocols */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Bell className="h-5 w-5 text-orange-500 mr-2" />
                            Response Protocols
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Automated response protocols ensure rapid mitigation of detected issues while maintaining 
                            service availability.
                        </p>

                        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Automated Response System</h4>
                            <pre className="text-sm text-orange-800 dark:text-orange-200 overflow-x-auto">
{`class ResponseOrchestrator:
    def __init__(self):
        self.response_strategies = {
            "performance_degradation": self.handle_performance,
            "security_threat": self.handle_security,
            "behavioral_drift": self.handle_drift,
            "system_failure": self.handle_failure
        }
        
    async def respond_to_anomaly(self, anomaly):
        severity = anomaly.severity
        category = anomaly.category
        
        # Immediate actions
        if severity > 0.9:
            await self.emergency_response(anomaly)
        
        # Category-specific response
        if category in self.response_strategies:
            response = await self.response_strategies[category](
                anomaly
            )
        
        # Notification
        await self.notify_stakeholders(anomaly, response)
        
        # Post-incident analysis
        self.schedule_analysis(anomaly, response)
        
    async def emergency_response(self, anomaly):
        actions = []
        
        # Isolate affected agent
        if anomaly.risk_score > 0.95:
            await self.isolate_agent(anomaly.agent_id)
            actions.append("agent_isolated")
        
        # Traffic diversion
        await self.divert_traffic(anomaly.agent_id)
        actions.append("traffic_diverted")
        
        # Rollback if needed
        if anomaly.type == "model_corruption":
            await self.rollback_model(anomaly.agent_id)
            actions.append("model_rollback")
            
        return actions`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practical Examples */}
            <section id="practical-examples" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Practical Examples: Real-World Monitoring</h2>
                
                <div className="space-y-6">
                    {/* LLM Monitoring */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                            LLM Agent Monitoring System
                        </h3>
                        <p className="text-blue-800 dark:text-blue-200 mb-4">
                            Monitor Large Language Model agents for prompt injection attempts, hallucinations, and 
                            behavioral drift in production.
                        </p>
                        
                        <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded mb-4">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Complete Implementation:</h4>
                            <pre className="text-sm text-blue-800 dark:text-blue-200 overflow-x-auto">
{`import asyncio
from typing import Dict, List, Any
import numpy as np
from datetime import datetime, timedelta

class LLMMonitor:
    def __init__(self):
        self.metrics_buffer = []
        self.baselines = {}
        self.alert_thresholds = {
            "response_time": 2000,  # ms
            "token_count": 4000,
            "confidence_drop": 0.3,
            "repetition_ratio": 0.4
        }
        
    async def monitor_interaction(self, 
                                 agent_id: str,
                                 request: Dict,
                                 response: Dict):
        """Monitor single LLM interaction"""
        
        # Extract metrics
        metrics = {
            "agent_id": agent_id,
            "timestamp": datetime.utcnow(),
            "request_length": len(request["prompt"]),
            "response_length": len(response["text"]),
            "response_time": response["latency"],
            "confidence": response.get("confidence", 1.0),
            "token_count": response["token_count"],
            "repetition_score": self._calculate_repetition(
                response["text"]
            ),
            "sentiment_score": self._analyze_sentiment(
                response["text"]
            ),
            "toxicity_score": self._check_toxicity(
                response["text"]
            )
        }
        
        # Check for anomalies
        anomalies = await self._detect_anomalies(metrics)
        
        # Store metrics
        await self._store_metrics(metrics)
        
        # Handle anomalies
        if anomalies:
            await self._handle_anomalies(agent_id, anomalies)
            
        return {
            "metrics": metrics,
            "anomalies": anomalies,
            "health_score": self._calculate_health_score(metrics)
        }
    
    async def _detect_anomalies(self, metrics: Dict) -> List[Dict]:
        anomalies = []
        
        # 1. Response time anomaly
        if metrics["response_time"] > self.alert_thresholds["response_time"]:
            anomalies.append({
                "type": "high_latency",
                "severity": "medium",
                "value": metrics["response_time"]
            })
        
        # 2. Token explosion
        if metrics["token_count"] > self.alert_thresholds["token_count"]:
            anomalies.append({
                "type": "token_explosion",
                "severity": "high",
                "value": metrics["token_count"]
            })
        
        # 3. Confidence drop
        baseline_confidence = self.baselines.get(
            metrics["agent_id"], {}
        ).get("confidence", 0.8)
        
        if metrics["confidence"] < baseline_confidence - self.alert_thresholds["confidence_drop"]:
            anomalies.append({
                "type": "confidence_drop",
                "severity": "high",
                "value": metrics["confidence"]
            })
        
        # 4. High repetition (possible loop)
        if metrics["repetition_score"] > self.alert_thresholds["repetition_ratio"]:
            anomalies.append({
                "type": "repetition_detected",
                "severity": "medium",
                "value": metrics["repetition_score"]
            })
        
        # 5. Prompt injection attempt
        if self._detect_injection_patterns(metrics):
            anomalies.append({
                "type": "prompt_injection_attempt",
                "severity": "critical",
                "details": "Suspicious patterns detected"
            })
        
        return anomalies
    
    def _calculate_repetition(self, text: str) -> float:
        """Calculate text repetition score"""
        words = text.lower().split()
        if len(words) < 10:
            return 0.0
            
        # N-gram analysis
        ngrams = []
        for n in [2, 3, 4]:  # 2,3,4-grams
            for i in range(len(words) - n + 1):
                ngrams.append(" ".join(words[i:i+n]))
        
        # Calculate repetition
        unique_ngrams = len(set(ngrams))
        total_ngrams = len(ngrams)
        
        if total_ngrams == 0:
            return 0.0
            
        return 1 - (unique_ngrams / total_ngrams)
    
    async def continuous_monitoring(self):
        """Main monitoring loop"""
        while True:
            # Process buffered metrics
            if self.metrics_buffer:
                await self._process_metrics_batch()
            
            # Update baselines
            await self._update_baselines()
            
            # Check system health
            await self._system_health_check()
            
            await asyncio.sleep(10)  # 10-second intervals

# Usage example
monitor = LLMMonitor()

# In your LLM serving code
async def serve_llm_request(request):
    agent_id = request["agent_id"]
    
    # Process request
    start_time = time.time()
    response = await llm_model.generate(request["prompt"])
    response["latency"] = (time.time() - start_time) * 1000
    
    # Monitor
    monitoring_result = await monitor.monitor_interaction(
        agent_id, request, response
    )
    
    # Add monitoring metadata
    response["monitoring"] = monitoring_result
    
    return response`}
                            </pre>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded">
                                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Key Metrics:</h5>
                                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                    <li>• Response latency tracking</li>
                                    <li>• Token usage patterns</li>
                                    <li>• Confidence scoring</li>
                                    <li>• Content safety checks</li>
                                </ul>
                            </div>
                            <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded">
                                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Detection Capabilities:</h5>
                                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                    <li>• Prompt injection attempts</li>
                                    <li>• Hallucination patterns</li>
                                    <li>• Output loops/repetition</li>
                                    <li>• Performance degradation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Trading Bot Monitoring */}
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">
                            Financial Trading Agent Monitor
                        </h3>
                        <p className="text-green-800 dark:text-green-200 mb-4">
                            High-frequency monitoring for trading agents with microsecond precision and real-time 
                            risk assessment.
                        </p>

                        <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded mb-4">
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Risk-Aware Monitoring:</h4>
                            <pre className="text-sm text-green-800 dark:text-green-200 overflow-x-auto">
{`class TradingAgentMonitor:
    def __init__(self):
        self.risk_engine = RiskEngine()
        self.market_analyzer = MarketAnalyzer()
        self.position_tracker = PositionTracker()
        
    def monitor_trade_decision(self, agent_id, trade):
        # Pre-trade checks
        risk_assessment = self.pre_trade_analysis(trade)
        
        if risk_assessment["risk_score"] > 0.8:
            return self.block_trade(trade, risk_assessment)
        
        # Real-time monitoring
        monitoring_data = {
            "timestamp": time.time_ns(),  # Nanosecond precision
            "agent_id": agent_id,
            "trade": trade,
            "market_conditions": self.market_analyzer.snapshot(),
            "agent_state": self.get_agent_state(agent_id),
            "risk_metrics": risk_assessment
        }
        
        # Pattern detection
        patterns = self.detect_trading_patterns(
            agent_id, trade, monitoring_data
        )
        
        if patterns["anomaly_detected"]:
            self.handle_trading_anomaly(patterns)
        
        # Performance tracking
        self.update_performance_metrics(agent_id, trade)
        
        return {
            "approved": True,
            "monitoring_id": self.log_trade(monitoring_data),
            "risk_score": risk_assessment["risk_score"]
        }
    
    def detect_trading_patterns(self, agent_id, trade, context):
        patterns = {
            "anomaly_detected": False,
            "pattern_type": None,
            "confidence": 0.0
        }
        
        # Check for wash trading
        if self.detect_wash_trading(agent_id, trade):
            patterns.update({
                "anomaly_detected": True,
                "pattern_type": "wash_trading",
                "confidence": 0.95
            })
        
        # Check for front-running
        if self.detect_front_running(agent_id, trade, context):
            patterns.update({
                "anomaly_detected": True,
                "pattern_type": "front_running",
                "confidence": 0.87
            })
        
        # Check for unusual position sizing
        position_anomaly = self.check_position_sizing(
            agent_id, trade
        )
        if position_anomaly:
            patterns.update({
                "anomaly_detected": True,
                "pattern_type": "position_anomaly",
                "confidence": position_anomaly["confidence"]
            })
        
        return patterns`}
                            </pre>
                        </div>
                    </div>

                    {/* IoT Agent Monitoring */}
                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">
                            IoT Edge Agent Monitoring
                        </h3>
                        <p className="text-purple-800 dark:text-purple-200 mb-4">
                            Distributed monitoring for thousands of edge AI agents with limited resources and 
                            intermittent connectivity.
                        </p>

                        <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded mb-4">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Edge-Optimized Monitoring:</h4>
                            <pre className="text-sm text-purple-800 dark:text-purple-200 overflow-x-auto">
{`class EdgeAgentMonitor:
    def __init__(self):
        self.local_buffer = CircularBuffer(1000)  # Limited memory
        self.compression = MetricsCompressor()
        self.edge_analytics = EdgeAnalytics()
        
    def lightweight_monitoring(self, agent_metrics):
        """Optimized for edge devices"""
        
        # Local processing to reduce bandwidth
        compressed_metrics = self.compression.compress(
            agent_metrics
        )
        
        # Edge analytics
        local_anomalies = self.edge_analytics.detect(
            compressed_metrics
        )
        
        # Selective reporting
        if local_anomalies or self.should_report():
            self.report_to_cloud(compressed_metrics, local_anomalies)
        else:
            self.local_buffer.add(compressed_metrics)
        
        # Adaptive monitoring
        self.adjust_monitoring_frequency(local_anomalies)
    
    def federated_monitoring(self):
        """Coordinate monitoring across edge network"""
        
        # Peer-to-peer anomaly sharing
        peer_anomalies = self.get_peer_anomalies()
        
        # Collaborative detection
        network_patterns = self.detect_network_patterns(
            self.local_buffer.get_recent(),
            peer_anomalies
        )
        
        # Swarm intelligence
        if network_patterns["coordinated_anomaly"]:
            self.initiate_swarm_response(network_patterns)
    
    def adaptive_monitoring(self, resource_constraints):
        """Adjust monitoring based on available resources"""
        
        if resource_constraints["battery"] < 20:
            self.monitoring_interval *= 2
            self.metrics_precision = "low"
        
        if resource_constraints["bandwidth"] < 1000:  # 1KB/s
            self.enable_extreme_compression()
            self.batch_size = 100
        
        if resource_constraints["cpu"] > 80:
            self.disable_complex_analytics()
            self.use_simple_thresholds()`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Guide */}
            <section id="implementation-guide" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Implementation Guide: Building Your System</h2>
                
                <div className="space-y-8">
                    {/* Phase 1: Foundation */}
                    <div className="border-l-4 border-blue-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Phase 1: Monitoring Foundation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Start with core infrastructure that can scale with your AI deployment.
                        </p>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Infrastructure Setup:</h4>
                            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# Docker Compose for monitoring stack
version: '3.8'

services:
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    ports:
      - "9090:9090"
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.retention.time=30d'
      - '--web.enable-lifecycle'
  
  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    volumes:
      - grafana_data:/var/lib/grafana
      - ./dashboards:/etc/grafana/provisioning/dashboards
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
      - GF_INSTALL_PLUGINS=grafana-piechart-panel
  
  elasticsearch:
    image: elasticsearch:8.8.0
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
    volumes:
      - es_data:/usr/share/elasticsearch/data
    ports:
      - "9200:9200"
  
  kafka:
    image: confluentinc/cp-kafka:latest
    environment:
      - KAFKA_BROKER_ID=1
      - KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181
      - KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092
    ports:
      - "9092:9092"
  
  alertmanager:
    image: prom/alertmanager:latest
    volumes:
      - ./alertmanager.yml:/etc/alertmanager/alertmanager.yml
    ports:
      - "9093:9093"

volumes:
  prometheus_data:
  grafana_data:
  es_data:`}
                            </pre>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Agent Instrumentation</h4>
                                <pre className="text-xs text-blue-800 dark:text-blue-200 overflow-x-auto">
{`# Python agent instrumentation
from prometheus_client import Counter, Histogram, Gauge
import opentelemetry

# Metrics
request_count = Counter(
    'agent_requests_total',
    'Total requests',
    ['agent_id', 'endpoint']
)

response_time = Histogram(
    'agent_response_seconds',
    'Response time',
    ['agent_id']
)

class InstrumentedAgent:
    @response_time.time()
    @request_count.count_exceptions()
    def process_request(self, request):
        # Your agent logic
        pass`}
                                </pre>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Log Collection</h4>
                                <pre className="text-xs text-green-800 dark:text-green-200 overflow-x-auto">
{`# Structured logging
import structlog

logger = structlog.get_logger()

class AgentLogger:
    def log_interaction(self, context):
        logger.info(
            "agent_interaction",
            agent_id=context.agent_id,
            request_id=context.request_id,
            latency_ms=context.latency,
            token_count=context.tokens,
            confidence=context.confidence
        )`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Phase 2: Data Pipeline */}
                    <div className="border-l-4 border-green-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Phase 2: Data Pipeline Implementation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Build scalable data pipelines for real-time monitoring and analysis.
                        </p>

                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Stream Processing Pipeline</h4>
                            <pre className="text-sm text-green-800 dark:text-green-200 overflow-x-auto">
{`from kafka import KafkaProducer, KafkaConsumer
from pyspark.streaming import StreamingContext
import json

class MonitoringPipeline:
    def __init__(self):
        self.producer = KafkaProducer(
            bootstrap_servers='localhost:9092',
            value_serializer=lambda v: json.dumps(v).encode()
        )
        
    def ingest_metrics(self, agent_id, metrics):
        """Ingest agent metrics into pipeline"""
        
        # Enrich metrics
        enriched = {
            **metrics,
            "agent_id": agent_id,
            "timestamp": time.time(),
            "datacenter": self.get_datacenter(),
            "version": self.get_agent_version(agent_id)
        }
        
        # Send to Kafka
        self.producer.send(
            'agent-metrics',
            key=agent_id.encode(),
            value=enriched
        )
    
    def process_stream(self):
        """Real-time stream processing"""
        
        # Spark Streaming context
        ssc = StreamingContext(spark_context, 10)
        
        # Create DStream from Kafka
        metrics_stream = KafkaUtils.createDirectStream(
            ssc,
            ['agent-metrics'],
            {"metadata.broker.list": "localhost:9092"}
        )
        
        # Parse JSON
        parsed = metrics_stream.map(
            lambda x: json.loads(x[1])
        )
        
        # Window aggregations
        windowed = parsed.window(60, 10)  # 60s window, 10s slide
        
        # Compute statistics
        stats = windowed.groupBy(
            lambda x: x['agent_id']
        ).mapValues(
            lambda metrics: self.compute_statistics(metrics)
        )
        
        # Anomaly detection
        anomalies = stats.filter(
            lambda x: self.is_anomalous(x[1])
        )
        
        # Store and alert
        anomalies.foreachRDD(
            lambda rdd: self.handle_anomalies(rdd)
        )
        
        ssc.start()
        ssc.awaitTermination()
    
    def compute_statistics(self, metrics):
        """Compute statistical metrics"""
        
        values = [m['response_time'] for m in metrics]
        
        return {
            "count": len(values),
            "mean": np.mean(values),
            "std": np.std(values),
            "p50": np.percentile(values, 50),
            "p95": np.percentile(values, 95),
            "p99": np.percentile(values, 99)
        }`}
                            </pre>
                        </div>
                    </div>

                    {/* Phase 3: Analytics */}
                    <div className="border-l-4 border-purple-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Phase 3: Advanced Analytics
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Implement sophisticated analytics for deep behavioral insights.
                        </p>

                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">ML-Based Anomaly Detection</h4>
                            <pre className="text-sm text-purple-800 dark:text-purple-200 overflow-x-auto">
{`import tensorflow as tf
from sklearn.ensemble import IsolationForest

class AdvancedAnalytics:
    def __init__(self):
        self.models = {
            "autoencoder": self.build_autoencoder(),
            "isolation_forest": IsolationForest(
                contamination=0.01
            ),
            "lstm": self.build_lstm_predictor()
        }
        
    def build_autoencoder(self):
        """Autoencoder for anomaly detection"""
        
        encoder = tf.keras.Sequential([
            tf.keras.layers.Dense(128, activation='relu'),
            tf.keras.layers.Dense(64, activation='relu'),
            tf.keras.layers.Dense(32, activation='relu'),
            tf.keras.layers.Dense(16, activation='relu')
        ])
        
        decoder = tf.keras.Sequential([
            tf.keras.layers.Dense(32, activation='relu'),
            tf.keras.layers.Dense(64, activation='relu'),
            tf.keras.layers.Dense(128, activation='relu'),
            tf.keras.layers.Dense(256, activation='sigmoid')
        ])
        
        autoencoder = tf.keras.Model(
            inputs=encoder.input,
            outputs=decoder(encoder.output)
        )
        
        autoencoder.compile(
            optimizer='adam',
            loss='mse'
        )
        
        return autoencoder
    
    def detect_anomalies(self, agent_metrics):
        """Multi-model anomaly detection"""
        
        # Prepare features
        features = self.extract_features(agent_metrics)
        
        # Autoencoder reconstruction error
        reconstruction = self.models["autoencoder"].predict(
            features
        )
        reconstruction_error = np.mean(
            np.square(features - reconstruction)
        )
        
        # Isolation Forest
        isolation_score = self.models["isolation_forest"].decision_function(
            features.reshape(1, -1)
        )[0]
        
        # LSTM prediction error
        predicted = self.models["lstm"].predict(
            features.reshape(1, -1, features.shape[0])
        )
        prediction_error = np.abs(predicted - features[-1])
        
        # Ensemble decision
        anomaly_score = self.ensemble_scoring(
            reconstruction_error,
            isolation_score,
            prediction_error
        )
        
        return {
            "is_anomaly": anomaly_score > 0.7,
            "score": anomaly_score,
            "contributing_factors": self.explain_anomaly(
                features, anomaly_score
            )
        }`}
                            </pre>
                        </div>
                    </div>

                    {/* Phase 4: Response System */}
                    <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Phase 4: Automated Response System
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Build automated response capabilities for rapid threat mitigation.
                        </p>

                        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Response Automation</h4>
                            <pre className="text-sm text-orange-800 dark:text-orange-200 overflow-x-auto">
{`class AutomatedResponseSystem:
    def __init__(self):
        self.response_policies = self.load_policies()
        self.circuit_breaker = CircuitBreaker()
        self.rate_limiter = AdaptiveRateLimiter()
        
    async def execute_response(self, anomaly, context):
        """Execute automated response based on anomaly type"""
        
        response_plan = self.determine_response(
            anomaly, context
        )
        
        # Pre-response validation
        if not self.validate_response(response_plan):
            return self.escalate_to_human(anomaly)
        
        # Execute response actions
        results = []
        for action in response_plan.actions:
            try:
                result = await self.execute_action(
                    action, context
                )
                results.append(result)
                
                # Check if we should continue
                if result.status == "failed":
                    break
                    
            except Exception as e:
                self.handle_response_failure(e, action)
        
        # Post-response monitoring
        await self.monitor_response_effectiveness(
            anomaly, results
        )
        
        return {
            "response_id": self.generate_response_id(),
            "actions_taken": results,
            "effectiveness": self.measure_effectiveness(
                anomaly, results
            )
        }
    
    async def execute_action(self, action, context):
        """Execute specific response action"""
        
        if action.type == "isolate_agent":
            return await self.isolate_agent(
                context.agent_id,
                duration=action.duration
            )
            
        elif action.type == "throttle_traffic":
            return await self.rate_limiter.apply_throttle(
                context.agent_id,
                limit=action.rate_limit
            )
            
        elif action.type == "rollback_model":
            return await self.rollback_to_safe_version(
                context.agent_id,
                version=action.target_version
            )
            
        elif action.type == "divert_traffic":
            return await self.traffic_manager.divert(
                from_agent=context.agent_id,
                to_agents=action.backup_agents,
                percentage=action.diversion_percentage
            )`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Best Practices: Industry Standards</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                            Google SRE Principles for AI
                        </h3>
                        <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Error Budgets:</strong> Define acceptable anomaly rates</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>SLIs/SLOs:</strong> Clear metrics and objectives</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Toil Reduction:</strong> Automate repetitive tasks</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Postmortems:</strong> Learn from incidents</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                            Observability Best Practices
                        </h3>
                        <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                            <li className="flex items-start">
                                <Monitor className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Three Pillars:</strong> Metrics, logs, and traces</span>
                            </li>
                            <li className="flex items-start">
                                <Monitor className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Context Propagation:</strong> End-to-end visibility</span>
                            </li>
                            <li className="flex items-start">
                                <Monitor className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Sampling Strategy:</strong> Balance detail vs overhead</span>
                            </li>
                            <li className="flex items-start">
                                <Monitor className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Standardization:</strong> Consistent naming and tagging</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
                            AI-Specific Monitoring Guidelines
                        </h3>
                        <div className="space-y-3 text-purple-800 dark:text-purple-200 text-sm">
                            <div>
                                <strong>1. Behavioral Baselines:</strong>
                                <p className="mt-1">Establish normal behavior patterns before declaring anomalies</p>
                            </div>
                            <div>
                                <strong>2. Explainability:</strong>
                                <p className="mt-1">Monitor not just what happened, but why</p>
                            </div>
                            <div>
                                <strong>3. Drift Detection:</strong>
                                <p className="mt-1">Track gradual changes in model behavior</p>
                            </div>
                            <div>
                                <strong>4. Feedback Loops:</strong>
                                <p className="mt-1">Monitor for unintended reinforcement</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">
                            Alerting Best Practices
                        </h3>
                        <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
                            <li><strong>Alert Fatigue Prevention:</strong> Quality over quantity</li>
                            <li><strong>Actionable Alerts:</strong> Include context and remediation</li>
                            <li><strong>Severity Levels:</strong> Clear escalation paths</li>
                            <li><strong>Alert Routing:</strong> Right team, right time</li>
                            <li><strong>Suppression Rules:</strong> Avoid duplicate alerts</li>
                            <li><strong>Testing:</strong> Regular alert validation</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Monitoring Maturity Model</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Basic Monitoring</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">System metrics, basic alerting, manual response</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Behavioral Monitoring</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Agent-specific metrics, anomaly detection, semi-automated response</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Predictive Monitoring</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">ML-based detection, predictive analytics, automated response</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Autonomous Monitoring</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Self-healing systems, preventive actions, continuous optimization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section id="case-studies" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Case Studies: Success Stories</h2>
                
                <div className="space-y-6">
                    {/* Netflix Case */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Netflix: Monitoring ML Models at Scale
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-red-600">10K+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Models Monitored</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">1B+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Daily Predictions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">99.99%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600">&lt;5min</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Incident Detection</div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge:</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Netflix needed to monitor thousands of recommendation models serving billions of predictions 
                                daily while maintaining sub-second response times and detecting content quality issues in 
                                real-time.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                                <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">Solution Architecture:</h5>
                                <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                                    <li>• Distributed tracing with Zipkin</li>
                                    <li>• Custom ML metrics in Atlas</li>
                                    <li>• Automated canary analysis</li>
                                    <li>• Chaos engineering for resilience</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Innovations:</h5>
                                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                    <li>• Model performance regression detection</li>
                                    <li>• A/B test monitoring integration</li>
                                    <li>• Automated rollback on anomalies</li>
                                    <li>• Predictive scaling based on patterns</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Results:</h4>
                            <p className="text-green-800 dark:text-green-200 text-sm">
                                Achieved 99.99% availability for ML services, reduced incident detection time from hours 
                                to minutes, and prevented multiple potential outages through predictive monitoring. The 
                                system now automatically handles 95% of anomalies without human intervention.
                            </p>
                        </div>
                    </div>

                    {/* Uber Case */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Uber: Real-time Fraud Detection Monitoring
                        </h3>
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Background:</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Uber's fraud detection system processes millions of transactions per minute, requiring 
                                real-time monitoring to catch evolving fraud patterns while minimizing false positives 
                                that impact legitimate users.
                            </p>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Monitoring Implementation:</h4>
                            <pre className="text-xs text-purple-800 dark:text-purple-200 overflow-x-auto">
{`# Uber's monitoring approach
class FraudMonitor:
    def __init__(self):
        self.rule_engine = RuleEngine()
        self.ml_models = ModelEnsemble()
        self.feedback_loop = FeedbackProcessor()
        
    def monitor_transaction(self, txn):
        # Multi-layer monitoring
        rule_score = self.rule_engine.evaluate(txn)
        ml_score = self.ml_models.predict(txn)
        
        # Real-time feedback integration
        historical_accuracy = self.feedback_loop.get_accuracy(
            model_version=self.ml_models.version,
            transaction_type=txn.type
        )
        
        # Adaptive thresholding
        threshold = self.calculate_dynamic_threshold(
            base_threshold=0.7,
            false_positive_rate=self.get_recent_fp_rate(),
            business_impact=txn.amount
        )
        
        return {
            "is_fraud": ml_score > threshold,
            "confidence": ml_score,
            "explanation": self.explain_decision(txn, ml_score)
        }`}
                            </pre>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded text-center">
                                <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">$100M+</div>
                                <div className="text-sm text-orange-800 dark:text-orange-200">Fraud Prevented Annually</div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded text-center">
                                <div className="text-2xl font-bold text-green-900 dark:text-green-100">50ms</div>
                                <div className="text-sm text-green-800 dark:text-green-200">Decision Latency</div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-center">
                                <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">0.1%</div>
                                <div className="text-sm text-blue-800 dark:text-blue-200">False Positive Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* Healthcare Case */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Mayo Clinic: Clinical AI Agent Monitoring
                        </h3>
                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Critical Requirements:</h4>
                            <p className="text-red-800 dark:text-red-200 text-sm">
                                Clinical AI agents require the highest level of monitoring due to patient safety implications. 
                                Every decision must be traceable, explainable, and continuously validated against clinical 
                                outcomes.
                            </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Monitoring Framework:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800 dark:text-blue-200 text-sm">
                                <div>
                                    <h5 className="font-semibold mb-1">Clinical Validation:</h5>
                                    <ul className="space-y-1">
                                        <li>• Continuous outcome tracking</li>
                                        <li>• Physician override monitoring</li>
                                        <li>• Diagnostic accuracy trends</li>
                                        <li>• Treatment effectiveness metrics</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold mb-1">Safety Monitoring:</h5>
                                    <ul className="space-y-1">
                                        <li>• Confidence threshold enforcement</li>
                                        <li>• Edge case detection</li>
                                        <li>• Bias monitoring across demographics</li>
                                        <li>• Regulatory compliance tracking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Impact:</h4>
                            <p className="text-green-800 dark:text-green-200 text-sm">
                                The monitoring system detected a 0.3% drift in diagnostic accuracy for rare conditions, 
                                leading to model retraining that prevented potential misdiagnoses. The system maintains 
                                100% audit trail compliance and has improved clinician trust through transparent monitoring.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Troubleshooting: Common Challenges</h2>
                
                <div className="space-y-6">
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">
                            Issue: Alert Fatigue
                        </h3>
                        <p className="text-red-800 dark:text-red-200 mb-3">
                            Too many alerts overwhelm operators, leading to important issues being missed.
                        </p>
                        <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded">
                            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Solutions:</h4>
                            <ul className="list-disc list-inside text-red-800 dark:text-red-200 text-sm space-y-1">
                                <li>Implement alert correlation to group related issues</li>
                                <li>Use ML to identify and suppress non-actionable alerts</li>
                                <li>Set dynamic thresholds based on historical patterns</li>
                                <li>Create alert hierarchies with clear escalation paths</li>
                                <li>Regular alert review and tuning sessions</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                            Issue: Data Volume Overload
                        </h3>
                        <p className="text-yellow-800 dark:text-yellow-200 mb-3">
                            Monitoring generates more data than systems can process or store effectively.
                        </p>
                        <div className="bg-yellow-100 dark:bg-yellow-900/40 p-4 rounded">
                            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Optimization Strategies:</h4>
                            <pre className="text-xs text-yellow-800 dark:text-yellow-200 overflow-x-auto">
{`# Intelligent sampling
class AdaptiveSampler:
    def should_sample(self, metric):
        # Always sample anomalies
        if metric.is_anomaly:
            return True
        
        # Dynamic sampling rate
        base_rate = 0.01  # 1%
        
        # Increase sampling during incidents
        if self.incident_active:
            return random.random() < 0.5
        
        # Importance-based sampling
        importance = self.calculate_importance(metric)
        sample_rate = base_rate * (1 + importance)
        
        return random.random() < sample_rate`}
                            </pre>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                            Issue: Baseline Drift
                        </h3>
                        <p className="text-blue-800 dark:text-blue-200 mb-3">
                            Normal behavior changes over time, causing false positives from outdated baselines.
                        </p>
                        <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Adaptive Baseline Management:</h4>
                            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                <li>Use rolling windows for baseline calculation</li>
                                <li>Implement seasonal adjustment algorithms</li>
                                <li>Detect and adapt to step changes vs gradual drift</li>
                                <li>Maintain multiple baseline models for different contexts</li>
                                <li>Regular baseline validation against ground truth</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                            Issue: Cross-Agent Correlation
                        </h3>
                        <p className="text-purple-800 dark:text-purple-200 mb-3">
                            Difficulty in detecting coordinated anomalies across multiple agents.
                        </p>
                        <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Correlation Techniques:</h4>
                            <ul className="list-disc list-inside text-purple-800 dark:text-purple-200 text-sm space-y-1">
                                <li>Graph-based anomaly detection for agent relationships</li>
                                <li>Time-window correlation analysis</li>
                                <li>Distributed tracing for request flow tracking</li>
                                <li>Swarm behavior analysis algorithms</li>
                                <li>Cross-agent communication monitoring</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section id="next-steps" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Next Steps: Advanced Monitoring</h2>
                
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg p-8 border border-primary-200 dark:border-primary-800">
                    <p className="text-primary-800 dark:text-primary-200 text-lg leading-relaxed mb-6">
                        You've built the foundation for comprehensive agent monitoring. The journey continues with 
                        advanced techniques that push the boundaries of what's possible in AI observability. As agents 
                        become more sophisticated, so must our monitoring capabilities.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Advanced Techniques</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Explainable AI monitoring for decision transparency</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Federated monitoring for distributed agents</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Predictive anomaly detection with time series forecasting</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Self-healing agent systems with automated remediation</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Continue Learning</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <Link href="/learn/behavioral-monitoring" className="text-primary-600 dark:text-primary-400 hover:underline">
                                        Advanced Behavioral Monitoring
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <Link href="/learn/incident-response" className="text-primary-600 dark:text-primary-400 hover:underline">
                                        AI Incident Response
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
                                    <Link href="/learn/optimization" className="text-primary-600 dark:text-primary-400 hover:underline">
                                        Performance Optimization
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <p className="text-primary-800 dark:text-primary-200 font-semibold">
                        Remember: Great monitoring isn't about watching everything—it's about watching the right things 
                        at the right time with the right context. Build systems that enhance, not hinder, your AI's capabilities.
                    </p>
                </div>
            </section>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link
                    href="/learn/model-security"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Model Security
                </Link>
                <Link
                    href="/learn/installation"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                    Installation Guide
                    <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </>
    )
}