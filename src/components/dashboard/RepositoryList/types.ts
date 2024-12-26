
import { Repository } from '@/types/api'

export interface RepositoryListProps {
  onAddRepository?: () => void
  onRefresh?: () => void
}

export interface RepositoryCardProps {
  repository: Repository
  onDelete?: (id: string) => void
  onClick?: (id: string) => void
}

export interface RepositoryFilterProps {
  language?: string
  visibility?: 'all' | 'public' | 'private'
  sortBy?: 'name' | 'updated' | 'created'
  onFilterChange: (filters: RepositoryFilters) => void
}

export interface RepositoryFilters {
  language?: string
  visibility?: 'all' | 'public' | 'private'
  sortBy?: 'name' | 'updated' | 'created'
  search?: string
}