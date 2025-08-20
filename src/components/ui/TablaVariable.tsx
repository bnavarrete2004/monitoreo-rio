// src/components/TablaVariable.tsx
import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";
import ExportButtons from "./ExportButtons";
import Pagination from "./Pagination";
import type { Variable } from "@/types"; 
import VariablesTable from "./VariablesTable";

const TablaVariable = () => {
  const navigate = useNavigate();

  const variables: Variable[] = [
    {
      id: 1,
      nombre: "Caudal",
      unidad: "m³/s",
      descripcion: "Medición de caudal en el río",
      status: "activo",
    },
    {
      id: 2,
      nombre: "--",
      unidad: "--",
      descripcion: "--",
      status: "inactivo",
    },
  ];

  return (
    <main className="flex-1 bg-white rounded-l-3xl">
      <div className="p-6">
        <PageHeader
          title="Variables"
          buttonText="Nuevo"
          onButtonClick={() => navigate("/crear-variable")} // 👈 redirige
        />
        <ExportButtons />
        <VariablesTable variables={variables} />
        <Pagination />
      </div>
    </main>
  );
};

export default TablaVariable;
