// Export types from api and auth without ambiguity
export type { Repository, ApiError, ApiResponse } from './api'
export type {
  User,
  UserRole,
  UserPreferences,
  AuthResponse,
  Provider
} from './auth'

// Common types
export interface BaseEntity {
  id: string
  createdAt: string
  updatedAt: string
}

export interface SelectOption {
  label: string
  value: string | number
  icon?: React.ReactNode
  disabled?: boolean
}

export type Status = 'idle' | 'loading' | 'success' | 'error'

export interface Pagination {
  page: number
  limit: number
  total: number
}