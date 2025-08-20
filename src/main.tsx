// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import ActivityReportDashboard from "./components/ui/pages/ActivityReportDashboard.tsx";
import HomePage from "./components/ui/pages/HomePage.tsx";
import CrearUsuarioPage from "./components/ui/pages/CrearUsuarioPage.tsx";
import CrearEstacionPage from "./components/ui/pages/CrearEstacionPage.tsx";
import CrearVariablePage from "./components/ui/pages/CrearVariablePage.tsx";
import UserTablePage from "./components/ui/pages/UserTablePage.tsx";
import EstacionTablePage from "./components/ui/pages/EstacionTablePage.tsx";
import VariableTablePage from "./components/ui/pages/VariableTablePage.tsx";
import LoginPage from "./components/ui/pages/login.tsx";
import MonitoringDashboard from "./components/ui/pages/MonitoringDashboard.tsx";
import StationDashboard from "./components/ui/pages/StationDashboard.tsx";
import PerfilUsuarioPage from "./components/ui/pages/PerfilUsuarioPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Login como página por defecto */}
        <Route path="/" element={<LoginPage />} />

        {/* Resto de rutas */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/activity-report" element={<ActivityReportDashboard />} />
        <Route path="/monitoring" element={<MonitoringDashboard />} />
        <Route path="/station-dashboard" element={<StationDashboard />} />
        <Route path="/users" element={<UserTablePage />} />
        <Route path="/stations" element={<EstacionTablePage />} />
        <Route path="/variables" element={<VariableTablePage />} />
        <Route path="/perfil" element={<PerfilUsuarioPage />} />

        {/* Opcionales */}
        <Route path="/crear-usuario" element={<CrearUsuarioPage />} />
        <Route path="/crear-estacion" element={<CrearEstacionPage />} />
        <Route path="/crear-variable" element={<CrearVariablePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
