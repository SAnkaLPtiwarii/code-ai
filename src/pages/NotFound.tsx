
import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/Button'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-900">Page not found</h2>
        <p className="mt-2 text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-8 space-x-4">
          <Button onClick={() => navigate(-1)}>
            Go Back
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/')}
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound