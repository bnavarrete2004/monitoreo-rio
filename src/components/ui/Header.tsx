import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 border-b border-[#e7e7e7]">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#630dc6] rounded flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-[#630dc6] rounded-xs"></div>
          </div>
        </div>
        <span className="font-semibold text-[#3a3a3a]">mockup</span>
      </div>

      <nav className="flex items-center gap-8">
        <Link to="/" className="text-[#525252] hover:text-[#3a3a3a]">
          inicio
        </Link>
        <Link to="/soporte" className="text-[#525252] hover:text-[#3a3a3a]">
          soporte
        </Link>
        <Link to="/perfil" className="text-[#525252] hover:text-[#3a3a3a]">
          mi cuenta
        </Link>
        <button className="text-[#525252]">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
