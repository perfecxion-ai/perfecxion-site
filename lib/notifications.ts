// Real-time Messaging and Notifications System

export interface NotificationData {
  id: string
  userId: string
  type: NotificationType
  title: string
  message: string
  data?: Record<string, any>
  isRead: boolean
  createdAt: Date
  expiresAt?: Date
  priority: NotificationPriority
  category: NotificationCategory
  actionUrl?: string
  actionText?: string
}

export type NotificationType = 
  | 'forum_reply'
  | 'forum_mention'
  | 'forum_like'
  | 'certification_complete'
  | 'certification_reminder'
  | 'certification_expired'
  | 'bug_bounty_update'
  | 'bug_bounty_reward'
  | 'bug_bounty_comment'
  | 'support_ticket_reply'
  | 'support_ticket_status'
  | 'api_quota_warning'
  | 'api_quota_exceeded'
  | 'system_maintenance'
  | 'system_announcement'
  | 'security_alert'
  | 'account_security'
  | 'billing_reminder'
  | 'payment_failed'
  | 'subscription_expired'

export type NotificationPriority = 'low' | 'medium' | 'high' | 'urgent'
export type NotificationCategory = 'community' | 'certification' | 'security' | 'billing' | 'system'

export interface NotificationPreferences {
  userId: string
  emailNotifications: boolean
  pushNotifications: boolean
  inAppNotifications: boolean
  categories: Record<NotificationCategory, {
    email: boolean
    push: boolean
    inApp: boolean
  }>
  quietHours?: {
    enabled: boolean
    startTime: string // HH:MM format
    endTime: string // HH:MM format
    timezone: string
  }
  frequency: 'immediate' | 'hourly' | 'daily' | 'weekly'
}

export interface RealTimeMessage {
  id: string
  type: 'notification' | 'typing' | 'presence' | 'system'
  userId?: string
  channelId?: string
  data: any
  timestamp: Date
}

export interface TypingIndicator {
  userId: string
  username: string
  channelId: string
}

export interface UserPresence {
  userId: string
  username: string
  status: 'online' | 'away' | 'busy' | 'offline'
  lastSeen: Date
  currentPage?: string
}

// WebSocket Event Types
export type WebSocketEventType = 
  | 'connect'
  | 'disconnect'
  | 'notification'
  | 'typing_start'
  | 'typing_stop'
  | 'presence_update'
  | 'system_message'
  | 'error'

export interface WebSocketEvent {
  type: WebSocketEventType
  data?: any
  timestamp: Date
}

// Notification Templates
export const NOTIFICATION_TEMPLATES: Record<NotificationType, {
  title: (data: any) => string
  message: (data: any) => string
  category: NotificationCategory
  priority: NotificationPriority
  actionUrl?: (data: any) => string
  actionText?: string
}> = {
  forum_reply: {
    title: (data) => 'New Reply',
    message: (data) => `${data.author} replied to your post "${data.postTitle}"`,
    category: 'community',
    priority: 'medium',
    actionUrl: (data) => `/community/forums/post/${data.postId}`,
    actionText: 'View Reply'
  },
  forum_mention: {
    title: (data) => 'You were mentioned',
    message: (data) => `${data.author} mentioned you in "${data.postTitle}"`,
    category: 'community',
    priority: 'high',
    actionUrl: (data) => `/community/forums/post/${data.postId}`,
    actionText: 'View Post'
  },
  forum_like: {
    title: (data) => 'Post Liked',
    message: (data) => `${data.author} liked your post "${data.postTitle}"`,
    category: 'community',
    priority: 'low',
    actionUrl: (data) => `/community/forums/post/${data.postId}`,
    actionText: 'View Post'
  },
  certification_complete: {
    title: (data) => 'Certification Earned!',
    message: (data) => `Congratulations! You've earned the ${data.certificationName} certification`,
    category: 'certification',
    priority: 'high',
    actionUrl: (data) => `/community/certification/certificate/${data.certificateId}`,
    actionText: 'View Certificate'
  },
  certification_reminder: {
    title: (data) => 'Course Reminder',
    message: (data) => `Continue your ${data.courseName} course - ${data.progress}% complete`,
    category: 'certification',
    priority: 'medium',
    actionUrl: (data) => `/community/certification/program/${data.programId}`,
    actionText: 'Continue Course'
  },
  certification_expired: {
    title: (data) => 'Certification Expired',
    message: (data) => `Your ${data.certificationName} certification has expired`,
    category: 'certification',
    priority: 'high',
    actionUrl: (data) => `/community/certification/renew/${data.certificationId}`,
    actionText: 'Renew Now'
  },
  bug_bounty_update: {
    title: (data) => 'Submission Update',
    message: (data) => `Your vulnerability report "${data.title}" status: ${data.status}`,
    category: 'security',
    priority: 'high',
    actionUrl: (data) => `/community/bug-bounty/submission/${data.submissionId}`,
    actionText: 'View Update'
  },
  bug_bounty_reward: {
    title: (data) => 'Reward Approved!',
    message: (data) => `You've been awarded $${data.amount} for your vulnerability report`,
    category: 'security',
    priority: 'high',
    actionUrl: (data) => `/community/bug-bounty/submission/${data.submissionId}`,
    actionText: 'View Details'
  },
  bug_bounty_comment: {
    title: (data) => 'New Comment',
    message: (data) => `New comment on your vulnerability report "${data.title}"`,
    category: 'security',
    priority: 'medium',
    actionUrl: (data) => `/community/bug-bounty/submission/${data.submissionId}`,
    actionText: 'View Comment'
  },
  support_ticket_reply: {
    title: (data) => 'Support Reply',
    message: (data) => `New reply to your support ticket "${data.title}"`,
    category: 'system',
    priority: 'high',
    actionUrl: (data) => `/customer/support/ticket/${data.ticketId}`,
    actionText: 'View Reply'
  },
  support_ticket_status: {
    title: (data) => 'Ticket Status Update',
    message: (data) => `Your support ticket "${data.title}" status: ${data.status}`,
    category: 'system',
    priority: 'medium',
    actionUrl: (data) => `/customer/support/ticket/${data.ticketId}`,
    actionText: 'View Ticket'
  },
  api_quota_warning: {
    title: (data) => 'API Quota Warning',
    message: (data) => `You've used ${data.percentage}% of your API quota`,
    category: 'billing',
    priority: 'medium',
    actionUrl: () => '/customer/billing',
    actionText: 'View Usage'
  },
  api_quota_exceeded: {
    title: (data) => 'API Quota Exceeded',
    message: (data) => 'Your API quota has been exceeded. Upgrade to continue',
    category: 'billing',
    priority: 'urgent',
    actionUrl: () => '/customer/billing/upgrade',
    actionText: 'Upgrade Now'
  },
  system_maintenance: {
    title: (data) => 'Scheduled Maintenance',
    message: (data) => `System maintenance scheduled for ${data.scheduledTime}`,
    category: 'system',
    priority: 'medium',
    actionUrl: () => '/status',
    actionText: 'View Status'
  },
  system_announcement: {
    title: (data) => 'System Announcement',
    message: (data) => data.message,
    category: 'system',
    priority: 'medium'
  },
  security_alert: {
    title: (data) => 'Security Alert',
    message: (data) => data.message,
    category: 'security',
    priority: 'urgent',
    actionUrl: (data) => data.actionUrl,
    actionText: 'Take Action'
  },
  account_security: {
    title: (data) => 'Account Security',
    message: (data) => data.message,
    category: 'security',
    priority: 'high',
    actionUrl: () => '/account/security',
    actionText: 'Review Security'
  },
  billing_reminder: {
    title: (data) => 'Payment Due',
    message: (data) => `Your payment of $${data.amount} is due on ${data.dueDate}`,
    category: 'billing',
    priority: 'high',
    actionUrl: () => '/customer/billing',
    actionText: 'Pay Now'
  },
  payment_failed: {
    title: (data) => 'Payment Failed',
    message: (data) => `Payment of $${data.amount} failed. Update your payment method`,
    category: 'billing',
    priority: 'urgent',
    actionUrl: () => '/customer/billing/payment-methods',
    actionText: 'Update Payment'
  },
  subscription_expired: {
    title: (data) => 'Subscription Expired',
    message: (data) => `Your ${data.planName} subscription has expired`,
    category: 'billing',
    priority: 'urgent',
    actionUrl: () => '/customer/billing/renew',
    actionText: 'Renew Now'
  }
}

// Notification Manager Class
export class NotificationManager {
  private static notifications: Map<string, NotificationData> = new Map()
  private static listeners: Set<(notification: NotificationData) => void> = new Set()
  private static preferences: NotificationPreferences | null = null

  static addListener(callback: (notification: NotificationData) => void) {
    this.listeners.add(callback)
    
    return () => {
      this.listeners.delete(callback)
    }
  }

  static async createNotification(
    userId: string,
    type: NotificationType,
    data: any = {}
  ): Promise<NotificationData> {
    const template = NOTIFICATION_TEMPLATES[type]
    const id = `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    const notification: NotificationData = {
      id,
      userId,
      type,
      title: template.title(data),
      message: template.message(data),
      data,
      isRead: false,
      createdAt: new Date(),
      priority: template.priority,
      category: template.category,
      actionUrl: template.actionUrl?.(data),
      actionText: template.actionText
    }

    // Store notification
    this.notifications.set(id, notification)

    // Notify listeners
    this.listeners.forEach(listener => listener(notification))

    // Send via enabled channels
    await this.sendNotification(notification)

    return notification
  }

  static async sendNotification(notification: NotificationData) {
    const preferences = await this.getUserPreferences(notification.userId)
    
    if (!preferences) return

    const categoryPrefs = preferences.categories[notification.category]

    // Send in-app notification
    if (preferences.inAppNotifications && categoryPrefs.inApp) {
      this.sendInAppNotification(notification)
    }

    // Send push notification
    if (preferences.pushNotifications && categoryPrefs.push) {
      await this.sendPushNotification(notification)
    }

    // Send email notification
    if (preferences.emailNotifications && categoryPrefs.email) {
      await this.sendEmailNotification(notification)
    }
  }

  static sendInAppNotification(notification: NotificationData) {
    // This would integrate with your real-time system (WebSocket, Server-Sent Events, etc.)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('notification', { detail: notification }))
    }
  }

  static async sendPushNotification(notification: NotificationData) {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      try {
        const registration = await navigator.serviceWorker.ready
        await registration.showNotification(notification.title, {
          body: notification.message,
          icon: '/logo-perfecxion.svg',
          badge: '/logo-perfecxion.svg',
          data: {
            notificationId: notification.id,
            actionUrl: notification.actionUrl
          }
        })
      } catch (error) {
        console.error('Push notification failed:', error)
      }
    }
  }

  static async sendEmailNotification(notification: NotificationData) {
    // This would call your email service API
    try {
      await fetch('/api/notifications/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: notification.userId,
          notification
        })
      })
    } catch (error) {
      console.error('Email notification failed:', error)
    }
  }

  static async getUserPreferences(userId: string): Promise<NotificationPreferences | null> {
    // In a real implementation, fetch from API or cache
    return this.preferences
  }

  static async updateUserPreferences(userId: string, preferences: Partial<NotificationPreferences>) {
    // In a real implementation, update via API
    if (this.preferences) {
      this.preferences = { ...this.preferences, ...preferences }
    }
  }

  static getNotification(id: string): NotificationData | undefined {
    return this.notifications.get(id)
  }

  static getNotifications(userId: string, limit = 50): NotificationData[] {
    return Array.from(this.notifications.values())
      .filter(notification => notification.userId === userId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit)
  }

  static getUnreadCount(userId: string): number {
    return Array.from(this.notifications.values())
      .filter(notification => notification.userId === userId && !notification.isRead)
      .length
  }

  static async markAsRead(notificationId: string): Promise<void> {
    const notification = this.notifications.get(notificationId)
    if (notification) {
      notification.isRead = true
      this.notifications.set(notificationId, notification)
    }
  }

  static async markAllAsRead(userId: string): Promise<void> {
    Array.from(this.notifications.values())
      .filter(notification => notification.userId === userId && !notification.isRead)
      .forEach(notification => {
        notification.isRead = true
        this.notifications.set(notification.id, notification)
      })
  }

  static async deleteNotification(notificationId: string): Promise<void> {
    this.notifications.delete(notificationId)
  }

  static async clearOldNotifications(olderThanDays = 30): Promise<void> {
    const cutoffDate = new Date(Date.now() - olderThanDays * 24 * 60 * 60 * 1000)
    
    Array.from(this.notifications.entries())
      .filter(([_, notification]) => notification.createdAt < cutoffDate)
      .forEach(([id]) => this.notifications.delete(id))
  }
}

// WebSocket Manager for Real-time Communication
export class WebSocketManager {
  private static instance: WebSocketManager | null = null
  private ws: WebSocket | null = null
  private reconnectAttempts = 0
  private maxReconnectAttempts = 5
  private reconnectDelay = 1000
  private heartbeatInterval: NodeJS.Timeout | null = null
  private listeners: Map<WebSocketEventType, Set<(data: any) => void>> = new Map()

  private constructor(private userId: string, private token: string) {}

  static getInstance(userId: string, token: string): WebSocketManager {
    if (!WebSocketManager.instance) {
      WebSocketManager.instance = new WebSocketManager(userId, token)
    }
    return WebSocketManager.instance
  }

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const wsUrl = `${process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3001'}/ws?token=${this.token}&userId=${this.userId}`
        this.ws = new WebSocket(wsUrl)

        this.ws.onopen = () => {
          console.log('WebSocket connected')
          this.reconnectAttempts = 0
          this.startHeartbeat()
          this.emit('connect', { userId: this.userId })
          resolve()
        }

        this.ws.onmessage = (event) => {
          try {
            const message: RealTimeMessage = JSON.parse(event.data)
            this.handleMessage(message)
          } catch (error) {
            console.error('Failed to parse WebSocket message:', error)
          }
        }

        this.ws.onclose = (event) => {
          console.log('WebSocket disconnected:', event.code, event.reason)
          this.stopHeartbeat()
          this.emit('disconnect', { code: event.code, reason: event.reason })
          
          if (!event.wasClean && this.reconnectAttempts < this.maxReconnectAttempts) {
            this.scheduleReconnect()
          }
        }

        this.ws.onerror = (error) => {
          console.error('WebSocket error:', error)
          this.emit('error', { error })
          reject(error)
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  disconnect(): void {
    if (this.ws) {
      this.ws.close(1000, 'User initiated disconnect')
      this.ws = null
    }
    this.stopHeartbeat()
    WebSocketManager.instance = null
  }

  private scheduleReconnect(): void {
    setTimeout(() => {
      this.reconnectAttempts++
      console.log(`Reconnecting... attempt ${this.reconnectAttempts}`)
      this.connect().catch(console.error)
    }, this.reconnectDelay * Math.pow(2, this.reconnectAttempts))
  }

  private startHeartbeat(): void {
    this.heartbeatInterval = setInterval(() => {
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.send('heartbeat', {})
      }
    }, 30000) // 30 seconds
  }

  private stopHeartbeat(): void {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval)
      this.heartbeatInterval = null
    }
  }

  private handleMessage(message: RealTimeMessage): void {
    switch (message.type) {
      case 'notification':
        this.emit('notification', message.data)
        break
      case 'typing':
        this.emit('typing_start', message.data)
        break
      case 'presence':
        this.emit('presence_update', message.data)
        break
      case 'system':
        this.emit('system_message', message.data)
        break
      default:
        console.log('Unknown message type:', message.type)
    }
  }

  send(type: string, data: any): void {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type,
        data,
        timestamp: new Date().toISOString()
      }))
    }
  }

  on(event: WebSocketEventType, callback: (data: any) => void): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set())
    }
    this.listeners.get(event)!.add(callback)

    return () => {
      this.listeners.get(event)?.delete(callback)
    }
  }

  private emit(event: WebSocketEventType, data: any): void {
    this.listeners.get(event)?.forEach(callback => callback(data))
  }

  // Typing indicators
  startTyping(channelId: string): void {
    this.send('typing_start', { channelId, userId: this.userId })
  }

  stopTyping(channelId: string): void {
    this.send('typing_stop', { channelId, userId: this.userId })
  }

  // Presence updates
  updatePresence(status: UserPresence['status'], currentPage?: string): void {
    this.send('presence_update', {
      userId: this.userId,
      status,
      currentPage,
      timestamp: new Date().toISOString()
    })
  }
}

// Default notification preferences
export const DEFAULT_NOTIFICATION_PREFERENCES: NotificationPreferences = {
  userId: '',
  emailNotifications: true,
  pushNotifications: true,
  inAppNotifications: true,
  categories: {
    community: { email: true, push: true, inApp: true },
    certification: { email: true, push: true, inApp: true },
    security: { email: true, push: true, inApp: true },
    billing: { email: true, push: true, inApp: true },
    system: { email: false, push: true, inApp: true }
  },
  quietHours: {
    enabled: false,
    startTime: '22:00',
    endTime: '08:00',
    timezone: 'America/New_York'
  },
  frequency: 'immediate'
}