import { Card } from '@/components/common/Card'

interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  trend?: {
    value: number
    label: string
  }
}

export const StatsCard = ({ title, value, description, trend }: StatsCardProps) => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="mt-1 text-3xl font-semibold">{value}</p>
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
        {trend && (
          <div className={`text-sm ${trend.value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <span className="font-medium">
              {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}%
            </span>
            <div className="text-xs text-gray-500">{trend.label}</div>
          </div>
        )}
      </div>
    </Card>
  )
}

export const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <StatsCard
        title="Language Support"
        value="30+"
        description="Programming languages"
      />
      <StatsCard
        title="Developers"
        value="10K+"
        description="Active users"
      />
      <StatsCard
        title="Issues Fixed"
        value="500K+"
        trend={{
          value: 14,
          label: "This week"
        }}
      />
    </div>
  )
}
