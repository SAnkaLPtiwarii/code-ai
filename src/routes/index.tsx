import { Routes, Route, Navigate } from 'react-router-dom'
import AuthLayout from '@/layouts/AuthLayout'
import DashboardLayout from '@/layouts/DashboardLayout'
import Login from '@/pages/auth/Login'
import SelfHosted from '@/pages/auth/SelfHosted'
import Repositories from '@/pages/dashboard/Repositories'
import CodeReview from '@/pages/dashboard/CodeReview'
import Settings from '@/pages/dashboard/Settings'
import NotFound from '@/pages/NotFound'
import PrivateRoute from './PrivateRoute'

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<AuthLayout />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="self-hosted" element={<SelfHosted />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="repositories" element={<Repositories />} />
          <Route path="code-review" element={<CodeReview />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
