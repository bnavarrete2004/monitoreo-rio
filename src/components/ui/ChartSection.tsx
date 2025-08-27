import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function ChartSection() {
  const [selectedOption, setSelectedOption] = useState("24 horas");

  // --- Datos para cada modo ---
  // 24 horas (cada 15 min)
  const startHour = 13;
  const startMinute = 15;
  const numPointsDay = 15;
  const timesDay = Array.from({ length: numPointsDay }, (_, i) => {
    const totalMinutes = startHour * 60 + startMinute + i * 15;
    return totalMinutes;
  });
  const labelsDay = timesDay.map((totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  });

  // Semanal
  const labelsWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  const timesWeek = labelsWeek.map((_, i) => i + 1);

  // Mensual
  const labelsMonth = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const timesMonth = labelsMonth.map((_, i) => i + 1);

  // --- Selección según opción ---
  let labels: string[] = [];
  let times: number[] = [];

  if (selectedOption === "24 horas") {
    labels = labelsDay;
    times = timesDay;
  } else if (selectedOption === "semanal") {
    labels = labelsWeek;
    times = timesWeek;
  } else if (selectedOption === "mensual") {
    labels = labelsMonth;
    times = timesMonth;
  }

  // Escala X genérica
  const minTime = times[0];
  const maxTime = times[times.length - 1];
  const width = 750;
  const offsetX = 50;
  const scaleX = (t: number) =>
    offsetX + ((t - minTime) / (maxTime - minTime)) * width;

  // Puntos del gráfico (random de ejemplo)
  const points = times.map(
    (t, i) => [scaleX(t), Math.random() * 160 + 20] as [number, number]
  );

  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 text-xl font-bold text-[#000000]">
              Acumulado {selectedOption} (mm)
              <ChevronDown className="h-4 w-4 text-[#000000]" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedOption("24 horas")}>
              24 horas
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedOption("semanal")}>
              Semanal
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedOption("mensual")}>
              Mensual
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 850 200">
          {/* Etiquetas Y */}
          <text x="20" y="20" className="text-xs fill-[#000000]">
            100
          </text>
          <text x="20" y="60" className="text-xs fill-[#000000]">
            75
          </text>
          <text x="20" y="100" className="text-xs fill-[#000000]">
            50
          </text>
          <text x="20" y="140" className="text-xs fill-[#000000]">
            25
          </text>
          <text x="20" y="180" className="text-xs fill-[#000000]">
            0
          </text>

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
