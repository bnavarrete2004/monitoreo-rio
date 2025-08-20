import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetOverlay,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Copy, FileSpreadsheet, FileText, Download, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const ExportButtons = () => {
  const [openSheet, setOpenSheet] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [records, setRecords] = useState<number>(100);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const today = new Date();

  const handleExport = (type: string) => {
    console.log("Exportando:", type, {
      registros: records,
      fechaInicio: startDate,
      fechaFin: endDate,
    });

    // Cierra el Sheet
    setOpenSheet(null);

    // Configura el mensaje y abre el dialog
    setDialogMessage(`Exportación exitosa.\nEl archivo ${type} fue generado correctamente.`);
    setDialogOpen(true);
  };

  const types = ["Copiar", "Excel", "PDF", "CSV"];
  const icons = [<Copy key="copy" />, <FileSpreadsheet key="excel" />, <FileText key="pdf" />, <Download key="csv" />];
  const colors = [
    "bg-[#8b9b9b] hover:bg-[#808080]",
    "bg-[#36bc01] hover:bg-[#01bb07]",
    "bg-[#bc0a01] hover:bg-[#ed1c09]",
    "bg-[#68c1c9] hover:bg-[#00d3c5]",
  ];

  return (
    <div className="flex gap-2 mb-6">
      {types.map((type, i) => (
        <div key={type}>
          <Button
            variant="outline"
            className={`${colors[i]} text-white border-none flex items-center`}
            onClick={() => setOpenSheet(type)}
          >
            {icons[i]}
            <span className="ml-2">{type}</span>
          </Button>

          <Sheet open={openSheet === type} onOpenChange={(isOpen) => setOpenSheet(isOpen ? type : null)}>
            <SheetOverlay className="bg-black/30 backdrop-blur-sm" />
            <SheetContent side="left" className="w-80">
              <div className="p-6 h-full flex flex-col">
                <SheetHeader>
                  <SheetTitle>Exportar {type}</SheetTitle>
                </SheetHeader>

                <div className="mt-6 space-y-6 flex-1">
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
                          disabled={(date) => date > today}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <Button
                  className="w-full bg-[#630dc6] text-white hover:bg-[#520ba3] mt-6"
                  onClick={() => handleExport(type)}
                >
                  Confirmar exportación
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      ))}

      {/* Dialog de éxito */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Éxito</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>{dialogMessage}</p>
          </div>
          <DialogFooter>
            <Button 
            className="bg-[#630dc6] text-white hover:bg-[#520ba3]"
            onClick={() => setDialogOpen(false)}>Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExportButtons;
