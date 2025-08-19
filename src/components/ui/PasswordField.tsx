// src/components/PasswordField.tsx

import React from 'react';
import { Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PasswordField() {
  // Aquí podrías agregar el estado para manejar la visibilidad de la contraseña
  // const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <Label htmlFor="password" className="text-[#000000] text-base">
        Contraseña
      </Label>
      <div className="relative">
        <Input
          id="password"
          // type={showPassword ? "text" : "password"}
          type="password"
          className="h-12 border-[#8e9494] border-2 rounded-lg bg-[#fbfcff] focus:border-[#630dc6] focus:ring-0 pr-12"
        />
        <button
          type="button"
          // onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8e9494] hover:text-[#000000] transition-colors"
        >
          <Eye size={20} />
        </button>
      </div>
    </div>
  );
}