// src/components/SensorMarker.tsx

import React from 'react';

interface SensorMarkerProps {
  style: React.CSSProperties;
}

export function SensorMarker({ style }: SensorMarkerProps) {
  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={style}>
      <div className="w-8 h-8 bg-[#ffab36] rounded-full flex items-center justify-center shadow-lg">
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
    </div>
  );
}