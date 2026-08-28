import { Routes, Route } from 'react-router-dom'
import { AdminAuthProvider } from './lib/AdminAuthContext'
import AdminRoute from './components/admin/AdminRoute'
import AdminLayout from './components/admin/AdminLayout'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import CompaniesList from './pages/admin/CompaniesList'
import CompanyDetail from './pages/admin/CompanyDetail'
import ContactsList from './pages/admin/ContactsList'
import ContactDetail from './pages/admin/ContactDetail'
import DealsPipeline from './pages/admin/DealsPipeline'
import TasksView from './pages/admin/TasksView'
import QuoteRequestsList from './pages/admin/QuoteRequestsList'

// Everything the admin CRM needs (Supabase client, @dnd-kit/core, every
// admin page) lives behind this one module, which src/App.tsx loads via
// React.lazy(() => import('./AdminApp')). That keeps the public marketing
// bundle free of admin-only weight — a visitor who never touches /admin
// never downloads any of it.
export default function AdminApp() {
  return (
    <AdminAuthProvider>
      <Routes>
        <Route path="login" element={<AdminLogin />} />
        <Route
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="quote-requests" element={<QuoteRequestsList />} />
          <Route path="companies" element={<CompaniesList />} />
          <Route path="companies/:id" element={<CompanyDetail />} />
          <Route path="contacts" element={<ContactsList />} />
          <Route path="contacts/:id" element={<ContactDetail />} />
          <Route path="deals" element={<DealsPipeline />} />
          <Route path="tasks" element={<TasksView />} />
        </Route>
      </Routes>
    </AdminAuthProvider>
  )
}
