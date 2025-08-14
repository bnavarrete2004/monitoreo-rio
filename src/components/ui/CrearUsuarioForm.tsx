"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import PasswordInput from "./PasswordInput";

export default function CrearUsuarioForm() {
  return (
    <main className="flex-1 p-8">
      <Card className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg">
        <CardContent className="p-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <p className="text-[#630dc6] text-sm mb-2">mi cuenta / usuarios / crear usuario</p>
            <h1 className="text-3xl font-bold text-black">Crear Usuario</h1>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Nombre */}
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-black font-medium">
                  Nombre
                </Label>
                <Input id="nombre" className="bg-gray-100 border-gray-300 rounded-lg h-12" />
              </div>

              {/* Repetir Contraseña */}
              <PasswordInput id="repeat-password" label="Repetir Contraseña" />

              {/* Apellidos */}
              <div className="space-y-2">
                <Label htmlFor="apellidos" className="text-black font-medium">
                  Apellidos
                </Label>
                <Input id="apellidos" className="bg-gray-100 border-gray-300 rounded-lg h-12" />
              </div>

              {/* Rol */}
              <div className="space-y-2">
                <Label htmlFor="rol" className="text-black font-medium">
                  Rol
                </Label>
                <Select>
                  <SelectTrigger className="bg-gray-100 border-gray-300 rounded-lg h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrador</SelectItem>
                    <SelectItem value="user">Usuario</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Contraseña */}
              <PasswordInput id="password" label="Contraseña" />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-8">
              <div className="flex gap-4">
                <Button type="button" variant="link" className="text-[#630dc6] hover:text-[#450193] p-0">
                  Cancelar
                </Button>
              </div>

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
                  Crear cuenta
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
