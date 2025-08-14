import React from "react";
import { Card } from "@/components/ui/card";
import { RotateCcw, Pause, Play } from "lucide-react";

export default function RiverFlowCard() {
  return (
    <Card className="p-6 bg-[#ffffff] border-[#d9d9d9]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[#000000] font-medium">Caudal del río (m³/s)</h3>
        <RotateCcw className="h-4 w-4 text-[#000000]" />
      </div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-3xl font-bold text-[#000000]">12</span>
          <span className="text-lg text-[#000000] ml-1">m³/s</span>
        </div>
        <div className="relative w-16 h-16">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="28" stroke="#d9d9d9" strokeWidth="4" fill="none" />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="#630dc6"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${55 * 1.76} ${100 * 1.76}`}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-[#000000]">
        <span>55%: Normal</span>
        <div className="flex gap-1">
          <Pause className="h-3 w-3" />
          <Play className="h-3 w-3" />
        </div>
      </div>
    </Card>
  );
}
