// src/components/MainContent.tsx
import { useNavigate } from "react-router-dom";
import TopNav from "./TopNav";
import PageHeader from "./PageHeader";
import ExportButtons from "./ExportButtons";
import UsersTable from "./UsersTable";
import type { User } from "@/types";
import Pagination from "./Pagination";

const MainContent = () => {
  const navigate = useNavigate();

  const users: User[] = [
    {
      id: 1,
      nombre: "Eduardo",
      apellido: "Mardones",
      email: "eduardo@info.cl",
      telefono: "12345678",
      rol: "operador",
      status: "activo",
    },
    {
      id: 2,
      nombre: "--",
      apellido: "--",
      email: "--",
      telefono: "--",
      rol: "--",
      status: "inactivo",
    },
  ];

  return (
    <main className="flex-1 bg-white rounded-l-3xl">
      <div className="p-6">
        <PageHeader
          title="Usuarios"
          buttonText="Nuevo"
          onButtonClick={() => navigate("/crear-usuario")} // 👈 Aquí la redirección
        />
        <ExportButtons />
        <UsersTable users={users} />
        <Pagination />
      </div>
    </main>
  );
};

export default MainContent;
