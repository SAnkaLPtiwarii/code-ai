import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import { ApiError, ApiResponse } from '@/types/api'

interface ApiErrorData {
  message?: string
  code?: string
  details?: Record<string, unknown>
}

// Create axios instance with default config
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorData>) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
    }

    const responseData = error.response?.data || {}
    const apiError: ApiError = {
      message: responseData.message || 'An unexpected error occurred',
      code: responseData.code || 'UNKNOWN_ERROR',
      status: error.response?.status || 500,
      details: responseData.details
    }

    return Promise.reject(apiError)
  }
)

// Generic API methods
export const apiClient = {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await api.get<ApiResponse<T>>(url, config)
    return response.data
  },

  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await api.post<ApiResponse<T>>(url, data, config)
    return response.data
  },

  async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await api.put<ApiResponse<T>>(url, data, config)
    return response.data
  },

  async patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await api.patch<ApiResponse<T>>(url, data, config)
    return response.data
  },

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await api.delete<ApiResponse<T>>(url, config)
    return response.data
  },

  // Upload files
  async upload(url: string, file: File, onProgress?: (progress: number) => void): Promise<ApiResponse<string>> {
    const formData = new FormData()
    formData.append('file', file)

    const response = await api.post<ApiResponse<string>>(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          onProgress(progress)
        }
      },
    })

    return response.data
  },
}

// Error handling utilities
export const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    'message' in error &&
    'status' in error
  )
}

export const handleApiError = (error: AxiosError<ApiErrorData>): ApiError => {
  const responseData = error.response?.data || {}

  return {
    message: responseData.message || 'An unexpected error occurred',
    code: responseData.code || 'UNKNOWN_ERROR',
    status: error.response?.status || 500,
    details: responseData.details
  }
}

export default api