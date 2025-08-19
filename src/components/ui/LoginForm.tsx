// src/components/LoginForm.tsx

import React from 'react';
import { Button } from "@/components/ui/button";
import { EmailField } from './EmailField';
import { PasswordField } from './PasswordField';

export function LoginForm() {
  return (
    <form className="space-y-6">
      <EmailField />
      <PasswordField />

      <Button
        type="submit"
        className="w-full h-12 bg-[#630dc6] hover:bg-[#5a0bb3] text-white font-medium rounded-lg mt-8"
      >
        Iniciar Sesión
      </Button>

      <div className="text-center mt-6">
        <span className="text-[#8e9494]">¿Olvidaste tu contraseña? </span>
        <a href="#" className="text-[#630dc6] hover:opacity-80 transition-opacity">
          Contactar Admin
        </a>
      </div>
    </form>
  );
}