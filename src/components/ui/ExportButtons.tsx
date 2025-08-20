// src/components/ExportButtons.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetOverlay,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Copy, FileSpreadsheet, FileText, Download, CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const ExportButtons = () => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [records, setRecords] = useState<number>(100);

  const today = new Date();

  const handleExport = (type: string) => {
    console.log("Exportando:", type, {
      registros: records,
      fechaInicio: startDate,
      fechaFin: endDate,
    });
    setOpen(false); // cerrar después de exportar
  };

  return (
    <div className="flex gap-2 mb-6">
      {["Copiar", "Excel", "PDF", "CSV"].map((type, i) => {
        const icons = [<Copy />, <FileSpreadsheet />, <FileText />, <Download />];
        const colors = [
          "bg-[#8b9b9b] hover:bg-[#808080]",
          "bg-[#36bc01] hover:bg-[#01bb07]",
          "bg-[#bc0a01] hover:bg-[#ed1c09]",
          "bg-[#68c1c9] hover:bg-[#00d3c5]",
        ];

        return (
          <Sheet key={type} open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className={`${colors[i]} text-white border-none flex items-center`}
              >
                {icons[i]}
                <span className="ml-2">{type}</span>
              </Button>
            </SheetTrigger>

            {/* Overlay más claro */}
            <SheetOverlay className="bg-black/ backdrop-blur-s" />

            <SheetContent side="left" className="w-80">
              <div className="p-6 h-full flex flex-col">
                <SheetHeader>
                  <SheetTitle>Exportar {type}</SheetTitle>
                </SheetHeader>

                <div className="mt-6 space-y-6 flex-1">
                  {/* Cantidad de registros */}
                  <div>
                    <Label htmlFor="records">Cantidad de registros</Label>
                    <Input
                      id="records"
                      type="number"
                      value={records}
                      min={1}
                      onChange={(e) => setRecords(Number(e.target.value))}
                      className="mt-2"
                    />
                  </div>

                  {/* Fecha de inicio */}
                  <div>
                    <Label>Fecha de inicio</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="justify-start text-left font-normal mt-2 w-full"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "dd/MM/yyyy") : "Elegir fecha"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Fecha de fin */}
                  <div>
                    <Label>Fecha de fin</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="justify-start text-left font-normal mt-2 w-full"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "dd/MM/yyyy") : "Elegir fecha"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          disabled={(date) => date > today} // 🚫 deshabilita fechas futuras
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Botón confirmar exportación */}
                <Button
                  className="w-full bg-[#630dc6] text-white hover:bg-[#520ba3] mt-6"
                  onClick={() => handleExport(type)}
                >
                  Confirmar exportación
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        );
      })}
    </div>
  );
};

export default ExportButtons;
