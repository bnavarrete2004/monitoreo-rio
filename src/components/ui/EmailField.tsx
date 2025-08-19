// src/components/EmailField.tsx

import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EmailField() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email" className="text-[#000000] text-base">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        className="h-12 border-[#8e9494] border-2 rounded-lg bg-[#fbfcff] focus:border-[#630dc6] focus:ring-0"
      />
    </div>
  );
}