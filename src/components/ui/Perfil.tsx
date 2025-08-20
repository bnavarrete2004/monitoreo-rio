// src/components/ProfileInfo.tsx
import { User, Pencil } from "lucide-react";

export default function Perfil() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[#630dc6] rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-[#630dc6]">Mi Perfil</h2>
        </div>

        {/* Información del usuario */}
        <div className="space-y-6">
          {/* Nombre */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div>
              <p className="text-sm text-gray-500">Nombre</p>
              <p className="text-base font-medium text-gray-800">Betania</p>
            </div>
            <button className="text-[#630dc6] hover:text-[#4e0aa3]">
              <Pencil className="w-5 h-5" />
            </button>
          </div>

          {/* Apellido Paterno */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div>
              <p className="text-sm text-gray-500">Apellido Paterno</p>
              <p className="text-base font-medium text-gray-800">Navarrete</p>
            </div>
            <button className="text-[#630dc6] hover:text-[#4e0aa3]">
              <Pencil className="w-5 h-5" />
            </button>
          </div>

          {/* Apellido Materno */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div>
              <p className="text-sm text-gray-500">Apellido Materno</p>
              <p className="text-base font-medium text-gray-800">Rodríguez</p>
            </div>
            <button className="text-[#630dc6] hover:text-[#4e0aa3]">
              <Pencil className="w-5 h-5" />
            </button>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-base font-medium text-gray-800">betania.navarrete@email.com</p>
            </div>
            <button className="text-[#630dc6] hover:text-[#4e0aa3]">
              <Pencil className="w-5 h-5" />
            </button>
          </div>

          {/* Teléfono */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div>
              <p className="text-sm text-gray-500">Teléfono</p>
              <p className="text-base font-medium text-gray-800">+56 9 1234 5678</p>
            </div>
            <button className="text-[#630dc6] hover:text-[#4e0aa3]">
              <Pencil className="w-5 h-5" />
            </button>
          </div>

          {/* Rol */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Rol</p>
              <p className="text-base font-medium text-gray-800">Administrador</p>
            </div>
            <button className="text-[#630dc6] hover:text-[#4e0aa3]">
              <Pencil className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
