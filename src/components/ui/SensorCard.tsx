// src/components/SensorCard.tsx

import React from 'react';
import { Lock } from 'lucide-react';

export function SensorCard() {
  return (
    <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-sm rounded-2xl p-6 text-white min-w-[280px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Sensor 1</h3>
        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
            <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl font-bold">76%</span>
        <div className="w-8 h-8 bg-[#e6ff00] rounded-lg flex items-center justify-center">
          <Lock className="w-5 h-5 text-[#000000]" />
        </div>
      </div>

      <div className="mb-3">
        <span className="text-sm text-white/80">% de daño: </span>
        <span className="text-sm font-medium">32</span>
      </div>

      <div className="w-full bg-white/20 rounded-full h-2">
        <div className="bg-[#630dc6] h-2 rounded-full" style={{ width: '32%' }}></div>
      </div>
    </div>
  );
}