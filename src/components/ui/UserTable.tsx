import { Checkbox } from "@/components/ui/checkbox";

interface User {
  id: number;
  nombre: string;
  apellidoPat: string;
  apellidoMat: string;
  rol: string;
  email: string;
  telefono: string;
}

interface UserTableProps {
  users: User[];
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#630dc6] text-white text-center border-b border-[#e9edf5]">
            <th className="py-3 px-4 align-middle"><Checkbox /></th>
            <th className="py-3 px-4 align-middle">#</th>
            <th className="py-3 px-4 align-middle">NOMBRE</th>
            <th className="py-3 px-4 align-middle">APELLIDO PATERNO</th>
            <th className="py-3 px-4 align-middle">APELLIDO MATERNO</th>
            <th className="py-3 px-4 align-middle">ROL</th>
            <th className="py-3 px-4 align-middle">EMAIL</th>
            <th className="py-3 px-4 align-middle">TELÉFONO</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-b hover:bg-[#f9fafc] text-center">
              <td className="py-3 px-4 align-middle"><Checkbox /></td>
              <td className="py-3 px-4 align-middle">{user.id}</td>
              <td className="py-3 px-4 align-middle">{user.nombre}</td>
              <td className="py-3 px-4 align-middle">{user.apellidoPat}</td>
              <td className="py-3 px-4 align-middle">{user.apellidoMat}</td>
              <td className="py-3 px-4 align-middle">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user.rol === "Administrador" ? "bg-[#4f5aed] text-white" : "bg-[#14804a] text-white"
                }`}>
                  {user.rol}
                </span>
              </td>
              <td className="py-3 px-4 align-middle">{user.email}</td>
              <td className="py-3 px-4 align-middle">{user.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
