export interface User {
  id: string
  username: string
  email: string
  avatarUrl?: string
  role: UserRole
  preferences: UserPreferences
  createdAt: string
  lastLoginAt: string
}

export type UserRole = 'admin' | 'user' | 'viewer'

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  notifications: boolean
  language: string
}

export interface AuthResponse {
  user: User
  token: string
  refreshToken: string
  expiresIn: number
}

export type Provider = 'github' | 'gitlab' | 'bitbucket' | 'azure'
