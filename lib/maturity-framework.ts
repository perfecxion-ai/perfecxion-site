import { MaturityLevel } from './assessment-types'

interface MaturityLevelDescription {
  description: string
  characteristics: string[]
  gaps?: string[]
  improvements?: string[]
}

interface MaturityDimensionData {
  id: string
  name: string
  description: string
  levelDescriptions: Record<MaturityLevel, MaturityLevelDescription>
  metrics: {
    name: string
    baseline: number
    increment: number
    unit: string
    target: number
  }[]
}

export const maturityFramework = {
  dimensions: [
    {
      id: 'governance',
      name: 'AI Governance & Strategy',
      description: 'Executive oversight, policies, and strategic direction for AI security',
      levelDescriptions: {
        1: {
          description: 'No formal AI governance structure exists',
          characteristics: [
            'Ad-hoc AI security decisions',
            'No executive oversight of AI risks',
            'Limited awareness of AI security requirements',
            'Reactive approach to AI security incidents'
          ]
        },
        2: {
          description: 'Basic AI governance framework is being established',
          characteristics: [
            'Executive awareness of AI security risks',
            'Basic AI usage policies exist',
            'Some governance roles defined',
            'Initial risk assessment processes'
          ],
          gaps: [
            'Inconsistent policy enforcement',
            'Limited cross-functional coordination'
          ],
          improvements: [
            'Establish AI security committee',
            'Define clear roles and responsibilities'
          ]
        },
        3: {
          description: 'Comprehensive AI governance framework is documented and followed',
          characteristics: [
            'Formal AI governance committee',
            'Well-defined AI security policies',
            'Regular governance reviews',
            'Cross-functional coordination processes'
          ],
          gaps: [
            'Limited metrics and KPIs',
            'Governance processes not fully optimized'
          ],
          improvements: [
            'Implement governance metrics',
            'Establish continuous improvement processes'
          ]
        },
        4: {
          description: 'AI governance is measured, monitored, and continuously improved',
          characteristics: [
            'Quantitative governance metrics',
            'Regular policy effectiveness reviews',
            'Proactive risk management',
            'Integration with business strategy'
          ],
          gaps: [
            'Governance innovation opportunities',
            'Industry leadership potential'
          ],
          improvements: [
            'Drive industry best practices',
            'Implement predictive governance'
          ]
        },
        5: {
          description: 'Industry-leading AI governance with continuous innovation',
          characteristics: [
            'Predictive governance capabilities',
            'Industry thought leadership',
            'Adaptive governance frameworks',
            'Ecosystem collaboration and influence'
          ]
        }
      },
      metrics: [
        { name: 'Policy Coverage', baseline: 20, increment: 20, unit: '%', target: 100 },
        { name: 'Governance Maturity Score', baseline: 1, increment: 1, unit: '/5', target: 5 },
        { name: 'Executive Engagement', baseline: 10, increment: 22.5, unit: '%', target: 95 }
      ]
    },
    {
      id: 'risk_management',
      name: 'AI Risk Management',
      description: 'Identification, assessment, and mitigation of AI-specific risks',
      levelDescriptions: {
        1: {
          description: 'Minimal AI risk management processes',
          characteristics: [
            'No formal AI risk assessment',
            'Limited understanding of AI-specific threats',
            'Reactive incident response',
            'No risk monitoring capabilities'
          ]
        },
        2: {
          description: 'Basic AI risk identification and assessment processes',
          characteristics: [
            'Initial AI risk taxonomy developed',
            'Basic threat modeling for AI systems',
            'Some risk mitigation controls',
            'Ad-hoc risk reporting'
          ],
          gaps: [
            'Incomplete risk coverage',
            'Limited quantitative risk analysis'
          ],
          improvements: [
            'Expand risk assessment scope',
            'Implement risk scoring methodology'
          ]
        },
        3: {
          description: 'Comprehensive AI risk management program',
          characteristics: [
            'Complete AI risk taxonomy',
            'Regular risk assessments',
            'Quantitative risk analysis',
            'Integrated risk mitigation strategies'
          ],
          gaps: [
            'Limited predictive risk capabilities',
            'Risk automation opportunities'
          ],
          improvements: [
            'Implement predictive risk modeling',
            'Automate risk assessment processes'
          ]
        },
        4: {
          description: 'Advanced AI risk management with predictive capabilities',
          characteristics: [
            'Predictive risk modeling',
            'Automated risk monitoring',
            'Dynamic risk mitigation',
            'Risk-informed decision making'
          ],
          gaps: [
            'Cross-industry risk intelligence',
            'Advanced threat prediction'
          ],
          improvements: [
            'Implement threat intelligence feeds',
            'Develop advanced risk analytics'
          ]
        },
        5: {
          description: 'Industry-leading AI risk management with advanced analytics',
          characteristics: [
            'Advanced threat intelligence',
            'AI-powered risk prediction',
            'Autonomous risk response',
            'Industry risk leadership'
          ]
        }
      },
      metrics: [
        { name: 'Risk Coverage', baseline: 15, increment: 21.25, unit: '%', target: 100 },
        { name: 'Risk Response Time', baseline: 72, increment: -18, unit: 'hours', target: 0 },
        { name: 'Risk Prediction Accuracy', baseline: 40, increment: 15, unit: '%', target: 100 }
      ]
    },
    {
      id: 'security_controls',
      name: 'Technical Security Controls',
      description: 'Implementation and management of AI-specific security technologies',
      levelDescriptions: {
        1: {
          description: 'Minimal AI-specific security controls',
          characteristics: [
            'Traditional security controls only',
            'No AI-specific threat detection',
            'Limited model protection',
            'Manual security processes'
          ]
        },
        2: {
          description: 'Basic AI security controls implemented',
          characteristics: [
            'Some AI-specific security tools',
            'Basic model protection measures',
            'Initial threat detection capabilities',
            'Some automated security processes'
          ],
          gaps: [
            'Limited control coverage',
            'Manual security operations'
          ],
          improvements: [
            'Expand security control coverage',
            'Implement security automation'
          ]
        },
        3: {
          description: 'Comprehensive AI security control framework',
          characteristics: [
            'Complete AI security control coverage',
            'Automated threat detection',
            'Integrated security operations',
            'Regular security testing'
          ],
          gaps: [
            'Advanced threat detection',
            'Predictive security capabilities'
          ],
          improvements: [
            'Implement advanced threat detection',
            'Develop predictive security'
          ]
        },
        4: {
          description: 'Advanced AI security with predictive capabilities',
          characteristics: [
            'Advanced threat detection and response',
            'Predictive security analytics',
            'Automated incident response',
            'Continuous security optimization'
          ],
          gaps: [
            'Autonomous security operations',
            'Self-healing security systems'
          ],
          improvements: [
            'Implement autonomous security',
            'Develop self-healing capabilities'
          ]
        },
        5: {
          description: 'Autonomous AI security with self-healing capabilities',
          characteristics: [
            'Fully autonomous security operations',
            'Self-healing security systems',
            'Advanced AI threat intelligence',
            'Security innovation leadership'
          ]
        }
      },
      metrics: [
        { name: 'Control Coverage', baseline: 25, increment: 18.75, unit: '%', target: 100 },
        { name: 'Threat Detection Rate', baseline: 60, increment: 10, unit: '%', target: 100 },
        { name: 'Mean Time to Response', baseline: 240, increment: -60, unit: 'minutes', target: 0 }
      ]
    },
    {
      id: 'compliance',
      name: 'Regulatory Compliance',
      description: 'Adherence to AI-related regulations and industry standards',
      levelDescriptions: {
        1: {
          description: 'Limited awareness of AI compliance requirements',
          characteristics: [
            'No formal compliance program',
            'Limited regulatory awareness',
            'Ad-hoc compliance activities',
            'No compliance monitoring'
          ]
        },
        2: {
          description: 'Basic AI compliance framework being established',
          characteristics: [
            'Initial compliance assessments',
            'Basic regulatory mapping',
            'Some compliance controls',
            'Limited compliance reporting'
          ],
          gaps: [
            'Incomplete regulatory coverage',
            'Manual compliance processes'
          ],
          improvements: [
            'Expand regulatory coverage',
            'Automate compliance monitoring'
          ]
        },
        3: {
          description: 'Comprehensive AI compliance program',
          characteristics: [
            'Complete regulatory mapping',
            'Comprehensive compliance controls',
            'Regular compliance assessments',
            'Automated compliance monitoring'
          ],
          gaps: [
            'Predictive compliance capabilities',
            'Dynamic regulatory adaptation'
          ],
          improvements: [
            'Implement predictive compliance',
            'Develop adaptive controls'
          ]
        },
        4: {
          description: 'Advanced compliance with predictive capabilities',
          characteristics: [
            'Predictive compliance analytics',
            'Dynamic regulatory adaptation',
            'Automated compliance reporting',
            'Proactive compliance management'
          ],
          gaps: [
            'Autonomous compliance systems',
            'Regulatory innovation influence'
          ],
          improvements: [
            'Implement autonomous compliance',
            'Drive regulatory innovation'
          ]
        },
        5: {
          description: 'Industry-leading compliance with regulatory influence',
          characteristics: [
            'Autonomous compliance systems',
            'Regulatory standard development',
            'Industry compliance leadership',
            'Global compliance innovation'
          ]
        }
      },
      metrics: [
        { name: 'Regulatory Coverage', baseline: 30, increment: 17.5, unit: '%', target: 100 },
        { name: 'Compliance Score', baseline: 60, increment: 10, unit: '%', target: 100 },
        { name: 'Audit Findings', baseline: 25, increment: -6.25, unit: 'findings', target: 0 }
      ]
    },
    {
      id: 'incident_response',
      name: 'AI Incident Response',
      description: 'Capability to detect, respond to, and recover from AI security incidents',
      levelDescriptions: {
        1: {
          description: 'No AI-specific incident response capabilities',
          characteristics: [
            'General incident response only',
            'No AI incident detection',
            'Manual response processes',
            'Limited recovery capabilities'
          ]
        },
        2: {
          description: 'Basic AI incident response procedures',
          characteristics: [
            'AI-specific incident procedures',
            'Basic incident detection',
            'Some automated responses',
            'Initial recovery processes'
          ],
          gaps: [
            'Limited incident detection coverage',
            'Manual response processes'
          ],
          improvements: [
            'Expand detection capabilities',
            'Automate response processes'
          ]
        },
        3: {
          description: 'Comprehensive AI incident response program',
          characteristics: [
            'Complete incident detection coverage',
            'Automated incident response',
            'Integrated recovery processes',
            'Regular response testing'
          ],
          gaps: [
            'Predictive incident capabilities',
            'Self-healing response systems'
          ],
          improvements: [
            'Implement predictive incident detection',
            'Develop self-healing capabilities'
          ]
        },
        4: {
          description: 'Advanced incident response with predictive capabilities',
          characteristics: [
            'Predictive incident detection',
            'Automated threat hunting',
            'Self-healing response systems',
            'Continuous response optimization'
          ],
          gaps: [
            'Autonomous incident response',
            'Zero-touch recovery'
          ],
          improvements: [
            'Implement autonomous response',
            'Develop zero-touch recovery'
          ]
        },
        5: {
          description: 'Autonomous incident response with zero-touch recovery',
          characteristics: [
            'Fully autonomous incident response',
            'Zero-touch recovery systems',
            'Advanced threat intelligence',
            'Response innovation leadership'
          ]
        }
      },
      metrics: [
        { name: 'Detection Coverage', baseline: 40, increment: 15, unit: '%', target: 100 },
        { name: 'Mean Time to Detection', baseline: 120, increment: -30, unit: 'minutes', target: 0 },
        { name: 'Recovery Time Objective', baseline: 24, increment: -6, unit: 'hours', target: 0 }
      ]
    },
    {
      id: 'training',
      name: 'Security Training & Awareness',
      description: 'AI security education and awareness programs for all stakeholders',
      levelDescriptions: {
        1: {
          description: 'Minimal AI security training and awareness',
          characteristics: [
            'No AI-specific training',
            'Limited security awareness',
            'Ad-hoc training activities',
            'No training measurement'
          ]
        },
        2: {
          description: 'Basic AI security training program',
          characteristics: [
            'Initial AI security training',
            'Basic awareness campaigns',
            'Some role-based training',
            'Limited training tracking'
          ],
          gaps: [
            'Incomplete training coverage',
            'Limited training effectiveness'
          ],
          improvements: [
            'Expand training program',
            'Measure training effectiveness'
          ]
        },
        3: {
          description: 'Comprehensive AI security training and awareness program',
          characteristics: [
            'Complete training curriculum',
            'Role-based training programs',
            'Regular awareness campaigns',
            'Training effectiveness measurement'
          ],
          gaps: [
            'Adaptive training capabilities',
            'Personalized learning paths'
          ],
          improvements: [
            'Implement adaptive training',
            'Develop personalized learning'
          ]
        },
        4: {
          description: 'Advanced training with adaptive and personalized learning',
          characteristics: [
            'Adaptive training systems',
            'Personalized learning paths',
            'Continuous skill assessment',
            'Training outcome optimization'
          ],
          gaps: [
            'AI-powered training systems',
            'Autonomous skill development'
          ],
          improvements: [
            'Implement AI-powered training',
            'Develop autonomous learning'
          ]
        },
        5: {
          description: 'AI-powered training with autonomous skill development',
          characteristics: [
            'AI-powered training systems',
            'Autonomous skill development',
            'Predictive training needs',
            'Training innovation leadership'
          ]
        }
      },
      metrics: [
        { name: 'Training Coverage', baseline: 25, increment: 18.75, unit: '%', target: 100 },
        { name: 'Training Effectiveness', baseline: 50, increment: 12.5, unit: '%', target: 100 },
        { name: 'Security Awareness Score', baseline: 40, increment: 15, unit: '%', target: 100 }
      ]
    }
  ] as MaturityDimensionData[]
}