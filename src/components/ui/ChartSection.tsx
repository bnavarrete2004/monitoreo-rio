import React from "react";
import { ChevronDown } from "lucide-react";

export default function ChartSection() {
  const points = [
    [50, 120],
    [100, 40],
    [150, 80],
    [200, 60],
    [250, 40],
    [300, 120],
    [350, 180],
    [400, 20],
    [450, 100],
    [500, 120],
    [550, 80],
    [600, 140],
    [650, 120],
    [700, 60],
    [750, 140],
  ];

  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-xl font-bold text-[#000000]">Acumulado 24h (mm)</h3>
        <ChevronDown className="h-4 w-4 text-[#000000]" />
      </div>

      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 800 200">
          <text x="20" y="20" className="text-xs fill-[#000000]">100</text>
          <text x="20" y="60" className="text-xs fill-[#000000]">75</text>
          <text x="20" y="100" className="text-xs fill-[#000000]">50</text>
          <text x="20" y="140" className="text-xs fill-[#000000]">25</text>
          <text x="20" y="180" className="text-xs fill-[#000000]">0</text>

          <polyline
            fill="none"
            stroke="#630dc6"
            strokeWidth="2"
            points={points.map(([x, y]) => `${x},${y}`).join(" ")}
          />

          {points.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="#630dc6" />
          ))}

          {Array.from({ length: 15 }, (_, i) => (
            <text key={i} x={50 + i * 47} y="195" className="text-xs fill-[#000000]" textAnchor="middle">
              Text
            </text>
          ))}
        </svg>
      </div>
    </>
  );
}
