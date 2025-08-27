// src/components/SensorCard.tsx

import React from "react";
import { Battery } from "lucide-react";

type SensorCardProps = {
  name: string;       // Nombre del sensor
  value: number;      // Valor principal (% humedad, batería, etc.)
  damage: number;     // Porcentaje de daño
  locked?: boolean;   // Si está bloqueado o no
};

export function SensorCard({ name, value, damage, locked = false }: SensorCardProps) {
  return (
    <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-sm rounded-2xl p-6 text-white min-w-[280px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">{name}</h3>
        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
            <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Valor principal */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl font-bold">{value}%</span>
        {locked && (
          <div className="w-8 h-8 bg-[#e6ff00] rounded-lg flex items-center justify-center">
            <Battery className="w-5 h-5 text-[#000000]" />
          </div>
        )}
      </div>

      {/* % de daño */}
      <div className="mb-3">
        <span className="text-sm text-white/80">% de daño: </span>
        <span className="text-sm font-medium">{damage}</span>
      </div>

      {/* Barra de daño */}
      <div className="w-full bg-white/20 rounded-full h-2">
        <div
          className="bg-[#630dc6] h-2 rounded-full"
          style={{ width: `${damage}%` }}
        ></div>
      </div>
    </div>
  );
}
