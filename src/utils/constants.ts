export const CONFIG = {
  APP_NAME: 'CodeAnt AI',
  API_URL: import.meta.env.VITE_API_URL,
  SUPPORTED_LANGUAGES: [
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'Go',
    'Ruby',
    'PHP',
    'C#',
    'Swift'
  ],
  CACHE_TIME: 1000 * 60 * 5, // 5 minutes
  MAX_FILE_SIZE: 1024 * 1024 * 10 // 10MB
} as const

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SELF_HOSTED: '/self-hosted',
  REPOSITORIES: '/repositories',
  CODE_REVIEW: '/code-review',
  SETTINGS: '/settings'
} as const

export const ERROR_MESSAGES = {
  GENERAL: 'Something went wrong. Please try again.',
  UNAUTHORIZED: 'Please log in to continue.',
  NETWORK: 'Network error. Please check your connection.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION: 'Please check your input and try again.'
} as const
