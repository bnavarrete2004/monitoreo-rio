import React from "react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {/* Flechas dobles atrás */}
      <button className="w-8 h-8 flex items-center justify-center text-[#8b9b9b] hover:text-[#630dc6]">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="11,17 6,12 11,7" />
          <polyline points="18,17 13,12 18,7" />
        </svg>
      </button>

      {/* Flecha atrás */}
      <button className="w-8 h-8 flex items-center justify-center text-[#8b9b9b] hover:text-[#630dc6]">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6" />
        </svg>
      </button>

      {/* Números */}
      <button className="w-8 h-8 flex items-center justify-center bg-[#630dc6] text-white rounded">1</button>
      {[2, 3, 4, 5, 6].map((n) => (
        <button key={n} className="w-8 h-8 flex items-center justify-center text-[#8b9b9b] hover:text-[#630dc6]">
          {n}
        </button>
      ))}
      <span className="text-[#8b9b9b]">...</span>
      <button className="w-8 h-8 flex items-center justify-center text-[#8b9b9b] hover:text-[#630dc6]">35</button>

      {/* Flecha adelante */}
      <button className="w-8 h-8 flex items-center justify-center text-[#8b9b9b] hover:text-[#630dc6]">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,18 15,12 9,6" />
        </svg>
      </button>

      {/* Flechas dobles adelante */}
      <button className="w-8 h-8 flex items-center justify-center text-[#8b9b9b] hover:text-[#630dc6]">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="13,17 18,12 13,7" />
          <polyline points="6,17 11,12 6,7" />
        </svg>
      </button>
    </div>
  );
}
