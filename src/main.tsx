import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ActivityReportDashboard from './components/ui/pages/ActivityReportDashboard.tsx'
import HomePage from './components/ui/pages/HomePage.tsx'
import CrearUsuarioPage from './components/ui/pages/CrearUsuarioPage.tsx'
import CrearEstacionPage from './components/ui/pages/CrearEstacionPage.tsx'
import CrearVariablePage from './components/ui/pages/CrearVariablePage.tsx'
import UserTablePage from './components/ui/pages/UserTablePage.tsx'
import EstacionTablePage from './components/ui/pages/EstacionTablePage.tsx'
import VariableTablePage from './components/ui/pages/VariableTablePage.tsx'
import LoginPage from './components/ui/pages/login.tsx'
import MonitoringDashboard from './components/ui/pages/MonitoringDashboard.tsx'
import StationDashboard from './components/ui/pages/StationDashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StationDashboard />
  </StrictMode>,
)
