import React from "react";
import { Button } from "@/components/ui/button";

interface NewUserButtonProps {
  onClick?: () => void;
}

export default function NewUserButton({ onClick }: NewUserButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="bg-[#630dc6] hover:bg-[#450193] text-white px-6 py-2 rounded-full"
    >
      ✨ Nuevo
    </Button>
  );
}
