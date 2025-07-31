export interface FAQ {
  question: string
  answer: string
}

export interface ProductFAQs {
  [productId: string]: FAQ[]
}

export const productFAQs: ProductFAQs = {
  'adapt-ai': [
    {
      question: 'What makes ADAPT-AI different from other security testing tools?',
      answer: 'ADAPT-AI uses state-of-the-art adversarial AI research with machine learning capabilities. Unlike traditional static testing tools, it continuously learns and adapts its attack strategies, implementing gradient-based optimization, multi-modal attacks, and reinforcement learning to discover vulnerabilities that conventional tools miss.'
    },
    {
      question: 'How does the gradient-based attack optimization work?',
      answer: 'Our gradient-based optimization uses advanced ML techniques including Adam optimizer, momentum, and gradient clipping to iteratively refine attack prompts. This allows ADAPT-AI to find the most effective attack vectors by analyzing model responses and adjusting strategies in real-time, achieving up to 90% higher success rates than random testing.'
    },
    {
      question: 'Can ADAPT-AI test multi-modal AI systems?',
      answer: 'Yes, ADAPT-AI provides comprehensive testing across text, image, audio, and video modalities. It can synchronize attacks across multiple modalities simultaneously, testing how different inputs interact and potentially compromise AI systems through combined attack vectors.'
    },
    {
      question: 'What kind of vulnerabilities can ADAPT-AI discover?',
      answer: 'ADAPT-AI can identify jailbreaks, prompt injections, data leakage, model inversion attacks, adversarial examples, backdoors, and social engineering vulnerabilities. Its ML-powered pattern recognition also helps discover novel attack vectors that haven\'t been previously documented.'
    },
    {
      question: 'How does ADAPT-AI integrate with existing security workflows?',
      answer: 'ADAPT-AI offers REST APIs, Python SDK, JavaScript SDK, and webhooks for seamless integration. It supports CI/CD pipeline integration, can export findings to SIEM platforms, and provides detailed reports compatible with common security frameworks. The microservices architecture allows flexible deployment options.'
    },
    {
      question: 'What are the system requirements for deploying ADAPT-AI?',
      answer: 'ADAPT-AI can be deployed on-premises or in the cloud. Minimum requirements include 8 CPU cores, 32GB RAM, and 100GB storage for the base system. For optimal performance with ML capabilities, we recommend GPU acceleration (NVIDIA A100 or better) and 64GB+ RAM. The platform supports Kubernetes deployment for scalability.'
    }
  ],
  'perfecxion-red-t': [
    {
      question: 'What is perfecX Red-T and how does it work?',
      answer: 'perfecX Red-T is an advanced red team testing platform specifically designed for AI systems. It automates comprehensive adversarial testing using multi-vector scanning, intelligent threat detection, and continuous assessment to identify vulnerabilities before malicious actors can exploit them.'
    },
    {
      question: 'How does Red-T differ from traditional penetration testing?',
      answer: 'Unlike traditional pen testing tools, Red-T is purpose-built for AI systems. It understands AI-specific vulnerabilities like prompt injection, model inversion, and adversarial examples. It also provides continuous testing capabilities that adapt to evolving AI models and includes AI-specific attack scenarios.'
    },
    {
      question: 'Can Red-T integrate with our CI/CD pipeline?',
      answer: 'Yes, Red-T offers native CI/CD integration with popular platforms like Jenkins, GitLab CI, GitHub Actions, and Azure DevOps. It can automatically trigger security assessments on model updates, block deployments that fail security checks, and provide detailed reports within your existing workflow.'
    },
    {
      question: 'What types of AI systems can Red-T test?',
      answer: 'Red-T can test various AI systems including large language models (LLMs), computer vision models, multi-modal systems, recommendation engines, and custom ML pipelines. It supports testing of both cloud-based APIs and on-premises deployments across different frameworks.'
    },
    {
      question: 'How are test results reported and prioritized?',
      answer: 'Red-T provides comprehensive reports with severity scoring, exploit likelihood, and business impact analysis. Results include proof-of-concept attacks, remediation recommendations, and trend analysis. The platform uses risk-based prioritization to help teams focus on the most critical vulnerabilities first.'
    },
    {
      question: 'Does Red-T support custom attack scenarios?',
      answer: 'Yes, Red-T includes a scenario builder that allows security teams to create custom attack patterns specific to their AI systems and threat models. You can define custom payloads, success criteria, and combine multiple attack vectors to simulate sophisticated threats relevant to your organization.'
    }
  ],
  'perfecxion-agent': [
    {
      question: 'What AI agent frameworks does perfecX Agent support?',
      answer: 'perfecX Agent seamlessly integrates with major frameworks including LangChain, AutoGPT, CrewAI, Semantic Kernel, and custom agent implementations. Our SDK provides framework-specific modules for easy integration, typically requiring just 3-5 lines of code to add comprehensive security monitoring.'
    },
    {
      question: 'How does perfecX Agent protect against memory poisoning attacks?',
      answer: 'We use cryptographic memory signing to ensure integrity of agent memory stores. Each memory entry is signed with a unique key, and any unauthorized modifications are instantly detected. The system also implements memory isolation between agents and validates all memory operations against defined security policies.'
    },
    {
      question: 'Can perfecX Agent monitor multi-agent systems?',
      answer: 'Yes, perfecX Agent is designed for multi-agent environments. It monitors agent-to-agent communications, detects coordinated attacks, tracks agent relationships, and provides hierarchical security policies. The platform can handle thousands of concurrent agents while maintaining sub-second response times.'
    },
    {
      question: 'What types of agent behaviors trigger security alerts?',
      answer: 'The system detects anomalous tool usage, goal deviation, unauthorized data access, privilege escalation attempts, and suspicious communication patterns. Our ML-based behavioral analysis establishes baselines for each agent and alerts on deviations that could indicate compromise or malicious behavior.'
    },
    {
      question: 'How does perfecX Agent impact agent performance?',
      answer: 'perfecX Agent adds minimal overhead - typically less than 50ms latency for agent registration and under 100ms for behavioral analysis. The monitoring runs asynchronously and doesn\'t block agent operations. Resource usage is optimized with efficient data structures and selective monitoring based on risk profiles.'
    },
    {
      question: 'What compliance and audit capabilities does perfecX Agent provide?',
      answer: 'The platform maintains comprehensive audit logs of all agent activities, decisions, and security events. It supports compliance with SOC 2, ISO 27001, and GDPR requirements. Reports can be generated for security reviews, incident investigations, and regulatory audits with full chain-of-custody documentation.'
    }
  ],
  'safeai-guard': [
    {
      question: 'How does SafeAI Guard protect children without being overly restrictive?',
      answer: 'SafeAI Guard uses advanced context-aware AI to understand the nuance and intent behind conversations. Rather than simple keyword blocking, it analyzes patterns, relationships, and conversation flow to identify genuine threats while allowing educational and age-appropriate interactions. The system learns from parental feedback to calibrate protection levels.'
    },
    {
      question: 'What AI platforms does SafeAI Guard work with?',
      answer: 'SafeAI Guard protects interactions on all major AI platforms including ChatGPT, Claude, Gemini, Perplexity, and educational AI tools. The browser extension automatically detects and monitors AI conversations across these platforms, with new platforms added regularly through automatic updates.'
    },
    {
      question: 'How does the privacy-first architecture work?',
      answer: 'All content analysis happens locally on your device using advanced edge AI technology. No conversation data is ever transmitted to our servers. The only data sent is anonymized threat signatures for improving detection. This ensures complete privacy while maintaining COPPA and GDPR compliance.'
    },
    {
      question: 'What happens when inappropriate content is detected?',
      answer: 'When SafeAI Guard detects concerning content, it immediately blocks the interaction and can either redirect to educational content, notify parents for approval, or transform the conversation into a learning opportunity about digital safety. Parents can configure the response based on their preferences and child\'s maturity level.'
    },
    {
      question: 'Can parents customize the protection levels?',
      answer: 'Yes, SafeAI Guard offers granular controls for different types of content, age groups, and AI platforms. Parents can set different rules for educational vs. entertainment use, adjust sensitivity levels, create approved topic lists, and even set time-based restrictions for AI usage.'
    },
    {
      question: 'How does SafeAI Guard handle false positives?',
      answer: 'The system includes a quick approval workflow where parents can review and approve falsely flagged content with one click. Machine learning algorithms learn from these corrections to reduce false positives over time. Parents can also whitelist specific topics or contexts to prevent repeated false detections.'
    }
  ],
  'perfecxion-comply': [
    {
      question: 'Which regulatory frameworks does perfecX Comply support?',
      answer: 'perfecX Comply provides comprehensive support for EU AI Act, NIST AI Risk Management Framework, SOC 2 Type II, ISO 42001, Singapore\'s Model AI Governance Framework, Canada\'s Directive on Automated Decision-Making, and industry-specific regulations like HIPAA and GDPR for AI systems.'
    },
    {
      question: 'How does automated bias detection work?',
      answer: 'Our AI-powered bias detection analyzes model outputs across protected characteristics, identifies statistical disparities, and tests for both direct and proxy discrimination. The system uses advanced fairness metrics including demographic parity, equalized odds, and disparate impact testing with customizable thresholds.'
    },
    {
      question: 'Can perfecX Comply integrate with our existing MLOps pipeline?',
      answer: 'Yes, perfecX Comply integrates seamlessly with popular MLOps platforms including MLflow, Kubeflow, SageMaker, Azure ML, and DataRobot. It can automatically scan models during training, validate compliance before deployment, and continuously monitor production models through API integration.'
    },
    {
      question: 'What types of audit reports can the platform generate?',
      answer: 'The platform generates regulatory compliance reports, risk assessment documents, bias analysis reports, model cards, impact assessments, and executive summaries. All reports are customizable and can be automatically generated on schedules or triggered by specific events. Export formats include PDF, Word, and structured data formats.'
    },
    {
      question: 'How does perfecX Comply handle model discovery and cataloging?',
      answer: 'The platform uses automated discovery agents that scan your infrastructure to identify AI models across cloud platforms, on-premises systems, and edge deployments. It catalogs model metadata, tracks versions, documents data sources, and maintains a complete lifecycle history with ownership and approval chains.'
    },
    {
      question: 'What happens when a compliance violation is detected?',
      answer: 'When violations are detected, perfecX Comply can trigger automated workflows including notifications to stakeholders, blocking model deployments, initiating remediation processes, and creating incident tickets. The system provides detailed violation reports with specific regulatory references and recommended corrective actions.'
    }
  ],
  'perfecxion-g-rails': [
    {
      question: 'What are AI guardrails and why do they need testing?',
      answer: 'AI guardrails are safety mechanisms that prevent AI systems from generating harmful, biased, or inappropriate content. They need testing because attackers constantly develop new methods to bypass them. perfecX G-Rails validates guardrail effectiveness, identifies weaknesses, and ensures your safety mechanisms work as intended under adversarial conditions.'
    },
    {
      question: 'How does G-Rails test guardrail effectiveness?',
      answer: 'G-Rails uses advanced adversarial testing techniques including gradient-based attacks, evolutionary algorithms, and reinforcement learning to find guardrail bypasses. It tests against thousands of attack patterns, measures response consistency, and identifies edge cases where guardrails might fail or be circumvented.'
    },
    {
      question: 'Can G-Rails help optimize guardrail performance?',
      answer: 'Yes, G-Rails analyzes the performance impact of safety mechanisms and provides optimization recommendations. It identifies redundant checks, suggests more efficient implementations, and helps balance security with model performance. The platform can reduce guardrail latency by up to 60% while maintaining security effectiveness.'
    },
    {
      question: 'What types of guardrails can be tested?',
      answer: 'G-Rails tests content filters, prompt validation systems, output sanitizers, rate limiters, context boundaries, role-based access controls, and custom safety mechanisms. It supports testing of both rule-based and ML-based guardrails across different implementation approaches and frameworks.'
    },
    {
      question: 'How does continuous safety assessment work?',
      answer: 'G-Rails continuously monitors your AI systems in production, automatically testing guardrails against new attack patterns as they emerge. It adapts test strategies based on real-world usage patterns, provides trend analysis of guardrail effectiveness, and alerts on degrading safety performance before incidents occur.'
    },
    {
      question: 'Can G-Rails integrate with our ML pipeline?',
      answer: 'Yes, G-Rails provides native integration with ML pipelines through REST APIs, Python/JavaScript SDKs, and CI/CD plugins. It can automatically test guardrails during model training, validate safety before deployment, and provide continuous monitoring in production environments. Integration typically takes less than a day.'
    }
  ],
  'promptshield': [
    {
      question: 'How does PromptShield\'s multi-layered detection work?',
      answer: 'PromptShield uses three detection layers: First, lightning-fast heuristic analysis catches known attack patterns in under 50ms. Second, our AI-powered layer uses fine-tuned LLMs to detect sophisticated social engineering. Third, our canary token system embeds hidden markers to detect prompt leakage. This layered approach achieves 95%+ accuracy with minimal false positives.'
    },
    {
      question: 'What types of prompt injection attacks can PromptShield detect?',
      answer: 'PromptShield detects role manipulation ("You are now a different AI..."), instruction overrides ("Ignore previous instructions..."), system prompt extraction attempts, indirect injections through external content, unicode/encoding attacks, and sophisticated social engineering. Our detection models are continuously updated as new attack methods emerge.'
    },
    {
      question: 'How fast is PromptShield and will it slow down my application?',
      answer: 'PromptShield adds minimal latency - average response time is under 500ms globally, with P95 latency under 1 second. The heuristic layer responds in under 50ms for known patterns. With our global infrastructure and 10,000+ requests/second capacity, PromptShield won\'t bottleneck your application.'
    },
    {
      question: 'How do I integrate PromptShield into my application?',
      answer: 'Integration is simple with our REST API and native SDKs for Python, JavaScript/TypeScript, and major frameworks. Basic integration takes just 3-5 lines of code. We provide plugins for LangChain, OpenAI, and Anthropic SDKs, plus examples for React, Next.js, FastAPI, and Express applications.'
    },
    {
      question: 'What happens to the prompts I send to PromptShield?',
      answer: 'We maintain a strict zero-data retention policy. Prompts are analyzed in memory and immediately discarded. No prompt content is ever stored, logged, or used for training. We\'re SOC 2 Type II ready and GDPR compliant. Only anonymized threat metrics are retained for improving detection capabilities.'
    },
    {
      question: 'How accurate is PromptShield compared to alternatives?',
      answer: 'PromptShield achieves industry-leading accuracy with 95%+ detection rate and less than 2% false positives. Our multi-layered approach and continuous model updates outperform single-method solutions. We regularly benchmark against emerging attacks and publish our methodology and results transparently.'
    }
  ],
  'torscan': [
    {
      question: 'What makes TorScan different from regular web scanners?',
      answer: 'TorScan is purpose-built for the unique challenges of dark web monitoring. It includes Tor network integration with circuit rotation for anonymity, specialized parsers for common dark web platforms, cryptocurrency address extraction, and threat intelligence integration. Regular scanners lack these dark web-specific capabilities.'
    },
    {
      question: 'How does TorScan maintain anonymity while scanning?',
      answer: 'TorScan routes all traffic through the Tor network with automatic circuit rotation every few requests. It implements request throttling to avoid detection, randomizes user agents and headers, and can use bridge relays for additional anonymity. The platform never exposes your real IP address to target sites.'
    },
    {
      question: 'What types of content can TorScan monitor and extract?',
      answer: 'TorScan can monitor forums, marketplaces, paste sites, and hidden services. It extracts threat indicators, cryptocurrency addresses, leaked credentials, PII data, malware samples, and communication patterns. The plugin system allows custom extraction rules for specific intelligence requirements.'
    },
    {
      question: 'How does the threat intelligence integration work?',
      answer: 'TorScan automatically correlates findings with MISP and OpenCTI platforms. It extracts IOCs (indicators of compromise), enriches them with context, and creates threat events. The bidirectional integration also allows using existing threat data to guide scanning priorities and identify related content.'
    },
    {
      question: 'Can TorScan handle authentication on dark web sites?',
      answer: 'Yes, TorScan supports various authentication methods including form-based login, captcha solving (manual and automated), two-factor authentication handling, and session management. It can maintain persistent identities across scans and handle anti-automation measures common on dark web platforms.'
    },
    {
      question: 'What are the infrastructure requirements for TorScan?',
      answer: 'TorScan requires Docker and Docker Compose for deployment. Minimum specs include 8 CPU cores, 16GB RAM, 500GB SSD storage, and stable internet. For production deployments, we recommend Elasticsearch cluster setup, dedicated Tor nodes, and PostgreSQL for data persistence. The platform scales horizontally for increased capacity.'
    }
  ]
}

export function getProductFAQs(productId: string): FAQ[] {
  return productFAQs[productId] || []
}