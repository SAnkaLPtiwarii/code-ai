import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/common/Sidebar'
import { StatsGrid } from '@/components/dashboard/Stats'

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen">
      {/* Sidebar for mobile */}
      <div className="lg:hidden">
        {sidebarOpen && (
          <div className="fixed inset-0 flex z-40">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
            <Sidebar />
          </div>
        )}
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <Sidebar />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <main className="py-6 px-4 sm:px-6 lg:px-8">
          <StatsGrid />
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
