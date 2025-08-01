import { AssessmentQuestion } from './assessment-types'

export const assessmentQuestions: AssessmentQuestion[] = [
  // AI Usage Profile
  {
    id: 'ai_models_deployed',
    category: 'AI/ML Usage Profile',
    text: 'What types of AI models does your organization currently deploy?',
    type: 'multiple',
    required: true,
    weight: 0.15,
    options: [
      {
        value: 'llm',
        label: 'Large Language Models (GPT, Claude, etc.)',
        description: 'Text generation, chatbots, content creation',
        riskScore: 8
      },
      {
        value: 'cv',
        label: 'Computer Vision',
        description: 'Image recognition, object detection, facial recognition',
        riskScore: 7
      },
      {
        value: 'nlp',
        label: 'Natural Language Processing',
        description: 'Sentiment analysis, entity extraction, translation',
        riskScore: 6
      },
      {
        value: 'ml_traditional',
        label: 'Traditional Machine Learning',
        description: 'Classification, regression, clustering',
        riskScore: 5
      },
      {
        value: 'deep_learning',
        label: 'Deep Learning Models',
        description: 'Neural networks, transformers, CNNs',
        riskScore: 7
      },
      {
        value: 'generative_ai',
        label: 'Generative AI',
        description: 'Image generation, code generation, synthetic data',
        riskScore: 9
      },
      {
        value: 'rl',
        label: 'Reinforcement Learning',
        description: 'Decision making, game playing, robotics',
        riskScore: 6
      }
    ]
  },
  {
    id: 'data_sensitivity',
    category: 'AI/ML Usage Profile',
    text: 'What types of sensitive data do your AI systems process?',
    type: 'multiple',
    required: true,
    weight: 0.20,
    options: [
      {
        value: 'pii',
        label: 'Personal Identifiable Information (PII)',
        description: 'Names, addresses, SSNs, email addresses',
        riskScore: 9
      },
      {
        value: 'financial',
        label: 'Financial Data',
        description: 'Credit cards, bank accounts, transaction data',
        riskScore: 10
      },
      {
        value: 'health',
        label: 'Health/Medical Records',
        description: 'Patient data, diagnoses, treatment information',
        riskScore: 10
      },
      {
        value: 'proprietary',
        label: 'Proprietary Business Data',
        description: 'Trade secrets, internal strategies, competitive intel',
        riskScore: 8
      },
      {
        value: 'biometric',
        label: 'Biometric Data',
        description: 'Fingerprints, facial recognition, voice patterns',
        riskScore: 9
      },
      {
        value: 'public',
        label: 'Only Public/Non-sensitive Data',
        description: 'Publicly available information only',
        riskScore: 2
      }
    ]
  },
  {
    id: 'deployment_scale',
    category: 'AI/ML Usage Profile',
    text: 'What is the scale of your AI deployment (number of models in production)?',
    type: 'single',
    required: true,
    weight: 0.10,
    options: [
      {
        value: 'pilot',
        label: 'Pilot/POC (1-5 models)',
        riskScore: 3
      },
      {
        value: 'small',
        label: 'Small Scale (6-20 models)',
        riskScore: 5
      },
      {
        value: 'medium',
        label: 'Medium Scale (21-50 models)',
        riskScore: 7
      },
      {
        value: 'large',
        label: 'Large Scale (51-100 models)',
        riskScore: 8
      },
      {
        value: 'enterprise',
        label: 'Enterprise Scale (100+ models)',
        riskScore: 10
      }
    ]
  },
  {
    id: 'user_access',
    category: 'AI/ML Usage Profile',
    text: 'Who has access to your AI systems?',
    type: 'single',
    required: true,
    weight: 0.15,
    options: [
      {
        value: 'internal_only',
        label: 'Internal employees only',
        riskScore: 3
      },
      {
        value: 'partners',
        label: 'Internal + trusted partners',
        riskScore: 5
      },
      {
        value: 'customers_auth',
        label: 'Authenticated customers',
        riskScore: 7
      },
      {
        value: 'public',
        label: 'Public/Anyone on the internet',
        riskScore: 10
      }
    ]
  },
  {
    id: 'deployment_environment',
    category: 'AI/ML Usage Profile',
    text: 'Where are your AI models deployed?',
    type: 'multiple',
    required: true,
    weight: 0.10,
    options: [
      {
        value: 'on_premise',
        label: 'On-premise data centers',
        riskScore: 4
      },
      {
        value: 'private_cloud',
        label: 'Private cloud',
        riskScore: 5
      },
      {
        value: 'public_cloud',
        label: 'Public cloud (AWS, Azure, GCP)',
        riskScore: 6
      },
      {
        value: 'edge',
        label: 'Edge devices/IoT',
        riskScore: 8
      },
      {
        value: 'mobile',
        label: 'Mobile applications',
        riskScore: 7
      },
      {
        value: 'third_party',
        label: 'Third-party APIs',
        riskScore: 9
      }
    ]
  },
  // Security Controls
  {
    id: 'security_policies',
    category: 'Current Security Measures',
    text: 'Do you have AI-specific security policies and procedures in place?',
    type: 'single',
    required: true,
    weight: 0.10,
    options: [
      {
        value: 'comprehensive',
        label: 'Yes, comprehensive AI security framework',
        description: 'Documented policies, procedures, and guidelines',
        riskScore: 2
      },
      {
        value: 'basic',
        label: 'Basic policies only',
        description: 'Some documentation but not comprehensive',
        riskScore: 6
      },
      {
        value: 'developing',
        label: 'Currently developing',
        description: 'In the process of creating policies',
        riskScore: 8
      },
      {
        value: 'none',
        label: 'No AI-specific policies',
        description: 'Using general IT security policies only',
        riskScore: 10
      }
    ]
  },
  {
    id: 'security_testing',
    category: 'Current Security Measures',
    text: 'How do you currently test the security of your AI models?',
    type: 'single',
    required: true,
    weight: 0.15,
    options: [
      {
        value: 'continuous',
        label: 'Continuous automated testing',
        description: 'CI/CD integrated security testing',
        riskScore: 2
      },
      {
        value: 'regular',
        label: 'Regular scheduled testing',
        description: 'Weekly or monthly security assessments',
        riskScore: 5
      },
      {
        value: 'occasional',
        label: 'Occasional testing',
        description: 'Ad-hoc or annual security reviews',
        riskScore: 8
      },
      {
        value: 'none',
        label: 'No security testing',
        description: 'Models deployed without security testing',
        riskScore: 10
      }
    ]
  },
  {
    id: 'monitoring',
    category: 'Current Security Measures',
    text: 'What AI-specific monitoring do you have in place?',
    type: 'multiple',
    required: true,
    weight: 0.10,
    options: [
      {
        value: 'model_drift',
        label: 'Model drift detection',
        riskScore: -2
      },
      {
        value: 'adversarial',
        label: 'Adversarial input detection',
        riskScore: -3
      },
      {
        value: 'data_poisoning',
        label: 'Data poisoning detection',
        riskScore: -3
      },
      {
        value: 'access_anomaly',
        label: 'Anomalous access patterns',
        riskScore: -2
      },
      {
        value: 'output_validation',
        label: 'Output validation and filtering',
        riskScore: -2
      },
      {
        value: 'none',
        label: 'No AI-specific monitoring',
        riskScore: 10
      }
    ]
  },
  {
    id: 'incident_response',
    category: 'Current Security Measures',
    text: 'Do you have an AI-specific incident response plan?',
    type: 'single',
    required: true,
    weight: 0.10,
    options: [
      {
        value: 'yes_tested',
        label: 'Yes, regularly tested',
        description: 'Documented plan with regular drills',
        riskScore: 1
      },
      {
        value: 'yes_untested',
        label: 'Yes, but not tested',
        description: 'Plan exists but no practice drills',
        riskScore: 5
      },
      {
        value: 'general',
        label: 'General security plan only',
        description: 'No AI-specific procedures',
        riskScore: 8
      },
      {
        value: 'none',
        label: 'No incident response plan',
        riskScore: 10
      }
    ]
  },
  {
    id: 'team_training',
    category: 'Current Security Measures',
    text: 'How well-trained is your team on AI security risks?',
    type: 'single',
    required: true,
    weight: 0.08,
    options: [
      {
        value: 'expert',
        label: 'Expert level',
        description: 'Dedicated AI security team with certifications',
        riskScore: 1
      },
      {
        value: 'trained',
        label: 'Well trained',
        description: 'Regular training and awareness programs',
        riskScore: 3
      },
      {
        value: 'basic',
        label: 'Basic awareness',
        description: 'Some team members have basic knowledge',
        riskScore: 6
      },
      {
        value: 'limited',
        label: 'Limited knowledge',
        description: 'Minimal understanding of AI-specific risks',
        riskScore: 9
      }
    ]
  },
  // Compliance
  {
    id: 'regulations',
    category: 'Regulatory Requirements',
    text: 'Which regulations apply to your AI systems?',
    type: 'multiple',
    required: true,
    weight: 0.10,
    options: [
      {
        value: 'gdpr',
        label: 'GDPR',
        description: 'EU General Data Protection Regulation',
        riskScore: 8
      },
      {
        value: 'ccpa',
        label: 'CCPA/CPRA',
        description: 'California Consumer Privacy Act',
        riskScore: 7
      },
      {
        value: 'hipaa',
        label: 'HIPAA',
        description: 'Health Insurance Portability and Accountability Act',
        riskScore: 9
      },
      {
        value: 'ai_act',
        label: 'EU AI Act',
        description: 'European Union AI Act',
        riskScore: 9
      },
      {
        value: 'sox',
        label: 'SOX',
        description: 'Sarbanes-Oxley Act',
        riskScore: 8
      },
      {
        value: 'pci_dss',
        label: 'PCI DSS',
        description: 'Payment Card Industry Data Security Standard',
        riskScore: 8
      },
      {
        value: 'iso27001',
        label: 'ISO 27001',
        description: 'Information security management',
        riskScore: 6
      },
      {
        value: 'none',
        label: 'None/Unsure',
        riskScore: 5
      }
    ]
  },
  {
    id: 'compliance_maturity',
    category: 'Regulatory Requirements',
    text: 'How mature is your AI compliance program?',
    type: 'single',
    required: true,
    weight: 0.08,
    options: [
      {
        value: 'mature',
        label: 'Mature and audited',
        description: 'Regular audits with no major findings',
        riskScore: 2
      },
      {
        value: 'established',
        label: 'Established',
        description: 'Documented processes and controls',
        riskScore: 4
      },
      {
        value: 'developing',
        label: 'Developing',
        description: 'Building compliance framework',
        riskScore: 7
      },
      {
        value: 'minimal',
        label: 'Minimal',
        description: 'Ad-hoc compliance efforts',
        riskScore: 10
      }
    ]
  },
  // Recent Incidents
  {
    id: 'past_incidents',
    category: 'Risk Indicators',
    text: 'Have you experienced any AI-related security incidents in the past year?',
    type: 'single',
    required: true,
    weight: 0.12,
    options: [
      {
        value: 'none',
        label: 'No incidents',
        riskScore: 2
      },
      {
        value: 'minor',
        label: '1-2 minor incidents',
        description: 'Quickly contained with minimal impact',
        riskScore: 5
      },
      {
        value: 'moderate',
        label: 'Several incidents',
        description: 'Some business impact but contained',
        riskScore: 8
      },
      {
        value: 'major',
        label: 'Major incident(s)',
        description: 'Significant business or data impact',
        riskScore: 10
      }
    ]
  },
  {
    id: 'vendor_management',
    category: 'Risk Indicators',
    text: 'How do you manage AI vendor/third-party risks?',
    type: 'single',
    required: true,
    weight: 0.08,
    options: [
      {
        value: 'comprehensive',
        label: 'Comprehensive vendor risk program',
        description: 'Regular assessments and monitoring',
        riskScore: 2
      },
      {
        value: 'basic',
        label: 'Basic vendor assessments',
        description: 'Initial review only',
        riskScore: 5
      },
      {
        value: 'minimal',
        label: 'Minimal oversight',
        description: 'Contract review only',
        riskScore: 8
      },
      {
        value: 'none',
        label: 'No formal process',
        riskScore: 10
      }
    ]
  },
  {
    id: 'budget_priority',
    category: 'Risk Indicators',
    text: 'What is your AI security budget relative to overall AI spend?',
    type: 'single',
    required: false,
    weight: 0.05,
    options: [
      {
        value: 'high',
        label: 'High priority (>15%)',
        riskScore: 2
      },
      {
        value: 'moderate',
        label: 'Moderate (5-15%)',
        riskScore: 5
      },
      {
        value: 'low',
        label: 'Low priority (<5%)',
        riskScore: 8
      },
      {
        value: 'none',
        label: 'No dedicated budget',
        riskScore: 10
      }
    ]
  }
]