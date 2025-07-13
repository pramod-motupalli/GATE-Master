import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedLayout() {
  const token = localStorage.getItem('authToken')
  if (!token) return <Navigate to="/login" replace />
  return <Outlet />
}
