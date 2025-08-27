// src/components/SensorMarker.tsx
import React from "react";

interface SensorMarkerProps {
  style: React.CSSProperties;
  color?: string; // 👈 nuevo prop opcional
  onClick?: () => void;
}

export function SensorMarker({ style, color = "#ffab36", onClick }: SensorMarkerProps) {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={style}
      onClick={onClick}
    >
      <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
           style={{ backgroundColor: color }}> {/* 👈 usa el prop color */}
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
    </div>
  );
}
