// src/components/TopNav.tsx
import { Users, Menu } from "lucide-react";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between p-6 border-b border-[#f0f0f0]">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-[#68c1c9] rounded-lg flex items-center justify-center">
          <Users className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <span className="text-[#3a3a3a] cursor-pointer">inicio</span>
        <span className="text-[#3a3a3a] cursor-pointer">soporte</span>
        <span className="text-[#3a3a3a] cursor-pointer">mi cuenta</span>
        <Menu className="w-6 h-6 text-[#3a3a3a] cursor-pointer" />
      </div>
    </div>
  );
};

export default TopNav;