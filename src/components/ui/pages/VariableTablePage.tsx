import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Controls from "../Controls";
import ReportsTable from "../ReportsTable";
import Pagination from "../Pagination";
import MainContent from "../MainContent";
import TablaVariable from "../TablaVariable"; // cambiar esto por TablaVariable


export default function VariableTablePage() { // cambiar por VariableTablePage
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#cbdbdb" }}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8"> 
              <TablaVariable></TablaVariable>
              
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}