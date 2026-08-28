import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Equipment from './pages/Equipment'
import EquipmentCategory from './pages/EquipmentCategory'
import GovernmentSales from './pages/GovernmentSales'
import RequestQuote from './pages/RequestQuote'
import About from './pages/About'
import Contact from './pages/Contact'
import PoliciesIndex from './pages/PoliciesIndex'
import PolicyPage from './pages/PolicyPage'
import Accessibility from './pages/Accessibility'
import NotFound from './pages/NotFound'

// Code-split: the admin CRM (Supabase client, @dnd-kit/core, every admin
// page) only downloads for someone who actually navigates to /admin — see
// AdminApp.tsx. Deliberately never added to src/data/seo.ts, which is what
// keeps /admin/* out of prerendering and the sitemap.
const AdminApp = lazy(() => import('./AdminApp'))

function AdminLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-steel-900">
      <p className="font-mono text-sm uppercase tracking-widest text-gauge-400">Loading…</p>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/admin/*"
        element={
          <Suspense fallback={<AdminLoading />}>
            <AdminApp />
          </Suspense>
        }
      />

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/equipment/:slug" element={<EquipmentCategory />} />
        <Route path="/government" element={<GovernmentSales />} />
        <Route path="/quote" element={<RequestQuote />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policies" element={<PoliciesIndex />} />
        <Route path="/policies/:slug" element={<PolicyPage />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
