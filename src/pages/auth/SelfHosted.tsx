import { useState } from 'react'
import { LogoIcon, GitlabIcon } from '@/components/common/Icons'

const SelfHosted = () => {
  const [activeTab, setActiveTab] = useState<'saas' | 'self-hosted'>('self-hosted')

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Stats Cards */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        {/* Stats Card */}
        <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <LogoIcon className="h-5 w-5" />
              <h2 className="font-medium">AI to Detect & Autofix Bad Code</h2>
            </div>

            <div className="grid grid-cols-3">
              <div>
                <div className="text-2xl font-semibold">30+</div>
                <div className="text-sm text-gray-600">Language Support</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">10K+</div>
                <div className="text-sm text-gray-600">Developers</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">100K+</div>
                <div className="text-sm text-gray-600">Hours Saved</div>
              </div>
            </div>
          </div>
        </div>

        {/* Issues Fixed Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="relative">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="h-12 w-12 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <div className="text-gray-500">Issues Fixed</div>
              <div className="text-3xl font-semibold">500K+</div>
            </div>
            <div className="flex items-center text-blue-500">
              <span>↑ 14%</span>
              <span className="text-xs ml-1 text-gray-500">This week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="flex justify-end items-center mb-8">
            <LogoIcon className="h-8 w-8" />
            <span className="ml-2 text-xl">CodeAnt AI</span>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-semibold text-center mb-8">
              Welcome to CodeAnt AI
            </h1>

            {/* Tabs */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
              <button
                onClick={() => setActiveTab('saas')}
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${activeTab === 'saas'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600'
                  }`}
              >
                SAAS
              </button>
              <button
                onClick={() => setActiveTab('self-hosted')}
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${activeTab === 'self-hosted'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600'
                  }`}
              >
                Self Hosted
              </button>
            </div>

            {/* Login Options */}
            <div className="space-y-4">
              <button className="w-full h-12 flex items-center justify-center space-x-2 rounded-lg border hover:bg-gray-50 transition-colors">
                <GitlabIcon className="h-5 w-5 text-orange-600" />
                <span>Self Hosted GitLab</span>
              </button>
              <button className="w-full h-12 flex items-center justify-center space-x-2 rounded-lg border hover:bg-gray-50 transition-colors">
                <span>🔑</span>
                <span>Sign in with SSO</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelfHosted
