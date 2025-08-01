'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Award,
  BookOpen,
  Clock,
  Users,
  Star,
  TrendingUp,
  CheckCircle,
  Play,
  Lock,
  Calendar,
  DollarSign,
  Target,
  Zap
} from 'lucide-react'
import { CertificationProgram, UserEnrollment } from '@/lib/community-types'
import { CERTIFICATION_PROGRAMS } from '@/lib/community-config'

interface CertificationStats {
  totalPrograms: number
  totalEnrolled: number
  completionRate: number
  avgRating: number
}

export default function CertificationHub() {
  const [programs, setPrograms] = useState<CertificationProgram[]>([])
  const [userEnrollments, setUserEnrollments] = useState<UserEnrollment[]>([])
  const [stats, setStats] = useState<CertificationStats>({
    totalPrograms: 3,
    totalEnrolled: 1247,
    completionRate: 85,
    avgRating: 4.8
  })
  const [loading, setLoading] = useState(true)

  // Mock data - replace with real API calls
  useEffect(() => {
    const mockPrograms: CertificationProgram[] = [
      {
        id: 'fundamentals',
        title: 'AI Security Fundamentals',
        description: 'Master the core concepts of AI security with hands-on exercises and real-world case studies. Perfect for security professionals new to AI.',
        level: 'fundamentals',
        duration: 40,
        modules: [
          {
            id: 'mod1',
            programId: 'fundamentals',
            title: 'Introduction to AI Security',
            description: 'Overview of AI security landscape and key threats',
            content: '',
            contentHtml: '',
            order: 1,
            estimatedTime: 120,
            resources: [],
            assessments: [],
            isRequired: true
          },
          {
            id: 'mod2',
            programId: 'fundamentals',
            title: 'Common AI Vulnerabilities',
            description: 'Understanding prompt injection, model extraction, and data poisoning',
            content: '',
            contentHtml: '',
            order: 2,
            estimatedTime: 180,
            resources: [],
            assessments: [],
            isRequired: true
          }
        ],
        prerequisites: [],
        certificationType: 'AI Security Associate',
        isActive: true,
        price: 299,
        currency: 'USD',
        createdAt: new Date('2023-06-01'),
        updatedAt: new Date('2024-01-15')
      },
      {
        id: 'practitioner',
        title: 'AI Security Practitioner',
        description: 'Advanced hands-on training for implementing AI security in production environments. Includes advanced testing methodologies and compliance frameworks.',
        level: 'practitioner',
        duration: 80,
        modules: [],
        prerequisites: ['fundamentals'],
        certificationType: 'AI Security Practitioner',
        isActive: true,
        price: 599,
        currency: 'USD',
        createdAt: new Date('2023-07-01'),
        updatedAt: new Date('2024-01-15')
      },
      {
        id: 'expert',
        title: 'AI Security Expert',
        description: 'Master-level certification for security leaders and researchers. Includes capstone project and research contribution requirements.',
        level: 'expert',
        duration: 120,
        modules: [],
        prerequisites: ['practitioner'],
        certificationType: 'AI Security Expert',
        isActive: true,
        price: 999,
        currency: 'USD',
        createdAt: new Date('2023-08-01'),
        updatedAt: new Date('2024-01-15')
      }
    ]

    const mockEnrollments: UserEnrollment[] = [
      {
        id: '1',
        userId: 'current-user',
        programId: 'fundamentals',
        status: 'in_progress',
        progress: 65,
        enrolledAt: new Date('2024-01-01'),
        currentModuleId: 'mod2'
      }
    ]

    setPrograms(mockPrograms)
    setUserEnrollments(mockEnrollments)
    setLoading(false)
  }, [])

  const getProgramConfig = (programId: string) => {
    return CERTIFICATION_PROGRAMS[programId as keyof typeof CERTIFICATION_PROGRAMS]
  }

  const getUserEnrollment = (programId: string) => {
    return userEnrollments.find(enrollment => enrollment.programId === programId)
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'fundamentals': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      case 'practitioner': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'expert': return 'text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const formatDuration = (hours: number) => {
    if (hours < 10) return `${hours} hours`
    if (hours < 100) return `${hours} hours`
    return `${hours}+ hours`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-blue-100" />
            <h1 className="text-4xl font-bold mb-4">
              AI Security Certification
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Advance your career with industry-recognized AI security certifications. 
              Learn from experts, gain hands-on experience, and validate your expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#programs"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Browse Programs
              </Link>
              <Link
                href="/community/certification/learning-paths"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
              >
                Learning Paths
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 text-center">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold dark:text-white">{stats.totalPrograms}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Programs</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 text-center">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold dark:text-white">{stats.totalEnrolled.toLocaleString()}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Students</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 text-center">
            <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold dark:text-white">{stats.completionRate}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Completion Rate</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 text-center">
            <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold dark:text-white">{stats.avgRating}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avg Rating</div>
          </div>
        </div>

        {/* My Learning Progress */}
        {userEnrollments.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold dark:text-white mb-6">My Learning Progress</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {userEnrollments.map((enrollment) => {
                const program = programs.find(p => p.id === enrollment.programId)
                const config = getProgramConfig(enrollment.programId)
                if (!program || !config) return null

                return (
                  <div key={enrollment.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg dark:text-white mb-2">
                          {program.title}
                        </h3>
                        <span className={`px-2 py-1 rounded text-sm font-semibold ${getLevelColor(program.level)}`}>
                          {program.level.charAt(0).toUpperCase() + program.level.slice(1)}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">
                          {enrollment.progress}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Complete
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${enrollment.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Started {enrollment.enrolledAt.toLocaleDateString()}
                      </div>
                      <Link
                        href={`/community/certification/program/${program.id}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                      >
                        Continue Learning
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Certification Programs */}
        <div id="programs">
          <h2 className="text-2xl font-bold dark:text-white mb-6">Certification Programs</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {programs.map((program) => {
              const config = getProgramConfig(program.id)
              const enrollment = getUserEnrollment(program.id)
              const isEnrolled = !!enrollment
              const canEnroll = program.prerequisites.length === 0 || 
                program.prerequisites.every(prereq => 
                  userEnrollments.some(e => e.programId === prereq && e.status === 'completed')
                )

              return (
                <div key={program.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 overflow-hidden">
                  {/* Program Header */}
                  <div 
                    className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white relative"
                    style={{ backgroundColor: config?.color }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-xl mb-2">{program.title}</h3>
                        <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-sm font-semibold">
                          {program.level.charAt(0).toUpperCase() + program.level.slice(1)}
                        </span>
                      </div>
                      <Award className="w-8 h-8 text-white opacity-80" />
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                      {program.description}
                    </p>

                    {/* Program Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {formatDuration(program.duration)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {program.modules.length} modules
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          ${program.price}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Certificate
                        </span>
                      </div>
                    </div>

                    {/* Prerequisites */}
                    {program.prerequisites.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm dark:text-white mb-2">Prerequisites:</h4>
                        <div className="space-y-1">
                          {program.prerequisites.map((prereq) => {
                            const prereqProgram = programs.find(p => p.id === prereq)
                            const hasPrereq = userEnrollments.some(e => e.programId === prereq && e.status === 'completed')
                            return (
                              <div key={prereq} className="flex items-center space-x-2">
                                {hasPrereq ? (
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                ) : (
                                  <Lock className="w-4 h-4 text-gray-400" />
                                )}
                                <span className={`text-sm ${hasPrereq ? 'text-green-600' : 'text-gray-500 dark:text-gray-400'}`}>
                                  {prereqProgram?.title || prereq}
                                </span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Progress Bar for Enrolled */}
                    {isEnrolled && enrollment && (
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold dark:text-white">Progress</span>
                          <span className="text-sm text-blue-600">{enrollment.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${enrollment.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="flex items-center space-x-3">
                      {isEnrolled ? (
                        <Link
                          href={`/community/certification/program/${program.id}`}
                          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold"
                        >
                          {enrollment?.status === 'completed' ? 'View Certificate' : 'Continue'}
                        </Link>
                      ) : canEnroll ? (
                        <Link
                          href={`/community/certification/program/${program.id}/enroll`}
                          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold"
                        >
                          Enroll Now
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 px-4 py-2 rounded-lg cursor-not-allowed text-center font-semibold"
                        >
                          Prerequisites Required
                        </button>
                      )}
                      <Link
                        href={`/community/certification/program/${program.id}`}
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Why Get Certified */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold dark:text-white text-center mb-12">
            Why Get Certified with perfecXion?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg dark:text-white mb-2">Industry Recognition</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Certifications recognized by leading technology companies and security organizations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-lg dark:text-white mb-2">Expert-Led Training</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn from industry experts and practitioners with real-world experience
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-lg dark:text-white mb-2">Hands-On Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Practical labs, real-world scenarios, and hands-on projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}