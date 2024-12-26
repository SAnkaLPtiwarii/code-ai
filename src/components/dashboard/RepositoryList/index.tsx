import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
// import { Card } from '@/components/common/Card'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import { SearchIcon, RefreshIcon, PlusIcon } from '@/components/common/Icons'
import { repositoryService } from '@/services/api/repositories'
import { formatBytes, formatDate } from '@/utils/helpers'
import type { Repository } from '@/types/api'

const RepositoryList = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const { data: repositories, isLoading, refetch } = useQuery({
    queryKey: ['repositories'],
    queryFn: repositoryService.getAll
  })

  const filteredRepositories = repositories?.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex-1 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Repositories</h1>
          <p className="text-gray-600 mt-1">33 total repositories</p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="secondary"
            onClick={() => refetch()}
            leftIcon={<RefreshIcon className="w-4 h-4" />}
          >
            Refresh All
          </Button>
          <Button
            variant="primary"
            leftIcon={<PlusIcon className="w-4 h-4" />}
          >
            Add Repository
          </Button>
        </div>
      </div>

      {/* Search Box */}
      <div className="relative mb-6">
        <Input
          placeholder="Search repositories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          leftIcon={<SearchIcon className="w-5 h-5" />}
        />
      </div>

      {/* Repository List */}
      {isLoading ? (
        <div className="text-center py-8">Loading repositories...</div>
      ) : (
        <div className="space-y-4">
          {filteredRepositories?.map((repo) => (
            <RepositoryCard key={repo.id} repository={repo} />
          ))}
        </div>
      )}
    </div>
  )
}

const RepositoryCard = ({ repository }: { repository: Repository }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-primary-500 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">{repository.name}</h3>
          <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              {repository.language}
            </div>
            <span>{formatBytes(repository.size)}</span>
            <span>Updated {formatDate(repository.updatedAt)}</span>
          </div>
        </div>
        <span
          className={`px-3 py-1 text-sm rounded-full ${repository.visibility === 'Public'
            ? 'bg-green-100 text-green-800'
            : 'bg-gray-100 text-gray-800'
            }`}
        >
          {repository.visibility}
        </span>
      </div>
    </div>
  )
}

export default RepositoryList