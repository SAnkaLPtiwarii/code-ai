import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '@/components/common/Card'
import Button from '@/components/common/Button'
import { GithubIcon, GitlabIcon, BitbucketIcon, AzureIcon } from '@/components/common/Icons'
import { authService } from '@/services/auth'
import { useAuth } from '@/contexts/AuthContext'
import type { Provider } from '@/types/auth'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [activeTab, setActiveTab] = useState<'saas' | 'self-hosted'>('saas')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (provider: Provider) => {
    try {
      setIsLoading(true)
      setError(null)

      if (process.env.NODE_ENV === 'development') {
        const response = await authService.mockAuth()
        login(response.user, response.token)
        navigate('/repositories')
      } else {
        await authService.initiateOAuth(provider)
      }
    } catch (err) {
      setError('Authentication failed. Please try again.')
      console.error('Login error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Welcome to CodeAnt AI
      </h1>

      <div className="flex mb-6 space-x-2">
        <button
          className={`flex-1 py-2 text-center rounded-lg transition-colors ${activeTab === 'saas'
            ? 'bg-primary-600 text-white'
            : 'bg-gray-100 text-gray-600'
            }`}
          onClick={() => setActiveTab('saas')}
        >
          SAAS
        </button>
        <button
          className={`flex-1 py-2 text-center rounded-lg transition-colors ${activeTab === 'self-hosted'
            ? 'bg-primary-600 text-white'
            : 'bg-gray-100 text-gray-600'
            }`}
          onClick={() => setActiveTab('self-hosted')}
        >
          Self Hosted
        </button>
      </div>

      <div className="space-y-4">
        {activeTab === 'saas' ? (
          <>
            <Button
              variant="outline"
              className="w-full justify-center"
              onClick={() => handleLogin('github')}
              disabled={isLoading}
              leftIcon={<GithubIcon className="w-5 h-5" />}
            >
              Sign in with Github
            </Button>

            <Button
              variant="outline"
              className="w-full justify-center"
              onClick={() => handleLogin('bitbucket')}
              disabled={isLoading}
              leftIcon={<BitbucketIcon className="w-5 h-5 text-blue-500" />}
            >
              Sign in with Bitbucket
            </Button>

            <Button
              variant="outline"
              className="w-full justify-center"
              onClick={() => handleLogin('azure')}
              disabled={isLoading}
              leftIcon={<AzureIcon className="w-5 h-5 text-blue-600" />}
            >
              Sign in with Azure DevOps
            </Button>

            <Button
              variant="outline"
              className="w-full justify-center"
              onClick={() => handleLogin('gitlab')}
              disabled={isLoading}
              leftIcon={<GitlabIcon className="w-5 h-5 text-orange-600" />}
            >
              Sign in with GitLab
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              className="w-full justify-center"
              onClick={() => handleLogin('gitlab')}
              disabled={isLoading}
              leftIcon={<GitlabIcon className="w-5 h-5 text-orange-600" />}
            >
              Self Hosted GitLab
            </Button>

            <Button
              variant="outline"
              className="w-full justify-center"
              disabled={isLoading}
            >
              🔑 Sign in with SSO
            </Button>
          </>
        )}
      </div>

      {error && (
        <div className="mt-4 text-sm text-red-600 text-center">
          {error}
        </div>
      )}
    </Card>
  )
}

export default Login