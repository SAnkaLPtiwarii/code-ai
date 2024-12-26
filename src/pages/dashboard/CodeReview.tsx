
import { useState } from 'react'
import { Card, CardHeader } from '@/components/common/Card'
import Button from '@/components/common/Button'
// import Input from '@/components/common/Input'
import { CodeIcon } from '@/components/common/Icons'

const CodeReview = () => {
  const [code, setCode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

  }

  return (
    <Card>
      <CardHeader
        title="AI Code Review"
        description="Get instant feedback on your code"
        action={
          <Button
            variant="outline"
            leftIcon={<CodeIcon className="w-5 h-5" />}
          >
            Upload File
          </Button>
        }
      />

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div>
          <label htmlFor="code" className="block text-sm font-medium text-gray-700">
            Code
          </label>
          <textarea
            id="code"
            rows={10}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code here..."
          />
        </div>

        <Button type="submit" className="w-full sm:w-auto">
          Start Review
        </Button>
      </form>
    </Card>
  )
}

export default CodeReview