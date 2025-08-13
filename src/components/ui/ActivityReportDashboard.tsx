import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Controls from "./Controls";
import ReportsTable from "./ReportsTable";
import Pagination from "./Pagination";

export default function ActivityReportDashboard() {
  const reports = [
    { fecha: "04/07/2025 04:02 PM", titulo: "Monitoreo diario del Río Claro", tipo: "RCNR" },
    { fecha: "04/07/2025 04:01 PM", titulo: "Informe semanal de nivel y riesgo hídrico", tipo: "RCNR" },
    { fecha: "19/06/2025 06:13 PM", titulo: "Resumen mensual de actividad hidrológica", tipo: "RCNR" },
    { fecha: "06/06/2025 05:10 PM", titulo: "Evaluación post-lluvia torrencial", tipo: "RCNR" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#cbdbdb" }}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8">
              <h1 className="text-3xl font-bold text-[#000000] mb-8">Reporte de Actividad</h1>
              <Controls />
              <ReportsTable reports={reports} />
              <Pagination />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
