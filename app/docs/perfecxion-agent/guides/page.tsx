import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Code, Users, Shield, Cpu, Brain, Zap } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Guides & Examples - perfecX Agent Documentation',
    description: 'Integration guides, best practices, and real-world examples for perfecX Agent.',
}

export default function PerfecxionAgentGuides() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/perfecxion-agent" className="hover:text-primary-600 dark:hover:text-primary-400">
                        perfecX Agent
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">Guides & Examples</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Guides & Examples
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Learn how to integrate perfecX Agent with popular frameworks and implement best practices.
                </p>

                {/* Framework Integration Guides */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Framework Integration Guides
                    </h2>

                    {/* LangChain Integration */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Cpu className="h-5 w-5 mr-2" />
                            LangChain Integration
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Complete guide for integrating perfecX Agent with LangChain applications.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from langchain.agents import create_react_agent, AgentExecutor
from langchain.tools import Tool
from perfecxion_agent import PerfecXAgent, SecurityPolicy

# Initialize perfecX Agent
px_agent = PerfecXAgent(api_key="your-api-key")

# Define security policy
policy = SecurityPolicy(
    name="langchain_safety",
    allowed_tools=["serpapi", "calculator", "wikipedia"],
    max_execution_time=60,
    memory_encryption=True
)

# Create your LangChain agent
tools = [
    Tool(name="Search", func=search_func, description="Search the web"),
    Tool(name="Calculator", func=calc_func, description="Perform calculations")
]

agent = create_react_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools)

# Wrap with perfecX Agent security
secure_executor = px_agent.wrap_langchain(
    executor,
    policy=policy,
    monitor_memory=True,
    detect_prompt_injection=True
)

# Use the secure executor
result = secure_executor.invoke({
    "input": "What is the weather in San Francisco?"
})

# View security metrics
metrics = px_agent.get_session_metrics()
print(f"Anomaly score: {metrics.anomaly_score}")
print(f"Tool usage: {metrics.tool_usage}")`}</pre>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                <strong>Best Practice:</strong> Always define explicit tool allowlists in your security policy to prevent unauthorized tool usage.
                            </p>
                        </div>
                    </div>

                    {/* AutoGPT Integration */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Brain className="h-5 w-5 mr-2" />
                            AutoGPT Integration
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Secure autonomous agents built with AutoGPT.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from autogpt.agents import Agent
from autogpt.config import Config
from perfecxion_agent import PerfecXAgent, MemoryProtection

# Initialize perfecX Agent
px_agent = PerfecXAgent(api_key="your-api-key")

# Configure memory protection
memory_protection = MemoryProtection(
    encrypt_vectors=True,
    sign_memories=True,
    detect_tampering=True,
    max_memory_size_mb=100
)

# Create AutoGPT agent
config = Config()
agent = Agent(
    ai_name="SecureAssistant",
    memory=px_agent.create_protected_memory(memory_protection),
    config=config
)

# Set up continuous monitoring
px_agent.monitor_autogpt(
    agent,
    alert_on_anomaly=True,
    block_suspicious_actions=True,
    log_all_activities=True
)

# Run the agent with protection
agent.start_interaction_loop()`}</pre>
                        </div>
                    </div>

                    {/* CrewAI Integration */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Users className="h-5 w-5 mr-2" />
                            CrewAI Multi-Agent Integration
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Secure multi-agent systems with CrewAI.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from crewai import Agent, Crew, Task
from perfecxion_agent import PerfecXAgent, MultiAgentPolicy

# Initialize perfecX Agent
px_agent = PerfecXAgent(api_key="your-api-key")

# Define multi-agent security policy
policy = MultiAgentPolicy(
    agent_isolation=True,
    secure_communication=True,
    prevent_collusion=True,
    audit_inter_agent_messages=True
)

# Create CrewAI agents with security wrappers
researcher = px_agent.wrap_crewai_agent(
    Agent(
        role='Researcher',
        goal='Find accurate information',
        backstory='Expert at finding reliable sources'
    ),
    agent_id="researcher-001"
)

writer = px_agent.wrap_crewai_agent(
    Agent(
        role='Writer',
        goal='Create compelling content',
        backstory='Skilled content creator'
    ),
    agent_id="writer-001"
)

# Create secure crew
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, writing_task]
)

# Monitor crew execution
with px_agent.monitor_crew(crew, policy=policy):
    result = crew.kickoff()
    
# Analyze multi-agent interactions
analysis = px_agent.analyze_crew_session()
print(f"Inter-agent messages: {analysis.message_count}")
print(f"Security violations: {analysis.violations}")
print(f"Collaboration score: {analysis.collaboration_score}")`}</pre>
                        </div>
                    </div>
                </div>

                {/* Security Best Practices */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Shield className="h-6 w-6 mr-2" />
                        Security Best Practices
                    </h2>

                    <div className="space-y-6">
                        {/* Memory Protection */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                1. Memory Protection
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Protect agent memory from tampering and unauthorized access.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Enable comprehensive memory protection
px_agent.configure_memory_protection({
    "encryption": {
        "enabled": True,
        "algorithm": "AES-256-GCM",
        "key_rotation_hours": 24
    },
    "signing": {
        "enabled": True,
        "verify_on_read": True,
        "algorithm": "HMAC-SHA256"
    },
    "access_control": {
        "require_authentication": True,
        "audit_all_access": True,
        "rate_limit_reads": 100  # per minute
    }
})`}</pre>
                            </div>
                        </div>

                        {/* Tool Sandboxing */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                2. Tool Sandboxing
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Implement strict controls on tool usage.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Create sandboxed tool wrapper
@px_agent.sandbox_tool(
    timeout_ms=5000,
    memory_limit_mb=256,
    network_access=False,
    filesystem_access="read_only"
)
def safe_code_executor(code: str) -> str:
    # Tool implementation
    return execute_code(code)

# Register with monitoring
px_agent.register_tool(
    safe_code_executor,
    log_all_executions=True,
    alert_on_timeout=True,
    block_on_violation=True
)`}</pre>
                            </div>
                        </div>

                        {/* Anomaly Detection */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                3. Real-Time Anomaly Detection
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Configure behavioral baselines and anomaly thresholds.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Configure anomaly detection
px_agent.configure_anomaly_detection({
    "behavioral_baseline": {
        "training_period_hours": 24,
        "update_frequency": "hourly",
        "metrics": ["response_time", "tool_usage", "token_count"]
    },
    "thresholds": {
        "anomaly_score": 0.7,
        "consecutive_anomalies": 3,
        "time_window_minutes": 5
    },
    "actions": {
        "on_anomaly": ["log", "alert", "throttle"],
        "on_critical": ["block", "notify_admin", "snapshot_state"]
    }
})`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Common Use Cases */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Zap className="h-6 w-6 mr-2" />
                        Common Use Cases
                    </h2>

                    {/* Customer Support Bot */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Customer Support Bot Protection
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Secure customer-facing AI agents handling sensitive data.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Customer support bot with PII protection
support_agent = px_agent.create_secure_agent(
    base_agent=customer_support_bot,
    config={
        "pii_protection": {
            "detect_pii": True,
            "redact_in_logs": True,
            "block_pii_in_tools": True,
            "pii_types": ["email", "phone", "ssn", "credit_card"]
        },
        "rate_limiting": {
            "requests_per_minute": 30,
            "tokens_per_request": 1000,
            "concurrent_sessions": 100
        },
        "content_filtering": {
            "block_harmful_content": True,
            "detect_prompt_injection": True,
            "sanitize_outputs": True
        }
    }
)`}</pre>
                        </div>
                    </div>

                    {/* Code Generation Agent */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Secure Code Generation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Protect code generation agents from producing malicious code.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Code generation with security scanning
code_agent = px_agent.create_secure_agent(
    base_agent=code_generator,
    config={
        "code_security": {
            "scan_for_vulnerabilities": True,
            "block_dangerous_patterns": [
                "eval(", "exec(", "__import__",
                "subprocess", "os.system"
            ],
            "require_safe_imports": True,
            "sandbox_execution": True
        },
        "output_validation": {
            "syntax_check": True,
            "dependency_scan": True,
            "license_check": True
        }
    }
)`}</pre>
                        </div>
                    </div>

                    {/* Research Agent */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Research Agent with Source Verification
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Ensure research agents use reliable sources and avoid hallucinations.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Research agent with fact verification
research_agent = px_agent.create_secure_agent(
    base_agent=research_bot,
    config={
        "source_verification": {
            "require_citations": True,
            "verify_urls": True,
            "trusted_domains": ["arxiv.org", "nature.com", "ieee.org"],
            "fact_check_threshold": 0.8
        },
        "hallucination_prevention": {
            "cross_reference_facts": True,
            "confidence_threshold": 0.7,
            "require_multiple_sources": 2
        }
    }
)`}</pre>
                        </div>
                    </div>
                </div>

                {/* Monitoring Dashboard */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Monitoring Dashboard Integration
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Access real-time monitoring data programmatically or through our web dashboard.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Set up dashboard integration
dashboard = px_agent.create_dashboard_client()

# Configure real-time alerts
dashboard.configure_alerts({
    "channels": {
        "email": ["security@company.com"],
        "slack": ["#ai-security"],
        "webhook": ["https://api.company.com/alerts"]
    },
    "triggers": {
        "high_anomaly_score": {
            "threshold": 0.8,
            "channels": ["email", "slack"]
        },
        "policy_violation": {
            "severity": ["critical", "high"],
            "channels": ["email", "slack", "webhook"]
        },
        "memory_tampering": {
            "channels": ["email", "webhook"],
            "include_snapshot": True
        }
    }
})

# Create custom dashboard view
dashboard.create_view(
    name="Production Agents",
    filters={
        "environment": "production",
        "status": "active"
    },
    widgets=[
        "anomaly_timeline",
        "policy_violations",
        "performance_metrics",
        "security_events"
    ]
)`}</pre>
                    </div>
                </div>

                {/* Performance Optimization */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Performance Optimization
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Batch Event Processing
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Reduce overhead by batching monitoring events.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Configure batch processing
px_agent.configure_batching({
    "batch_size": 100,
    "flush_interval_ms": 1000,
    "compression": "gzip",
    "retry_on_failure": True
})`}</pre>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Selective Monitoring
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Monitor only critical operations to reduce overhead.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Selective monitoring configuration
px_agent.configure_monitoring({
    "levels": {
        "tool_execution": "critical_only",
        "memory_access": "all",
        "llm_calls": "sample_10_percent"
    },
    "filters": {
        "ignore_tools": ["timestamp", "format_output"],
        "ignore_memory_keys": ["cache_*", "temp_*"]
    }
})`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resources */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Additional Resources
                    </h3>
                    <div className="space-y-3">
                        <Link href="/docs/perfecxion-agent" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Back to perfecX Agent Documentation</span>
                        </Link>
                        <a href="https://github.com/perfecxion/agent-examples" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Example Repository on GitHub</span>
                        </a>
                        <Link href="/support" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Users className="h-4 w-4" />
                            <span>Contact Support</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}