// src/pages/LoginPage.tsx

import React from 'react';
import { Logo } from '@/components/ui/Logo';
import { LoginForm } from '@/components/ui/LoginForm';
import Header from "../Header";

// Asumiendo que ya tienes un componente Header que importa la navegación
// import { Header } from '@/components/Header';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#cbdbdb] p-4">
      { <Header /> }

      <div className="flex justify-center pt-20"> {/* Añadido padding top para compensar la ausencia del header */}
        <div className="bg-[#ffffff] rounded-3xl shadow-lg p-12 w-full max-w-md">
          <Logo />
          <h1 className="text-3xl font-bold text-[#000000] text-center mb-12">
            Iniciar Sesión
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}