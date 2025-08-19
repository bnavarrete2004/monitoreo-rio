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
        backgroundImage: `url('src/components/ui/rio_claro.png')`, // Asegúrate de que esta ruta sea correcta
      }}
    >
      <MapActions />
      <SensorCard />
      
      {/* Marcadores de sensores posicionados absolutamente */}
      <SensorMarker style={{ top: '33.33%', left: '50%' }} />
      <SensorMarker style={{ top: '50%', left: '33.33%' }} />
      <SensorMarker style={{ top: '66.67%', left: '40%' }} />
    </div>
  );
}