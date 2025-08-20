import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import MainContent from "../MainContent";
import Perfil from "../Perfil";

export default function PerfilUsuarioPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#cbdbdb" }}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8">
                <Perfil></Perfil>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

