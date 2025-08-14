import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import CrearVariableForm from "../CrearVariableForm";

export default function CrearVariablePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#cbdbdb" }}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-8">
              <CrearVariableForm />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
