'use client'

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { 
  AuthUser, 
  AuthSession, 
  AuthContextType, 
  LoginCredentials, 
  RegisterData, 
  PasswordResetRequest, 
  PasswordReset,
  UserProfile,
  AuthHelper,
  AuthStorage,
  AuthAPI
} from '@/lib/auth'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [session, setSession] = useState<AuthSession | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = AuthHelper.isAuthenticated(user)

  // Initialize auth state from storage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedUser = AuthStorage.getUser()
        const token = AuthStorage.getToken()

        if (storedUser && token) {
          // Verify token is still valid by fetching current user
          try {
            const currentUser = await AuthAPI.getCurrentUser()
            setUser(currentUser)
            AuthStorage.setUser(currentUser) // Update stored user data
          } catch (error) {
            // Token is invalid, clear storage
            AuthStorage.clearAll()
            setUser(null)
            setSession(null)
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
        AuthStorage.clearAll()
      } finally {
        setIsLoading(false)
      }
    }

    initializeAuth()
  }, [])

  // Auto-refresh token when needed
  useEffect(() => {
    if (!session || !AuthHelper.shouldRefreshToken(session)) return

    const refreshAuthToken = async () => {
      try {
        const { token, refreshToken } = await AuthAPI.refreshToken()
        AuthStorage.setTokens(token, refreshToken)
        
        // Update session expiry (this would come from server in real implementation)
        const updatedSession = {
          ...session,
          token,
          refreshToken,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
        }
        setSession(updatedSession)
      } catch (error) {
        console.error('Token refresh failed:', error)
        await logout()
      }
    }

    const refreshInterval = setInterval(refreshAuthToken, 5 * 60 * 1000) // Check every 5 minutes
    return () => clearInterval(refreshInterval)
  }, [session])

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true)
      const { user: authUser, session: authSession } = await AuthAPI.login(credentials)
      
      // Store tokens and user data
      AuthStorage.setTokens(authSession.token, authSession.refreshToken)
      AuthStorage.setUser(authUser)
      
      setUser(authUser)
      setSession(authSession)
    } catch (error) {
      console.error('Login error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  const register = useCallback(async (data: RegisterData) => {
    try {
      setIsLoading(true)
      const { user: authUser, session: authSession } = await AuthAPI.register(data)
      
      // Store tokens and user data
      AuthStorage.setTokens(authSession.token, authSession.refreshToken)
      AuthStorage.setUser(authUser)
      
      setUser(authUser)
      setSession(authSession)
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      setIsLoading(true)
      await AuthAPI.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Clear state and storage regardless of API call success
      AuthStorage.clearAll()
      setUser(null)
      setSession(null)
      setIsLoading(false)
    }
  }, [])

  const refreshToken = useCallback(async () => {
    try {
      const { token, refreshToken: newRefreshToken } = await AuthAPI.refreshToken()
      AuthStorage.setTokens(token, newRefreshToken)
      
      if (session) {
        const updatedSession = {
          ...session,
          token,
          refreshToken: newRefreshToken,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
        }
        setSession(updatedSession)
      }
    } catch (error) {
      console.error('Token refresh error:', error)
      await logout()
      throw error
    }
  }, [session, logout])

  const requestPasswordReset = useCallback(async (data: PasswordResetRequest) => {
    try {
      await AuthAPI.requestPasswordReset(data)
    } catch (error) {
      console.error('Password reset request error:', error)
      throw error
    }
  }, [])

  const resetPassword = useCallback(async (data: PasswordReset) => {
    try {
      await AuthAPI.resetPassword(data)
    } catch (error) {
      console.error('Password reset error:', error)
      throw error
    }
  }, [])

  const updateProfile = useCallback(async (data: Partial<UserProfile>) => {
    try {
      setIsLoading(true)
      const updatedUser = await AuthAPI.updateProfile(data)
      
      // Update stored user data
      AuthStorage.setUser(updatedUser)
      setUser(updatedUser)
    } catch (error) {
      console.error('Profile update error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  const hasPermission = useCallback((resource: string, action: string) => {
    return AuthHelper.hasPermission(user, resource, action)
  }, [user])

  const hasRole = useCallback((roleName: string) => {
    return AuthHelper.hasRole(user, roleName)
  }, [user])

  const value: AuthContextType = {
    user,
    session,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    refreshToken,
    requestPasswordReset,
    resetPassword,
    updateProfile,
    hasPermission,
    hasRole
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Higher-order component for protected routes
export function withAuth<P extends object>(Component: React.ComponentType<P>, options?: {
  redirectTo?: string
  requiredPermission?: { resource: string; action: string }
  requiredRole?: string
}) {
  return function AuthenticatedComponent(props: P) {
    const { isAuthenticated, isLoading, hasPermission, hasRole } = useAuth()
    
    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        window.location.href = options?.redirectTo || '/auth/login'
        return
      }
      
      if (!isLoading && isAuthenticated) {
        // Check permission requirements
        if (options?.requiredPermission) {
          const { resource, action } = options.requiredPermission
          if (!hasPermission(resource, action)) {
            window.location.href = '/unauthorized'
            return
          }
        }
        
        // Check role requirements
        if (options?.requiredRole && !hasRole(options.requiredRole)) {
          window.location.href = '/unauthorized'
          return
        }
      }
    }, [isAuthenticated, isLoading, hasPermission, hasRole])

    if (isLoading) {
      return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      )
    }

    if (!isAuthenticated) {
      return null // Will redirect in useEffect
    }

    // Check permissions after authentication
    if (options?.requiredPermission) {
      const { resource, action } = options.requiredPermission
      if (!hasPermission(resource, action)) {
        return null // Will redirect in useEffect
      }
    }

    if (options?.requiredRole && !hasRole(options.requiredRole)) {
      return null // Will redirect in useEffect
    }

    return <Component {...props} />
  }
}

// Hook for checking specific permissions
export function usePermissions() {
  const { hasPermission, hasRole, user } = useAuth()

  return {
    hasPermission,
    hasRole,
    canAccessForum: hasPermission('forum', 'read'),
    canPostInForum: hasPermission('forum', 'write'),
    canModerateForum: hasPermission('forum', 'moderate'),
    canEnrollInCertification: hasPermission('certification', 'enroll'),
    canManageCertifications: hasPermission('certification', 'manage'),
    canSubmitBugReports: hasPermission('bounty', 'submit'),
    canReviewBugReports: hasPermission('bounty', 'review'),
    canAccessCustomerPortal: hasPermission('customer', 'access'),
    canManageAPIKeys: hasPermission('api', 'manage'),
    canAccessAdminPanel: hasPermission('admin', 'access'),
    canManageUsers: hasPermission('user', 'manage'),
    isAdmin: AuthHelper.isAdmin(user),
    isModerator: AuthHelper.isModerator(user),
    isExpert: AuthHelper.isExpert(user)
  }
}

// Component for conditionally rendering content based on permissions
interface PermissionGateProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  permission?: { resource: string; action: string }
  role?: string
  requireAll?: boolean // If true, require all conditions. If false, require any condition
}

export function PermissionGate({ 
  children, 
  fallback = null, 
  permission, 
  role, 
  requireAll = true 
}: PermissionGateProps) {
  const { hasPermission, hasRole, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <>{fallback}</>
  }

  const conditions: boolean[] = []

  if (permission) {
    conditions.push(hasPermission(permission.resource, permission.action))
  }

  if (role) {
    conditions.push(hasRole(role))
  }

  const shouldRender = requireAll 
    ? conditions.every(condition => condition)
    : conditions.some(condition => condition)

  return shouldRender ? <>{children}</> : <>{fallback}</>
}