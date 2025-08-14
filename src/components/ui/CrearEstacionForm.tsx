"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

// Imports para el mapa
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Configuración del icono de Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function CrearEstacionForm() {
  const [locationCoords] = useState<[number, number]>([-39.2706178, -71.9508143]); // Pucón

  return (
    <main className="flex-1 p-8">
      <Card className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg">
        <CardContent className="p-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <p className="text-[#630dc6] text-sm mb-2">
              mi cuenta / estaciones / crear estación
            </p>
            <h1 className="text-3xl font-bold text-black">Crear Estación</h1>
          </div>

          {/* Contenedor principal en dos columnas */}
          <div className="flex gap-8">
            {/* Columna izquierda - Formulario */}
            <form className="flex-1 flex flex-col justify-between h-[500px]">
              <div className="grid grid-cols-2 gap-6">
                {/* Nombre */}
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-black font-medium">
                    Nombre
                  </Label>
                  <Input id="nombre" className="bg-gray-100 border-gray-300 rounded-lg h-12" />
                </div>

                {/* Modelo */}
                <div className="space-y-2">
                  <Label htmlFor="modelo" className="text-black font-medium">
                    Modelo
                  </Label>
                  <Input id="modelo" className="bg-gray-100 border-gray-300 rounded-lg h-12" />
                </div>

                {/* Responsable */}
                <div className="space-y-2">
                  <Label htmlFor="responsable" className="text-black font-medium">
                    Responsable
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-gray-100 border-gray-300 rounded-lg h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eduardo">Eduardo Mardones</SelectItem>
                      <SelectItem value="daniel">Daniel Villarroel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Variable Asignada */}
                <div className="space-y-2">
                  <Label htmlFor="variable" className="text-black font-medium">
                    Variable Asignada
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-gray-100 border-gray-300 rounded-lg h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="caudal">Caudal</SelectItem>
                      <SelectItem value="nivel">Nivel del agua</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Latitud */}
                <div className="space-y-2">
                  <Label htmlFor="latitud" className="text-black font-medium">
                    Latitud
                  </Label>
                  <Input id="latitud" className="bg-gray-100 border-gray-300 rounded-lg h-12" />
                </div>

                {/* Longitud */}
                <div className="space-y-2">
                  <Label htmlFor="longitud" className="text-black font-medium">
                    Longitud
                  </Label>
                  <Input id="longitud" className="bg-gray-100 border-gray-300 rounded-lg h-12" />
                </div>
              </div>

              {/* Botones */}
              <div className="flex items-center justify-between pt-8">
                <Button
                  type="button"
                  variant="link"
                  className="text-[#630dc6] hover:text-[#450193] p-0"
                >
                  Cancelar
                </Button>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="secondary"
                    className="bg-[#8e9494] hover:bg-[#3a3a3a] text-white px-6 py-2 rounded-lg"
                  >
                    Limpiar
                  </Button>
                  <Button
                    type="button"
                    className="bg-[#dfc0ff] hover:bg-[#dfc0ff]/80 text-black px-6 py-2 rounded-lg"
                  >
                    Guardar
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[#630dc6] hover:bg-[#450193] text-white px-8 py-2 rounded-lg"
                  >
                    Crear estación
                  </Button>
                </div>
              </div>
            </form>

            {/* Columna derecha - Mapa */}
            <div className="flex-1 h-[500px] rounded-lg overflow-hidden shadow">
              <MapContainer
                center={locationCoords}
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={locationCoords}>
                  <Popup>Ubicación de la nueva estación</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
