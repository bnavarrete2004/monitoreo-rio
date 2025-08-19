// src/components/EstacionesTable.tsx
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2 } from "lucide-react";
import type { Variable } from "@/types"; // Asegúrate de crear este tipo en types.ts

interface VariableTableProps {
  variables: Variable[];
}

const VariablesTable = ({ variables }: VariableTableProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#f0f0f0]">
      <table className="w-full">
        <thead className="bg-[#630dc6] text-white">
          <tr>
            <th className="px-6 py-4 text-left font-medium">id</th>
            <th className="px-6 py-4 text-left font-medium">Variable</th>
            <th className="px-6 py-4 text-left font-medium">Unidad</th>
            <th className="px-6 py-4 text-left font-medium">Tipo</th>
            <th className="px-6 py-4 text-left font-medium">Rango</th>
            <th className="px-6 py-4 text-left font-medium">Umbrales Alerta</th>
            <th className="px-6 py-4 text-left font-medium">Estación</th>
            <th className="px-6 py-4 text-left font-medium">Status</th>
            <th className="px-6 py-4 text-left font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {variables.map((variable, index) => (
            <tr
              key={variable.id}
              className={index % 2 === 0 ? "bg-white" : "bg-[#f0f0f0]"}
            >
              <td className="px-6 py-4 text-[#3a3a3a]">{variable.id}</td>
              <td className="px-6 py-4 text-[#3a3a3a]">{variable.variable}</td>
              <td className="px-6 py-4 text-[#3a3a3a]">{variable.unidad}</td>
              <td className="px-6 py-4 text-[#3a3a3a]">{variable.tipo}</td>
              <td className="px-6 py-4 text-[#3a3a3a]">{variable.rango}</td>
              <td className="px-6 py-4 text-[#3a3a3a]">{variable.umbrales_alerta}</td>
              <td className="px-6 py-4 text-[#3a3a3a]">{variable.estacion}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                    variable.status === "activo"
                      ? "bg-[#36bc01]"
                      : "bg-[#bc0a01]"
                  }`}
                >
                  {variable.status}
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

export default VariablesTable;
