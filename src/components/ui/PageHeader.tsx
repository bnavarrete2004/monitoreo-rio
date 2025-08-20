// src/components/PageHeader.tsx
import React from "react";
import { Star } from "lucide-react"; // 👈 icono de estrella
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, buttonText, onButtonClick }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      {buttonText && (
        <Button
          onClick={onButtonClick}
          className="bg-[#630dc6] text-white flex items-center gap-2 hover:bg-[#4e0aa3] cursor-pointer"
        >
          ✨
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default PageHeader;
