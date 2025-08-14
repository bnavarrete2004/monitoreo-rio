import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Controls from "../Controls";
import ReportsTable from "../ReportsTable";
import Pagination from "../Pagination";

export default function ActivityReportDashboard() {
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
              <ReportsTable />
              <Pagination />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

