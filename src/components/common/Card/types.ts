
import { HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface CardHeaderProps {
  title: string
  description?: string
  action?: React.ReactNode
}

export interface CardFooterProps {
  children: React.ReactNode
}