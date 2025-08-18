// src/components/ExportButtons.tsx
import { Button } from "@/components/ui/button";
import { Copy, FileSpreadsheet, FileText, Download } from "lucide-react";

const ExportButtons = () => {
  return (
    <div className="flex gap-2 mb-6">
      <Button variant="outline" className="bg-[#8b9b9b] text-white border-none hover:bg-[#808080]">
        <Copy className="w-4 h-4 mr-2" />
        Copiar
      </Button>
      <Button variant="outline" className="bg-[#36bc01] text-white border-none hover:bg-[#01bb07]">
        <FileSpreadsheet className="w-4 h-4 mr-2" />
        Excel
      </Button>
      <Button variant="outline" className="bg-[#bc0a01] text-white border-none hover:bg-[#ed1c09]">
        <FileText className="w-4 h-4 mr-2" />
        PDF
      </Button>
      <Button variant="outline" className="bg-[#68c1c9] text-white border-none hover:bg-[#00d3c5]">
        <Download className="w-4 h-4 mr-2" />
        CSV
      </Button>
    </div>
  );
};

export default ExportButtons;