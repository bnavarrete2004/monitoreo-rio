// src/pages/MonitoringDashboard.tsx

import React from 'react';
import Header from "../Header";
import Sidebar from "../Sidebar";
import { MapDisplay } from '@/components/ui/MapDisplay';

// Asumiendo que ya tienes un componente Header
// import { Header } from '@/components/Header';

export default function MonitoringDashboard() {
  return (
    <div className="min-h-screen bg-[#cbdbdb]">
      {<Header />}

      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <MapDisplay />
        </main>
      </div>
    </div>
  );
}