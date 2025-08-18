// src/components/UsersTable.tsx
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2 } from "lucide-react";
import type { User } from "@/types"; // Importando el tipo desde el archivo types.ts

interface UsersTableProps {
  users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#f0f0f0]">
      <table className="w-full">
        <thead className="bg-[#630dc6] text-white">
          <tr>
            <th className="px-6 py-4 text-left font-medium">Id</th>
            <th className="px-6 py-4 text-left font-medium">Nombre</th>
            <th className="px-6 py-4 text-left font-medium">Apellido</th>
            <th className="px-6 py-4 text-left font-medium">Email</th>
            <th className="px-6 py-4 text-left font-medium">Teléfono</th>
            <th className="px-6 py-4 text-left font-medium">Rol</th>
            <th className="px-6 py-4 text-left font-medium">Status</th>
            <th className="px-6 py-4 text-left font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? "bg-white" : "bg-[#f0f0f0]"}>
              <td className="px-6 py-4 text-[#3a3a3a]">{user.id}</td>
              <td className="px-6 py-4 text-[#3a3a3a]">{user.nombre}</td>
              <td className="px-6 py-4 text-[#3a3a3a]">{user.apellido}</td>
              <td className="px-6 py-4 text-[#3a3a3a]">{user.email}</td>
              <td className="px-6 py-4 text-[#3a3a3a]">{user.telefono}</td>
              <td className="px-6 py-4 text-[#3a3a3a]">{user.rol}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                    user.status === "activo" ? "bg-[#36bc01]" : "bg-[#bc0a01]"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-8 h-8 p-0 border-[#68c1c9] text-[#68c1c9] hover:bg-[#68c1c9] hover:text-white bg-transparent"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-8 h-8 p-0 border-[#36bc01] text-[#36bc01] hover:bg-[#36bc01] hover:text-white bg-transparent"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-8 h-8 p-0 border-[#bc0a01] text-[#bc0a01] hover:bg-[#bc0a01] hover:text-white bg-transparent"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;