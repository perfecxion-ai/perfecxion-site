import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Shield, Users, Brain, BookOpen, Settings, AlertTriangle, Zap, Lock } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Guides & Examples - SafeAI Guard Documentation',
    description: 'Configuration guides, safety policies, and best practices for SafeAI Guard child protection system.',
}

export default function SafeAIGuardGuides() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/safeai-guard" className="hover:text-primary-600 dark:hover:text-primary-400">
                        SafeAI Guard
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">Guides & Examples</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Guides & Examples
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Learn how to configure SafeAI Guard for different age groups, implement safety policies, and maximize protection effectiveness.
                </p>

                {/* Age-Based Configuration */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Age-Based Configuration Guides
                    </h2>

                    {/* Early Elementary (5-8) */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Users className="h-5 w-5 mr-2" />
                            Early Elementary (Ages 5-8)
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Maximum protection with educational focus for young learners.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`const earlyElementaryConfig = {
  protection_level: "strict",
  
  content_filtering: {
    // Block all potentially harmful content
    violence: { enabled: true, threshold: "zero_tolerance" },
    adult: { enabled: true, threshold: "zero_tolerance" },
    scary_content: { enabled: true, threshold: "high" },
    complex_topics: { enabled: true, simplify: true },
    
    // Educational enhancements
    convert_to_learning: true,
    age_appropriate_language: true,
    visual_aids_preference: true
  },
  
  interaction_limits: {
    session_duration: 30, // minutes
    daily_limit: 60, // minutes
    break_reminders: 15, // minutes
    
    // Restricted hours
    school_hours: {
      enabled: true,
      start: "08:00",
      end: "15:00",
      mode: "blocked"
    },
    bedtime: {
      enabled: true,
      start: "19:00",
      end: "07:00",
      mode: "blocked"
    }
  },
  
  educational_features: {
    reading_level: "kindergarten_2nd_grade",
    math_assistance: "visual_counting",
    creative_prompts: "guided_storytelling",
    safety_lessons: "interactive_games"
  },
  
  parent_controls: {
    approval_required: "all_new_topics",
    real_time_alerts: true,
    conversation_summaries: "detailed",
    screenshot_on_concern: true
  }
}`}</pre>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                <strong>Key Focus:</strong> Maximum safety with simple, educational interactions. All responses are simplified and enhanced with learning opportunities.
                            </p>
                        </div>
                    </div>

                    {/* Upper Elementary (9-11) */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Users className="h-5 w-5 mr-2" />
                            Upper Elementary (Ages 9-11)
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Balanced protection with increased educational freedom.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`const upperElementaryConfig = {
  protection_level: "balanced",
  
  content_filtering: {
    violence: { enabled: true, threshold: "high", educational_context: true },
    adult: { enabled: true, threshold: "zero_tolerance" },
    scary_content: { enabled: true, threshold: "medium" },
    misinformation: { enabled: true, fact_checking: true },
    
    // Academic support
    homework_help: { enabled: true, anti_cheating: true },
    research_assistance: { enabled: true, source_verification: true }
  },
  
  interaction_limits: {
    session_duration: 45, // minutes
    daily_limit: 90, // minutes
    
    // Flexible school hours
    school_hours: {
      enabled: true,
      start: "08:00",
      end: "15:00",
      mode: "educational_only",
      homework_exception: true
    }
  },
  
  educational_features: {
    reading_level: "3rd_5th_grade",
    stem_support: true,
    creative_writing: "guided_prompts",
    critical_thinking: "age_appropriate",
    digital_citizenship: "interactive_lessons"
  },
  
  safety_features: {
    personal_info_blocking: "strict",
    stranger_danger_alerts: true,
    cyberbullying_detection: true,
    peer_pressure_recognition: true
  }
}`}</pre>
                        </div>
                    </div>

                    {/* Middle School (12-14) */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Users className="h-5 w-5 mr-2" />
                            Middle School (Ages 12-14)
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Age-appropriate freedom with smart safety boundaries.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`const middleSchoolConfig = {
  protection_level: "relaxed",
  
  content_filtering: {
    violence: { enabled: true, threshold: "low", context_aware: true },
    adult: { enabled: true, threshold: "high", educational_exception: true },
    self_harm: { enabled: true, threshold: "zero_tolerance", support_resources: true },
    drugs_alcohol: { enabled: true, educational_context: true },
    
    // Academic freedom
    research_topics: "age_appropriate_all",
    controversial_topics: "educational_context_required"
  },
  
  privacy_protection: {
    social_media_info: "block_and_educate",
    meeting_strangers: "alert_immediately",
    location_sharing: "zero_tolerance",
    photo_sharing: "warn_and_log"
  },
  
  mental_health_support: {
    mood_monitoring: true,
    stress_detection: true,
    positive_reinforcement: true,
    crisis_resources: "immediate_access"
  },
  
  parent_collaboration: {
    daily_summaries: true,
    concern_alerts: "high_priority_only",
    trust_building: "progressive_freedom",
    conversation_insights: "topics_only"
  }
}`}</pre>
                        </div>
                    </div>
                </div>

                {/* Safety Policy Templates */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Shield className="h-6 w-6 mr-2" />
                        Safety Policy Templates
                    </h2>

                    {/* Homework Help Policy */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Homework Help Policy
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Encourage learning while preventing academic dishonesty.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`const homeworkPolicy = {
  allowed_assistance: [
    "concept_explanation",
    "step_by_step_guidance",
    "example_problems",
    "resource_recommendations",
    "study_strategies"
  ],
  
  blocked_requests: [
    "write_my_essay",
    "solve_all_problems",
    "complete_assignment",
    "copy_paste_answers"
  ],
  
  smart_responses: {
    essay_request: "I can help you understand essay structure and brainstorm ideas!",
    math_solution: "Let me show you how to solve a similar problem step by step.",
    test_answers: "I can help you study and understand the concepts instead.",
    plagiarism: "Let's work on understanding the topic so you can write in your own words!"
  },
  
  tracking: {
    log_subjects: true,
    identify_struggling_areas: true,
    parent_insights: "weekly_summary"
  }
}`}</pre>
                        </div>
                    </div>

                    {/* Social Interaction Policy */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Social Interaction Safety
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Protect against grooming and inappropriate social engineering.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`const socialSafetyPolicy = {
  red_flags: {
    personal_questions: [
      "where_do_you_live",
      "are_you_alone",
      "what_school",
      "parent_schedule",
      "phone_number",
      "social_media"
    ],
    
    relationship_building: [
      "be_my_friend",
      "keep_secret",
      "dont_tell_parents",
      "special_relationship",
      "meet_in_person"
    ],
    
    manipulation_tactics: [
      "you_seem_mature",
      "parents_dont_understand",
      "i_understand_you",
      "trust_me",
      "send_photo"
    ]
  },
  
  responses: {
    immediate_block: true,
    alert_parent: true,
    educate_child: true,
    save_evidence: true
  },
  
  education_messages: {
    stranger_danger: "Remember, safe adults don't ask children to keep secrets!",
    personal_info: "Great job being safe! Never share personal information online.",
    meeting_people: "If someone online wants to meet, always tell a trusted adult first!"
  }
}`}</pre>
                        </div>
                    </div>

                    {/* Content Filtering Rules */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Smart Content Filtering
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Context-aware filtering that understands educational needs.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`const contentFilteringRules = {
  contextual_analysis: {
    // Educational context allows certain topics
    history_class: {
      allow: ["historical_violence", "war_facts", "civil_rights"],
      require: "educational_framing"
    },
    
    health_education: {
      allow: ["body_anatomy", "puberty_facts", "health_topics"],
      require: "age_appropriate_language"
    },
    
    literature_study: {
      allow: ["classic_literature", "mature_themes_in_context"],
      require: "academic_discussion"
    }
  },
  
  smart_filtering: {
    detect_intent: true,
    educational_override: true,
    context_window: 10, // messages
    
    examples: {
      "World War 2 essay": "allowed_with_guidance",
      "How to hurt someone": "blocked_redirect_to_conflict_resolution",
      "Romeo and Juliet death scene": "allowed_in_literature_context",
      "Making explosives": "blocked_zero_tolerance"
    }
  },
  
  replacement_strategies: {
    violence_request: "conflict_resolution_alternatives",
    inappropriate_content: "age_appropriate_explanation",
    dangerous_activity: "safe_alternatives",
    sensitive_topic: "parent_consultation_required"
  }
}`}</pre>
                        </div>
                    </div>
                </div>

                {/* Platform-Specific Configurations */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Brain className="h-6 w-6 mr-2" />
                        Platform-Specific Configurations
                    </h2>

                    <div className="space-y-6">
                        {/* ChatGPT Configuration */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">ChatGPT</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  platform: "ChatGPT",
  custom_rules: {
    code_generation: "educational_only",
    web_browsing: "safe_sites_only",
    plugin_access: "parent_approval_required",
    dalle_images: "content_filtered"
  }
}`}</pre>
                            </div>
                        </div>

                        {/* Claude Configuration */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Claude</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  platform: "Claude",
  custom_rules: {
    long_conversations: "summary_for_parents",
    file_uploads: "scan_before_process",
    creative_writing: "theme_appropriate"
  }
}`}</pre>
                            </div>
                        </div>

                        {/* Gemini Configuration */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Google Gemini</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  platform: "Gemini",
  custom_rules: {
    multimodal_input: "image_content_check",
    search_integration: "safe_search_enforced",
    youtube_access: "educational_channels_only"
  }
}`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Best Practices */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <BookOpen className="h-6 w-6 mr-2" />
                        Best Practices
                    </h2>

                    <div className="space-y-6">
                        {/* Progressive Trust */}
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">1. Progressive Trust System</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// Build trust gradually based on safe behavior
const progressiveTrust = {
  levels: {
    beginner: {
      duration: "first_30_days",
      restrictions: "maximum",
      monitoring: "detailed"
    },
    intermediate: {
      duration: "next_60_days",
      restrictions: "balanced",
      monitoring: "summary",
      earned_by: "no_violations"
    },
    trusted: {
      duration: "ongoing",
      restrictions: "minimal",
      monitoring: "alerts_only",
      earned_by: "consistent_safe_behavior"
    }
  },
  
  rewards: {
    extended_time: true,
    platform_access: true,
    reduced_monitoring: true
  }
}`}</pre>
                            </div>
                        </div>

                        {/* Family Communication */}
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">2. Open Family Communication</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// Encourage transparency and learning
const familyCommunication = {
  weekly_reviews: {
    topics_explored: true,
    learning_achievements: true,
    safety_wins: true,
    concerns_discussed: false // Focus on positive
  },
  
  conversation_starters: [
    "What interesting thing did you learn from AI today?",
    "Did the AI help you with any homework?",
    "Was there anything confusing the AI said?"
  ],
  
  celebration_moments: {
    safety_awareness: "Recognized a red flag",
    good_judgment: "Asked parent before sharing",
    learning_milestone: "Completed educational goal"
  }
}`}</pre>
                            </div>
                        </div>

                        {/* Regular Updates */}
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">3. Keep Protections Updated</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">
                                AI platforms evolve rapidly. Regular updates ensure continued protection.
                            </p>
                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                                    <li>• Enable automatic SafeAI Guard updates</li>
                                    <li>• Review age settings every 6 months</li>
                                    <li>• Adjust filters based on maturity</li>
                                    <li>• Stay informed about new AI platforms</li>
                                    <li>• Test protection regularly</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Educational Integration */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Zap className="h-6 w-6 mr-2" />
                        Educational Integration Examples
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Turn Blocks into Learning</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// Example: Child asks about inappropriate topic
Child: "Tell me about [inappropriate topic]"

// Instead of just blocking:
SafeAI Response: "That's not something we should discuss, but I'd love to help 
you with something else! How about we:
- 📚 Explore an amazing science fact
- 🎨 Create a fun story together  
- 🧮 Solve an interesting puzzle
- 🌍 Learn about different cultures

What sounds most interesting to you?"

// Track educational redirects
educationalRedirect.log({
  blocked_topic: "inappropriate",
  offered_alternatives: ["science", "creative", "math", "geography"],
  child_choice: "science",
  engagement_time: "15_minutes"
})`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Digital Citizenship Lessons</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// Integrate safety lessons naturally
const digitalCitizenshipLessons = {
  personal_info_request: {
    block: true,
    lesson: "Great job being careful! Remember the SMART rule:\n" +
            "S - Safe: Keep safe info to yourself\n" +
            "M - Meet: Never meet online friends without parents\n" +
            "A - Accepting: Don't accept files from strangers\n" +
            "R - Reliable: Not everyone online tells the truth\n" +
            "T - Tell: Always tell a trusted adult if worried"
  },
  
  cyberbullying_detected: {
    support: true,
    lesson: "If someone is being mean online:\n" +
            "1. Don't respond to mean messages\n" +
            "2. Save evidence (screenshots)\n" +
            "3. Tell a trusted adult\n" +
            "4. Block the person\n" +
            "5. Remember: It's not your fault!"
  }
}`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Troubleshooting Common Issues */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-10">
                    <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2" />
                        Common Issues and Solutions
                    </h3>
                    <div className="space-y-3 text-yellow-800 dark:text-yellow-200">
                        <div>
                            <p className="font-semibold">Over-blocking Educational Content</p>
                            <p className="text-sm">Adjust sensitivity settings and enable educational context detection</p>
                        </div>
                        <div>
                            <p className="font-semibold">Child Trying to Bypass</p>
                            <p className="text-sm">Enable strict mode temporarily and have an open conversation about trust</p>
                        </div>
                        <div>
                            <p className="font-semibold">False Positive Alerts</p>
                            <p className="text-sm">Fine-tune alert thresholds and mark false positives to improve accuracy</p>
                        </div>
                        <div>
                            <p className="font-semibold">Performance on Older Devices</p>
                            <p className="text-sm">Disable visual enhancements and reduce cache size in settings</p>
                        </div>
                    </div>
                </div>

                {/* Resources */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Additional Resources
                    </h3>
                    <div className="space-y-3">
                        <Link href="/docs/safeai-guard" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Shield className="h-4 w-4" />
                            <span>Back to SafeAI Guard Documentation</span>
                        </Link>
                        <a href="https://www.safeaiguard.com/parent-guide" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <BookOpen className="h-4 w-4" />
                            <span>Complete Parent Guide (PDF)</span>
                        </a>
                        <a href="https://dashboard.safeaiguard.com" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Settings className="h-4 w-4" />
                            <span>Access Parent Dashboard</span>
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