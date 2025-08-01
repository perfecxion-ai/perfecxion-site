import { describe, it, expect, beforeEach, jest } from '@jest/globals'
import { 
  AuthHelper, 
  AuthStorage, 
  DEFAULT_PERMISSIONS, 
  DEFAULT_ROLES 
} from '../lib/auth'
import { 
  NotificationManager, 
  NOTIFICATION_TEMPLATES, 
  WebSocketManager 
} from '../lib/notifications'
import { 
  FORUM_CATEGORIES, 
  CERTIFICATION_PROGRAMS, 
  BUG_BOUNTY_REWARDS,
  REPUTATION_SYSTEM 
} from '../lib/community-config'
import type { AuthUser, NotificationData } from '../lib/community-types'

// Mock localStorage for testing
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value.toString()
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key]
    }),
    clear: jest.fn(() => {
      store = {}
    })
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})

describe('Authentication System', () => {
  beforeEach(() => {
    localStorageMock.clear()
    jest.clearAllMocks()
  })

  describe('AuthHelper', () => {
    const mockUser: AuthUser = {
      id: 'user-123',
      email: 'test@example.com',
      username: 'testuser',
      displayName: 'Test User',
      roles: [{ 
        id: 'role-1', 
        name: 'User', 
        description: 'Basic user', 
        permissions: [DEFAULT_PERMISSIONS.FORUM_READ, DEFAULT_PERMISSIONS.FORUM_WRITE],
        isDefault: true 
      }],
      permissions: [DEFAULT_PERMISSIONS.FORUM_READ, DEFAULT_PERMISSIONS.FORUM_WRITE],
      isVerified: true,
      lastLoginAt: new Date(),
      createdAt: new Date(),
      profile: {
        reputation: 100,
        isExpert: false,
        isModerator: false,
        isAdmin: false,
        skills: [],
        badges: []
      }
    }

    it('should correctly check user permissions', () => {
      expect(AuthHelper.hasPermission(mockUser, 'forum', 'read')).toBe(true)
      expect(AuthHelper.hasPermission(mockUser, 'forum', 'write')).toBe(true)
      expect(AuthHelper.hasPermission(mockUser, 'admin', 'access')).toBe(false)
      expect(AuthHelper.hasPermission(null, 'forum', 'read')).toBe(false)
    })

    it('should correctly check user roles', () => {
      expect(AuthHelper.hasRole(mockUser, 'User')).toBe(true)
      expect(AuthHelper.hasRole(mockUser, 'Admin')).toBe(false)
      expect(AuthHelper.hasRole(null, 'User')).toBe(false)
    })

    it('should validate user authentication status', () => {
      expect(AuthHelper.isAuthenticated(mockUser)).toBe(true)
      expect(AuthHelper.isAuthenticated({ ...mockUser, isVerified: false })).toBe(false)
      expect(AuthHelper.isAuthenticated(null)).toBe(false)
    })

    it('should check moderator privileges', () => {
      const moderatorUser = {
        ...mockUser,
        profile: { ...mockUser.profile!, isModerator: true }
      }
      expect(AuthHelper.isModerator(moderatorUser)).toBe(true)
      expect(AuthHelper.isModerator(mockUser)).toBe(false)
    })

    it('should validate passwords correctly', () => {
      const weakPassword = 'weak'
      const strongPassword = 'StrongP@ssw0rd123'

      const weakResult = AuthHelper.validatePassword(weakPassword)
      expect(weakResult.isValid).toBe(false)
      expect(weakResult.errors.length).toBeGreaterThan(0)

      const strongResult = AuthHelper.validatePassword(strongPassword)
      expect(strongResult.isValid).toBe(true)
      expect(strongResult.errors.length).toBe(0)
    })

    it('should validate emails correctly', () => {
      expect(AuthHelper.validateEmail('valid@example.com')).toBe(true)
      expect(AuthHelper.validateEmail('invalid.email')).toBe(false)
      expect(AuthHelper.validateEmail('test@')).toBe(false)
    })

    it('should validate usernames correctly', () => {
      const validUsername = 'valid_username123'
      const invalidUsername = '_invalid_'
      const shortUsername = 'ab'

      const validResult = AuthHelper.validateUsername(validUsername)
      expect(validResult.isValid).toBe(true)

      const invalidResult = AuthHelper.validateUsername(invalidUsername)
      expect(invalidResult.isValid).toBe(false)

      const shortResult = AuthHelper.validateUsername(shortUsername)
      expect(shortResult.isValid).toBe(false)
    })
  })

  describe('AuthStorage', () => {
    const testToken = 'test-token-123'
    const testRefreshToken = 'refresh-token-456'
    const testUser: AuthUser = {
      id: 'user-123',
      email: 'test@example.com',
      username: 'testuser',
      displayName: 'Test User',
      roles: [],
      permissions: [],
      isVerified: true,
      lastLoginAt: new Date(),
      createdAt: new Date()
    }

    it('should store and retrieve tokens', () => {
      AuthStorage.setTokens(testToken, testRefreshToken)
      
      expect(AuthStorage.getToken()).toBe(testToken)
      expect(AuthStorage.getRefreshToken()).toBe(testRefreshToken)
    })

    it('should store and retrieve user data', () => {
      AuthStorage.setUser(testUser)
      
      const retrievedUser = AuthStorage.getUser()
      expect(retrievedUser).toEqual(testUser)
    })

    it('should clear all data', () => {
      AuthStorage.setTokens(testToken, testRefreshToken)
      AuthStorage.setUser(testUser)
      
      AuthStorage.clearAll()
      
      expect(AuthStorage.getToken()).toBeNull()
      expect(AuthStorage.getRefreshToken()).toBeNull()
      expect(AuthStorage.getUser()).toBeNull()
    })
  })
})

describe('Notification System', () => {
  beforeEach(() => {
    // Clear notifications before each test
    NotificationManager['notifications'].clear()
    jest.clearAllMocks()
  })

  describe('NotificationManager', () => {
    it('should create notifications correctly', async () => {
      const userId = 'user-123'
      const notificationData = {
        author: 'testuser',
        postTitle: 'Test Post',
        postId: 'post-123'
      }

      const notification = await NotificationManager.createNotification(
        userId,
        'forum_reply',
        notificationData
      )

      expect(notification.userId).toBe(userId)
      expect(notification.type).toBe('forum_reply')
      expect(notification.title).toBe('New Reply')
      expect(notification.message).toContain('testuser')
      expect(notification.isRead).toBe(false)
      expect(notification.actionUrl).toBe('/community/forums/post/post-123')
    })

    it('should retrieve notifications for a user', async () => {
      const userId = 'user-123'
      
      await NotificationManager.createNotification(userId, 'forum_reply', {})
      await NotificationManager.createNotification(userId, 'forum_like', {})
      await NotificationManager.createNotification('other-user', 'forum_reply', {})

      const userNotifications = NotificationManager.getNotifications(userId)
      expect(userNotifications.length).toBe(2)
      expect(userNotifications.every(n => n.userId === userId)).toBe(true)
    })

    it('should count unread notifications', async () => {
      const userId = 'user-123'
      
      const notification1 = await NotificationManager.createNotification(userId, 'forum_reply', {})
      await NotificationManager.createNotification(userId, 'forum_like', {})

      expect(NotificationManager.getUnreadCount(userId)).toBe(2)

      await NotificationManager.markAsRead(notification1.id)
      expect(NotificationManager.getUnreadCount(userId)).toBe(1)
    })

    it('should mark all notifications as read', async () => {
      const userId = 'user-123'
      
      await NotificationManager.createNotification(userId, 'forum_reply', {})
      await NotificationManager.createNotification(userId, 'forum_like', {})

      expect(NotificationManager.getUnreadCount(userId)).toBe(2)

      await NotificationManager.markAllAsRead(userId)
      expect(NotificationManager.getUnreadCount(userId)).toBe(0)
    })

    it('should delete notifications', async () => {
      const userId = 'user-123'
      const notification = await NotificationManager.createNotification(userId, 'forum_reply', {})

      expect(NotificationManager.getNotification(notification.id)).toBeDefined()

      await NotificationManager.deleteNotification(notification.id)
      expect(NotificationManager.getNotification(notification.id)).toBeUndefined()
    })
  })

  describe('Notification Templates', () => {
    it('should generate correct messages for all notification types', () => {
      const testData = {
        author: 'testuser',
        postTitle: 'Test Post',
        postId: 'post-123',
        amount: 500,
        certificationName: 'AI Security Expert',
        percentage: 90
      }

      // Test forum reply template
      const forumReplyTemplate = NOTIFICATION_TEMPLATES.forum_reply
      expect(forumReplyTemplate.title(testData)).toBe('New Reply')
      expect(forumReplyTemplate.message(testData)).toContain('testuser')
      expect(forumReplyTemplate.actionUrl!(testData)).toBe('/community/forums/post/post-123')

      // Test bug bounty reward template
      const bugBountyTemplate = NOTIFICATION_TEMPLATES.bug_bounty_reward
      expect(bugBountyTemplate.title(testData)).toBe('Reward Approved!')
      expect(bugBountyTemplate.message(testData)).toContain('$500')

      // Test API quota warning template
      const quotaTemplate = NOTIFICATION_TEMPLATES.api_quota_warning
      expect(quotaTemplate.message(testData)).toContain('90%')
    })
  })
})

describe('Community Configuration', () => {
  describe('Forum Categories', () => {
    it('should have all required forum categories', () => {
      const categories = Object.keys(FORUM_CATEGORIES)
      expect(categories).toContain('general')
      expect(categories).toContain('technical')
      expect(categories).toContain('research')
      expect(categories).toContain('announcements')
    })

    it('should have proper category configurations', () => {
      const generalCategory = FORUM_CATEGORIES.general
      expect(generalCategory.publicAccess).toBe(true)
      expect(generalCategory.name).toBe('General Discussion')
      expect(generalCategory.moderators).toBeInstanceOf(Array)

      const researchCategory = FORUM_CATEGORIES.research
      expect(researchCategory.requiresCredentials).toBe(true)
      expect(researchCategory.publicAccess).toBe(false)
    })
  })

  describe('Certification Programs', () => {
    it('should have all certification levels', () => {
      const programs = Object.keys(CERTIFICATION_PROGRAMS)
      expect(programs).toContain('fundamentals')
      expect(programs).toContain('practitioner')
      expect(programs).toContain('expert')
    })

    it('should have proper prerequisite chain', () => {
      const fundamentals = CERTIFICATION_PROGRAMS.fundamentals
      const practitioner = CERTIFICATION_PROGRAMS.practitioner
      const expert = CERTIFICATION_PROGRAMS.expert

      expect(fundamentals.prerequisites).toEqual([])
      expect(practitioner.prerequisites).toEqual(['fundamentals'])
      expect(expert.prerequisites).toEqual(['practitioner'])
    })

    it('should have increasing difficulty and pricing', () => {
      const fundamentals = CERTIFICATION_PROGRAMS.fundamentals
      const practitioner = CERTIFICATION_PROGRAMS.practitioner
      const expert = CERTIFICATION_PROGRAMS.expert

      expect(fundamentals.duration).toBeLessThan(practitioner.duration)
      expect(practitioner.duration).toBeLessThan(expert.duration)
      expect(fundamentals.price).toBeLessThan(practitioner.price)
      expect(practitioner.price).toBeLessThan(expert.price)
    })
  })

  describe('Bug Bounty Rewards', () => {
    it('should have rewards for all severity levels', () => {
      const severities = Object.keys(BUG_BOUNTY_REWARDS)
      expect(severities).toContain('critical')
      expect(severities).toContain('high')
      expect(severities).toContain('medium')
      expect(severities).toContain('low')
    })

    it('should have increasing rewards for higher severity', () => {
      const { critical, high, medium, low } = BUG_BOUNTY_REWARDS
      
      expect(critical.min).toBeGreaterThan(high.min)
      expect(high.min).toBeGreaterThan(medium.min)
      expect(medium.min).toBeGreaterThan(low.min)
      
      expect(critical.max).toBeGreaterThan(high.max)
      expect(high.max).toBeGreaterThan(medium.max)
      expect(medium.max).toBeGreaterThan(low.max)
    })
  })

  describe('Reputation System', () => {
    it('should have proper point values for actions', () => {
      expect(REPUTATION_SYSTEM.HELPFUL_ANSWER).toBeGreaterThan(REPUTATION_SYSTEM.QUALITY_POST)
      expect(REPUTATION_SYSTEM.RESEARCH_CONTRIBUTION).toBeGreaterThan(REPUTATION_SYSTEM.HELPFUL_ANSWER)
      expect(REPUTATION_SYSTEM.VERIFIED_EXPERT_BONUS).toBeGreaterThan(0)
    })

    it('should have progressive reputation levels', () => {
      const levels = REPUTATION_SYSTEM.LEVELS
      
      expect(levels.length).toBeGreaterThan(0)
      expect(levels[0].min).toBe(0)
      
      for (let i = 1; i < levels.length; i++) {
        expect(levels[i].min).toBeGreaterThan(levels[i - 1].min)
      }
    })

    it('should have penalties for negative actions', () => {
      expect(REPUTATION_SYSTEM.FLAGGED_CONTENT).toBeLessThan(0)
      expect(REPUTATION_SYSTEM.SPAM_REPORT).toBeLessThan(0)
    })
  })
})

describe('Integration Tests', () => {
  describe('User Journey: Forum Participation', () => {
    it('should allow authenticated user to participate in forums', () => {
      const user: AuthUser = {
        id: 'user-123',
        email: 'test@example.com',
        username: 'testuser',
        displayName: 'Test User',
        roles: [{ 
          id: 'role-1', 
          name: 'User', 
          description: 'Basic user',
          permissions: [DEFAULT_PERMISSIONS.FORUM_READ, DEFAULT_PERMISSIONS.FORUM_WRITE],
          isDefault: true 
        }],
        permissions: [DEFAULT_PERMISSIONS.FORUM_READ, DEFAULT_PERMISSIONS.FORUM_WRITE],
        isVerified: true,
        lastLoginAt: new Date(),
        createdAt: new Date(),
        profile: {
          reputation: 150,
          isExpert: false,
          isModerator: false,
          isAdmin: false,
          skills: [],
          badges: []
        }
      }

      // User can read forums
      expect(AuthHelper.hasPermission(user, 'forum', 'read')).toBe(true)
      
      // User can write in forums
      expect(AuthHelper.hasPermission(user, 'forum', 'write')).toBe(true)
      
      // User cannot moderate
      expect(AuthHelper.hasPermission(user, 'forum', 'moderate')).toBe(false)
      
      // User can access general forums but not restricted ones
      const generalCategory = FORUM_CATEGORIES.general
      const researchCategory = FORUM_CATEGORIES.research
      
      expect(generalCategory.publicAccess).toBe(true)
      expect(researchCategory.requiresCredentials).toBe(true)
    })
  })

  describe('User Journey: Certification Enrollment', () => {
    it('should allow progression through certification levels', () => {
      const user: AuthUser = {
        id: 'user-123',
        email: 'test@example.com',
        username: 'testuser',
        displayName: 'Test User',
        roles: [],
        permissions: [DEFAULT_PERMISSIONS.CERT_ENROLL],
        isVerified: true,
        lastLoginAt: new Date(),
        createdAt: new Date()
      }

      // User can enroll in certifications
      expect(AuthHelper.hasPermission(user, 'certification', 'enroll')).toBe(true)
      
      // User can start with fundamentals (no prerequisites)
      const fundamentals = CERTIFICATION_PROGRAMS.fundamentals
      expect(fundamentals.prerequisites.length).toBe(0)
      
      // User needs fundamentals for practitioner
      const practitioner = CERTIFICATION_PROGRAMS.practitioner
      expect(practitioner.prerequisites).toContain('fundamentals')
      
      // User needs practitioner for expert
      const expert = CERTIFICATION_PROGRAMS.expert
      expect(expert.prerequisites).toContain('practitioner')
    })
  })

  describe('User Journey: Bug Bounty Submission', () => {
    it('should allow researchers to submit and track vulnerabilities', async () => {
      const researcher: AuthUser = {
        id: 'researcher-123',
        email: 'researcher@example.com',
        username: 'security_researcher',
        displayName: 'Security Researcher',
        roles: [],
        permissions: [DEFAULT_PERMISSIONS.BOUNTY_SUBMIT],
        isVerified: true,
        lastLoginAt: new Date(),
        createdAt: new Date()
      }

      // Researcher can submit bug reports
      expect(AuthHelper.hasPermission(researcher, 'bounty', 'submit')).toBe(true)
      
      // Researcher gets notified of status updates
      const notification = await NotificationManager.createNotification(
        researcher.id,
        'bug_bounty_update',
        {
          title: 'SQL Injection in Login Form',
          status: 'validated',
          submissionId: 'sub-123'
        }
      )

      expect(notification.type).toBe('bug_bounty_update')
      expect(notification.actionUrl).toBe('/community/bug-bounty/submission/sub-123')
      
      // Reward notification for approved submission
      const rewardNotification = await NotificationManager.createNotification(
        researcher.id,
        'bug_bounty_reward',
        {
          amount: 2500,
          submissionId: 'sub-123'
        }
      )

      expect(rewardNotification.message).toContain('$2,500')
    })
  })
})

describe('Error Handling and Edge Cases', () => {
  describe('Authentication Edge Cases', () => {
    it('should handle null/undefined users gracefully', () => {
      expect(AuthHelper.hasPermission(null, 'forum', 'read')).toBe(false)
      expect(AuthHelper.hasPermission(undefined as any, 'forum', 'read')).toBe(false)
      expect(AuthHelper.hasRole(null, 'User')).toBe(false)
      expect(AuthHelper.isAuthenticated(null)).toBe(false)
    })

    it('should handle malformed stored user data', () => {
      localStorageMock.setItem('auth_user', 'invalid-json')
      expect(AuthStorage.getUser()).toBeNull()
    })
  })

  describe('Notification Edge Cases', () => {
    it('should handle missing notification data gracefully', async () => {
      const notification = await NotificationManager.createNotification(
        'user-123',
        'forum_reply',
        {} // Empty data
      )

      expect(notification.title).toBeDefined()
      expect(notification.message).toBeDefined()
      // Should not throw errors even with missing data
    })

    it('should handle notification listener errors', () => {
      const errorListener = jest.fn(() => {
        throw new Error('Listener error')
      })

      NotificationManager.addListener(errorListener)

      // Should not throw when creating notification with error listener
      expect(async () => {
        await NotificationManager.createNotification('user-123', 'forum_reply', {})
      }).not.toThrow()
    })
  })

  describe('Configuration Validation', () => {
    it('should have consistent data structures', () => {
      // All forum categories should have required fields
      Object.values(FORUM_CATEGORIES).forEach(category => {
        expect(category.name).toBeDefined()
        expect(category.description).toBeDefined()
        expect(category.slug).toBeDefined()
        expect(typeof category.publicAccess).toBe('boolean')
      })

      // All certification programs should have required fields
      Object.values(CERTIFICATION_PROGRAMS).forEach(program => {
        expect(program.title).toBeDefined()
        expect(program.duration).toBeGreaterThan(0)
        expect(program.price).toBeGreaterThanOrEqual(0)
        expect(Array.isArray(program.prerequisites)).toBe(true)
      })

      // All bug bounty rewards should have min/max values
      Object.values(BUG_BOUNTY_REWARDS).forEach(reward => {
        expect(reward.min).toBeGreaterThan(0)
        expect(reward.max).toBeGreaterThan(reward.min)
        expect(reward.currency).toBe('USD')
      })
    })
  })
})