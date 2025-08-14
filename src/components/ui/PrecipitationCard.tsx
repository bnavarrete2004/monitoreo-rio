import React from "react";
import { Card } from "@/components/ui/card";
import { RotateCcw, Pause, Play } from "lucide-react";

export default function PrecipitationCard() {
  return (
    <Card className="p-6 bg-[#ffffff] border-[#d9d9d9]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[#000000] font-medium">Precipitación actual</h3>
        <RotateCcw className="h-4 w-4 text-[#000000]" />
      </div>
      <div className="mb-4">
        <span className="text-3xl font-bold text-[#000000]">4</span>
        <span className="text-lg text-[#000000] ml-1">mm/h</span>
      </div>
      <div className="mb-2">
        <div className="w-full bg-[#d9d9d9] rounded-full h-2">
          <div className="bg-[#630dc6] h-2 rounded-full" style={{ width: "20%" }}></div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-[#000000]">
        <span>Estado: Moderado</span>
        <div className="flex gap-1">
          <Pause className="h-3 w-3" />
          <Play className="h-3 w-3" />
        </div>
      </div>
    </Card>
  );
}
