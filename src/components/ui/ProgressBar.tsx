// src/components/ProgressBar.tsx

import React from 'react';

interface ProgressBarProps {
  value: number; // 0 to 100
  color: string;
}

export function ProgressBar({ value, color }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="h-2 rounded-full"
        style={{ backgroundColor: color, width: `${value}%` }}
      ></div>
    </div>
  );
}