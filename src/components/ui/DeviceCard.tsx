// src/components/DeviceCard.tsx

import React from 'react';
import { Play, Pause } from 'lucide-react';
import { DeviceStatusIcon } from './DeviceStatusIcon';
import { ProgressBar } from './ProgressBar';

interface DeviceCardProps {
  name: string;
  details: string[];
  status: {
    text: string;
    color: string;
    isActive: boolean;
  };
  damage: {
    level: number; // 0-100
    text: string;
    color: string;
  };
  showControls?: boolean;
}

export function DeviceCard({ name, details, status, damage, showControls = false }: DeviceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-black mb-1">{name}</h3>
          {details.map((detail, index) => (
            <p key={index} className="text-sm text-gray-600">{detail}</p>
          ))}
        </div>
        <DeviceStatusIcon isActive={status.isActive} />
      </div>

      <div className="mb-4">
        {status.text && (
            <span
              className="inline-block px-3 py-1 text-xs font-medium text-white rounded-full"
              style={{ backgroundColor: status.color }}
            >
              {status.text}
            </span>
        )}
      </div>

      <div className="mb-4">
        <ProgressBar value={damage.level} color={damage.color} />
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Daño: {damage.text}</span>
        {showControls && (
          <div className="flex gap-1">
            <Pause className="w-3 h-3" />
            <Play className="w-3 h-3" />
          </div>
        )}
      </div>
    </div>
  );
}