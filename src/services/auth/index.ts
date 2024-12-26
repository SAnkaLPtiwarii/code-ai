import api from '@/services/api/axios'
import { Provider, AuthResponse } from '@/types/auth'

const AUTH_ENDPOINTS = {
  github: '/auth/github',
  gitlab: '/auth/gitlab',
  bitbucket: '/auth/bitbucket',
  azure: '/auth/azure'
}

export const authService = {
  // Initialize OAuth flow
  async initiateOAuth(provider: Provider) {
    // For development, you can mock the authentication
    if (process.env.NODE_ENV === 'development') {
      return this.mockAuth()
    }

    try {
      const { data } = await api.get(`${AUTH_ENDPOINTS[provider]}/authorize`)
      window.location.href = data.authorizationUrl
    } catch (error) {
      console.error('OAuth initiation failed:', error)
      throw error
    }
  },

  // Handle OAuth callback
  async handleOAuthCallback(provider: Provider, code: string): Promise<AuthResponse> {
    try {
      const { data } = await api.post(`${AUTH_ENDPOINTS[provider]}/callback`, { code })
      return data
    } catch (error) {
      console.error('OAuth callback failed:', error)
      throw error
    }
  },

  // Mock authentication for development
  mockAuth(): AuthResponse {
    return {
      user: {
        id: '1',
        username: 'testuser',
        email: 'test@example.com',
        avatarUrl: 'https://via.placeholder.com/150',
        role: 'user',
        preferences: {
          theme: 'light',
          notifications: true,
          language: 'en'
        },
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString()
      },
      token: 'mock-token',
      refreshToken: 'mock-refresh-token',
      expiresIn: 3600
    }
  },

  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout')
    } finally {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
  }
}

export default authService