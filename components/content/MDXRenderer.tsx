'use client'

import { useState, useEffect } from 'react'

interface MDXRendererProps {
  slug: string
}

export default function MDXRenderer({ slug }: MDXRendererProps) {
  const [content, setContent] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadContent = async () => {
      try {
        // This would typically load the actual MDX content
        // For now, we'll use a simple content loader
        const response = await fetch(`/api/content/${slug}`)
        if (response.ok) {
          const data = await response.json()
          setContent(data.content)
        } else {
          // Fallback content
          setContent(getDefaultContent(slug))
        }
      } catch (error) {
        console.error('Failed to load content:', error)
        setContent(getDefaultContent(slug))
      } finally {
        setIsLoading(false)
      }
    }

    loadContent()
  }, [slug])

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
      </div>
    )
  }

  // Simple HTML content renderer
  return (
    <div 
      className="prose prose-lg dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

function getDefaultContent(slug: string): string {
  const contentMap: Record<string, string> = {
    'getting-started': `
      <h1>Getting Started with AI Security</h1>
      <p>AI security is a critical aspect of modern AI deployment. This guide will help you understand the fundamentals and get started with securing your AI systems.</p>
      
      <h2>Key Concepts</h2>
      
      <h3>Red Team Testing</h3>
      <p>Red team testing involves simulating attacks on your AI systems to identify vulnerabilities before malicious actors can exploit them.</p>
      
      <h3>Agent Monitoring</h3>
      <p>Continuous monitoring of AI agents helps detect anomalous behavior and potential security threats in real-time.</p>
      
      <h3>Compliance Management</h3>
      <p>Ensuring your AI systems meet regulatory requirements and industry standards is essential for responsible AI deployment.</p>
      
      <h2>Next Steps</h2>
      <ol>
        <li>Assess your current AI security posture</li>
        <li>Implement monitoring and testing tools</li>
        <li>Establish compliance processes</li>
        <li>Train your team on AI security best practices</li>
      </ol>
      
      <p>For more detailed guidance, explore our product documentation and contact our team for personalized assistance.</p>
    `,
    'understanding-ai-vulnerabilities': `
      <h1>Understanding AI Vulnerabilities</h1>
      <p>This comprehensive guide examines the unique vulnerabilities that affect AI systems and how they differ from traditional cybersecurity threats.</p>
      
      <h2>Executive Summary</h2>
      <p>Artificial Intelligence systems face unique security challenges that traditional cybersecurity tools cannot adequately address. Unlike conventional software vulnerabilities, AI vulnerabilities exploit the fundamental nature of machine learning models and their training processes.</p>
      
      <h2>Common AI Vulnerabilities</h2>
      
      <h3>1. Data Poisoning Attacks</h3>
      <p>Malicious actors contaminate training data to manipulate model behavior. The model learns incorrect patterns from poisoned data, leading to predictable incorrect outputs during deployment.</p>
      
      <h3>2. Adversarial Examples</h3>
      <p>Carefully crafted inputs that cause AI models to make incorrect predictions with high confidence. Small, often imperceptible changes to input data can completely change model outputs.</p>
      
      <h3>3. Model Extraction Attacks</h3>
      <p>Stealing proprietary AI models by querying them and reverse-engineering their behavior. Attackers can create substitute models that mimic the original's behavior.</p>
      
      <h3>4. Prompt Injection Attacks</h3>
      <p>Manipulating Large Language Models by embedding malicious instructions in user inputs, causing the AI to ignore safety guidelines or reveal confidential information.</p>
      
      <h2>Business Impact</h2>
      <ul>
        <li>Compromised decision-making in critical business processes</li>
        <li>Regulatory compliance violations</li>
        <li>Brand reputation damage</li>
        <li>Financial losses from incorrect predictions</li>
        <li>Loss of competitive advantage through IP theft</li>
      </ul>
      
      <h2>Next Steps</h2>
      <p>Continue your learning journey with our guide on <a href="/learn/types-of-ai-attacks">Types of AI Attacks</a> to understand specific attack methodologies and technical implementation details.</p>
    `,
    'types-of-ai-attacks': `
      <h1>Types of AI Attacks</h1>
      <p>This comprehensive analysis examines AI attack methodologies, technical implementations, and real-world case studies to help security professionals understand and defend against AI-specific threats.</p>
      
      <h2>Attack Taxonomy</h2>
      
      <h3>Training-Time Attacks</h3>
      <p>These attacks occur during the model development and training phase:</p>
      
      <h4>Data Poisoning Attacks</h4>
      <ul>
        <li><strong>Label Flipping:</strong> Randomly or systematically change class labels</li>
        <li><strong>Backdoor Poisoning:</strong> Insert specific triggers that cause misclassification</li>
        <li><strong>Availability Attacks:</strong> Degrade overall model performance</li>
      </ul>
      
      <h3>Inference-Time Attacks</h3>
      <p>These attacks target deployed models during their operational phase:</p>
      
      <h4>Adversarial Examples</h4>
      <ul>
        <li><strong>White-Box Attacks:</strong> Full model access (FGSM, PGD, C&W)</li>
        <li><strong>Black-Box Attacks:</strong> No model access (Transfer attacks, Query-based)</li>
      </ul>
      
      <h4>Model Extraction</h4>
      <ol>
        <li>Query Strategy Design</li>
        <li>Substitute Model Training</li>
        <li>Model Inversion for Data Recovery</li>
      </ol>
      
      <h4>Prompt Injection</h4>
      <ul>
        <li><strong>Direct Injection:</strong> "Ignore previous instructions..."</li>
        <li><strong>Indirect Injection:</strong> Embedded in documents or websites</li>
        <li><strong>Context Switching:</strong> Roleplaying as unrestricted AI</li>
      </ul>
      
      <h2>Real-World Case Studies</h2>
      
      <h3>Case Study 1: GPT-3 Prompt Injection Campaign</h3>
      <p>Attackers embedded malicious prompts in email signatures, causing AI email assistants to execute hidden instructions and expose email contents.</p>
      
      <h3>Case Study 2: Autonomous Vehicle Stop Sign Attack</h3>
      <p>Researchers used evolutionary algorithms to optimize adversarial patches that caused Tesla Autopilot to misclassify stop signs as speed limit signs.</p>
      
      <h2>Detection and Mitigation</h2>
      <p>Learn how to implement comprehensive defenses in our guide on <a href="/learn/building-ai-security-programs">Building AI Security Programs</a>.</p>
      
      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e5e7eb;">
      
      <h2>Comprehensive AI Security White Paper</h2>
      <div style="margin: 2rem 0; padding: 2rem; background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(251, 146, 60, 0.1)); border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.2);">
        <h3 style="color: #dc2626; margin-bottom: 1rem; font-size: 1.5rem; font-weight: 700;">AI Security White Paper: Complete Attack Taxonomy and Defense Strategies</h3>
        
        <p style="margin-bottom: 1.5rem; color: #374151;">
          Download our comprehensive AI Security White Paper that provides an in-depth analysis of all AI attack types and effective defense mechanisms. This technical guide covers:
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
          <ul style="margin: 0; padding: 0; list-style: none;">
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Complete AI attack taxonomy</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Adversarial attack techniques</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Data poisoning methodologies</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Model extraction attacks</span>
            </li>
          </ul>
          <ul style="margin: 0; padding: 0; list-style: none;">
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Prompt injection vulnerabilities</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Defense mechanisms and strategies</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Real-world attack case studies</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Implementation best practices</span>
            </li>
          </ul>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          <a href="/white-papers/ai-security-white-paper.pdf" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background-color: #dc2626; color: white; border-radius: 8px; text-decoration: none; font-weight: 600; transition: background-color 0.2s;" download>
            <svg style="width: 1.25rem; height: 1.25rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download AI Security White Paper
          </a>
        </div>
        
        <div style="padding: 1rem; background-color: rgba(239, 68, 68, 0.1); border-radius: 8px;">
          <p style="margin: 0; font-size: 0.875rem; color: #b91c1c; font-style: italic;">
            This comprehensive technical white paper provides security professionals with detailed analysis of AI attack vectors and proven defense strategies used by leading organizations.
          </p>
        </div>
      </div>
    `,
    'building-ai-security-programs': `
      <h1>Building AI Security Programs</h1>
      <p>Establishing a comprehensive AI security program requires a strategic approach that integrates security throughout the AI lifecycle.</p>
      
      <h2>Framework Architecture</h2>
      
      <h3>1. Governance Layer</h3>
      <ul>
        <li>AI Security Governance Council</li>
        <li>Cross-functional representation</li>
        <li>Executive sponsorship and oversight</li>
        <li>Roles and responsibilities matrix</li>
      </ul>
      
      <h3>2. Risk Management Layer</h3>
      <ul>
        <li>AI-specific risk assessment framework</li>
        <li>Probability and impact assessment</li>
        <li>Composite risk scoring methodology</li>
        <li>Control effectiveness measurement</li>
      </ul>
      
      <h3>3. Security Controls Layer</h3>
      <ul>
        <li>Data security controls</li>
        <li>Model security controls</li>
        <li>Deployment security controls</li>
        <li>Operational security controls</li>
      </ul>
      
      <h2>Implementation Framework</h2>
      
      <h3>Phase 1: Foundation Building (Months 1-3)</h3>
      <ul>
        <li>AI Security Center of Excellence</li>
        <li>Policy and procedure development</li>
        <li>Team structure establishment</li>
        <li>Initial risk assessment</li>
      </ul>
      
      <h3>Phase 2: Security Integration (Months 4-8)</h3>
      <ul>
        <li>Secure AI Development Lifecycle (SAIDL)</li>
        <li>MLOps pipeline integration</li>
        <li>Security testing framework</li>
        <li>Continuous monitoring implementation</li>
      </ul>
      
      <h3>Phase 3: Advanced Capabilities (Months 9-12)</h3>
      <ul>
        <li>AI Security Operations Center (AI-SOC)</li>
        <li>24/7 monitoring capabilities</li>
        <li>Threat intelligence integration</li>
        <li>Automated response systems</li>
      </ul>
      
      <h2>Team Structure</h2>
      <ul>
        <li>AI Security Director</li>
        <li>AI Security Architects</li>
        <li>AI Security Engineers</li>
        <li>AI Risk Analysts</li>
        <li>AI Security Researchers</li>
      </ul>
      
      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e5e7eb;">
      
      <h2>Comprehensive White Paper</h2>
      <div style="margin: 2rem 0; padding: 2rem; background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1)); border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2);">
        <h3 style="color: #2563eb; margin-bottom: 1rem; font-size: 1.5rem; font-weight: 700;">Building AI Security Programs for Enterprise Organizations</h3>
        
        <p style="margin-bottom: 1.5rem; color: #374151;">
          Get our 60-minute deep dive into building enterprise AI security programs. This comprehensive white paper provides technical practitioners and CISOs with:
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
          <ul style="margin: 0; padding: 0; list-style: none;">
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Detailed framework analysis (NIST, SAIF, MIT Sloan, DASF)</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Phased implementation roadmap (18-24 months)</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Team structure and budget guidance</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Technical security controls implementation</span>
            </li>
          </ul>
          <ul style="margin: 0; padding: 0; list-style: none;">
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>MLOps security architecture patterns</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Real-world case studies and lessons</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Future threat landscape analysis</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>ROI metrics and success indicators</span>
            </li>
          </ul>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          <a href="/white-papers/building-ai-security-programs.pdf" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background-color: #2563eb; color: white; border-radius: 8px; text-decoration: none; font-weight: 600; transition: background-color 0.2s;" download>
            <svg style="width: 1.25rem; height: 1.25rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download PDF (60 min read)
          </a>
        </div>
        
        <div style="padding: 1rem; background-color: rgba(59, 130, 246, 0.1); border-radius: 8px;">
          <p style="margin: 0; font-size: 0.875rem; color: #1d4ed8; font-style: italic;">
            This white paper provides actionable guidance for building comprehensive AI security programs through phased implementation, addressing unique AI risks that traditional security approaches cannot handle. Based on real-world implementations achieving 60-80% reduction in security incidents.
          </p>
        </div>
      </div>
      
      <h2>Next Steps</h2>
      <p>Learn about regulatory requirements in our <a href="/learn/compliance-for-ai-systems">Compliance for AI Systems</a> guide.</p>
    `,
    'compliance-for-ai-systems': `
      <h1>Compliance for AI Systems</h1>
      <p>Navigate the complex regulatory landscape for AI systems including EU AI Act, NIST AI RMF, GDPR, and industry-specific requirements.</p>
      
      <h2>Global Regulatory Landscape</h2>
      
      <h3>EU AI Act (2024)</h3>
      <ul>
        <li>World's first comprehensive AI regulation</li>
        <li>Risk-based approach with four categories</li>
        <li>Conformity assessments for high-risk systems</li>
        <li>CE marking and registration requirements</li>
      </ul>
      
      <h3>NIST AI Risk Management Framework</h3>
      <ul>
        <li>Voluntary framework for US organizations</li>
        <li>Four core functions: Govern, Map, Measure, Manage</li>
        <li>Risk-based approach to AI governance</li>
        <li>Foundation for future US regulation</li>
      </ul>
      
      <h3>Privacy Regulations</h3>
      <ul>
        <li>GDPR: Data protection impact assessments</li>
        <li>CCPA: Consumer rights for AI decisions</li>
        <li>Sector-specific requirements</li>
      </ul>
      
      <h2>High-Risk AI Systems (EU AI Act)</h2>
      <ul>
        <li>Critical Infrastructure</li>
        <li>Education and Vocational Training</li>
        <li>Employment and Human Resources</li>
        <li>Essential Services</li>
        <li>Law Enforcement</li>
        <li>Migration and Border Control</li>
        <li>Administration of Justice</li>
        <li>Democratic Processes</li>
      </ul>
      
      <h2>Implementation Strategy</h2>
      
      <h3>Phase 1: Regulatory Mapping</h3>
      <ul>
        <li>Applicability assessment</li>
        <li>Gap analysis</li>
        <li>Compliance roadmap</li>
      </ul>
      
      <h3>Phase 2: Control Implementation</h3>
      <ul>
        <li>Technical controls</li>
        <li>Administrative controls</li>
        <li>Governance controls</li>
      </ul>
      
      <h3>Phase 3: Monitoring and Assurance</h3>
      <ul>
        <li>Continuous compliance monitoring</li>
        <li>Internal audit framework</li>
        <li>Third-party assessments</li>
      </ul>
      
      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e5e7eb;">
      
      <h2>Comprehensive Regulatory White Paper</h2>
      <div style="margin: 2rem 0; padding: 2rem; background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(147, 51, 234, 0.1)); border-radius: 12px; border: 1px solid rgba(99, 102, 241, 0.2);">
        <h3 style="color: #6366f1; margin-bottom: 1rem; font-size: 1.5rem; font-weight: 700;">Navigating the Global AI Regulatory Maze: A Strategic Playbook</h3>
        
        <p style="margin-bottom: 1.5rem; color: #374151;">
          Download our comprehensive white paper designed specifically for CISOs, AI developers, and technology leaders. This strategic playbook provides in-depth analysis of:
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
          <ul style="margin: 0; padding: 0; list-style: none;">
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>EU AI Act comprehensive analysis</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>NIST AI RMF implementation guide</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>GDPR implications for AI systems</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Global regulatory comparison</span>
            </li>
          </ul>
          <ul style="margin: 0; padding: 0; list-style: none;">
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Compliance strategy frameworks</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Technical implementation guidance</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Risk management approaches</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Future-proofing strategies</span>
            </li>
          </ul>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          <a href="/white-papers/ai-regulatory-compliance.pdf" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background-color: #6366f1; color: white; border-radius: 8px; text-decoration: none; font-weight: 600; transition: background-color 0.2s;" download>
            <svg style="width: 1.25rem; height: 1.25rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download PDF (30 min read)
          </a>
        </div>
        
        <div style="padding: 1rem; background-color: rgba(99, 102, 241, 0.1); border-radius: 8px;">
          <p style="margin: 0; font-size: 0.875rem; color: #4338ca; font-style: italic;">
            This white paper provides strategic guidance for navigating the complex global AI regulatory landscape, including practical implementation strategies and compliance frameworks. Last updated: January 2025.
          </p>
        </div>
      </div>
      
      <h2>Next Steps</h2>
      <p>Prepare for security incidents with our <a href="/learn/incident-response-for-ai">Incident Response for AI</a> guide.</p>
    `,
    'incident-response-for-ai': `
      <h1>Incident Response for AI</h1>
      <p>AI security incidents require specialized response procedures that differ significantly from traditional cybersecurity incidents.</p>
      
      <h2>AI-Specific Incident Types</h2>
      
      <h3>Training-Time Incidents</h3>
      <ul>
        <li><strong>Data Poisoning:</strong> Degraded performance, biased outcomes</li>
        <li><strong>Supply Chain Compromises:</strong> Unauthorized model modifications</li>
        <li><strong>IP Theft:</strong> Unauthorized access to training processes</li>
      </ul>
      
      <h3>Inference-Time Incidents</h3>
      <ul>
        <li><strong>Adversarial Attacks:</strong> Confident incorrect predictions</li>
        <li><strong>Prompt Injection:</strong> Inappropriate responses, info disclosure</li>
        <li><strong>Model Extraction:</strong> High-volume systematic queries</li>
      </ul>
      
      <h3>Operational Incidents</h3>
      <ul>
        <li><strong>Model Drift:</strong> Declining accuracy over time</li>
        <li><strong>Privacy Violations:</strong> Personal data exposure</li>
        <li><strong>Bias Incidents:</strong> Discriminatory outcomes</li>
      </ul>
      
      <h2>Response Procedures</h2>
      
      <h3>Phase 1: Initial Response (0-30 minutes)</h3>
      <ol>
        <li>Incident validation and classification</li>
        <li>Immediate containment actions</li>
        <li>Stakeholder notification</li>
        <li>Evidence preservation</li>
        <li>Response team activation</li>
      </ol>
      
      <h3>Phase 2: Investigation (30 minutes - 4 hours)</h3>
      <ol>
        <li>Timeline reconstruction</li>
        <li>Impact assessment</li>
        <li>Root cause analysis</li>
        <li>Attack vector analysis</li>
        <li>Scope determination</li>
      </ol>
      
      <h3>Phase 3: Recovery (4-24 hours)</h3>
      <ol>
        <li>System restoration</li>
        <li>Data remediation</li>
        <li>Model recovery/replacement</li>
        <li>Security hardening</li>
        <li>Validation testing</li>
      </ol>
      
      <h2>AI-Specific Containment Actions</h2>
      <ul>
        <li>Model isolation and backup activation</li>
        <li>Data pipeline quarantine</li>
        <li>API gateway controls</li>
        <li>Enhanced monitoring deployment</li>
      </ul>
      
      <h2>Post-Incident Activities</h2>
      <ul>
        <li>Lessons learned process</li>
        <li>Improvement action tracking</li>
        <li>Threat intelligence integration</li>
        <li>Continuous improvement</li>
      </ul>
      
      <h2>Training and Preparedness</h2>
      <ul>
        <li>AI-specific incident response training</li>
        <li>Tabletop exercises and simulations</li>
        <li>Team competency development</li>
        <li>Regular drill execution</li>
      </ul>
      
      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e5e7eb;">
      
      <h2>Comprehensive White Paper</h2>
      <div style="margin: 2rem 0; padding: 2rem; background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1)); border-radius: 12px; border: 1px solid rgba(6, 182, 212, 0.2);">
        <h3 style="color: #0891b2; margin-bottom: 1rem; font-size: 1.5rem; font-weight: 700;">AI-Specific Incident Response: A Comprehensive Guide</h3>
        
        <p style="margin-bottom: 1.5rem; color: #374151;">
          Download our comprehensive white paper that covers advanced incident response strategies specifically designed for AI systems. This 45-minute read provides technical practitioners and CISOs with:
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
          <ul style="margin: 0; padding: 0; list-style: none;">
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>AI threat landscape analysis</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Specialized forensic techniques</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Recovery strategies for ML systems</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Real-world case studies</span>
            </li>
          </ul>
          <ul style="margin: 0; padding: 0; list-style: none;">
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Deployment-specific considerations</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Regulatory compliance guidance</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Implementation roadmap</span>
            </li>
            <li style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem; color: #10b981; margin-top: 0.125rem; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Technology recommendations</span>
            </li>
          </ul>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          <a href="/white-papers/ai-incident-response.pdf" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background-color: #0891b2; color: white; border-radius: 8px; text-decoration: none; font-weight: 600; transition: background-color 0.2s;" download>
            <svg style="width: 1.25rem; height: 1.25rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download PDF (45 min read)
          </a>
        </div>
        
        <div style="padding: 1rem; background-color: rgba(6, 182, 212, 0.1); border-radius: 8px;">
          <p style="margin: 0; font-size: 0.875rem; color: #0c7a8a; font-style: italic;">
            This white paper represents the latest research and best practices in AI incident response, compiled by the perfecXion.ai security team. Last updated: January 2025.
          </p>
        </div>
      </div>
      
      <p>Congratulations on completing the AI Security 101 learning path! You now have a comprehensive understanding of AI security fundamentals, threats, implementation strategies, compliance requirements, and incident response procedures.</p>
    `
  }

  return contentMap[slug] || '<p>Content not found.</p>'
}