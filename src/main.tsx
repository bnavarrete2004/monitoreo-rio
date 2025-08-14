import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ActivityReportDashboard from './components/ui/pages/ActivityReportDashboard.tsx'
import HomePage from './components/ui/pages/HomePage.tsx'
import CrearUsuarioPage from './components/ui/pages/CrearUsuarioPage.tsx'
import CrearEstacionPage from './components/ui/pages/CrearEstacionPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CrearEstacionPage />
  </StrictMode>,
)
