// src/components/MapDisplay.tsx

import React from 'react';
import { MapActions } from './MapActions';
import { SensorCard } from './SensorCard';
import { SensorMarker } from './SensorMarker';

export function MapDisplay() {
  return (
    <div
      className="w-full h-[calc(100vh-80px)] bg-cover bg-center relative"
      style={{
        backgroundImage: `url('src/components/ui/pucon1.png')`, // Asegúrate de que esta ruta sea correcta
      }}
    >
      <MapActions />
      <SensorCard />
      
      {/* Marcadores de sensores posicionados absolutamente */}
      <SensorMarker style={{ top: '40.33%', left: '70%' }} />
      <SensorMarker style={{ top: '66.67%', left: '80%' }} />
    </div>
  );
}