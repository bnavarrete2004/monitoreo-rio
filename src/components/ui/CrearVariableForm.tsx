"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function CrearVariableForm() {
  const [minValue, setMinValue] = useState<number | "">("");
  const [maxValue, setMaxValue] = useState<number | "">("");

  return (
    <main className="flex-1 p-8">
      <Card className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg">
        <CardContent className="p-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <p className="text-[#630dc6] text-sm mb-2">mi cuenta / variables / crear variable</p>
            <h1 className="text-3xl font-bold text-black">Crear Variable</h1>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Nombre Variable */}
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-black font-medium">
                  Nombre Variable
                </Label>
                <Input id="nombre" className="bg-gray-100 border-gray-300 rounded-lg h-12" />
              </div>

              {/* Unidad */}
              <div className="space-y-2">
                <Label htmlFor="unidad" className="text-black font-medium">
                  Unidad
                </Label>
                <Input id="unidad" className="bg-gray-100 border-gray-300 rounded-lg h-12" />
              </div>

              {/* Tipo */}
              <div className="space-y-2">
                <Label htmlFor="tipo" className="text-black font-medium">
                  Tipo
                </Label>
                <Input id="tipo" className="bg-gray-100 border-gray-300 rounded-lg h-12" />
              </div>

              {/* Rango - Popover */}
              <div className="space-y-2">
                <Label htmlFor="rango" className="text-black font-medium">
                  Rango
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button className="w-full bg-gray-100 border-gray-300 rounded-lg h-12 text-black text-left">
                      {minValue !== "" && maxValue !== "" 
                        ? `${minValue} - ${maxValue}` 
                        : "Definir rango"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 flex flex-col gap-2">
                    <Label htmlFor="minimo">Mínimo</Label>
                    <Input
                      id="minimo"
                      type="number"
                      value={minValue}
                      onChange={(e) => setMinValue(Number(e.target.value))}
                      className="h-10"
                    />
                    <Label htmlFor="maximo">Máximo</Label>
                    <Input
                      id="maximo"
                      type="number"
                      value={maxValue}
                      onChange={(e) => setMaxValue(Number(e.target.value))}
                      className="h-10"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Estación */}
              <div className="space-y-2">
                <Label htmlFor="estacion" className="text-black font-medium">
                  Estación
                </Label>
                <Select>
                  <SelectTrigger className="bg-gray-100 border-gray-300 rounded-lg h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="norte">Estación Norte</SelectItem>
                    <SelectItem value="sur">Estación Sur</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-8">
              <div className="flex gap-4">
                <Button type="button" variant="link" className="text-[#630dc6] hover:text-[#450193] p-0">
                  Cancelar
                </Button>
              </div>

              <div className="flex gap-4">
                <Button type="button" variant="secondary" className="bg-[#8e9494] hover:bg-[#3a3a3a] text-white px-6 py-2 rounded-lg">
                  Limpiar
                </Button>
                <Button type="button" className="bg-[#dfc0ff] hover:bg-[#dfc0ff]/80 text-black px-6 py-2 rounded-lg">
                  Guardar
                </Button>
                <Button type="submit" className="bg-[#630dc6] hover:bg-[#450193] text-white px-8 py-2 rounded-lg">
                  Crear variable
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
