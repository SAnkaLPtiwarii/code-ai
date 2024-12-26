
export interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  trend?: {
    value: number
    label: string
    isPositive: boolean
  }
  icon?: React.ReactNode
}

export interface StatsTrendProps {
  value: number
  label: string
  isPositive: boolean
}

export interface StatsGridProps {
  className?: string
  isLoading?: boolean
}