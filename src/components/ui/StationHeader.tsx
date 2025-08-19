// src/components/StationHeader.tsx

import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StationHeaderProps {
  title: string;
}

export function StationHeader({ title }: StationHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h1 className="text-3xl font-bold text-black">{title}</h1>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-gray-600">
          <Pause className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-600">
          <Play className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}