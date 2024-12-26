import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  LogoIcon,
  HomeIcon,
  CodeIcon,
  CloudIcon,
  BookIcon,
  SettingsIcon,
  ChevronDownIcon
} from '@/components/common/Icons'

const Sidebar = () => {
  const location = useLocation()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navItems = [
    { name: 'Repositories', icon: HomeIcon, path: '/repositories' },
    { name: 'AI Code Review', icon: CodeIcon, path: '/code-review' },
    { name: 'Cloud Security', icon: CloudIcon, path: '/security' },
    { name: 'How to Use', icon: BookIcon, path: '/guide' },
    { name: 'Settings', icon: SettingsIcon, path: '/settings' },
  ]

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0">
      {/* Header */}
      <div className="h-16 flex items-center px-4 border-b border-gray-200">
        <Link to="/" className="flex items-center">
          <LogoIcon className="h-8 w-8" />
          <span className="ml-2 text-xl font-semibold">CodeAnt AI</span>
        </Link>
      </div>

      {/* User Dropdown */}
      <div className="p-4">
        <div className="relative">
          <button
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-50"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              <span className="truncate">UtkarshDhairyaPa...</span>
            </div>
            <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 right-0 mt-2 py-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={() => {
                  // Handle logout
                  setIsDropdownOpen(false)
                }}
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50"
              >
                Sign out
              </button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <item.icon className={`w-5 h-5 mr-3 ${isActive ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
