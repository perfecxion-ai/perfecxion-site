// Authentication and Authorization System

export interface AuthUser {
  id: string
  email: string
  username: string
  displayName: string
  avatar?: string
  roles: UserRole[]
  permissions: Permission[]
  isVerified: boolean
  lastLoginAt: Date
  createdAt: Date
  profile?: UserProfile
}

export interface UserRole {
  id: string
  name: string
  description: string
  permissions: Permission[]
  isDefault: boolean
}

export interface Permission {
  id: string
  name: string
  resource: string
  action: string
  description: string
}

export interface UserProfile {
  bio?: string
  location?: string
  website?: string
  company?: string
  jobTitle?: string
  skills: string[]
  badges: string[]
  reputation: number
  isExpert: boolean
  isModerator: boolean
  isAdmin: boolean
}

export interface AuthSession {
  id: string
  userId: string
  token: string
  refreshToken: string
  expiresAt: Date
  createdAt: Date
  lastActiveAt: Date
  ipAddress: string
  userAgent: string
  isActive: boolean
}

export interface LoginCredentials {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RegisterData {
  email: string
  username: string
  displayName: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
  newsletter?: boolean
}

export interface PasswordResetRequest {
  email: string
}

export interface PasswordReset {
  token: string
  password: string
  confirmPassword: string
}

// Auth Context
export interface AuthContextType {
  user: AuthUser | null
  session: AuthSession | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => Promise<void>
  refreshToken: () => Promise<void>
  requestPasswordReset: (data: PasswordResetRequest) => Promise<void>
  resetPassword: (data: PasswordReset) => Promise<void>
  updateProfile: (data: Partial<UserProfile>) => Promise<void>
  hasPermission: (resource: string, action: string) => boolean
  hasRole: (roleName: string) => boolean
}

// Default Roles and Permissions
export const DEFAULT_PERMISSIONS = {
  // Community permissions
  FORUM_READ: { id: 'forum_read', name: 'Read Forums', resource: 'forum', action: 'read', description: 'Read forum posts and replies' },
  FORUM_WRITE: { id: 'forum_write', name: 'Write Forums', resource: 'forum', action: 'write', description: 'Create and edit forum posts' },
  FORUM_MODERATE: { id: 'forum_moderate', name: 'Moderate Forums', resource: 'forum', action: 'moderate', description: 'Moderate forum content' },
  
  // Certification permissions
  CERT_ENROLL: { id: 'cert_enroll', name: 'Enroll Certification', resource: 'certification', action: 'enroll', description: 'Enroll in certification programs' },
  CERT_MANAGE: { id: 'cert_manage', name: 'Manage Certifications', resource: 'certification', action: 'manage', description: 'Manage certification programs' },
  
  // Bug bounty permissions
  BOUNTY_SUBMIT: { id: 'bounty_submit', name: 'Submit Vulnerabilities', resource: 'bounty', action: 'submit', description: 'Submit vulnerability reports' },
  BOUNTY_REVIEW: { id: 'bounty_review', name: 'Review Vulnerabilities', resource: 'bounty', action: 'review', description: 'Review and triage vulnerability reports' },
  
  // Customer portal permissions
  CUSTOMER_PORTAL: { id: 'customer_portal', name: 'Customer Portal', resource: 'customer', action: 'access', description: 'Access customer portal' },
  API_KEYS: { id: 'api_keys', name: 'API Keys', resource: 'api', action: 'manage', description: 'Manage API keys' },
  
  // Admin permissions
  ADMIN_PANEL: { id: 'admin_panel', name: 'Admin Panel', resource: 'admin', action: 'access', description: 'Access admin panel' },
  USER_MANAGE: { id: 'user_manage', name: 'Manage Users', resource: 'user', action: 'manage', description: 'Manage user accounts' },
  SYSTEM_CONFIG: { id: 'system_config', name: 'System Config', resource: 'system', action: 'configure', description: 'Configure system settings' }
} as const

export const DEFAULT_ROLES: Record<string, Omit<UserRole, 'id'>> = {
  GUEST: {
    name: 'Guest',
    description: 'Unregistered user with read-only access',
    permissions: [DEFAULT_PERMISSIONS.FORUM_READ],
    isDefault: false
  },
  USER: {
    name: 'User',
    description: 'Registered user with basic community access',
    permissions: [
      DEFAULT_PERMISSIONS.FORUM_READ,
      DEFAULT_PERMISSIONS.FORUM_WRITE,
      DEFAULT_PERMISSIONS.CERT_ENROLL,
      DEFAULT_PERMISSIONS.BOUNTY_SUBMIT
    ],
    isDefault: true
  },
  CUSTOMER: {
    name: 'Customer',
    description: 'Paying customer with portal access',
    permissions: [
      DEFAULT_PERMISSIONS.FORUM_READ,
      DEFAULT_PERMISSIONS.FORUM_WRITE,
      DEFAULT_PERMISSIONS.CERT_ENROLL,
      DEFAULT_PERMISSIONS.BOUNTY_SUBMIT,
      DEFAULT_PERMISSIONS.CUSTOMER_PORTAL,
      DEFAULT_PERMISSIONS.API_KEYS
    ],
    isDefault: false
  },
  EXPERT: {
    name: 'Expert',
    description: 'Verified security expert with enhanced privileges',
    permissions: [
      DEFAULT_PERMISSIONS.FORUM_READ,
      DEFAULT_PERMISSIONS.FORUM_WRITE,
      DEFAULT_PERMISSIONS.CERT_ENROLL,
      DEFAULT_PERMISSIONS.CERT_MANAGE,
      DEFAULT_PERMISSIONS.BOUNTY_SUBMIT,
      DEFAULT_PERMISSIONS.BOUNTY_REVIEW
    ],
    isDefault: false
  },
  MODERATOR: {
    name: 'Moderator',
    description: 'Community moderator with content management rights',
    permissions: [
      DEFAULT_PERMISSIONS.FORUM_READ,
      DEFAULT_PERMISSIONS.FORUM_WRITE,
      DEFAULT_PERMISSIONS.FORUM_MODERATE,
      DEFAULT_PERMISSIONS.CERT_ENROLL,
      DEFAULT_PERMISSIONS.BOUNTY_SUBMIT,
      DEFAULT_PERMISSIONS.USER_MANAGE
    ],
    isDefault: false
  },
  ADMIN: {
    name: 'Administrator',
    description: 'System administrator with full access',
    permissions: Object.values(DEFAULT_PERMISSIONS),
    isDefault: false
  }
}

// Auth Helper Functions
export class AuthHelper {
  static hasPermission(user: AuthUser | null, resource: string, action: string): boolean {
    if (!user) return false
    
    return user.permissions.some(permission => 
      permission.resource === resource && permission.action === action
    )
  }

  static hasRole(user: AuthUser | null, roleName: string): boolean {
    if (!user) return false
    
    return user.roles.some(role => role.name === roleName)
  }

  static isAuthenticated(user: AuthUser | null): boolean {
    return user !== null && user.isVerified
  }

  static canAccessResource(user: AuthUser | null, resource: string): boolean {
    if (!user) return false
    
    // Check if user has any permission for the resource
    return user.permissions.some(permission => permission.resource === resource)
  }

  static isModerator(user: AuthUser | null): boolean {
    return user?.profile?.isModerator || false
  }

  static isAdmin(user: AuthUser | null): boolean {
    return user?.profile?.isAdmin || false
  }

  static isExpert(user: AuthUser | null): boolean {
    return user?.profile?.isExpert || false
  }

  static canModerateContent(user: AuthUser | null): boolean {
    return this.hasPermission(user, 'forum', 'moderate') || this.isAdmin(user)
  }

  static canAccessCustomerPortal(user: AuthUser | null): boolean {
    return this.hasPermission(user, 'customer', 'access') || this.isAdmin(user)
  }

  static canManageAPIKeys(user: AuthUser | null): boolean {
    return this.hasPermission(user, 'api', 'manage') || this.isAdmin(user)
  }

  static canSubmitBugReports(user: AuthUser | null): boolean {
    return this.hasPermission(user, 'bounty', 'submit')
  }

  static canReviewBugReports(user: AuthUser | null): boolean {
    return this.hasPermission(user, 'bounty', 'review') || this.isAdmin(user)
  }

  static canAccessAdminPanel(user: AuthUser | null): boolean {
    return this.hasPermission(user, 'admin', 'access')
  }

  static validatePassword(password: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = []
    
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long')
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter')
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter')
    }
    
    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number')
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Password must contain at least one special character')
    }
    
    return {
      isValid: errors.length === 0,
      errors
    }
  }

  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  static validateUsername(username: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = []
    
    if (username.length < 3) {
      errors.push('Username must be at least 3 characters long')
    }
    
    if (username.length > 20) {
      errors.push('Username must be less than 20 characters long')
    }
    
    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
      errors.push('Username can only contain letters, numbers, underscores, and hyphens')
    }
    
    if (/^[_-]/.test(username) || /[_-]$/.test(username)) {
      errors.push('Username cannot start or end with underscore or hyphen')
    }
    
    return {
      isValid: errors.length === 0,
      errors
    }
  }

  static generateSessionToken(): string {
    // In a real implementation, use a secure random token generator
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  static isSessionExpired(session: AuthSession): boolean {
    return new Date() > session.expiresAt
  }

  static shouldRefreshToken(session: AuthSession): boolean {
    const now = new Date()
    const timeUntilExpiry = session.expiresAt.getTime() - now.getTime()
    const refreshThreshold = 15 * 60 * 1000 // 15 minutes
    
    return timeUntilExpiry <= refreshThreshold
  }
}

// Auth Storage
export class AuthStorage {
  private static readonly TOKEN_KEY = 'auth_token'
  private static readonly REFRESH_TOKEN_KEY = 'refresh_token'
  private static readonly USER_KEY = 'auth_user'

  static setTokens(token: string, refreshToken: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.TOKEN_KEY, token)
      localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken)
    }
  }

  static getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.TOKEN_KEY)
    }
    return null
  }

  static getRefreshToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.REFRESH_TOKEN_KEY)
    }
    return null
  }

  static setUser(user: AuthUser): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user))
    }
  }

  static getUser(): AuthUser | null {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem(this.USER_KEY)
      if (userData) {
        try {
          return JSON.parse(userData)
        } catch (error) {
          console.error('Failed to parse user data:', error)
          this.clearUser()
        }
      }
    }
    return null
  }

  static clearTokens(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.TOKEN_KEY)
      localStorage.removeItem(this.REFRESH_TOKEN_KEY)
    }
  }

  static clearUser(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.USER_KEY)
    }
  }

  static clearAll(): void {
    this.clearTokens()
    this.clearUser()
  }
}

// Auth API Client
export class AuthAPI {
  private static readonly BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

  static async login(credentials: LoginCredentials): Promise<{ user: AuthUser; session: AuthSession }> {
    const response = await fetch(`${this.BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Login failed')
    }

    return response.json()
  }

  static async register(data: RegisterData): Promise<{ user: AuthUser; session: AuthSession }> {
    const response = await fetch(`${this.BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Registration failed')
    }

    return response.json()
  }

  static async logout(): Promise<void> {
    const token = AuthStorage.getToken()
    if (!token) return

    await fetch(`${this.BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }

  static async refreshToken(): Promise<{ token: string; refreshToken: string }> {
    const refreshToken = AuthStorage.getRefreshToken()
    if (!refreshToken) {
      throw new Error('No refresh token available')
    }

    const response = await fetch(`${this.BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ refreshToken })
    })

    if (!response.ok) {
      throw new Error('Token refresh failed')
    }

    return response.json()
  }

  static async requestPasswordReset(data: PasswordResetRequest): Promise<void> {
    const response = await fetch(`${this.BASE_URL}/auth/password-reset-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Password reset request failed')
    }
  }

  static async resetPassword(data: PasswordReset): Promise<void> {
    const response = await fetch(`${this.BASE_URL}/auth/password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Password reset failed')
    }
  }

  static async updateProfile(data: Partial<UserProfile>): Promise<AuthUser> {
    const token = AuthStorage.getToken()
    if (!token) {
      throw new Error('No authentication token')
    }

    const response = await fetch(`${this.BASE_URL}/auth/profile`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Profile update failed')
    }

    return response.json()
  }

  static async getCurrentUser(): Promise<AuthUser> {
    const token = AuthStorage.getToken()
    if (!token) {
      throw new Error('No authentication token')
    }

    const response = await fetch(`${this.BASE_URL}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to get current user')
    }

    return response.json()
  }
}