import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatBytes(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB']
  let size = bytes
  let unitIndex = 0

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }

  return `${size.toFixed(1)} ${units[unitIndex]}`
}

export function formatDate(date: string): string {
  const d = new Date(date)
  return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
    Math.round((d.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
    'day'
  )
}
