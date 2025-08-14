import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import UserTable from "../UserTable";

export default function UserTablePage() {

  const users = [
  { id: 1, nombre: "Carlos", apellidoPat: "Jara", apellidoMat: "Morales", rol: "Administrador", email: "carlos@gmail.com", telefono: "943094385" },
  { id: 2, nombre: "Pablo", apellidoPat: "Paredes", apellidoMat: "Molina", rol: "Operador", email: "pablo@gmail.com", telefono: "943094385" },
  { id: 3, nombre: "María", apellidoPat: "Herrera", apellidoMat: "Carrasco", rol: "Operador", email: "maria@gmail.com", telefono: "943094385" },
  { id: 4, nombre: "Juan", apellidoPat: "Muñoz", apellidoMat: "Prieto", rol: "Operador", email: "juan@gmail.com", telefono: "943094385" },
  { id: 5, nombre: "Ana", apellidoPat: "Rojas", apellidoMat: "Vega", rol: "Operador", email: "ana@gmail.com", telefono: "912345678" },
  { id: 6, nombre: "Luis", apellidoPat: "Soto", apellidoMat: "Cruz", rol: "Administrador", email: "luis@gmail.com", telefono: "987654321" },
 ];
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#cbdbdb" }}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-8">
               <UserTable users={users} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
