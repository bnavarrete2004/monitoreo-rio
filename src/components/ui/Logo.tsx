// src/components/Logo.tsx

import React from 'react';

export function Logo() {
  return (
    <div className="flex justify-center mb-8">
      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M8 32L32 8M8 8L32 32" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="20" r="15" stroke="#3b82f6" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  );
}