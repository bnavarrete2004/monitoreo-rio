// src/components/MapDisplay.tsx
import React, { useState } from "react";
import { MapActions } from "./MapActions";
import { SensorCard } from "./SensorCard";
import { SensorMarker } from "./SensorMarker";

// Datos de ejemplo de los sensores
// src/components/MapDisplay.tsx
const sensors = [
  { id: 1, name: "Sensor 1", value: 76, damage: 32, locked: true, color: "yellow", position: { top: "40.33%", left: "70%" } },
  { id: 2, name: "Sensor 2", value: 55, damage: 12, locked: true, color: "red", position: { top: "66.67%", left: "80%" } },
];


export function MapDisplay() {
  const [selectedSensor, setSelectedSensor] = useState<typeof sensors[0] | null>(null);

  return (
    <div
      className="w-full h-[calc(100vh-80px)] bg-cover bg-center relative"
      style={{
        backgroundImage: `url('src/components/ui/pucon1.png')`, // revisa la ruta
      }}
    >
      <MapActions />

      {/* Mostrar la tarjeta SOLO si hay un sensor seleccionado */}
      {selectedSensor && (
        <SensorCard
          name={selectedSensor.name}
          value={selectedSensor.value}
          damage={selectedSensor.damage}
          locked={selectedSensor.locked}
        />
      )}

      {/* Renderizar los marcadores */}
      {sensors.map((sensor) => (
        <SensorMarker
          key={sensor.id}
          style={sensor.position}
          color={sensor.color}   // 👈 aquí se aplica
          onClick={() => setSelectedSensor(sensor)}
        />
      ))}
    </div>
  );
}
