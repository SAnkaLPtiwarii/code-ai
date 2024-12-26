
import { Provider } from '@/types/auth'

export interface SSOButtonsProps {
  onLogin: (provider: Provider) => void
  isLoading?: boolean
  disabled?: boolean
}

export interface SSOProvider {
  id: Provider
  name: string
  icon: React.ComponentType<{ className?: string }>
  className?: string
}