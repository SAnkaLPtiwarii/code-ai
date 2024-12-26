import { cn } from '@/utils/helpers'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-sm p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  title: string
  description?: string
  action?: React.ReactNode
}

export const CardHeader = ({ title, description, action }: CardHeaderProps) => {
  return (
    <div className="flex justify-between items-start mb-4">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}
