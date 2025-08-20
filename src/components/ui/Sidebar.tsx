// src/components/Sidebar.tsx
import React from "react";
import { Home, FileText, Radio, Grid2X2, User, Router, Route } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-20 bg-[#630dc6] flex flex-col items-center py-6 gap-6">
      <Link to="/home" className="w-12 h-12 rounded-lg flex items-center justify-center text-white hover:bg-[#3f0087]">
        <Home size={20} />
      </Link>
      <Link to="/activity-report" className="w-12 h-12 rounded-lg flex items-center justify-center text-white hover:bg-[#3f0087]">
        <FileText size={20} />
      </Link>
      <Link to="/monitoring" className="w-12 h-12 rounded-lg flex items-center justify-center text-white hover:bg-[#3f0087]">
        <Radio size={20} />
      </Link>
      <Link to="/station-dashboard" className="w-12 h-12 rounded-lg flex items-center justify-center text-white hover:bg-[#3f0087]">
        <Grid2X2 size={20} />
      </Link>
      <Link to="/users" className="w-12 h-12 rounded-lg flex items-center justify-center text-white hover:bg-[#3f0087]">
        <User size={20} />
      </Link>
      <Link to="/stations" className="w-12 h-12 rounded-lg flex items-center justify-center text-white hover:bg-[#3f0087]">
        <Router size={20} />
      </Link>
      <Link to="/variables" className="w-12 h-12 rounded-lg flex items-center justify-center text-white hover:bg-[#3f0087]">
        <Route size={20} />
      </Link>
    </aside>
  );
}
