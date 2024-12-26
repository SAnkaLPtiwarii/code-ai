import { useState } from 'react'
import { SearchIcon, RefreshIcon } from '@/components/common/Icons'

interface Repository {
  name: string
  language: string
  size: string
  visibility: 'Public' | 'Private'
  updatedAt: string
}

const Repositories = () => {
  const [repositories] = useState<Repository[]>([
    {
      name: 'design-system',
      language: 'React',
      size: '7320 KB',
      visibility: 'Public',
      updatedAt: '1 day ago'
    },
    {
      name: 'codeant-ci-app',
      language: 'Javascript',
      size: '5871 KB',
      visibility: 'Private',
      updatedAt: '2 days ago'
    },
    {
      name: 'analytics-dashboard',
      language: 'Python',
      size: '4521 KB',
      visibility: 'Private',
      updatedAt: '5 days ago'
    },
    {
      name: 'mobile-app',
      language: 'Swift',
      size: '3096 KB',
      visibility: 'Public',
      updatedAt: '3 days ago'
    },
    {
      name: 'e-commerce-platform',
      language: 'Java',
      size: '6210 KB',
      visibility: 'Private',
      updatedAt: '6 days ago'
    }
  ])

  return (
    <div className="flex-1 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Repositories</h1>
          <p className="text-gray-600 mt-1">33 total repositories</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-200 flex items-center gap-2 hover:bg-gray-50">
            <RefreshIcon className="w-4 h-4" />
            Refresh All
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white flex items-center gap-2 hover:bg-blue-600">
            <span className="text-xl font-semibold">+</span>
            Add Repository
          </button>
        </div>
      </div>

      {/* Search Box */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>

      {/* Repository List */}
      <div className="space-y-4">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium">{repo.name}</h3>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    {repo.language}
                  </div>
                  <span>{repo.size}</span>
                  <span>Updated {repo.updatedAt}</span>
                </div>
              </div>
              <span
                className={`px-3 py-1 text-sm rounded-full ${repo.visibility === 'Public'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
                  }`}
              >
                {repo.visibility}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Repositories
