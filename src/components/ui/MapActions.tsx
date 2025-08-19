// src/components/MapActions.tsx

import React from 'react';
import { Plus, X } from 'lucide-react';

export function MapActions() {
  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2">
      <button className="w-12 h-12 bg-[#630dc6] rounded-xl flex items-center justify-center hover:bg-[#3f0087] transition-colors shadow-lg">
        <Plus className="w-6 h-6 text-white" />
      </button>
      <button className="w-12 h-12 bg-[#630dc6] rounded-xl flex items-center justify-center hover:bg-[#3f0087] transition-colors shadow-lg">
        <X className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}