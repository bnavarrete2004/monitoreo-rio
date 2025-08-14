import React from "react";
import { ChevronDown, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SensorControls() {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-4 mb-4">
        <Button variant="outline" className="flex items-center gap-2 bg-white border-[#d9d9d9]">
          <span className="font-bold text-xl text-[#000000]">Sensor 1</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-[#000000]">
            <Pause className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#000000]">
            <Play className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
