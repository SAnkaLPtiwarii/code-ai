import { useState } from 'react'
import { Card, CardHeader } from '@/components/common/Card'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import { useAuth } from '@/contexts/AuthContext'

const Settings = () => {
  const { user } = useAuth()
  const [email, setEmail] = useState(user?.email || '')
  const [notifications, setNotifications] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle settings update
  }

  return (
    <Card>
      <CardHeader
        title="Settings"
        description="Manage your account settings and preferences"
      />

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-700">Notifications</h3>
            <p className="text-sm text-gray-500">
              Receive notifications about your repositories
            </p>
          </div>
          <button
            type="button"
            onClick={() => setNotifications(!notifications)}
            className={`
              relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full 
              border-2 border-transparent transition-colors duration-200 ease-in-out 
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
              ${notifications ? 'bg-primary-600' : 'bg-gray-200'}
            `}
          >
            <span
              className={`
                pointer-events-none inline-block h-5 w-5 transform rounded-full 
                bg-white shadow ring-0 transition duration-200 ease-in-out
                ${notifications ? 'translate-x-5' : 'translate-x-0'}
              `}
            />
          </button>
        </div>

        <Button type="submit">
          Save Changes
        </Button>
      </form>
    </Card>
  )
}

export default Settings