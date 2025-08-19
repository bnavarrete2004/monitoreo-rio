// src/components/MainContent.tsx
import TopNav from "./TopNav";
import PageHeader from "./PageHeader";
import ExportButtons from "./ExportButtons";
import EstacionesTable from "./EstacionesTable";
import type {Estacion} from "@/types";
import Pagination from "./Pagination";

const TablaEstacion = () => {
  const estaciones: Estacion[] = [
    {
      id: 1,
      nombre: "Sensor1",
      modelo: "HighWater",
      longitud: "1.77° E",
      latitud: "23.63° S",
      responsable: "Eduardo Mardones",
      status: "activo", 
    },
        {
      id: 2,
      nombre: "--",
      modelo: "--",
      longitud: "--",
      latitud: "--",
      responsable: "--",
      status: "inactivo", 
    },
  ];

  return (
    <main className="flex-1 bg-white rounded-l-3xl">
      <div className="p-6">
        <PageHeader title="Estación" buttonText="Nuevo" />
        <ExportButtons />
        <EstacionesTable estaciones={estaciones} />
        <Pagination></Pagination>
      </div>
    </main>
  );
}

export default TablaEstacion;