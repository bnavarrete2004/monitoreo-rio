import React from "react";

interface Report {
  fecha: string;
  titulo: string;
  tipo: string;
}

interface Props {
  reports: Report[];
}

export default function ReportsTable({ reports }: Props) {
  return (
    <div className="overflow-hidden rounded-lg">
      <table className="w-full">
        <thead>
          <tr className="bg-[#630dc6] text-white">
            <th className="text-left p-4 font-semibold">Fecha</th>
            <th className="text-left p-4 font-semibold">Título</th>
            <th className="text-left p-4 font-semibold">Tipo Reporte</th>
            <th className="text-left p-4 font-semibold">Archivo</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-[#f0f0f0]" : "bg-white"}>
              <td className="p-4 text-[#3a3a3a]">{report.fecha}</td>
              <td className="p-4 text-[#3a3a3a]">{report.titulo}</td>
              <td className="p-4 text-[#3a3a3a]">{report.tipo}</td>
              <td className="p-4">
                <button className="flex items-center gap-2 text-[#3a3a3a] hover:text-[#630dc6]">
                  Descargar
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
