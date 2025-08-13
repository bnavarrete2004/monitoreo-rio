import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Controls() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <span className="text-[#525252]">Mostrar</span>
        <Select defaultValue="10">
          <SelectTrigger className="w-20 border-b border-[#525252] bg-transparent">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-[#525252]">registros</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[#525252]">Buscar:</span>
        <Input
          className="w-48 border-b border-[#525252] bg-transparent border-0 border-b-2 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#630dc6]"
          placeholder=""
        />
      </div>
    </div>
  );
}
