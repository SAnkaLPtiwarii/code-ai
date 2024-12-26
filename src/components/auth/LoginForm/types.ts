import { Provider } from '@/types/auth'

export interface LoginFormProps {
  onSubmit: (provider: Provider) => void
  isLoading?: boolean
  error?: string
}

export interface LoginTabProps {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}
