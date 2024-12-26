import { Outlet } from 'react-router-dom'
import { LogoIcon } from '@/components/common/Icons'

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center">
            <LogoIcon className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-semibold">CodeAnt AI</span>
          </div>
          <p className="mt-2 text-gray-600">
            AI-powered code analysis and improvement
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
