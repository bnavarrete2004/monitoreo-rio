import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ActivityReportDashboard from './components/ui/ActivityReportDashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ActivityReportDashboard />
  </StrictMode>,
)
