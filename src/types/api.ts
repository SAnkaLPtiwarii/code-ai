export interface Repository {
  id: string
  name: string
  language: string
  size: number
  visibility: 'Public' | 'Private'
  updatedAt: string
  description?: string
}

export interface ApiError {
  message: string
  code: string
  status: number
  details?: Record<string, unknown>
}

export interface ApiResponse<T> {
  data: T
  status: number
  message: string
}