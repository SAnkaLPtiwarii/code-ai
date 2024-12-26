
import { GithubIcon, GitlabIcon, BitbucketIcon, AzureIcon } from '@/components/common/Icons'
import Button from '@/components/common/Button'
import { Provider } from '@/types/auth'

interface SSOButtonsProps {
  onLogin: (provider: Provider) => void
  isLoading?: boolean
}

const SSOButtons = ({ onLogin, isLoading }: SSOButtonsProps) => {
  const providers = [
    {
      id: 'github' as Provider,
      name: 'GitHub',
      icon: GithubIcon,
      className: 'text-gray-900'
    },
    {
      id: 'gitlab' as Provider,
      name: 'GitLab',
      icon: GitlabIcon,
      className: 'text-orange-600'
    },
    {
      id: 'bitbucket' as Provider,
      name: 'Bitbucket',
      icon: BitbucketIcon,
      className: 'text-blue-500'
    },
    {
      id: 'azure' as Provider,
      name: 'Azure DevOps',
      icon: AzureIcon,
      className: 'text-blue-600'
    }
  ]

  return (
    <div className="space-y-3">
      {providers.map((provider) => (
        <Button
          key={provider.id}
          variant="outline"
          className="w-full justify-center"
          onClick={() => onLogin(provider.id)}
          disabled={isLoading}
          leftIcon={<provider.icon className={`w-5 h-5 ${provider.className}`} />}
        >
          Sign in with {provider.name}
        </Button>
      ))}
    </div>
  )
}

export default SSOButtons