// src/components/MainContent.tsx
import TopNav from "./TopNav";
import PageHeader from "./PageHeader";
import ExportButtons from "./ExportButtons";
import VariablesTable from "./VariablesTable"; // Cambiar esto por VariablesTable
import type {Variable} from "@/types";
import Pagination from "./Pagination";

const TablaVariable = () => {
  const variables: Variable[] = [
    {
      id: 1,
      variable: "Nivel del agua",
      unidad: "m",
      tipo: "numérica",
      umbrales_alerta: "1.5 - 2",
      estacion: "Sensor1",
      status: "activo", 
    },
    {
      id: 2,
      variable: "--",
      unidad: "--",
      tipo: "--",
      umbrales_alerta: "--",
      estacion: "--",
      status: "inactivo",
    }
  ];

  return (
    <main className="flex-1 bg-white rounded-l-3xl">
      <div className="p-6">
        <PageHeader title="Variable" buttonText="Nuevo" />
        <ExportButtons />
        <VariablesTable variables={variables} />
        <Pagination></Pagination>
      </div>
    </main>
  );
}

export default TablaVariable;