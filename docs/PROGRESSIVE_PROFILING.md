# Progressive Profiling System Documentation

## Overview

The Progressive Profiling System is a comprehensive lead capture and qualification framework designed to intelligently collect user information while providing personalized content experiences. The system implements sophisticated lead scoring, content gating, and GDPR-compliant data management.

## Architecture

### Core Components

```
┌─────────────────────────────────────────┐
│           Progressive Form              │
│  ┌─────────────────────────────────────┐│
│  │        ConditionalField            ││
│  │    - Dynamic field rendering      ││
│  │    - Validation & enrichment      ││
│  │    - Conditional logic            ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │        LeadScoring                 ││
│  │    - Real-time scoring            ││
│  │    - Qualification levels         ││
│  │    - Score breakdown              ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│           Content Gating                │
│  ┌─────────────────────────────────────┐│
│  │    Access Control Rules            ││
│  │    Profile Requirements            ││
│  │    Personalized Content            ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│      Content Recommendation Engine     │
│  ┌─────────────────────────────────────┐│
│  │    Audience Segmentation           ││
│  │    Personalized Recommendations    ││
│  │    Content Scoring                 ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│         GDPR Compliance Layer           │
│  ┌─────────────────────────────────────┐│
│  │    Consent Management              ││
│  │    Data Export/Deletion            ││
│  │    Privacy Controls                ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

## Key Features

### 1. Progressive Form System

**ProgressiveForm Component** (`components/progressive/ProgressiveForm.tsx`)
- Multi-step form with intelligent progression
- Real-time validation and error handling
- Company enrichment integration
- Form analytics and abandonment tracking
- Mobile-optimized responsive design

**ConditionalField Component** (`components/progressive/ConditionalField.tsx`)
- Dynamic field rendering based on conditions
- Comprehensive field types (text, email, select, multiselect, etc.)
- Real-time validation with custom rules
- Company enrichment triggers
- Accessibility compliant

### 2. Lead Scoring Algorithm

**Scoring Categories:**
- **Demographic** (25 points max): Company size, role, industry
- **Behavioral** (20 points max): Engagement patterns, content interaction
- **Intent** (25 points max): AI maturity, security challenges, budget
- **Timing** (15 points max): Implementation timeline, urgency
- **Engagement** (15 points max): Download history, form completion

**Qualification Levels:**
- **Cold (0-25 points)**: Basic lead, nurture track
- **Warm (26-50 points)**: Marketing qualified, targeted content
- **Hot (51-75 points)**: Sales qualified, demo ready
- **Sales Ready (76-100 points)**: High priority, immediate follow-up

### 3. Content Gating Rules

**Resource Access Thresholds:**
```typescript
const thresholds = {
  'whitepaper': 60,   // Medium barrier - email + company
  'guide': 40,        // Low barrier - email + name
  'calculator': 80,   // High barrier - full qualification
  'assessment': 70    // High barrier - security role required
}
```

**Gating Logic:**
- Profile completeness requirements
- Role-based access control
- Company size considerations
- AI maturity alignment
- Custom logic functions

### 4. Personalization Engine

**Audience Segments:**
- **Developers**: Technical implementation focus
- **Security Teams**: Security tools and frameworks
- **Executives**: Strategic and ROI content
- **Compliance**: Regulatory and governance resources
- **Startups**: Cost-effective solutions
- **Enterprise**: Scalable implementations

**Content Personalization:**
- Dynamic titles and descriptions
- Role-specific messaging
- Company size appropriate content
- AI maturity aligned recommendations

### 5. GDPR Compliance

**Consent Management:**
- Granular consent categories
- Consent expiration handling
- Audit trail maintenance
- Regional detection (EU/EEA)

**Data Rights Implementation:**
- Right of access (Article 15)
- Right to portability (Article 20)
- Right to erasure (Article 17)
- Right to rectification (Article 16)

## Implementation Guide

### Basic Setup

1. **Install Dependencies**
```bash
npm install clsx tailwind-merge lucide-react
```

2. **Import Core Components**
```typescript
import ProgressiveForm from '@/components/progressive/ProgressiveForm'
import ContentGate from '@/components/progressive/ContentGate'
import { useLeadScoring } from '@/lib/hooks/useLeadScoring'
```

3. **Basic Progressive Form**
```typescript
const BasicForm = () => {
  const config = {
    steps: [
      {
        id: 'basic_info',
        name: 'Basic Information',
        title: 'Tell us about yourself',
        fields: [
          {
            id: 'email',
            name: 'email',
            label: 'Work Email',
            type: 'email',
            required: true
          }
        ],
        completionThreshold: 1,
        priority: 'high'
      }
    ],
    // ... additional configuration
  }

  return (
    <ProgressiveForm
      config={config}
      onFormComplete={(profile) => console.log('Profile completed:', profile)}
      variant="embedded"
      showProgress
    />
  )
}
```

### Advanced Configuration

**Custom Lead Scoring Rules**
```typescript
const customScoringConfig = {
  rules: [
    {
      id: 'enterprise_boost',
      field: 'companySize',
      condition: { operator: 'equals', value: 'enterprise' },
      points: 30,
      category: 'demographic'
    },
    {
      id: 'security_role',
      field: 'jobRole',
      condition: { operator: 'equals', value: 'security' },
      points: 25,
      category: 'demographic'
    }
  ],
  thresholds: [
    {
      name: 'sales_ready',
      minScore: 80,
      maxScore: 100,
      actions: [
        { type: 'notification', config: { channel: 'slack' } }
      ]
    }
  ]
}
```

**Content Gating Configuration**
```typescript
const gatedResource = {
  id: 'enterprise-whitepaper',
  title: 'Enterprise AI Security Guide',
  type: 'whitepaper',
  gatingRules: [{
    resourceType: 'whitepaper',
    profileRequirements: [
      { field: 'email', operator: 'exists', weight: 10 },
      { field: 'company', operator: 'exists', weight: 15 },
      { field: 'companySize', operator: 'equals', value: 'enterprise', weight: 20 }
    ]
  }]
}
```

## API Reference

### Hooks

#### `useLeadScoring(config?: LeadScoringConfig)`
```typescript
const {
  calculateScore,        // (profile) => number
  scoreBreakdown,       // (profile) => ScoreBreakdown
  getQualificationLevel, // (score) => QualificationLevel
  getNextThreshold      // (score) => ThresholdInfo | null
} = useLeadScoring()
```

#### `useContentGating()`
```typescript
const {
  checkAccess,           // (resource, profile) => AccessResult
  getRequirements,       // (resource, profile) => MissingRequirement[]
  getPersonalizedContent, // (resource, profile) => PersonalizedContent
  getAudienceSegment     // (profile) => AudienceSegment
} = useContentGating()
```

#### `useGDPRCompliance()`
```typescript
const {
  saveConsent,          // (consent) => Promise<void>
  getStoredConsent,     // () => GDPRConsent | null
  exportUserData,       // (email?) => Promise<any>
  deleteUserData,       // (email?) => Promise<void>
  isGDPRRequired       // () => boolean
} = useGDPRCompliance()
```

### Components

#### `<ProgressiveForm>`
**Props:**
- `config: ProgressiveFormConfig` - Form configuration
- `initialData?: Partial<LeadProfile>` - Pre-fill data
- `onFormComplete?: (profile: LeadProfile) => void` - Completion callback
- `variant?: 'inline' | 'modal' | 'embedded'` - Display variant
- `showProgress?: boolean` - Show progress indicator
- `allowSkip?: boolean` - Allow step skipping

#### `<ContentGate>`
**Props:**
- `resource: ContentResource` - Resource to gate
- `userProfile?: Partial<LeadProfile>` - Current user profile
- `onAccess?: (resource, profile) => void` - Access granted callback
- `variant?: 'card' | 'inline' | 'modal'` - Display variant
- `showRequirements?: boolean` - Show missing requirements

#### `<GDPRCompliance>`
**Props:**
- `variant?: 'banner' | 'modal' | 'settings'` - Display variant
- `showFullControls?: boolean` - Show all privacy controls
- `onConsentChange?: (consent) => void` - Consent change callback

## Data Flow

### 1. Form Initialization
```
User visits form → Load stored profile → Initialize scoring → Render first step
```

### 2. Field Interaction
```
Field change → Validation → Enrichment (if applicable) → Score calculation → Progress update
```

### 3. Step Progression
```
Step completion → Validation → Score threshold check → Next step or completion
```

### 4. Content Access
```
Resource request → Profile evaluation → Gating rules check → Access grant/deny → Analytics tracking
```

### 5. GDPR Compliance
```
EU visitor detection → Consent banner → Consent collection → Data processing → Rights management
```

## Testing Strategy

### Unit Tests
- Lead scoring algorithm accuracy
- Content gating rule evaluation
- GDPR compliance functions
- Form validation logic
- Data persistence

### Integration Tests
- Complete user journey flows
- Cross-component data consistency
- API integration points
- Analytics tracking
- Error handling

### Performance Tests
- Form rendering speed
- Scoring calculation efficiency
- Large content catalog handling
- Memory usage optimization

### Accessibility Tests
- Screen reader compatibility
- Keyboard navigation
- Color contrast compliance
- Focus management

## Analytics & Monitoring

### Key Metrics
- **Form Completion Rate**: Percentage of users completing forms
- **Step Abandonment**: Where users drop off in multi-step forms
- **Lead Score Distribution**: Quality of captured leads
- **Content Access Patterns**: Which resources are most requested
- **Consent Rates**: GDPR consent acceptance percentages

### Event Tracking
```typescript
// Form events
'form_start', 'field_complete', 'step_complete', 'form_submit', 'form_abandon'

// Content events  
'resource_view', 'resource_access', 'resource_download'

// Scoring events
'lead_score_update', 'qualification_change'

// Privacy events
'consent_given', 'consent_withdrawn', 'data_export', 'data_deletion'
```

## Security Considerations

### Data Protection
- **Encryption**: All sensitive data encrypted at rest and in transit
- **Access Control**: Role-based access to lead data
- **Audit Logging**: Complete audit trail of data access and modifications
- **Data Minimization**: Only collect necessary information

### Privacy by Design
- **Consent First**: No data collection without explicit consent
- **Transparency**: Clear data usage explanations
- **User Control**: Easy consent withdrawal and data deletion
- **Regional Compliance**: Automatic GDPR detection and compliance

## Deployment Guide

### Environment Variables
```bash
# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id
NEXT_PUBLIC_GTM_ID=your_gtm_id

# Company Enrichment
CLEARBIT_API_KEY=your_clearbit_key
BUILTWITH_API_KEY=your_builtwith_key

# Email Services
SENDGRID_API_KEY=your_sendgrid_key
MAILCHIMP_API_KEY=your_mailchimp_key

# Database
DATABASE_URL=your_database_url
REDIS_URL=your_redis_url
```

### Build Configuration
```typescript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react']
  },
  env: {
    PROGRESSIVE_PROFILING_ENABLED: 'true'
  }
}
```

### Database Schema
```sql
-- Lead profiles table
CREATE TABLE lead_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  profile_data JSONB NOT NULL,
  lead_score INTEGER DEFAULT 0,
  qualification_level VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- GDPR consent tracking
CREATE TABLE gdpr_consents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255),
  consent_data JSONB NOT NULL,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Content access tracking
CREATE TABLE content_access (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255),
  resource_id VARCHAR(255) NOT NULL,
  access_granted BOOLEAN DEFAULT FALSE,
  lead_score INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Troubleshooting

### Common Issues

1. **Form Not Progressing**
   - Check validation rules
   - Verify completion thresholds
   - Review conditional logic

2. **Lead Scoring Inconsistent**
   - Validate scoring configuration
   - Check rule conditions
   - Review profile data quality

3. **Content Access Denied**
   - Review gating rules
   - Check profile completeness
   - Verify score thresholds

4. **GDPR Compliance Issues**
   - Verify EU detection logic
   - Check consent storage
   - Review privacy policy links

### Debug Mode
```typescript
// Enable detailed logging
localStorage.setItem('progressive_profiling_debug', 'true')

// View current lead score breakdown
console.log(useLeadScoring().scoreBreakdown(profile))

// Check content access evaluation
console.log(useContentGating().checkAccess(resource, profile))
```

## Performance Optimization

### Code Splitting
```typescript
// Lazy load heavy components
const ProgressiveForm = lazy(() => import('@/components/progressive/ProgressiveForm'))
const ContentGate = lazy(() => import('@/components/progressive/ContentGate'))
```

### Caching Strategy
- **Lead Profiles**: Cache in localStorage with TTL
- **Content Rules**: Cache gating rules in memory
- **Enrichment Data**: Cache company data for 24 hours
- **Analytics**: Batch events and send periodically

### Bundle Size Optimization
- Tree-shake unused utilities
- Compress field option data
- Lazy load non-critical components
- Use dynamic imports for large libraries

## Roadmap

### Phase 1 ✅ (Completed)
- Basic progressive forms
- Lead scoring system
- Content gating
- GDPR compliance

### Phase 2 (In Progress)
- Advanced personalization
- Predictive lead scoring
- A/B testing framework
- Enhanced analytics

### Phase 3 (Planned)
- AI-powered content recommendations
- Behavioral scoring algorithms
- Advanced segmentation
- Marketing automation integration

### Phase 4 (Future)
- Machine learning optimization
- Real-time personalization
- Advanced privacy controls
- Enterprise SSO integration

## Support

For questions or issues with the Progressive Profiling System:

- **Documentation**: Check this README and inline code comments
- **Issues**: Create GitHub issues for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Email**: technical-support@perfecxion.ai

## License

This implementation is part of the perfecXion.ai codebase and follows the project's licensing terms.