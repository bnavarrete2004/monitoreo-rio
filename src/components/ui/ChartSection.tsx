import React from "react";
import { ChevronDown } from "lucide-react";

export default function ChartSection() {
  // Generador de tiempos cada 15 minutos
  const startHour = 13; // hora inicial
  const startMinute = 15; // minuto inicial
  const numPoints = 15;

  const times = Array.from({ length: numPoints }, (_, i) => {
    const totalMinutes = startHour * 60 + startMinute + i * 15;
    return totalMinutes;
  });

  // Etiquetas de hora a partir de los tiempos
  const labels = times.map((totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  });

  // Escala para transformar minutos en coordenadas X
  const minTime = times[0];
  const maxTime = times[times.length - 1];
  const width = 750; // ancho en pixeles útil del eje X
  const offsetX = 50; // margen izquierdo
  const scaleX = (t: number) => offsetX + ((t - minTime) / (maxTime - minTime)) * width;

  // Puntos del gráfico (ejemplo con valores Y random)
  const points = times.map((t, i) => [scaleX(t), Math.random() * 160 + 20] as [number, number]);

  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-xl font-bold text-[#000000]">Acumulado 24h (mm)</h3>
        <ChevronDown className="h-4 w-4 text-[#000000]" />
      </div>

      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 850 200">
          {/* Etiquetas Y */}
          <text x="20" y="20" className="text-xs fill-[#000000]">100</text>
          <text x="20" y="60" className="text-xs fill-[#000000]">75</text>
          <text x="20" y="100" className="text-xs fill-[#000000]">50</text>
          <text x="20" y="140" className="text-xs fill-[#000000]">25</text>
          <text x="20" y="180" className="text-xs fill-[#000000]">0</text>

          {/* Línea del gráfico */}
          <polyline
            fill="none"
            stroke="#630dc6"
            strokeWidth="2"
            points={points.map(([x, y]) => `${x},${y}`).join(" ")}
          />

          {/* Puntos */}
          {points.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="#630dc6" />
          ))}

          {/* Etiquetas X */}
          {times.map((t, i) => (
            <text
              key={i}
              x={scaleX(t)}
              y="195"
              className="text-xs fill-[#000000]"
              textAnchor="middle"
            >
              {labels[i]}
            </text>
          ))}
        </svg>
      </div>
    </>
  );
}
