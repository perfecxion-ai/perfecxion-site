'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  Bell,
  X,
  Check,
  CheckCheck,
  Trash2,
  Settings,
  Filter,
  MoreHorizontal,
  AlertTriangle,
  Info,
  MessageSquare,
  Award,
  Bug,
  CreditCard,
  Shield
} from 'lucide-react'
import { NotificationData, NotificationManager, NotificationCategory, NotificationPriority } from '@/lib/notifications'
import { useAuth } from '@/components/auth/AuthProvider'

interface NotificationCenterProps {
  isOpen: boolean
  onClose: () => void
}

export default function NotificationCenter({ isOpen, onClose }: NotificationCenterProps) {
  const { user } = useAuth()
  const [notifications, setNotifications] = useState<NotificationData[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [filter, setFilter] = useState<{
    category?: NotificationCategory
    priority?: NotificationPriority
    unreadOnly: boolean
  }>({ unreadOnly: false })
  const [loading, setLoading] = useState(true)
  const panelRef = useRef<HTMLDivElement>(null)

  // Load notifications
  useEffect(() => {
    if (user && isOpen) {
      const userNotifications = NotificationManager.getNotifications(user.id)
      setNotifications(userNotifications)
      setUnreadCount(NotificationManager.getUnreadCount(user.id))
      setLoading(false)
    }
  }, [user, isOpen])

  // Listen for new notifications
  useEffect(() => {
    if (!user) return

    const unsubscribe = NotificationManager.addListener((notification) => {
      if (notification.userId === user.id) {
        setNotifications(prev => [notification, ...prev])
        setUnreadCount(prev => prev + 1)
      }
    })

    return unsubscribe
  }, [user])

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const filteredNotifications = notifications.filter(notification => {
    if (filter.category && notification.category !== filter.category) return false
    if (filter.priority && notification.priority !== filter.priority) return false
    if (filter.unreadOnly && notification.isRead) return false
    return true
  })

  const handleMarkAsRead = async (notificationId: string) => {
    await NotificationManager.markAsRead(notificationId)
    setNotifications(prev => 
      prev.map(n => n.id === notificationId ? { ...n, isRead: true } : n)
    )
    setUnreadCount(prev => Math.max(0, prev - 1))
  }

  const handleMarkAllAsRead = async () => {
    if (!user) return
    
    await NotificationManager.markAllAsRead(user.id)
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })))
    setUnreadCount(0)
  }

  const handleDelete = async (notificationId: string) => {
    await NotificationManager.deleteNotification(notificationId)
    setNotifications(prev => prev.filter(n => n.id !== notificationId))
    if (!notifications.find(n => n.id === notificationId)?.isRead) {
      setUnreadCount(prev => Math.max(0, prev - 1))
    }
  }

  const getNotificationIcon = (notification: NotificationData) => {
    switch (notification.category) {
      case 'community':
        return <MessageSquare className="w-5 h-5 text-blue-600" />
      case 'certification':
        return <Award className="w-5 h-5 text-green-600" />
      case 'security':
        return <Shield className="w-5 h-5 text-red-600" />
      case 'billing':
        return <CreditCard className="w-5 h-5 text-yellow-600" />
      case 'system':
        return <Info className="w-5 h-5 text-gray-600" />
      default:
        return <Bell className="w-5 h-5 text-gray-600" />
    }
  }

  const getPriorityColor = (priority: NotificationPriority) => {
    switch (priority) {
      case 'urgent': return 'border-l-red-500'
      case 'high': return 'border-l-orange-500'
      case 'medium': return 'border-l-yellow-500'
      case 'low': return 'border-l-blue-500'
      default: return 'border-l-gray-300'
    }
  }

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 1) return 'Just now'
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
    return `${Math.floor(diffInMinutes / 1440)}d ago`
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-25" onClick={onClose} />
      
      <div 
        ref={panelRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl transform transition-transform"
      >
        {/* Header */}
        <div className="border-b dark:border-gray-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Bell className="w-6 h-6 text-gray-900 dark:text-white" />
              <h2 className="text-lg font-semibold dark:text-white">
                Notifications
              </h2>
              {unreadCount > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {unreadCount}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <button
                onClick={handleMarkAllAsRead}
                disabled={unreadCount === 0}
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CheckCheck className="w-4 h-4 inline mr-1" />
                Mark all read
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setFilter(prev => ({ ...prev, unreadOnly: !prev.unreadOnly }))}
                className={`p-1 rounded ${
                  filter.unreadOnly 
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
                title="Show unread only"
              >
                <Filter className="w-4 h-4" />
              </button>
              
              <Link
                href="/settings/notifications"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                title="Notification settings"
              >
                <Settings className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="border-b dark:border-gray-700 p-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter(prev => ({ ...prev, category: undefined }))}
              className={`px-3 py-1 rounded-full text-sm ${
                !filter.category 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              All
            </button>
            {(['community', 'certification', 'security', 'billing', 'system'] as NotificationCategory[]).map(category => (
              <button
                key={category}
                onClick={() => setFilter(prev => ({ 
                  ...prev, 
                  category: prev.category === category ? undefined : category 
                }))}
                className={`px-3 py-1 rounded-full text-sm capitalize ${
                  filter.category === category
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 text-gray-500 dark:text-gray-400">
              <Bell className="w-8 h-8 mb-2" />
              <p className="text-sm">
                {filter.unreadOnly || filter.category ? 'No matching notifications' : 'No notifications yet'}
              </p>
            </div>
          ) : (
            <div className="divide-y dark:divide-gray-700">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700 border-l-4 ${getPriorityColor(notification.priority)} ${
                    !notification.isRead ? 'bg-blue-50 dark:bg-blue-900/10' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className={`text-sm font-medium ${
                            !notification.isRead ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {notification.title}
                          </h3>
                          <p className={`text-sm mt-1 ${
                            !notification.isRead ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-500'
                          }`}>
                            {notification.message}
                          </p>
                          
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-xs text-gray-400">
                              {formatTimeAgo(notification.createdAt)}
                            </span>
                            
                            {notification.priority === 'urgent' && (
                              <span className="inline-flex items-center text-xs text-red-600">
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                Urgent
                              </span>
                            )}
                          </div>
                          
                          {notification.actionUrl && notification.actionText && (
                            <Link
                              href={notification.actionUrl}
                              className="inline-block text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 mt-2"
                              onClick={onClose}
                            >
                              {notification.actionText} →
                            </Link>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-1 ml-2">
                          {!notification.isRead && (
                            <button
                              onClick={() => handleMarkAsRead(notification.id)}
                              className="p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                              title="Mark as read"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                          )}
                          
                          <button
                            onClick={() => handleDelete(notification.id)}
                            className="p-1 text-gray-400 hover:text-red-600"
                            title="Delete notification"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t dark:border-gray-700 p-4">
          <Link
            href="/notifications"
            className="block text-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
            onClick={onClose}
          >
            View all notifications
          </Link>
        </div>
      </div>
    </div>
  )
}

// Notification Bell Component for Header
interface NotificationBellProps {
  onClick: () => void
}

export function NotificationBell({ onClick }: NotificationBellProps) {
  const { user } = useAuth()
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    if (user) {
      const count = NotificationManager.getUnreadCount(user.id)
      setUnreadCount(count)

      // Listen for new notifications
      const unsubscribe = NotificationManager.addListener((notification) => {
        if (notification.userId === user.id) {
          setUnreadCount(prev => prev + 1)
        }
      })

      return unsubscribe
    }
  }, [user])

  return (
    <button
      onClick={onClick}
      className="relative p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      title="Notifications"
    >
      <Bell className="w-6 h-6" />
      {unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center px-1">
          {unreadCount > 99 ? '99+' : unreadCount}
        </span>
      )}
    </button>
  )
}

// Toast Notification Component
interface ToastNotificationProps {
  notification: NotificationData
  onClose: () => void
}

export function ToastNotification({ notification, onClose }: ToastNotificationProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000) // Auto-close after 5 seconds
    return () => clearTimeout(timer)
  }, [onClose])

  const getPriorityStyles = (priority: NotificationPriority) => {
    switch (priority) {
      case 'urgent': return 'border-red-400 bg-red-50 dark:bg-red-900/20'
      case 'high': return 'border-orange-400 bg-orange-50 dark:bg-orange-900/20'
      case 'medium': return 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20'
      case 'low': return 'border-blue-400 bg-blue-50 dark:bg-blue-900/20'
      default: return 'border-gray-300 bg-white dark:bg-gray-800'
    }
  }

  return (
    <div 
      className={`
        fixed top-4 right-4 z-50 max-w-sm w-full
        border-l-4 rounded-lg p-4 shadow-lg
        transform transition-all duration-300 ease-in-out
        ${getPriorityStyles(notification.priority)}
      `}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {notification.category === 'community' && <MessageSquare className="w-5 h-5 text-blue-600" />}
          {notification.category === 'certification' && <Award className="w-5 h-5 text-green-600" />}
          {notification.category === 'security' && <Shield className="w-5 h-5 text-red-600" />}
          {notification.category === 'billing' && <CreditCard className="w-5 h-5 text-yellow-600" />}
          {notification.category === 'system' && <Info className="w-5 h-5 text-gray-600" />}
        </div>
        
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            {notification.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {notification.message}
          </p>
          
          {notification.actionUrl && notification.actionText && (
            <Link
              href={notification.actionUrl}
              className="inline-block text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 mt-2"
            >
              {notification.actionText} →
            </Link>
          )}
        </div>
        
        <button
          onClick={onClose}
          className="ml-3 flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}