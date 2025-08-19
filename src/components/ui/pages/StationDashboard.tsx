import React from 'react';
import { StationHeader } from '@/components/ui/StationHeader';
import { DeviceCard } from '@/components/ui/DeviceCard';
import Header from "../Header";
import Sidebar from "../Sidebar";


// Datos de ejemplo para los dispositivos
const devices = [
  {
    name: "HydroSense pro",
    details: ["Rango: 0 – 5 m"],
    status: { text: "Operativo", color: "#14f400", isActive: true },
    damage: { level: 60, text: "mínimo", color: "#14f400" },
    showControls: true,
  },
  {
    name: "RainWatch M50",
    details: ["Rango: 0 – 500 mm", "Precisión: ±0.2 mm"],
    status: { text: "Operativo", color: "#14f400", isActive: true },
    damage: { level: 30, text: "mínimo", color: "#14f400" },
    showControls: true,
  },
  {
    name: "VeloGauge 5X",
    details: ["Rango: 0 – 500 mm", "Precisión: ±0.2 mm"],
    status: { text: "", color: "", isActive: false },
    damage: { level: 80, text: "Moderado", color: "#ffab36" },
    showControls: false,
  },
];





export default function StationDashboard() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#cbdbdb" }}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Header />
          <div className="flex">
            <Sidebar />
                <main className="flex-1 p-8">
                
              <StationHeader title="Estación 1" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {devices.map((device) => (
                  <DeviceCard key={device.name} {...device} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}