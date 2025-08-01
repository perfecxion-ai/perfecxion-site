'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/section-header'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface ProductFAQ {
  id: string
  name: string
  faqs: FAQ[]
}

export default function ProductFAQPage() {
  const [selectedProduct, setSelectedProduct] = useState('adapt-ai')
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

  const productFAQs: ProductFAQ[] = [
    {
      id: 'adapt-ai',
      name: 'ADAPT-AI',
      faqs: [
        {
          question: 'What is ADAPT-AI and how does it work?',
          answer: 'ADAPT-AI is an adaptive AI defense platform that provides real-time protection against evolving AI threats. It uses advanced machine learning to detect anomalies, prevent attacks, and adapt to new threat patterns automatically.'
        },
        {
          question: 'How quickly can ADAPT-AI be deployed?',
          answer: 'ADAPT-AI can be deployed within 24-48 hours for cloud environments. The platform includes automated setup wizards and pre-configured security policies that can be customized to your needs. On-premise deployments typically take 1-2 weeks.'
        },
        {
          question: 'Does ADAPT-AI integrate with existing security tools?',
          answer: 'Yes, ADAPT-AI integrates with major SIEM platforms, cloud providers (AWS, Azure, GCP), and security orchestration tools. We provide REST APIs, webhooks, and pre-built connectors for seamless integration.'
        },
        {
          question: 'What types of AI threats does ADAPT-AI protect against?',
          answer: 'ADAPT-AI protects against prompt injection, model extraction, data poisoning, adversarial attacks, model inversion, membership inference attacks, and zero-day AI vulnerabilities. Our threat intelligence is updated continuously.'
        },
        {
          question: 'How does ADAPT-AI handle false positives?',
          answer: 'ADAPT-AI uses multi-layered validation and contextual analysis to minimize false positives. The system learns from your environment and feedback, continuously improving accuracy. Current false positive rate is below 0.1%.'
        }
      ]
    },
    {
      id: 'perfecxion-agent',
      name: 'perfecXion Agent',
      faqs: [
        {
          question: 'What makes perfecXion Agent different from other monitoring tools?',
          answer: 'perfecXion Agent is specifically designed for AI workloads with deep learning model introspection, GPU-aware monitoring, and AI-specific security policies. It provides real-time behavioral analysis of AI models in production.'
        },
        {
          question: 'What is the performance impact of running perfecXion Agent?',
          answer: 'perfecXion Agent has minimal performance impact, typically less than 2% CPU overhead and 100MB memory footprint. It uses efficient sampling and asynchronous processing to avoid impacting model inference times.'
        },
        {
          question: 'Can perfecXion Agent monitor containerized AI workloads?',
          answer: 'Yes, perfecXion Agent fully supports Docker, Kubernetes, and other container orchestration platforms. It can monitor both container-level and application-level metrics specific to AI workloads.'
        },
        {
          question: 'How does perfecXion Agent handle distributed AI training?',
          answer: 'perfecXion Agent provides distributed tracing across multiple nodes, monitors data flow between training nodes, and detects anomalies in distributed training patterns. It supports all major distributed training frameworks.'
        },
        {
          question: 'What compliance standards does perfecXion Agent support?',
          answer: 'perfecXion Agent helps meet SOC 2, ISO 27001, HIPAA, GDPR, and AI-specific regulations like the EU AI Act. It provides automated compliance reporting and audit trails for all monitored activities.'
        }
      ]
    },
    {
      id: 'perfecxion-g-rails',
      name: 'perfecXion G-Rails',
      faqs: [
        {
          question: 'What are AI guardrails and why do I need them?',
          answer: 'AI guardrails are safety mechanisms that ensure AI models operate within defined boundaries. They prevent harmful outputs, ensure compliance, maintain ethical standards, and protect against prompt manipulation and data leakage.'
        },
        {
          question: 'How customizable are perfecXion G-Rails?',
          answer: 'perfecXion G-Rails are highly customizable with a policy-as-code approach. You can define custom rules, thresholds, and responses using our DSL or visual policy builder. Pre-built templates are available for common use cases.'
        },
        {
          question: 'Do guardrails add latency to AI model responses?',
          answer: 'perfecXion G-Rails add minimal latency (typically <50ms) through optimized processing and intelligent caching. Critical guardrails can run in parallel with model inference to further reduce impact.'
        },
        {
          question: 'Can G-Rails work with any AI model or framework?',
          answer: 'Yes, perfecXion G-Rails are model-agnostic and support all major AI frameworks including TensorFlow, PyTorch, Hugging Face, OpenAI, Anthropic, and custom models. Integration requires minimal code changes.'
        },
        {
          question: 'How do G-Rails handle multi-modal AI models?',
          answer: 'perfecXion G-Rails support text, image, audio, and video modalities with specialized validators for each type. Cross-modal consistency checks ensure aligned behavior across different input/output types.'
        }
      ]
    },
    {
      id: 'perfecxion-comply',
      name: 'perfecXion Comply',
      faqs: [
        {
          question: 'Which AI regulations does perfecXion Comply cover?',
          answer: 'perfecXion Comply covers EU AI Act, US AI Bill of Rights, China AI Regulations, industry-specific requirements (healthcare, finance, etc.), and emerging AI governance frameworks worldwide.'
        },
        {
          question: 'How does automated compliance reporting work?',
          answer: 'perfecXion Comply continuously monitors your AI systems against compliance requirements, generates real-time reports, tracks remediation progress, and provides executive dashboards with compliance scores and risk metrics.'
        },
        {
          question: 'Can perfecXion Comply handle multiple jurisdictions?',
          answer: 'Yes, perfecXion Comply manages multi-jurisdictional compliance with automatic mapping of overlapping requirements, conflict resolution, and unified reporting across all applicable regulations.'
        },
        {
          question: 'How often are compliance rules updated?',
          answer: 'Compliance rules are updated within 24 hours of regulatory changes. Our legal and compliance team monitors global AI regulations and provides proactive alerts about upcoming changes that may impact your organization.'
        },
        {
          question: 'Does perfecXion Comply provide audit support?',
          answer: 'Yes, perfecXion Comply provides comprehensive audit trails, automated evidence collection, auditor-ready reports, and virtual audit rooms. Our team can also provide expert support during regulatory audits.'
        }
      ]
    },
    {
      id: 'safeai-guard',
      name: 'SafeAI Guard',
      faqs: [
        {
          question: 'What types of AI attacks does SafeAI Guard prevent?',
          answer: 'SafeAI Guard prevents adversarial examples, model stealing, training data extraction, backdoor attacks, model manipulation, and novel zero-day AI attacks using advanced threat detection algorithms.'
        },
        {
          question: 'How does SafeAI Guard protect model intellectual property?',
          answer: 'SafeAI Guard uses watermarking, access control, query pattern analysis, and extraction detection to protect your models. It can detect and block attempts to reverse-engineer or steal model architectures and weights.'
        },
        {
          question: 'Can SafeAI Guard protect federated learning systems?',
          answer: 'Yes, SafeAI Guard provides specialized protection for federated learning including participant validation, update verification, privacy-preserving aggregation monitoring, and Byzantine fault detection.'
        },
        {
          question: 'What is the false positive rate for threat detection?',
          answer: 'SafeAI Guard maintains a false positive rate below 0.05% through advanced ML algorithms and continuous learning. The system adapts to your specific environment to further improve accuracy over time.'
        },
        {
          question: 'How does SafeAI Guard handle encrypted model traffic?',
          answer: 'SafeAI Guard supports SSL/TLS inspection with privacy-preserving techniques, homomorphic encryption compatibility, and secure multi-party computation protocols to maintain security without compromising privacy.'
        }
      ]
    },
    {
      id: 'promptshield',
      name: 'PromptShield',
      faqs: [
        {
          question: 'What is prompt injection and why is it dangerous?',
          answer: 'Prompt injection is when attackers manipulate AI inputs to bypass safety measures, extract sensitive data, or cause harmful outputs. It can lead to data breaches, compliance violations, and reputational damage.'
        },
        {
          question: 'How does PromptShield detect sophisticated attacks?',
          answer: 'PromptShield uses multi-layer analysis including syntax parsing, semantic analysis, intent classification, and behavioral patterns. It maintains a threat intelligence database of known attack patterns updated in real-time.'
        },
        {
          question: 'Can PromptShield work with custom LLMs?',
          answer: 'Yes, PromptShield is LLM-agnostic and works with any language model including GPT, Claude, LLaMA, and proprietary models. It can be deployed as a proxy, SDK, or direct integration.'
        },
        {
          question: 'Does PromptShield support multiple languages?',
          answer: 'PromptShield supports 95+ languages with native understanding of linguistic nuances, cross-language attack patterns, and culturally-aware content filtering to ensure global protection.'
        },
        {
          question: 'How does PromptShield handle false positives in legitimate prompts?',
          answer: 'PromptShield uses contextual understanding and adjustable sensitivity levels. Users can whitelist specific patterns, provide feedback to improve detection, and customize rules for their use cases.'
        }
      ]
    },
    {
      id: 'torscan',
      name: 'TORscan',
      faqs: [
        {
          question: 'What makes TORscan different from traditional vulnerability scanners?',
          answer: 'TORscan is purpose-built for AI/ML systems with deep understanding of model architectures, training pipelines, and AI-specific vulnerabilities that traditional scanners miss.'
        },
        {
          question: 'How comprehensive is TORscan\'s vulnerability database?',
          answer: 'TORscan maintains the industry\'s largest AI vulnerability database with 10,000+ known issues, updated daily. It includes model-specific vulnerabilities, framework issues, and supply chain risks.'
        },
        {
          question: 'Can TORscan scan models before deployment?',
          answer: 'Yes, TORscan integrates with CI/CD pipelines to scan models during development, training, and before deployment. It provides shift-left security with actionable remediation guidance.'
        },
        {
          question: 'What types of AI assets can TORscan analyze?',
          answer: 'TORscan analyzes trained models, training datasets, model architectures, training code, inference pipelines, model dependencies, and entire MLOps infrastructure for vulnerabilities.'
        },
        {
          question: 'How long does a typical TORscan assessment take?',
          answer: 'Basic scans complete in minutes, comprehensive assessments take 2-4 hours depending on model complexity. TORscan uses parallel processing and intelligent prioritization to optimize scan times.'
        }
      ]
    },
    {
      id: 'perfecxion-red-t',
      name: 'perfecXion Red-T',
      faqs: [
        {
          question: 'What is AI red teaming and why is it important?',
          answer: 'AI red teaming simulates real-world attacks on your AI systems to identify vulnerabilities before malicious actors do. It\'s essential for validating security controls and improving AI robustness.'
        },
        {
          question: 'What types of attacks does perfecXion Red-T simulate?',
          answer: 'perfecXion Red-T simulates adversarial attacks, prompt injections, model extraction, data poisoning, supply chain attacks, and custom attack scenarios based on your threat model.'
        },
        {
          question: 'Can perfecXion Red-T be run in production environments?',
          answer: 'perfecXion Red-T includes safe production testing modes with controlled attack simulations, rollback capabilities, and impact limitations to ensure no disruption to live services.'
        },
        {
          question: 'How often should we run red team exercises?',
          answer: 'We recommend quarterly comprehensive assessments and monthly automated tests. Critical systems or after major changes should trigger immediate red team exercises.'
        },
        {
          question: 'Does perfecXion Red-T provide remediation guidance?',
          answer: 'Yes, each finding includes detailed remediation steps, security control recommendations, and validation tests. Our experts can provide hands-on support for implementing fixes.'
        }
      ]
    }
  ]

  const currentFAQs = productFAQs.find(p => p.id === selectedProduct)?.faqs || []

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div className="bg-white dark:bg-gray-950 py-16">
      <Container>
        <SectionHeader
          title="Product FAQs"
          subtitle="Get answers to frequently asked questions about our AI security products"
          centered
        />

        <div className="max-w-5xl mx-auto mt-12">
          {/* Product Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {productFAQs.map((product) => (
              <button
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product.id)
                  setExpandedItems(new Set())
                }}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedProduct === product.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {currentFAQs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <span className="font-medium text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  {expandedItems.has(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedItems.has(index) && (
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Can't find what you're looking for?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-colors"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}