import { http, HttpResponse } from 'msw'

export const handler = [
  http.post('/api/auth/:provider/callback', () => {
    return HttpResponse.json({
      user: {
        id: '1',
        username: 'testuser',
        email: 'test@example.com',
        avatarUrl: 'https://via.placeholder.com/150',
        role: 'user'
      },
      token: 'mock-token',
      refreshToken: 'mock-refresh-token',
      expiresIn: 3600
    })
  }),

  http.get('/api/auth/:provider/authorize', () => {
    return HttpResponse.json({
      authorizationUrl: 'http://mock-oauth-url.com'
    })
  })
]