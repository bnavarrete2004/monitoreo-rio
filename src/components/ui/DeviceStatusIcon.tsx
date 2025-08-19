// src/components/DeviceStatusIcon.tsx

import React from 'react';

interface DeviceStatusIconProps {
  isActive: boolean;
}

export function DeviceStatusIcon({ isActive }: DeviceStatusIconProps) {
  const activeColor = "#14f400";
  const inactiveColor = "#d1d5db"; // gray-300
  
  const borderColor = isActive ? activeColor : inactiveColor;
  const backgroundColor = isActive ? activeColor : "#f3f4f6"; // gray-100

  return (
    <div
      className="w-8 h-12 rounded-md border-2"
      style={{ borderColor, backgroundColor }}
    >
      <div className={`w-full h-${isActive ? '3/4' : '1/4'} bg-white rounded-sm m-0.5`}></div>
    </div>
  );
}